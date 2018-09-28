import { OktaService } from './services/okta.service';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';


/* 
  Step 2: Once Okta Service is created to make use of Okta's Sign In Widget,
  use it in App's Component to Show the Sign-In Widget for Login & Logout 
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user;
  oktaSignIn;

  /* 
  Using Angular’s ChangeDetectorRef is necessary to manually trigger the change detector 
  and let the view know that variables have changed.
  */
  constructor(private oktaService: OktaService, private changeDetectorRef: ChangeDetectorRef) {
    this.oktaSignIn = oktaService.getWidget();
  }

  showLogin() {
    this.oktaSignIn.renderEl({el: '#okta-login-container'}, (response) => {
      if (response.status === 'SUCCESS') {
        this.user = response.claims.email;
        this.oktaSignIn.remove();
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  ngOnInit() {
    this.oktaSignIn.session.get((response) => {
      if (response.status !== 'INACTIVE') {
        this.user = response.login;
        response
        this.changeDetectorRef.detectChanges();
      } else {
        this.showLogin();
      }
    });
  }

  logout() {
    this.oktaSignIn.signOut(() => {
      this.user = undefined;
      this.changeDetectorRef.detectChanges();
      this.showLogin();
    });
  }

}

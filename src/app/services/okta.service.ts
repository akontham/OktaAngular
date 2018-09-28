import { oktaConfig } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import * as OktaSignIn from "@okta/okta-signin-widget";

/* Step 1: This Service Integrates Okta's Sign-In Widget in our Angular Project
 We make use of Okta's Sign-In Widget for an easily customizable login view.
 Install Okta Sign-In Widget using npm : npm install @okta/okta-signin-widget */
@Injectable({
  providedIn: "root"
})
export class OktaService {
  widget;

  constructor() {
    this.widget = new OktaSignIn(oktaConfig);
  }

  getWidget() {
    return this.widget;
  }
}

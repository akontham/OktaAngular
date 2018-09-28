// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const config = {
  //baseUrl: 'https://oath-qa.oktapreview.com',
  baseUrl: 'https://dev-600898.oktapreview.com',
  clientId: '0oagdk73hysStoA5r0h7',
  redirectUri: 'http://localhost:4200',
  scope: 'openid profile email',
  //issuer: 'https://oath-qa.oktapreview.com',
  issuer: 'https://dev-600898.oktapreview.com',
  // logo: '//logo.clearbit.com/okta.com',
  authParams: {
    // responseType: ['id_token', 'token'],
    // scopes: ['openid', 'email', 'profile'],
    issuer: 'default'
  }
  // features: {
  //   // Used to enable registration feature on the widget.
  //   // https://github.com/okta/okta-signin-widget#feature-flags
  //    registration: true // REQUIRED
  // }
};

export const oktaConfig = {
  baseUrl: 'https://dev-600898.oktapreview.com',
  clientId: '0oagdk73hysStoA5r0h7',
  redirectUri: 'http://localhost:4200',
  logo: 'https://ok4static.oktacdn.com/assets/img/logos/okta-logo.00b28e552573899e15fa6e77278759d5.png',
  authParams: {
    issuer: 'default'
  }
};

export const server = 'https://localhost:44359';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-u8mhe02m.us.auth0.com',
  client_id: 'xy38QjRBHMLy8ZXlD8yYUEeed2CpWTA1',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};

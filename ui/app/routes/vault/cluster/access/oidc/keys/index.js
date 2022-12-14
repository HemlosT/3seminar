import Route from '@ember/routing/route';
export default class OidcKeysRoute extends Route {
  model() {
    return this.store.query('oidc/key', {}).catch((err) => {
      if (err.httpStatus === 404) {
        return [];
      } else {
        throw err;
      }
    });
  }
}

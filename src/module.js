export default class Module {
  constructor(name, { api = {}, actions = {}, reducers = null, routes = null } = {}) {
    if (!name) {
      const message = 'Name is required when creating a new module.';
      throw new Error(message);
    }

    this.loaded = false;
    this.name = name;
    this.actions = actions;
    this.api = api;
    this.reducers = reducers;
    this.routes = routes;
  }

  load(context, actions) {}
}

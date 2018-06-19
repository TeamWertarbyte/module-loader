import App from './app';
import Module from './module';

export const createApp = (...args) => new App(...args);
export const createModule = (...args) => new Module(...args);

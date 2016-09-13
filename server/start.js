// Disable styles on server
// TODO: check if this is still needed with webpack-hot-middleware
require.extensions['.css'] = function() { return null }
require.extensions['.scss'] = function() { return null }

// Global application config
global.__DEV__    = process.env.NODE_ENV !== 'production';
global.__PROD__   = process.env.NODE_ENV === 'production';
global.__CLIENT__ = false;
global.__SERVER__ = true;

// Load server
require('./index');

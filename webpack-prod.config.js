const configBuilder = require('./webpack-config-builder');
module.exports = configBuilder.getWebpackConfig(configBuilder.ENV_PRODUCTION);

var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../app/schema/schema.json');

module.exports = getbabelRelayPlugin(schema.data);

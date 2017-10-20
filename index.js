module.exports = require('shimaore-pouchdb-core')
  .plugin( require('pouchdb-adapter-http') )
  .plugin( require('pouchdb-mapreduce') );

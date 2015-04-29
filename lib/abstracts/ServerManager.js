/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var Transaction = kurentoClient.TransactionsManager.Transaction;

var MediaObject = require('./MediaObject');


function noop(error) {
  if (error) console.trace(error);
};


/**
 * @classdesc
 *  This is a standalone object for managing the MediaServer
 *
 * @abstract
 * @extends module:core/abstracts.MediaObject
 *
 * @constructor module:core/abstracts.ServerManager
 *
 * @fires {@link module:core#event:ObjectCreated ObjectCreated}
 * @fires {@link module:core#event:ObjectDestroyed ObjectDestroyed}
 */
function ServerManager(){
  ServerManager.super_.call(this);
};
inherits(ServerManager, MediaObject);


//
// Public properties
//

/**
 * Server information, version, modules, factories, etc
 *
 * @alias module:core/abstracts.ServerManager#getInfo
 *
 * @param {module:core/abstracts.ServerManager~getInfoCallback} [callback]
 *
 * @return {external:Promise}
 */
ServerManager.prototype.getInfo = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getInfo', callback);
};
/**
 * @callback module:core/abstracts.ServerManager~getInfoCallback
 * @param {external:Error} error
 * @param {module:core/complexTypes.ServerInfo} result
 */

/**
 * Metadata stored in the server
 *
 * @alias module:core/abstracts.ServerManager#getMetadata
 *
 * @param {module:core/abstracts.ServerManager~getMetadataCallback} [callback]
 *
 * @return {external:Promise}
 */
ServerManager.prototype.getMetadata = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getMetadata', callback);
};
/**
 * @callback module:core/abstracts.ServerManager~getMetadataCallback
 * @param {external:Error} error
 * @param {external:String} result
 */

/**
 * All the pipelines available in the server
 *
 * @alias module:core/abstracts.ServerManager#getPipelines
 *
 * @param {module:core/abstracts.ServerManager~getPipelinesCallback} [callback]
 *
 * @return {external:Promise}
 */
ServerManager.prototype.getPipelines = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getPipelines', function(error, result)
  {
    if (error) return callback(error);

    this.emit('_describe', result, callback);
  });
};
/**
 * @callback module:core/abstracts.ServerManager~getPipelinesCallback
 * @param {external:Error} error
 * @param {module:core.MediaPipeline} result
 */

/**
 * All active sessions in the server
 *
 * @alias module:core/abstracts.ServerManager#getSessions
 *
 * @param {module:core/abstracts.ServerManager~getSessionsCallback} [callback]
 *
 * @return {external:Promise}
 */
ServerManager.prototype.getSessions = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getSessions', callback);
};
/**
 * @callback module:core/abstracts.ServerManager~getSessionsCallback
 * @param {external:Error} error
 * @param {external:String} result
 */


/**
 * @alias module:core/abstracts.ServerManager.constructorParams
 */
ServerManager.constructorParams = {};

/**
 * @alias module:core/abstracts.ServerManager.events
 *
 * @extends module:core/abstracts.MediaObject.events
 */
ServerManager.events = MediaObject.events.concat(['ObjectCreated', 'ObjectDestroyed']);


/**
 * Checker for {@link core/abstracts.ServerManager}
 *
 * @memberof module:core/abstracts
 *
 * @param {external:String} key
 * @param {module:core/abstracts.ServerManager} value
 */
function checkServerManager(key, value)
{
  if(!(value instanceof ServerManager))
    throw ChecktypeError(key, ServerManager, value);
};


module.exports = ServerManager;

ServerManager.check = checkServerManager;
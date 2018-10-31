import {NotSetValue} from './constants';

/**
 * Error raised when no value has been set for a key/name.
        
    A key/name's value is considered not set if its corresponding entity is not found at all
    or its value is `constants.NOT_SET_VALUE`.

* @param key The key for which 'no' value has been set 
 */
export class ValueNotSetError extends Error{
    constructor(key: String) {
        let message = `No value has been set for the key/name: ${key}` +
        `A dummy value: '${NotSetValue}' has been created for this key/name ` +
        'Go to the Datastore Viewer in the console for your project' +
        `on App Engine, look up the GaeEnvSetting entity with name=${key} ` +
        'and update its value'
        super(message);
    }
}

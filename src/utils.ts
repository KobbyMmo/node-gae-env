import {DefaultGAENamespace} from './constants';
/**
 * Set the current GAE namespace.
 * 
 * Currently, the google-cloud-node library does not provide any APIs
 * for accessing namespaces in NodeJS on Google App Engine;
 * this function does nothing at the moment.
 * 
 * For more info about namespaces see: 
 * 
 * @param namespace The namespace to be set
 * @returns The previously set namespace
 */
export function setGaeNamespace(namespace: String): String  {
    const previousNamespace = ''; // get the currently set namespace
    // set the current namespace to the new one

    return previousNamespace;
}

/**
 * Execute a function in the context of a namespace on GAE
 * @param func The function to be executed
 * @param namespace The namespace in which context the function must be executed
 * @param ...args Any other args will be passed to the function to be executed,
 *  in the same order as they appear
 */
export function runInNamespace(func: Function, namespace: String ) {
    // extract the extra arguments. We will pass them to func
    const funcArgs = [];
    for(let i=2; i < arguments.length; i++)
        funcArgs.push(arguments[i]);

    // set the current namespace to the new one
    const previousNamespace = setGaeNamespace(namespace);
    try {
        // execute the function (with the provided extra params),
        return func(...funcArgs); //    returning any output to the caller
    }
    finally{
        // set the namespace back to what was previously set
        setGaeNamespace(previousNamespace);
    }
}
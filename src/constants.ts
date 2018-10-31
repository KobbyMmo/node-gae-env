/**
 * In the GAE console, the Cloud Datastore Viewer does not list models for which there are no entities.
As such, gae_env initialises itself by adding a dummy setting.
The name of this setting is INIT_KEY and it's value will be NOT_SET_VALUE.
This way, users can easily find the GaeEnvSetting model in the Datastore viewer.
 */
const InitKey = '___INIT_KEY___';

/**
 * The value set for a name, when it is not found.
    This way, when a name's value is NOT_SET_VALUE, it is still considered as not found.
    Initialising 'not found' settings to this value allows users to easily find the setting in the
  Cloud Datastore viewer in the console and update it
 */
const NotSetValue = '___NOT_SET___';

/**
 * Google App Engine supports namespaces. The default is an empty string.
 * For more info, see https://cloud.google.com/appengine/docs/standard/python/multitenancy/
 */
const DefaultGAENamespace = ''

export {
    InitKey,
    NotSetValue,
    DefaultGAENamespace
};
import Raven from 'raven-js';

// Required for logging with sentry error that occur within try-catch blocks
export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context,
  });
  /*eslint no-console:0*/
  // window.console && console.error && console.error(ex);
}

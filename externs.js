/**
 * Schedules a callback to run when the browser is idle.
 * @param {function(!IdleDeadline)} callback Called when the browser is idle.
 * @param {number|IdleCallbackOptions=} opt_options If set, gives the browser a time in ms by which
 *     it must execute the callback. No timeout enforced otherwise.
 * @return {number} A handle that can be used to cancel the scheduled callback.
 */
function requestIdleCallback(callback, opt_options) {}

/**
 * Cancels a callback scheduled to run when the browser is idle.
 * @param {number} handle The handle returned by `requestIdleCallback` for
 *     the scheduled callback to cancel.
 * @return {undefined}
 */
function cancelIdleCallback(handle) {}

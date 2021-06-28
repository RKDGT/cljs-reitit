["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/listenable.js"],"~:js","goog.provide(\"goog.events.Listenable\");\ngoog.provide(\"goog.events.ListenableKey\");\ngoog.require(\"goog.events.EventId\");\ngoog.requireType(\"goog.events.EventLike\");\ngoog.events.Listenable = function() {\n};\ngoog.events.Listenable.IMPLEMENTED_BY_PROP = \"closure_listenable_\" + (Math.random() * 1e6 | 0);\ngoog.events.Listenable.addImplementation = function(cls) {\n  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;\n};\ngoog.events.Listenable.isImplementedBy = function(obj) {\n  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);\n};\ngoog.events.Listenable.prototype.listen = function(type, listener, opt_useCapture, opt_listenerScope) {\n};\ngoog.events.Listenable.prototype.listenOnce = function(type, listener, opt_useCapture, opt_listenerScope) {\n};\ngoog.events.Listenable.prototype.unlisten = function(type, listener, opt_useCapture, opt_listenerScope) {\n};\ngoog.events.Listenable.prototype.unlistenByKey = function(key) {\n};\ngoog.events.Listenable.prototype.dispatchEvent = function(e) {\n};\ngoog.events.Listenable.prototype.removeAllListeners = function(opt_type) {\n};\ngoog.events.Listenable.prototype.getParentEventTarget = function() {\n};\ngoog.events.Listenable.prototype.fireListeners = function(type, capture, eventObject) {\n};\ngoog.events.Listenable.prototype.getListeners = function(type, capture) {\n};\ngoog.events.Listenable.prototype.getListener = function(type, listener, capture, opt_listenerScope) {\n};\ngoog.events.Listenable.prototype.hasListener = function(opt_type, opt_capture) {\n};\ngoog.events.ListenableKey = function() {\n};\ngoog.events.ListenableKey.counter_ = 0;\ngoog.events.ListenableKey.reserveKey = function() {\n  return ++goog.events.ListenableKey.counter_;\n};\ngoog.events.ListenableKey.prototype.src;\ngoog.events.ListenableKey.prototype.type;\ngoog.events.ListenableKey.prototype.listener;\ngoog.events.ListenableKey.prototype.capture;\ngoog.events.ListenableKey.prototype.handler;\ngoog.events.ListenableKey.prototype.key;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview An interface for a listenable JavaScript object.\n */\n\ngoog.provide('goog.events.Listenable');\ngoog.provide('goog.events.ListenableKey');\n/** @suppress {extraRequire} */\ngoog.require('goog.events.EventId');\n\ngoog.requireType('goog.events.EventLike');\n\n\n/**\n * A listenable interface. A listenable is an object with the ability\n * to dispatch/broadcast events to \"event listeners\" registered via\n * listen/listenOnce.\n *\n * The interface allows for an event propagation mechanism similar\n * to one offered by native browser event targets, such as\n * capture/bubble mechanism, stopping propagation, and preventing\n * default actions. Capture/bubble mechanism depends on the ancestor\n * tree constructed via `#getParentEventTarget`; this tree\n * must be directed acyclic graph. The meaning of default action(s)\n * in preventDefault is specific to a particular use case.\n *\n * Implementations that do not support capture/bubble or can not have\n * a parent listenable can simply not implement any ability to set the\n * parent listenable (and have `#getParentEventTarget` return\n * null).\n *\n * Implementation of this class can be used with or independently from\n * goog.events.\n *\n * Implementation must call `#addImplementation(implClass)`.\n *\n * @interface\n * @see goog.events\n * @see http://www.w3.org/TR/DOM-Level-2-Events/events.html\n */\ngoog.events.Listenable = function() {};\n\n\n/**\n * An expando property to indicate that an object implements\n * goog.events.Listenable.\n *\n * See addImplementation/isImplementedBy.\n *\n * @type {string}\n * @const\n */\ngoog.events.Listenable.IMPLEMENTED_BY_PROP =\n    'closure_listenable_' + ((Math.random() * 1e6) | 0);\n\n\n/**\n * Marks a given class (constructor) as an implementation of\n * Listenable, so that we can query that fact at runtime. The class\n * must have already implemented the interface.\n * @param {function(new:goog.events.Listenable,...)} cls The class constructor.\n *     The corresponding class must have already implemented the interface.\n */\ngoog.events.Listenable.addImplementation = function(cls) {\n  'use strict';\n  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;\n};\n\n\n/**\n * @param {?Object} obj The object to check.\n * @return {boolean} Whether a given instance implements Listenable. The\n *     class/superclass of the instance must call addImplementation.\n */\ngoog.events.Listenable.isImplementedBy = function(obj) {\n  'use strict';\n  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);\n};\n\n\n/**\n * Adds an event listener. A listener can only be added once to an\n * object and if it is added again the key for the listener is\n * returned. Note that if the existing listener is a one-off listener\n * (registered via listenOnce), it will no longer be a one-off\n * listener after a call to listen().\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\n *     method.\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\n *     (defaults to false).\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {!goog.events.ListenableKey} Unique key for the listener.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.listen = function(\n    type, listener, opt_useCapture, opt_listenerScope) {};\n\n\n/**\n * Adds an event listener that is removed automatically after the\n * listener fired once.\n *\n * If an existing listener already exists, listenOnce will do\n * nothing. In particular, if the listener was previously registered\n * via listen(), listenOnce() will not turn the listener into a\n * one-off listener. Similarly, if there is already an existing\n * one-off listener, listenOnce does not modify the listeners (it is\n * still a once listener).\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\n *     method.\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\n *     (defaults to false).\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {!goog.events.ListenableKey} Unique key for the listener.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.listenOnce = function(\n    type, listener, opt_useCapture, opt_listenerScope) {};\n\n\n/**\n * Removes an event listener which was added with listen() or listenOnce().\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\n *     method.\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\n *     (defaults to false).\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call\n *     the listener.\n * @return {boolean} Whether any listener was removed.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.unlisten = function(\n    type, listener, opt_useCapture, opt_listenerScope) {};\n\n\n/**\n * Removes an event listener which was added with listen() by the key\n * returned by listen().\n *\n * @param {!goog.events.ListenableKey} key The key returned by\n *     listen() or listenOnce().\n * @return {boolean} Whether any listener was removed.\n */\ngoog.events.Listenable.prototype.unlistenByKey = function(key) {};\n\n\n/**\n * Dispatches an event (or event like object) and calls all listeners\n * listening for events of this type. The type of the event is decided by the\n * type property on the event object.\n *\n * If any of the listeners returns false OR calls preventDefault then this\n * function will return false.  If one of the capture listeners calls\n * stopPropagation, then the bubble listeners won't fire.\n *\n * @param {?goog.events.EventLike} e Event object.\n * @return {boolean} If anyone called preventDefault on the event object (or\n *     if any of the listeners returns false) this will also return false.\n */\ngoog.events.Listenable.prototype.dispatchEvent = function(e) {};\n\n\n/**\n * Removes all listeners from this listenable. If type is specified,\n * it will only remove listeners of the particular type. otherwise all\n * registered listeners will be removed.\n *\n * @param {string|!goog.events.EventId=} opt_type Type of event to remove,\n *     default is to remove all types.\n * @return {number} Number of listeners removed.\n */\ngoog.events.Listenable.prototype.removeAllListeners = function(opt_type) {};\n\n\n/**\n * Returns the parent of this event target to use for capture/bubble\n * mechanism.\n *\n * NOTE(chrishenry): The name reflects the original implementation of\n * custom event target (`goog.events.EventTarget`). We decided\n * that changing the name is not worth it.\n *\n * @return {?goog.events.Listenable} The parent EventTarget or null if\n *     there is no parent.\n */\ngoog.events.Listenable.prototype.getParentEventTarget = function() {};\n\n\n/**\n * Fires all registered listeners in this listenable for the given\n * type and capture mode, passing them the given eventObject. This\n * does not perform actual capture/bubble. Only implementors of the\n * interface should be using this.\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The type of the\n *     listeners to fire.\n * @param {boolean} capture The capture mode of the listeners to fire.\n * @param {EVENTOBJ} eventObject The event object to fire.\n * @return {boolean} Whether all listeners succeeded without\n *     attempting to prevent default behavior. If any listener returns\n *     false or called goog.events.Event#preventDefault, this returns\n *     false.\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.fireListeners = function(\n    type, capture, eventObject) {};\n\n\n/**\n * Gets all listeners in this listenable for the given type and\n * capture mode.\n *\n * @param {string|!goog.events.EventId} type The type of the listeners to fire.\n * @param {boolean} capture The capture mode of the listeners to fire.\n * @return {!Array<!goog.events.ListenableKey>} An array of registered\n *     listeners.\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.getListeners = function(type, capture) {};\n\n\n/**\n * Gets the goog.events.ListenableKey for the event or null if no such\n * listener is in use.\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The name of the event\n *     without the 'on' prefix.\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener The\n *     listener function to get.\n * @param {boolean} capture Whether the listener is a capturing listener.\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\n *     listener.\n * @return {?goog.events.ListenableKey} the found listener or null if not found.\n * @template SCOPE,EVENTOBJ\n */\ngoog.events.Listenable.prototype.getListener = function(\n    type, listener, capture, opt_listenerScope) {};\n\n\n/**\n * Whether there is any active listeners matching the specified\n * signature. If either the type or capture parameters are\n * unspecified, the function will match on the remaining criteria.\n *\n * @param {string|!goog.events.EventId<EVENTOBJ>=} opt_type Event type.\n * @param {boolean=} opt_capture Whether to check for capture or bubble\n *     listeners.\n * @return {boolean} Whether there is any active listeners matching\n *     the requested type and/or capture phase.\n * @template EVENTOBJ\n */\ngoog.events.Listenable.prototype.hasListener = function(\n    opt_type, opt_capture) {};\n\n\n\n/**\n * An interface that describes a single registered listener.\n * @interface\n */\ngoog.events.ListenableKey = function() {};\n\n\n/**\n * Counter used to create a unique key\n * @type {number}\n * @private\n */\ngoog.events.ListenableKey.counter_ = 0;\n\n\n/**\n * Reserves a key to be used for ListenableKey#key field.\n * @return {number} A number to be used to fill ListenableKey#key\n *     field.\n */\ngoog.events.ListenableKey.reserveKey = function() {\n  'use strict';\n  return ++goog.events.ListenableKey.counter_;\n};\n\n\n/**\n * The source event target.\n * @type {?Object|?goog.events.Listenable}\n */\ngoog.events.ListenableKey.prototype.src;\n\n\n/**\n * The event type the listener is listening to.\n * @type {string}\n */\ngoog.events.ListenableKey.prototype.type;\n\n\n/**\n * The listener function.\n * @type {function(?):?|{handleEvent:function(?):?}|null}\n */\ngoog.events.ListenableKey.prototype.listener;\n\n\n/**\n * Whether the listener works on capture phase.\n * @type {boolean}\n */\ngoog.events.ListenableKey.prototype.capture;\n\n\n/**\n * The 'this' object for the listener function's scope.\n * @type {?Object|undefined}\n */\ngoog.events.ListenableKey.prototype.handler;\n\n\n/**\n * A globally unique number to identify the key.\n * @type {number}\n */\ngoog.events.ListenableKey.prototype.key;\n","~:compiled-at",1624626159627,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.listenable.js\",\n\"lineCount\":48,\n\"mappings\":\"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\",\n\"sources\":[\"goog/events/listenable.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview An interface for a listenable JavaScript object.\\n */\\n\\ngoog.provide('goog.events.Listenable');\\ngoog.provide('goog.events.ListenableKey');\\n/** @suppress {extraRequire} */\\ngoog.require('goog.events.EventId');\\n\\ngoog.requireType('goog.events.EventLike');\\n\\n\\n/**\\n * A listenable interface. A listenable is an object with the ability\\n * to dispatch/broadcast events to \\\"event listeners\\\" registered via\\n * listen/listenOnce.\\n *\\n * The interface allows for an event propagation mechanism similar\\n * to one offered by native browser event targets, such as\\n * capture/bubble mechanism, stopping propagation, and preventing\\n * default actions. Capture/bubble mechanism depends on the ancestor\\n * tree constructed via `#getParentEventTarget`; this tree\\n * must be directed acyclic graph. The meaning of default action(s)\\n * in preventDefault is specific to a particular use case.\\n *\\n * Implementations that do not support capture/bubble or can not have\\n * a parent listenable can simply not implement any ability to set the\\n * parent listenable (and have `#getParentEventTarget` return\\n * null).\\n *\\n * Implementation of this class can be used with or independently from\\n * goog.events.\\n *\\n * Implementation must call `#addImplementation(implClass)`.\\n *\\n * @interface\\n * @see goog.events\\n * @see http://www.w3.org/TR/DOM-Level-2-Events/events.html\\n */\\ngoog.events.Listenable = function() {};\\n\\n\\n/**\\n * An expando property to indicate that an object implements\\n * goog.events.Listenable.\\n *\\n * See addImplementation/isImplementedBy.\\n *\\n * @type {string}\\n * @const\\n */\\ngoog.events.Listenable.IMPLEMENTED_BY_PROP =\\n    'closure_listenable_' + ((Math.random() * 1e6) | 0);\\n\\n\\n/**\\n * Marks a given class (constructor) as an implementation of\\n * Listenable, so that we can query that fact at runtime. The class\\n * must have already implemented the interface.\\n * @param {function(new:goog.events.Listenable,...)} cls The class constructor.\\n *     The corresponding class must have already implemented the interface.\\n */\\ngoog.events.Listenable.addImplementation = function(cls) {\\n  'use strict';\\n  cls.prototype[goog.events.Listenable.IMPLEMENTED_BY_PROP] = true;\\n};\\n\\n\\n/**\\n * @param {?Object} obj The object to check.\\n * @return {boolean} Whether a given instance implements Listenable. The\\n *     class/superclass of the instance must call addImplementation.\\n */\\ngoog.events.Listenable.isImplementedBy = function(obj) {\\n  'use strict';\\n  return !!(obj && obj[goog.events.Listenable.IMPLEMENTED_BY_PROP]);\\n};\\n\\n\\n/**\\n * Adds an event listener. A listener can only be added once to an\\n * object and if it is added again the key for the listener is\\n * returned. Note that if the existing listener is a one-off listener\\n * (registered via listenOnce), it will no longer be a one-off\\n * listener after a call to listen().\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\\n *     method.\\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\\n *     (defaults to false).\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {!goog.events.ListenableKey} Unique key for the listener.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.listen = function(\\n    type, listener, opt_useCapture, opt_listenerScope) {};\\n\\n\\n/**\\n * Adds an event listener that is removed automatically after the\\n * listener fired once.\\n *\\n * If an existing listener already exists, listenOnce will do\\n * nothing. In particular, if the listener was previously registered\\n * via listen(), listenOnce() will not turn the listener into a\\n * one-off listener. Similarly, if there is already an existing\\n * one-off listener, listenOnce does not modify the listeners (it is\\n * still a once listener).\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\\n *     method.\\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\\n *     (defaults to false).\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {!goog.events.ListenableKey} Unique key for the listener.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.listenOnce = function(\\n    type, listener, opt_useCapture, opt_listenerScope) {};\\n\\n\\n/**\\n * Removes an event listener which was added with listen() or listenOnce().\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback\\n *     method.\\n * @param {boolean=} opt_useCapture Whether to fire in capture phase\\n *     (defaults to false).\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call\\n *     the listener.\\n * @return {boolean} Whether any listener was removed.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.unlisten = function(\\n    type, listener, opt_useCapture, opt_listenerScope) {};\\n\\n\\n/**\\n * Removes an event listener which was added with listen() by the key\\n * returned by listen().\\n *\\n * @param {!goog.events.ListenableKey} key The key returned by\\n *     listen() or listenOnce().\\n * @return {boolean} Whether any listener was removed.\\n */\\ngoog.events.Listenable.prototype.unlistenByKey = function(key) {};\\n\\n\\n/**\\n * Dispatches an event (or event like object) and calls all listeners\\n * listening for events of this type. The type of the event is decided by the\\n * type property on the event object.\\n *\\n * If any of the listeners returns false OR calls preventDefault then this\\n * function will return false.  If one of the capture listeners calls\\n * stopPropagation, then the bubble listeners won't fire.\\n *\\n * @param {?goog.events.EventLike} e Event object.\\n * @return {boolean} If anyone called preventDefault on the event object (or\\n *     if any of the listeners returns false) this will also return false.\\n */\\ngoog.events.Listenable.prototype.dispatchEvent = function(e) {};\\n\\n\\n/**\\n * Removes all listeners from this listenable. If type is specified,\\n * it will only remove listeners of the particular type. otherwise all\\n * registered listeners will be removed.\\n *\\n * @param {string|!goog.events.EventId=} opt_type Type of event to remove,\\n *     default is to remove all types.\\n * @return {number} Number of listeners removed.\\n */\\ngoog.events.Listenable.prototype.removeAllListeners = function(opt_type) {};\\n\\n\\n/**\\n * Returns the parent of this event target to use for capture/bubble\\n * mechanism.\\n *\\n * NOTE(chrishenry): The name reflects the original implementation of\\n * custom event target (`goog.events.EventTarget`). We decided\\n * that changing the name is not worth it.\\n *\\n * @return {?goog.events.Listenable} The parent EventTarget or null if\\n *     there is no parent.\\n */\\ngoog.events.Listenable.prototype.getParentEventTarget = function() {};\\n\\n\\n/**\\n * Fires all registered listeners in this listenable for the given\\n * type and capture mode, passing them the given eventObject. This\\n * does not perform actual capture/bubble. Only implementors of the\\n * interface should be using this.\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The type of the\\n *     listeners to fire.\\n * @param {boolean} capture The capture mode of the listeners to fire.\\n * @param {EVENTOBJ} eventObject The event object to fire.\\n * @return {boolean} Whether all listeners succeeded without\\n *     attempting to prevent default behavior. If any listener returns\\n *     false or called goog.events.Event#preventDefault, this returns\\n *     false.\\n * @template EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.fireListeners = function(\\n    type, capture, eventObject) {};\\n\\n\\n/**\\n * Gets all listeners in this listenable for the given type and\\n * capture mode.\\n *\\n * @param {string|!goog.events.EventId} type The type of the listeners to fire.\\n * @param {boolean} capture The capture mode of the listeners to fire.\\n * @return {!Array<!goog.events.ListenableKey>} An array of registered\\n *     listeners.\\n * @template EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.getListeners = function(type, capture) {};\\n\\n\\n/**\\n * Gets the goog.events.ListenableKey for the event or null if no such\\n * listener is in use.\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>} type The name of the event\\n *     without the 'on' prefix.\\n * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener The\\n *     listener function to get.\\n * @param {boolean} capture Whether the listener is a capturing listener.\\n * @param {SCOPE=} opt_listenerScope Object in whose scope to call the\\n *     listener.\\n * @return {?goog.events.ListenableKey} the found listener or null if not found.\\n * @template SCOPE,EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.getListener = function(\\n    type, listener, capture, opt_listenerScope) {};\\n\\n\\n/**\\n * Whether there is any active listeners matching the specified\\n * signature. If either the type or capture parameters are\\n * unspecified, the function will match on the remaining criteria.\\n *\\n * @param {string|!goog.events.EventId<EVENTOBJ>=} opt_type Event type.\\n * @param {boolean=} opt_capture Whether to check for capture or bubble\\n *     listeners.\\n * @return {boolean} Whether there is any active listeners matching\\n *     the requested type and/or capture phase.\\n * @template EVENTOBJ\\n */\\ngoog.events.Listenable.prototype.hasListener = function(\\n    opt_type, opt_capture) {};\\n\\n\\n\\n/**\\n * An interface that describes a single registered listener.\\n * @interface\\n */\\ngoog.events.ListenableKey = function() {};\\n\\n\\n/**\\n * Counter used to create a unique key\\n * @type {number}\\n * @private\\n */\\ngoog.events.ListenableKey.counter_ = 0;\\n\\n\\n/**\\n * Reserves a key to be used for ListenableKey#key field.\\n * @return {number} A number to be used to fill ListenableKey#key\\n *     field.\\n */\\ngoog.events.ListenableKey.reserveKey = function() {\\n  'use strict';\\n  return ++goog.events.ListenableKey.counter_;\\n};\\n\\n\\n/**\\n * The source event target.\\n * @type {?Object|?goog.events.Listenable}\\n */\\ngoog.events.ListenableKey.prototype.src;\\n\\n\\n/**\\n * The event type the listener is listening to.\\n * @type {string}\\n */\\ngoog.events.ListenableKey.prototype.type;\\n\\n\\n/**\\n * The listener function.\\n * @type {function(?):?|{handleEvent:function(?):?}|null}\\n */\\ngoog.events.ListenableKey.prototype.listener;\\n\\n\\n/**\\n * Whether the listener works on capture phase.\\n * @type {boolean}\\n */\\ngoog.events.ListenableKey.prototype.capture;\\n\\n\\n/**\\n * The 'this' object for the listener function's scope.\\n * @type {?Object|undefined}\\n */\\ngoog.events.ListenableKey.prototype.handler;\\n\\n\\n/**\\n * A globally unique number to identify the key.\\n * @type {number}\\n */\\ngoog.events.ListenableKey.prototype.key;\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"events\",\"Listenable\",\"goog.events.Listenable\",\"IMPLEMENTED_BY_PROP\",\"Math\",\"random\",\"addImplementation\",\"goog.events.Listenable.addImplementation\",\"cls\",\"prototype\",\"isImplementedBy\",\"goog.events.Listenable.isImplementedBy\",\"obj\",\"listen\",\"goog.events.Listenable.prototype.listen\",\"type\",\"listener\",\"opt_useCapture\",\"opt_listenerScope\",\"listenOnce\",\"goog.events.Listenable.prototype.listenOnce\",\"unlisten\",\"goog.events.Listenable.prototype.unlisten\",\"unlistenByKey\",\"goog.events.Listenable.prototype.unlistenByKey\",\"key\",\"dispatchEvent\",\"goog.events.Listenable.prototype.dispatchEvent\",\"e\",\"removeAllListeners\",\"goog.events.Listenable.prototype.removeAllListeners\",\"opt_type\",\"getParentEventTarget\",\"goog.events.Listenable.prototype.getParentEventTarget\",\"fireListeners\",\"goog.events.Listenable.prototype.fireListeners\",\"capture\",\"eventObject\",\"getListeners\",\"goog.events.Listenable.prototype.getListeners\",\"getListener\",\"goog.events.Listenable.prototype.getListener\",\"hasListener\",\"goog.events.Listenable.prototype.hasListener\",\"opt_capture\",\"ListenableKey\",\"goog.events.ListenableKey\",\"counter_\",\"reserveKey\",\"goog.events.ListenableKey.reserveKey\",\"src\",\"handler\"]\n}\n"]
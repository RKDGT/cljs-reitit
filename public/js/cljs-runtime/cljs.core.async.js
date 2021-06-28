goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48918 = arguments.length;
switch (G__48918) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48919 = (function (f,blockable,meta48920){
this.f = f;
this.blockable = blockable;
this.meta48920 = meta48920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48921,meta48920__$1){
var self__ = this;
var _48921__$1 = this;
return (new cljs.core.async.t_cljs$core$async48919(self__.f,self__.blockable,meta48920__$1));
}));

(cljs.core.async.t_cljs$core$async48919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48921){
var self__ = this;
var _48921__$1 = this;
return self__.meta48920;
}));

(cljs.core.async.t_cljs$core$async48919.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48920","meta48920",436918351,null)], null);
}));

(cljs.core.async.t_cljs$core$async48919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48919");

(cljs.core.async.t_cljs$core$async48919.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48919.
 */
cljs.core.async.__GT_t_cljs$core$async48919 = (function cljs$core$async$__GT_t_cljs$core$async48919(f__$1,blockable__$1,meta48920){
return (new cljs.core.async.t_cljs$core$async48919(f__$1,blockable__$1,meta48920));
});

}

return (new cljs.core.async.t_cljs$core$async48919(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48924 = arguments.length;
switch (G__48924) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48926 = arguments.length;
switch (G__48926) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48928 = arguments.length;
switch (G__48928) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50362 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50362) : fn1.call(null,val_50362));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50362) : fn1.call(null,val_50362));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48930 = arguments.length;
switch (G__48930) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5752__auto__)){
var ret = temp__5752__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5752__auto__)){
var retb = temp__5752__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___50364 = n;
var x_50365 = (0);
while(true){
if((x_50365 < n__4706__auto___50364)){
(a[x_50365] = x_50365);

var G__50366 = (x_50365 + (1));
x_50365 = G__50366;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48931 = (function (flag,meta48932){
this.flag = flag;
this.meta48932 = meta48932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48933,meta48932__$1){
var self__ = this;
var _48933__$1 = this;
return (new cljs.core.async.t_cljs$core$async48931(self__.flag,meta48932__$1));
}));

(cljs.core.async.t_cljs$core$async48931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48933){
var self__ = this;
var _48933__$1 = this;
return self__.meta48932;
}));

(cljs.core.async.t_cljs$core$async48931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48932","meta48932",586425357,null)], null);
}));

(cljs.core.async.t_cljs$core$async48931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48931");

(cljs.core.async.t_cljs$core$async48931.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48931.
 */
cljs.core.async.__GT_t_cljs$core$async48931 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48931(flag__$1,meta48932){
return (new cljs.core.async.t_cljs$core$async48931(flag__$1,meta48932));
});

}

return (new cljs.core.async.t_cljs$core$async48931(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48934 = (function (flag,cb,meta48935){
this.flag = flag;
this.cb = cb;
this.meta48935 = meta48935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48936,meta48935__$1){
var self__ = this;
var _48936__$1 = this;
return (new cljs.core.async.t_cljs$core$async48934(self__.flag,self__.cb,meta48935__$1));
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48936){
var self__ = this;
var _48936__$1 = this;
return self__.meta48935;
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48935","meta48935",-1451171242,null)], null);
}));

(cljs.core.async.t_cljs$core$async48934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48934");

(cljs.core.async.t_cljs$core$async48934.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48934.
 */
cljs.core.async.__GT_t_cljs$core$async48934 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48934(flag__$1,cb__$1,meta48935){
return (new cljs.core.async.t_cljs$core$async48934(flag__$1,cb__$1,meta48935));
});

}

return (new cljs.core.async.t_cljs$core$async48934(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48937_SHARP_){
var G__48939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48937_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48939) : fret.call(null,G__48939));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48938_SHARP_){
var G__48940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48938_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48940) : fret.call(null,G__48940));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50369 = (i + (1));
i = G__50369;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5754__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5754__auto__)){
var got = temp__5754__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50370 = arguments.length;
var i__4830__auto___50371 = (0);
while(true){
if((i__4830__auto___50371 < len__4829__auto___50370)){
args__4835__auto__.push((arguments[i__4830__auto___50371]));

var G__50372 = (i__4830__auto___50371 + (1));
i__4830__auto___50371 = G__50372;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48943){
var map__48944 = p__48943;
var map__48944__$1 = cljs.core.__destructure_map(map__48944);
var opts = map__48944__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48941){
var G__48942 = cljs.core.first(seq48941);
var seq48941__$1 = cljs.core.next(seq48941);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48942,seq48941__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48946 = arguments.length;
switch (G__48946) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48859__auto___50374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_48970){
var state_val_48971 = (state_48970[(1)]);
if((state_val_48971 === (7))){
var inst_48966 = (state_48970[(2)]);
var state_48970__$1 = state_48970;
var statearr_48972_50375 = state_48970__$1;
(statearr_48972_50375[(2)] = inst_48966);

(statearr_48972_50375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (1))){
var state_48970__$1 = state_48970;
var statearr_48973_50376 = state_48970__$1;
(statearr_48973_50376[(2)] = null);

(statearr_48973_50376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (4))){
var inst_48949 = (state_48970[(7)]);
var inst_48949__$1 = (state_48970[(2)]);
var inst_48950 = (inst_48949__$1 == null);
var state_48970__$1 = (function (){var statearr_48974 = state_48970;
(statearr_48974[(7)] = inst_48949__$1);

return statearr_48974;
})();
if(cljs.core.truth_(inst_48950)){
var statearr_48975_50377 = state_48970__$1;
(statearr_48975_50377[(1)] = (5));

} else {
var statearr_48976_50378 = state_48970__$1;
(statearr_48976_50378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (13))){
var state_48970__$1 = state_48970;
var statearr_48977_50379 = state_48970__$1;
(statearr_48977_50379[(2)] = null);

(statearr_48977_50379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (6))){
var inst_48949 = (state_48970[(7)]);
var state_48970__$1 = state_48970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48970__$1,(11),to,inst_48949);
} else {
if((state_val_48971 === (3))){
var inst_48968 = (state_48970[(2)]);
var state_48970__$1 = state_48970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48970__$1,inst_48968);
} else {
if((state_val_48971 === (12))){
var state_48970__$1 = state_48970;
var statearr_48978_50380 = state_48970__$1;
(statearr_48978_50380[(2)] = null);

(statearr_48978_50380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (2))){
var state_48970__$1 = state_48970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48970__$1,(4),from);
} else {
if((state_val_48971 === (11))){
var inst_48959 = (state_48970[(2)]);
var state_48970__$1 = state_48970;
if(cljs.core.truth_(inst_48959)){
var statearr_48979_50381 = state_48970__$1;
(statearr_48979_50381[(1)] = (12));

} else {
var statearr_48980_50382 = state_48970__$1;
(statearr_48980_50382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (9))){
var state_48970__$1 = state_48970;
var statearr_48981_50383 = state_48970__$1;
(statearr_48981_50383[(2)] = null);

(statearr_48981_50383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (5))){
var state_48970__$1 = state_48970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48982_50384 = state_48970__$1;
(statearr_48982_50384[(1)] = (8));

} else {
var statearr_48983_50385 = state_48970__$1;
(statearr_48983_50385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (14))){
var inst_48964 = (state_48970[(2)]);
var state_48970__$1 = state_48970;
var statearr_48984_50386 = state_48970__$1;
(statearr_48984_50386[(2)] = inst_48964);

(statearr_48984_50386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (10))){
var inst_48956 = (state_48970[(2)]);
var state_48970__$1 = state_48970;
var statearr_48985_50387 = state_48970__$1;
(statearr_48985_50387[(2)] = inst_48956);

(statearr_48985_50387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (8))){
var inst_48953 = cljs.core.async.close_BANG_(to);
var state_48970__$1 = state_48970;
var statearr_48986_50388 = state_48970__$1;
(statearr_48986_50388[(2)] = inst_48953);

(statearr_48986_50388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_48987 = [null,null,null,null,null,null,null,null];
(statearr_48987[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_48987[(1)] = (1));

return statearr_48987;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_48970){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_48970);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e48988){var ex__48828__auto__ = e48988;
var statearr_48989_50389 = state_48970;
(statearr_48989_50389[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_48970[(4)]))){
var statearr_48990_50390 = state_48970;
(statearr_48990_50390[(1)] = cljs.core.first((state_48970[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50391 = state_48970;
state_48970 = G__50391;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_48970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_48970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_48991 = f__48860__auto__();
(statearr_48991[(6)] = c__48859__auto___50374);

return statearr_48991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__48992){
var vec__48993 = p__48992;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48993,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48993,(1),null);
var job = vec__48993;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48859__auto___50401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49000){
var state_val_49001 = (state_49000[(1)]);
if((state_val_49001 === (1))){
var state_49000__$1 = state_49000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49000__$1,(2),res,v);
} else {
if((state_val_49001 === (2))){
var inst_48997 = (state_49000[(2)]);
var inst_48998 = cljs.core.async.close_BANG_(res);
var state_49000__$1 = (function (){var statearr_49002 = state_49000;
(statearr_49002[(7)] = inst_48997);

return statearr_49002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49000__$1,inst_48998);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0 = (function (){
var statearr_49003 = [null,null,null,null,null,null,null,null];
(statearr_49003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__);

(statearr_49003[(1)] = (1));

return statearr_49003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1 = (function (state_49000){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49000);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49004){var ex__48828__auto__ = e49004;
var statearr_49005_50402 = state_49000;
(statearr_49005_50402[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49000[(4)]))){
var statearr_49006_50403 = state_49000;
(statearr_49006_50403[(1)] = cljs.core.first((state_49000[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50404 = state_49000;
state_49000 = G__50404;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = function(state_49000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1.call(this,state_49000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49007 = f__48860__auto__();
(statearr_49007[(6)] = c__48859__auto___50401);

return statearr_49007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__49008){
var vec__49009 = p__49008;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49009,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49009,(1),null);
var job = vec__49009;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___50405 = n;
var __50406 = (0);
while(true){
if((__50406 < n__4706__auto___50405)){
var G__49012_50407 = type;
var G__49012_50408__$1 = (((G__49012_50407 instanceof cljs.core.Keyword))?G__49012_50407.fqn:null);
switch (G__49012_50408__$1) {
case "compute":
var c__48859__auto___50410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50406,c__48859__auto___50410,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async){
return (function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = ((function (__50406,c__48859__auto___50410,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async){
return (function (state_49025){
var state_val_49026 = (state_49025[(1)]);
if((state_val_49026 === (1))){
var state_49025__$1 = state_49025;
var statearr_49027_50411 = state_49025__$1;
(statearr_49027_50411[(2)] = null);

(statearr_49027_50411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (2))){
var state_49025__$1 = state_49025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49025__$1,(4),jobs);
} else {
if((state_val_49026 === (3))){
var inst_49023 = (state_49025[(2)]);
var state_49025__$1 = state_49025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49025__$1,inst_49023);
} else {
if((state_val_49026 === (4))){
var inst_49015 = (state_49025[(2)]);
var inst_49016 = process(inst_49015);
var state_49025__$1 = state_49025;
if(cljs.core.truth_(inst_49016)){
var statearr_49028_50412 = state_49025__$1;
(statearr_49028_50412[(1)] = (5));

} else {
var statearr_49029_50413 = state_49025__$1;
(statearr_49029_50413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (5))){
var state_49025__$1 = state_49025;
var statearr_49030_50414 = state_49025__$1;
(statearr_49030_50414[(2)] = null);

(statearr_49030_50414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (6))){
var state_49025__$1 = state_49025;
var statearr_49031_50415 = state_49025__$1;
(statearr_49031_50415[(2)] = null);

(statearr_49031_50415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49026 === (7))){
var inst_49021 = (state_49025[(2)]);
var state_49025__$1 = state_49025;
var statearr_49032_50416 = state_49025__$1;
(statearr_49032_50416[(2)] = inst_49021);

(statearr_49032_50416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50406,c__48859__auto___50410,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async))
;
return ((function (__50406,switch__48824__auto__,c__48859__auto___50410,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0 = (function (){
var statearr_49033 = [null,null,null,null,null,null,null];
(statearr_49033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__);

(statearr_49033[(1)] = (1));

return statearr_49033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1 = (function (state_49025){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49025);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49034){var ex__48828__auto__ = e49034;
var statearr_49035_50417 = state_49025;
(statearr_49035_50417[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49025[(4)]))){
var statearr_49036_50418 = state_49025;
(statearr_49036_50418[(1)] = cljs.core.first((state_49025[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50419 = state_49025;
state_49025 = G__50419;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = function(state_49025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1.call(this,state_49025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__;
})()
;})(__50406,switch__48824__auto__,c__48859__auto___50410,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async))
})();
var state__48861__auto__ = (function (){var statearr_49037 = f__48860__auto__();
(statearr_49037[(6)] = c__48859__auto___50410);

return statearr_49037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
});})(__50406,c__48859__auto___50410,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async))
);


break;
case "async":
var c__48859__auto___50420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50406,c__48859__auto___50420,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async){
return (function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = ((function (__50406,c__48859__auto___50420,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async){
return (function (state_49050){
var state_val_49051 = (state_49050[(1)]);
if((state_val_49051 === (1))){
var state_49050__$1 = state_49050;
var statearr_49052_50421 = state_49050__$1;
(statearr_49052_50421[(2)] = null);

(statearr_49052_50421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49051 === (2))){
var state_49050__$1 = state_49050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49050__$1,(4),jobs);
} else {
if((state_val_49051 === (3))){
var inst_49048 = (state_49050[(2)]);
var state_49050__$1 = state_49050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49050__$1,inst_49048);
} else {
if((state_val_49051 === (4))){
var inst_49040 = (state_49050[(2)]);
var inst_49041 = async(inst_49040);
var state_49050__$1 = state_49050;
if(cljs.core.truth_(inst_49041)){
var statearr_49053_50422 = state_49050__$1;
(statearr_49053_50422[(1)] = (5));

} else {
var statearr_49054_50423 = state_49050__$1;
(statearr_49054_50423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49051 === (5))){
var state_49050__$1 = state_49050;
var statearr_49055_50424 = state_49050__$1;
(statearr_49055_50424[(2)] = null);

(statearr_49055_50424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49051 === (6))){
var state_49050__$1 = state_49050;
var statearr_49056_50425 = state_49050__$1;
(statearr_49056_50425[(2)] = null);

(statearr_49056_50425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49051 === (7))){
var inst_49046 = (state_49050[(2)]);
var state_49050__$1 = state_49050;
var statearr_49057_50426 = state_49050__$1;
(statearr_49057_50426[(2)] = inst_49046);

(statearr_49057_50426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50406,c__48859__auto___50420,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async))
;
return ((function (__50406,switch__48824__auto__,c__48859__auto___50420,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0 = (function (){
var statearr_49058 = [null,null,null,null,null,null,null];
(statearr_49058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__);

(statearr_49058[(1)] = (1));

return statearr_49058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1 = (function (state_49050){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49050);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49059){var ex__48828__auto__ = e49059;
var statearr_49060_50427 = state_49050;
(statearr_49060_50427[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49050[(4)]))){
var statearr_49061_50428 = state_49050;
(statearr_49061_50428[(1)] = cljs.core.first((state_49050[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50429 = state_49050;
state_49050 = G__50429;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = function(state_49050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1.call(this,state_49050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__;
})()
;})(__50406,switch__48824__auto__,c__48859__auto___50420,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async))
})();
var state__48861__auto__ = (function (){var statearr_49062 = f__48860__auto__();
(statearr_49062[(6)] = c__48859__auto___50420);

return statearr_49062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
});})(__50406,c__48859__auto___50420,G__49012_50407,G__49012_50408__$1,n__4706__auto___50405,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49012_50408__$1)].join('')));

}

var G__50430 = (__50406 + (1));
__50406 = G__50430;
continue;
} else {
}
break;
}

var c__48859__auto___50431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49084){
var state_val_49085 = (state_49084[(1)]);
if((state_val_49085 === (7))){
var inst_49080 = (state_49084[(2)]);
var state_49084__$1 = state_49084;
var statearr_49086_50432 = state_49084__$1;
(statearr_49086_50432[(2)] = inst_49080);

(statearr_49086_50432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (1))){
var state_49084__$1 = state_49084;
var statearr_49087_50433 = state_49084__$1;
(statearr_49087_50433[(2)] = null);

(statearr_49087_50433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (4))){
var inst_49065 = (state_49084[(7)]);
var inst_49065__$1 = (state_49084[(2)]);
var inst_49066 = (inst_49065__$1 == null);
var state_49084__$1 = (function (){var statearr_49088 = state_49084;
(statearr_49088[(7)] = inst_49065__$1);

return statearr_49088;
})();
if(cljs.core.truth_(inst_49066)){
var statearr_49089_50434 = state_49084__$1;
(statearr_49089_50434[(1)] = (5));

} else {
var statearr_49090_50435 = state_49084__$1;
(statearr_49090_50435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (6))){
var inst_49070 = (state_49084[(8)]);
var inst_49065 = (state_49084[(7)]);
var inst_49070__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_49071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49072 = [inst_49065,inst_49070__$1];
var inst_49073 = (new cljs.core.PersistentVector(null,2,(5),inst_49071,inst_49072,null));
var state_49084__$1 = (function (){var statearr_49091 = state_49084;
(statearr_49091[(8)] = inst_49070__$1);

return statearr_49091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49084__$1,(8),jobs,inst_49073);
} else {
if((state_val_49085 === (3))){
var inst_49082 = (state_49084[(2)]);
var state_49084__$1 = state_49084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49084__$1,inst_49082);
} else {
if((state_val_49085 === (2))){
var state_49084__$1 = state_49084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49084__$1,(4),from);
} else {
if((state_val_49085 === (9))){
var inst_49077 = (state_49084[(2)]);
var state_49084__$1 = (function (){var statearr_49092 = state_49084;
(statearr_49092[(9)] = inst_49077);

return statearr_49092;
})();
var statearr_49093_50436 = state_49084__$1;
(statearr_49093_50436[(2)] = null);

(statearr_49093_50436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (5))){
var inst_49068 = cljs.core.async.close_BANG_(jobs);
var state_49084__$1 = state_49084;
var statearr_49094_50437 = state_49084__$1;
(statearr_49094_50437[(2)] = inst_49068);

(statearr_49094_50437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49085 === (8))){
var inst_49070 = (state_49084[(8)]);
var inst_49075 = (state_49084[(2)]);
var state_49084__$1 = (function (){var statearr_49095 = state_49084;
(statearr_49095[(10)] = inst_49075);

return statearr_49095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49084__$1,(9),results,inst_49070);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0 = (function (){
var statearr_49096 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__);

(statearr_49096[(1)] = (1));

return statearr_49096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1 = (function (state_49084){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49084);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49097){var ex__48828__auto__ = e49097;
var statearr_49098_50440 = state_49084;
(statearr_49098_50440[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49084[(4)]))){
var statearr_49099_50441 = state_49084;
(statearr_49099_50441[(1)] = cljs.core.first((state_49084[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50442 = state_49084;
state_49084 = G__50442;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = function(state_49084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1.call(this,state_49084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49100 = f__48860__auto__();
(statearr_49100[(6)] = c__48859__auto___50431);

return statearr_49100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


var c__48859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49138){
var state_val_49139 = (state_49138[(1)]);
if((state_val_49139 === (7))){
var inst_49134 = (state_49138[(2)]);
var state_49138__$1 = state_49138;
var statearr_49140_50443 = state_49138__$1;
(statearr_49140_50443[(2)] = inst_49134);

(statearr_49140_50443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (20))){
var state_49138__$1 = state_49138;
var statearr_49141_50444 = state_49138__$1;
(statearr_49141_50444[(2)] = null);

(statearr_49141_50444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (1))){
var state_49138__$1 = state_49138;
var statearr_49142_50445 = state_49138__$1;
(statearr_49142_50445[(2)] = null);

(statearr_49142_50445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (4))){
var inst_49103 = (state_49138[(7)]);
var inst_49103__$1 = (state_49138[(2)]);
var inst_49104 = (inst_49103__$1 == null);
var state_49138__$1 = (function (){var statearr_49143 = state_49138;
(statearr_49143[(7)] = inst_49103__$1);

return statearr_49143;
})();
if(cljs.core.truth_(inst_49104)){
var statearr_49144_50446 = state_49138__$1;
(statearr_49144_50446[(1)] = (5));

} else {
var statearr_49145_50447 = state_49138__$1;
(statearr_49145_50447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (15))){
var inst_49116 = (state_49138[(8)]);
var state_49138__$1 = state_49138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49138__$1,(18),to,inst_49116);
} else {
if((state_val_49139 === (21))){
var inst_49129 = (state_49138[(2)]);
var state_49138__$1 = state_49138;
var statearr_49146_50448 = state_49138__$1;
(statearr_49146_50448[(2)] = inst_49129);

(statearr_49146_50448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (13))){
var inst_49131 = (state_49138[(2)]);
var state_49138__$1 = (function (){var statearr_49147 = state_49138;
(statearr_49147[(9)] = inst_49131);

return statearr_49147;
})();
var statearr_49148_50449 = state_49138__$1;
(statearr_49148_50449[(2)] = null);

(statearr_49148_50449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (6))){
var inst_49103 = (state_49138[(7)]);
var state_49138__$1 = state_49138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49138__$1,(11),inst_49103);
} else {
if((state_val_49139 === (17))){
var inst_49124 = (state_49138[(2)]);
var state_49138__$1 = state_49138;
if(cljs.core.truth_(inst_49124)){
var statearr_49149_50450 = state_49138__$1;
(statearr_49149_50450[(1)] = (19));

} else {
var statearr_49150_50451 = state_49138__$1;
(statearr_49150_50451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (3))){
var inst_49136 = (state_49138[(2)]);
var state_49138__$1 = state_49138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49138__$1,inst_49136);
} else {
if((state_val_49139 === (12))){
var inst_49113 = (state_49138[(10)]);
var state_49138__$1 = state_49138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49138__$1,(14),inst_49113);
} else {
if((state_val_49139 === (2))){
var state_49138__$1 = state_49138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49138__$1,(4),results);
} else {
if((state_val_49139 === (19))){
var state_49138__$1 = state_49138;
var statearr_49151_50452 = state_49138__$1;
(statearr_49151_50452[(2)] = null);

(statearr_49151_50452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (11))){
var inst_49113 = (state_49138[(2)]);
var state_49138__$1 = (function (){var statearr_49152 = state_49138;
(statearr_49152[(10)] = inst_49113);

return statearr_49152;
})();
var statearr_49153_50453 = state_49138__$1;
(statearr_49153_50453[(2)] = null);

(statearr_49153_50453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (9))){
var state_49138__$1 = state_49138;
var statearr_49154_50454 = state_49138__$1;
(statearr_49154_50454[(2)] = null);

(statearr_49154_50454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (5))){
var state_49138__$1 = state_49138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49155_50455 = state_49138__$1;
(statearr_49155_50455[(1)] = (8));

} else {
var statearr_49156_50456 = state_49138__$1;
(statearr_49156_50456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (14))){
var inst_49116 = (state_49138[(8)]);
var inst_49118 = (state_49138[(11)]);
var inst_49116__$1 = (state_49138[(2)]);
var inst_49117 = (inst_49116__$1 == null);
var inst_49118__$1 = cljs.core.not(inst_49117);
var state_49138__$1 = (function (){var statearr_49157 = state_49138;
(statearr_49157[(8)] = inst_49116__$1);

(statearr_49157[(11)] = inst_49118__$1);

return statearr_49157;
})();
if(inst_49118__$1){
var statearr_49158_50457 = state_49138__$1;
(statearr_49158_50457[(1)] = (15));

} else {
var statearr_49159_50458 = state_49138__$1;
(statearr_49159_50458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (16))){
var inst_49118 = (state_49138[(11)]);
var state_49138__$1 = state_49138;
var statearr_49160_50459 = state_49138__$1;
(statearr_49160_50459[(2)] = inst_49118);

(statearr_49160_50459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (10))){
var inst_49110 = (state_49138[(2)]);
var state_49138__$1 = state_49138;
var statearr_49161_50460 = state_49138__$1;
(statearr_49161_50460[(2)] = inst_49110);

(statearr_49161_50460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (18))){
var inst_49121 = (state_49138[(2)]);
var state_49138__$1 = state_49138;
var statearr_49162_50461 = state_49138__$1;
(statearr_49162_50461[(2)] = inst_49121);

(statearr_49162_50461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49139 === (8))){
var inst_49107 = cljs.core.async.close_BANG_(to);
var state_49138__$1 = state_49138;
var statearr_49163_50462 = state_49138__$1;
(statearr_49163_50462[(2)] = inst_49107);

(statearr_49163_50462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0 = (function (){
var statearr_49164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__);

(statearr_49164[(1)] = (1));

return statearr_49164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1 = (function (state_49138){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49138);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49165){var ex__48828__auto__ = e49165;
var statearr_49166_50463 = state_49138;
(statearr_49166_50463[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49138[(4)]))){
var statearr_49167_50464 = state_49138;
(statearr_49167_50464[(1)] = cljs.core.first((state_49138[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50465 = state_49138;
state_49138 = G__50465;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__ = function(state_49138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1.call(this,state_49138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48825__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49168 = f__48860__auto__();
(statearr_49168[(6)] = c__48859__auto__);

return statearr_49168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));

return c__48859__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__49170 = arguments.length;
switch (G__49170) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__49172 = arguments.length;
switch (G__49172) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__49174 = arguments.length;
switch (G__49174) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48859__auto___50469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49200){
var state_val_49201 = (state_49200[(1)]);
if((state_val_49201 === (7))){
var inst_49196 = (state_49200[(2)]);
var state_49200__$1 = state_49200;
var statearr_49202_50470 = state_49200__$1;
(statearr_49202_50470[(2)] = inst_49196);

(statearr_49202_50470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (1))){
var state_49200__$1 = state_49200;
var statearr_49203_50471 = state_49200__$1;
(statearr_49203_50471[(2)] = null);

(statearr_49203_50471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (4))){
var inst_49177 = (state_49200[(7)]);
var inst_49177__$1 = (state_49200[(2)]);
var inst_49178 = (inst_49177__$1 == null);
var state_49200__$1 = (function (){var statearr_49204 = state_49200;
(statearr_49204[(7)] = inst_49177__$1);

return statearr_49204;
})();
if(cljs.core.truth_(inst_49178)){
var statearr_49205_50472 = state_49200__$1;
(statearr_49205_50472[(1)] = (5));

} else {
var statearr_49206_50473 = state_49200__$1;
(statearr_49206_50473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (13))){
var state_49200__$1 = state_49200;
var statearr_49207_50474 = state_49200__$1;
(statearr_49207_50474[(2)] = null);

(statearr_49207_50474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (6))){
var inst_49177 = (state_49200[(7)]);
var inst_49183 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49177) : p.call(null,inst_49177));
var state_49200__$1 = state_49200;
if(cljs.core.truth_(inst_49183)){
var statearr_49208_50475 = state_49200__$1;
(statearr_49208_50475[(1)] = (9));

} else {
var statearr_49209_50476 = state_49200__$1;
(statearr_49209_50476[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (3))){
var inst_49198 = (state_49200[(2)]);
var state_49200__$1 = state_49200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49200__$1,inst_49198);
} else {
if((state_val_49201 === (12))){
var state_49200__$1 = state_49200;
var statearr_49210_50477 = state_49200__$1;
(statearr_49210_50477[(2)] = null);

(statearr_49210_50477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (2))){
var state_49200__$1 = state_49200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49200__$1,(4),ch);
} else {
if((state_val_49201 === (11))){
var inst_49177 = (state_49200[(7)]);
var inst_49187 = (state_49200[(2)]);
var state_49200__$1 = state_49200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49200__$1,(8),inst_49187,inst_49177);
} else {
if((state_val_49201 === (9))){
var state_49200__$1 = state_49200;
var statearr_49211_50485 = state_49200__$1;
(statearr_49211_50485[(2)] = tc);

(statearr_49211_50485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (5))){
var inst_49180 = cljs.core.async.close_BANG_(tc);
var inst_49181 = cljs.core.async.close_BANG_(fc);
var state_49200__$1 = (function (){var statearr_49212 = state_49200;
(statearr_49212[(8)] = inst_49180);

return statearr_49212;
})();
var statearr_49213_50486 = state_49200__$1;
(statearr_49213_50486[(2)] = inst_49181);

(statearr_49213_50486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (14))){
var inst_49194 = (state_49200[(2)]);
var state_49200__$1 = state_49200;
var statearr_49214_50487 = state_49200__$1;
(statearr_49214_50487[(2)] = inst_49194);

(statearr_49214_50487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (10))){
var state_49200__$1 = state_49200;
var statearr_49215_50489 = state_49200__$1;
(statearr_49215_50489[(2)] = fc);

(statearr_49215_50489[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49201 === (8))){
var inst_49189 = (state_49200[(2)]);
var state_49200__$1 = state_49200;
if(cljs.core.truth_(inst_49189)){
var statearr_49216_50490 = state_49200__$1;
(statearr_49216_50490[(1)] = (12));

} else {
var statearr_49217_50491 = state_49200__$1;
(statearr_49217_50491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_49218 = [null,null,null,null,null,null,null,null,null];
(statearr_49218[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_49218[(1)] = (1));

return statearr_49218;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_49200){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49200);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49219){var ex__48828__auto__ = e49219;
var statearr_49220_50492 = state_49200;
(statearr_49220_50492[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49200[(4)]))){
var statearr_49221_50493 = state_49200;
(statearr_49221_50493[(1)] = cljs.core.first((state_49200[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50494 = state_49200;
state_49200 = G__50494;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_49200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_49200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49222 = f__48860__auto__();
(statearr_49222[(6)] = c__48859__auto___50469);

return statearr_49222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49244){
var state_val_49245 = (state_49244[(1)]);
if((state_val_49245 === (7))){
var inst_49240 = (state_49244[(2)]);
var state_49244__$1 = state_49244;
var statearr_49246_50495 = state_49244__$1;
(statearr_49246_50495[(2)] = inst_49240);

(statearr_49246_50495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (1))){
var inst_49223 = init;
var inst_49224 = inst_49223;
var state_49244__$1 = (function (){var statearr_49247 = state_49244;
(statearr_49247[(7)] = inst_49224);

return statearr_49247;
})();
var statearr_49248_50496 = state_49244__$1;
(statearr_49248_50496[(2)] = null);

(statearr_49248_50496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (4))){
var inst_49227 = (state_49244[(8)]);
var inst_49227__$1 = (state_49244[(2)]);
var inst_49228 = (inst_49227__$1 == null);
var state_49244__$1 = (function (){var statearr_49249 = state_49244;
(statearr_49249[(8)] = inst_49227__$1);

return statearr_49249;
})();
if(cljs.core.truth_(inst_49228)){
var statearr_49250_50497 = state_49244__$1;
(statearr_49250_50497[(1)] = (5));

} else {
var statearr_49251_50498 = state_49244__$1;
(statearr_49251_50498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (6))){
var inst_49224 = (state_49244[(7)]);
var inst_49231 = (state_49244[(9)]);
var inst_49227 = (state_49244[(8)]);
var inst_49231__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49224,inst_49227) : f.call(null,inst_49224,inst_49227));
var inst_49232 = cljs.core.reduced_QMARK_(inst_49231__$1);
var state_49244__$1 = (function (){var statearr_49252 = state_49244;
(statearr_49252[(9)] = inst_49231__$1);

return statearr_49252;
})();
if(inst_49232){
var statearr_49253_50499 = state_49244__$1;
(statearr_49253_50499[(1)] = (8));

} else {
var statearr_49254_50500 = state_49244__$1;
(statearr_49254_50500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (3))){
var inst_49242 = (state_49244[(2)]);
var state_49244__$1 = state_49244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49244__$1,inst_49242);
} else {
if((state_val_49245 === (2))){
var state_49244__$1 = state_49244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49244__$1,(4),ch);
} else {
if((state_val_49245 === (9))){
var inst_49231 = (state_49244[(9)]);
var inst_49224 = inst_49231;
var state_49244__$1 = (function (){var statearr_49255 = state_49244;
(statearr_49255[(7)] = inst_49224);

return statearr_49255;
})();
var statearr_49256_50501 = state_49244__$1;
(statearr_49256_50501[(2)] = null);

(statearr_49256_50501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (5))){
var inst_49224 = (state_49244[(7)]);
var state_49244__$1 = state_49244;
var statearr_49257_50502 = state_49244__$1;
(statearr_49257_50502[(2)] = inst_49224);

(statearr_49257_50502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (10))){
var inst_49238 = (state_49244[(2)]);
var state_49244__$1 = state_49244;
var statearr_49258_50503 = state_49244__$1;
(statearr_49258_50503[(2)] = inst_49238);

(statearr_49258_50503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (8))){
var inst_49231 = (state_49244[(9)]);
var inst_49234 = cljs.core.deref(inst_49231);
var state_49244__$1 = state_49244;
var statearr_49259_50504 = state_49244__$1;
(statearr_49259_50504[(2)] = inst_49234);

(statearr_49259_50504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48825__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48825__auto____0 = (function (){
var statearr_49260 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49260[(0)] = cljs$core$async$reduce_$_state_machine__48825__auto__);

(statearr_49260[(1)] = (1));

return statearr_49260;
});
var cljs$core$async$reduce_$_state_machine__48825__auto____1 = (function (state_49244){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49244);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49261){var ex__48828__auto__ = e49261;
var statearr_49262_50505 = state_49244;
(statearr_49262_50505[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49244[(4)]))){
var statearr_49263_50506 = state_49244;
(statearr_49263_50506[(1)] = cljs.core.first((state_49244[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50507 = state_49244;
state_49244 = G__50507;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48825__auto__ = function(state_49244){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48825__auto____1.call(this,state_49244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48825__auto____0;
cljs$core$async$reduce_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48825__auto____1;
return cljs$core$async$reduce_$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49264 = f__48860__auto__();
(statearr_49264[(6)] = c__48859__auto__);

return statearr_49264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));

return c__48859__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49270){
var state_val_49271 = (state_49270[(1)]);
if((state_val_49271 === (1))){
var inst_49265 = cljs.core.async.reduce(f__$1,init,ch);
var state_49270__$1 = state_49270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49270__$1,(2),inst_49265);
} else {
if((state_val_49271 === (2))){
var inst_49267 = (state_49270[(2)]);
var inst_49268 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49267) : f__$1.call(null,inst_49267));
var state_49270__$1 = state_49270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49270__$1,inst_49268);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48825__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48825__auto____0 = (function (){
var statearr_49272 = [null,null,null,null,null,null,null];
(statearr_49272[(0)] = cljs$core$async$transduce_$_state_machine__48825__auto__);

(statearr_49272[(1)] = (1));

return statearr_49272;
});
var cljs$core$async$transduce_$_state_machine__48825__auto____1 = (function (state_49270){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49270);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49273){var ex__48828__auto__ = e49273;
var statearr_49274_50532 = state_49270;
(statearr_49274_50532[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49270[(4)]))){
var statearr_49275_50533 = state_49270;
(statearr_49275_50533[(1)] = cljs.core.first((state_49270[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50534 = state_49270;
state_49270 = G__50534;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48825__auto__ = function(state_49270){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48825__auto____1.call(this,state_49270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48825__auto____0;
cljs$core$async$transduce_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48825__auto____1;
return cljs$core$async$transduce_$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49276 = f__48860__auto__();
(statearr_49276[(6)] = c__48859__auto__);

return statearr_49276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));

return c__48859__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__49278 = arguments.length;
switch (G__49278) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49303){
var state_val_49304 = (state_49303[(1)]);
if((state_val_49304 === (7))){
var inst_49285 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49305_50536 = state_49303__$1;
(statearr_49305_50536[(2)] = inst_49285);

(statearr_49305_50536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (1))){
var inst_49279 = cljs.core.seq(coll);
var inst_49280 = inst_49279;
var state_49303__$1 = (function (){var statearr_49306 = state_49303;
(statearr_49306[(7)] = inst_49280);

return statearr_49306;
})();
var statearr_49307_50537 = state_49303__$1;
(statearr_49307_50537[(2)] = null);

(statearr_49307_50537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (4))){
var inst_49280 = (state_49303[(7)]);
var inst_49283 = cljs.core.first(inst_49280);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49303__$1,(7),ch,inst_49283);
} else {
if((state_val_49304 === (13))){
var inst_49297 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49308_50538 = state_49303__$1;
(statearr_49308_50538[(2)] = inst_49297);

(statearr_49308_50538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (6))){
var inst_49288 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49288)){
var statearr_49309_50539 = state_49303__$1;
(statearr_49309_50539[(1)] = (8));

} else {
var statearr_49310_50540 = state_49303__$1;
(statearr_49310_50540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (3))){
var inst_49301 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49303__$1,inst_49301);
} else {
if((state_val_49304 === (12))){
var state_49303__$1 = state_49303;
var statearr_49311_50541 = state_49303__$1;
(statearr_49311_50541[(2)] = null);

(statearr_49311_50541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (2))){
var inst_49280 = (state_49303[(7)]);
var state_49303__$1 = state_49303;
if(cljs.core.truth_(inst_49280)){
var statearr_49312_50542 = state_49303__$1;
(statearr_49312_50542[(1)] = (4));

} else {
var statearr_49313_50543 = state_49303__$1;
(statearr_49313_50543[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (11))){
var inst_49294 = cljs.core.async.close_BANG_(ch);
var state_49303__$1 = state_49303;
var statearr_49314_50544 = state_49303__$1;
(statearr_49314_50544[(2)] = inst_49294);

(statearr_49314_50544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (9))){
var state_49303__$1 = state_49303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49315_50545 = state_49303__$1;
(statearr_49315_50545[(1)] = (11));

} else {
var statearr_49316_50546 = state_49303__$1;
(statearr_49316_50546[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (5))){
var inst_49280 = (state_49303[(7)]);
var state_49303__$1 = state_49303;
var statearr_49317_50547 = state_49303__$1;
(statearr_49317_50547[(2)] = inst_49280);

(statearr_49317_50547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (10))){
var inst_49299 = (state_49303[(2)]);
var state_49303__$1 = state_49303;
var statearr_49318_50548 = state_49303__$1;
(statearr_49318_50548[(2)] = inst_49299);

(statearr_49318_50548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49304 === (8))){
var inst_49280 = (state_49303[(7)]);
var inst_49290 = cljs.core.next(inst_49280);
var inst_49280__$1 = inst_49290;
var state_49303__$1 = (function (){var statearr_49319 = state_49303;
(statearr_49319[(7)] = inst_49280__$1);

return statearr_49319;
})();
var statearr_49320_50549 = state_49303__$1;
(statearr_49320_50549[(2)] = null);

(statearr_49320_50549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_49321 = [null,null,null,null,null,null,null,null];
(statearr_49321[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_49321[(1)] = (1));

return statearr_49321;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_49303){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49303);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49322){var ex__48828__auto__ = e49322;
var statearr_49323_50550 = state_49303;
(statearr_49323_50550[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49303[(4)]))){
var statearr_49324_50551 = state_49303;
(statearr_49324_50551[(1)] = cljs.core.first((state_49303[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50552 = state_49303;
state_49303 = G__50552;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_49303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_49303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49325 = f__48860__auto__();
(statearr_49325[(6)] = c__48859__auto__);

return statearr_49325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));

return c__48859__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__49327 = arguments.length;
switch (G__49327) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50554 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50554(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50555 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50555(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50556 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50556(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50557 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50557(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49328 = (function (ch,cs,meta49329){
this.ch = ch;
this.cs = cs;
this.meta49329 = meta49329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49330,meta49329__$1){
var self__ = this;
var _49330__$1 = this;
return (new cljs.core.async.t_cljs$core$async49328(self__.ch,self__.cs,meta49329__$1));
}));

(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49330){
var self__ = this;
var _49330__$1 = this;
return self__.meta49329;
}));

(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49328.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49329","meta49329",-1662084247,null)], null);
}));

(cljs.core.async.t_cljs$core$async49328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49328");

(cljs.core.async.t_cljs$core$async49328.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49328.
 */
cljs.core.async.__GT_t_cljs$core$async49328 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49328(ch__$1,cs__$1,meta49329){
return (new cljs.core.async.t_cljs$core$async49328(ch__$1,cs__$1,meta49329));
});

}

return (new cljs.core.async.t_cljs$core$async49328(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48859__auto___50568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49463){
var state_val_49464 = (state_49463[(1)]);
if((state_val_49464 === (7))){
var inst_49459 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49465_50569 = state_49463__$1;
(statearr_49465_50569[(2)] = inst_49459);

(statearr_49465_50569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (20))){
var inst_49364 = (state_49463[(7)]);
var inst_49376 = cljs.core.first(inst_49364);
var inst_49377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49376,(0),null);
var inst_49378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49376,(1),null);
var state_49463__$1 = (function (){var statearr_49466 = state_49463;
(statearr_49466[(8)] = inst_49377);

return statearr_49466;
})();
if(cljs.core.truth_(inst_49378)){
var statearr_49467_50570 = state_49463__$1;
(statearr_49467_50570[(1)] = (22));

} else {
var statearr_49468_50571 = state_49463__$1;
(statearr_49468_50571[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (27))){
var inst_49333 = (state_49463[(9)]);
var inst_49408 = (state_49463[(10)]);
var inst_49413 = (state_49463[(11)]);
var inst_49406 = (state_49463[(12)]);
var inst_49413__$1 = cljs.core._nth(inst_49406,inst_49408);
var inst_49414 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49413__$1,inst_49333,done);
var state_49463__$1 = (function (){var statearr_49469 = state_49463;
(statearr_49469[(11)] = inst_49413__$1);

return statearr_49469;
})();
if(cljs.core.truth_(inst_49414)){
var statearr_49470_50572 = state_49463__$1;
(statearr_49470_50572[(1)] = (30));

} else {
var statearr_49471_50573 = state_49463__$1;
(statearr_49471_50573[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (1))){
var state_49463__$1 = state_49463;
var statearr_49472_50574 = state_49463__$1;
(statearr_49472_50574[(2)] = null);

(statearr_49472_50574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (24))){
var inst_49364 = (state_49463[(7)]);
var inst_49383 = (state_49463[(2)]);
var inst_49384 = cljs.core.next(inst_49364);
var inst_49342 = inst_49384;
var inst_49343 = null;
var inst_49344 = (0);
var inst_49345 = (0);
var state_49463__$1 = (function (){var statearr_49473 = state_49463;
(statearr_49473[(13)] = inst_49343);

(statearr_49473[(14)] = inst_49342);

(statearr_49473[(15)] = inst_49383);

(statearr_49473[(16)] = inst_49345);

(statearr_49473[(17)] = inst_49344);

return statearr_49473;
})();
var statearr_49474_50575 = state_49463__$1;
(statearr_49474_50575[(2)] = null);

(statearr_49474_50575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (39))){
var state_49463__$1 = state_49463;
var statearr_49478_50576 = state_49463__$1;
(statearr_49478_50576[(2)] = null);

(statearr_49478_50576[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (4))){
var inst_49333 = (state_49463[(9)]);
var inst_49333__$1 = (state_49463[(2)]);
var inst_49334 = (inst_49333__$1 == null);
var state_49463__$1 = (function (){var statearr_49479 = state_49463;
(statearr_49479[(9)] = inst_49333__$1);

return statearr_49479;
})();
if(cljs.core.truth_(inst_49334)){
var statearr_49480_50577 = state_49463__$1;
(statearr_49480_50577[(1)] = (5));

} else {
var statearr_49481_50578 = state_49463__$1;
(statearr_49481_50578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (15))){
var inst_49343 = (state_49463[(13)]);
var inst_49342 = (state_49463[(14)]);
var inst_49345 = (state_49463[(16)]);
var inst_49344 = (state_49463[(17)]);
var inst_49360 = (state_49463[(2)]);
var inst_49361 = (inst_49345 + (1));
var tmp49475 = inst_49343;
var tmp49476 = inst_49342;
var tmp49477 = inst_49344;
var inst_49342__$1 = tmp49476;
var inst_49343__$1 = tmp49475;
var inst_49344__$1 = tmp49477;
var inst_49345__$1 = inst_49361;
var state_49463__$1 = (function (){var statearr_49482 = state_49463;
(statearr_49482[(13)] = inst_49343__$1);

(statearr_49482[(14)] = inst_49342__$1);

(statearr_49482[(16)] = inst_49345__$1);

(statearr_49482[(18)] = inst_49360);

(statearr_49482[(17)] = inst_49344__$1);

return statearr_49482;
})();
var statearr_49483_50579 = state_49463__$1;
(statearr_49483_50579[(2)] = null);

(statearr_49483_50579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (21))){
var inst_49387 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49487_50580 = state_49463__$1;
(statearr_49487_50580[(2)] = inst_49387);

(statearr_49487_50580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (31))){
var inst_49413 = (state_49463[(11)]);
var inst_49417 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49413);
var state_49463__$1 = state_49463;
var statearr_49488_50581 = state_49463__$1;
(statearr_49488_50581[(2)] = inst_49417);

(statearr_49488_50581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (32))){
var inst_49407 = (state_49463[(19)]);
var inst_49408 = (state_49463[(10)]);
var inst_49405 = (state_49463[(20)]);
var inst_49406 = (state_49463[(12)]);
var inst_49419 = (state_49463[(2)]);
var inst_49420 = (inst_49408 + (1));
var tmp49484 = inst_49407;
var tmp49485 = inst_49405;
var tmp49486 = inst_49406;
var inst_49405__$1 = tmp49485;
var inst_49406__$1 = tmp49486;
var inst_49407__$1 = tmp49484;
var inst_49408__$1 = inst_49420;
var state_49463__$1 = (function (){var statearr_49489 = state_49463;
(statearr_49489[(19)] = inst_49407__$1);

(statearr_49489[(10)] = inst_49408__$1);

(statearr_49489[(21)] = inst_49419);

(statearr_49489[(20)] = inst_49405__$1);

(statearr_49489[(12)] = inst_49406__$1);

return statearr_49489;
})();
var statearr_49490_50582 = state_49463__$1;
(statearr_49490_50582[(2)] = null);

(statearr_49490_50582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (40))){
var inst_49432 = (state_49463[(22)]);
var inst_49436 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49432);
var state_49463__$1 = state_49463;
var statearr_49491_50591 = state_49463__$1;
(statearr_49491_50591[(2)] = inst_49436);

(statearr_49491_50591[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (33))){
var inst_49423 = (state_49463[(23)]);
var inst_49425 = cljs.core.chunked_seq_QMARK_(inst_49423);
var state_49463__$1 = state_49463;
if(inst_49425){
var statearr_49492_50592 = state_49463__$1;
(statearr_49492_50592[(1)] = (36));

} else {
var statearr_49493_50593 = state_49463__$1;
(statearr_49493_50593[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (13))){
var inst_49354 = (state_49463[(24)]);
var inst_49357 = cljs.core.async.close_BANG_(inst_49354);
var state_49463__$1 = state_49463;
var statearr_49494_50594 = state_49463__$1;
(statearr_49494_50594[(2)] = inst_49357);

(statearr_49494_50594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (22))){
var inst_49377 = (state_49463[(8)]);
var inst_49380 = cljs.core.async.close_BANG_(inst_49377);
var state_49463__$1 = state_49463;
var statearr_49495_50595 = state_49463__$1;
(statearr_49495_50595[(2)] = inst_49380);

(statearr_49495_50595[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (36))){
var inst_49423 = (state_49463[(23)]);
var inst_49427 = cljs.core.chunk_first(inst_49423);
var inst_49428 = cljs.core.chunk_rest(inst_49423);
var inst_49429 = cljs.core.count(inst_49427);
var inst_49405 = inst_49428;
var inst_49406 = inst_49427;
var inst_49407 = inst_49429;
var inst_49408 = (0);
var state_49463__$1 = (function (){var statearr_49496 = state_49463;
(statearr_49496[(19)] = inst_49407);

(statearr_49496[(10)] = inst_49408);

(statearr_49496[(20)] = inst_49405);

(statearr_49496[(12)] = inst_49406);

return statearr_49496;
})();
var statearr_49497_50596 = state_49463__$1;
(statearr_49497_50596[(2)] = null);

(statearr_49497_50596[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (41))){
var inst_49423 = (state_49463[(23)]);
var inst_49438 = (state_49463[(2)]);
var inst_49439 = cljs.core.next(inst_49423);
var inst_49405 = inst_49439;
var inst_49406 = null;
var inst_49407 = (0);
var inst_49408 = (0);
var state_49463__$1 = (function (){var statearr_49498 = state_49463;
(statearr_49498[(19)] = inst_49407);

(statearr_49498[(25)] = inst_49438);

(statearr_49498[(10)] = inst_49408);

(statearr_49498[(20)] = inst_49405);

(statearr_49498[(12)] = inst_49406);

return statearr_49498;
})();
var statearr_49499_50597 = state_49463__$1;
(statearr_49499_50597[(2)] = null);

(statearr_49499_50597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (43))){
var state_49463__$1 = state_49463;
var statearr_49500_50598 = state_49463__$1;
(statearr_49500_50598[(2)] = null);

(statearr_49500_50598[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (29))){
var inst_49447 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49501_50599 = state_49463__$1;
(statearr_49501_50599[(2)] = inst_49447);

(statearr_49501_50599[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (44))){
var inst_49456 = (state_49463[(2)]);
var state_49463__$1 = (function (){var statearr_49502 = state_49463;
(statearr_49502[(26)] = inst_49456);

return statearr_49502;
})();
var statearr_49503_50600 = state_49463__$1;
(statearr_49503_50600[(2)] = null);

(statearr_49503_50600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (6))){
var inst_49397 = (state_49463[(27)]);
var inst_49396 = cljs.core.deref(cs);
var inst_49397__$1 = cljs.core.keys(inst_49396);
var inst_49398 = cljs.core.count(inst_49397__$1);
var inst_49399 = cljs.core.reset_BANG_(dctr,inst_49398);
var inst_49404 = cljs.core.seq(inst_49397__$1);
var inst_49405 = inst_49404;
var inst_49406 = null;
var inst_49407 = (0);
var inst_49408 = (0);
var state_49463__$1 = (function (){var statearr_49504 = state_49463;
(statearr_49504[(19)] = inst_49407);

(statearr_49504[(10)] = inst_49408);

(statearr_49504[(28)] = inst_49399);

(statearr_49504[(20)] = inst_49405);

(statearr_49504[(27)] = inst_49397__$1);

(statearr_49504[(12)] = inst_49406);

return statearr_49504;
})();
var statearr_49505_50601 = state_49463__$1;
(statearr_49505_50601[(2)] = null);

(statearr_49505_50601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (28))){
var inst_49405 = (state_49463[(20)]);
var inst_49423 = (state_49463[(23)]);
var inst_49423__$1 = cljs.core.seq(inst_49405);
var state_49463__$1 = (function (){var statearr_49506 = state_49463;
(statearr_49506[(23)] = inst_49423__$1);

return statearr_49506;
})();
if(inst_49423__$1){
var statearr_49507_50602 = state_49463__$1;
(statearr_49507_50602[(1)] = (33));

} else {
var statearr_49508_50603 = state_49463__$1;
(statearr_49508_50603[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (25))){
var inst_49407 = (state_49463[(19)]);
var inst_49408 = (state_49463[(10)]);
var inst_49410 = (inst_49408 < inst_49407);
var inst_49411 = inst_49410;
var state_49463__$1 = state_49463;
if(cljs.core.truth_(inst_49411)){
var statearr_49509_50604 = state_49463__$1;
(statearr_49509_50604[(1)] = (27));

} else {
var statearr_49510_50605 = state_49463__$1;
(statearr_49510_50605[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (34))){
var state_49463__$1 = state_49463;
var statearr_49511_50606 = state_49463__$1;
(statearr_49511_50606[(2)] = null);

(statearr_49511_50606[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (17))){
var state_49463__$1 = state_49463;
var statearr_49512_50607 = state_49463__$1;
(statearr_49512_50607[(2)] = null);

(statearr_49512_50607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (3))){
var inst_49461 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49463__$1,inst_49461);
} else {
if((state_val_49464 === (12))){
var inst_49392 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49513_50608 = state_49463__$1;
(statearr_49513_50608[(2)] = inst_49392);

(statearr_49513_50608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (2))){
var state_49463__$1 = state_49463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49463__$1,(4),ch);
} else {
if((state_val_49464 === (23))){
var state_49463__$1 = state_49463;
var statearr_49514_50609 = state_49463__$1;
(statearr_49514_50609[(2)] = null);

(statearr_49514_50609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (35))){
var inst_49445 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49515_50610 = state_49463__$1;
(statearr_49515_50610[(2)] = inst_49445);

(statearr_49515_50610[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (19))){
var inst_49364 = (state_49463[(7)]);
var inst_49368 = cljs.core.chunk_first(inst_49364);
var inst_49369 = cljs.core.chunk_rest(inst_49364);
var inst_49370 = cljs.core.count(inst_49368);
var inst_49342 = inst_49369;
var inst_49343 = inst_49368;
var inst_49344 = inst_49370;
var inst_49345 = (0);
var state_49463__$1 = (function (){var statearr_49516 = state_49463;
(statearr_49516[(13)] = inst_49343);

(statearr_49516[(14)] = inst_49342);

(statearr_49516[(16)] = inst_49345);

(statearr_49516[(17)] = inst_49344);

return statearr_49516;
})();
var statearr_49517_50611 = state_49463__$1;
(statearr_49517_50611[(2)] = null);

(statearr_49517_50611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (11))){
var inst_49342 = (state_49463[(14)]);
var inst_49364 = (state_49463[(7)]);
var inst_49364__$1 = cljs.core.seq(inst_49342);
var state_49463__$1 = (function (){var statearr_49518 = state_49463;
(statearr_49518[(7)] = inst_49364__$1);

return statearr_49518;
})();
if(inst_49364__$1){
var statearr_49519_50612 = state_49463__$1;
(statearr_49519_50612[(1)] = (16));

} else {
var statearr_49520_50613 = state_49463__$1;
(statearr_49520_50613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (9))){
var inst_49394 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49521_50614 = state_49463__$1;
(statearr_49521_50614[(2)] = inst_49394);

(statearr_49521_50614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (5))){
var inst_49340 = cljs.core.deref(cs);
var inst_49341 = cljs.core.seq(inst_49340);
var inst_49342 = inst_49341;
var inst_49343 = null;
var inst_49344 = (0);
var inst_49345 = (0);
var state_49463__$1 = (function (){var statearr_49522 = state_49463;
(statearr_49522[(13)] = inst_49343);

(statearr_49522[(14)] = inst_49342);

(statearr_49522[(16)] = inst_49345);

(statearr_49522[(17)] = inst_49344);

return statearr_49522;
})();
var statearr_49523_50615 = state_49463__$1;
(statearr_49523_50615[(2)] = null);

(statearr_49523_50615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (14))){
var state_49463__$1 = state_49463;
var statearr_49524_50616 = state_49463__$1;
(statearr_49524_50616[(2)] = null);

(statearr_49524_50616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (45))){
var inst_49453 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49525_50617 = state_49463__$1;
(statearr_49525_50617[(2)] = inst_49453);

(statearr_49525_50617[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (26))){
var inst_49397 = (state_49463[(27)]);
var inst_49449 = (state_49463[(2)]);
var inst_49450 = cljs.core.seq(inst_49397);
var state_49463__$1 = (function (){var statearr_49526 = state_49463;
(statearr_49526[(29)] = inst_49449);

return statearr_49526;
})();
if(inst_49450){
var statearr_49527_50618 = state_49463__$1;
(statearr_49527_50618[(1)] = (42));

} else {
var statearr_49528_50619 = state_49463__$1;
(statearr_49528_50619[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (16))){
var inst_49364 = (state_49463[(7)]);
var inst_49366 = cljs.core.chunked_seq_QMARK_(inst_49364);
var state_49463__$1 = state_49463;
if(inst_49366){
var statearr_49529_50620 = state_49463__$1;
(statearr_49529_50620[(1)] = (19));

} else {
var statearr_49530_50621 = state_49463__$1;
(statearr_49530_50621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (38))){
var inst_49442 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49531_50622 = state_49463__$1;
(statearr_49531_50622[(2)] = inst_49442);

(statearr_49531_50622[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (30))){
var state_49463__$1 = state_49463;
var statearr_49532_50623 = state_49463__$1;
(statearr_49532_50623[(2)] = null);

(statearr_49532_50623[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (10))){
var inst_49343 = (state_49463[(13)]);
var inst_49345 = (state_49463[(16)]);
var inst_49353 = cljs.core._nth(inst_49343,inst_49345);
var inst_49354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49353,(0),null);
var inst_49355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49353,(1),null);
var state_49463__$1 = (function (){var statearr_49533 = state_49463;
(statearr_49533[(24)] = inst_49354);

return statearr_49533;
})();
if(cljs.core.truth_(inst_49355)){
var statearr_49534_50624 = state_49463__$1;
(statearr_49534_50624[(1)] = (13));

} else {
var statearr_49535_50625 = state_49463__$1;
(statearr_49535_50625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (18))){
var inst_49390 = (state_49463[(2)]);
var state_49463__$1 = state_49463;
var statearr_49536_50626 = state_49463__$1;
(statearr_49536_50626[(2)] = inst_49390);

(statearr_49536_50626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (42))){
var state_49463__$1 = state_49463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49463__$1,(45),dchan);
} else {
if((state_val_49464 === (37))){
var inst_49333 = (state_49463[(9)]);
var inst_49432 = (state_49463[(22)]);
var inst_49423 = (state_49463[(23)]);
var inst_49432__$1 = cljs.core.first(inst_49423);
var inst_49433 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49432__$1,inst_49333,done);
var state_49463__$1 = (function (){var statearr_49537 = state_49463;
(statearr_49537[(22)] = inst_49432__$1);

return statearr_49537;
})();
if(cljs.core.truth_(inst_49433)){
var statearr_49538_50627 = state_49463__$1;
(statearr_49538_50627[(1)] = (39));

} else {
var statearr_49539_50628 = state_49463__$1;
(statearr_49539_50628[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49464 === (8))){
var inst_49345 = (state_49463[(16)]);
var inst_49344 = (state_49463[(17)]);
var inst_49347 = (inst_49345 < inst_49344);
var inst_49348 = inst_49347;
var state_49463__$1 = state_49463;
if(cljs.core.truth_(inst_49348)){
var statearr_49540_50629 = state_49463__$1;
(statearr_49540_50629[(1)] = (10));

} else {
var statearr_49541_50630 = state_49463__$1;
(statearr_49541_50630[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__48825__auto__ = null;
var cljs$core$async$mult_$_state_machine__48825__auto____0 = (function (){
var statearr_49542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49542[(0)] = cljs$core$async$mult_$_state_machine__48825__auto__);

(statearr_49542[(1)] = (1));

return statearr_49542;
});
var cljs$core$async$mult_$_state_machine__48825__auto____1 = (function (state_49463){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49463);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49543){var ex__48828__auto__ = e49543;
var statearr_49544_50635 = state_49463;
(statearr_49544_50635[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49463[(4)]))){
var statearr_49545_50636 = state_49463;
(statearr_49545_50636[(1)] = cljs.core.first((state_49463[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50637 = state_49463;
state_49463 = G__50637;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48825__auto__ = function(state_49463){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48825__auto____1.call(this,state_49463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48825__auto____0;
cljs$core$async$mult_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48825__auto____1;
return cljs$core$async$mult_$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49546 = f__48860__auto__();
(statearr_49546[(6)] = c__48859__auto___50568);

return statearr_49546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49548 = arguments.length;
switch (G__49548) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50639 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50639(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50640 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50640(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50641 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50641(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50642 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50642(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50643 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50643(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50644 = arguments.length;
var i__4830__auto___50645 = (0);
while(true){
if((i__4830__auto___50645 < len__4829__auto___50644)){
args__4835__auto__.push((arguments[i__4830__auto___50645]));

var G__50646 = (i__4830__auto___50645 + (1));
i__4830__auto___50645 = G__50646;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49553){
var map__49554 = p__49553;
var map__49554__$1 = cljs.core.__destructure_map(map__49554);
var opts = map__49554__$1;
var statearr_49555_50647 = state;
(statearr_49555_50647[(1)] = cont_block);


var temp__5754__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49556_50648 = state;
(statearr_49556_50648[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5754__auto__)){
var cb = temp__5754__auto__;
var statearr_49557_50649 = state;
(statearr_49557_50649[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49549){
var G__49550 = cljs.core.first(seq49549);
var seq49549__$1 = cljs.core.next(seq49549);
var G__49551 = cljs.core.first(seq49549__$1);
var seq49549__$2 = cljs.core.next(seq49549__$1);
var G__49552 = cljs.core.first(seq49549__$2);
var seq49549__$3 = cljs.core.next(seq49549__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49550,G__49551,G__49552,seq49549__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49558 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49559){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49559 = meta49559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49560,meta49559__$1){
var self__ = this;
var _49560__$1 = this;
return (new cljs.core.async.t_cljs$core$async49558(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49559__$1));
}));

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49560){
var self__ = this;
var _49560__$1 = this;
return self__.meta49559;
}));

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49558.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49559","meta49559",414646128,null)], null);
}));

(cljs.core.async.t_cljs$core$async49558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49558");

(cljs.core.async.t_cljs$core$async49558.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49558.
 */
cljs.core.async.__GT_t_cljs$core$async49558 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49558(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49559){
return (new cljs.core.async.t_cljs$core$async49558(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49559));
});

}

return (new cljs.core.async.t_cljs$core$async49558(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48859__auto___50679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49628){
var state_val_49629 = (state_49628[(1)]);
if((state_val_49629 === (7))){
var inst_49588 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
if(cljs.core.truth_(inst_49588)){
var statearr_49630_50680 = state_49628__$1;
(statearr_49630_50680[(1)] = (8));

} else {
var statearr_49631_50681 = state_49628__$1;
(statearr_49631_50681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (20))){
var inst_49581 = (state_49628[(7)]);
var state_49628__$1 = state_49628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49628__$1,(23),out,inst_49581);
} else {
if((state_val_49629 === (1))){
var inst_49564 = calc_state();
var inst_49565 = cljs.core.__destructure_map(inst_49564);
var inst_49566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49565,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49565,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49565,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49569 = inst_49564;
var state_49628__$1 = (function (){var statearr_49632 = state_49628;
(statearr_49632[(8)] = inst_49567);

(statearr_49632[(9)] = inst_49569);

(statearr_49632[(10)] = inst_49566);

(statearr_49632[(11)] = inst_49568);

return statearr_49632;
})();
var statearr_49633_50682 = state_49628__$1;
(statearr_49633_50682[(2)] = null);

(statearr_49633_50682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (24))){
var inst_49572 = (state_49628[(12)]);
var inst_49569 = inst_49572;
var state_49628__$1 = (function (){var statearr_49634 = state_49628;
(statearr_49634[(9)] = inst_49569);

return statearr_49634;
})();
var statearr_49635_50683 = state_49628__$1;
(statearr_49635_50683[(2)] = null);

(statearr_49635_50683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (4))){
var inst_49583 = (state_49628[(13)]);
var inst_49581 = (state_49628[(7)]);
var inst_49580 = (state_49628[(2)]);
var inst_49581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49580,(0),null);
var inst_49582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49580,(1),null);
var inst_49583__$1 = (inst_49581__$1 == null);
var state_49628__$1 = (function (){var statearr_49636 = state_49628;
(statearr_49636[(14)] = inst_49582);

(statearr_49636[(13)] = inst_49583__$1);

(statearr_49636[(7)] = inst_49581__$1);

return statearr_49636;
})();
if(cljs.core.truth_(inst_49583__$1)){
var statearr_49637_50684 = state_49628__$1;
(statearr_49637_50684[(1)] = (5));

} else {
var statearr_49638_50685 = state_49628__$1;
(statearr_49638_50685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (15))){
var inst_49602 = (state_49628[(15)]);
var inst_49573 = (state_49628[(16)]);
var inst_49602__$1 = cljs.core.empty_QMARK_(inst_49573);
var state_49628__$1 = (function (){var statearr_49639 = state_49628;
(statearr_49639[(15)] = inst_49602__$1);

return statearr_49639;
})();
if(inst_49602__$1){
var statearr_49640_50686 = state_49628__$1;
(statearr_49640_50686[(1)] = (17));

} else {
var statearr_49641_50687 = state_49628__$1;
(statearr_49641_50687[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (21))){
var inst_49572 = (state_49628[(12)]);
var inst_49569 = inst_49572;
var state_49628__$1 = (function (){var statearr_49642 = state_49628;
(statearr_49642[(9)] = inst_49569);

return statearr_49642;
})();
var statearr_49643_50688 = state_49628__$1;
(statearr_49643_50688[(2)] = null);

(statearr_49643_50688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (13))){
var inst_49595 = (state_49628[(2)]);
var inst_49596 = calc_state();
var inst_49569 = inst_49596;
var state_49628__$1 = (function (){var statearr_49644 = state_49628;
(statearr_49644[(9)] = inst_49569);

(statearr_49644[(17)] = inst_49595);

return statearr_49644;
})();
var statearr_49645_50689 = state_49628__$1;
(statearr_49645_50689[(2)] = null);

(statearr_49645_50689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (22))){
var inst_49622 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
var statearr_49646_50690 = state_49628__$1;
(statearr_49646_50690[(2)] = inst_49622);

(statearr_49646_50690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (6))){
var inst_49582 = (state_49628[(14)]);
var inst_49586 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49582,change);
var state_49628__$1 = state_49628;
var statearr_49647_50691 = state_49628__$1;
(statearr_49647_50691[(2)] = inst_49586);

(statearr_49647_50691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (25))){
var state_49628__$1 = state_49628;
var statearr_49648_50692 = state_49628__$1;
(statearr_49648_50692[(2)] = null);

(statearr_49648_50692[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (17))){
var inst_49582 = (state_49628[(14)]);
var inst_49574 = (state_49628[(18)]);
var inst_49604 = (inst_49574.cljs$core$IFn$_invoke$arity$1 ? inst_49574.cljs$core$IFn$_invoke$arity$1(inst_49582) : inst_49574.call(null,inst_49582));
var inst_49605 = cljs.core.not(inst_49604);
var state_49628__$1 = state_49628;
var statearr_49649_50693 = state_49628__$1;
(statearr_49649_50693[(2)] = inst_49605);

(statearr_49649_50693[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (3))){
var inst_49626 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49628__$1,inst_49626);
} else {
if((state_val_49629 === (12))){
var state_49628__$1 = state_49628;
var statearr_49650_50694 = state_49628__$1;
(statearr_49650_50694[(2)] = null);

(statearr_49650_50694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (2))){
var inst_49569 = (state_49628[(9)]);
var inst_49572 = (state_49628[(12)]);
var inst_49572__$1 = cljs.core.__destructure_map(inst_49569);
var inst_49573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49572__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49572__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49572__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49628__$1 = (function (){var statearr_49651 = state_49628;
(statearr_49651[(18)] = inst_49574);

(statearr_49651[(16)] = inst_49573);

(statearr_49651[(12)] = inst_49572__$1);

return statearr_49651;
})();
return cljs.core.async.ioc_alts_BANG_(state_49628__$1,(4),inst_49575);
} else {
if((state_val_49629 === (23))){
var inst_49613 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
if(cljs.core.truth_(inst_49613)){
var statearr_49652_50695 = state_49628__$1;
(statearr_49652_50695[(1)] = (24));

} else {
var statearr_49653_50696 = state_49628__$1;
(statearr_49653_50696[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (19))){
var inst_49608 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
var statearr_49654_50697 = state_49628__$1;
(statearr_49654_50697[(2)] = inst_49608);

(statearr_49654_50697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (11))){
var inst_49582 = (state_49628[(14)]);
var inst_49592 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49582);
var state_49628__$1 = state_49628;
var statearr_49655_50698 = state_49628__$1;
(statearr_49655_50698[(2)] = inst_49592);

(statearr_49655_50698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (9))){
var inst_49582 = (state_49628[(14)]);
var inst_49599 = (state_49628[(19)]);
var inst_49573 = (state_49628[(16)]);
var inst_49599__$1 = (inst_49573.cljs$core$IFn$_invoke$arity$1 ? inst_49573.cljs$core$IFn$_invoke$arity$1(inst_49582) : inst_49573.call(null,inst_49582));
var state_49628__$1 = (function (){var statearr_49656 = state_49628;
(statearr_49656[(19)] = inst_49599__$1);

return statearr_49656;
})();
if(cljs.core.truth_(inst_49599__$1)){
var statearr_49657_50699 = state_49628__$1;
(statearr_49657_50699[(1)] = (14));

} else {
var statearr_49658_50700 = state_49628__$1;
(statearr_49658_50700[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (5))){
var inst_49583 = (state_49628[(13)]);
var state_49628__$1 = state_49628;
var statearr_49659_50701 = state_49628__$1;
(statearr_49659_50701[(2)] = inst_49583);

(statearr_49659_50701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (14))){
var inst_49599 = (state_49628[(19)]);
var state_49628__$1 = state_49628;
var statearr_49660_50702 = state_49628__$1;
(statearr_49660_50702[(2)] = inst_49599);

(statearr_49660_50702[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (26))){
var inst_49618 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
var statearr_49661_50703 = state_49628__$1;
(statearr_49661_50703[(2)] = inst_49618);

(statearr_49661_50703[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (16))){
var inst_49610 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
if(cljs.core.truth_(inst_49610)){
var statearr_49662_50710 = state_49628__$1;
(statearr_49662_50710[(1)] = (20));

} else {
var statearr_49663_50711 = state_49628__$1;
(statearr_49663_50711[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (10))){
var inst_49624 = (state_49628[(2)]);
var state_49628__$1 = state_49628;
var statearr_49664_50712 = state_49628__$1;
(statearr_49664_50712[(2)] = inst_49624);

(statearr_49664_50712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (18))){
var inst_49602 = (state_49628[(15)]);
var state_49628__$1 = state_49628;
var statearr_49665_50713 = state_49628__$1;
(statearr_49665_50713[(2)] = inst_49602);

(statearr_49665_50713[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49629 === (8))){
var inst_49581 = (state_49628[(7)]);
var inst_49590 = (inst_49581 == null);
var state_49628__$1 = state_49628;
if(cljs.core.truth_(inst_49590)){
var statearr_49666_50714 = state_49628__$1;
(statearr_49666_50714[(1)] = (11));

} else {
var statearr_49667_50715 = state_49628__$1;
(statearr_49667_50715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__48825__auto__ = null;
var cljs$core$async$mix_$_state_machine__48825__auto____0 = (function (){
var statearr_49668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49668[(0)] = cljs$core$async$mix_$_state_machine__48825__auto__);

(statearr_49668[(1)] = (1));

return statearr_49668;
});
var cljs$core$async$mix_$_state_machine__48825__auto____1 = (function (state_49628){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49628);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49669){var ex__48828__auto__ = e49669;
var statearr_49670_50716 = state_49628;
(statearr_49670_50716[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49628[(4)]))){
var statearr_49671_50717 = state_49628;
(statearr_49671_50717[(1)] = cljs.core.first((state_49628[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50718 = state_49628;
state_49628 = G__50718;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48825__auto__ = function(state_49628){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48825__auto____1.call(this,state_49628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48825__auto____0;
cljs$core$async$mix_$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48825__auto____1;
return cljs$core$async$mix_$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49672 = f__48860__auto__();
(statearr_49672[(6)] = c__48859__auto___50679);

return statearr_49672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50719 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50719(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50720 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50720(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50721 = (function() {
var G__50722 = null;
var G__50722__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50722__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50722 = function(p,v){
switch(arguments.length){
case 1:
return G__50722__1.call(this,p);
case 2:
return G__50722__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50722.cljs$core$IFn$_invoke$arity$1 = G__50722__1;
G__50722.cljs$core$IFn$_invoke$arity$2 = G__50722__2;
return G__50722;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49674 = arguments.length;
switch (G__49674) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50721(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50721(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49677 = arguments.length;
switch (G__49677) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49675_SHARP_){
if(cljs.core.truth_((p1__49675_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49675_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49675_SHARP_.call(null,topic)))){
return p1__49675_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49675_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49678 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49679){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49679 = meta49679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49680,meta49679__$1){
var self__ = this;
var _49680__$1 = this;
return (new cljs.core.async.t_cljs$core$async49678(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49679__$1));
}));

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49680){
var self__ = this;
var _49680__$1 = this;
return self__.meta49679;
}));

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5754__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5754__auto__)){
var m = temp__5754__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49679","meta49679",-118613684,null)], null);
}));

(cljs.core.async.t_cljs$core$async49678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49678");

(cljs.core.async.t_cljs$core$async49678.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49678.
 */
cljs.core.async.__GT_t_cljs$core$async49678 = (function cljs$core$async$__GT_t_cljs$core$async49678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49679){
return (new cljs.core.async.t_cljs$core$async49678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49679));
});

}

return (new cljs.core.async.t_cljs$core$async49678(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48859__auto___50725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49752){
var state_val_49753 = (state_49752[(1)]);
if((state_val_49753 === (7))){
var inst_49748 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49754_50726 = state_49752__$1;
(statearr_49754_50726[(2)] = inst_49748);

(statearr_49754_50726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (20))){
var state_49752__$1 = state_49752;
var statearr_49755_50727 = state_49752__$1;
(statearr_49755_50727[(2)] = null);

(statearr_49755_50727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (1))){
var state_49752__$1 = state_49752;
var statearr_49756_50728 = state_49752__$1;
(statearr_49756_50728[(2)] = null);

(statearr_49756_50728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (24))){
var inst_49731 = (state_49752[(7)]);
var inst_49740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49731);
var state_49752__$1 = state_49752;
var statearr_49757_50729 = state_49752__$1;
(statearr_49757_50729[(2)] = inst_49740);

(statearr_49757_50729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (4))){
var inst_49683 = (state_49752[(8)]);
var inst_49683__$1 = (state_49752[(2)]);
var inst_49684 = (inst_49683__$1 == null);
var state_49752__$1 = (function (){var statearr_49758 = state_49752;
(statearr_49758[(8)] = inst_49683__$1);

return statearr_49758;
})();
if(cljs.core.truth_(inst_49684)){
var statearr_49759_50738 = state_49752__$1;
(statearr_49759_50738[(1)] = (5));

} else {
var statearr_49760_50739 = state_49752__$1;
(statearr_49760_50739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (15))){
var inst_49725 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49761_50740 = state_49752__$1;
(statearr_49761_50740[(2)] = inst_49725);

(statearr_49761_50740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (21))){
var inst_49745 = (state_49752[(2)]);
var state_49752__$1 = (function (){var statearr_49762 = state_49752;
(statearr_49762[(9)] = inst_49745);

return statearr_49762;
})();
var statearr_49763_50741 = state_49752__$1;
(statearr_49763_50741[(2)] = null);

(statearr_49763_50741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (13))){
var inst_49707 = (state_49752[(10)]);
var inst_49709 = cljs.core.chunked_seq_QMARK_(inst_49707);
var state_49752__$1 = state_49752;
if(inst_49709){
var statearr_49764_50742 = state_49752__$1;
(statearr_49764_50742[(1)] = (16));

} else {
var statearr_49765_50743 = state_49752__$1;
(statearr_49765_50743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (22))){
var inst_49737 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
if(cljs.core.truth_(inst_49737)){
var statearr_49766_50744 = state_49752__$1;
(statearr_49766_50744[(1)] = (23));

} else {
var statearr_49767_50745 = state_49752__$1;
(statearr_49767_50745[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (6))){
var inst_49731 = (state_49752[(7)]);
var inst_49683 = (state_49752[(8)]);
var inst_49733 = (state_49752[(11)]);
var inst_49731__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49683) : topic_fn.call(null,inst_49683));
var inst_49732 = cljs.core.deref(mults);
var inst_49733__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49732,inst_49731__$1);
var state_49752__$1 = (function (){var statearr_49768 = state_49752;
(statearr_49768[(7)] = inst_49731__$1);

(statearr_49768[(11)] = inst_49733__$1);

return statearr_49768;
})();
if(cljs.core.truth_(inst_49733__$1)){
var statearr_49769_50746 = state_49752__$1;
(statearr_49769_50746[(1)] = (19));

} else {
var statearr_49770_50747 = state_49752__$1;
(statearr_49770_50747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (25))){
var inst_49742 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49771_50748 = state_49752__$1;
(statearr_49771_50748[(2)] = inst_49742);

(statearr_49771_50748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (17))){
var inst_49707 = (state_49752[(10)]);
var inst_49716 = cljs.core.first(inst_49707);
var inst_49717 = cljs.core.async.muxch_STAR_(inst_49716);
var inst_49718 = cljs.core.async.close_BANG_(inst_49717);
var inst_49719 = cljs.core.next(inst_49707);
var inst_49693 = inst_49719;
var inst_49694 = null;
var inst_49695 = (0);
var inst_49696 = (0);
var state_49752__$1 = (function (){var statearr_49772 = state_49752;
(statearr_49772[(12)] = inst_49695);

(statearr_49772[(13)] = inst_49693);

(statearr_49772[(14)] = inst_49718);

(statearr_49772[(15)] = inst_49696);

(statearr_49772[(16)] = inst_49694);

return statearr_49772;
})();
var statearr_49773_50749 = state_49752__$1;
(statearr_49773_50749[(2)] = null);

(statearr_49773_50749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (3))){
var inst_49750 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49752__$1,inst_49750);
} else {
if((state_val_49753 === (12))){
var inst_49727 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49774_50750 = state_49752__$1;
(statearr_49774_50750[(2)] = inst_49727);

(statearr_49774_50750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (2))){
var state_49752__$1 = state_49752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49752__$1,(4),ch);
} else {
if((state_val_49753 === (23))){
var state_49752__$1 = state_49752;
var statearr_49775_50751 = state_49752__$1;
(statearr_49775_50751[(2)] = null);

(statearr_49775_50751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (19))){
var inst_49683 = (state_49752[(8)]);
var inst_49733 = (state_49752[(11)]);
var inst_49735 = cljs.core.async.muxch_STAR_(inst_49733);
var state_49752__$1 = state_49752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49752__$1,(22),inst_49735,inst_49683);
} else {
if((state_val_49753 === (11))){
var inst_49693 = (state_49752[(13)]);
var inst_49707 = (state_49752[(10)]);
var inst_49707__$1 = cljs.core.seq(inst_49693);
var state_49752__$1 = (function (){var statearr_49776 = state_49752;
(statearr_49776[(10)] = inst_49707__$1);

return statearr_49776;
})();
if(inst_49707__$1){
var statearr_49777_50752 = state_49752__$1;
(statearr_49777_50752[(1)] = (13));

} else {
var statearr_49778_50753 = state_49752__$1;
(statearr_49778_50753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (9))){
var inst_49729 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49779_50754 = state_49752__$1;
(statearr_49779_50754[(2)] = inst_49729);

(statearr_49779_50754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (5))){
var inst_49690 = cljs.core.deref(mults);
var inst_49691 = cljs.core.vals(inst_49690);
var inst_49692 = cljs.core.seq(inst_49691);
var inst_49693 = inst_49692;
var inst_49694 = null;
var inst_49695 = (0);
var inst_49696 = (0);
var state_49752__$1 = (function (){var statearr_49780 = state_49752;
(statearr_49780[(12)] = inst_49695);

(statearr_49780[(13)] = inst_49693);

(statearr_49780[(15)] = inst_49696);

(statearr_49780[(16)] = inst_49694);

return statearr_49780;
})();
var statearr_49781_50755 = state_49752__$1;
(statearr_49781_50755[(2)] = null);

(statearr_49781_50755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (14))){
var state_49752__$1 = state_49752;
var statearr_49785_50756 = state_49752__$1;
(statearr_49785_50756[(2)] = null);

(statearr_49785_50756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (16))){
var inst_49707 = (state_49752[(10)]);
var inst_49711 = cljs.core.chunk_first(inst_49707);
var inst_49712 = cljs.core.chunk_rest(inst_49707);
var inst_49713 = cljs.core.count(inst_49711);
var inst_49693 = inst_49712;
var inst_49694 = inst_49711;
var inst_49695 = inst_49713;
var inst_49696 = (0);
var state_49752__$1 = (function (){var statearr_49786 = state_49752;
(statearr_49786[(12)] = inst_49695);

(statearr_49786[(13)] = inst_49693);

(statearr_49786[(15)] = inst_49696);

(statearr_49786[(16)] = inst_49694);

return statearr_49786;
})();
var statearr_49787_50757 = state_49752__$1;
(statearr_49787_50757[(2)] = null);

(statearr_49787_50757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (10))){
var inst_49695 = (state_49752[(12)]);
var inst_49693 = (state_49752[(13)]);
var inst_49696 = (state_49752[(15)]);
var inst_49694 = (state_49752[(16)]);
var inst_49701 = cljs.core._nth(inst_49694,inst_49696);
var inst_49702 = cljs.core.async.muxch_STAR_(inst_49701);
var inst_49703 = cljs.core.async.close_BANG_(inst_49702);
var inst_49704 = (inst_49696 + (1));
var tmp49782 = inst_49695;
var tmp49783 = inst_49693;
var tmp49784 = inst_49694;
var inst_49693__$1 = tmp49783;
var inst_49694__$1 = tmp49784;
var inst_49695__$1 = tmp49782;
var inst_49696__$1 = inst_49704;
var state_49752__$1 = (function (){var statearr_49788 = state_49752;
(statearr_49788[(12)] = inst_49695__$1);

(statearr_49788[(13)] = inst_49693__$1);

(statearr_49788[(17)] = inst_49703);

(statearr_49788[(15)] = inst_49696__$1);

(statearr_49788[(16)] = inst_49694__$1);

return statearr_49788;
})();
var statearr_49789_50758 = state_49752__$1;
(statearr_49789_50758[(2)] = null);

(statearr_49789_50758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (18))){
var inst_49722 = (state_49752[(2)]);
var state_49752__$1 = state_49752;
var statearr_49790_50759 = state_49752__$1;
(statearr_49790_50759[(2)] = inst_49722);

(statearr_49790_50759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49753 === (8))){
var inst_49695 = (state_49752[(12)]);
var inst_49696 = (state_49752[(15)]);
var inst_49698 = (inst_49696 < inst_49695);
var inst_49699 = inst_49698;
var state_49752__$1 = state_49752;
if(cljs.core.truth_(inst_49699)){
var statearr_49791_50760 = state_49752__$1;
(statearr_49791_50760[(1)] = (10));

} else {
var statearr_49792_50761 = state_49752__$1;
(statearr_49792_50761[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_49793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49793[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_49793[(1)] = (1));

return statearr_49793;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_49752){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49752);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49794){var ex__48828__auto__ = e49794;
var statearr_49795_50762 = state_49752;
(statearr_49795_50762[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49752[(4)]))){
var statearr_49796_50763 = state_49752;
(statearr_49796_50763[(1)] = cljs.core.first((state_49752[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50764 = state_49752;
state_49752 = G__50764;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_49752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_49752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49797 = f__48860__auto__();
(statearr_49797[(6)] = c__48859__auto___50725);

return statearr_49797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49799 = arguments.length;
switch (G__49799) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49801 = arguments.length;
switch (G__49801) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49803 = arguments.length;
switch (G__49803) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__48859__auto___50768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49846){
var state_val_49847 = (state_49846[(1)]);
if((state_val_49847 === (7))){
var state_49846__$1 = state_49846;
var statearr_49848_50772 = state_49846__$1;
(statearr_49848_50772[(2)] = null);

(statearr_49848_50772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (1))){
var state_49846__$1 = state_49846;
var statearr_49849_50773 = state_49846__$1;
(statearr_49849_50773[(2)] = null);

(statearr_49849_50773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (4))){
var inst_49806 = (state_49846[(7)]);
var inst_49807 = (state_49846[(8)]);
var inst_49809 = (inst_49807 < inst_49806);
var state_49846__$1 = state_49846;
if(cljs.core.truth_(inst_49809)){
var statearr_49850_50774 = state_49846__$1;
(statearr_49850_50774[(1)] = (6));

} else {
var statearr_49851_50775 = state_49846__$1;
(statearr_49851_50775[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (15))){
var inst_49832 = (state_49846[(9)]);
var inst_49837 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49832);
var state_49846__$1 = state_49846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49846__$1,(17),out,inst_49837);
} else {
if((state_val_49847 === (13))){
var inst_49832 = (state_49846[(9)]);
var inst_49832__$1 = (state_49846[(2)]);
var inst_49833 = cljs.core.some(cljs.core.nil_QMARK_,inst_49832__$1);
var state_49846__$1 = (function (){var statearr_49852 = state_49846;
(statearr_49852[(9)] = inst_49832__$1);

return statearr_49852;
})();
if(cljs.core.truth_(inst_49833)){
var statearr_49853_50776 = state_49846__$1;
(statearr_49853_50776[(1)] = (14));

} else {
var statearr_49854_50777 = state_49846__$1;
(statearr_49854_50777[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (6))){
var state_49846__$1 = state_49846;
var statearr_49855_50778 = state_49846__$1;
(statearr_49855_50778[(2)] = null);

(statearr_49855_50778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (17))){
var inst_49839 = (state_49846[(2)]);
var state_49846__$1 = (function (){var statearr_49857 = state_49846;
(statearr_49857[(10)] = inst_49839);

return statearr_49857;
})();
var statearr_49858_50779 = state_49846__$1;
(statearr_49858_50779[(2)] = null);

(statearr_49858_50779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (3))){
var inst_49844 = (state_49846[(2)]);
var state_49846__$1 = state_49846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49846__$1,inst_49844);
} else {
if((state_val_49847 === (12))){
var _ = (function (){var statearr_49859 = state_49846;
(statearr_49859[(4)] = cljs.core.rest((state_49846[(4)])));

return statearr_49859;
})();
var state_49846__$1 = state_49846;
var ex49856 = (state_49846__$1[(2)]);
var statearr_49860_50780 = state_49846__$1;
(statearr_49860_50780[(5)] = ex49856);


if((ex49856 instanceof Object)){
var statearr_49861_50781 = state_49846__$1;
(statearr_49861_50781[(1)] = (11));

(statearr_49861_50781[(5)] = null);

} else {
throw ex49856;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (2))){
var inst_49805 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49806 = cnt;
var inst_49807 = (0);
var state_49846__$1 = (function (){var statearr_49862 = state_49846;
(statearr_49862[(11)] = inst_49805);

(statearr_49862[(7)] = inst_49806);

(statearr_49862[(8)] = inst_49807);

return statearr_49862;
})();
var statearr_49863_50782 = state_49846__$1;
(statearr_49863_50782[(2)] = null);

(statearr_49863_50782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (11))){
var inst_49811 = (state_49846[(2)]);
var inst_49812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49846__$1 = (function (){var statearr_49864 = state_49846;
(statearr_49864[(12)] = inst_49811);

return statearr_49864;
})();
var statearr_49865_50783 = state_49846__$1;
(statearr_49865_50783[(2)] = inst_49812);

(statearr_49865_50783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (9))){
var inst_49807 = (state_49846[(8)]);
var _ = (function (){var statearr_49866 = state_49846;
(statearr_49866[(4)] = cljs.core.cons((12),(state_49846[(4)])));

return statearr_49866;
})();
var inst_49818 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49807) : chs__$1.call(null,inst_49807));
var inst_49819 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49807) : done.call(null,inst_49807));
var inst_49820 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49818,inst_49819);
var ___$1 = (function (){var statearr_49867 = state_49846;
(statearr_49867[(4)] = cljs.core.rest((state_49846[(4)])));

return statearr_49867;
})();
var state_49846__$1 = state_49846;
var statearr_49868_50784 = state_49846__$1;
(statearr_49868_50784[(2)] = inst_49820);

(statearr_49868_50784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (5))){
var inst_49830 = (state_49846[(2)]);
var state_49846__$1 = (function (){var statearr_49869 = state_49846;
(statearr_49869[(13)] = inst_49830);

return statearr_49869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49846__$1,(13),dchan);
} else {
if((state_val_49847 === (14))){
var inst_49835 = cljs.core.async.close_BANG_(out);
var state_49846__$1 = state_49846;
var statearr_49870_50785 = state_49846__$1;
(statearr_49870_50785[(2)] = inst_49835);

(statearr_49870_50785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (16))){
var inst_49842 = (state_49846[(2)]);
var state_49846__$1 = state_49846;
var statearr_49871_50786 = state_49846__$1;
(statearr_49871_50786[(2)] = inst_49842);

(statearr_49871_50786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (10))){
var inst_49807 = (state_49846[(8)]);
var inst_49823 = (state_49846[(2)]);
var inst_49824 = (inst_49807 + (1));
var inst_49807__$1 = inst_49824;
var state_49846__$1 = (function (){var statearr_49872 = state_49846;
(statearr_49872[(8)] = inst_49807__$1);

(statearr_49872[(14)] = inst_49823);

return statearr_49872;
})();
var statearr_49873_50787 = state_49846__$1;
(statearr_49873_50787[(2)] = null);

(statearr_49873_50787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49847 === (8))){
var inst_49828 = (state_49846[(2)]);
var state_49846__$1 = state_49846;
var statearr_49874_50788 = state_49846__$1;
(statearr_49874_50788[(2)] = inst_49828);

(statearr_49874_50788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_49875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49875[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_49875[(1)] = (1));

return statearr_49875;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_49846){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49846);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49876){var ex__48828__auto__ = e49876;
var statearr_49877_50789 = state_49846;
(statearr_49877_50789[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49846[(4)]))){
var statearr_49878_50790 = state_49846;
(statearr_49878_50790[(1)] = cljs.core.first((state_49846[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50791 = state_49846;
state_49846 = G__50791;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_49846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_49846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49879 = f__48860__auto__();
(statearr_49879[(6)] = c__48859__auto___50768);

return statearr_49879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49882 = arguments.length;
switch (G__49882) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48859__auto___50793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49914){
var state_val_49915 = (state_49914[(1)]);
if((state_val_49915 === (7))){
var inst_49894 = (state_49914[(7)]);
var inst_49893 = (state_49914[(8)]);
var inst_49893__$1 = (state_49914[(2)]);
var inst_49894__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49893__$1,(0),null);
var inst_49895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49893__$1,(1),null);
var inst_49896 = (inst_49894__$1 == null);
var state_49914__$1 = (function (){var statearr_49916 = state_49914;
(statearr_49916[(9)] = inst_49895);

(statearr_49916[(7)] = inst_49894__$1);

(statearr_49916[(8)] = inst_49893__$1);

return statearr_49916;
})();
if(cljs.core.truth_(inst_49896)){
var statearr_49917_50794 = state_49914__$1;
(statearr_49917_50794[(1)] = (8));

} else {
var statearr_49918_50795 = state_49914__$1;
(statearr_49918_50795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49915 === (1))){
var inst_49883 = cljs.core.vec(chs);
var inst_49884 = inst_49883;
var state_49914__$1 = (function (){var statearr_49919 = state_49914;
(statearr_49919[(10)] = inst_49884);

return statearr_49919;
})();
var statearr_49920_50796 = state_49914__$1;
(statearr_49920_50796[(2)] = null);

(statearr_49920_50796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49915 === (4))){
var inst_49884 = (state_49914[(10)]);
var state_49914__$1 = state_49914;
return cljs.core.async.ioc_alts_BANG_(state_49914__$1,(7),inst_49884);
} else {
if((state_val_49915 === (6))){
var inst_49910 = (state_49914[(2)]);
var state_49914__$1 = state_49914;
var statearr_49921_50797 = state_49914__$1;
(statearr_49921_50797[(2)] = inst_49910);

(statearr_49921_50797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49915 === (3))){
var inst_49912 = (state_49914[(2)]);
var state_49914__$1 = state_49914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49914__$1,inst_49912);
} else {
if((state_val_49915 === (2))){
var inst_49884 = (state_49914[(10)]);
var inst_49886 = cljs.core.count(inst_49884);
var inst_49887 = (inst_49886 > (0));
var state_49914__$1 = state_49914;
if(cljs.core.truth_(inst_49887)){
var statearr_49923_50798 = state_49914__$1;
(statearr_49923_50798[(1)] = (4));

} else {
var statearr_49924_50799 = state_49914__$1;
(statearr_49924_50799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49915 === (11))){
var inst_49884 = (state_49914[(10)]);
var inst_49903 = (state_49914[(2)]);
var tmp49922 = inst_49884;
var inst_49884__$1 = tmp49922;
var state_49914__$1 = (function (){var statearr_49925 = state_49914;
(statearr_49925[(11)] = inst_49903);

(statearr_49925[(10)] = inst_49884__$1);

return statearr_49925;
})();
var statearr_49926_50800 = state_49914__$1;
(statearr_49926_50800[(2)] = null);

(statearr_49926_50800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49915 === (9))){
var inst_49894 = (state_49914[(7)]);
var state_49914__$1 = state_49914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49914__$1,(11),out,inst_49894);
} else {
if((state_val_49915 === (5))){
var inst_49908 = cljs.core.async.close_BANG_(out);
var state_49914__$1 = state_49914;
var statearr_49927_50801 = state_49914__$1;
(statearr_49927_50801[(2)] = inst_49908);

(statearr_49927_50801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49915 === (10))){
var inst_49906 = (state_49914[(2)]);
var state_49914__$1 = state_49914;
var statearr_49928_50802 = state_49914__$1;
(statearr_49928_50802[(2)] = inst_49906);

(statearr_49928_50802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49915 === (8))){
var inst_49895 = (state_49914[(9)]);
var inst_49894 = (state_49914[(7)]);
var inst_49893 = (state_49914[(8)]);
var inst_49884 = (state_49914[(10)]);
var inst_49898 = (function (){var cs = inst_49884;
var vec__49889 = inst_49893;
var v = inst_49894;
var c = inst_49895;
return (function (p1__49880_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49880_SHARP_);
});
})();
var inst_49899 = cljs.core.filterv(inst_49898,inst_49884);
var inst_49884__$1 = inst_49899;
var state_49914__$1 = (function (){var statearr_49929 = state_49914;
(statearr_49929[(10)] = inst_49884__$1);

return statearr_49929;
})();
var statearr_49930_50803 = state_49914__$1;
(statearr_49930_50803[(2)] = null);

(statearr_49930_50803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_49931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49931[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_49931[(1)] = (1));

return statearr_49931;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_49914){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49914);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49932){var ex__48828__auto__ = e49932;
var statearr_49933_50804 = state_49914;
(statearr_49933_50804[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49914[(4)]))){
var statearr_49934_50805 = state_49914;
(statearr_49934_50805[(1)] = cljs.core.first((state_49914[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50806 = state_49914;
state_49914 = G__50806;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_49914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_49914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49935 = f__48860__auto__();
(statearr_49935[(6)] = c__48859__auto___50793);

return statearr_49935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49937 = arguments.length;
switch (G__49937) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48859__auto___50808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_49961){
var state_val_49962 = (state_49961[(1)]);
if((state_val_49962 === (7))){
var inst_49943 = (state_49961[(7)]);
var inst_49943__$1 = (state_49961[(2)]);
var inst_49944 = (inst_49943__$1 == null);
var inst_49945 = cljs.core.not(inst_49944);
var state_49961__$1 = (function (){var statearr_49963 = state_49961;
(statearr_49963[(7)] = inst_49943__$1);

return statearr_49963;
})();
if(inst_49945){
var statearr_49964_50809 = state_49961__$1;
(statearr_49964_50809[(1)] = (8));

} else {
var statearr_49965_50810 = state_49961__$1;
(statearr_49965_50810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (1))){
var inst_49938 = (0);
var state_49961__$1 = (function (){var statearr_49966 = state_49961;
(statearr_49966[(8)] = inst_49938);

return statearr_49966;
})();
var statearr_49967_50811 = state_49961__$1;
(statearr_49967_50811[(2)] = null);

(statearr_49967_50811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (4))){
var state_49961__$1 = state_49961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49961__$1,(7),ch);
} else {
if((state_val_49962 === (6))){
var inst_49956 = (state_49961[(2)]);
var state_49961__$1 = state_49961;
var statearr_49968_50812 = state_49961__$1;
(statearr_49968_50812[(2)] = inst_49956);

(statearr_49968_50812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (3))){
var inst_49958 = (state_49961[(2)]);
var inst_49959 = cljs.core.async.close_BANG_(out);
var state_49961__$1 = (function (){var statearr_49969 = state_49961;
(statearr_49969[(9)] = inst_49958);

return statearr_49969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49961__$1,inst_49959);
} else {
if((state_val_49962 === (2))){
var inst_49938 = (state_49961[(8)]);
var inst_49940 = (inst_49938 < n);
var state_49961__$1 = state_49961;
if(cljs.core.truth_(inst_49940)){
var statearr_49970_50813 = state_49961__$1;
(statearr_49970_50813[(1)] = (4));

} else {
var statearr_49971_50814 = state_49961__$1;
(statearr_49971_50814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (11))){
var inst_49938 = (state_49961[(8)]);
var inst_49948 = (state_49961[(2)]);
var inst_49949 = (inst_49938 + (1));
var inst_49938__$1 = inst_49949;
var state_49961__$1 = (function (){var statearr_49972 = state_49961;
(statearr_49972[(8)] = inst_49938__$1);

(statearr_49972[(10)] = inst_49948);

return statearr_49972;
})();
var statearr_49973_50815 = state_49961__$1;
(statearr_49973_50815[(2)] = null);

(statearr_49973_50815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (9))){
var state_49961__$1 = state_49961;
var statearr_49974_50816 = state_49961__$1;
(statearr_49974_50816[(2)] = null);

(statearr_49974_50816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (5))){
var state_49961__$1 = state_49961;
var statearr_49975_50817 = state_49961__$1;
(statearr_49975_50817[(2)] = null);

(statearr_49975_50817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (10))){
var inst_49953 = (state_49961[(2)]);
var state_49961__$1 = state_49961;
var statearr_49976_50818 = state_49961__$1;
(statearr_49976_50818[(2)] = inst_49953);

(statearr_49976_50818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49962 === (8))){
var inst_49943 = (state_49961[(7)]);
var state_49961__$1 = state_49961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49961__$1,(11),out,inst_49943);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_49977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49977[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_49977[(1)] = (1));

return statearr_49977;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_49961){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_49961);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e49978){var ex__48828__auto__ = e49978;
var statearr_49979_50819 = state_49961;
(statearr_49979_50819[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_49961[(4)]))){
var statearr_49980_50820 = state_49961;
(statearr_49980_50820[(1)] = cljs.core.first((state_49961[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50821 = state_49961;
state_49961 = G__50821;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_49961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_49961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_49981 = f__48860__auto__();
(statearr_49981[(6)] = c__48859__auto___50808);

return statearr_49981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49983 = (function (f,ch,meta49984){
this.f = f;
this.ch = ch;
this.meta49984 = meta49984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49985,meta49984__$1){
var self__ = this;
var _49985__$1 = this;
return (new cljs.core.async.t_cljs$core$async49983(self__.f,self__.ch,meta49984__$1));
}));

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49985){
var self__ = this;
var _49985__$1 = this;
return self__.meta49984;
}));

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49986 = (function (f,ch,meta49984,_,fn1,meta49987){
this.f = f;
this.ch = ch;
this.meta49984 = meta49984;
this._ = _;
this.fn1 = fn1;
this.meta49987 = meta49987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49988,meta49987__$1){
var self__ = this;
var _49988__$1 = this;
return (new cljs.core.async.t_cljs$core$async49986(self__.f,self__.ch,self__.meta49984,self__._,self__.fn1,meta49987__$1));
}));

(cljs.core.async.t_cljs$core$async49986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49988){
var self__ = this;
var _49988__$1 = this;
return self__.meta49987;
}));

(cljs.core.async.t_cljs$core$async49986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49982_SHARP_){
var G__49989 = (((p1__49982_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49982_SHARP_) : self__.f.call(null,p1__49982_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49989) : f1.call(null,G__49989));
});
}));

(cljs.core.async.t_cljs$core$async49986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49984","meta49984",-1975603548,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49983","cljs.core.async/t_cljs$core$async49983",-107668573,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49987","meta49987",-1629235770,null)], null);
}));

(cljs.core.async.t_cljs$core$async49986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49986");

(cljs.core.async.t_cljs$core$async49986.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49986.
 */
cljs.core.async.__GT_t_cljs$core$async49986 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49986(f__$1,ch__$1,meta49984__$1,___$2,fn1__$1,meta49987){
return (new cljs.core.async.t_cljs$core$async49986(f__$1,ch__$1,meta49984__$1,___$2,fn1__$1,meta49987));
});

}

return (new cljs.core.async.t_cljs$core$async49986(self__.f,self__.ch,self__.meta49984,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49990 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49990) : self__.f.call(null,G__49990));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49984","meta49984",-1975603548,null)], null);
}));

(cljs.core.async.t_cljs$core$async49983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49983");

(cljs.core.async.t_cljs$core$async49983.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49983.
 */
cljs.core.async.__GT_t_cljs$core$async49983 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49983(f__$1,ch__$1,meta49984){
return (new cljs.core.async.t_cljs$core$async49983(f__$1,ch__$1,meta49984));
});

}

return (new cljs.core.async.t_cljs$core$async49983(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49991 = (function (f,ch,meta49992){
this.f = f;
this.ch = ch;
this.meta49992 = meta49992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49993,meta49992__$1){
var self__ = this;
var _49993__$1 = this;
return (new cljs.core.async.t_cljs$core$async49991(self__.f,self__.ch,meta49992__$1));
}));

(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49993){
var self__ = this;
var _49993__$1 = this;
return self__.meta49992;
}));

(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49992","meta49992",-1902968105,null)], null);
}));

(cljs.core.async.t_cljs$core$async49991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49991");

(cljs.core.async.t_cljs$core$async49991.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49991.
 */
cljs.core.async.__GT_t_cljs$core$async49991 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49991(f__$1,ch__$1,meta49992){
return (new cljs.core.async.t_cljs$core$async49991(f__$1,ch__$1,meta49992));
});

}

return (new cljs.core.async.t_cljs$core$async49991(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49994 = (function (p,ch,meta49995){
this.p = p;
this.ch = ch;
this.meta49995 = meta49995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49996,meta49995__$1){
var self__ = this;
var _49996__$1 = this;
return (new cljs.core.async.t_cljs$core$async49994(self__.p,self__.ch,meta49995__$1));
}));

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49996){
var self__ = this;
var _49996__$1 = this;
return self__.meta49995;
}));

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49995","meta49995",-1478771006,null)], null);
}));

(cljs.core.async.t_cljs$core$async49994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49994");

(cljs.core.async.t_cljs$core$async49994.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49994.
 */
cljs.core.async.__GT_t_cljs$core$async49994 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49994(p__$1,ch__$1,meta49995){
return (new cljs.core.async.t_cljs$core$async49994(p__$1,ch__$1,meta49995));
});

}

return (new cljs.core.async.t_cljs$core$async49994(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49998 = arguments.length;
switch (G__49998) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48859__auto___50823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_50019){
var state_val_50020 = (state_50019[(1)]);
if((state_val_50020 === (7))){
var inst_50015 = (state_50019[(2)]);
var state_50019__$1 = state_50019;
var statearr_50021_50824 = state_50019__$1;
(statearr_50021_50824[(2)] = inst_50015);

(statearr_50021_50824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (1))){
var state_50019__$1 = state_50019;
var statearr_50022_50825 = state_50019__$1;
(statearr_50022_50825[(2)] = null);

(statearr_50022_50825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (4))){
var inst_50001 = (state_50019[(7)]);
var inst_50001__$1 = (state_50019[(2)]);
var inst_50002 = (inst_50001__$1 == null);
var state_50019__$1 = (function (){var statearr_50023 = state_50019;
(statearr_50023[(7)] = inst_50001__$1);

return statearr_50023;
})();
if(cljs.core.truth_(inst_50002)){
var statearr_50024_50826 = state_50019__$1;
(statearr_50024_50826[(1)] = (5));

} else {
var statearr_50025_50827 = state_50019__$1;
(statearr_50025_50827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (6))){
var inst_50001 = (state_50019[(7)]);
var inst_50006 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50001) : p.call(null,inst_50001));
var state_50019__$1 = state_50019;
if(cljs.core.truth_(inst_50006)){
var statearr_50026_50828 = state_50019__$1;
(statearr_50026_50828[(1)] = (8));

} else {
var statearr_50027_50829 = state_50019__$1;
(statearr_50027_50829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (3))){
var inst_50017 = (state_50019[(2)]);
var state_50019__$1 = state_50019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50019__$1,inst_50017);
} else {
if((state_val_50020 === (2))){
var state_50019__$1 = state_50019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50019__$1,(4),ch);
} else {
if((state_val_50020 === (11))){
var inst_50009 = (state_50019[(2)]);
var state_50019__$1 = state_50019;
var statearr_50028_50830 = state_50019__$1;
(statearr_50028_50830[(2)] = inst_50009);

(statearr_50028_50830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (9))){
var state_50019__$1 = state_50019;
var statearr_50029_50831 = state_50019__$1;
(statearr_50029_50831[(2)] = null);

(statearr_50029_50831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (5))){
var inst_50004 = cljs.core.async.close_BANG_(out);
var state_50019__$1 = state_50019;
var statearr_50030_50832 = state_50019__$1;
(statearr_50030_50832[(2)] = inst_50004);

(statearr_50030_50832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (10))){
var inst_50012 = (state_50019[(2)]);
var state_50019__$1 = (function (){var statearr_50031 = state_50019;
(statearr_50031[(8)] = inst_50012);

return statearr_50031;
})();
var statearr_50032_50833 = state_50019__$1;
(statearr_50032_50833[(2)] = null);

(statearr_50032_50833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50020 === (8))){
var inst_50001 = (state_50019[(7)]);
var state_50019__$1 = state_50019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50019__$1,(11),out,inst_50001);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_50033 = [null,null,null,null,null,null,null,null,null];
(statearr_50033[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_50033[(1)] = (1));

return statearr_50033;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_50019){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_50019);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e50034){var ex__48828__auto__ = e50034;
var statearr_50035_50834 = state_50019;
(statearr_50035_50834[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_50019[(4)]))){
var statearr_50036_50835 = state_50019;
(statearr_50036_50835[(1)] = cljs.core.first((state_50019[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50837 = state_50019;
state_50019 = G__50837;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_50019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_50019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_50037 = f__48860__auto__();
(statearr_50037[(6)] = c__48859__auto___50823);

return statearr_50037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50039 = arguments.length;
switch (G__50039) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48859__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_50101){
var state_val_50102 = (state_50101[(1)]);
if((state_val_50102 === (7))){
var inst_50097 = (state_50101[(2)]);
var state_50101__$1 = state_50101;
var statearr_50103_50839 = state_50101__$1;
(statearr_50103_50839[(2)] = inst_50097);

(statearr_50103_50839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (20))){
var inst_50067 = (state_50101[(7)]);
var inst_50078 = (state_50101[(2)]);
var inst_50079 = cljs.core.next(inst_50067);
var inst_50053 = inst_50079;
var inst_50054 = null;
var inst_50055 = (0);
var inst_50056 = (0);
var state_50101__$1 = (function (){var statearr_50104 = state_50101;
(statearr_50104[(8)] = inst_50054);

(statearr_50104[(9)] = inst_50053);

(statearr_50104[(10)] = inst_50078);

(statearr_50104[(11)] = inst_50055);

(statearr_50104[(12)] = inst_50056);

return statearr_50104;
})();
var statearr_50105_50844 = state_50101__$1;
(statearr_50105_50844[(2)] = null);

(statearr_50105_50844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (1))){
var state_50101__$1 = state_50101;
var statearr_50106_50845 = state_50101__$1;
(statearr_50106_50845[(2)] = null);

(statearr_50106_50845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (4))){
var inst_50042 = (state_50101[(13)]);
var inst_50042__$1 = (state_50101[(2)]);
var inst_50043 = (inst_50042__$1 == null);
var state_50101__$1 = (function (){var statearr_50107 = state_50101;
(statearr_50107[(13)] = inst_50042__$1);

return statearr_50107;
})();
if(cljs.core.truth_(inst_50043)){
var statearr_50108_50846 = state_50101__$1;
(statearr_50108_50846[(1)] = (5));

} else {
var statearr_50109_50847 = state_50101__$1;
(statearr_50109_50847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (15))){
var state_50101__$1 = state_50101;
var statearr_50113_50848 = state_50101__$1;
(statearr_50113_50848[(2)] = null);

(statearr_50113_50848[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (21))){
var state_50101__$1 = state_50101;
var statearr_50114_50849 = state_50101__$1;
(statearr_50114_50849[(2)] = null);

(statearr_50114_50849[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (13))){
var inst_50054 = (state_50101[(8)]);
var inst_50053 = (state_50101[(9)]);
var inst_50055 = (state_50101[(11)]);
var inst_50056 = (state_50101[(12)]);
var inst_50063 = (state_50101[(2)]);
var inst_50064 = (inst_50056 + (1));
var tmp50110 = inst_50054;
var tmp50111 = inst_50053;
var tmp50112 = inst_50055;
var inst_50053__$1 = tmp50111;
var inst_50054__$1 = tmp50110;
var inst_50055__$1 = tmp50112;
var inst_50056__$1 = inst_50064;
var state_50101__$1 = (function (){var statearr_50115 = state_50101;
(statearr_50115[(8)] = inst_50054__$1);

(statearr_50115[(14)] = inst_50063);

(statearr_50115[(9)] = inst_50053__$1);

(statearr_50115[(11)] = inst_50055__$1);

(statearr_50115[(12)] = inst_50056__$1);

return statearr_50115;
})();
var statearr_50116_50850 = state_50101__$1;
(statearr_50116_50850[(2)] = null);

(statearr_50116_50850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (22))){
var state_50101__$1 = state_50101;
var statearr_50117_50851 = state_50101__$1;
(statearr_50117_50851[(2)] = null);

(statearr_50117_50851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (6))){
var inst_50042 = (state_50101[(13)]);
var inst_50051 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50042) : f.call(null,inst_50042));
var inst_50052 = cljs.core.seq(inst_50051);
var inst_50053 = inst_50052;
var inst_50054 = null;
var inst_50055 = (0);
var inst_50056 = (0);
var state_50101__$1 = (function (){var statearr_50118 = state_50101;
(statearr_50118[(8)] = inst_50054);

(statearr_50118[(9)] = inst_50053);

(statearr_50118[(11)] = inst_50055);

(statearr_50118[(12)] = inst_50056);

return statearr_50118;
})();
var statearr_50119_50852 = state_50101__$1;
(statearr_50119_50852[(2)] = null);

(statearr_50119_50852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (17))){
var inst_50067 = (state_50101[(7)]);
var inst_50071 = cljs.core.chunk_first(inst_50067);
var inst_50072 = cljs.core.chunk_rest(inst_50067);
var inst_50073 = cljs.core.count(inst_50071);
var inst_50053 = inst_50072;
var inst_50054 = inst_50071;
var inst_50055 = inst_50073;
var inst_50056 = (0);
var state_50101__$1 = (function (){var statearr_50120 = state_50101;
(statearr_50120[(8)] = inst_50054);

(statearr_50120[(9)] = inst_50053);

(statearr_50120[(11)] = inst_50055);

(statearr_50120[(12)] = inst_50056);

return statearr_50120;
})();
var statearr_50121_50853 = state_50101__$1;
(statearr_50121_50853[(2)] = null);

(statearr_50121_50853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (3))){
var inst_50099 = (state_50101[(2)]);
var state_50101__$1 = state_50101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50101__$1,inst_50099);
} else {
if((state_val_50102 === (12))){
var inst_50087 = (state_50101[(2)]);
var state_50101__$1 = state_50101;
var statearr_50122_50854 = state_50101__$1;
(statearr_50122_50854[(2)] = inst_50087);

(statearr_50122_50854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (2))){
var state_50101__$1 = state_50101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50101__$1,(4),in$);
} else {
if((state_val_50102 === (23))){
var inst_50095 = (state_50101[(2)]);
var state_50101__$1 = state_50101;
var statearr_50123_50855 = state_50101__$1;
(statearr_50123_50855[(2)] = inst_50095);

(statearr_50123_50855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (19))){
var inst_50082 = (state_50101[(2)]);
var state_50101__$1 = state_50101;
var statearr_50124_50856 = state_50101__$1;
(statearr_50124_50856[(2)] = inst_50082);

(statearr_50124_50856[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (11))){
var inst_50053 = (state_50101[(9)]);
var inst_50067 = (state_50101[(7)]);
var inst_50067__$1 = cljs.core.seq(inst_50053);
var state_50101__$1 = (function (){var statearr_50125 = state_50101;
(statearr_50125[(7)] = inst_50067__$1);

return statearr_50125;
})();
if(inst_50067__$1){
var statearr_50126_50857 = state_50101__$1;
(statearr_50126_50857[(1)] = (14));

} else {
var statearr_50127_50858 = state_50101__$1;
(statearr_50127_50858[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (9))){
var inst_50089 = (state_50101[(2)]);
var inst_50090 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50101__$1 = (function (){var statearr_50128 = state_50101;
(statearr_50128[(15)] = inst_50089);

return statearr_50128;
})();
if(cljs.core.truth_(inst_50090)){
var statearr_50129_50859 = state_50101__$1;
(statearr_50129_50859[(1)] = (21));

} else {
var statearr_50130_50860 = state_50101__$1;
(statearr_50130_50860[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (5))){
var inst_50045 = cljs.core.async.close_BANG_(out);
var state_50101__$1 = state_50101;
var statearr_50131_50865 = state_50101__$1;
(statearr_50131_50865[(2)] = inst_50045);

(statearr_50131_50865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (14))){
var inst_50067 = (state_50101[(7)]);
var inst_50069 = cljs.core.chunked_seq_QMARK_(inst_50067);
var state_50101__$1 = state_50101;
if(inst_50069){
var statearr_50132_50866 = state_50101__$1;
(statearr_50132_50866[(1)] = (17));

} else {
var statearr_50133_50867 = state_50101__$1;
(statearr_50133_50867[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (16))){
var inst_50085 = (state_50101[(2)]);
var state_50101__$1 = state_50101;
var statearr_50134_50868 = state_50101__$1;
(statearr_50134_50868[(2)] = inst_50085);

(statearr_50134_50868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50102 === (10))){
var inst_50054 = (state_50101[(8)]);
var inst_50056 = (state_50101[(12)]);
var inst_50061 = cljs.core._nth(inst_50054,inst_50056);
var state_50101__$1 = state_50101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50101__$1,(13),out,inst_50061);
} else {
if((state_val_50102 === (18))){
var inst_50067 = (state_50101[(7)]);
var inst_50076 = cljs.core.first(inst_50067);
var state_50101__$1 = state_50101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50101__$1,(20),out,inst_50076);
} else {
if((state_val_50102 === (8))){
var inst_50055 = (state_50101[(11)]);
var inst_50056 = (state_50101[(12)]);
var inst_50058 = (inst_50056 < inst_50055);
var inst_50059 = inst_50058;
var state_50101__$1 = state_50101;
if(cljs.core.truth_(inst_50059)){
var statearr_50135_50869 = state_50101__$1;
(statearr_50135_50869[(1)] = (10));

} else {
var statearr_50136_50870 = state_50101__$1;
(statearr_50136_50870[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48825__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48825__auto____0 = (function (){
var statearr_50137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50137[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48825__auto__);

(statearr_50137[(1)] = (1));

return statearr_50137;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48825__auto____1 = (function (state_50101){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_50101);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e50138){var ex__48828__auto__ = e50138;
var statearr_50139_50871 = state_50101;
(statearr_50139_50871[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_50101[(4)]))){
var statearr_50140_50872 = state_50101;
(statearr_50140_50872[(1)] = cljs.core.first((state_50101[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50873 = state_50101;
state_50101 = G__50873;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48825__auto__ = function(state_50101){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48825__auto____1.call(this,state_50101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48825__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48825__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_50141 = f__48860__auto__();
(statearr_50141[(6)] = c__48859__auto__);

return statearr_50141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));

return c__48859__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50143 = arguments.length;
switch (G__50143) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50145 = arguments.length;
switch (G__50145) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50147 = arguments.length;
switch (G__50147) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48859__auto___50883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_50171){
var state_val_50172 = (state_50171[(1)]);
if((state_val_50172 === (7))){
var inst_50166 = (state_50171[(2)]);
var state_50171__$1 = state_50171;
var statearr_50173_50887 = state_50171__$1;
(statearr_50173_50887[(2)] = inst_50166);

(statearr_50173_50887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50172 === (1))){
var inst_50148 = null;
var state_50171__$1 = (function (){var statearr_50174 = state_50171;
(statearr_50174[(7)] = inst_50148);

return statearr_50174;
})();
var statearr_50175_50888 = state_50171__$1;
(statearr_50175_50888[(2)] = null);

(statearr_50175_50888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50172 === (4))){
var inst_50151 = (state_50171[(8)]);
var inst_50151__$1 = (state_50171[(2)]);
var inst_50152 = (inst_50151__$1 == null);
var inst_50153 = cljs.core.not(inst_50152);
var state_50171__$1 = (function (){var statearr_50176 = state_50171;
(statearr_50176[(8)] = inst_50151__$1);

return statearr_50176;
})();
if(inst_50153){
var statearr_50177_50889 = state_50171__$1;
(statearr_50177_50889[(1)] = (5));

} else {
var statearr_50178_50890 = state_50171__$1;
(statearr_50178_50890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50172 === (6))){
var state_50171__$1 = state_50171;
var statearr_50179_50891 = state_50171__$1;
(statearr_50179_50891[(2)] = null);

(statearr_50179_50891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50172 === (3))){
var inst_50168 = (state_50171[(2)]);
var inst_50169 = cljs.core.async.close_BANG_(out);
var state_50171__$1 = (function (){var statearr_50180 = state_50171;
(statearr_50180[(9)] = inst_50168);

return statearr_50180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50171__$1,inst_50169);
} else {
if((state_val_50172 === (2))){
var state_50171__$1 = state_50171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50171__$1,(4),ch);
} else {
if((state_val_50172 === (11))){
var inst_50151 = (state_50171[(8)]);
var inst_50160 = (state_50171[(2)]);
var inst_50148 = inst_50151;
var state_50171__$1 = (function (){var statearr_50181 = state_50171;
(statearr_50181[(10)] = inst_50160);

(statearr_50181[(7)] = inst_50148);

return statearr_50181;
})();
var statearr_50182_50895 = state_50171__$1;
(statearr_50182_50895[(2)] = null);

(statearr_50182_50895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50172 === (9))){
var inst_50151 = (state_50171[(8)]);
var state_50171__$1 = state_50171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50171__$1,(11),out,inst_50151);
} else {
if((state_val_50172 === (5))){
var inst_50148 = (state_50171[(7)]);
var inst_50151 = (state_50171[(8)]);
var inst_50155 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50151,inst_50148);
var state_50171__$1 = state_50171;
if(inst_50155){
var statearr_50184_50900 = state_50171__$1;
(statearr_50184_50900[(1)] = (8));

} else {
var statearr_50185_50901 = state_50171__$1;
(statearr_50185_50901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50172 === (10))){
var inst_50163 = (state_50171[(2)]);
var state_50171__$1 = state_50171;
var statearr_50186_50902 = state_50171__$1;
(statearr_50186_50902[(2)] = inst_50163);

(statearr_50186_50902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50172 === (8))){
var inst_50148 = (state_50171[(7)]);
var tmp50183 = inst_50148;
var inst_50148__$1 = tmp50183;
var state_50171__$1 = (function (){var statearr_50187 = state_50171;
(statearr_50187[(7)] = inst_50148__$1);

return statearr_50187;
})();
var statearr_50188_50903 = state_50171__$1;
(statearr_50188_50903[(2)] = null);

(statearr_50188_50903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_50189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50189[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_50189[(1)] = (1));

return statearr_50189;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_50171){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_50171);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e50190){var ex__48828__auto__ = e50190;
var statearr_50191_50904 = state_50171;
(statearr_50191_50904[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_50171[(4)]))){
var statearr_50192_50905 = state_50171;
(statearr_50192_50905[(1)] = cljs.core.first((state_50171[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50906 = state_50171;
state_50171 = G__50906;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_50171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_50171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_50193 = f__48860__auto__();
(statearr_50193[(6)] = c__48859__auto___50883);

return statearr_50193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50195 = arguments.length;
switch (G__50195) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48859__auto___50908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_50233){
var state_val_50234 = (state_50233[(1)]);
if((state_val_50234 === (7))){
var inst_50229 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
var statearr_50235_50911 = state_50233__$1;
(statearr_50235_50911[(2)] = inst_50229);

(statearr_50235_50911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (1))){
var inst_50196 = (new Array(n));
var inst_50197 = inst_50196;
var inst_50198 = (0);
var state_50233__$1 = (function (){var statearr_50236 = state_50233;
(statearr_50236[(7)] = inst_50198);

(statearr_50236[(8)] = inst_50197);

return statearr_50236;
})();
var statearr_50237_50912 = state_50233__$1;
(statearr_50237_50912[(2)] = null);

(statearr_50237_50912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (4))){
var inst_50201 = (state_50233[(9)]);
var inst_50201__$1 = (state_50233[(2)]);
var inst_50202 = (inst_50201__$1 == null);
var inst_50203 = cljs.core.not(inst_50202);
var state_50233__$1 = (function (){var statearr_50238 = state_50233;
(statearr_50238[(9)] = inst_50201__$1);

return statearr_50238;
})();
if(inst_50203){
var statearr_50239_50913 = state_50233__$1;
(statearr_50239_50913[(1)] = (5));

} else {
var statearr_50240_50914 = state_50233__$1;
(statearr_50240_50914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (15))){
var inst_50223 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
var statearr_50241_50915 = state_50233__$1;
(statearr_50241_50915[(2)] = inst_50223);

(statearr_50241_50915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (13))){
var state_50233__$1 = state_50233;
var statearr_50242_50916 = state_50233__$1;
(statearr_50242_50916[(2)] = null);

(statearr_50242_50916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (6))){
var inst_50198 = (state_50233[(7)]);
var inst_50219 = (inst_50198 > (0));
var state_50233__$1 = state_50233;
if(cljs.core.truth_(inst_50219)){
var statearr_50243_50917 = state_50233__$1;
(statearr_50243_50917[(1)] = (12));

} else {
var statearr_50244_50918 = state_50233__$1;
(statearr_50244_50918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (3))){
var inst_50231 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50233__$1,inst_50231);
} else {
if((state_val_50234 === (12))){
var inst_50197 = (state_50233[(8)]);
var inst_50221 = cljs.core.vec(inst_50197);
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50233__$1,(15),out,inst_50221);
} else {
if((state_val_50234 === (2))){
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50233__$1,(4),ch);
} else {
if((state_val_50234 === (11))){
var inst_50213 = (state_50233[(2)]);
var inst_50214 = (new Array(n));
var inst_50197 = inst_50214;
var inst_50198 = (0);
var state_50233__$1 = (function (){var statearr_50245 = state_50233;
(statearr_50245[(7)] = inst_50198);

(statearr_50245[(8)] = inst_50197);

(statearr_50245[(10)] = inst_50213);

return statearr_50245;
})();
var statearr_50246_50919 = state_50233__$1;
(statearr_50246_50919[(2)] = null);

(statearr_50246_50919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (9))){
var inst_50197 = (state_50233[(8)]);
var inst_50211 = cljs.core.vec(inst_50197);
var state_50233__$1 = state_50233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50233__$1,(11),out,inst_50211);
} else {
if((state_val_50234 === (5))){
var inst_50198 = (state_50233[(7)]);
var inst_50206 = (state_50233[(11)]);
var inst_50197 = (state_50233[(8)]);
var inst_50201 = (state_50233[(9)]);
var inst_50205 = (inst_50197[inst_50198] = inst_50201);
var inst_50206__$1 = (inst_50198 + (1));
var inst_50207 = (inst_50206__$1 < n);
var state_50233__$1 = (function (){var statearr_50247 = state_50233;
(statearr_50247[(11)] = inst_50206__$1);

(statearr_50247[(12)] = inst_50205);

return statearr_50247;
})();
if(cljs.core.truth_(inst_50207)){
var statearr_50248_50920 = state_50233__$1;
(statearr_50248_50920[(1)] = (8));

} else {
var statearr_50249_50921 = state_50233__$1;
(statearr_50249_50921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (14))){
var inst_50226 = (state_50233[(2)]);
var inst_50227 = cljs.core.async.close_BANG_(out);
var state_50233__$1 = (function (){var statearr_50251 = state_50233;
(statearr_50251[(13)] = inst_50226);

return statearr_50251;
})();
var statearr_50252_50922 = state_50233__$1;
(statearr_50252_50922[(2)] = inst_50227);

(statearr_50252_50922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (10))){
var inst_50217 = (state_50233[(2)]);
var state_50233__$1 = state_50233;
var statearr_50253_50923 = state_50233__$1;
(statearr_50253_50923[(2)] = inst_50217);

(statearr_50253_50923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50234 === (8))){
var inst_50206 = (state_50233[(11)]);
var inst_50197 = (state_50233[(8)]);
var tmp50250 = inst_50197;
var inst_50197__$1 = tmp50250;
var inst_50198 = inst_50206;
var state_50233__$1 = (function (){var statearr_50254 = state_50233;
(statearr_50254[(7)] = inst_50198);

(statearr_50254[(8)] = inst_50197__$1);

return statearr_50254;
})();
var statearr_50255_50924 = state_50233__$1;
(statearr_50255_50924[(2)] = null);

(statearr_50255_50924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_50256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50256[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_50256[(1)] = (1));

return statearr_50256;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_50233){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_50233);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e50257){var ex__48828__auto__ = e50257;
var statearr_50258_50925 = state_50233;
(statearr_50258_50925[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_50233[(4)]))){
var statearr_50259_50926 = state_50233;
(statearr_50259_50926[(1)] = cljs.core.first((state_50233[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50927 = state_50233;
state_50233 = G__50927;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_50233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_50233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_50260 = f__48860__auto__();
(statearr_50260[(6)] = c__48859__auto___50908);

return statearr_50260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50262 = arguments.length;
switch (G__50262) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48859__auto___50929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_50307){
var state_val_50308 = (state_50307[(1)]);
if((state_val_50308 === (7))){
var inst_50303 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50309_50930 = state_50307__$1;
(statearr_50309_50930[(2)] = inst_50303);

(statearr_50309_50930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (1))){
var inst_50263 = [];
var inst_50264 = inst_50263;
var inst_50265 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50307__$1 = (function (){var statearr_50310 = state_50307;
(statearr_50310[(7)] = inst_50265);

(statearr_50310[(8)] = inst_50264);

return statearr_50310;
})();
var statearr_50311_50931 = state_50307__$1;
(statearr_50311_50931[(2)] = null);

(statearr_50311_50931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (4))){
var inst_50268 = (state_50307[(9)]);
var inst_50268__$1 = (state_50307[(2)]);
var inst_50269 = (inst_50268__$1 == null);
var inst_50270 = cljs.core.not(inst_50269);
var state_50307__$1 = (function (){var statearr_50312 = state_50307;
(statearr_50312[(9)] = inst_50268__$1);

return statearr_50312;
})();
if(inst_50270){
var statearr_50313_50932 = state_50307__$1;
(statearr_50313_50932[(1)] = (5));

} else {
var statearr_50314_50933 = state_50307__$1;
(statearr_50314_50933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (15))){
var inst_50264 = (state_50307[(8)]);
var inst_50295 = cljs.core.vec(inst_50264);
var state_50307__$1 = state_50307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50307__$1,(18),out,inst_50295);
} else {
if((state_val_50308 === (13))){
var inst_50290 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50315_50934 = state_50307__$1;
(statearr_50315_50934[(2)] = inst_50290);

(statearr_50315_50934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (6))){
var inst_50264 = (state_50307[(8)]);
var inst_50292 = inst_50264.length;
var inst_50293 = (inst_50292 > (0));
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50293)){
var statearr_50316_50935 = state_50307__$1;
(statearr_50316_50935[(1)] = (15));

} else {
var statearr_50317_50936 = state_50307__$1;
(statearr_50317_50936[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (17))){
var inst_50300 = (state_50307[(2)]);
var inst_50301 = cljs.core.async.close_BANG_(out);
var state_50307__$1 = (function (){var statearr_50318 = state_50307;
(statearr_50318[(10)] = inst_50300);

return statearr_50318;
})();
var statearr_50319_50937 = state_50307__$1;
(statearr_50319_50937[(2)] = inst_50301);

(statearr_50319_50937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (3))){
var inst_50305 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50307__$1,inst_50305);
} else {
if((state_val_50308 === (12))){
var inst_50264 = (state_50307[(8)]);
var inst_50283 = cljs.core.vec(inst_50264);
var state_50307__$1 = state_50307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50307__$1,(14),out,inst_50283);
} else {
if((state_val_50308 === (2))){
var state_50307__$1 = state_50307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50307__$1,(4),ch);
} else {
if((state_val_50308 === (11))){
var inst_50264 = (state_50307[(8)]);
var inst_50272 = (state_50307[(11)]);
var inst_50268 = (state_50307[(9)]);
var inst_50280 = inst_50264.push(inst_50268);
var tmp50320 = inst_50264;
var inst_50264__$1 = tmp50320;
var inst_50265 = inst_50272;
var state_50307__$1 = (function (){var statearr_50321 = state_50307;
(statearr_50321[(7)] = inst_50265);

(statearr_50321[(12)] = inst_50280);

(statearr_50321[(8)] = inst_50264__$1);

return statearr_50321;
})();
var statearr_50322_50938 = state_50307__$1;
(statearr_50322_50938[(2)] = null);

(statearr_50322_50938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (9))){
var inst_50265 = (state_50307[(7)]);
var inst_50276 = cljs.core.keyword_identical_QMARK_(inst_50265,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50307__$1 = state_50307;
var statearr_50323_50939 = state_50307__$1;
(statearr_50323_50939[(2)] = inst_50276);

(statearr_50323_50939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (5))){
var inst_50265 = (state_50307[(7)]);
var inst_50272 = (state_50307[(11)]);
var inst_50273 = (state_50307[(13)]);
var inst_50268 = (state_50307[(9)]);
var inst_50272__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50268) : f.call(null,inst_50268));
var inst_50273__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50272__$1,inst_50265);
var state_50307__$1 = (function (){var statearr_50324 = state_50307;
(statearr_50324[(11)] = inst_50272__$1);

(statearr_50324[(13)] = inst_50273__$1);

return statearr_50324;
})();
if(inst_50273__$1){
var statearr_50325_50940 = state_50307__$1;
(statearr_50325_50940[(1)] = (8));

} else {
var statearr_50326_50941 = state_50307__$1;
(statearr_50326_50941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (14))){
var inst_50272 = (state_50307[(11)]);
var inst_50268 = (state_50307[(9)]);
var inst_50285 = (state_50307[(2)]);
var inst_50286 = [];
var inst_50287 = inst_50286.push(inst_50268);
var inst_50264 = inst_50286;
var inst_50265 = inst_50272;
var state_50307__$1 = (function (){var statearr_50327 = state_50307;
(statearr_50327[(7)] = inst_50265);

(statearr_50327[(8)] = inst_50264);

(statearr_50327[(14)] = inst_50287);

(statearr_50327[(15)] = inst_50285);

return statearr_50327;
})();
var statearr_50328_50942 = state_50307__$1;
(statearr_50328_50942[(2)] = null);

(statearr_50328_50942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (16))){
var state_50307__$1 = state_50307;
var statearr_50329_50943 = state_50307__$1;
(statearr_50329_50943[(2)] = null);

(statearr_50329_50943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (10))){
var inst_50278 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
if(cljs.core.truth_(inst_50278)){
var statearr_50330_50944 = state_50307__$1;
(statearr_50330_50944[(1)] = (11));

} else {
var statearr_50331_50945 = state_50307__$1;
(statearr_50331_50945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (18))){
var inst_50297 = (state_50307[(2)]);
var state_50307__$1 = state_50307;
var statearr_50332_50946 = state_50307__$1;
(statearr_50332_50946[(2)] = inst_50297);

(statearr_50332_50946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50308 === (8))){
var inst_50273 = (state_50307[(13)]);
var state_50307__$1 = state_50307;
var statearr_50333_50947 = state_50307__$1;
(statearr_50333_50947[(2)] = inst_50273);

(statearr_50333_50947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48825__auto__ = null;
var cljs$core$async$state_machine__48825__auto____0 = (function (){
var statearr_50334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50334[(0)] = cljs$core$async$state_machine__48825__auto__);

(statearr_50334[(1)] = (1));

return statearr_50334;
});
var cljs$core$async$state_machine__48825__auto____1 = (function (state_50307){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_50307);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e50335){var ex__48828__auto__ = e50335;
var statearr_50336_50952 = state_50307;
(statearr_50336_50952[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_50307[(4)]))){
var statearr_50337_50953 = state_50307;
(statearr_50337_50953[(1)] = cljs.core.first((state_50307[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50954 = state_50307;
state_50307 = G__50954;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
cljs$core$async$state_machine__48825__auto__ = function(state_50307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48825__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48825__auto____1.call(this,state_50307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48825__auto____0;
cljs$core$async$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48825__auto____1;
return cljs$core$async$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_50338 = f__48860__auto__();
(statearr_50338[(6)] = c__48859__auto___50929);

return statearr_50338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

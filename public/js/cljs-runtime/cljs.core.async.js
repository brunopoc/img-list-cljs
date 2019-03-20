goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34026 = arguments.length;
switch (G__34026) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34027 = (function (f,blockable,meta34028){
this.f = f;
this.blockable = blockable;
this.meta34028 = meta34028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34029,meta34028__$1){
var self__ = this;
var _34029__$1 = this;
return (new cljs.core.async.t_cljs$core$async34027(self__.f,self__.blockable,meta34028__$1));
});

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34029){
var self__ = this;
var _34029__$1 = this;
return self__.meta34028;
});

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34028","meta34028",-1349430395,null)], null);
});

cljs.core.async.t_cljs$core$async34027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34027";

cljs.core.async.t_cljs$core$async34027.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34027");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34027.
 */
cljs.core.async.__GT_t_cljs$core$async34027 = (function cljs$core$async$__GT_t_cljs$core$async34027(f__$1,blockable__$1,meta34028){
return (new cljs.core.async.t_cljs$core$async34027(f__$1,blockable__$1,meta34028));
});

}

return (new cljs.core.async.t_cljs$core$async34027(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__34032 = arguments.length;
switch (G__34032) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34034 = arguments.length;
switch (G__34034) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__34036 = arguments.length;
switch (G__34036) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35504 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35504) : fn1.call(null,val_35504));
} else {
cljs.core.async.impl.dispatch.run(((function (val_35504,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35504) : fn1.call(null,val_35504));
});})(val_35504,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__34038 = arguments.length;
switch (G__34038) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___35521 = n;
var x_35522 = (0);
while(true){
if((x_35522 < n__4607__auto___35521)){
(a[x_35522] = (0));

var G__35525 = (x_35522 + (1));
x_35522 = G__35525;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__35526 = (i + (1));
i = G__35526;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34039 = (function (flag,meta34040){
this.flag = flag;
this.meta34040 = meta34040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34041,meta34040__$1){
var self__ = this;
var _34041__$1 = this;
return (new cljs.core.async.t_cljs$core$async34039(self__.flag,meta34040__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34041){
var self__ = this;
var _34041__$1 = this;
return self__.meta34040;
});})(flag))
;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34039.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34040","meta34040",-1340622196,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34039";

cljs.core.async.t_cljs$core$async34039.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34039");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34039.
 */
cljs.core.async.__GT_t_cljs$core$async34039 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34039(flag__$1,meta34040){
return (new cljs.core.async.t_cljs$core$async34039(flag__$1,meta34040));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34039(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34042 = (function (flag,cb,meta34043){
this.flag = flag;
this.cb = cb;
this.meta34043 = meta34043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34044,meta34043__$1){
var self__ = this;
var _34044__$1 = this;
return (new cljs.core.async.t_cljs$core$async34042(self__.flag,self__.cb,meta34043__$1));
});

cljs.core.async.t_cljs$core$async34042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34044){
var self__ = this;
var _34044__$1 = this;
return self__.meta34043;
});

cljs.core.async.t_cljs$core$async34042.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async34042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34043","meta34043",676543564,null)], null);
});

cljs.core.async.t_cljs$core$async34042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34042";

cljs.core.async.t_cljs$core$async34042.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34042");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34042.
 */
cljs.core.async.__GT_t_cljs$core$async34042 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34042(flag__$1,cb__$1,meta34043){
return (new cljs.core.async.t_cljs$core$async34042(flag__$1,cb__$1,meta34043));
});

}

return (new cljs.core.async.t_cljs$core$async34042(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__34045_SHARP_){
var G__34047 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34045_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34047) : fret.call(null,G__34047));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34046_SHARP_){
var G__34048 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34046_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34048) : fret.call(null,G__34048));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35547 = (i + (1));
i = G__35547;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___35549 = arguments.length;
var i__4731__auto___35550 = (0);
while(true){
if((i__4731__auto___35550 < len__4730__auto___35549)){
args__4736__auto__.push((arguments[i__4731__auto___35550]));

var G__35551 = (i__4731__auto___35550 + (1));
i__4731__auto___35550 = G__35551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34051){
var map__34052 = p__34051;
var map__34052__$1 = (((((!((map__34052 == null))))?(((((map__34052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34052):map__34052);
var opts = map__34052__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34049){
var G__34050 = cljs.core.first(seq34049);
var seq34049__$1 = cljs.core.next(seq34049);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34050,seq34049__$1);
});

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
var G__34055 = arguments.length;
switch (G__34055) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33942__auto___35562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___35562){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___35562){
return (function (state_34079){
var state_val_34080 = (state_34079[(1)]);
if((state_val_34080 === (7))){
var inst_34075 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34081_35563 = state_34079__$1;
(statearr_34081_35563[(2)] = inst_34075);

(statearr_34081_35563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (1))){
var state_34079__$1 = state_34079;
var statearr_34082_35564 = state_34079__$1;
(statearr_34082_35564[(2)] = null);

(statearr_34082_35564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (4))){
var inst_34058 = (state_34079[(7)]);
var inst_34058__$1 = (state_34079[(2)]);
var inst_34059 = (inst_34058__$1 == null);
var state_34079__$1 = (function (){var statearr_34083 = state_34079;
(statearr_34083[(7)] = inst_34058__$1);

return statearr_34083;
})();
if(cljs.core.truth_(inst_34059)){
var statearr_34084_35565 = state_34079__$1;
(statearr_34084_35565[(1)] = (5));

} else {
var statearr_34085_35566 = state_34079__$1;
(statearr_34085_35566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (13))){
var state_34079__$1 = state_34079;
var statearr_34086_35567 = state_34079__$1;
(statearr_34086_35567[(2)] = null);

(statearr_34086_35567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (6))){
var inst_34058 = (state_34079[(7)]);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34079__$1,(11),to,inst_34058);
} else {
if((state_val_34080 === (3))){
var inst_34077 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34079__$1,inst_34077);
} else {
if((state_val_34080 === (12))){
var state_34079__$1 = state_34079;
var statearr_34087_35568 = state_34079__$1;
(statearr_34087_35568[(2)] = null);

(statearr_34087_35568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (2))){
var state_34079__$1 = state_34079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34079__$1,(4),from);
} else {
if((state_val_34080 === (11))){
var inst_34068 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
if(cljs.core.truth_(inst_34068)){
var statearr_34088_35569 = state_34079__$1;
(statearr_34088_35569[(1)] = (12));

} else {
var statearr_34089_35570 = state_34079__$1;
(statearr_34089_35570[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (9))){
var state_34079__$1 = state_34079;
var statearr_34090_35573 = state_34079__$1;
(statearr_34090_35573[(2)] = null);

(statearr_34090_35573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (5))){
var state_34079__$1 = state_34079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34091_35574 = state_34079__$1;
(statearr_34091_35574[(1)] = (8));

} else {
var statearr_34092_35575 = state_34079__$1;
(statearr_34092_35575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (14))){
var inst_34073 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34093_35576 = state_34079__$1;
(statearr_34093_35576[(2)] = inst_34073);

(statearr_34093_35576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (10))){
var inst_34065 = (state_34079[(2)]);
var state_34079__$1 = state_34079;
var statearr_34094_35577 = state_34079__$1;
(statearr_34094_35577[(2)] = inst_34065);

(statearr_34094_35577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34080 === (8))){
var inst_34062 = cljs.core.async.close_BANG_(to);
var state_34079__$1 = state_34079;
var statearr_34095_35578 = state_34079__$1;
(statearr_34095_35578[(2)] = inst_34062);

(statearr_34095_35578[(1)] = (10));


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
});})(c__33942__auto___35562))
;
return ((function (switch__33865__auto__,c__33942__auto___35562){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_34096 = [null,null,null,null,null,null,null,null];
(statearr_34096[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_34096[(1)] = (1));

return statearr_34096;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_34079){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34079);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34097){if((e34097 instanceof Object)){
var ex__33869__auto__ = e34097;
var statearr_34098_35579 = state_34079;
(statearr_34098_35579[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35580 = state_34079;
state_34079 = G__35580;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_34079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_34079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___35562))
})();
var state__33944__auto__ = (function (){var statearr_34099 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34099[(6)] = c__33942__auto___35562);

return statearr_34099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___35562))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__34100){
var vec__34101 = p__34100;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34101,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34101,(1),null);
var job = vec__34101;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33942__auto___35581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___35581,res,vec__34101,v,p,job,jobs,results){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___35581,res,vec__34101,v,p,job,jobs,results){
return (function (state_34108){
var state_val_34109 = (state_34108[(1)]);
if((state_val_34109 === (1))){
var state_34108__$1 = state_34108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34108__$1,(2),res,v);
} else {
if((state_val_34109 === (2))){
var inst_34105 = (state_34108[(2)]);
var inst_34106 = cljs.core.async.close_BANG_(res);
var state_34108__$1 = (function (){var statearr_34110 = state_34108;
(statearr_34110[(7)] = inst_34105);

return statearr_34110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34108__$1,inst_34106);
} else {
return null;
}
}
});})(c__33942__auto___35581,res,vec__34101,v,p,job,jobs,results))
;
return ((function (switch__33865__auto__,c__33942__auto___35581,res,vec__34101,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0 = (function (){
var statearr_34111 = [null,null,null,null,null,null,null,null];
(statearr_34111[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__);

(statearr_34111[(1)] = (1));

return statearr_34111;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1 = (function (state_34108){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34108);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34112){if((e34112 instanceof Object)){
var ex__33869__auto__ = e34112;
var statearr_34113_35587 = state_34108;
(statearr_34113_35587[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34112;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35588 = state_34108;
state_34108 = G__35588;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = function(state_34108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1.call(this,state_34108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___35581,res,vec__34101,v,p,job,jobs,results))
})();
var state__33944__auto__ = (function (){var statearr_34114 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34114[(6)] = c__33942__auto___35581);

return statearr_34114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___35581,res,vec__34101,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34115){
var vec__34116 = p__34115;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34116,(1),null);
var job = vec__34116;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___35591 = n;
var __35592 = (0);
while(true){
if((__35592 < n__4607__auto___35591)){
var G__34119_35593 = type;
var G__34119_35594__$1 = (((G__34119_35593 instanceof cljs.core.Keyword))?G__34119_35593.fqn:null);
switch (G__34119_35594__$1) {
case "compute":
var c__33942__auto___35596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35592,c__33942__auto___35596,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (__35592,c__33942__auto___35596,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async){
return (function (state_34132){
var state_val_34133 = (state_34132[(1)]);
if((state_val_34133 === (1))){
var state_34132__$1 = state_34132;
var statearr_34134_35597 = state_34132__$1;
(statearr_34134_35597[(2)] = null);

(statearr_34134_35597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (2))){
var state_34132__$1 = state_34132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34132__$1,(4),jobs);
} else {
if((state_val_34133 === (3))){
var inst_34130 = (state_34132[(2)]);
var state_34132__$1 = state_34132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34132__$1,inst_34130);
} else {
if((state_val_34133 === (4))){
var inst_34122 = (state_34132[(2)]);
var inst_34123 = process(inst_34122);
var state_34132__$1 = state_34132;
if(cljs.core.truth_(inst_34123)){
var statearr_34135_35601 = state_34132__$1;
(statearr_34135_35601[(1)] = (5));

} else {
var statearr_34136_35602 = state_34132__$1;
(statearr_34136_35602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (5))){
var state_34132__$1 = state_34132;
var statearr_34137_35603 = state_34132__$1;
(statearr_34137_35603[(2)] = null);

(statearr_34137_35603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (6))){
var state_34132__$1 = state_34132;
var statearr_34138_35604 = state_34132__$1;
(statearr_34138_35604[(2)] = null);

(statearr_34138_35604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34133 === (7))){
var inst_34128 = (state_34132[(2)]);
var state_34132__$1 = state_34132;
var statearr_34139_35605 = state_34132__$1;
(statearr_34139_35605[(2)] = inst_34128);

(statearr_34139_35605[(1)] = (3));


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
});})(__35592,c__33942__auto___35596,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async))
;
return ((function (__35592,switch__33865__auto__,c__33942__auto___35596,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0 = (function (){
var statearr_34140 = [null,null,null,null,null,null,null];
(statearr_34140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__);

(statearr_34140[(1)] = (1));

return statearr_34140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1 = (function (state_34132){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34132);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34141){if((e34141 instanceof Object)){
var ex__33869__auto__ = e34141;
var statearr_34142_35606 = state_34132;
(statearr_34142_35606[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35607 = state_34132;
state_34132 = G__35607;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = function(state_34132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1.call(this,state_34132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__;
})()
;})(__35592,switch__33865__auto__,c__33942__auto___35596,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async))
})();
var state__33944__auto__ = (function (){var statearr_34143 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34143[(6)] = c__33942__auto___35596);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(__35592,c__33942__auto___35596,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async))
);


break;
case "async":
var c__33942__auto___35608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35592,c__33942__auto___35608,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (__35592,c__33942__auto___35608,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async){
return (function (state_34156){
var state_val_34157 = (state_34156[(1)]);
if((state_val_34157 === (1))){
var state_34156__$1 = state_34156;
var statearr_34158_35610 = state_34156__$1;
(statearr_34158_35610[(2)] = null);

(statearr_34158_35610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (2))){
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34156__$1,(4),jobs);
} else {
if((state_val_34157 === (3))){
var inst_34154 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34156__$1,inst_34154);
} else {
if((state_val_34157 === (4))){
var inst_34146 = (state_34156[(2)]);
var inst_34147 = async(inst_34146);
var state_34156__$1 = state_34156;
if(cljs.core.truth_(inst_34147)){
var statearr_34159_35612 = state_34156__$1;
(statearr_34159_35612[(1)] = (5));

} else {
var statearr_34160_35614 = state_34156__$1;
(statearr_34160_35614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (5))){
var state_34156__$1 = state_34156;
var statearr_34161_35615 = state_34156__$1;
(statearr_34161_35615[(2)] = null);

(statearr_34161_35615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (6))){
var state_34156__$1 = state_34156;
var statearr_34162_35616 = state_34156__$1;
(statearr_34162_35616[(2)] = null);

(statearr_34162_35616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (7))){
var inst_34152 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34163_35617 = state_34156__$1;
(statearr_34163_35617[(2)] = inst_34152);

(statearr_34163_35617[(1)] = (3));


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
});})(__35592,c__33942__auto___35608,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async))
;
return ((function (__35592,switch__33865__auto__,c__33942__auto___35608,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0 = (function (){
var statearr_34164 = [null,null,null,null,null,null,null];
(statearr_34164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__);

(statearr_34164[(1)] = (1));

return statearr_34164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1 = (function (state_34156){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34156);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34165){if((e34165 instanceof Object)){
var ex__33869__auto__ = e34165;
var statearr_34166_35618 = state_34156;
(statearr_34166_35618[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35619 = state_34156;
state_34156 = G__35619;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = function(state_34156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1.call(this,state_34156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__;
})()
;})(__35592,switch__33865__auto__,c__33942__auto___35608,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async))
})();
var state__33944__auto__ = (function (){var statearr_34167 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34167[(6)] = c__33942__auto___35608);

return statearr_34167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(__35592,c__33942__auto___35608,G__34119_35593,G__34119_35594__$1,n__4607__auto___35591,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34119_35594__$1)].join('')));

}

var G__35620 = (__35592 + (1));
__35592 = G__35620;
continue;
} else {
}
break;
}

var c__33942__auto___35621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___35621,jobs,results,process,async){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___35621,jobs,results,process,async){
return (function (state_34189){
var state_val_34190 = (state_34189[(1)]);
if((state_val_34190 === (7))){
var inst_34185 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
var statearr_34191_35624 = state_34189__$1;
(statearr_34191_35624[(2)] = inst_34185);

(statearr_34191_35624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (1))){
var state_34189__$1 = state_34189;
var statearr_34192_35625 = state_34189__$1;
(statearr_34192_35625[(2)] = null);

(statearr_34192_35625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (4))){
var inst_34170 = (state_34189[(7)]);
var inst_34170__$1 = (state_34189[(2)]);
var inst_34171 = (inst_34170__$1 == null);
var state_34189__$1 = (function (){var statearr_34193 = state_34189;
(statearr_34193[(7)] = inst_34170__$1);

return statearr_34193;
})();
if(cljs.core.truth_(inst_34171)){
var statearr_34194_35626 = state_34189__$1;
(statearr_34194_35626[(1)] = (5));

} else {
var statearr_34195_35627 = state_34189__$1;
(statearr_34195_35627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (6))){
var inst_34170 = (state_34189[(7)]);
var inst_34175 = (state_34189[(8)]);
var inst_34175__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34176 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34177 = [inst_34170,inst_34175__$1];
var inst_34178 = (new cljs.core.PersistentVector(null,2,(5),inst_34176,inst_34177,null));
var state_34189__$1 = (function (){var statearr_34196 = state_34189;
(statearr_34196[(8)] = inst_34175__$1);

return statearr_34196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34189__$1,(8),jobs,inst_34178);
} else {
if((state_val_34190 === (3))){
var inst_34187 = (state_34189[(2)]);
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34189__$1,inst_34187);
} else {
if((state_val_34190 === (2))){
var state_34189__$1 = state_34189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34189__$1,(4),from);
} else {
if((state_val_34190 === (9))){
var inst_34182 = (state_34189[(2)]);
var state_34189__$1 = (function (){var statearr_34197 = state_34189;
(statearr_34197[(9)] = inst_34182);

return statearr_34197;
})();
var statearr_34198_35630 = state_34189__$1;
(statearr_34198_35630[(2)] = null);

(statearr_34198_35630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (5))){
var inst_34173 = cljs.core.async.close_BANG_(jobs);
var state_34189__$1 = state_34189;
var statearr_34199_35631 = state_34189__$1;
(statearr_34199_35631[(2)] = inst_34173);

(statearr_34199_35631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34190 === (8))){
var inst_34175 = (state_34189[(8)]);
var inst_34180 = (state_34189[(2)]);
var state_34189__$1 = (function (){var statearr_34200 = state_34189;
(statearr_34200[(10)] = inst_34180);

return statearr_34200;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34189__$1,(9),results,inst_34175);
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
});})(c__33942__auto___35621,jobs,results,process,async))
;
return ((function (switch__33865__auto__,c__33942__auto___35621,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0 = (function (){
var statearr_34201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__);

(statearr_34201[(1)] = (1));

return statearr_34201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1 = (function (state_34189){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34189);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34202){if((e34202 instanceof Object)){
var ex__33869__auto__ = e34202;
var statearr_34203_35632 = state_34189;
(statearr_34203_35632[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35633 = state_34189;
state_34189 = G__35633;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = function(state_34189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1.call(this,state_34189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___35621,jobs,results,process,async))
})();
var state__33944__auto__ = (function (){var statearr_34204 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34204[(6)] = c__33942__auto___35621);

return statearr_34204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___35621,jobs,results,process,async))
);


var c__33942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto__,jobs,results,process,async){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto__,jobs,results,process,async){
return (function (state_34242){
var state_val_34243 = (state_34242[(1)]);
if((state_val_34243 === (7))){
var inst_34238 = (state_34242[(2)]);
var state_34242__$1 = state_34242;
var statearr_34244_35635 = state_34242__$1;
(statearr_34244_35635[(2)] = inst_34238);

(statearr_34244_35635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (20))){
var state_34242__$1 = state_34242;
var statearr_34245_35636 = state_34242__$1;
(statearr_34245_35636[(2)] = null);

(statearr_34245_35636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (1))){
var state_34242__$1 = state_34242;
var statearr_34246_35640 = state_34242__$1;
(statearr_34246_35640[(2)] = null);

(statearr_34246_35640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (4))){
var inst_34207 = (state_34242[(7)]);
var inst_34207__$1 = (state_34242[(2)]);
var inst_34208 = (inst_34207__$1 == null);
var state_34242__$1 = (function (){var statearr_34247 = state_34242;
(statearr_34247[(7)] = inst_34207__$1);

return statearr_34247;
})();
if(cljs.core.truth_(inst_34208)){
var statearr_34248_35641 = state_34242__$1;
(statearr_34248_35641[(1)] = (5));

} else {
var statearr_34249_35642 = state_34242__$1;
(statearr_34249_35642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (15))){
var inst_34220 = (state_34242[(8)]);
var state_34242__$1 = state_34242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34242__$1,(18),to,inst_34220);
} else {
if((state_val_34243 === (21))){
var inst_34233 = (state_34242[(2)]);
var state_34242__$1 = state_34242;
var statearr_34250_35643 = state_34242__$1;
(statearr_34250_35643[(2)] = inst_34233);

(statearr_34250_35643[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (13))){
var inst_34235 = (state_34242[(2)]);
var state_34242__$1 = (function (){var statearr_34251 = state_34242;
(statearr_34251[(9)] = inst_34235);

return statearr_34251;
})();
var statearr_34252_35644 = state_34242__$1;
(statearr_34252_35644[(2)] = null);

(statearr_34252_35644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (6))){
var inst_34207 = (state_34242[(7)]);
var state_34242__$1 = state_34242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34242__$1,(11),inst_34207);
} else {
if((state_val_34243 === (17))){
var inst_34228 = (state_34242[(2)]);
var state_34242__$1 = state_34242;
if(cljs.core.truth_(inst_34228)){
var statearr_34253_35645 = state_34242__$1;
(statearr_34253_35645[(1)] = (19));

} else {
var statearr_34254_35646 = state_34242__$1;
(statearr_34254_35646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (3))){
var inst_34240 = (state_34242[(2)]);
var state_34242__$1 = state_34242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34242__$1,inst_34240);
} else {
if((state_val_34243 === (12))){
var inst_34217 = (state_34242[(10)]);
var state_34242__$1 = state_34242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34242__$1,(14),inst_34217);
} else {
if((state_val_34243 === (2))){
var state_34242__$1 = state_34242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34242__$1,(4),results);
} else {
if((state_val_34243 === (19))){
var state_34242__$1 = state_34242;
var statearr_34255_35649 = state_34242__$1;
(statearr_34255_35649[(2)] = null);

(statearr_34255_35649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (11))){
var inst_34217 = (state_34242[(2)]);
var state_34242__$1 = (function (){var statearr_34256 = state_34242;
(statearr_34256[(10)] = inst_34217);

return statearr_34256;
})();
var statearr_34257_35650 = state_34242__$1;
(statearr_34257_35650[(2)] = null);

(statearr_34257_35650[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (9))){
var state_34242__$1 = state_34242;
var statearr_34258_35651 = state_34242__$1;
(statearr_34258_35651[(2)] = null);

(statearr_34258_35651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (5))){
var state_34242__$1 = state_34242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34259_35652 = state_34242__$1;
(statearr_34259_35652[(1)] = (8));

} else {
var statearr_34260_35653 = state_34242__$1;
(statearr_34260_35653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (14))){
var inst_34220 = (state_34242[(8)]);
var inst_34222 = (state_34242[(11)]);
var inst_34220__$1 = (state_34242[(2)]);
var inst_34221 = (inst_34220__$1 == null);
var inst_34222__$1 = cljs.core.not(inst_34221);
var state_34242__$1 = (function (){var statearr_34261 = state_34242;
(statearr_34261[(8)] = inst_34220__$1);

(statearr_34261[(11)] = inst_34222__$1);

return statearr_34261;
})();
if(inst_34222__$1){
var statearr_34262_35654 = state_34242__$1;
(statearr_34262_35654[(1)] = (15));

} else {
var statearr_34263_35655 = state_34242__$1;
(statearr_34263_35655[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (16))){
var inst_34222 = (state_34242[(11)]);
var state_34242__$1 = state_34242;
var statearr_34264_35656 = state_34242__$1;
(statearr_34264_35656[(2)] = inst_34222);

(statearr_34264_35656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (10))){
var inst_34214 = (state_34242[(2)]);
var state_34242__$1 = state_34242;
var statearr_34265_35657 = state_34242__$1;
(statearr_34265_35657[(2)] = inst_34214);

(statearr_34265_35657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (18))){
var inst_34225 = (state_34242[(2)]);
var state_34242__$1 = state_34242;
var statearr_34266_35658 = state_34242__$1;
(statearr_34266_35658[(2)] = inst_34225);

(statearr_34266_35658[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34243 === (8))){
var inst_34211 = cljs.core.async.close_BANG_(to);
var state_34242__$1 = state_34242;
var statearr_34267_35660 = state_34242__$1;
(statearr_34267_35660[(2)] = inst_34211);

(statearr_34267_35660[(1)] = (10));


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
});})(c__33942__auto__,jobs,results,process,async))
;
return ((function (switch__33865__auto__,c__33942__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0 = (function (){
var statearr_34268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__);

(statearr_34268[(1)] = (1));

return statearr_34268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1 = (function (state_34242){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34242);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34269){if((e34269 instanceof Object)){
var ex__33869__auto__ = e34269;
var statearr_34270_35662 = state_34242;
(statearr_34270_35662[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35663 = state_34242;
state_34242 = G__35663;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__ = function(state_34242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1.call(this,state_34242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto__,jobs,results,process,async))
})();
var state__33944__auto__ = (function (){var statearr_34271 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34271[(6)] = c__33942__auto__);

return statearr_34271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto__,jobs,results,process,async))
);

return c__33942__auto__;
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
var G__34273 = arguments.length;
switch (G__34273) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__34275 = arguments.length;
switch (G__34275) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__34277 = arguments.length;
switch (G__34277) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33942__auto___35667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___35667,tc,fc){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___35667,tc,fc){
return (function (state_34303){
var state_val_34304 = (state_34303[(1)]);
if((state_val_34304 === (7))){
var inst_34299 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34305_35668 = state_34303__$1;
(statearr_34305_35668[(2)] = inst_34299);

(statearr_34305_35668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (1))){
var state_34303__$1 = state_34303;
var statearr_34306_35671 = state_34303__$1;
(statearr_34306_35671[(2)] = null);

(statearr_34306_35671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (4))){
var inst_34280 = (state_34303[(7)]);
var inst_34280__$1 = (state_34303[(2)]);
var inst_34281 = (inst_34280__$1 == null);
var state_34303__$1 = (function (){var statearr_34307 = state_34303;
(statearr_34307[(7)] = inst_34280__$1);

return statearr_34307;
})();
if(cljs.core.truth_(inst_34281)){
var statearr_34308_35674 = state_34303__$1;
(statearr_34308_35674[(1)] = (5));

} else {
var statearr_34309_35675 = state_34303__$1;
(statearr_34309_35675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (13))){
var state_34303__$1 = state_34303;
var statearr_34310_35676 = state_34303__$1;
(statearr_34310_35676[(2)] = null);

(statearr_34310_35676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (6))){
var inst_34280 = (state_34303[(7)]);
var inst_34286 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34280) : p.call(null,inst_34280));
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34286)){
var statearr_34311_35679 = state_34303__$1;
(statearr_34311_35679[(1)] = (9));

} else {
var statearr_34312_35680 = state_34303__$1;
(statearr_34312_35680[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (3))){
var inst_34301 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34303__$1,inst_34301);
} else {
if((state_val_34304 === (12))){
var state_34303__$1 = state_34303;
var statearr_34313_35683 = state_34303__$1;
(statearr_34313_35683[(2)] = null);

(statearr_34313_35683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (2))){
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34303__$1,(4),ch);
} else {
if((state_val_34304 === (11))){
var inst_34280 = (state_34303[(7)]);
var inst_34290 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34303__$1,(8),inst_34290,inst_34280);
} else {
if((state_val_34304 === (9))){
var state_34303__$1 = state_34303;
var statearr_34314_35685 = state_34303__$1;
(statearr_34314_35685[(2)] = tc);

(statearr_34314_35685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (5))){
var inst_34283 = cljs.core.async.close_BANG_(tc);
var inst_34284 = cljs.core.async.close_BANG_(fc);
var state_34303__$1 = (function (){var statearr_34315 = state_34303;
(statearr_34315[(8)] = inst_34283);

return statearr_34315;
})();
var statearr_34316_35687 = state_34303__$1;
(statearr_34316_35687[(2)] = inst_34284);

(statearr_34316_35687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (14))){
var inst_34297 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
var statearr_34317_35690 = state_34303__$1;
(statearr_34317_35690[(2)] = inst_34297);

(statearr_34317_35690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (10))){
var state_34303__$1 = state_34303;
var statearr_34318_35691 = state_34303__$1;
(statearr_34318_35691[(2)] = fc);

(statearr_34318_35691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34304 === (8))){
var inst_34292 = (state_34303[(2)]);
var state_34303__$1 = state_34303;
if(cljs.core.truth_(inst_34292)){
var statearr_34319_35692 = state_34303__$1;
(statearr_34319_35692[(1)] = (12));

} else {
var statearr_34320_35693 = state_34303__$1;
(statearr_34320_35693[(1)] = (13));

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
});})(c__33942__auto___35667,tc,fc))
;
return ((function (switch__33865__auto__,c__33942__auto___35667,tc,fc){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_34321 = [null,null,null,null,null,null,null,null,null];
(statearr_34321[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_34321[(1)] = (1));

return statearr_34321;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_34303){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34303);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34322){if((e34322 instanceof Object)){
var ex__33869__auto__ = e34322;
var statearr_34323_35694 = state_34303;
(statearr_34323_35694[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35695 = state_34303;
state_34303 = G__35695;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_34303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_34303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___35667,tc,fc))
})();
var state__33944__auto__ = (function (){var statearr_34324 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34324[(6)] = c__33942__auto___35667);

return statearr_34324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___35667,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto__){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto__){
return (function (state_34345){
var state_val_34346 = (state_34345[(1)]);
if((state_val_34346 === (7))){
var inst_34341 = (state_34345[(2)]);
var state_34345__$1 = state_34345;
var statearr_34347_35696 = state_34345__$1;
(statearr_34347_35696[(2)] = inst_34341);

(statearr_34347_35696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34346 === (1))){
var inst_34325 = init;
var state_34345__$1 = (function (){var statearr_34348 = state_34345;
(statearr_34348[(7)] = inst_34325);

return statearr_34348;
})();
var statearr_34349_35697 = state_34345__$1;
(statearr_34349_35697[(2)] = null);

(statearr_34349_35697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34346 === (4))){
var inst_34328 = (state_34345[(8)]);
var inst_34328__$1 = (state_34345[(2)]);
var inst_34329 = (inst_34328__$1 == null);
var state_34345__$1 = (function (){var statearr_34350 = state_34345;
(statearr_34350[(8)] = inst_34328__$1);

return statearr_34350;
})();
if(cljs.core.truth_(inst_34329)){
var statearr_34351_35698 = state_34345__$1;
(statearr_34351_35698[(1)] = (5));

} else {
var statearr_34352_35699 = state_34345__$1;
(statearr_34352_35699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34346 === (6))){
var inst_34325 = (state_34345[(7)]);
var inst_34332 = (state_34345[(9)]);
var inst_34328 = (state_34345[(8)]);
var inst_34332__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34325,inst_34328) : f.call(null,inst_34325,inst_34328));
var inst_34333 = cljs.core.reduced_QMARK_(inst_34332__$1);
var state_34345__$1 = (function (){var statearr_34353 = state_34345;
(statearr_34353[(9)] = inst_34332__$1);

return statearr_34353;
})();
if(inst_34333){
var statearr_34354_35700 = state_34345__$1;
(statearr_34354_35700[(1)] = (8));

} else {
var statearr_34355_35701 = state_34345__$1;
(statearr_34355_35701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34346 === (3))){
var inst_34343 = (state_34345[(2)]);
var state_34345__$1 = state_34345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34345__$1,inst_34343);
} else {
if((state_val_34346 === (2))){
var state_34345__$1 = state_34345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34345__$1,(4),ch);
} else {
if((state_val_34346 === (9))){
var inst_34332 = (state_34345[(9)]);
var inst_34325 = inst_34332;
var state_34345__$1 = (function (){var statearr_34356 = state_34345;
(statearr_34356[(7)] = inst_34325);

return statearr_34356;
})();
var statearr_34357_35703 = state_34345__$1;
(statearr_34357_35703[(2)] = null);

(statearr_34357_35703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34346 === (5))){
var inst_34325 = (state_34345[(7)]);
var state_34345__$1 = state_34345;
var statearr_34358_35704 = state_34345__$1;
(statearr_34358_35704[(2)] = inst_34325);

(statearr_34358_35704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34346 === (10))){
var inst_34339 = (state_34345[(2)]);
var state_34345__$1 = state_34345;
var statearr_34359_35705 = state_34345__$1;
(statearr_34359_35705[(2)] = inst_34339);

(statearr_34359_35705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34346 === (8))){
var inst_34332 = (state_34345[(9)]);
var inst_34335 = cljs.core.deref(inst_34332);
var state_34345__$1 = state_34345;
var statearr_34360_35706 = state_34345__$1;
(statearr_34360_35706[(2)] = inst_34335);

(statearr_34360_35706[(1)] = (10));


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
});})(c__33942__auto__))
;
return ((function (switch__33865__auto__,c__33942__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33866__auto____0 = (function (){
var statearr_34361 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34361[(0)] = cljs$core$async$reduce_$_state_machine__33866__auto__);

(statearr_34361[(1)] = (1));

return statearr_34361;
});
var cljs$core$async$reduce_$_state_machine__33866__auto____1 = (function (state_34345){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34345);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34362){if((e34362 instanceof Object)){
var ex__33869__auto__ = e34362;
var statearr_34363_35717 = state_34345;
(statearr_34363_35717[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35718 = state_34345;
state_34345 = G__35718;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33866__auto__ = function(state_34345){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33866__auto____1.call(this,state_34345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33866__auto____0;
cljs$core$async$reduce_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33866__auto____1;
return cljs$core$async$reduce_$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto__))
})();
var state__33944__auto__ = (function (){var statearr_34364 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34364[(6)] = c__33942__auto__);

return statearr_34364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto__))
);

return c__33942__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto__,f__$1){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto__,f__$1){
return (function (state_34370){
var state_val_34371 = (state_34370[(1)]);
if((state_val_34371 === (1))){
var inst_34365 = cljs.core.async.reduce(f__$1,init,ch);
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34370__$1,(2),inst_34365);
} else {
if((state_val_34371 === (2))){
var inst_34367 = (state_34370[(2)]);
var inst_34368 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34367) : f__$1.call(null,inst_34367));
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34370__$1,inst_34368);
} else {
return null;
}
}
});})(c__33942__auto__,f__$1))
;
return ((function (switch__33865__auto__,c__33942__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33866__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33866__auto____0 = (function (){
var statearr_34372 = [null,null,null,null,null,null,null];
(statearr_34372[(0)] = cljs$core$async$transduce_$_state_machine__33866__auto__);

(statearr_34372[(1)] = (1));

return statearr_34372;
});
var cljs$core$async$transduce_$_state_machine__33866__auto____1 = (function (state_34370){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34370);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34373){if((e34373 instanceof Object)){
var ex__33869__auto__ = e34373;
var statearr_34374_35727 = state_34370;
(statearr_34374_35727[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35728 = state_34370;
state_34370 = G__35728;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33866__auto__ = function(state_34370){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33866__auto____1.call(this,state_34370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33866__auto____0;
cljs$core$async$transduce_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33866__auto____1;
return cljs$core$async$transduce_$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto__,f__$1))
})();
var state__33944__auto__ = (function (){var statearr_34375 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34375[(6)] = c__33942__auto__);

return statearr_34375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto__,f__$1))
);

return c__33942__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34377 = arguments.length;
switch (G__34377) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto__){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto__){
return (function (state_34402){
var state_val_34403 = (state_34402[(1)]);
if((state_val_34403 === (7))){
var inst_34384 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
var statearr_34404_35730 = state_34402__$1;
(statearr_34404_35730[(2)] = inst_34384);

(statearr_34404_35730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (1))){
var inst_34378 = cljs.core.seq(coll);
var inst_34379 = inst_34378;
var state_34402__$1 = (function (){var statearr_34405 = state_34402;
(statearr_34405[(7)] = inst_34379);

return statearr_34405;
})();
var statearr_34406_35741 = state_34402__$1;
(statearr_34406_35741[(2)] = null);

(statearr_34406_35741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (4))){
var inst_34379 = (state_34402[(7)]);
var inst_34382 = cljs.core.first(inst_34379);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34402__$1,(7),ch,inst_34382);
} else {
if((state_val_34403 === (13))){
var inst_34396 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
var statearr_34407_35742 = state_34402__$1;
(statearr_34407_35742[(2)] = inst_34396);

(statearr_34407_35742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (6))){
var inst_34387 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
if(cljs.core.truth_(inst_34387)){
var statearr_34408_35743 = state_34402__$1;
(statearr_34408_35743[(1)] = (8));

} else {
var statearr_34409_35744 = state_34402__$1;
(statearr_34409_35744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (3))){
var inst_34400 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34402__$1,inst_34400);
} else {
if((state_val_34403 === (12))){
var state_34402__$1 = state_34402;
var statearr_34410_35745 = state_34402__$1;
(statearr_34410_35745[(2)] = null);

(statearr_34410_35745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (2))){
var inst_34379 = (state_34402[(7)]);
var state_34402__$1 = state_34402;
if(cljs.core.truth_(inst_34379)){
var statearr_34411_35746 = state_34402__$1;
(statearr_34411_35746[(1)] = (4));

} else {
var statearr_34412_35747 = state_34402__$1;
(statearr_34412_35747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (11))){
var inst_34393 = cljs.core.async.close_BANG_(ch);
var state_34402__$1 = state_34402;
var statearr_34413_35748 = state_34402__$1;
(statearr_34413_35748[(2)] = inst_34393);

(statearr_34413_35748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (9))){
var state_34402__$1 = state_34402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34414_35749 = state_34402__$1;
(statearr_34414_35749[(1)] = (11));

} else {
var statearr_34415_35750 = state_34402__$1;
(statearr_34415_35750[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (5))){
var inst_34379 = (state_34402[(7)]);
var state_34402__$1 = state_34402;
var statearr_34416_35751 = state_34402__$1;
(statearr_34416_35751[(2)] = inst_34379);

(statearr_34416_35751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (10))){
var inst_34398 = (state_34402[(2)]);
var state_34402__$1 = state_34402;
var statearr_34417_35752 = state_34402__$1;
(statearr_34417_35752[(2)] = inst_34398);

(statearr_34417_35752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34403 === (8))){
var inst_34379 = (state_34402[(7)]);
var inst_34389 = cljs.core.next(inst_34379);
var inst_34379__$1 = inst_34389;
var state_34402__$1 = (function (){var statearr_34418 = state_34402;
(statearr_34418[(7)] = inst_34379__$1);

return statearr_34418;
})();
var statearr_34419_35753 = state_34402__$1;
(statearr_34419_35753[(2)] = null);

(statearr_34419_35753[(1)] = (2));


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
});})(c__33942__auto__))
;
return ((function (switch__33865__auto__,c__33942__auto__){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_34420 = [null,null,null,null,null,null,null,null];
(statearr_34420[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_34420[(1)] = (1));

return statearr_34420;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_34402){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34402);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34421){if((e34421 instanceof Object)){
var ex__33869__auto__ = e34421;
var statearr_34422_35754 = state_34402;
(statearr_34422_35754[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35755 = state_34402;
state_34402 = G__35755;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_34402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_34402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto__))
})();
var state__33944__auto__ = (function (){var statearr_34423 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34423[(6)] = c__33942__auto__);

return statearr_34423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto__))
);

return c__33942__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34424 = (function (ch,cs,meta34425){
this.ch = ch;
this.cs = cs;
this.meta34425 = meta34425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34426,meta34425__$1){
var self__ = this;
var _34426__$1 = this;
return (new cljs.core.async.t_cljs$core$async34424(self__.ch,self__.cs,meta34425__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34426){
var self__ = this;
var _34426__$1 = this;
return self__.meta34425;
});})(cs))
;

cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34424.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34424.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34425","meta34425",287289739,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34424.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34424.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34424";

cljs.core.async.t_cljs$core$async34424.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34424");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34424.
 */
cljs.core.async.__GT_t_cljs$core$async34424 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34424(ch__$1,cs__$1,meta34425){
return (new cljs.core.async.t_cljs$core$async34424(ch__$1,cs__$1,meta34425));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34424(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33942__auto___35799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___35799,cs,m,dchan,dctr,done){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___35799,cs,m,dchan,dctr,done){
return (function (state_34561){
var state_val_34562 = (state_34561[(1)]);
if((state_val_34562 === (7))){
var inst_34557 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34563_35800 = state_34561__$1;
(statearr_34563_35800[(2)] = inst_34557);

(statearr_34563_35800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (20))){
var inst_34460 = (state_34561[(7)]);
var inst_34472 = cljs.core.first(inst_34460);
var inst_34473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34472,(0),null);
var inst_34474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34472,(1),null);
var state_34561__$1 = (function (){var statearr_34564 = state_34561;
(statearr_34564[(8)] = inst_34473);

return statearr_34564;
})();
if(cljs.core.truth_(inst_34474)){
var statearr_34565_35801 = state_34561__$1;
(statearr_34565_35801[(1)] = (22));

} else {
var statearr_34566_35802 = state_34561__$1;
(statearr_34566_35802[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (27))){
var inst_34509 = (state_34561[(9)]);
var inst_34504 = (state_34561[(10)]);
var inst_34429 = (state_34561[(11)]);
var inst_34502 = (state_34561[(12)]);
var inst_34509__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34502,inst_34504);
var inst_34510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34509__$1,inst_34429,done);
var state_34561__$1 = (function (){var statearr_34567 = state_34561;
(statearr_34567[(9)] = inst_34509__$1);

return statearr_34567;
})();
if(cljs.core.truth_(inst_34510)){
var statearr_34568_35803 = state_34561__$1;
(statearr_34568_35803[(1)] = (30));

} else {
var statearr_34569_35819 = state_34561__$1;
(statearr_34569_35819[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (1))){
var state_34561__$1 = state_34561;
var statearr_34570_35822 = state_34561__$1;
(statearr_34570_35822[(2)] = null);

(statearr_34570_35822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (24))){
var inst_34460 = (state_34561[(7)]);
var inst_34479 = (state_34561[(2)]);
var inst_34480 = cljs.core.next(inst_34460);
var inst_34438 = inst_34480;
var inst_34439 = null;
var inst_34440 = (0);
var inst_34441 = (0);
var state_34561__$1 = (function (){var statearr_34571 = state_34561;
(statearr_34571[(13)] = inst_34440);

(statearr_34571[(14)] = inst_34439);

(statearr_34571[(15)] = inst_34438);

(statearr_34571[(16)] = inst_34441);

(statearr_34571[(17)] = inst_34479);

return statearr_34571;
})();
var statearr_34572_35823 = state_34561__$1;
(statearr_34572_35823[(2)] = null);

(statearr_34572_35823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (39))){
var state_34561__$1 = state_34561;
var statearr_34576_35837 = state_34561__$1;
(statearr_34576_35837[(2)] = null);

(statearr_34576_35837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (4))){
var inst_34429 = (state_34561[(11)]);
var inst_34429__$1 = (state_34561[(2)]);
var inst_34430 = (inst_34429__$1 == null);
var state_34561__$1 = (function (){var statearr_34577 = state_34561;
(statearr_34577[(11)] = inst_34429__$1);

return statearr_34577;
})();
if(cljs.core.truth_(inst_34430)){
var statearr_34578_35838 = state_34561__$1;
(statearr_34578_35838[(1)] = (5));

} else {
var statearr_34579_35839 = state_34561__$1;
(statearr_34579_35839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (15))){
var inst_34440 = (state_34561[(13)]);
var inst_34439 = (state_34561[(14)]);
var inst_34438 = (state_34561[(15)]);
var inst_34441 = (state_34561[(16)]);
var inst_34456 = (state_34561[(2)]);
var inst_34457 = (inst_34441 + (1));
var tmp34573 = inst_34440;
var tmp34574 = inst_34439;
var tmp34575 = inst_34438;
var inst_34438__$1 = tmp34575;
var inst_34439__$1 = tmp34574;
var inst_34440__$1 = tmp34573;
var inst_34441__$1 = inst_34457;
var state_34561__$1 = (function (){var statearr_34580 = state_34561;
(statearr_34580[(18)] = inst_34456);

(statearr_34580[(13)] = inst_34440__$1);

(statearr_34580[(14)] = inst_34439__$1);

(statearr_34580[(15)] = inst_34438__$1);

(statearr_34580[(16)] = inst_34441__$1);

return statearr_34580;
})();
var statearr_34581_35840 = state_34561__$1;
(statearr_34581_35840[(2)] = null);

(statearr_34581_35840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (21))){
var inst_34483 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34585_35841 = state_34561__$1;
(statearr_34585_35841[(2)] = inst_34483);

(statearr_34585_35841[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (31))){
var inst_34509 = (state_34561[(9)]);
var inst_34513 = done(null);
var inst_34514 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34509);
var state_34561__$1 = (function (){var statearr_34586 = state_34561;
(statearr_34586[(19)] = inst_34513);

return statearr_34586;
})();
var statearr_34587_35842 = state_34561__$1;
(statearr_34587_35842[(2)] = inst_34514);

(statearr_34587_35842[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (32))){
var inst_34503 = (state_34561[(20)]);
var inst_34501 = (state_34561[(21)]);
var inst_34504 = (state_34561[(10)]);
var inst_34502 = (state_34561[(12)]);
var inst_34516 = (state_34561[(2)]);
var inst_34517 = (inst_34504 + (1));
var tmp34582 = inst_34503;
var tmp34583 = inst_34501;
var tmp34584 = inst_34502;
var inst_34501__$1 = tmp34583;
var inst_34502__$1 = tmp34584;
var inst_34503__$1 = tmp34582;
var inst_34504__$1 = inst_34517;
var state_34561__$1 = (function (){var statearr_34588 = state_34561;
(statearr_34588[(20)] = inst_34503__$1);

(statearr_34588[(21)] = inst_34501__$1);

(statearr_34588[(22)] = inst_34516);

(statearr_34588[(10)] = inst_34504__$1);

(statearr_34588[(12)] = inst_34502__$1);

return statearr_34588;
})();
var statearr_34589_35843 = state_34561__$1;
(statearr_34589_35843[(2)] = null);

(statearr_34589_35843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (40))){
var inst_34529 = (state_34561[(23)]);
var inst_34533 = done(null);
var inst_34534 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34529);
var state_34561__$1 = (function (){var statearr_34590 = state_34561;
(statearr_34590[(24)] = inst_34533);

return statearr_34590;
})();
var statearr_34591_35844 = state_34561__$1;
(statearr_34591_35844[(2)] = inst_34534);

(statearr_34591_35844[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (33))){
var inst_34520 = (state_34561[(25)]);
var inst_34522 = cljs.core.chunked_seq_QMARK_(inst_34520);
var state_34561__$1 = state_34561;
if(inst_34522){
var statearr_34592_35845 = state_34561__$1;
(statearr_34592_35845[(1)] = (36));

} else {
var statearr_34593_35846 = state_34561__$1;
(statearr_34593_35846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (13))){
var inst_34450 = (state_34561[(26)]);
var inst_34453 = cljs.core.async.close_BANG_(inst_34450);
var state_34561__$1 = state_34561;
var statearr_34594_35847 = state_34561__$1;
(statearr_34594_35847[(2)] = inst_34453);

(statearr_34594_35847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (22))){
var inst_34473 = (state_34561[(8)]);
var inst_34476 = cljs.core.async.close_BANG_(inst_34473);
var state_34561__$1 = state_34561;
var statearr_34595_35854 = state_34561__$1;
(statearr_34595_35854[(2)] = inst_34476);

(statearr_34595_35854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (36))){
var inst_34520 = (state_34561[(25)]);
var inst_34524 = cljs.core.chunk_first(inst_34520);
var inst_34525 = cljs.core.chunk_rest(inst_34520);
var inst_34526 = cljs.core.count(inst_34524);
var inst_34501 = inst_34525;
var inst_34502 = inst_34524;
var inst_34503 = inst_34526;
var inst_34504 = (0);
var state_34561__$1 = (function (){var statearr_34596 = state_34561;
(statearr_34596[(20)] = inst_34503);

(statearr_34596[(21)] = inst_34501);

(statearr_34596[(10)] = inst_34504);

(statearr_34596[(12)] = inst_34502);

return statearr_34596;
})();
var statearr_34597_35855 = state_34561__$1;
(statearr_34597_35855[(2)] = null);

(statearr_34597_35855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (41))){
var inst_34520 = (state_34561[(25)]);
var inst_34536 = (state_34561[(2)]);
var inst_34537 = cljs.core.next(inst_34520);
var inst_34501 = inst_34537;
var inst_34502 = null;
var inst_34503 = (0);
var inst_34504 = (0);
var state_34561__$1 = (function (){var statearr_34598 = state_34561;
(statearr_34598[(20)] = inst_34503);

(statearr_34598[(27)] = inst_34536);

(statearr_34598[(21)] = inst_34501);

(statearr_34598[(10)] = inst_34504);

(statearr_34598[(12)] = inst_34502);

return statearr_34598;
})();
var statearr_34599_35856 = state_34561__$1;
(statearr_34599_35856[(2)] = null);

(statearr_34599_35856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (43))){
var state_34561__$1 = state_34561;
var statearr_34600_35857 = state_34561__$1;
(statearr_34600_35857[(2)] = null);

(statearr_34600_35857[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (29))){
var inst_34545 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34601_35858 = state_34561__$1;
(statearr_34601_35858[(2)] = inst_34545);

(statearr_34601_35858[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (44))){
var inst_34554 = (state_34561[(2)]);
var state_34561__$1 = (function (){var statearr_34602 = state_34561;
(statearr_34602[(28)] = inst_34554);

return statearr_34602;
})();
var statearr_34603_35859 = state_34561__$1;
(statearr_34603_35859[(2)] = null);

(statearr_34603_35859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (6))){
var inst_34493 = (state_34561[(29)]);
var inst_34492 = cljs.core.deref(cs);
var inst_34493__$1 = cljs.core.keys(inst_34492);
var inst_34494 = cljs.core.count(inst_34493__$1);
var inst_34495 = cljs.core.reset_BANG_(dctr,inst_34494);
var inst_34500 = cljs.core.seq(inst_34493__$1);
var inst_34501 = inst_34500;
var inst_34502 = null;
var inst_34503 = (0);
var inst_34504 = (0);
var state_34561__$1 = (function (){var statearr_34604 = state_34561;
(statearr_34604[(29)] = inst_34493__$1);

(statearr_34604[(20)] = inst_34503);

(statearr_34604[(30)] = inst_34495);

(statearr_34604[(21)] = inst_34501);

(statearr_34604[(10)] = inst_34504);

(statearr_34604[(12)] = inst_34502);

return statearr_34604;
})();
var statearr_34605_35866 = state_34561__$1;
(statearr_34605_35866[(2)] = null);

(statearr_34605_35866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (28))){
var inst_34520 = (state_34561[(25)]);
var inst_34501 = (state_34561[(21)]);
var inst_34520__$1 = cljs.core.seq(inst_34501);
var state_34561__$1 = (function (){var statearr_34606 = state_34561;
(statearr_34606[(25)] = inst_34520__$1);

return statearr_34606;
})();
if(inst_34520__$1){
var statearr_34607_35867 = state_34561__$1;
(statearr_34607_35867[(1)] = (33));

} else {
var statearr_34608_35868 = state_34561__$1;
(statearr_34608_35868[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (25))){
var inst_34503 = (state_34561[(20)]);
var inst_34504 = (state_34561[(10)]);
var inst_34506 = (inst_34504 < inst_34503);
var inst_34507 = inst_34506;
var state_34561__$1 = state_34561;
if(cljs.core.truth_(inst_34507)){
var statearr_34609_35869 = state_34561__$1;
(statearr_34609_35869[(1)] = (27));

} else {
var statearr_34610_35870 = state_34561__$1;
(statearr_34610_35870[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (34))){
var state_34561__$1 = state_34561;
var statearr_34611_35871 = state_34561__$1;
(statearr_34611_35871[(2)] = null);

(statearr_34611_35871[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (17))){
var state_34561__$1 = state_34561;
var statearr_34612_35872 = state_34561__$1;
(statearr_34612_35872[(2)] = null);

(statearr_34612_35872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (3))){
var inst_34559 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34561__$1,inst_34559);
} else {
if((state_val_34562 === (12))){
var inst_34488 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34613_35873 = state_34561__$1;
(statearr_34613_35873[(2)] = inst_34488);

(statearr_34613_35873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (2))){
var state_34561__$1 = state_34561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34561__$1,(4),ch);
} else {
if((state_val_34562 === (23))){
var state_34561__$1 = state_34561;
var statearr_34614_35874 = state_34561__$1;
(statearr_34614_35874[(2)] = null);

(statearr_34614_35874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (35))){
var inst_34543 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34615_35875 = state_34561__$1;
(statearr_34615_35875[(2)] = inst_34543);

(statearr_34615_35875[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (19))){
var inst_34460 = (state_34561[(7)]);
var inst_34464 = cljs.core.chunk_first(inst_34460);
var inst_34465 = cljs.core.chunk_rest(inst_34460);
var inst_34466 = cljs.core.count(inst_34464);
var inst_34438 = inst_34465;
var inst_34439 = inst_34464;
var inst_34440 = inst_34466;
var inst_34441 = (0);
var state_34561__$1 = (function (){var statearr_34616 = state_34561;
(statearr_34616[(13)] = inst_34440);

(statearr_34616[(14)] = inst_34439);

(statearr_34616[(15)] = inst_34438);

(statearr_34616[(16)] = inst_34441);

return statearr_34616;
})();
var statearr_34617_35876 = state_34561__$1;
(statearr_34617_35876[(2)] = null);

(statearr_34617_35876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (11))){
var inst_34460 = (state_34561[(7)]);
var inst_34438 = (state_34561[(15)]);
var inst_34460__$1 = cljs.core.seq(inst_34438);
var state_34561__$1 = (function (){var statearr_34618 = state_34561;
(statearr_34618[(7)] = inst_34460__$1);

return statearr_34618;
})();
if(inst_34460__$1){
var statearr_34619_35877 = state_34561__$1;
(statearr_34619_35877[(1)] = (16));

} else {
var statearr_34620_35884 = state_34561__$1;
(statearr_34620_35884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (9))){
var inst_34490 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34621_35885 = state_34561__$1;
(statearr_34621_35885[(2)] = inst_34490);

(statearr_34621_35885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (5))){
var inst_34436 = cljs.core.deref(cs);
var inst_34437 = cljs.core.seq(inst_34436);
var inst_34438 = inst_34437;
var inst_34439 = null;
var inst_34440 = (0);
var inst_34441 = (0);
var state_34561__$1 = (function (){var statearr_34622 = state_34561;
(statearr_34622[(13)] = inst_34440);

(statearr_34622[(14)] = inst_34439);

(statearr_34622[(15)] = inst_34438);

(statearr_34622[(16)] = inst_34441);

return statearr_34622;
})();
var statearr_34623_35886 = state_34561__$1;
(statearr_34623_35886[(2)] = null);

(statearr_34623_35886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (14))){
var state_34561__$1 = state_34561;
var statearr_34624_35887 = state_34561__$1;
(statearr_34624_35887[(2)] = null);

(statearr_34624_35887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (45))){
var inst_34551 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34625_35888 = state_34561__$1;
(statearr_34625_35888[(2)] = inst_34551);

(statearr_34625_35888[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (26))){
var inst_34493 = (state_34561[(29)]);
var inst_34547 = (state_34561[(2)]);
var inst_34548 = cljs.core.seq(inst_34493);
var state_34561__$1 = (function (){var statearr_34626 = state_34561;
(statearr_34626[(31)] = inst_34547);

return statearr_34626;
})();
if(inst_34548){
var statearr_34627_35889 = state_34561__$1;
(statearr_34627_35889[(1)] = (42));

} else {
var statearr_34628_35890 = state_34561__$1;
(statearr_34628_35890[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (16))){
var inst_34460 = (state_34561[(7)]);
var inst_34462 = cljs.core.chunked_seq_QMARK_(inst_34460);
var state_34561__$1 = state_34561;
if(inst_34462){
var statearr_34629_35891 = state_34561__$1;
(statearr_34629_35891[(1)] = (19));

} else {
var statearr_34630_35892 = state_34561__$1;
(statearr_34630_35892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (38))){
var inst_34540 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34631_35893 = state_34561__$1;
(statearr_34631_35893[(2)] = inst_34540);

(statearr_34631_35893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (30))){
var state_34561__$1 = state_34561;
var statearr_34632_35894 = state_34561__$1;
(statearr_34632_35894[(2)] = null);

(statearr_34632_35894[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (10))){
var inst_34439 = (state_34561[(14)]);
var inst_34441 = (state_34561[(16)]);
var inst_34449 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34439,inst_34441);
var inst_34450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34449,(0),null);
var inst_34451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34449,(1),null);
var state_34561__$1 = (function (){var statearr_34633 = state_34561;
(statearr_34633[(26)] = inst_34450);

return statearr_34633;
})();
if(cljs.core.truth_(inst_34451)){
var statearr_34634_35895 = state_34561__$1;
(statearr_34634_35895[(1)] = (13));

} else {
var statearr_34635_35896 = state_34561__$1;
(statearr_34635_35896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (18))){
var inst_34486 = (state_34561[(2)]);
var state_34561__$1 = state_34561;
var statearr_34636_35897 = state_34561__$1;
(statearr_34636_35897[(2)] = inst_34486);

(statearr_34636_35897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (42))){
var state_34561__$1 = state_34561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34561__$1,(45),dchan);
} else {
if((state_val_34562 === (37))){
var inst_34529 = (state_34561[(23)]);
var inst_34520 = (state_34561[(25)]);
var inst_34429 = (state_34561[(11)]);
var inst_34529__$1 = cljs.core.first(inst_34520);
var inst_34530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34529__$1,inst_34429,done);
var state_34561__$1 = (function (){var statearr_34637 = state_34561;
(statearr_34637[(23)] = inst_34529__$1);

return statearr_34637;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34638_35898 = state_34561__$1;
(statearr_34638_35898[(1)] = (39));

} else {
var statearr_34639_35900 = state_34561__$1;
(statearr_34639_35900[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34562 === (8))){
var inst_34440 = (state_34561[(13)]);
var inst_34441 = (state_34561[(16)]);
var inst_34443 = (inst_34441 < inst_34440);
var inst_34444 = inst_34443;
var state_34561__$1 = state_34561;
if(cljs.core.truth_(inst_34444)){
var statearr_34640_35901 = state_34561__$1;
(statearr_34640_35901[(1)] = (10));

} else {
var statearr_34641_35902 = state_34561__$1;
(statearr_34641_35902[(1)] = (11));

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
});})(c__33942__auto___35799,cs,m,dchan,dctr,done))
;
return ((function (switch__33865__auto__,c__33942__auto___35799,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33866__auto__ = null;
var cljs$core$async$mult_$_state_machine__33866__auto____0 = (function (){
var statearr_34642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34642[(0)] = cljs$core$async$mult_$_state_machine__33866__auto__);

(statearr_34642[(1)] = (1));

return statearr_34642;
});
var cljs$core$async$mult_$_state_machine__33866__auto____1 = (function (state_34561){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34561);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34643){if((e34643 instanceof Object)){
var ex__33869__auto__ = e34643;
var statearr_34644_35908 = state_34561;
(statearr_34644_35908[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35909 = state_34561;
state_34561 = G__35909;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33866__auto__ = function(state_34561){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33866__auto____1.call(this,state_34561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33866__auto____0;
cljs$core$async$mult_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33866__auto____1;
return cljs$core$async$mult_$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___35799,cs,m,dchan,dctr,done))
})();
var state__33944__auto__ = (function (){var statearr_34645 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34645[(6)] = c__33942__auto___35799);

return statearr_34645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___35799,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34647 = arguments.length;
switch (G__34647) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35917 = arguments.length;
var i__4731__auto___35918 = (0);
while(true){
if((i__4731__auto___35918 < len__4730__auto___35917)){
args__4736__auto__.push((arguments[i__4731__auto___35918]));

var G__35919 = (i__4731__auto___35918 + (1));
i__4731__auto___35918 = G__35919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34652){
var map__34653 = p__34652;
var map__34653__$1 = (((((!((map__34653 == null))))?(((((map__34653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34653):map__34653);
var opts = map__34653__$1;
var statearr_34655_35920 = state;
(statearr_34655_35920[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__34653,map__34653__$1,opts){
return (function (val){
var statearr_34656_35921 = state;
(statearr_34656_35921[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34653,map__34653__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34657_35923 = state;
(statearr_34657_35923[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34648){
var G__34649 = cljs.core.first(seq34648);
var seq34648__$1 = cljs.core.next(seq34648);
var G__34650 = cljs.core.first(seq34648__$1);
var seq34648__$2 = cljs.core.next(seq34648__$1);
var G__34651 = cljs.core.first(seq34648__$2);
var seq34648__$3 = cljs.core.next(seq34648__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34649,G__34650,G__34651,seq34648__$3);
});

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34658 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34659){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34659 = meta34659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34660,meta34659__$1){
var self__ = this;
var _34660__$1 = this;
return (new cljs.core.async.t_cljs$core$async34658(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34659__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34660){
var self__ = this;
var _34660__$1 = this;
return self__.meta34659;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34659","meta34659",-569591261,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34658";

cljs.core.async.t_cljs$core$async34658.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34658");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34658.
 */
cljs.core.async.__GT_t_cljs$core$async34658 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34658(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34659){
return (new cljs.core.async.t_cljs$core$async34658(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34659));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34658(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33942__auto___35950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___35950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___35950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34762){
var state_val_34763 = (state_34762[(1)]);
if((state_val_34763 === (7))){
var inst_34677 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34764_35951 = state_34762__$1;
(statearr_34764_35951[(2)] = inst_34677);

(statearr_34764_35951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (20))){
var inst_34689 = (state_34762[(7)]);
var state_34762__$1 = state_34762;
var statearr_34765_35952 = state_34762__$1;
(statearr_34765_35952[(2)] = inst_34689);

(statearr_34765_35952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (27))){
var state_34762__$1 = state_34762;
var statearr_34766_35953 = state_34762__$1;
(statearr_34766_35953[(2)] = null);

(statearr_34766_35953[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (1))){
var inst_34664 = (state_34762[(8)]);
var inst_34664__$1 = calc_state();
var inst_34666 = (inst_34664__$1 == null);
var inst_34667 = cljs.core.not(inst_34666);
var state_34762__$1 = (function (){var statearr_34767 = state_34762;
(statearr_34767[(8)] = inst_34664__$1);

return statearr_34767;
})();
if(inst_34667){
var statearr_34768_35956 = state_34762__$1;
(statearr_34768_35956[(1)] = (2));

} else {
var statearr_34769_35957 = state_34762__$1;
(statearr_34769_35957[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (24))){
var inst_34713 = (state_34762[(9)]);
var inst_34736 = (state_34762[(10)]);
var inst_34722 = (state_34762[(11)]);
var inst_34736__$1 = (inst_34713.cljs$core$IFn$_invoke$arity$1 ? inst_34713.cljs$core$IFn$_invoke$arity$1(inst_34722) : inst_34713.call(null,inst_34722));
var state_34762__$1 = (function (){var statearr_34770 = state_34762;
(statearr_34770[(10)] = inst_34736__$1);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34736__$1)){
var statearr_34771_35959 = state_34762__$1;
(statearr_34771_35959[(1)] = (29));

} else {
var statearr_34772_35960 = state_34762__$1;
(statearr_34772_35960[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (4))){
var inst_34680 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34680)){
var statearr_34773_35962 = state_34762__$1;
(statearr_34773_35962[(1)] = (8));

} else {
var statearr_34774_35963 = state_34762__$1;
(statearr_34774_35963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (15))){
var inst_34707 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34707)){
var statearr_34775_35964 = state_34762__$1;
(statearr_34775_35964[(1)] = (19));

} else {
var statearr_34776_35965 = state_34762__$1;
(statearr_34776_35965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (21))){
var inst_34712 = (state_34762[(12)]);
var inst_34712__$1 = (state_34762[(2)]);
var inst_34713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34712__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34712__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34712__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34762__$1 = (function (){var statearr_34777 = state_34762;
(statearr_34777[(9)] = inst_34713);

(statearr_34777[(12)] = inst_34712__$1);

(statearr_34777[(13)] = inst_34714);

return statearr_34777;
})();
return cljs.core.async.ioc_alts_BANG_(state_34762__$1,(22),inst_34715);
} else {
if((state_val_34763 === (31))){
var inst_34744 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34744)){
var statearr_34778_35971 = state_34762__$1;
(statearr_34778_35971[(1)] = (32));

} else {
var statearr_34779_35972 = state_34762__$1;
(statearr_34779_35972[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (32))){
var inst_34721 = (state_34762[(14)]);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34762__$1,(35),out,inst_34721);
} else {
if((state_val_34763 === (33))){
var inst_34712 = (state_34762[(12)]);
var inst_34689 = inst_34712;
var state_34762__$1 = (function (){var statearr_34780 = state_34762;
(statearr_34780[(7)] = inst_34689);

return statearr_34780;
})();
var statearr_34781_35976 = state_34762__$1;
(statearr_34781_35976[(2)] = null);

(statearr_34781_35976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (13))){
var inst_34689 = (state_34762[(7)]);
var inst_34696 = inst_34689.cljs$lang$protocol_mask$partition0$;
var inst_34697 = (inst_34696 & (64));
var inst_34698 = inst_34689.cljs$core$ISeq$;
var inst_34699 = (cljs.core.PROTOCOL_SENTINEL === inst_34698);
var inst_34700 = ((inst_34697) || (inst_34699));
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34700)){
var statearr_34782_35977 = state_34762__$1;
(statearr_34782_35977[(1)] = (16));

} else {
var statearr_34783_35978 = state_34762__$1;
(statearr_34783_35978[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (22))){
var inst_34721 = (state_34762[(14)]);
var inst_34722 = (state_34762[(11)]);
var inst_34720 = (state_34762[(2)]);
var inst_34721__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34720,(0),null);
var inst_34722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34720,(1),null);
var inst_34723 = (inst_34721__$1 == null);
var inst_34724 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34722__$1,change);
var inst_34725 = ((inst_34723) || (inst_34724));
var state_34762__$1 = (function (){var statearr_34784 = state_34762;
(statearr_34784[(14)] = inst_34721__$1);

(statearr_34784[(11)] = inst_34722__$1);

return statearr_34784;
})();
if(cljs.core.truth_(inst_34725)){
var statearr_34785_35979 = state_34762__$1;
(statearr_34785_35979[(1)] = (23));

} else {
var statearr_34786_35980 = state_34762__$1;
(statearr_34786_35980[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (36))){
var inst_34712 = (state_34762[(12)]);
var inst_34689 = inst_34712;
var state_34762__$1 = (function (){var statearr_34787 = state_34762;
(statearr_34787[(7)] = inst_34689);

return statearr_34787;
})();
var statearr_34788_35981 = state_34762__$1;
(statearr_34788_35981[(2)] = null);

(statearr_34788_35981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (29))){
var inst_34736 = (state_34762[(10)]);
var state_34762__$1 = state_34762;
var statearr_34789_35982 = state_34762__$1;
(statearr_34789_35982[(2)] = inst_34736);

(statearr_34789_35982[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (6))){
var state_34762__$1 = state_34762;
var statearr_34790_35987 = state_34762__$1;
(statearr_34790_35987[(2)] = false);

(statearr_34790_35987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (28))){
var inst_34732 = (state_34762[(2)]);
var inst_34733 = calc_state();
var inst_34689 = inst_34733;
var state_34762__$1 = (function (){var statearr_34791 = state_34762;
(statearr_34791[(7)] = inst_34689);

(statearr_34791[(15)] = inst_34732);

return statearr_34791;
})();
var statearr_34792_35988 = state_34762__$1;
(statearr_34792_35988[(2)] = null);

(statearr_34792_35988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (25))){
var inst_34758 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34793_35989 = state_34762__$1;
(statearr_34793_35989[(2)] = inst_34758);

(statearr_34793_35989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (34))){
var inst_34756 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34794_35990 = state_34762__$1;
(statearr_34794_35990[(2)] = inst_34756);

(statearr_34794_35990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (17))){
var state_34762__$1 = state_34762;
var statearr_34795_35991 = state_34762__$1;
(statearr_34795_35991[(2)] = false);

(statearr_34795_35991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (3))){
var state_34762__$1 = state_34762;
var statearr_34796_35992 = state_34762__$1;
(statearr_34796_35992[(2)] = false);

(statearr_34796_35992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (12))){
var inst_34760 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34762__$1,inst_34760);
} else {
if((state_val_34763 === (2))){
var inst_34664 = (state_34762[(8)]);
var inst_34669 = inst_34664.cljs$lang$protocol_mask$partition0$;
var inst_34670 = (inst_34669 & (64));
var inst_34671 = inst_34664.cljs$core$ISeq$;
var inst_34672 = (cljs.core.PROTOCOL_SENTINEL === inst_34671);
var inst_34673 = ((inst_34670) || (inst_34672));
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34673)){
var statearr_34797_35997 = state_34762__$1;
(statearr_34797_35997[(1)] = (5));

} else {
var statearr_34798_35998 = state_34762__$1;
(statearr_34798_35998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (23))){
var inst_34721 = (state_34762[(14)]);
var inst_34727 = (inst_34721 == null);
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34727)){
var statearr_34799_36000 = state_34762__$1;
(statearr_34799_36000[(1)] = (26));

} else {
var statearr_34800_36001 = state_34762__$1;
(statearr_34800_36001[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (35))){
var inst_34747 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
if(cljs.core.truth_(inst_34747)){
var statearr_34801_36002 = state_34762__$1;
(statearr_34801_36002[(1)] = (36));

} else {
var statearr_34802_36003 = state_34762__$1;
(statearr_34802_36003[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (19))){
var inst_34689 = (state_34762[(7)]);
var inst_34709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34689);
var state_34762__$1 = state_34762;
var statearr_34803_36004 = state_34762__$1;
(statearr_34803_36004[(2)] = inst_34709);

(statearr_34803_36004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (11))){
var inst_34689 = (state_34762[(7)]);
var inst_34693 = (inst_34689 == null);
var inst_34694 = cljs.core.not(inst_34693);
var state_34762__$1 = state_34762;
if(inst_34694){
var statearr_34804_36005 = state_34762__$1;
(statearr_34804_36005[(1)] = (13));

} else {
var statearr_34805_36006 = state_34762__$1;
(statearr_34805_36006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (9))){
var inst_34664 = (state_34762[(8)]);
var state_34762__$1 = state_34762;
var statearr_34806_36008 = state_34762__$1;
(statearr_34806_36008[(2)] = inst_34664);

(statearr_34806_36008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (5))){
var state_34762__$1 = state_34762;
var statearr_34807_36009 = state_34762__$1;
(statearr_34807_36009[(2)] = true);

(statearr_34807_36009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (14))){
var state_34762__$1 = state_34762;
var statearr_34808_36010 = state_34762__$1;
(statearr_34808_36010[(2)] = false);

(statearr_34808_36010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (26))){
var inst_34722 = (state_34762[(11)]);
var inst_34729 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34722);
var state_34762__$1 = state_34762;
var statearr_34809_36012 = state_34762__$1;
(statearr_34809_36012[(2)] = inst_34729);

(statearr_34809_36012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (16))){
var state_34762__$1 = state_34762;
var statearr_34810_36016 = state_34762__$1;
(statearr_34810_36016[(2)] = true);

(statearr_34810_36016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (38))){
var inst_34752 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34811_36017 = state_34762__$1;
(statearr_34811_36017[(2)] = inst_34752);

(statearr_34811_36017[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (30))){
var inst_34713 = (state_34762[(9)]);
var inst_34714 = (state_34762[(13)]);
var inst_34722 = (state_34762[(11)]);
var inst_34739 = cljs.core.empty_QMARK_(inst_34713);
var inst_34740 = (inst_34714.cljs$core$IFn$_invoke$arity$1 ? inst_34714.cljs$core$IFn$_invoke$arity$1(inst_34722) : inst_34714.call(null,inst_34722));
var inst_34741 = cljs.core.not(inst_34740);
var inst_34742 = ((inst_34739) && (inst_34741));
var state_34762__$1 = state_34762;
var statearr_34812_36018 = state_34762__$1;
(statearr_34812_36018[(2)] = inst_34742);

(statearr_34812_36018[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (10))){
var inst_34664 = (state_34762[(8)]);
var inst_34685 = (state_34762[(2)]);
var inst_34686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34685,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34685,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34685,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34689 = inst_34664;
var state_34762__$1 = (function (){var statearr_34813 = state_34762;
(statearr_34813[(7)] = inst_34689);

(statearr_34813[(16)] = inst_34687);

(statearr_34813[(17)] = inst_34686);

(statearr_34813[(18)] = inst_34688);

return statearr_34813;
})();
var statearr_34814_36019 = state_34762__$1;
(statearr_34814_36019[(2)] = null);

(statearr_34814_36019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (18))){
var inst_34704 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
var statearr_34815_36020 = state_34762__$1;
(statearr_34815_36020[(2)] = inst_34704);

(statearr_34815_36020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (37))){
var state_34762__$1 = state_34762;
var statearr_34816_36021 = state_34762__$1;
(statearr_34816_36021[(2)] = null);

(statearr_34816_36021[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (8))){
var inst_34664 = (state_34762[(8)]);
var inst_34682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34664);
var state_34762__$1 = state_34762;
var statearr_34817_36023 = state_34762__$1;
(statearr_34817_36023[(2)] = inst_34682);

(statearr_34817_36023[(1)] = (10));


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
});})(c__33942__auto___35950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33865__auto__,c__33942__auto___35950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33866__auto__ = null;
var cljs$core$async$mix_$_state_machine__33866__auto____0 = (function (){
var statearr_34818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = cljs$core$async$mix_$_state_machine__33866__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var cljs$core$async$mix_$_state_machine__33866__auto____1 = (function (state_34762){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34762);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__33869__auto__ = e34819;
var statearr_34820_36024 = state_34762;
(statearr_34820_36024[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36025 = state_34762;
state_34762 = G__36025;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33866__auto__ = function(state_34762){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33866__auto____1.call(this,state_34762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33866__auto____0;
cljs$core$async$mix_$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33866__auto____1;
return cljs$core$async$mix_$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___35950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33944__auto__ = (function (){var statearr_34821 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34821[(6)] = c__33942__auto___35950);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___35950,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34823 = arguments.length;
switch (G__34823) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__34826 = arguments.length;
switch (G__34826) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34824_SHARP_){
if(cljs.core.truth_((p1__34824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34824_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34824_SHARP_.call(null,topic)))){
return p1__34824_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34824_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34827 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34828){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34828 = meta34828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34829,meta34828__$1){
var self__ = this;
var _34829__$1 = this;
return (new cljs.core.async.t_cljs$core$async34827(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34828__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34829){
var self__ = this;
var _34829__$1 = this;
return self__.meta34828;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34828","meta34828",1835814317,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34827";

cljs.core.async.t_cljs$core$async34827.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34827");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34827.
 */
cljs.core.async.__GT_t_cljs$core$async34827 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34828){
return (new cljs.core.async.t_cljs$core$async34827(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34828));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34827(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33942__auto___36050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36050,mults,ensure_mult,p){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36050,mults,ensure_mult,p){
return (function (state_34901){
var state_val_34902 = (state_34901[(1)]);
if((state_val_34902 === (7))){
var inst_34897 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34903_36051 = state_34901__$1;
(statearr_34903_36051[(2)] = inst_34897);

(statearr_34903_36051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (20))){
var state_34901__$1 = state_34901;
var statearr_34904_36052 = state_34901__$1;
(statearr_34904_36052[(2)] = null);

(statearr_34904_36052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (1))){
var state_34901__$1 = state_34901;
var statearr_34905_36053 = state_34901__$1;
(statearr_34905_36053[(2)] = null);

(statearr_34905_36053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (24))){
var inst_34880 = (state_34901[(7)]);
var inst_34889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34880);
var state_34901__$1 = state_34901;
var statearr_34906_36059 = state_34901__$1;
(statearr_34906_36059[(2)] = inst_34889);

(statearr_34906_36059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (4))){
var inst_34832 = (state_34901[(8)]);
var inst_34832__$1 = (state_34901[(2)]);
var inst_34833 = (inst_34832__$1 == null);
var state_34901__$1 = (function (){var statearr_34907 = state_34901;
(statearr_34907[(8)] = inst_34832__$1);

return statearr_34907;
})();
if(cljs.core.truth_(inst_34833)){
var statearr_34908_36062 = state_34901__$1;
(statearr_34908_36062[(1)] = (5));

} else {
var statearr_34909_36063 = state_34901__$1;
(statearr_34909_36063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (15))){
var inst_34874 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34910_36064 = state_34901__$1;
(statearr_34910_36064[(2)] = inst_34874);

(statearr_34910_36064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (21))){
var inst_34894 = (state_34901[(2)]);
var state_34901__$1 = (function (){var statearr_34911 = state_34901;
(statearr_34911[(9)] = inst_34894);

return statearr_34911;
})();
var statearr_34912_36065 = state_34901__$1;
(statearr_34912_36065[(2)] = null);

(statearr_34912_36065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (13))){
var inst_34856 = (state_34901[(10)]);
var inst_34858 = cljs.core.chunked_seq_QMARK_(inst_34856);
var state_34901__$1 = state_34901;
if(inst_34858){
var statearr_34913_36066 = state_34901__$1;
(statearr_34913_36066[(1)] = (16));

} else {
var statearr_34914_36067 = state_34901__$1;
(statearr_34914_36067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (22))){
var inst_34886 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34886)){
var statearr_34915_36068 = state_34901__$1;
(statearr_34915_36068[(1)] = (23));

} else {
var statearr_34916_36069 = state_34901__$1;
(statearr_34916_36069[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (6))){
var inst_34882 = (state_34901[(11)]);
var inst_34880 = (state_34901[(7)]);
var inst_34832 = (state_34901[(8)]);
var inst_34880__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34832) : topic_fn.call(null,inst_34832));
var inst_34881 = cljs.core.deref(mults);
var inst_34882__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34881,inst_34880__$1);
var state_34901__$1 = (function (){var statearr_34917 = state_34901;
(statearr_34917[(11)] = inst_34882__$1);

(statearr_34917[(7)] = inst_34880__$1);

return statearr_34917;
})();
if(cljs.core.truth_(inst_34882__$1)){
var statearr_34918_36071 = state_34901__$1;
(statearr_34918_36071[(1)] = (19));

} else {
var statearr_34919_36072 = state_34901__$1;
(statearr_34919_36072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (25))){
var inst_34891 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34920_36073 = state_34901__$1;
(statearr_34920_36073[(2)] = inst_34891);

(statearr_34920_36073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (17))){
var inst_34856 = (state_34901[(10)]);
var inst_34865 = cljs.core.first(inst_34856);
var inst_34866 = cljs.core.async.muxch_STAR_(inst_34865);
var inst_34867 = cljs.core.async.close_BANG_(inst_34866);
var inst_34868 = cljs.core.next(inst_34856);
var inst_34842 = inst_34868;
var inst_34843 = null;
var inst_34844 = (0);
var inst_34845 = (0);
var state_34901__$1 = (function (){var statearr_34921 = state_34901;
(statearr_34921[(12)] = inst_34843);

(statearr_34921[(13)] = inst_34845);

(statearr_34921[(14)] = inst_34844);

(statearr_34921[(15)] = inst_34867);

(statearr_34921[(16)] = inst_34842);

return statearr_34921;
})();
var statearr_34922_36075 = state_34901__$1;
(statearr_34922_36075[(2)] = null);

(statearr_34922_36075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (3))){
var inst_34899 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34901__$1,inst_34899);
} else {
if((state_val_34902 === (12))){
var inst_34876 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34923_36076 = state_34901__$1;
(statearr_34923_36076[(2)] = inst_34876);

(statearr_34923_36076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (2))){
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34901__$1,(4),ch);
} else {
if((state_val_34902 === (23))){
var state_34901__$1 = state_34901;
var statearr_34924_36077 = state_34901__$1;
(statearr_34924_36077[(2)] = null);

(statearr_34924_36077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (19))){
var inst_34882 = (state_34901[(11)]);
var inst_34832 = (state_34901[(8)]);
var inst_34884 = cljs.core.async.muxch_STAR_(inst_34882);
var state_34901__$1 = state_34901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34901__$1,(22),inst_34884,inst_34832);
} else {
if((state_val_34902 === (11))){
var inst_34856 = (state_34901[(10)]);
var inst_34842 = (state_34901[(16)]);
var inst_34856__$1 = cljs.core.seq(inst_34842);
var state_34901__$1 = (function (){var statearr_34925 = state_34901;
(statearr_34925[(10)] = inst_34856__$1);

return statearr_34925;
})();
if(inst_34856__$1){
var statearr_34926_36078 = state_34901__$1;
(statearr_34926_36078[(1)] = (13));

} else {
var statearr_34927_36079 = state_34901__$1;
(statearr_34927_36079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (9))){
var inst_34878 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34928_36080 = state_34901__$1;
(statearr_34928_36080[(2)] = inst_34878);

(statearr_34928_36080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (5))){
var inst_34839 = cljs.core.deref(mults);
var inst_34840 = cljs.core.vals(inst_34839);
var inst_34841 = cljs.core.seq(inst_34840);
var inst_34842 = inst_34841;
var inst_34843 = null;
var inst_34844 = (0);
var inst_34845 = (0);
var state_34901__$1 = (function (){var statearr_34929 = state_34901;
(statearr_34929[(12)] = inst_34843);

(statearr_34929[(13)] = inst_34845);

(statearr_34929[(14)] = inst_34844);

(statearr_34929[(16)] = inst_34842);

return statearr_34929;
})();
var statearr_34930_36081 = state_34901__$1;
(statearr_34930_36081[(2)] = null);

(statearr_34930_36081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (14))){
var state_34901__$1 = state_34901;
var statearr_34934_36082 = state_34901__$1;
(statearr_34934_36082[(2)] = null);

(statearr_34934_36082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (16))){
var inst_34856 = (state_34901[(10)]);
var inst_34860 = cljs.core.chunk_first(inst_34856);
var inst_34861 = cljs.core.chunk_rest(inst_34856);
var inst_34862 = cljs.core.count(inst_34860);
var inst_34842 = inst_34861;
var inst_34843 = inst_34860;
var inst_34844 = inst_34862;
var inst_34845 = (0);
var state_34901__$1 = (function (){var statearr_34935 = state_34901;
(statearr_34935[(12)] = inst_34843);

(statearr_34935[(13)] = inst_34845);

(statearr_34935[(14)] = inst_34844);

(statearr_34935[(16)] = inst_34842);

return statearr_34935;
})();
var statearr_34936_36087 = state_34901__$1;
(statearr_34936_36087[(2)] = null);

(statearr_34936_36087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (10))){
var inst_34843 = (state_34901[(12)]);
var inst_34845 = (state_34901[(13)]);
var inst_34844 = (state_34901[(14)]);
var inst_34842 = (state_34901[(16)]);
var inst_34850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34843,inst_34845);
var inst_34851 = cljs.core.async.muxch_STAR_(inst_34850);
var inst_34852 = cljs.core.async.close_BANG_(inst_34851);
var inst_34853 = (inst_34845 + (1));
var tmp34931 = inst_34843;
var tmp34932 = inst_34844;
var tmp34933 = inst_34842;
var inst_34842__$1 = tmp34933;
var inst_34843__$1 = tmp34931;
var inst_34844__$1 = tmp34932;
var inst_34845__$1 = inst_34853;
var state_34901__$1 = (function (){var statearr_34937 = state_34901;
(statearr_34937[(12)] = inst_34843__$1);

(statearr_34937[(13)] = inst_34845__$1);

(statearr_34937[(14)] = inst_34844__$1);

(statearr_34937[(17)] = inst_34852);

(statearr_34937[(16)] = inst_34842__$1);

return statearr_34937;
})();
var statearr_34938_36092 = state_34901__$1;
(statearr_34938_36092[(2)] = null);

(statearr_34938_36092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (18))){
var inst_34871 = (state_34901[(2)]);
var state_34901__$1 = state_34901;
var statearr_34939_36094 = state_34901__$1;
(statearr_34939_36094[(2)] = inst_34871);

(statearr_34939_36094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34902 === (8))){
var inst_34845 = (state_34901[(13)]);
var inst_34844 = (state_34901[(14)]);
var inst_34847 = (inst_34845 < inst_34844);
var inst_34848 = inst_34847;
var state_34901__$1 = state_34901;
if(cljs.core.truth_(inst_34848)){
var statearr_34940_36096 = state_34901__$1;
(statearr_34940_36096[(1)] = (10));

} else {
var statearr_34941_36097 = state_34901__$1;
(statearr_34941_36097[(1)] = (11));

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
});})(c__33942__auto___36050,mults,ensure_mult,p))
;
return ((function (switch__33865__auto__,c__33942__auto___36050,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_34942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34942[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_34942[(1)] = (1));

return statearr_34942;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_34901){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34901);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e34943){if((e34943 instanceof Object)){
var ex__33869__auto__ = e34943;
var statearr_34944_36098 = state_34901;
(statearr_34944_36098[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36099 = state_34901;
state_34901 = G__36099;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_34901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_34901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36050,mults,ensure_mult,p))
})();
var state__33944__auto__ = (function (){var statearr_34945 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_34945[(6)] = c__33942__auto___36050);

return statearr_34945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36050,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34947 = arguments.length;
switch (G__34947) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__34949 = arguments.length;
switch (G__34949) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__34951 = arguments.length;
switch (G__34951) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33942__auto___36108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34990){
var state_val_34991 = (state_34990[(1)]);
if((state_val_34991 === (7))){
var state_34990__$1 = state_34990;
var statearr_34992_36109 = state_34990__$1;
(statearr_34992_36109[(2)] = null);

(statearr_34992_36109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (1))){
var state_34990__$1 = state_34990;
var statearr_34993_36110 = state_34990__$1;
(statearr_34993_36110[(2)] = null);

(statearr_34993_36110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (4))){
var inst_34954 = (state_34990[(7)]);
var inst_34956 = (inst_34954 < cnt);
var state_34990__$1 = state_34990;
if(cljs.core.truth_(inst_34956)){
var statearr_34994_36111 = state_34990__$1;
(statearr_34994_36111[(1)] = (6));

} else {
var statearr_34995_36112 = state_34990__$1;
(statearr_34995_36112[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (15))){
var inst_34986 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_34996_36113 = state_34990__$1;
(statearr_34996_36113[(2)] = inst_34986);

(statearr_34996_36113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (13))){
var inst_34979 = cljs.core.async.close_BANG_(out);
var state_34990__$1 = state_34990;
var statearr_34997_36114 = state_34990__$1;
(statearr_34997_36114[(2)] = inst_34979);

(statearr_34997_36114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (6))){
var state_34990__$1 = state_34990;
var statearr_34998_36116 = state_34990__$1;
(statearr_34998_36116[(2)] = null);

(statearr_34998_36116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (3))){
var inst_34988 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34990__$1,inst_34988);
} else {
if((state_val_34991 === (12))){
var inst_34976 = (state_34990[(8)]);
var inst_34976__$1 = (state_34990[(2)]);
var inst_34977 = cljs.core.some(cljs.core.nil_QMARK_,inst_34976__$1);
var state_34990__$1 = (function (){var statearr_34999 = state_34990;
(statearr_34999[(8)] = inst_34976__$1);

return statearr_34999;
})();
if(cljs.core.truth_(inst_34977)){
var statearr_35000_36118 = state_34990__$1;
(statearr_35000_36118[(1)] = (13));

} else {
var statearr_35001_36119 = state_34990__$1;
(statearr_35001_36119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (2))){
var inst_34953 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34954 = (0);
var state_34990__$1 = (function (){var statearr_35002 = state_34990;
(statearr_35002[(9)] = inst_34953);

(statearr_35002[(7)] = inst_34954);

return statearr_35002;
})();
var statearr_35003_36120 = state_34990__$1;
(statearr_35003_36120[(2)] = null);

(statearr_35003_36120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (11))){
var inst_34954 = (state_34990[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34990,(10),Object,null,(9));
var inst_34963 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34954) : chs__$1.call(null,inst_34954));
var inst_34964 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34954) : done.call(null,inst_34954));
var inst_34965 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34963,inst_34964);
var state_34990__$1 = state_34990;
var statearr_35004_36128 = state_34990__$1;
(statearr_35004_36128[(2)] = inst_34965);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (9))){
var inst_34954 = (state_34990[(7)]);
var inst_34967 = (state_34990[(2)]);
var inst_34968 = (inst_34954 + (1));
var inst_34954__$1 = inst_34968;
var state_34990__$1 = (function (){var statearr_35005 = state_34990;
(statearr_35005[(7)] = inst_34954__$1);

(statearr_35005[(10)] = inst_34967);

return statearr_35005;
})();
var statearr_35006_36132 = state_34990__$1;
(statearr_35006_36132[(2)] = null);

(statearr_35006_36132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (5))){
var inst_34974 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35007 = state_34990;
(statearr_35007[(11)] = inst_34974);

return statearr_35007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34990__$1,(12),dchan);
} else {
if((state_val_34991 === (14))){
var inst_34976 = (state_34990[(8)]);
var inst_34981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34976);
var state_34990__$1 = state_34990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34990__$1,(16),out,inst_34981);
} else {
if((state_val_34991 === (16))){
var inst_34983 = (state_34990[(2)]);
var state_34990__$1 = (function (){var statearr_35008 = state_34990;
(statearr_35008[(12)] = inst_34983);

return statearr_35008;
})();
var statearr_35009_36136 = state_34990__$1;
(statearr_35009_36136[(2)] = null);

(statearr_35009_36136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (10))){
var inst_34958 = (state_34990[(2)]);
var inst_34959 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34990__$1 = (function (){var statearr_35010 = state_34990;
(statearr_35010[(13)] = inst_34958);

return statearr_35010;
})();
var statearr_35011_36140 = state_34990__$1;
(statearr_35011_36140[(2)] = inst_34959);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34991 === (8))){
var inst_34972 = (state_34990[(2)]);
var state_34990__$1 = state_34990;
var statearr_35012_36141 = state_34990__$1;
(statearr_35012_36141[(2)] = inst_34972);

(statearr_35012_36141[(1)] = (5));


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
});})(c__33942__auto___36108,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33865__auto__,c__33942__auto___36108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_35013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35013[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_35013[(1)] = (1));

return statearr_35013;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_34990){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_34990);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35014){if((e35014 instanceof Object)){
var ex__33869__auto__ = e35014;
var statearr_35015_36145 = state_34990;
(statearr_35015_36145[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36146 = state_34990;
state_34990 = G__36146;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_34990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_34990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36108,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33944__auto__ = (function (){var statearr_35016 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35016[(6)] = c__33942__auto___36108);

return statearr_35016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36108,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35019 = arguments.length;
switch (G__35019) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33942__auto___36149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36149,out){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36149,out){
return (function (state_35051){
var state_val_35052 = (state_35051[(1)]);
if((state_val_35052 === (7))){
var inst_35030 = (state_35051[(7)]);
var inst_35031 = (state_35051[(8)]);
var inst_35030__$1 = (state_35051[(2)]);
var inst_35031__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35030__$1,(0),null);
var inst_35032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35030__$1,(1),null);
var inst_35033 = (inst_35031__$1 == null);
var state_35051__$1 = (function (){var statearr_35053 = state_35051;
(statearr_35053[(9)] = inst_35032);

(statearr_35053[(7)] = inst_35030__$1);

(statearr_35053[(8)] = inst_35031__$1);

return statearr_35053;
})();
if(cljs.core.truth_(inst_35033)){
var statearr_35054_36159 = state_35051__$1;
(statearr_35054_36159[(1)] = (8));

} else {
var statearr_35055_36160 = state_35051__$1;
(statearr_35055_36160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (1))){
var inst_35020 = cljs.core.vec(chs);
var inst_35021 = inst_35020;
var state_35051__$1 = (function (){var statearr_35056 = state_35051;
(statearr_35056[(10)] = inst_35021);

return statearr_35056;
})();
var statearr_35057_36167 = state_35051__$1;
(statearr_35057_36167[(2)] = null);

(statearr_35057_36167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (4))){
var inst_35021 = (state_35051[(10)]);
var state_35051__$1 = state_35051;
return cljs.core.async.ioc_alts_BANG_(state_35051__$1,(7),inst_35021);
} else {
if((state_val_35052 === (6))){
var inst_35047 = (state_35051[(2)]);
var state_35051__$1 = state_35051;
var statearr_35058_36168 = state_35051__$1;
(statearr_35058_36168[(2)] = inst_35047);

(statearr_35058_36168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (3))){
var inst_35049 = (state_35051[(2)]);
var state_35051__$1 = state_35051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35051__$1,inst_35049);
} else {
if((state_val_35052 === (2))){
var inst_35021 = (state_35051[(10)]);
var inst_35023 = cljs.core.count(inst_35021);
var inst_35024 = (inst_35023 > (0));
var state_35051__$1 = state_35051;
if(cljs.core.truth_(inst_35024)){
var statearr_35060_36169 = state_35051__$1;
(statearr_35060_36169[(1)] = (4));

} else {
var statearr_35061_36170 = state_35051__$1;
(statearr_35061_36170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (11))){
var inst_35021 = (state_35051[(10)]);
var inst_35040 = (state_35051[(2)]);
var tmp35059 = inst_35021;
var inst_35021__$1 = tmp35059;
var state_35051__$1 = (function (){var statearr_35062 = state_35051;
(statearr_35062[(11)] = inst_35040);

(statearr_35062[(10)] = inst_35021__$1);

return statearr_35062;
})();
var statearr_35063_36171 = state_35051__$1;
(statearr_35063_36171[(2)] = null);

(statearr_35063_36171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (9))){
var inst_35031 = (state_35051[(8)]);
var state_35051__$1 = state_35051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35051__$1,(11),out,inst_35031);
} else {
if((state_val_35052 === (5))){
var inst_35045 = cljs.core.async.close_BANG_(out);
var state_35051__$1 = state_35051;
var statearr_35064_36172 = state_35051__$1;
(statearr_35064_36172[(2)] = inst_35045);

(statearr_35064_36172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (10))){
var inst_35043 = (state_35051[(2)]);
var state_35051__$1 = state_35051;
var statearr_35065_36173 = state_35051__$1;
(statearr_35065_36173[(2)] = inst_35043);

(statearr_35065_36173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35052 === (8))){
var inst_35032 = (state_35051[(9)]);
var inst_35021 = (state_35051[(10)]);
var inst_35030 = (state_35051[(7)]);
var inst_35031 = (state_35051[(8)]);
var inst_35035 = (function (){var cs = inst_35021;
var vec__35026 = inst_35030;
var v = inst_35031;
var c = inst_35032;
return ((function (cs,vec__35026,v,c,inst_35032,inst_35021,inst_35030,inst_35031,state_val_35052,c__33942__auto___36149,out){
return (function (p1__35017_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35017_SHARP_);
});
;})(cs,vec__35026,v,c,inst_35032,inst_35021,inst_35030,inst_35031,state_val_35052,c__33942__auto___36149,out))
})();
var inst_35036 = cljs.core.filterv(inst_35035,inst_35021);
var inst_35021__$1 = inst_35036;
var state_35051__$1 = (function (){var statearr_35066 = state_35051;
(statearr_35066[(10)] = inst_35021__$1);

return statearr_35066;
})();
var statearr_35067_36180 = state_35051__$1;
(statearr_35067_36180[(2)] = null);

(statearr_35067_36180[(1)] = (2));


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
});})(c__33942__auto___36149,out))
;
return ((function (switch__33865__auto__,c__33942__auto___36149,out){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_35068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35068[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_35068[(1)] = (1));

return statearr_35068;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_35051){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_35051);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35069){if((e35069 instanceof Object)){
var ex__33869__auto__ = e35069;
var statearr_35070_36181 = state_35051;
(statearr_35070_36181[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36182 = state_35051;
state_35051 = G__36182;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_35051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_35051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36149,out))
})();
var state__33944__auto__ = (function (){var statearr_35071 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35071[(6)] = c__33942__auto___36149);

return statearr_35071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36149,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__35073 = arguments.length;
switch (G__35073) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33942__auto___36190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36190,out){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36190,out){
return (function (state_35097){
var state_val_35098 = (state_35097[(1)]);
if((state_val_35098 === (7))){
var inst_35079 = (state_35097[(7)]);
var inst_35079__$1 = (state_35097[(2)]);
var inst_35080 = (inst_35079__$1 == null);
var inst_35081 = cljs.core.not(inst_35080);
var state_35097__$1 = (function (){var statearr_35099 = state_35097;
(statearr_35099[(7)] = inst_35079__$1);

return statearr_35099;
})();
if(inst_35081){
var statearr_35100_36191 = state_35097__$1;
(statearr_35100_36191[(1)] = (8));

} else {
var statearr_35101_36192 = state_35097__$1;
(statearr_35101_36192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (1))){
var inst_35074 = (0);
var state_35097__$1 = (function (){var statearr_35102 = state_35097;
(statearr_35102[(8)] = inst_35074);

return statearr_35102;
})();
var statearr_35103_36193 = state_35097__$1;
(statearr_35103_36193[(2)] = null);

(statearr_35103_36193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (4))){
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35097__$1,(7),ch);
} else {
if((state_val_35098 === (6))){
var inst_35092 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35104_36194 = state_35097__$1;
(statearr_35104_36194[(2)] = inst_35092);

(statearr_35104_36194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (3))){
var inst_35094 = (state_35097[(2)]);
var inst_35095 = cljs.core.async.close_BANG_(out);
var state_35097__$1 = (function (){var statearr_35105 = state_35097;
(statearr_35105[(9)] = inst_35094);

return statearr_35105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35097__$1,inst_35095);
} else {
if((state_val_35098 === (2))){
var inst_35074 = (state_35097[(8)]);
var inst_35076 = (inst_35074 < n);
var state_35097__$1 = state_35097;
if(cljs.core.truth_(inst_35076)){
var statearr_35106_36195 = state_35097__$1;
(statearr_35106_36195[(1)] = (4));

} else {
var statearr_35107_36196 = state_35097__$1;
(statearr_35107_36196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (11))){
var inst_35074 = (state_35097[(8)]);
var inst_35084 = (state_35097[(2)]);
var inst_35085 = (inst_35074 + (1));
var inst_35074__$1 = inst_35085;
var state_35097__$1 = (function (){var statearr_35108 = state_35097;
(statearr_35108[(8)] = inst_35074__$1);

(statearr_35108[(10)] = inst_35084);

return statearr_35108;
})();
var statearr_35109_36203 = state_35097__$1;
(statearr_35109_36203[(2)] = null);

(statearr_35109_36203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (9))){
var state_35097__$1 = state_35097;
var statearr_35110_36204 = state_35097__$1;
(statearr_35110_36204[(2)] = null);

(statearr_35110_36204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (5))){
var state_35097__$1 = state_35097;
var statearr_35111_36205 = state_35097__$1;
(statearr_35111_36205[(2)] = null);

(statearr_35111_36205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (10))){
var inst_35089 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35112_36206 = state_35097__$1;
(statearr_35112_36206[(2)] = inst_35089);

(statearr_35112_36206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (8))){
var inst_35079 = (state_35097[(7)]);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35097__$1,(11),out,inst_35079);
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
});})(c__33942__auto___36190,out))
;
return ((function (switch__33865__auto__,c__33942__auto___36190,out){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_35113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35113[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_35113[(1)] = (1));

return statearr_35113;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_35097){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_35097);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35114){if((e35114 instanceof Object)){
var ex__33869__auto__ = e35114;
var statearr_35115_36207 = state_35097;
(statearr_35115_36207[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36208 = state_35097;
state_35097 = G__36208;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_35097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_35097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36190,out))
})();
var state__33944__auto__ = (function (){var statearr_35116 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35116[(6)] = c__33942__auto___36190);

return statearr_35116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36190,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35118 = (function (f,ch,meta35119){
this.f = f;
this.ch = ch;
this.meta35119 = meta35119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35120,meta35119__$1){
var self__ = this;
var _35120__$1 = this;
return (new cljs.core.async.t_cljs$core$async35118(self__.f,self__.ch,meta35119__$1));
});

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35120){
var self__ = this;
var _35120__$1 = this;
return self__.meta35119;
});

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35121 = (function (f,ch,meta35119,_,fn1,meta35122){
this.f = f;
this.ch = ch;
this.meta35119 = meta35119;
this._ = _;
this.fn1 = fn1;
this.meta35122 = meta35122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35123,meta35122__$1){
var self__ = this;
var _35123__$1 = this;
return (new cljs.core.async.t_cljs$core$async35121(self__.f,self__.ch,self__.meta35119,self__._,self__.fn1,meta35122__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35123){
var self__ = this;
var _35123__$1 = this;
return self__.meta35122;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35117_SHARP_){
var G__35124 = (((p1__35117_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35117_SHARP_) : self__.f.call(null,p1__35117_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35124) : f1.call(null,G__35124));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35121.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35119","meta35119",1219197325,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35118","cljs.core.async/t_cljs$core$async35118",-118284656,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35122","meta35122",1019813079,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35121";

cljs.core.async.t_cljs$core$async35121.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35121");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35121.
 */
cljs.core.async.__GT_t_cljs$core$async35121 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35121(f__$1,ch__$1,meta35119__$1,___$2,fn1__$1,meta35122){
return (new cljs.core.async.t_cljs$core$async35121(f__$1,ch__$1,meta35119__$1,___$2,fn1__$1,meta35122));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35121(self__.f,self__.ch,self__.meta35119,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35125 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35125) : self__.f.call(null,G__35125));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35119","meta35119",1219197325,null)], null);
});

cljs.core.async.t_cljs$core$async35118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35118";

cljs.core.async.t_cljs$core$async35118.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35118");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35118.
 */
cljs.core.async.__GT_t_cljs$core$async35118 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35118(f__$1,ch__$1,meta35119){
return (new cljs.core.async.t_cljs$core$async35118(f__$1,ch__$1,meta35119));
});

}

return (new cljs.core.async.t_cljs$core$async35118(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35126 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35126 = (function (f,ch,meta35127){
this.f = f;
this.ch = ch;
this.meta35127 = meta35127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35128,meta35127__$1){
var self__ = this;
var _35128__$1 = this;
return (new cljs.core.async.t_cljs$core$async35126(self__.f,self__.ch,meta35127__$1));
});

cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35128){
var self__ = this;
var _35128__$1 = this;
return self__.meta35127;
});

cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async35126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35127","meta35127",-1626139382,null)], null);
});

cljs.core.async.t_cljs$core$async35126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35126";

cljs.core.async.t_cljs$core$async35126.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35126");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35126.
 */
cljs.core.async.__GT_t_cljs$core$async35126 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35126(f__$1,ch__$1,meta35127){
return (new cljs.core.async.t_cljs$core$async35126(f__$1,ch__$1,meta35127));
});

}

return (new cljs.core.async.t_cljs$core$async35126(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35129 = (function (p,ch,meta35130){
this.p = p;
this.ch = ch;
this.meta35130 = meta35130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35131,meta35130__$1){
var self__ = this;
var _35131__$1 = this;
return (new cljs.core.async.t_cljs$core$async35129(self__.p,self__.ch,meta35130__$1));
});

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35131){
var self__ = this;
var _35131__$1 = this;
return self__.meta35130;
});

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35130","meta35130",518776958,null)], null);
});

cljs.core.async.t_cljs$core$async35129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35129";

cljs.core.async.t_cljs$core$async35129.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35129");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35129.
 */
cljs.core.async.__GT_t_cljs$core$async35129 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35129(p__$1,ch__$1,meta35130){
return (new cljs.core.async.t_cljs$core$async35129(p__$1,ch__$1,meta35130));
});

}

return (new cljs.core.async.t_cljs$core$async35129(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35133 = arguments.length;
switch (G__35133) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33942__auto___36234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36234,out){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36234,out){
return (function (state_35154){
var state_val_35155 = (state_35154[(1)]);
if((state_val_35155 === (7))){
var inst_35150 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
var statearr_35156_36235 = state_35154__$1;
(statearr_35156_36235[(2)] = inst_35150);

(statearr_35156_36235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (1))){
var state_35154__$1 = state_35154;
var statearr_35157_36236 = state_35154__$1;
(statearr_35157_36236[(2)] = null);

(statearr_35157_36236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (4))){
var inst_35136 = (state_35154[(7)]);
var inst_35136__$1 = (state_35154[(2)]);
var inst_35137 = (inst_35136__$1 == null);
var state_35154__$1 = (function (){var statearr_35158 = state_35154;
(statearr_35158[(7)] = inst_35136__$1);

return statearr_35158;
})();
if(cljs.core.truth_(inst_35137)){
var statearr_35159_36237 = state_35154__$1;
(statearr_35159_36237[(1)] = (5));

} else {
var statearr_35160_36238 = state_35154__$1;
(statearr_35160_36238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (6))){
var inst_35136 = (state_35154[(7)]);
var inst_35141 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35136) : p.call(null,inst_35136));
var state_35154__$1 = state_35154;
if(cljs.core.truth_(inst_35141)){
var statearr_35161_36239 = state_35154__$1;
(statearr_35161_36239[(1)] = (8));

} else {
var statearr_35162_36240 = state_35154__$1;
(statearr_35162_36240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (3))){
var inst_35152 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35154__$1,inst_35152);
} else {
if((state_val_35155 === (2))){
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35154__$1,(4),ch);
} else {
if((state_val_35155 === (11))){
var inst_35144 = (state_35154[(2)]);
var state_35154__$1 = state_35154;
var statearr_35163_36242 = state_35154__$1;
(statearr_35163_36242[(2)] = inst_35144);

(statearr_35163_36242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (9))){
var state_35154__$1 = state_35154;
var statearr_35164_36243 = state_35154__$1;
(statearr_35164_36243[(2)] = null);

(statearr_35164_36243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (5))){
var inst_35139 = cljs.core.async.close_BANG_(out);
var state_35154__$1 = state_35154;
var statearr_35165_36244 = state_35154__$1;
(statearr_35165_36244[(2)] = inst_35139);

(statearr_35165_36244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (10))){
var inst_35147 = (state_35154[(2)]);
var state_35154__$1 = (function (){var statearr_35166 = state_35154;
(statearr_35166[(8)] = inst_35147);

return statearr_35166;
})();
var statearr_35167_36246 = state_35154__$1;
(statearr_35167_36246[(2)] = null);

(statearr_35167_36246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35155 === (8))){
var inst_35136 = (state_35154[(7)]);
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35154__$1,(11),out,inst_35136);
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
});})(c__33942__auto___36234,out))
;
return ((function (switch__33865__auto__,c__33942__auto___36234,out){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_35168 = [null,null,null,null,null,null,null,null,null];
(statearr_35168[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_35168[(1)] = (1));

return statearr_35168;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_35154){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_35154);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35169){if((e35169 instanceof Object)){
var ex__33869__auto__ = e35169;
var statearr_35170_36248 = state_35154;
(statearr_35170_36248[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36250 = state_35154;
state_35154 = G__36250;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_35154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_35154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36234,out))
})();
var state__33944__auto__ = (function (){var statearr_35171 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35171[(6)] = c__33942__auto___36234);

return statearr_35171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36234,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35173 = arguments.length;
switch (G__35173) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto__){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto__){
return (function (state_35235){
var state_val_35236 = (state_35235[(1)]);
if((state_val_35236 === (7))){
var inst_35231 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35237_36253 = state_35235__$1;
(statearr_35237_36253[(2)] = inst_35231);

(statearr_35237_36253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (20))){
var inst_35201 = (state_35235[(7)]);
var inst_35212 = (state_35235[(2)]);
var inst_35213 = cljs.core.next(inst_35201);
var inst_35187 = inst_35213;
var inst_35188 = null;
var inst_35189 = (0);
var inst_35190 = (0);
var state_35235__$1 = (function (){var statearr_35238 = state_35235;
(statearr_35238[(8)] = inst_35212);

(statearr_35238[(9)] = inst_35187);

(statearr_35238[(10)] = inst_35188);

(statearr_35238[(11)] = inst_35189);

(statearr_35238[(12)] = inst_35190);

return statearr_35238;
})();
var statearr_35239_36255 = state_35235__$1;
(statearr_35239_36255[(2)] = null);

(statearr_35239_36255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (1))){
var state_35235__$1 = state_35235;
var statearr_35240_36256 = state_35235__$1;
(statearr_35240_36256[(2)] = null);

(statearr_35240_36256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (4))){
var inst_35176 = (state_35235[(13)]);
var inst_35176__$1 = (state_35235[(2)]);
var inst_35177 = (inst_35176__$1 == null);
var state_35235__$1 = (function (){var statearr_35241 = state_35235;
(statearr_35241[(13)] = inst_35176__$1);

return statearr_35241;
})();
if(cljs.core.truth_(inst_35177)){
var statearr_35242_36257 = state_35235__$1;
(statearr_35242_36257[(1)] = (5));

} else {
var statearr_35243_36258 = state_35235__$1;
(statearr_35243_36258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (15))){
var state_35235__$1 = state_35235;
var statearr_35247_36259 = state_35235__$1;
(statearr_35247_36259[(2)] = null);

(statearr_35247_36259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (21))){
var state_35235__$1 = state_35235;
var statearr_35248_36260 = state_35235__$1;
(statearr_35248_36260[(2)] = null);

(statearr_35248_36260[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (13))){
var inst_35187 = (state_35235[(9)]);
var inst_35188 = (state_35235[(10)]);
var inst_35189 = (state_35235[(11)]);
var inst_35190 = (state_35235[(12)]);
var inst_35197 = (state_35235[(2)]);
var inst_35198 = (inst_35190 + (1));
var tmp35244 = inst_35187;
var tmp35245 = inst_35188;
var tmp35246 = inst_35189;
var inst_35187__$1 = tmp35244;
var inst_35188__$1 = tmp35245;
var inst_35189__$1 = tmp35246;
var inst_35190__$1 = inst_35198;
var state_35235__$1 = (function (){var statearr_35249 = state_35235;
(statearr_35249[(9)] = inst_35187__$1);

(statearr_35249[(10)] = inst_35188__$1);

(statearr_35249[(11)] = inst_35189__$1);

(statearr_35249[(12)] = inst_35190__$1);

(statearr_35249[(14)] = inst_35197);

return statearr_35249;
})();
var statearr_35250_36265 = state_35235__$1;
(statearr_35250_36265[(2)] = null);

(statearr_35250_36265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (22))){
var state_35235__$1 = state_35235;
var statearr_35251_36270 = state_35235__$1;
(statearr_35251_36270[(2)] = null);

(statearr_35251_36270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (6))){
var inst_35176 = (state_35235[(13)]);
var inst_35185 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35176) : f.call(null,inst_35176));
var inst_35186 = cljs.core.seq(inst_35185);
var inst_35187 = inst_35186;
var inst_35188 = null;
var inst_35189 = (0);
var inst_35190 = (0);
var state_35235__$1 = (function (){var statearr_35252 = state_35235;
(statearr_35252[(9)] = inst_35187);

(statearr_35252[(10)] = inst_35188);

(statearr_35252[(11)] = inst_35189);

(statearr_35252[(12)] = inst_35190);

return statearr_35252;
})();
var statearr_35253_36279 = state_35235__$1;
(statearr_35253_36279[(2)] = null);

(statearr_35253_36279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (17))){
var inst_35201 = (state_35235[(7)]);
var inst_35205 = cljs.core.chunk_first(inst_35201);
var inst_35206 = cljs.core.chunk_rest(inst_35201);
var inst_35207 = cljs.core.count(inst_35205);
var inst_35187 = inst_35206;
var inst_35188 = inst_35205;
var inst_35189 = inst_35207;
var inst_35190 = (0);
var state_35235__$1 = (function (){var statearr_35254 = state_35235;
(statearr_35254[(9)] = inst_35187);

(statearr_35254[(10)] = inst_35188);

(statearr_35254[(11)] = inst_35189);

(statearr_35254[(12)] = inst_35190);

return statearr_35254;
})();
var statearr_35255_36285 = state_35235__$1;
(statearr_35255_36285[(2)] = null);

(statearr_35255_36285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (3))){
var inst_35233 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35235__$1,inst_35233);
} else {
if((state_val_35236 === (12))){
var inst_35221 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35256_36286 = state_35235__$1;
(statearr_35256_36286[(2)] = inst_35221);

(statearr_35256_36286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (2))){
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35235__$1,(4),in$);
} else {
if((state_val_35236 === (23))){
var inst_35229 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35257_36287 = state_35235__$1;
(statearr_35257_36287[(2)] = inst_35229);

(statearr_35257_36287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (19))){
var inst_35216 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35258_36288 = state_35235__$1;
(statearr_35258_36288[(2)] = inst_35216);

(statearr_35258_36288[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (11))){
var inst_35187 = (state_35235[(9)]);
var inst_35201 = (state_35235[(7)]);
var inst_35201__$1 = cljs.core.seq(inst_35187);
var state_35235__$1 = (function (){var statearr_35259 = state_35235;
(statearr_35259[(7)] = inst_35201__$1);

return statearr_35259;
})();
if(inst_35201__$1){
var statearr_35260_36289 = state_35235__$1;
(statearr_35260_36289[(1)] = (14));

} else {
var statearr_35261_36290 = state_35235__$1;
(statearr_35261_36290[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (9))){
var inst_35223 = (state_35235[(2)]);
var inst_35224 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35235__$1 = (function (){var statearr_35262 = state_35235;
(statearr_35262[(15)] = inst_35223);

return statearr_35262;
})();
if(cljs.core.truth_(inst_35224)){
var statearr_35263_36295 = state_35235__$1;
(statearr_35263_36295[(1)] = (21));

} else {
var statearr_35264_36296 = state_35235__$1;
(statearr_35264_36296[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (5))){
var inst_35179 = cljs.core.async.close_BANG_(out);
var state_35235__$1 = state_35235;
var statearr_35265_36301 = state_35235__$1;
(statearr_35265_36301[(2)] = inst_35179);

(statearr_35265_36301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (14))){
var inst_35201 = (state_35235[(7)]);
var inst_35203 = cljs.core.chunked_seq_QMARK_(inst_35201);
var state_35235__$1 = state_35235;
if(inst_35203){
var statearr_35266_36303 = state_35235__$1;
(statearr_35266_36303[(1)] = (17));

} else {
var statearr_35267_36307 = state_35235__$1;
(statearr_35267_36307[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (16))){
var inst_35219 = (state_35235[(2)]);
var state_35235__$1 = state_35235;
var statearr_35268_36308 = state_35235__$1;
(statearr_35268_36308[(2)] = inst_35219);

(statearr_35268_36308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35236 === (10))){
var inst_35188 = (state_35235[(10)]);
var inst_35190 = (state_35235[(12)]);
var inst_35195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35188,inst_35190);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35235__$1,(13),out,inst_35195);
} else {
if((state_val_35236 === (18))){
var inst_35201 = (state_35235[(7)]);
var inst_35210 = cljs.core.first(inst_35201);
var state_35235__$1 = state_35235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35235__$1,(20),out,inst_35210);
} else {
if((state_val_35236 === (8))){
var inst_35189 = (state_35235[(11)]);
var inst_35190 = (state_35235[(12)]);
var inst_35192 = (inst_35190 < inst_35189);
var inst_35193 = inst_35192;
var state_35235__$1 = state_35235;
if(cljs.core.truth_(inst_35193)){
var statearr_35269_36316 = state_35235__$1;
(statearr_35269_36316[(1)] = (10));

} else {
var statearr_35270_36321 = state_35235__$1;
(statearr_35270_36321[(1)] = (11));

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
});})(c__33942__auto__))
;
return ((function (switch__33865__auto__,c__33942__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33866__auto____0 = (function (){
var statearr_35271 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35271[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33866__auto__);

(statearr_35271[(1)] = (1));

return statearr_35271;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33866__auto____1 = (function (state_35235){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_35235);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35272){if((e35272 instanceof Object)){
var ex__33869__auto__ = e35272;
var statearr_35273_36330 = state_35235;
(statearr_35273_36330[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36334 = state_35235;
state_35235 = G__36334;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33866__auto__ = function(state_35235){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33866__auto____1.call(this,state_35235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto__))
})();
var state__33944__auto__ = (function (){var statearr_35274 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35274[(6)] = c__33942__auto__);

return statearr_35274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto__))
);

return c__33942__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35276 = arguments.length;
switch (G__35276) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35278 = arguments.length;
switch (G__35278) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35280 = arguments.length;
switch (G__35280) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33942__auto___36339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36339,out){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36339,out){
return (function (state_35304){
var state_val_35305 = (state_35304[(1)]);
if((state_val_35305 === (7))){
var inst_35299 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35306_36340 = state_35304__$1;
(statearr_35306_36340[(2)] = inst_35299);

(statearr_35306_36340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (1))){
var inst_35281 = null;
var state_35304__$1 = (function (){var statearr_35307 = state_35304;
(statearr_35307[(7)] = inst_35281);

return statearr_35307;
})();
var statearr_35308_36341 = state_35304__$1;
(statearr_35308_36341[(2)] = null);

(statearr_35308_36341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (4))){
var inst_35284 = (state_35304[(8)]);
var inst_35284__$1 = (state_35304[(2)]);
var inst_35285 = (inst_35284__$1 == null);
var inst_35286 = cljs.core.not(inst_35285);
var state_35304__$1 = (function (){var statearr_35309 = state_35304;
(statearr_35309[(8)] = inst_35284__$1);

return statearr_35309;
})();
if(inst_35286){
var statearr_35310_36342 = state_35304__$1;
(statearr_35310_36342[(1)] = (5));

} else {
var statearr_35311_36343 = state_35304__$1;
(statearr_35311_36343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (6))){
var state_35304__$1 = state_35304;
var statearr_35312_36344 = state_35304__$1;
(statearr_35312_36344[(2)] = null);

(statearr_35312_36344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (3))){
var inst_35301 = (state_35304[(2)]);
var inst_35302 = cljs.core.async.close_BANG_(out);
var state_35304__$1 = (function (){var statearr_35313 = state_35304;
(statearr_35313[(9)] = inst_35301);

return statearr_35313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35304__$1,inst_35302);
} else {
if((state_val_35305 === (2))){
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35304__$1,(4),ch);
} else {
if((state_val_35305 === (11))){
var inst_35284 = (state_35304[(8)]);
var inst_35293 = (state_35304[(2)]);
var inst_35281 = inst_35284;
var state_35304__$1 = (function (){var statearr_35314 = state_35304;
(statearr_35314[(10)] = inst_35293);

(statearr_35314[(7)] = inst_35281);

return statearr_35314;
})();
var statearr_35315_36346 = state_35304__$1;
(statearr_35315_36346[(2)] = null);

(statearr_35315_36346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (9))){
var inst_35284 = (state_35304[(8)]);
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35304__$1,(11),out,inst_35284);
} else {
if((state_val_35305 === (5))){
var inst_35284 = (state_35304[(8)]);
var inst_35281 = (state_35304[(7)]);
var inst_35288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35284,inst_35281);
var state_35304__$1 = state_35304;
if(inst_35288){
var statearr_35317_36348 = state_35304__$1;
(statearr_35317_36348[(1)] = (8));

} else {
var statearr_35318_36349 = state_35304__$1;
(statearr_35318_36349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (10))){
var inst_35296 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35319_36350 = state_35304__$1;
(statearr_35319_36350[(2)] = inst_35296);

(statearr_35319_36350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35305 === (8))){
var inst_35281 = (state_35304[(7)]);
var tmp35316 = inst_35281;
var inst_35281__$1 = tmp35316;
var state_35304__$1 = (function (){var statearr_35320 = state_35304;
(statearr_35320[(7)] = inst_35281__$1);

return statearr_35320;
})();
var statearr_35321_36351 = state_35304__$1;
(statearr_35321_36351[(2)] = null);

(statearr_35321_36351[(1)] = (2));


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
});})(c__33942__auto___36339,out))
;
return ((function (switch__33865__auto__,c__33942__auto___36339,out){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_35322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35322[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_35322[(1)] = (1));

return statearr_35322;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_35304){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_35304);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35323){if((e35323 instanceof Object)){
var ex__33869__auto__ = e35323;
var statearr_35324_36352 = state_35304;
(statearr_35324_36352[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36353 = state_35304;
state_35304 = G__36353;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_35304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_35304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36339,out))
})();
var state__33944__auto__ = (function (){var statearr_35325 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35325[(6)] = c__33942__auto___36339);

return statearr_35325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36339,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35327 = arguments.length;
switch (G__35327) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33942__auto___36381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36381,out){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36381,out){
return (function (state_35365){
var state_val_35366 = (state_35365[(1)]);
if((state_val_35366 === (7))){
var inst_35361 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
var statearr_35367_36391 = state_35365__$1;
(statearr_35367_36391[(2)] = inst_35361);

(statearr_35367_36391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (1))){
var inst_35328 = (new Array(n));
var inst_35329 = inst_35328;
var inst_35330 = (0);
var state_35365__$1 = (function (){var statearr_35368 = state_35365;
(statearr_35368[(7)] = inst_35329);

(statearr_35368[(8)] = inst_35330);

return statearr_35368;
})();
var statearr_35369_36398 = state_35365__$1;
(statearr_35369_36398[(2)] = null);

(statearr_35369_36398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (4))){
var inst_35333 = (state_35365[(9)]);
var inst_35333__$1 = (state_35365[(2)]);
var inst_35334 = (inst_35333__$1 == null);
var inst_35335 = cljs.core.not(inst_35334);
var state_35365__$1 = (function (){var statearr_35370 = state_35365;
(statearr_35370[(9)] = inst_35333__$1);

return statearr_35370;
})();
if(inst_35335){
var statearr_35371_36411 = state_35365__$1;
(statearr_35371_36411[(1)] = (5));

} else {
var statearr_35372_36412 = state_35365__$1;
(statearr_35372_36412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (15))){
var inst_35355 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
var statearr_35373_36415 = state_35365__$1;
(statearr_35373_36415[(2)] = inst_35355);

(statearr_35373_36415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (13))){
var state_35365__$1 = state_35365;
var statearr_35374_36424 = state_35365__$1;
(statearr_35374_36424[(2)] = null);

(statearr_35374_36424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (6))){
var inst_35330 = (state_35365[(8)]);
var inst_35351 = (inst_35330 > (0));
var state_35365__$1 = state_35365;
if(cljs.core.truth_(inst_35351)){
var statearr_35375_36432 = state_35365__$1;
(statearr_35375_36432[(1)] = (12));

} else {
var statearr_35376_36433 = state_35365__$1;
(statearr_35376_36433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (3))){
var inst_35363 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35365__$1,inst_35363);
} else {
if((state_val_35366 === (12))){
var inst_35329 = (state_35365[(7)]);
var inst_35353 = cljs.core.vec(inst_35329);
var state_35365__$1 = state_35365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35365__$1,(15),out,inst_35353);
} else {
if((state_val_35366 === (2))){
var state_35365__$1 = state_35365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35365__$1,(4),ch);
} else {
if((state_val_35366 === (11))){
var inst_35345 = (state_35365[(2)]);
var inst_35346 = (new Array(n));
var inst_35329 = inst_35346;
var inst_35330 = (0);
var state_35365__$1 = (function (){var statearr_35377 = state_35365;
(statearr_35377[(7)] = inst_35329);

(statearr_35377[(10)] = inst_35345);

(statearr_35377[(8)] = inst_35330);

return statearr_35377;
})();
var statearr_35378_36447 = state_35365__$1;
(statearr_35378_36447[(2)] = null);

(statearr_35378_36447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (9))){
var inst_35329 = (state_35365[(7)]);
var inst_35343 = cljs.core.vec(inst_35329);
var state_35365__$1 = state_35365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35365__$1,(11),out,inst_35343);
} else {
if((state_val_35366 === (5))){
var inst_35333 = (state_35365[(9)]);
var inst_35329 = (state_35365[(7)]);
var inst_35330 = (state_35365[(8)]);
var inst_35338 = (state_35365[(11)]);
var inst_35337 = (inst_35329[inst_35330] = inst_35333);
var inst_35338__$1 = (inst_35330 + (1));
var inst_35339 = (inst_35338__$1 < n);
var state_35365__$1 = (function (){var statearr_35379 = state_35365;
(statearr_35379[(12)] = inst_35337);

(statearr_35379[(11)] = inst_35338__$1);

return statearr_35379;
})();
if(cljs.core.truth_(inst_35339)){
var statearr_35380_36448 = state_35365__$1;
(statearr_35380_36448[(1)] = (8));

} else {
var statearr_35381_36449 = state_35365__$1;
(statearr_35381_36449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (14))){
var inst_35358 = (state_35365[(2)]);
var inst_35359 = cljs.core.async.close_BANG_(out);
var state_35365__$1 = (function (){var statearr_35383 = state_35365;
(statearr_35383[(13)] = inst_35358);

return statearr_35383;
})();
var statearr_35384_36455 = state_35365__$1;
(statearr_35384_36455[(2)] = inst_35359);

(statearr_35384_36455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (10))){
var inst_35349 = (state_35365[(2)]);
var state_35365__$1 = state_35365;
var statearr_35385_36456 = state_35365__$1;
(statearr_35385_36456[(2)] = inst_35349);

(statearr_35385_36456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35366 === (8))){
var inst_35329 = (state_35365[(7)]);
var inst_35338 = (state_35365[(11)]);
var tmp35382 = inst_35329;
var inst_35329__$1 = tmp35382;
var inst_35330 = inst_35338;
var state_35365__$1 = (function (){var statearr_35386 = state_35365;
(statearr_35386[(7)] = inst_35329__$1);

(statearr_35386[(8)] = inst_35330);

return statearr_35386;
})();
var statearr_35387_36466 = state_35365__$1;
(statearr_35387_36466[(2)] = null);

(statearr_35387_36466[(1)] = (2));


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
});})(c__33942__auto___36381,out))
;
return ((function (switch__33865__auto__,c__33942__auto___36381,out){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_35388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35388[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_35388[(1)] = (1));

return statearr_35388;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_35365){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_35365);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35389){if((e35389 instanceof Object)){
var ex__33869__auto__ = e35389;
var statearr_35390_36468 = state_35365;
(statearr_35390_36468[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36469 = state_35365;
state_35365 = G__36469;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_35365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_35365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36381,out))
})();
var state__33944__auto__ = (function (){var statearr_35391 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35391[(6)] = c__33942__auto___36381);

return statearr_35391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36381,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35393 = arguments.length;
switch (G__35393) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33942__auto___36472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36472,out){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36472,out){
return (function (state_35435){
var state_val_35436 = (state_35435[(1)]);
if((state_val_35436 === (7))){
var inst_35431 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35437_36474 = state_35435__$1;
(statearr_35437_36474[(2)] = inst_35431);

(statearr_35437_36474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (1))){
var inst_35394 = [];
var inst_35395 = inst_35394;
var inst_35396 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35435__$1 = (function (){var statearr_35438 = state_35435;
(statearr_35438[(7)] = inst_35396);

(statearr_35438[(8)] = inst_35395);

return statearr_35438;
})();
var statearr_35439_36475 = state_35435__$1;
(statearr_35439_36475[(2)] = null);

(statearr_35439_36475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (4))){
var inst_35399 = (state_35435[(9)]);
var inst_35399__$1 = (state_35435[(2)]);
var inst_35400 = (inst_35399__$1 == null);
var inst_35401 = cljs.core.not(inst_35400);
var state_35435__$1 = (function (){var statearr_35440 = state_35435;
(statearr_35440[(9)] = inst_35399__$1);

return statearr_35440;
})();
if(inst_35401){
var statearr_35441_36476 = state_35435__$1;
(statearr_35441_36476[(1)] = (5));

} else {
var statearr_35442_36477 = state_35435__$1;
(statearr_35442_36477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (15))){
var inst_35425 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35443_36478 = state_35435__$1;
(statearr_35443_36478[(2)] = inst_35425);

(statearr_35443_36478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (13))){
var state_35435__$1 = state_35435;
var statearr_35444_36479 = state_35435__$1;
(statearr_35444_36479[(2)] = null);

(statearr_35444_36479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (6))){
var inst_35395 = (state_35435[(8)]);
var inst_35420 = inst_35395.length;
var inst_35421 = (inst_35420 > (0));
var state_35435__$1 = state_35435;
if(cljs.core.truth_(inst_35421)){
var statearr_35445_36483 = state_35435__$1;
(statearr_35445_36483[(1)] = (12));

} else {
var statearr_35446_36484 = state_35435__$1;
(statearr_35446_36484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (3))){
var inst_35433 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35435__$1,inst_35433);
} else {
if((state_val_35436 === (12))){
var inst_35395 = (state_35435[(8)]);
var inst_35423 = cljs.core.vec(inst_35395);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35435__$1,(15),out,inst_35423);
} else {
if((state_val_35436 === (2))){
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35435__$1,(4),ch);
} else {
if((state_val_35436 === (11))){
var inst_35403 = (state_35435[(10)]);
var inst_35399 = (state_35435[(9)]);
var inst_35413 = (state_35435[(2)]);
var inst_35414 = [];
var inst_35415 = inst_35414.push(inst_35399);
var inst_35395 = inst_35414;
var inst_35396 = inst_35403;
var state_35435__$1 = (function (){var statearr_35447 = state_35435;
(statearr_35447[(7)] = inst_35396);

(statearr_35447[(11)] = inst_35413);

(statearr_35447[(12)] = inst_35415);

(statearr_35447[(8)] = inst_35395);

return statearr_35447;
})();
var statearr_35448_36500 = state_35435__$1;
(statearr_35448_36500[(2)] = null);

(statearr_35448_36500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (9))){
var inst_35395 = (state_35435[(8)]);
var inst_35411 = cljs.core.vec(inst_35395);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35435__$1,(11),out,inst_35411);
} else {
if((state_val_35436 === (5))){
var inst_35396 = (state_35435[(7)]);
var inst_35403 = (state_35435[(10)]);
var inst_35399 = (state_35435[(9)]);
var inst_35403__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35399) : f.call(null,inst_35399));
var inst_35404 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35403__$1,inst_35396);
var inst_35405 = cljs.core.keyword_identical_QMARK_(inst_35396,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35406 = ((inst_35404) || (inst_35405));
var state_35435__$1 = (function (){var statearr_35449 = state_35435;
(statearr_35449[(10)] = inst_35403__$1);

return statearr_35449;
})();
if(cljs.core.truth_(inst_35406)){
var statearr_35450_36510 = state_35435__$1;
(statearr_35450_36510[(1)] = (8));

} else {
var statearr_35451_36515 = state_35435__$1;
(statearr_35451_36515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (14))){
var inst_35428 = (state_35435[(2)]);
var inst_35429 = cljs.core.async.close_BANG_(out);
var state_35435__$1 = (function (){var statearr_35453 = state_35435;
(statearr_35453[(13)] = inst_35428);

return statearr_35453;
})();
var statearr_35454_36520 = state_35435__$1;
(statearr_35454_36520[(2)] = inst_35429);

(statearr_35454_36520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (10))){
var inst_35418 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35455_36525 = state_35435__$1;
(statearr_35455_36525[(2)] = inst_35418);

(statearr_35455_36525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (8))){
var inst_35403 = (state_35435[(10)]);
var inst_35395 = (state_35435[(8)]);
var inst_35399 = (state_35435[(9)]);
var inst_35408 = inst_35395.push(inst_35399);
var tmp35452 = inst_35395;
var inst_35395__$1 = tmp35452;
var inst_35396 = inst_35403;
var state_35435__$1 = (function (){var statearr_35456 = state_35435;
(statearr_35456[(7)] = inst_35396);

(statearr_35456[(14)] = inst_35408);

(statearr_35456[(8)] = inst_35395__$1);

return statearr_35456;
})();
var statearr_35457_36536 = state_35435__$1;
(statearr_35457_36536[(2)] = null);

(statearr_35457_36536[(1)] = (2));


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
});})(c__33942__auto___36472,out))
;
return ((function (switch__33865__auto__,c__33942__auto___36472,out){
return (function() {
var cljs$core$async$state_machine__33866__auto__ = null;
var cljs$core$async$state_machine__33866__auto____0 = (function (){
var statearr_35458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35458[(0)] = cljs$core$async$state_machine__33866__auto__);

(statearr_35458[(1)] = (1));

return statearr_35458;
});
var cljs$core$async$state_machine__33866__auto____1 = (function (state_35435){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_35435);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e35459){if((e35459 instanceof Object)){
var ex__33869__auto__ = e35459;
var statearr_35460_36541 = state_35435;
(statearr_35460_36541[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36542 = state_35435;
state_35435 = G__36542;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
cljs$core$async$state_machine__33866__auto__ = function(state_35435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33866__auto____1.call(this,state_35435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33866__auto____0;
cljs$core$async$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33866__auto____1;
return cljs$core$async$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36472,out))
})();
var state__33944__auto__ = (function (){var statearr_35461 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_35461[(6)] = c__33942__auto___36472);

return statearr_35461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36472,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map

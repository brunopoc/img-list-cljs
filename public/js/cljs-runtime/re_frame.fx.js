goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__27235 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__27236 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__27236;

try{try{var seq__27237 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27238 = null;
var count__27239 = (0);
var i__27240 = (0);
while(true){
if((i__27240 < count__27239)){
var vec__27247 = chunk__27238.cljs$core$IIndexed$_nth$arity$2(null,i__27240);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,(1),null);
var temp__5718__auto___27294 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27294)){
var effect_fn_27295 = temp__5718__auto___27294;
(effect_fn_27295.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27295.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27295.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27296 = seq__27237;
var G__27297 = chunk__27238;
var G__27298 = count__27239;
var G__27299 = (i__27240 + (1));
seq__27237 = G__27296;
chunk__27238 = G__27297;
count__27239 = G__27298;
i__27240 = G__27299;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27237);
if(temp__5720__auto__){
var seq__27237__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27237__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27237__$1);
var G__27300 = cljs.core.chunk_rest(seq__27237__$1);
var G__27301 = c__4550__auto__;
var G__27302 = cljs.core.count(c__4550__auto__);
var G__27303 = (0);
seq__27237 = G__27300;
chunk__27238 = G__27301;
count__27239 = G__27302;
i__27240 = G__27303;
continue;
} else {
var vec__27250 = cljs.core.first(seq__27237__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27250,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27250,(1),null);
var temp__5718__auto___27304 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27304)){
var effect_fn_27305 = temp__5718__auto___27304;
(effect_fn_27305.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27305.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27305.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27311 = cljs.core.next(seq__27237__$1);
var G__27312 = null;
var G__27313 = (0);
var G__27314 = (0);
seq__27237 = G__27311;
chunk__27238 = G__27312;
count__27239 = G__27313;
i__27240 = G__27314;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26959__auto___27315 = re_frame.interop.now();
var duration__26960__auto___27316 = (end__26959__auto___27315 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26960__auto___27316,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26959__auto___27315);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__27235;
}} else {
var seq__27253 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27254 = null;
var count__27255 = (0);
var i__27256 = (0);
while(true){
if((i__27256 < count__27255)){
var vec__27263 = chunk__27254.cljs$core$IIndexed$_nth$arity$2(null,i__27256);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263,(1),null);
var temp__5718__auto___27320 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27320)){
var effect_fn_27321 = temp__5718__auto___27320;
(effect_fn_27321.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27321.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27321.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27322 = seq__27253;
var G__27323 = chunk__27254;
var G__27324 = count__27255;
var G__27325 = (i__27256 + (1));
seq__27253 = G__27322;
chunk__27254 = G__27323;
count__27255 = G__27324;
i__27256 = G__27325;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27253);
if(temp__5720__auto__){
var seq__27253__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27253__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27253__$1);
var G__27326 = cljs.core.chunk_rest(seq__27253__$1);
var G__27327 = c__4550__auto__;
var G__27328 = cljs.core.count(c__4550__auto__);
var G__27329 = (0);
seq__27253 = G__27326;
chunk__27254 = G__27327;
count__27255 = G__27328;
i__27256 = G__27329;
continue;
} else {
var vec__27266 = cljs.core.first(seq__27253__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27266,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27266,(1),null);
var temp__5718__auto___27330 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27330)){
var effect_fn_27333 = temp__5718__auto___27330;
(effect_fn_27333.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27333.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27333.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27336 = cljs.core.next(seq__27253__$1);
var G__27337 = null;
var G__27338 = (0);
var G__27339 = (0);
seq__27253 = G__27336;
chunk__27254 = G__27337;
count__27255 = G__27338;
i__27256 = G__27339;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27269 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27270 = null;
var count__27271 = (0);
var i__27272 = (0);
while(true){
if((i__27272 < count__27271)){
var map__27277 = chunk__27270.cljs$core$IIndexed$_nth$arity$2(null,i__27272);
var map__27277__$1 = (((((!((map__27277 == null))))?(((((map__27277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27277):map__27277);
var effect = map__27277__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27277__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27277__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27269,chunk__27270,count__27271,i__27272,map__27277,map__27277__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27269,chunk__27270,count__27271,i__27272,map__27277,map__27277__$1,effect,ms,dispatch))
,ms);
}


var G__27348 = seq__27269;
var G__27349 = chunk__27270;
var G__27350 = count__27271;
var G__27351 = (i__27272 + (1));
seq__27269 = G__27348;
chunk__27270 = G__27349;
count__27271 = G__27350;
i__27272 = G__27351;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27269);
if(temp__5720__auto__){
var seq__27269__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27269__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27269__$1);
var G__27352 = cljs.core.chunk_rest(seq__27269__$1);
var G__27353 = c__4550__auto__;
var G__27354 = cljs.core.count(c__4550__auto__);
var G__27355 = (0);
seq__27269 = G__27352;
chunk__27270 = G__27353;
count__27271 = G__27354;
i__27272 = G__27355;
continue;
} else {
var map__27284 = cljs.core.first(seq__27269__$1);
var map__27284__$1 = (((((!((map__27284 == null))))?(((((map__27284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27284):map__27284);
var effect = map__27284__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27284__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27269,chunk__27270,count__27271,i__27272,map__27284,map__27284__$1,effect,ms,dispatch,seq__27269__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27269,chunk__27270,count__27271,i__27272,map__27284,map__27284__$1,effect,ms,dispatch,seq__27269__$1,temp__5720__auto__))
,ms);
}


var G__27357 = cljs.core.next(seq__27269__$1);
var G__27358 = null;
var G__27359 = (0);
var G__27360 = (0);
seq__27269 = G__27357;
chunk__27270 = G__27358;
count__27271 = G__27359;
i__27272 = G__27360;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__27286 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27287 = null;
var count__27288 = (0);
var i__27289 = (0);
while(true){
if((i__27289 < count__27288)){
var event = chunk__27287.cljs$core$IIndexed$_nth$arity$2(null,i__27289);
re_frame.router.dispatch(event);


var G__27361 = seq__27286;
var G__27362 = chunk__27287;
var G__27363 = count__27288;
var G__27364 = (i__27289 + (1));
seq__27286 = G__27361;
chunk__27287 = G__27362;
count__27288 = G__27363;
i__27289 = G__27364;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27286);
if(temp__5720__auto__){
var seq__27286__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27286__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27286__$1);
var G__27375 = cljs.core.chunk_rest(seq__27286__$1);
var G__27376 = c__4550__auto__;
var G__27377 = cljs.core.count(c__4550__auto__);
var G__27378 = (0);
seq__27286 = G__27375;
chunk__27287 = G__27376;
count__27288 = G__27377;
i__27289 = G__27378;
continue;
} else {
var event = cljs.core.first(seq__27286__$1);
re_frame.router.dispatch(event);


var G__27383 = cljs.core.next(seq__27286__$1);
var G__27384 = null;
var G__27385 = (0);
var G__27386 = (0);
seq__27286 = G__27383;
chunk__27287 = G__27384;
count__27288 = G__27385;
i__27289 = G__27386;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27290 = cljs.core.seq(value);
var chunk__27291 = null;
var count__27292 = (0);
var i__27293 = (0);
while(true){
if((i__27293 < count__27292)){
var event = chunk__27291.cljs$core$IIndexed$_nth$arity$2(null,i__27293);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27387 = seq__27290;
var G__27388 = chunk__27291;
var G__27389 = count__27292;
var G__27390 = (i__27293 + (1));
seq__27290 = G__27387;
chunk__27291 = G__27388;
count__27292 = G__27389;
i__27293 = G__27390;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27290);
if(temp__5720__auto__){
var seq__27290__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27290__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27290__$1);
var G__27391 = cljs.core.chunk_rest(seq__27290__$1);
var G__27392 = c__4550__auto__;
var G__27393 = cljs.core.count(c__4550__auto__);
var G__27394 = (0);
seq__27290 = G__27391;
chunk__27291 = G__27392;
count__27292 = G__27393;
i__27293 = G__27394;
continue;
} else {
var event = cljs.core.first(seq__27290__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27395 = cljs.core.next(seq__27290__$1);
var G__27396 = null;
var G__27397 = (0);
var G__27398 = (0);
seq__27290 = G__27395;
chunk__27291 = G__27396;
count__27292 = G__27397;
i__27293 = G__27398;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__26979){
var map__26980 = p__26979;
var map__26980__$1 = (((((!((map__26980 == null))))?(((((map__26980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26980):map__26980);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__26982_27026 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__26983_27027 = null;
var count__26984_27028 = (0);
var i__26985_27029 = (0);
while(true){
if((i__26985_27029 < count__26984_27028)){
var vec__26996_27030 = chunk__26983_27027.cljs$core$IIndexed$_nth$arity$2(null,i__26985_27029);
var k_27031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26996_27030,(0),null);
var cb_27032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26996_27030,(1),null);
try{var G__27000_27033 = cljs.core.deref(re_frame.trace.traces);
(cb_27032.cljs$core$IFn$_invoke$arity$1 ? cb_27032.cljs$core$IFn$_invoke$arity$1(G__27000_27033) : cb_27032.call(null,G__27000_27033));
}catch (e26999){var e_27034 = e26999;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27031,"while storing",cljs.core.deref(re_frame.trace.traces),e_27034], 0));
}

var G__27035 = seq__26982_27026;
var G__27036 = chunk__26983_27027;
var G__27037 = count__26984_27028;
var G__27038 = (i__26985_27029 + (1));
seq__26982_27026 = G__27035;
chunk__26983_27027 = G__27036;
count__26984_27028 = G__27037;
i__26985_27029 = G__27038;
continue;
} else {
var temp__5720__auto___27039 = cljs.core.seq(seq__26982_27026);
if(temp__5720__auto___27039){
var seq__26982_27040__$1 = temp__5720__auto___27039;
if(cljs.core.chunked_seq_QMARK_(seq__26982_27040__$1)){
var c__4550__auto___27041 = cljs.core.chunk_first(seq__26982_27040__$1);
var G__27042 = cljs.core.chunk_rest(seq__26982_27040__$1);
var G__27043 = c__4550__auto___27041;
var G__27044 = cljs.core.count(c__4550__auto___27041);
var G__27045 = (0);
seq__26982_27026 = G__27042;
chunk__26983_27027 = G__27043;
count__26984_27028 = G__27044;
i__26985_27029 = G__27045;
continue;
} else {
var vec__27001_27046 = cljs.core.first(seq__26982_27040__$1);
var k_27047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27001_27046,(0),null);
var cb_27048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27001_27046,(1),null);
try{var G__27005_27049 = cljs.core.deref(re_frame.trace.traces);
(cb_27048.cljs$core$IFn$_invoke$arity$1 ? cb_27048.cljs$core$IFn$_invoke$arity$1(G__27005_27049) : cb_27048.call(null,G__27005_27049));
}catch (e27004){var e_27050 = e27004;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_27047,"while storing",cljs.core.deref(re_frame.trace.traces),e_27050], 0));
}

var G__27052 = cljs.core.next(seq__26982_27040__$1);
var G__27053 = null;
var G__27054 = (0);
var G__27055 = (0);
seq__26982_27026 = G__27052;
chunk__26983_27027 = G__27053;
count__26984_27028 = G__27054;
i__26985_27029 = G__27055;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

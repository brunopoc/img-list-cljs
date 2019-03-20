goog.provide('pokemon.events');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('re_frame.core');
var G__27468_27478 = new cljs.core.Keyword(null,"fetch","fetch",-1081994244);
var G__27469_27479 = ((function (G__27468_27478){
return (function (p__27470){
var map__27471 = p__27470;
var map__27471__$1 = (((((!((map__27471 == null))))?(((((map__27471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27471):map__27471);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27471__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27471__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27471__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27471__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var body = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)));
var on_unexpected_error = ((function (body,map__27471,map__27471__$1,query,variables,on_error,on_success,G__27468_27478){
return (function (e){
var G__27473 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,e);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27473) : re_frame.core.dispatch.call(null,G__27473));
});})(body,map__27471,map__27471__$1,query,variables,on_error,on_success,G__27468_27478))
;
var on_reponse = ((function (body,on_unexpected_error,map__27471,map__27471__$1,query,variables,on_error,on_success,G__27468_27478){
return (function (response){
if(cljs.core.not(response.ok)){
throw Error(response.statusText);
} else {
return response.json();
}
});})(body,on_unexpected_error,map__27471,map__27471__$1,query,variables,on_error,on_success,G__27468_27478))
;
var on_json = ((function (body,on_unexpected_error,on_reponse,map__27471,map__27471__$1,query,variables,on_error,on_success,G__27468_27478){
return (function (json){
var map__27474 = clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(json));
var map__27474__$1 = (((((!((map__27474 == null))))?(((((map__27474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27474):map__27474);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27474__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27474__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(errors)){
var G__27476 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,errors);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27476) : re_frame.core.dispatch.call(null,G__27476));
} else {
var G__27477 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,data);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27477) : re_frame.core.dispatch.call(null,G__27477));
}
});})(body,on_unexpected_error,on_reponse,map__27471,map__27471__$1,query,variables,on_error,on_success,G__27468_27478))
;
return fetch("https://graphql-pokemon.now.sh/",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),body], null))).then(on_reponse).then(on_json).catch(on_unexpected_error);
});})(G__27468_27478))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__27468_27478,G__27469_27479) : re_frame.core.reg_fx.call(null,G__27468_27478,G__27469_27479));
pokemon.events.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-name","app-name",-268811251),"Xerpa"], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),pokemon.events.default_db], null);
}));

//# sourceMappingURL=pokemon.events.js.map

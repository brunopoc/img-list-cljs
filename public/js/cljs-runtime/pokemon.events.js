goog.provide('pokemon.events');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('re_frame.core');
goog.require('reagent.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-pkm-list","save-pkm-list",-1062983624),(function (db,p__36502){
var vec__36503 = p__36502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pkm-list","pkm-list",1714211690),((function (vec__36503,_,item){
return (function (){
return item;
});})(vec__36503,_,item))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-pkm","save-pkm",364084970),(function (db,p__36506){
var vec__36507 = p__36506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36507,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36507,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pokemon","pokemon",1065917705),((function (vec__36507,_,item){
return (function (){
return item;
});})(vec__36507,_,item))
);
}));
var G__36510_36514 = new cljs.core.Keyword(null,"get-pkm-list","get-pkm-list",-1770385931);
var G__36511_36515 = ((function (G__36510_36514){
return (function (db){
return new cljs.core.Keyword(null,"pkm-list","pkm-list",1714211690).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36510_36514))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36510_36514,G__36511_36515) : re_frame.core.reg_sub.call(null,G__36510_36514,G__36511_36515));
var G__36512_36516 = new cljs.core.Keyword(null,"get-pkm","get-pkm",-247122554);
var G__36513_36517 = ((function (G__36512_36516){
return (function (db){
return new cljs.core.Keyword(null,"pokemon","pokemon",1065917705).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36512_36516))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36512_36516,G__36513_36517) : re_frame.core.reg_sub.call(null,G__36512_36516,G__36513_36517));

//# sourceMappingURL=pokemon.events.js.map

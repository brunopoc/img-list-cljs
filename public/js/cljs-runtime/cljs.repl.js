goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31675){
var map__31676 = p__31675;
var map__31676__$1 = (((((!((map__31676 == null))))?(((((map__31676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31676):map__31676);
var m = map__31676__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31676__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31678_31821 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31679_31822 = null;
var count__31680_31823 = (0);
var i__31681_31824 = (0);
while(true){
if((i__31681_31824 < count__31680_31823)){
var f_31825 = chunk__31679_31822.cljs$core$IIndexed$_nth$arity$2(null,i__31681_31824);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31825], 0));


var G__31826 = seq__31678_31821;
var G__31827 = chunk__31679_31822;
var G__31828 = count__31680_31823;
var G__31829 = (i__31681_31824 + (1));
seq__31678_31821 = G__31826;
chunk__31679_31822 = G__31827;
count__31680_31823 = G__31828;
i__31681_31824 = G__31829;
continue;
} else {
var temp__5720__auto___31830 = cljs.core.seq(seq__31678_31821);
if(temp__5720__auto___31830){
var seq__31678_31833__$1 = temp__5720__auto___31830;
if(cljs.core.chunked_seq_QMARK_(seq__31678_31833__$1)){
var c__4550__auto___31834 = cljs.core.chunk_first(seq__31678_31833__$1);
var G__31835 = cljs.core.chunk_rest(seq__31678_31833__$1);
var G__31836 = c__4550__auto___31834;
var G__31837 = cljs.core.count(c__4550__auto___31834);
var G__31838 = (0);
seq__31678_31821 = G__31835;
chunk__31679_31822 = G__31836;
count__31680_31823 = G__31837;
i__31681_31824 = G__31838;
continue;
} else {
var f_31839 = cljs.core.first(seq__31678_31833__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31839], 0));


var G__31840 = cljs.core.next(seq__31678_31833__$1);
var G__31841 = null;
var G__31842 = (0);
var G__31843 = (0);
seq__31678_31821 = G__31840;
chunk__31679_31822 = G__31841;
count__31680_31823 = G__31842;
i__31681_31824 = G__31843;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31844 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31844], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31844)))?cljs.core.second(arglists_31844):arglists_31844)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31700_31848 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31701_31849 = null;
var count__31702_31850 = (0);
var i__31703_31851 = (0);
while(true){
if((i__31703_31851 < count__31702_31850)){
var vec__31714_31852 = chunk__31701_31849.cljs$core$IIndexed$_nth$arity$2(null,i__31703_31851);
var name_31853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31714_31852,(0),null);
var map__31717_31854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31714_31852,(1),null);
var map__31717_31855__$1 = (((((!((map__31717_31854 == null))))?(((((map__31717_31854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31717_31854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31717_31854):map__31717_31854);
var doc_31856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31717_31855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31717_31855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31853], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31857], 0));

if(cljs.core.truth_(doc_31856)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31856], 0));
} else {
}


var G__31858 = seq__31700_31848;
var G__31859 = chunk__31701_31849;
var G__31860 = count__31702_31850;
var G__31861 = (i__31703_31851 + (1));
seq__31700_31848 = G__31858;
chunk__31701_31849 = G__31859;
count__31702_31850 = G__31860;
i__31703_31851 = G__31861;
continue;
} else {
var temp__5720__auto___31862 = cljs.core.seq(seq__31700_31848);
if(temp__5720__auto___31862){
var seq__31700_31863__$1 = temp__5720__auto___31862;
if(cljs.core.chunked_seq_QMARK_(seq__31700_31863__$1)){
var c__4550__auto___31864 = cljs.core.chunk_first(seq__31700_31863__$1);
var G__31865 = cljs.core.chunk_rest(seq__31700_31863__$1);
var G__31866 = c__4550__auto___31864;
var G__31867 = cljs.core.count(c__4550__auto___31864);
var G__31868 = (0);
seq__31700_31848 = G__31865;
chunk__31701_31849 = G__31866;
count__31702_31850 = G__31867;
i__31703_31851 = G__31868;
continue;
} else {
var vec__31719_31869 = cljs.core.first(seq__31700_31863__$1);
var name_31870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719_31869,(0),null);
var map__31722_31871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719_31869,(1),null);
var map__31722_31872__$1 = (((((!((map__31722_31871 == null))))?(((((map__31722_31871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31722_31871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31722_31871):map__31722_31871);
var doc_31873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31722_31872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31722_31872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31870], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31874], 0));

if(cljs.core.truth_(doc_31873)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31873], 0));
} else {
}


var G__31875 = cljs.core.next(seq__31700_31863__$1);
var G__31876 = null;
var G__31877 = (0);
var G__31878 = (0);
seq__31700_31848 = G__31875;
chunk__31701_31849 = G__31876;
count__31702_31850 = G__31877;
i__31703_31851 = G__31878;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31724 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31725 = null;
var count__31726 = (0);
var i__31727 = (0);
while(true){
if((i__31727 < count__31726)){
var role = chunk__31725.cljs$core$IIndexed$_nth$arity$2(null,i__31727);
var temp__5720__auto___31879__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31879__$1)){
var spec_31880 = temp__5720__auto___31879__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31880)], 0));
} else {
}


var G__31881 = seq__31724;
var G__31882 = chunk__31725;
var G__31883 = count__31726;
var G__31884 = (i__31727 + (1));
seq__31724 = G__31881;
chunk__31725 = G__31882;
count__31726 = G__31883;
i__31727 = G__31884;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31724);
if(temp__5720__auto____$1){
var seq__31724__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31724__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31724__$1);
var G__31885 = cljs.core.chunk_rest(seq__31724__$1);
var G__31886 = c__4550__auto__;
var G__31887 = cljs.core.count(c__4550__auto__);
var G__31888 = (0);
seq__31724 = G__31885;
chunk__31725 = G__31886;
count__31726 = G__31887;
i__31727 = G__31888;
continue;
} else {
var role = cljs.core.first(seq__31724__$1);
var temp__5720__auto___31889__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31889__$2)){
var spec_31890 = temp__5720__auto___31889__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31890)], 0));
} else {
}


var G__31891 = cljs.core.next(seq__31724__$1);
var G__31892 = null;
var G__31893 = (0);
var G__31894 = (0);
seq__31724 = G__31891;
chunk__31725 = G__31892;
count__31726 = G__31893;
i__31727 = G__31894;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31895 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31896 = cljs.core.ex_cause(t);
via = G__31895;
t = G__31896;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31752 = datafied_throwable;
var map__31752__$1 = (((((!((map__31752 == null))))?(((((map__31752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31752):map__31752);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31752__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31752__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31752__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31753 = cljs.core.last(via);
var map__31753__$1 = (((((!((map__31753 == null))))?(((((map__31753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31753):map__31753);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31753__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31753__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31754 = data;
var map__31754__$1 = (((((!((map__31754 == null))))?(((((map__31754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31754):map__31754);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31755 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31755__$1 = (((((!((map__31755 == null))))?(((((map__31755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31755):map__31755);
var top_data = map__31755__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31755__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31761 = phase;
var G__31761__$1 = (((G__31761 instanceof cljs.core.Keyword))?G__31761.fqn:null);
switch (G__31761__$1) {
case "read-source":
var map__31762 = data;
var map__31762__$1 = (((((!((map__31762 == null))))?(((((map__31762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31762):map__31762);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31762__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31762__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31764 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31764__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31764,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31764);
var G__31764__$2 = (cljs.core.truth_((function (){var fexpr__31765 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31765.cljs$core$IFn$_invoke$arity$1 ? fexpr__31765.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31765.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31764__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31764__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31764__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31764__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31766 = top_data;
var G__31766__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31766,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31766);
var G__31766__$2 = (cljs.core.truth_((function (){var fexpr__31767 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31767.cljs$core$IFn$_invoke$arity$1 ? fexpr__31767.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31767.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31766__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31766__$1);
var G__31766__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31766__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31766__$2);
var G__31766__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31766__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31766__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31766__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31766__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31768 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31768,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31768,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31768,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31768,(3),null);
var G__31771 = top_data;
var G__31771__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31771,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31771);
var G__31771__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31771__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31771__$1);
var G__31771__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31771__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31771__$2);
var G__31771__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31771__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31771__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31771__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31771__$4;
}

break;
case "execution":
var vec__31772 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31772,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31772,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31772,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31772,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31772,source__$1,method,file,line,G__31761,G__31761__$1,map__31752,map__31752__$1,via,trace,phase,map__31753,map__31753__$1,type,message,data,map__31754,map__31754__$1,problems,fn,caller,map__31755,map__31755__$1,top_data,source){
return (function (p1__31751_SHARP_){
var or__4131__auto__ = (p1__31751_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31776 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31776.cljs$core$IFn$_invoke$arity$1 ? fexpr__31776.cljs$core$IFn$_invoke$arity$1(p1__31751_SHARP_) : fexpr__31776.call(null,p1__31751_SHARP_));
}
});})(vec__31772,source__$1,method,file,line,G__31761,G__31761__$1,map__31752,map__31752__$1,via,trace,phase,map__31753,map__31753__$1,type,message,data,map__31754,map__31754__$1,problems,fn,caller,map__31755,map__31755__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31777 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31777__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31777,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31777);
var G__31777__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31777__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31777__$1);
var G__31777__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31777__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31777__$2);
var G__31777__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31777__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31777__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31777__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31777__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31761__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31781){
var map__31782 = p__31781;
var map__31782__$1 = (((((!((map__31782 == null))))?(((((map__31782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31782):map__31782);
var triage_data = map__31782__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31782__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31784 = phase;
var G__31784__$1 = (((G__31784 instanceof cljs.core.Keyword))?G__31784.fqn:null);
switch (G__31784__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31785 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31786 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31787 = loc;
var G__31788 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31789_31902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31790_31903 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31791_31904 = true;
var _STAR_print_fn_STAR__temp_val__31792_31905 = ((function (_STAR_print_newline_STAR__orig_val__31789_31902,_STAR_print_fn_STAR__orig_val__31790_31903,_STAR_print_newline_STAR__temp_val__31791_31904,sb__4661__auto__,G__31785,G__31786,G__31787,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31789_31902,_STAR_print_fn_STAR__orig_val__31790_31903,_STAR_print_newline_STAR__temp_val__31791_31904,sb__4661__auto__,G__31785,G__31786,G__31787,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31791_31904;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31792_31905;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31789_31902,_STAR_print_fn_STAR__orig_val__31790_31903,_STAR_print_newline_STAR__temp_val__31791_31904,_STAR_print_fn_STAR__temp_val__31792_31905,sb__4661__auto__,G__31785,G__31786,G__31787,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31789_31902,_STAR_print_fn_STAR__orig_val__31790_31903,_STAR_print_newline_STAR__temp_val__31791_31904,_STAR_print_fn_STAR__temp_val__31792_31905,sb__4661__auto__,G__31785,G__31786,G__31787,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31779_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31779_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31789_31902,_STAR_print_fn_STAR__orig_val__31790_31903,_STAR_print_newline_STAR__temp_val__31791_31904,_STAR_print_fn_STAR__temp_val__31792_31905,sb__4661__auto__,G__31785,G__31786,G__31787,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31789_31902,_STAR_print_fn_STAR__orig_val__31790_31903,_STAR_print_newline_STAR__temp_val__31791_31904,_STAR_print_fn_STAR__temp_val__31792_31905,sb__4661__auto__,G__31785,G__31786,G__31787,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31790_31903;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31789_31902;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31785,G__31786,G__31787,G__31788) : format.call(null,G__31785,G__31786,G__31787,G__31788));

break;
case "macroexpansion":
var G__31793 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31794 = cause_type;
var G__31795 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31796 = loc;
var G__31797 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31793,G__31794,G__31795,G__31796,G__31797) : format.call(null,G__31793,G__31794,G__31795,G__31796,G__31797));

break;
case "compile-syntax-check":
var G__31798 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31799 = cause_type;
var G__31800 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31801 = loc;
var G__31802 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31798,G__31799,G__31800,G__31801,G__31802) : format.call(null,G__31798,G__31799,G__31800,G__31801,G__31802));

break;
case "compilation":
var G__31803 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31804 = cause_type;
var G__31805 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31806 = loc;
var G__31807 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31803,G__31804,G__31805,G__31806,G__31807) : format.call(null,G__31803,G__31804,G__31805,G__31806,G__31807));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31808 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31809 = symbol;
var G__31810 = loc;
var G__31811 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31812_31913 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31813_31914 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31814_31915 = true;
var _STAR_print_fn_STAR__temp_val__31815_31916 = ((function (_STAR_print_newline_STAR__orig_val__31812_31913,_STAR_print_fn_STAR__orig_val__31813_31914,_STAR_print_newline_STAR__temp_val__31814_31915,sb__4661__auto__,G__31808,G__31809,G__31810,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31812_31913,_STAR_print_fn_STAR__orig_val__31813_31914,_STAR_print_newline_STAR__temp_val__31814_31915,sb__4661__auto__,G__31808,G__31809,G__31810,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31814_31915;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31815_31916;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31812_31913,_STAR_print_fn_STAR__orig_val__31813_31914,_STAR_print_newline_STAR__temp_val__31814_31915,_STAR_print_fn_STAR__temp_val__31815_31916,sb__4661__auto__,G__31808,G__31809,G__31810,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31812_31913,_STAR_print_fn_STAR__orig_val__31813_31914,_STAR_print_newline_STAR__temp_val__31814_31915,_STAR_print_fn_STAR__temp_val__31815_31916,sb__4661__auto__,G__31808,G__31809,G__31810,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31780_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31780_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31812_31913,_STAR_print_fn_STAR__orig_val__31813_31914,_STAR_print_newline_STAR__temp_val__31814_31915,_STAR_print_fn_STAR__temp_val__31815_31916,sb__4661__auto__,G__31808,G__31809,G__31810,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31812_31913,_STAR_print_fn_STAR__orig_val__31813_31914,_STAR_print_newline_STAR__temp_val__31814_31915,_STAR_print_fn_STAR__temp_val__31815_31916,sb__4661__auto__,G__31808,G__31809,G__31810,G__31784,G__31784__$1,loc,class_name,simple_class,cause_type,format,map__31782,map__31782__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31813_31914;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31812_31913;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31808,G__31809,G__31810,G__31811) : format.call(null,G__31808,G__31809,G__31810,G__31811));
} else {
var G__31816 = "Execution error%s at %s(%s).\n%s\n";
var G__31817 = cause_type;
var G__31818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31819 = loc;
var G__31820 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31816,G__31817,G__31818,G__31819,G__31820) : format.call(null,G__31816,G__31817,G__31818,G__31819,G__31820));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31784__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

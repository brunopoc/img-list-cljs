goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37834 = arguments.length;
var i__4731__auto___37835 = (0);
while(true){
if((i__4731__auto___37835 < len__4730__auto___37834)){
args__4736__auto__.push((arguments[i__4731__auto___37835]));

var G__37836 = (i__4731__auto___37835 + (1));
i__4731__auto___37835 = G__37836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37612){
var G__37613 = cljs.core.first(seq37612);
var seq37612__$1 = cljs.core.next(seq37612);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37613,seq37612__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37634){
var map__37636 = p__37634;
var map__37636__$1 = (((((!((map__37636 == null))))?(((((map__37636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37636):map__37636);
var src = map__37636__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37636__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37664 = cljs.core.seq(sources);
var chunk__37665 = null;
var count__37666 = (0);
var i__37667 = (0);
while(true){
if((i__37667 < count__37666)){
var map__37680 = chunk__37665.cljs$core$IIndexed$_nth$arity$2(null,i__37667);
var map__37680__$1 = (((((!((map__37680 == null))))?(((((map__37680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37680):map__37680);
var src = map__37680__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37837 = seq__37664;
var G__37838 = chunk__37665;
var G__37839 = count__37666;
var G__37840 = (i__37667 + (1));
seq__37664 = G__37837;
chunk__37665 = G__37838;
count__37666 = G__37839;
i__37667 = G__37840;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37664);
if(temp__5720__auto__){
var seq__37664__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37664__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37664__$1);
var G__37841 = cljs.core.chunk_rest(seq__37664__$1);
var G__37842 = c__4550__auto__;
var G__37843 = cljs.core.count(c__4550__auto__);
var G__37844 = (0);
seq__37664 = G__37841;
chunk__37665 = G__37842;
count__37666 = G__37843;
i__37667 = G__37844;
continue;
} else {
var map__37682 = cljs.core.first(seq__37664__$1);
var map__37682__$1 = (((((!((map__37682 == null))))?(((((map__37682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37682):map__37682);
var src = map__37682__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37682__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37682__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37682__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37845 = cljs.core.next(seq__37664__$1);
var G__37846 = null;
var G__37847 = (0);
var G__37848 = (0);
seq__37664 = G__37845;
chunk__37665 = G__37846;
count__37666 = G__37847;
i__37667 = G__37848;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37685 = cljs.core.seq(js_requires);
var chunk__37686 = null;
var count__37687 = (0);
var i__37688 = (0);
while(true){
if((i__37688 < count__37687)){
var js_ns = chunk__37686.cljs$core$IIndexed$_nth$arity$2(null,i__37688);
var require_str_37849 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37849);


var G__37850 = seq__37685;
var G__37851 = chunk__37686;
var G__37852 = count__37687;
var G__37853 = (i__37688 + (1));
seq__37685 = G__37850;
chunk__37686 = G__37851;
count__37687 = G__37852;
i__37688 = G__37853;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37685);
if(temp__5720__auto__){
var seq__37685__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37685__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37685__$1);
var G__37854 = cljs.core.chunk_rest(seq__37685__$1);
var G__37855 = c__4550__auto__;
var G__37856 = cljs.core.count(c__4550__auto__);
var G__37857 = (0);
seq__37685 = G__37854;
chunk__37686 = G__37855;
count__37687 = G__37856;
i__37688 = G__37857;
continue;
} else {
var js_ns = cljs.core.first(seq__37685__$1);
var require_str_37858 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37858);


var G__37859 = cljs.core.next(seq__37685__$1);
var G__37860 = null;
var G__37861 = (0);
var G__37862 = (0);
seq__37685 = G__37859;
chunk__37686 = G__37860;
count__37687 = G__37861;
i__37688 = G__37862;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37693 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37693) : callback.call(null,G__37693));
} else {
var G__37694 = shadow.cljs.devtools.client.env.files_url();
var G__37695 = ((function (G__37694){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37694))
;
var G__37696 = "POST";
var G__37697 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37698 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37694,G__37695,G__37696,G__37697,G__37698);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37700){
var map__37701 = p__37700;
var map__37701__$1 = (((((!((map__37701 == null))))?(((((map__37701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37701):map__37701);
var msg = map__37701__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37701__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37701__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37703 = info;
var map__37703__$1 = (((((!((map__37703 == null))))?(((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37703):map__37703);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37703__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37703__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37705(s__37706){
return (new cljs.core.LazySeq(null,((function (map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info){
return (function (){
var s__37706__$1 = s__37706;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37706__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37711 = cljs.core.first(xs__6277__auto__);
var map__37711__$1 = (((((!((map__37711 == null))))?(((((map__37711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37711):map__37711);
var src = map__37711__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37706__$1,map__37711,map__37711__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37705_$_iter__37707(s__37708){
return (new cljs.core.LazySeq(null,((function (s__37706__$1,map__37711,map__37711__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info){
return (function (){
var s__37708__$1 = s__37708;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37708__$1);
if(temp__5720__auto____$1){
var s__37708__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37708__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37708__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37710 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37709 = (0);
while(true){
if((i__37709 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37709);
cljs.core.chunk_append(b__37710,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37875 = (i__37709 + (1));
i__37709 = G__37875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37710),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37705_$_iter__37707(cljs.core.chunk_rest(s__37708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37710),null);
}
} else {
var warning = cljs.core.first(s__37708__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37705_$_iter__37707(cljs.core.rest(s__37708__$2)));
}
} else {
return null;
}
break;
}
});})(s__37706__$1,map__37711,map__37711__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info))
,null,null));
});})(s__37706__$1,map__37711,map__37711__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37705(cljs.core.rest(s__37706__$1)));
} else {
var G__37877 = cljs.core.rest(s__37706__$1);
s__37706__$1 = G__37877;
continue;
}
} else {
var G__37878 = cljs.core.rest(s__37706__$1);
s__37706__$1 = G__37878;
continue;
}
} else {
return null;
}
break;
}
});})(map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info))
,null,null));
});})(map__37703,map__37703__$1,sources,compiled,map__37701,map__37701__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37717_37881 = cljs.core.seq(warnings);
var chunk__37718_37882 = null;
var count__37719_37883 = (0);
var i__37720_37884 = (0);
while(true){
if((i__37720_37884 < count__37719_37883)){
var map__37731_37886 = chunk__37718_37882.cljs$core$IIndexed$_nth$arity$2(null,i__37720_37884);
var map__37731_37887__$1 = (((((!((map__37731_37886 == null))))?(((((map__37731_37886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37731_37886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37731_37886):map__37731_37886);
var w_37888 = map__37731_37887__$1;
var msg_37889__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731_37887__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731_37887__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731_37887__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731_37887__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37892)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37890),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37891),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37889__$1)].join(''));


var G__37894 = seq__37717_37881;
var G__37895 = chunk__37718_37882;
var G__37896 = count__37719_37883;
var G__37897 = (i__37720_37884 + (1));
seq__37717_37881 = G__37894;
chunk__37718_37882 = G__37895;
count__37719_37883 = G__37896;
i__37720_37884 = G__37897;
continue;
} else {
var temp__5720__auto___37898 = cljs.core.seq(seq__37717_37881);
if(temp__5720__auto___37898){
var seq__37717_37901__$1 = temp__5720__auto___37898;
if(cljs.core.chunked_seq_QMARK_(seq__37717_37901__$1)){
var c__4550__auto___37902 = cljs.core.chunk_first(seq__37717_37901__$1);
var G__37903 = cljs.core.chunk_rest(seq__37717_37901__$1);
var G__37904 = c__4550__auto___37902;
var G__37905 = cljs.core.count(c__4550__auto___37902);
var G__37906 = (0);
seq__37717_37881 = G__37903;
chunk__37718_37882 = G__37904;
count__37719_37883 = G__37905;
i__37720_37884 = G__37906;
continue;
} else {
var map__37734_37909 = cljs.core.first(seq__37717_37901__$1);
var map__37734_37910__$1 = (((((!((map__37734_37909 == null))))?(((((map__37734_37909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37734_37909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37734_37909):map__37734_37909);
var w_37911 = map__37734_37910__$1;
var msg_37912__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734_37910__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734_37910__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734_37910__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734_37910__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37915)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37913),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37914),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37912__$1)].join(''));


var G__37918 = cljs.core.next(seq__37717_37901__$1);
var G__37919 = null;
var G__37920 = (0);
var G__37921 = (0);
seq__37717_37881 = G__37918;
chunk__37718_37882 = G__37919;
count__37719_37883 = G__37920;
i__37720_37884 = G__37921;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info){
return (function (p__37736){
var map__37737 = p__37736;
var map__37737__$1 = (((((!((map__37737 == null))))?(((((map__37737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37737):map__37737);
var src = map__37737__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37737__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37737__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info){
return (function (p__37739){
var map__37740 = p__37739;
var map__37740__$1 = (((((!((map__37740 == null))))?(((((map__37740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37740):map__37740);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info){
return (function (p__37742){
var map__37743 = p__37742;
var map__37743__$1 = (((((!((map__37743 == null))))?(((((map__37743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37743):map__37743);
var rc = map__37743__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37743__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info){
return (function (p1__37699_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37699_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37703,map__37703__$1,sources,compiled,warnings,map__37701,map__37701__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37745){
var map__37746 = p__37745;
var map__37746__$1 = (((((!((map__37746 == null))))?(((((map__37746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37746):map__37746);
var msg = map__37746__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37746__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37748 = cljs.core.seq(updates);
var chunk__37750 = null;
var count__37751 = (0);
var i__37752 = (0);
while(true){
if((i__37752 < count__37751)){
var path = chunk__37750.cljs$core$IIndexed$_nth$arity$2(null,i__37752);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37780_37936 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37783_37937 = null;
var count__37784_37938 = (0);
var i__37785_37939 = (0);
while(true){
if((i__37785_37939 < count__37784_37938)){
var node_37940 = chunk__37783_37937.cljs$core$IIndexed$_nth$arity$2(null,i__37785_37939);
var path_match_37941 = shadow.cljs.devtools.client.browser.match_paths(node_37940.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37941)){
var new_link_37942 = (function (){var G__37790 = node_37940.cloneNode(true);
G__37790.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37941),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37790;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37941], 0));

goog.dom.insertSiblingAfter(new_link_37942,node_37940);

goog.dom.removeNode(node_37940);


var G__37943 = seq__37780_37936;
var G__37944 = chunk__37783_37937;
var G__37945 = count__37784_37938;
var G__37946 = (i__37785_37939 + (1));
seq__37780_37936 = G__37943;
chunk__37783_37937 = G__37944;
count__37784_37938 = G__37945;
i__37785_37939 = G__37946;
continue;
} else {
var G__37947 = seq__37780_37936;
var G__37948 = chunk__37783_37937;
var G__37949 = count__37784_37938;
var G__37950 = (i__37785_37939 + (1));
seq__37780_37936 = G__37947;
chunk__37783_37937 = G__37948;
count__37784_37938 = G__37949;
i__37785_37939 = G__37950;
continue;
}
} else {
var temp__5720__auto___37951 = cljs.core.seq(seq__37780_37936);
if(temp__5720__auto___37951){
var seq__37780_37952__$1 = temp__5720__auto___37951;
if(cljs.core.chunked_seq_QMARK_(seq__37780_37952__$1)){
var c__4550__auto___37953 = cljs.core.chunk_first(seq__37780_37952__$1);
var G__37954 = cljs.core.chunk_rest(seq__37780_37952__$1);
var G__37955 = c__4550__auto___37953;
var G__37956 = cljs.core.count(c__4550__auto___37953);
var G__37957 = (0);
seq__37780_37936 = G__37954;
chunk__37783_37937 = G__37955;
count__37784_37938 = G__37956;
i__37785_37939 = G__37957;
continue;
} else {
var node_37958 = cljs.core.first(seq__37780_37952__$1);
var path_match_37959 = shadow.cljs.devtools.client.browser.match_paths(node_37958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37959)){
var new_link_37960 = (function (){var G__37791 = node_37958.cloneNode(true);
G__37791.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37959),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37791;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37959], 0));

goog.dom.insertSiblingAfter(new_link_37960,node_37958);

goog.dom.removeNode(node_37958);


var G__37961 = cljs.core.next(seq__37780_37952__$1);
var G__37962 = null;
var G__37963 = (0);
var G__37964 = (0);
seq__37780_37936 = G__37961;
chunk__37783_37937 = G__37962;
count__37784_37938 = G__37963;
i__37785_37939 = G__37964;
continue;
} else {
var G__37965 = cljs.core.next(seq__37780_37952__$1);
var G__37966 = null;
var G__37967 = (0);
var G__37968 = (0);
seq__37780_37936 = G__37965;
chunk__37783_37937 = G__37966;
count__37784_37938 = G__37967;
i__37785_37939 = G__37968;
continue;
}
}
} else {
}
}
break;
}


var G__37969 = seq__37748;
var G__37970 = chunk__37750;
var G__37971 = count__37751;
var G__37972 = (i__37752 + (1));
seq__37748 = G__37969;
chunk__37750 = G__37970;
count__37751 = G__37971;
i__37752 = G__37972;
continue;
} else {
var G__37973 = seq__37748;
var G__37974 = chunk__37750;
var G__37975 = count__37751;
var G__37976 = (i__37752 + (1));
seq__37748 = G__37973;
chunk__37750 = G__37974;
count__37751 = G__37975;
i__37752 = G__37976;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37748);
if(temp__5720__auto__){
var seq__37748__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37748__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37748__$1);
var G__37977 = cljs.core.chunk_rest(seq__37748__$1);
var G__37978 = c__4550__auto__;
var G__37979 = cljs.core.count(c__4550__auto__);
var G__37980 = (0);
seq__37748 = G__37977;
chunk__37750 = G__37978;
count__37751 = G__37979;
i__37752 = G__37980;
continue;
} else {
var path = cljs.core.first(seq__37748__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37792_37981 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37795_37982 = null;
var count__37796_37983 = (0);
var i__37797_37984 = (0);
while(true){
if((i__37797_37984 < count__37796_37983)){
var node_37985 = chunk__37795_37982.cljs$core$IIndexed$_nth$arity$2(null,i__37797_37984);
var path_match_37986 = shadow.cljs.devtools.client.browser.match_paths(node_37985.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37986)){
var new_link_37987 = (function (){var G__37802 = node_37985.cloneNode(true);
G__37802.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37986),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37802;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37986], 0));

goog.dom.insertSiblingAfter(new_link_37987,node_37985);

goog.dom.removeNode(node_37985);


var G__37992 = seq__37792_37981;
var G__37993 = chunk__37795_37982;
var G__37994 = count__37796_37983;
var G__37995 = (i__37797_37984 + (1));
seq__37792_37981 = G__37992;
chunk__37795_37982 = G__37993;
count__37796_37983 = G__37994;
i__37797_37984 = G__37995;
continue;
} else {
var G__37996 = seq__37792_37981;
var G__37997 = chunk__37795_37982;
var G__37998 = count__37796_37983;
var G__37999 = (i__37797_37984 + (1));
seq__37792_37981 = G__37996;
chunk__37795_37982 = G__37997;
count__37796_37983 = G__37998;
i__37797_37984 = G__37999;
continue;
}
} else {
var temp__5720__auto___38000__$1 = cljs.core.seq(seq__37792_37981);
if(temp__5720__auto___38000__$1){
var seq__37792_38001__$1 = temp__5720__auto___38000__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37792_38001__$1)){
var c__4550__auto___38002 = cljs.core.chunk_first(seq__37792_38001__$1);
var G__38003 = cljs.core.chunk_rest(seq__37792_38001__$1);
var G__38004 = c__4550__auto___38002;
var G__38005 = cljs.core.count(c__4550__auto___38002);
var G__38006 = (0);
seq__37792_37981 = G__38003;
chunk__37795_37982 = G__38004;
count__37796_37983 = G__38005;
i__37797_37984 = G__38006;
continue;
} else {
var node_38007 = cljs.core.first(seq__37792_38001__$1);
var path_match_38008 = shadow.cljs.devtools.client.browser.match_paths(node_38007.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38008)){
var new_link_38009 = (function (){var G__37803 = node_38007.cloneNode(true);
G__37803.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38008),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37803;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38008], 0));

goog.dom.insertSiblingAfter(new_link_38009,node_38007);

goog.dom.removeNode(node_38007);


var G__38010 = cljs.core.next(seq__37792_38001__$1);
var G__38011 = null;
var G__38012 = (0);
var G__38013 = (0);
seq__37792_37981 = G__38010;
chunk__37795_37982 = G__38011;
count__37796_37983 = G__38012;
i__37797_37984 = G__38013;
continue;
} else {
var G__38014 = cljs.core.next(seq__37792_38001__$1);
var G__38015 = null;
var G__38016 = (0);
var G__38017 = (0);
seq__37792_37981 = G__38014;
chunk__37795_37982 = G__38015;
count__37796_37983 = G__38016;
i__37797_37984 = G__38017;
continue;
}
}
} else {
}
}
break;
}


var G__38018 = cljs.core.next(seq__37748__$1);
var G__38019 = null;
var G__38020 = (0);
var G__38021 = (0);
seq__37748 = G__38018;
chunk__37750 = G__38019;
count__37751 = G__38020;
i__37752 = G__38021;
continue;
} else {
var G__38022 = cljs.core.next(seq__37748__$1);
var G__38023 = null;
var G__38024 = (0);
var G__38025 = (0);
seq__37748 = G__38022;
chunk__37750 = G__38023;
count__37751 = G__38024;
i__37752 = G__38025;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37804){
var map__37805 = p__37804;
var map__37805__$1 = (((((!((map__37805 == null))))?(((((map__37805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37805):map__37805);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37805__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37805__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37805,map__37805__$1,id,js){
return (function (){
return eval(js);
});})(map__37805,map__37805__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37807){
var map__37808 = p__37807;
var map__37808__$1 = (((((!((map__37808 == null))))?(((((map__37808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37808):map__37808);
var msg = map__37808__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37808__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37808,map__37808__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37812){
var map__37813 = p__37812;
var map__37813__$1 = (((((!((map__37813 == null))))?(((((map__37813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37813):map__37813);
var src = map__37813__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37813__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37808,map__37808__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37808,map__37808__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37808,map__37808__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37815){
var map__37816 = p__37815;
var map__37816__$1 = (((((!((map__37816 == null))))?(((((map__37816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37816):map__37816);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37816__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37816__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37816,map__37816__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37816,map__37816__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37818){
var map__37819 = p__37818;
var map__37819__$1 = (((((!((map__37819 == null))))?(((((map__37819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37819):map__37819);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37821){
var map__37822 = p__37821;
var map__37822__$1 = (((((!((map__37822 == null))))?(((((map__37822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37822):map__37822);
var msg = map__37822__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37822__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37824 = type;
var G__37824__$1 = (((G__37824 instanceof cljs.core.Keyword))?G__37824.fqn:null);
switch (G__37824__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37826 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37827 = ((function (G__37826){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37826))
;
var G__37828 = "POST";
var G__37829 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37830 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37826,G__37827,G__37828,G__37829,G__37830);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37831){var e = e37831;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___38029 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___38029)){
var s_38030 = temp__5720__auto___38029;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_38030.onclose = ((function (s_38030,temp__5720__auto___38029){
return (function (e){
return null;
});})(s_38030,temp__5720__auto___38029))
;

s_38030.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

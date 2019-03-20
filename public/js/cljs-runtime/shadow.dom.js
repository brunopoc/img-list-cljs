goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35571 = coll;
var G__35572 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35571,G__35572) : shadow.dom.lazy_native_coll_seq.call(null,G__35571,G__35572));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35613 = arguments.length;
switch (G__35613) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35623 = arguments.length;
switch (G__35623) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35629 = arguments.length;
switch (G__35629) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35648 = arguments.length;
switch (G__35648) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35661 = arguments.length;
switch (G__35661) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35669 = document;
var G__35670 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35669,G__35670);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35672 = shadow.dom.dom_node(parent);
var G__35673 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35672,G__35673);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35677 = shadow.dom.dom_node(el);
var G__35678 = cls;
return goog.dom.classlist.add(G__35677,G__35678);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35681 = shadow.dom.dom_node(el);
var G__35682 = cls;
return goog.dom.classlist.remove(G__35681,G__35682);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35686 = arguments.length;
switch (G__35686) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35688 = shadow.dom.dom_node(el);
var G__35689 = cls;
return goog.dom.classlist.toggle(G__35688,G__35689);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35702){if((e35702 instanceof Object)){
var e = e35702;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35702;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35707 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35708 = null;
var count__35709 = (0);
var i__35710 = (0);
while(true){
if((i__35710 < count__35709)){
var el = chunk__35708.cljs$core$IIndexed$_nth$arity$2(null,i__35710);
var handler_36261__$1 = ((function (seq__35707,chunk__35708,count__35709,i__35710,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35707,chunk__35708,count__35709,i__35710,el))
;
var G__35719_36262 = el;
var G__35720_36263 = cljs.core.name(ev);
var G__35721_36264 = handler_36261__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35719_36262,G__35720_36263,G__35721_36264) : shadow.dom.dom_listen.call(null,G__35719_36262,G__35720_36263,G__35721_36264));


var G__36266 = seq__35707;
var G__36267 = chunk__35708;
var G__36268 = count__35709;
var G__36269 = (i__35710 + (1));
seq__35707 = G__36266;
chunk__35708 = G__36267;
count__35709 = G__36268;
i__35710 = G__36269;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35707);
if(temp__5720__auto__){
var seq__35707__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35707__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35707__$1);
var G__36271 = cljs.core.chunk_rest(seq__35707__$1);
var G__36272 = c__4550__auto__;
var G__36273 = cljs.core.count(c__4550__auto__);
var G__36274 = (0);
seq__35707 = G__36271;
chunk__35708 = G__36272;
count__35709 = G__36273;
i__35710 = G__36274;
continue;
} else {
var el = cljs.core.first(seq__35707__$1);
var handler_36275__$1 = ((function (seq__35707,chunk__35708,count__35709,i__35710,el,seq__35707__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35707,chunk__35708,count__35709,i__35710,el,seq__35707__$1,temp__5720__auto__))
;
var G__35722_36276 = el;
var G__35723_36277 = cljs.core.name(ev);
var G__35724_36278 = handler_36275__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35722_36276,G__35723_36277,G__35724_36278) : shadow.dom.dom_listen.call(null,G__35722_36276,G__35723_36277,G__35724_36278));


var G__36280 = cljs.core.next(seq__35707__$1);
var G__36281 = null;
var G__36282 = (0);
var G__36283 = (0);
seq__35707 = G__36280;
chunk__35708 = G__36281;
count__35709 = G__36282;
i__35710 = G__36283;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35726 = arguments.length;
switch (G__35726) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35731 = shadow.dom.dom_node(el);
var G__35732 = cljs.core.name(ev);
var G__35733 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35731,G__35732,G__35733) : shadow.dom.dom_listen.call(null,G__35731,G__35732,G__35733));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35734 = shadow.dom.dom_node(el);
var G__35735 = cljs.core.name(ev);
var G__35736 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35734,G__35735,G__35736) : shadow.dom.dom_listen_remove.call(null,G__35734,G__35735,G__35736));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35737 = cljs.core.seq(events);
var chunk__35738 = null;
var count__35739 = (0);
var i__35740 = (0);
while(true){
if((i__35740 < count__35739)){
var vec__35762 = chunk__35738.cljs$core$IIndexed$_nth$arity$2(null,i__35740);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36291 = seq__35737;
var G__36292 = chunk__35738;
var G__36293 = count__35739;
var G__36294 = (i__35740 + (1));
seq__35737 = G__36291;
chunk__35738 = G__36292;
count__35739 = G__36293;
i__35740 = G__36294;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35737);
if(temp__5720__auto__){
var seq__35737__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35737__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35737__$1);
var G__36297 = cljs.core.chunk_rest(seq__35737__$1);
var G__36298 = c__4550__auto__;
var G__36299 = cljs.core.count(c__4550__auto__);
var G__36300 = (0);
seq__35737 = G__36297;
chunk__35738 = G__36298;
count__35739 = G__36299;
i__35740 = G__36300;
continue;
} else {
var vec__35765 = cljs.core.first(seq__35737__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35765,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36302 = cljs.core.next(seq__35737__$1);
var G__36304 = null;
var G__36305 = (0);
var G__36306 = (0);
seq__35737 = G__36302;
chunk__35738 = G__36304;
count__35739 = G__36305;
i__35740 = G__36306;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35768 = cljs.core.seq(styles);
var chunk__35769 = null;
var count__35770 = (0);
var i__35771 = (0);
while(true){
if((i__35771 < count__35770)){
var vec__35784 = chunk__35769.cljs$core$IIndexed$_nth$arity$2(null,i__35771);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35784,(1),null);
var G__35787_36309 = dom;
var G__35788_36310 = cljs.core.name(k);
var G__35789_36311 = (((v == null))?"":v);
goog.style.setStyle(G__35787_36309,G__35788_36310,G__35789_36311);


var G__36312 = seq__35768;
var G__36313 = chunk__35769;
var G__36314 = count__35770;
var G__36315 = (i__35771 + (1));
seq__35768 = G__36312;
chunk__35769 = G__36313;
count__35770 = G__36314;
i__35771 = G__36315;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35768);
if(temp__5720__auto__){
var seq__35768__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35768__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35768__$1);
var G__36317 = cljs.core.chunk_rest(seq__35768__$1);
var G__36318 = c__4550__auto__;
var G__36319 = cljs.core.count(c__4550__auto__);
var G__36320 = (0);
seq__35768 = G__36317;
chunk__35769 = G__36318;
count__35770 = G__36319;
i__35771 = G__36320;
continue;
} else {
var vec__35790 = cljs.core.first(seq__35768__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35790,(1),null);
var G__35793_36323 = dom;
var G__35794_36324 = cljs.core.name(k);
var G__35795_36325 = (((v == null))?"":v);
goog.style.setStyle(G__35793_36323,G__35794_36324,G__35795_36325);


var G__36326 = cljs.core.next(seq__35768__$1);
var G__36327 = null;
var G__36328 = (0);
var G__36329 = (0);
seq__35768 = G__36326;
chunk__35769 = G__36327;
count__35770 = G__36328;
i__35771 = G__36329;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35796_36331 = key;
var G__35796_36332__$1 = (((G__35796_36331 instanceof cljs.core.Keyword))?G__35796_36331.fqn:null);
switch (G__35796_36332__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36336 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_36336,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_36336,"aria-");
}
})())){
el.setAttribute(ks_36336,value);
} else {
(el[ks_36336] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35797 = shadow.dom.dom_node(el);
var G__35798 = cls;
return goog.dom.classlist.contains(G__35797,G__35798);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35804){
var map__35805 = p__35804;
var map__35805__$1 = (((((!((map__35805 == null))))?(((((map__35805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35805):map__35805);
var props = map__35805__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35805__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35807 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35807,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35807,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35807,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35810 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35810,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35810;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35812 = arguments.length;
switch (G__35812) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35813){
var vec__35814 = p__35813;
var seq__35815 = cljs.core.seq(vec__35814);
var first__35816 = cljs.core.first(seq__35815);
var seq__35815__$1 = cljs.core.next(seq__35815);
var nn = first__35816;
var first__35816__$1 = cljs.core.first(seq__35815__$1);
var seq__35815__$2 = cljs.core.next(seq__35815__$1);
var np = first__35816__$1;
var nc = seq__35815__$2;
var node = vec__35814;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35817 = nn;
var G__35818 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35817,G__35818) : create_fn.call(null,G__35817,G__35818));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35820 = nn;
var G__35821 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35820,G__35821) : create_fn.call(null,G__35820,G__35821));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35824 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35824,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35824,(1),null);
var seq__35827_36354 = cljs.core.seq(node_children);
var chunk__35828_36355 = null;
var count__35829_36356 = (0);
var i__35830_36357 = (0);
while(true){
if((i__35830_36357 < count__35829_36356)){
var child_struct_36358 = chunk__35828_36355.cljs$core$IIndexed$_nth$arity$2(null,i__35830_36357);
var children_36360 = shadow.dom.dom_node(child_struct_36358);
if(cljs.core.seq_QMARK_(children_36360)){
var seq__35860_36361 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36360));
var chunk__35862_36362 = null;
var count__35863_36363 = (0);
var i__35864_36364 = (0);
while(true){
if((i__35864_36364 < count__35863_36363)){
var child_36365 = chunk__35862_36362.cljs$core$IIndexed$_nth$arity$2(null,i__35864_36364);
if(cljs.core.truth_(child_36365)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36365);


var G__36366 = seq__35860_36361;
var G__36367 = chunk__35862_36362;
var G__36368 = count__35863_36363;
var G__36369 = (i__35864_36364 + (1));
seq__35860_36361 = G__36366;
chunk__35862_36362 = G__36367;
count__35863_36363 = G__36368;
i__35864_36364 = G__36369;
continue;
} else {
var G__36370 = seq__35860_36361;
var G__36371 = chunk__35862_36362;
var G__36372 = count__35863_36363;
var G__36373 = (i__35864_36364 + (1));
seq__35860_36361 = G__36370;
chunk__35862_36362 = G__36371;
count__35863_36363 = G__36372;
i__35864_36364 = G__36373;
continue;
}
} else {
var temp__5720__auto___36374 = cljs.core.seq(seq__35860_36361);
if(temp__5720__auto___36374){
var seq__35860_36375__$1 = temp__5720__auto___36374;
if(cljs.core.chunked_seq_QMARK_(seq__35860_36375__$1)){
var c__4550__auto___36376 = cljs.core.chunk_first(seq__35860_36375__$1);
var G__36377 = cljs.core.chunk_rest(seq__35860_36375__$1);
var G__36378 = c__4550__auto___36376;
var G__36379 = cljs.core.count(c__4550__auto___36376);
var G__36380 = (0);
seq__35860_36361 = G__36377;
chunk__35862_36362 = G__36378;
count__35863_36363 = G__36379;
i__35864_36364 = G__36380;
continue;
} else {
var child_36382 = cljs.core.first(seq__35860_36375__$1);
if(cljs.core.truth_(child_36382)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36382);


var G__36383 = cljs.core.next(seq__35860_36375__$1);
var G__36384 = null;
var G__36385 = (0);
var G__36386 = (0);
seq__35860_36361 = G__36383;
chunk__35862_36362 = G__36384;
count__35863_36363 = G__36385;
i__35864_36364 = G__36386;
continue;
} else {
var G__36387 = cljs.core.next(seq__35860_36375__$1);
var G__36388 = null;
var G__36389 = (0);
var G__36390 = (0);
seq__35860_36361 = G__36387;
chunk__35862_36362 = G__36388;
count__35863_36363 = G__36389;
i__35864_36364 = G__36390;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36360);
}


var G__36392 = seq__35827_36354;
var G__36393 = chunk__35828_36355;
var G__36394 = count__35829_36356;
var G__36395 = (i__35830_36357 + (1));
seq__35827_36354 = G__36392;
chunk__35828_36355 = G__36393;
count__35829_36356 = G__36394;
i__35830_36357 = G__36395;
continue;
} else {
var temp__5720__auto___36396 = cljs.core.seq(seq__35827_36354);
if(temp__5720__auto___36396){
var seq__35827_36397__$1 = temp__5720__auto___36396;
if(cljs.core.chunked_seq_QMARK_(seq__35827_36397__$1)){
var c__4550__auto___36399 = cljs.core.chunk_first(seq__35827_36397__$1);
var G__36400 = cljs.core.chunk_rest(seq__35827_36397__$1);
var G__36401 = c__4550__auto___36399;
var G__36402 = cljs.core.count(c__4550__auto___36399);
var G__36403 = (0);
seq__35827_36354 = G__36400;
chunk__35828_36355 = G__36401;
count__35829_36356 = G__36402;
i__35830_36357 = G__36403;
continue;
} else {
var child_struct_36405 = cljs.core.first(seq__35827_36397__$1);
var children_36406 = shadow.dom.dom_node(child_struct_36405);
if(cljs.core.seq_QMARK_(children_36406)){
var seq__35878_36407 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36406));
var chunk__35880_36408 = null;
var count__35881_36409 = (0);
var i__35882_36410 = (0);
while(true){
if((i__35882_36410 < count__35881_36409)){
var child_36414 = chunk__35880_36408.cljs$core$IIndexed$_nth$arity$2(null,i__35882_36410);
if(cljs.core.truth_(child_36414)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36414);


var G__36416 = seq__35878_36407;
var G__36417 = chunk__35880_36408;
var G__36418 = count__35881_36409;
var G__36419 = (i__35882_36410 + (1));
seq__35878_36407 = G__36416;
chunk__35880_36408 = G__36417;
count__35881_36409 = G__36418;
i__35882_36410 = G__36419;
continue;
} else {
var G__36420 = seq__35878_36407;
var G__36421 = chunk__35880_36408;
var G__36422 = count__35881_36409;
var G__36423 = (i__35882_36410 + (1));
seq__35878_36407 = G__36420;
chunk__35880_36408 = G__36421;
count__35881_36409 = G__36422;
i__35882_36410 = G__36423;
continue;
}
} else {
var temp__5720__auto___36425__$1 = cljs.core.seq(seq__35878_36407);
if(temp__5720__auto___36425__$1){
var seq__35878_36426__$1 = temp__5720__auto___36425__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35878_36426__$1)){
var c__4550__auto___36427 = cljs.core.chunk_first(seq__35878_36426__$1);
var G__36428 = cljs.core.chunk_rest(seq__35878_36426__$1);
var G__36429 = c__4550__auto___36427;
var G__36430 = cljs.core.count(c__4550__auto___36427);
var G__36431 = (0);
seq__35878_36407 = G__36428;
chunk__35880_36408 = G__36429;
count__35881_36409 = G__36430;
i__35882_36410 = G__36431;
continue;
} else {
var child_36434 = cljs.core.first(seq__35878_36426__$1);
if(cljs.core.truth_(child_36434)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36434);


var G__36435 = cljs.core.next(seq__35878_36426__$1);
var G__36436 = null;
var G__36437 = (0);
var G__36438 = (0);
seq__35878_36407 = G__36435;
chunk__35880_36408 = G__36436;
count__35881_36409 = G__36437;
i__35882_36410 = G__36438;
continue;
} else {
var G__36439 = cljs.core.next(seq__35878_36426__$1);
var G__36440 = null;
var G__36441 = (0);
var G__36442 = (0);
seq__35878_36407 = G__36439;
chunk__35880_36408 = G__36440;
count__35881_36409 = G__36441;
i__35882_36410 = G__36442;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36406);
}


var G__36443 = cljs.core.next(seq__35827_36397__$1);
var G__36444 = null;
var G__36445 = (0);
var G__36446 = (0);
seq__35827_36354 = G__36443;
chunk__35828_36355 = G__36444;
count__35829_36356 = G__36445;
i__35830_36357 = G__36446;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35899 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35899);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35904 = cljs.core.seq(node);
var chunk__35905 = null;
var count__35906 = (0);
var i__35907 = (0);
while(true){
if((i__35907 < count__35906)){
var n = chunk__35905.cljs$core$IIndexed$_nth$arity$2(null,i__35907);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36451 = seq__35904;
var G__36452 = chunk__35905;
var G__36453 = count__35906;
var G__36454 = (i__35907 + (1));
seq__35904 = G__36451;
chunk__35905 = G__36452;
count__35906 = G__36453;
i__35907 = G__36454;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35904);
if(temp__5720__auto__){
var seq__35904__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35904__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35904__$1);
var G__36457 = cljs.core.chunk_rest(seq__35904__$1);
var G__36458 = c__4550__auto__;
var G__36459 = cljs.core.count(c__4550__auto__);
var G__36460 = (0);
seq__35904 = G__36457;
chunk__35905 = G__36458;
count__35906 = G__36459;
i__35907 = G__36460;
continue;
} else {
var n = cljs.core.first(seq__35904__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36462 = cljs.core.next(seq__35904__$1);
var G__36463 = null;
var G__36464 = (0);
var G__36465 = (0);
seq__35904 = G__36462;
chunk__35905 = G__36463;
count__35906 = G__36464;
i__35907 = G__36465;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35911 = shadow.dom.dom_node(new$);
var G__35912 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35911,G__35912);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35914 = arguments.length;
switch (G__35914) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35916 = arguments.length;
switch (G__35916) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35924 = arguments.length;
switch (G__35924) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36481 = arguments.length;
var i__4731__auto___36482 = (0);
while(true){
if((i__4731__auto___36482 < len__4730__auto___36481)){
args__4736__auto__.push((arguments[i__4731__auto___36482]));

var G__36485 = (i__4731__auto___36482 + (1));
i__4731__auto___36482 = G__36485;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35926_36486 = cljs.core.seq(nodes);
var chunk__35927_36487 = null;
var count__35928_36488 = (0);
var i__35929_36489 = (0);
while(true){
if((i__35929_36489 < count__35928_36488)){
var node_36490 = chunk__35927_36487.cljs$core$IIndexed$_nth$arity$2(null,i__35929_36489);
fragment.appendChild(shadow.dom._to_dom(node_36490));


var G__36491 = seq__35926_36486;
var G__36492 = chunk__35927_36487;
var G__36493 = count__35928_36488;
var G__36494 = (i__35929_36489 + (1));
seq__35926_36486 = G__36491;
chunk__35927_36487 = G__36492;
count__35928_36488 = G__36493;
i__35929_36489 = G__36494;
continue;
} else {
var temp__5720__auto___36496 = cljs.core.seq(seq__35926_36486);
if(temp__5720__auto___36496){
var seq__35926_36497__$1 = temp__5720__auto___36496;
if(cljs.core.chunked_seq_QMARK_(seq__35926_36497__$1)){
var c__4550__auto___36499 = cljs.core.chunk_first(seq__35926_36497__$1);
var G__36501 = cljs.core.chunk_rest(seq__35926_36497__$1);
var G__36502 = c__4550__auto___36499;
var G__36503 = cljs.core.count(c__4550__auto___36499);
var G__36504 = (0);
seq__35926_36486 = G__36501;
chunk__35927_36487 = G__36502;
count__35928_36488 = G__36503;
i__35929_36489 = G__36504;
continue;
} else {
var node_36505 = cljs.core.first(seq__35926_36497__$1);
fragment.appendChild(shadow.dom._to_dom(node_36505));


var G__36506 = cljs.core.next(seq__35926_36497__$1);
var G__36507 = null;
var G__36508 = (0);
var G__36509 = (0);
seq__35926_36486 = G__36506;
chunk__35927_36487 = G__36507;
count__35928_36488 = G__36508;
i__35929_36489 = G__36509;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35925){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35925));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35930_36511 = cljs.core.seq(scripts);
var chunk__35931_36512 = null;
var count__35932_36513 = (0);
var i__35933_36514 = (0);
while(true){
if((i__35933_36514 < count__35932_36513)){
var vec__35940_36517 = chunk__35931_36512.cljs$core$IIndexed$_nth$arity$2(null,i__35933_36514);
var script_tag_36518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35940_36517,(0),null);
var script_body_36519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35940_36517,(1),null);
eval(script_body_36519);


var G__36521 = seq__35930_36511;
var G__36522 = chunk__35931_36512;
var G__36523 = count__35932_36513;
var G__36524 = (i__35933_36514 + (1));
seq__35930_36511 = G__36521;
chunk__35931_36512 = G__36522;
count__35932_36513 = G__36523;
i__35933_36514 = G__36524;
continue;
} else {
var temp__5720__auto___36526 = cljs.core.seq(seq__35930_36511);
if(temp__5720__auto___36526){
var seq__35930_36527__$1 = temp__5720__auto___36526;
if(cljs.core.chunked_seq_QMARK_(seq__35930_36527__$1)){
var c__4550__auto___36528 = cljs.core.chunk_first(seq__35930_36527__$1);
var G__36529 = cljs.core.chunk_rest(seq__35930_36527__$1);
var G__36530 = c__4550__auto___36528;
var G__36531 = cljs.core.count(c__4550__auto___36528);
var G__36532 = (0);
seq__35930_36511 = G__36529;
chunk__35931_36512 = G__36530;
count__35932_36513 = G__36531;
i__35933_36514 = G__36532;
continue;
} else {
var vec__35943_36533 = cljs.core.first(seq__35930_36527__$1);
var script_tag_36534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943_36533,(0),null);
var script_body_36535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35943_36533,(1),null);
eval(script_body_36535);


var G__36537 = cljs.core.next(seq__35930_36527__$1);
var G__36538 = null;
var G__36539 = (0);
var G__36540 = (0);
seq__35930_36511 = G__36537;
chunk__35931_36512 = G__36538;
count__35932_36513 = G__36539;
i__35933_36514 = G__36540;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35946){
var vec__35947 = p__35946;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35954 = shadow.dom.dom_node(el);
var G__35955 = cls;
return goog.dom.getAncestorByClass(G__35954,G__35955);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35961 = arguments.length;
switch (G__35961) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35966 = shadow.dom.dom_node(el);
var G__35967 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35966,G__35967);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35968 = shadow.dom.dom_node(el);
var G__35969 = cljs.core.name(tag);
var G__35970 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35968,G__35969,G__35970);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35973 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35973);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35974 = shadow.dom.dom_node(dom);
var G__35975 = value;
return goog.dom.forms.setValue(G__35974,G__35975);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35983 = cljs.core.seq(style_keys);
var chunk__35984 = null;
var count__35985 = (0);
var i__35986 = (0);
while(true){
if((i__35986 < count__35985)){
var it = chunk__35984.cljs$core$IIndexed$_nth$arity$2(null,i__35986);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36547 = seq__35983;
var G__36548 = chunk__35984;
var G__36549 = count__35985;
var G__36550 = (i__35986 + (1));
seq__35983 = G__36547;
chunk__35984 = G__36548;
count__35985 = G__36549;
i__35986 = G__36550;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35983);
if(temp__5720__auto__){
var seq__35983__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35983__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35983__$1);
var G__36551 = cljs.core.chunk_rest(seq__35983__$1);
var G__36552 = c__4550__auto__;
var G__36553 = cljs.core.count(c__4550__auto__);
var G__36554 = (0);
seq__35983 = G__36551;
chunk__35984 = G__36552;
count__35985 = G__36553;
i__35986 = G__36554;
continue;
} else {
var it = cljs.core.first(seq__35983__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36555 = cljs.core.next(seq__35983__$1);
var G__36556 = null;
var G__36557 = (0);
var G__36558 = (0);
seq__35983 = G__36555;
chunk__35984 = G__36556;
count__35985 = G__36557;
i__35986 = G__36558;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35994,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__36007 = k35994;
var G__36007__$1 = (((G__36007 instanceof cljs.core.Keyword))?G__36007.fqn:null);
switch (G__36007__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35994,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__36011){
var vec__36013 = p__36011;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36013,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35993){
var self__ = this;
var G__35993__$1 = this;
return (new cljs.core.RecordIter((0),G__35993__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__36022 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__36022(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35995,other35996){
var self__ = this;
var this35995__$1 = this;
return (((!((other35996 == null)))) && ((this35995__$1.constructor === other35996.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35995__$1.x,other35996.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35995__$1.y,other35996.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35995__$1.__extmap,other35996.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35993){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__36026 = cljs.core.keyword_identical_QMARK_;
var expr__36027 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__36029 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__36030 = expr__36027;
return (pred__36026.cljs$core$IFn$_invoke$arity$2 ? pred__36026.cljs$core$IFn$_invoke$arity$2(G__36029,G__36030) : pred__36026.call(null,G__36029,G__36030));
})())){
return (new shadow.dom.Coordinate(G__35993,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36031 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__36032 = expr__36027;
return (pred__36026.cljs$core$IFn$_invoke$arity$2 ? pred__36026.cljs$core$IFn$_invoke$arity$2(G__36031,G__36032) : pred__36026.call(null,G__36031,G__36032));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35993,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35993),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35993){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35993,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35999){
var extmap__4424__auto__ = (function (){var G__36033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35999,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35999)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36033);
} else {
return G__36033;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35999),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35999),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__36035 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__36035);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__36036 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__36036);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__36037 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__36037);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k36040,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__36044 = k36040;
var G__36044__$1 = (((G__36044 instanceof cljs.core.Keyword))?G__36044.fqn:null);
switch (G__36044__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36040,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__36045){
var vec__36046 = p__36045;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36046,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36039){
var self__ = this;
var G__36039__$1 = this;
return (new cljs.core.RecordIter((0),G__36039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__36049 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__36049(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36041,other36042){
var self__ = this;
var this36041__$1 = this;
return (((!((other36042 == null)))) && ((this36041__$1.constructor === other36042.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36041__$1.w,other36042.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36041__$1.h,other36042.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36041__$1.__extmap,other36042.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__36039){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__36054 = cljs.core.keyword_identical_QMARK_;
var expr__36055 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__36057 = new cljs.core.Keyword(null,"w","w",354169001);
var G__36058 = expr__36055;
return (pred__36054.cljs$core$IFn$_invoke$arity$2 ? pred__36054.cljs$core$IFn$_invoke$arity$2(G__36057,G__36058) : pred__36054.call(null,G__36057,G__36058));
})())){
return (new shadow.dom.Size(G__36039,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36060 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__36061 = expr__36055;
return (pred__36054.cljs$core$IFn$_invoke$arity$2 ? pred__36054.cljs$core$IFn$_invoke$arity$2(G__36060,G__36061) : pred__36054.call(null,G__36060,G__36061));
})())){
return (new shadow.dom.Size(self__.w,G__36039,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__36039),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__36039){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36039,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36043){
var extmap__4424__auto__ = (function (){var G__36070 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36043,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36043)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36070);
} else {
return G__36070;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36043),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36043),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__36074 = shadow.dom.dom_node(el);
return goog.style.getSize(G__36074);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36575 = (i + (1));
var G__36576 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36575;
ret = G__36576;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36088){
var vec__36089 = p__36088;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36089,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36095 = arguments.length;
switch (G__36095) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36101_36578 = new_node;
var G__36102_36579 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__36101_36578,G__36102_36579);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36103_36583 = new_node;
var G__36104_36584 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__36103_36583,G__36104_36584);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36585 = ps;
var G__36586 = (i + (1));
el__$1 = G__36585;
i = G__36586;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__36107 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__36107);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__36115 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__36115);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__36117 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__36117);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36121 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36121,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36121,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36121,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36124_36587 = cljs.core.seq(props);
var chunk__36125_36588 = null;
var count__36126_36589 = (0);
var i__36127_36590 = (0);
while(true){
if((i__36127_36590 < count__36126_36589)){
var vec__36137_36591 = chunk__36125_36588.cljs$core$IIndexed$_nth$arity$2(null,i__36127_36590);
var k_36592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137_36591,(0),null);
var v_36593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36137_36591,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_36592);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36592),v_36593);


var G__36594 = seq__36124_36587;
var G__36595 = chunk__36125_36588;
var G__36596 = count__36126_36589;
var G__36597 = (i__36127_36590 + (1));
seq__36124_36587 = G__36594;
chunk__36125_36588 = G__36595;
count__36126_36589 = G__36596;
i__36127_36590 = G__36597;
continue;
} else {
var temp__5720__auto___36598 = cljs.core.seq(seq__36124_36587);
if(temp__5720__auto___36598){
var seq__36124_36599__$1 = temp__5720__auto___36598;
if(cljs.core.chunked_seq_QMARK_(seq__36124_36599__$1)){
var c__4550__auto___36600 = cljs.core.chunk_first(seq__36124_36599__$1);
var G__36601 = cljs.core.chunk_rest(seq__36124_36599__$1);
var G__36602 = c__4550__auto___36600;
var G__36603 = cljs.core.count(c__4550__auto___36600);
var G__36604 = (0);
seq__36124_36587 = G__36601;
chunk__36125_36588 = G__36602;
count__36126_36589 = G__36603;
i__36127_36590 = G__36604;
continue;
} else {
var vec__36142_36605 = cljs.core.first(seq__36124_36599__$1);
var k_36606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142_36605,(0),null);
var v_36607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142_36605,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_36606);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36606),v_36607);


var G__36608 = cljs.core.next(seq__36124_36599__$1);
var G__36609 = null;
var G__36610 = (0);
var G__36611 = (0);
seq__36124_36587 = G__36608;
chunk__36125_36588 = G__36609;
count__36126_36589 = G__36610;
i__36127_36590 = G__36611;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36150 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36150,(1),null);
var seq__36153_36612 = cljs.core.seq(node_children);
var chunk__36155_36613 = null;
var count__36156_36614 = (0);
var i__36157_36615 = (0);
while(true){
if((i__36157_36615 < count__36156_36614)){
var child_struct_36616 = chunk__36155_36613.cljs$core$IIndexed$_nth$arity$2(null,i__36157_36615);
if((!((child_struct_36616 == null)))){
if(typeof child_struct_36616 === 'string'){
var text_36620 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36620),child_struct_36616].join(''));
} else {
var children_36621 = shadow.dom.svg_node(child_struct_36616);
if(cljs.core.seq_QMARK_(children_36621)){
var seq__36184_36622 = cljs.core.seq(children_36621);
var chunk__36186_36623 = null;
var count__36187_36624 = (0);
var i__36188_36625 = (0);
while(true){
if((i__36188_36625 < count__36187_36624)){
var child_36626 = chunk__36186_36623.cljs$core$IIndexed$_nth$arity$2(null,i__36188_36625);
if(cljs.core.truth_(child_36626)){
node.appendChild(child_36626);


var G__36627 = seq__36184_36622;
var G__36628 = chunk__36186_36623;
var G__36629 = count__36187_36624;
var G__36630 = (i__36188_36625 + (1));
seq__36184_36622 = G__36627;
chunk__36186_36623 = G__36628;
count__36187_36624 = G__36629;
i__36188_36625 = G__36630;
continue;
} else {
var G__36631 = seq__36184_36622;
var G__36632 = chunk__36186_36623;
var G__36633 = count__36187_36624;
var G__36634 = (i__36188_36625 + (1));
seq__36184_36622 = G__36631;
chunk__36186_36623 = G__36632;
count__36187_36624 = G__36633;
i__36188_36625 = G__36634;
continue;
}
} else {
var temp__5720__auto___36635 = cljs.core.seq(seq__36184_36622);
if(temp__5720__auto___36635){
var seq__36184_36636__$1 = temp__5720__auto___36635;
if(cljs.core.chunked_seq_QMARK_(seq__36184_36636__$1)){
var c__4550__auto___36637 = cljs.core.chunk_first(seq__36184_36636__$1);
var G__36638 = cljs.core.chunk_rest(seq__36184_36636__$1);
var G__36639 = c__4550__auto___36637;
var G__36640 = cljs.core.count(c__4550__auto___36637);
var G__36641 = (0);
seq__36184_36622 = G__36638;
chunk__36186_36623 = G__36639;
count__36187_36624 = G__36640;
i__36188_36625 = G__36641;
continue;
} else {
var child_36642 = cljs.core.first(seq__36184_36636__$1);
if(cljs.core.truth_(child_36642)){
node.appendChild(child_36642);


var G__36643 = cljs.core.next(seq__36184_36636__$1);
var G__36644 = null;
var G__36645 = (0);
var G__36646 = (0);
seq__36184_36622 = G__36643;
chunk__36186_36623 = G__36644;
count__36187_36624 = G__36645;
i__36188_36625 = G__36646;
continue;
} else {
var G__36647 = cljs.core.next(seq__36184_36636__$1);
var G__36648 = null;
var G__36649 = (0);
var G__36650 = (0);
seq__36184_36622 = G__36647;
chunk__36186_36623 = G__36648;
count__36187_36624 = G__36649;
i__36188_36625 = G__36650;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36621);
}
}


var G__36651 = seq__36153_36612;
var G__36652 = chunk__36155_36613;
var G__36653 = count__36156_36614;
var G__36654 = (i__36157_36615 + (1));
seq__36153_36612 = G__36651;
chunk__36155_36613 = G__36652;
count__36156_36614 = G__36653;
i__36157_36615 = G__36654;
continue;
} else {
var G__36655 = seq__36153_36612;
var G__36656 = chunk__36155_36613;
var G__36657 = count__36156_36614;
var G__36658 = (i__36157_36615 + (1));
seq__36153_36612 = G__36655;
chunk__36155_36613 = G__36656;
count__36156_36614 = G__36657;
i__36157_36615 = G__36658;
continue;
}
} else {
var temp__5720__auto___36659 = cljs.core.seq(seq__36153_36612);
if(temp__5720__auto___36659){
var seq__36153_36663__$1 = temp__5720__auto___36659;
if(cljs.core.chunked_seq_QMARK_(seq__36153_36663__$1)){
var c__4550__auto___36664 = cljs.core.chunk_first(seq__36153_36663__$1);
var G__36665 = cljs.core.chunk_rest(seq__36153_36663__$1);
var G__36666 = c__4550__auto___36664;
var G__36667 = cljs.core.count(c__4550__auto___36664);
var G__36668 = (0);
seq__36153_36612 = G__36665;
chunk__36155_36613 = G__36666;
count__36156_36614 = G__36667;
i__36157_36615 = G__36668;
continue;
} else {
var child_struct_36669 = cljs.core.first(seq__36153_36663__$1);
if((!((child_struct_36669 == null)))){
if(typeof child_struct_36669 === 'string'){
var text_36670 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36670),child_struct_36669].join(''));
} else {
var children_36671 = shadow.dom.svg_node(child_struct_36669);
if(cljs.core.seq_QMARK_(children_36671)){
var seq__36197_36672 = cljs.core.seq(children_36671);
var chunk__36199_36673 = null;
var count__36200_36674 = (0);
var i__36201_36675 = (0);
while(true){
if((i__36201_36675 < count__36200_36674)){
var child_36676 = chunk__36199_36673.cljs$core$IIndexed$_nth$arity$2(null,i__36201_36675);
if(cljs.core.truth_(child_36676)){
node.appendChild(child_36676);


var G__36677 = seq__36197_36672;
var G__36678 = chunk__36199_36673;
var G__36679 = count__36200_36674;
var G__36680 = (i__36201_36675 + (1));
seq__36197_36672 = G__36677;
chunk__36199_36673 = G__36678;
count__36200_36674 = G__36679;
i__36201_36675 = G__36680;
continue;
} else {
var G__36681 = seq__36197_36672;
var G__36682 = chunk__36199_36673;
var G__36683 = count__36200_36674;
var G__36684 = (i__36201_36675 + (1));
seq__36197_36672 = G__36681;
chunk__36199_36673 = G__36682;
count__36200_36674 = G__36683;
i__36201_36675 = G__36684;
continue;
}
} else {
var temp__5720__auto___36685__$1 = cljs.core.seq(seq__36197_36672);
if(temp__5720__auto___36685__$1){
var seq__36197_36686__$1 = temp__5720__auto___36685__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36197_36686__$1)){
var c__4550__auto___36687 = cljs.core.chunk_first(seq__36197_36686__$1);
var G__36688 = cljs.core.chunk_rest(seq__36197_36686__$1);
var G__36689 = c__4550__auto___36687;
var G__36690 = cljs.core.count(c__4550__auto___36687);
var G__36691 = (0);
seq__36197_36672 = G__36688;
chunk__36199_36673 = G__36689;
count__36200_36674 = G__36690;
i__36201_36675 = G__36691;
continue;
} else {
var child_36692 = cljs.core.first(seq__36197_36686__$1);
if(cljs.core.truth_(child_36692)){
node.appendChild(child_36692);


var G__36693 = cljs.core.next(seq__36197_36686__$1);
var G__36694 = null;
var G__36695 = (0);
var G__36696 = (0);
seq__36197_36672 = G__36693;
chunk__36199_36673 = G__36694;
count__36200_36674 = G__36695;
i__36201_36675 = G__36696;
continue;
} else {
var G__36697 = cljs.core.next(seq__36197_36686__$1);
var G__36698 = null;
var G__36699 = (0);
var G__36700 = (0);
seq__36197_36672 = G__36697;
chunk__36199_36673 = G__36698;
count__36200_36674 = G__36699;
i__36201_36675 = G__36700;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36671);
}
}


var G__36701 = cljs.core.next(seq__36153_36663__$1);
var G__36702 = null;
var G__36703 = (0);
var G__36704 = (0);
seq__36153_36612 = G__36701;
chunk__36155_36613 = G__36702;
count__36156_36614 = G__36703;
i__36157_36615 = G__36704;
continue;
} else {
var G__36705 = cljs.core.next(seq__36153_36663__$1);
var G__36706 = null;
var G__36707 = (0);
var G__36708 = (0);
seq__36153_36612 = G__36705;
chunk__36155_36613 = G__36706;
count__36156_36614 = G__36707;
i__36157_36615 = G__36708;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__36209_36709 = shadow.dom._to_svg;
var G__36210_36710 = "string";
var G__36211_36711 = ((function (G__36209_36709,G__36210_36710){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__36209_36709,G__36210_36710))
;
goog.object.set(G__36209_36709,G__36210_36710,G__36211_36711);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__36212_36712 = shadow.dom._to_svg;
var G__36213_36713 = "null";
var G__36214_36714 = ((function (G__36212_36712,G__36213_36713){
return (function (_){
return null;
});})(G__36212_36712,G__36213_36713))
;
goog.object.set(G__36212_36712,G__36213_36713,G__36214_36714);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36715 = arguments.length;
var i__4731__auto___36716 = (0);
while(true){
if((i__4731__auto___36716 < len__4730__auto___36715)){
args__4736__auto__.push((arguments[i__4731__auto___36716]));

var G__36717 = (i__4731__auto___36716 + (1));
i__4731__auto___36716 = G__36717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq36215){
var G__36216 = cljs.core.first(seq36215);
var seq36215__$1 = cljs.core.next(seq36215);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36216,seq36215__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36218 = arguments.length;
switch (G__36218) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__36219_36719 = shadow.dom.dom_node(el);
var G__36220_36720 = cljs.core.name(event);
var G__36221_36721 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36219_36719,G__36220_36720,G__36221_36721) : shadow.dom.dom_listen.call(null,G__36219_36719,G__36220_36720,G__36221_36721));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33942__auto___36722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33942__auto___36722,buf,chan,event_fn){
return (function (){
var f__33943__auto__ = (function (){var switch__33865__auto__ = ((function (c__33942__auto___36722,buf,chan,event_fn){
return (function (state_36226){
var state_val_36227 = (state_36226[(1)]);
if((state_val_36227 === (1))){
var state_36226__$1 = state_36226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36226__$1,(2),once_or_cleanup);
} else {
if((state_val_36227 === (2))){
var inst_36223 = (state_36226[(2)]);
var inst_36224 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36226__$1 = (function (){var statearr_36228 = state_36226;
(statearr_36228[(7)] = inst_36223);

return statearr_36228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36226__$1,inst_36224);
} else {
return null;
}
}
});})(c__33942__auto___36722,buf,chan,event_fn))
;
return ((function (switch__33865__auto__,c__33942__auto___36722,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33866__auto__ = null;
var shadow$dom$state_machine__33866__auto____0 = (function (){
var statearr_36229 = [null,null,null,null,null,null,null,null];
(statearr_36229[(0)] = shadow$dom$state_machine__33866__auto__);

(statearr_36229[(1)] = (1));

return statearr_36229;
});
var shadow$dom$state_machine__33866__auto____1 = (function (state_36226){
while(true){
var ret_value__33867__auto__ = (function (){try{while(true){
var result__33868__auto__ = switch__33865__auto__(state_36226);
if(cljs.core.keyword_identical_QMARK_(result__33868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33868__auto__;
}
break;
}
}catch (e36230){if((e36230 instanceof Object)){
var ex__33869__auto__ = e36230;
var statearr_36231_36723 = state_36226;
(statearr_36231_36723[(5)] = ex__33869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36724 = state_36226;
state_36226 = G__36724;
continue;
} else {
return ret_value__33867__auto__;
}
break;
}
});
shadow$dom$state_machine__33866__auto__ = function(state_36226){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33866__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33866__auto____1.call(this,state_36226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33866__auto____0;
shadow$dom$state_machine__33866__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33866__auto____1;
return shadow$dom$state_machine__33866__auto__;
})()
;})(switch__33865__auto__,c__33942__auto___36722,buf,chan,event_fn))
})();
var state__33944__auto__ = (function (){var statearr_36232 = (f__33943__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33943__auto__.cljs$core$IFn$_invoke$arity$0() : f__33943__auto__.call(null));
(statearr_36232[(6)] = c__33942__auto___36722);

return statearr_36232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33944__auto__);
});})(c__33942__auto___36722,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map

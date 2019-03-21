goog.provide('pokemon.events');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('re_frame.core');
goog.require('reagent.core');
var G__36132_36165 = new cljs.core.Keyword(null,"get-list-todo","get-list-todo",1892609418);
var G__36133_36166 = ((function (G__36132_36165){
return (function (db){
return new cljs.core.Keyword(null,"list-todo","list-todo",-1299494785).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36132_36165))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36132_36165,G__36133_36166) : re_frame.core.reg_sub.call(null,G__36132_36165,G__36133_36166));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),(function (db,p__36134){
var vec__36135 = p__36134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"list-todo","list-todo",-1299494785),cljs.core.conj,item);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-todo","remove-todo",-1330305330),(function (db,p__36139){
var vec__36140 = p__36139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36140,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36140,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"list-todo","list-todo",-1299494785),((function (vec__36140,_,item){
return (function (old_list){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__36140,_,item){
return (function (p1__36138_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__36138_SHARP_);
});})(vec__36140,_,item))
,old_list);
});})(vec__36140,_,item))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-input-todo-list","show-input-todo-list",905450280),(function (db,p__36143){
var vec__36144 = p__36143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"list-todo","list-todo",-1299494785),((function (vec__36144,_,item){
return (function (old_list){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__36144,_,item){
return (function (old_item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"input","input",556931961),true,new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(old_item)], null);
} else {
return old_item;
}
});})(vec__36144,_,item))
,old_list);
});})(vec__36144,_,item))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"todo-done","todo-done",-1826677776),(function (db,p__36147){
var vec__36148 = p__36147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"list-todo","list-todo",-1299494785),((function (vec__36148,_,item){
return (function (old_list){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__36148,_,item){
return (function (old_item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.not(new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(item))], null);
} else {
return old_item;
}
});})(vec__36148,_,item))
,old_list);
});})(vec__36148,_,item))
);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"edit-item-list","edit-item-list",-1079132993),(function (db,p__36151){
var vec__36152 = p__36151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(1),null);
var newvalue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(2),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"list-todo","list-todo",-1299494785),((function (vec__36152,_,item,newvalue){
return (function (old_list){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__36152,_,item,newvalue){
return (function (old_item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(old_item),new cljs.core.Keyword(null,"value","value",305978217),newvalue,new cljs.core.Keyword(null,"input","input",556931961),false,new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(old_item)], null);
} else {
return old_item;
}
});})(vec__36152,_,item,newvalue))
,old_list);
});})(vec__36152,_,item,newvalue))
);
}));
var G__36155_36167 = new cljs.core.Keyword(null,"fetch","fetch",-1081994244);
var G__36156_36168 = ((function (G__36155_36167){
return (function (p__36157){
var map__36158 = p__36157;
var map__36158__$1 = (((((!((map__36158 == null))))?(((((map__36158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36158):map__36158);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var body = JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),variables], null)));
var on_unexpected_error = ((function (body,map__36158,map__36158__$1,query,variables,on_error,on_success,G__36155_36167){
return (function (e){
var G__36160 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,e);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36160) : re_frame.core.dispatch.call(null,G__36160));
});})(body,map__36158,map__36158__$1,query,variables,on_error,on_success,G__36155_36167))
;
var on_reponse = ((function (body,on_unexpected_error,map__36158,map__36158__$1,query,variables,on_error,on_success,G__36155_36167){
return (function (response){
if(cljs.core.not(response.ok)){
throw Error(response.statusText);
} else {
return response.json();
}
});})(body,on_unexpected_error,map__36158,map__36158__$1,query,variables,on_error,on_success,G__36155_36167))
;
var on_json = ((function (body,on_unexpected_error,on_reponse,map__36158,map__36158__$1,query,variables,on_error,on_success,G__36155_36167){
return (function (json){
var map__36161 = clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(json));
var map__36161__$1 = (((((!((map__36161 == null))))?(((((map__36161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36161):map__36161);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36161__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36161__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
if(cljs.core.truth_(errors)){
var G__36163 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_error,errors);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36163) : re_frame.core.dispatch.call(null,G__36163));
} else {
var G__36164 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,data);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36164) : re_frame.core.dispatch.call(null,G__36164));
}
});})(body,on_unexpected_error,on_reponse,map__36158,map__36158__$1,query,variables,on_error,on_success,G__36155_36167))
;
return fetch("https://graphql-pokemon.now.sh/",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),body], null))).then(on_reponse).then(on_json).catch(on_unexpected_error);
});})(G__36155_36167))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__36155_36167,G__36156_36168) : re_frame.core.reg_fx.call(null,G__36155_36167,G__36156_36168));
pokemon.events.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-name","app-name",-268811251),"Xerpa"], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),pokemon.events.default_db], null);
}));

//# sourceMappingURL=pokemon.events.js.map

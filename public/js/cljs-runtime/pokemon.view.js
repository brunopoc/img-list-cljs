goog.provide('pokemon.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('clojure.walk');
pokemon.view.list_todo = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
pokemon.view.add_item_list = (function pokemon$view$add_item_list(item){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref((function (){var G__35772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-list-todo","get-list-todo",1892609418)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__35772) : re_frame.core.subscribe.call(null,G__35772));
})())], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pokemon.view.list_todo,cljs.core.conj,item);

var G__35773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),item], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__35773) : re_frame.core.dispatch.call(null,G__35773));
});
pokemon.view.handle_on_key_press = (function pokemon$view$handle_on_key_press(event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",event.key)){
return pokemon.view.add_item_list(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),Date(),new cljs.core.Keyword(null,"value","value",305978217),event.target.value,new cljs.core.Keyword(null,"input","input",556931961),false,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
} else {
return null;
}
});
pokemon.view.remove_item_list = (function pokemon$view$remove_item_list(item){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pokemon.view.list_todo,(function (old_list){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35774_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__35774_SHARP_);
}),old_list);
}));

var G__35775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-todo","remove-todo",-1330305330),item], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__35775) : re_frame.core.dispatch.call(null,G__35775));
});
pokemon.view.show_input_item_list = (function pokemon$view$show_input_item_list(item){
var G__35776 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-input-todo-list","show-input-todo-list",905450280),item], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__35776) : re_frame.core.dispatch.call(null,G__35776));
});
pokemon.view.edit_item_list = (function pokemon$view$edit_item_list(e,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
var G__35777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-item-list","edit-item-list",-1079132993),item,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__35777) : re_frame.core.dispatch.call(null,G__35777));
} else {
return null;
}
});
pokemon.view.todo_done = (function pokemon$view$todo_done(e,item){
var G__35778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-done","todo-done",-1826677776),item], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__35778) : re_frame.core.dispatch.call(null,G__35778));
});
pokemon.view.list_items = (function pokemon$view$list_items(item_map){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693)," 10px 5px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item_map)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(item_map) === false)?((new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(item_map) === false)?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item_map):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item_map)], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item_map),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__35779_SHARP_){
return pokemon.view.edit_item_list(p1__35779_SHARP_,item_map);
})], null)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Feito",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35780_SHARP_){
return pokemon.view.todo_done(p1__35780_SHARP_,item_map);
}),new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),((new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(item_map) === false)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#033EA4",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"border","border",1444987323),"unset"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return pokemon.view.show_input_item_list(item_map);
})], null),"Editar"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#90A1BE",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"border","border",1444987323),"unset"], null)], null),"Editar"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return pokemon.view.remove_item_list(item_map);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#B00000",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"border","border",1444987323),"unset"], null)], null),"Delete"], null)], null)], null);
});
pokemon.view.show = (function pokemon$view$show(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"50px",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Lista de Tarefas"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Digite sua tarefa e aperte enter!",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"unset"], null),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),pokemon.view.handle_on_key_press], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F3F3F3",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 20px"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pokemon.view.list_items,cljs.core.deref((function (){var G__35781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-list-todo","get-list-todo",1892609418)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__35781) : re_frame.core.subscribe.call(null,G__35781));
})()))], null)], null);
});

//# sourceMappingURL=pokemon.view.js.map

goog.provide('pokemon.view');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('pokemon.queries');
pokemon.view.pokemon_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
pokemon.view.result = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
pokemon.view.handle_response = (function pokemon$view$handle_response(response){
return response.json();
});
pokemon.view.pokemon_fetch = (function pokemon$view$pokemon_fetch(variable,query){
return fetch("https://graphql-pokemon.now.sh/",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"variables","variables",1563680814),variable], null)))], null))).then(pokemon.view.handle_response).then((function (response){
return cljs.core.reset_BANG_(pokemon.view.result,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(response))));
}));
});
pokemon.view.load_pkm_list = (function pokemon$view$load_pkm_list(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pokemon.view.pokemon_count,(function (p1__36468_SHARP_){
return (p1__36468_SHARP_ + (5));
}));

return pokemon.view.pokemon_fetch(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first","first",-644103046),cljs.core.deref(pokemon.view.pokemon_count)], null),pokemon.queries.pokemons).then((function (value){
var G__36469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-pkm-list","save-pkm-list",-1062983624),new cljs.core.Keyword(null,"pokemons","pokemons",782400546).cljs$core$IFn$_invoke$arity$1(value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36469) : re_frame.core.dispatch.call(null,G__36469));
}));
});
pokemon.view.load_pkm = (function pokemon$view$load_pkm(name){
return pokemon.view.pokemon_fetch(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),pokemon.queries.pokemon).then((function (value){
var G__36470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-pkm","save-pkm",364084970),new cljs.core.Keyword(null,"pokemon","pokemon",1065917705).cljs$core$IFn$_invoke$arity$1(value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36470) : re_frame.core.dispatch.call(null,G__36470));
}));
});
pokemon.view.load_pkm_list();
pokemon.view.load_pkm("Bulbasaur");
pokemon.view.pokemon_info = (function pokemon$view$pokemon_info(mypokemon){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.name","div.name",1027675228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#F4F4F4",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(mypokemon)," #",new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(mypokemon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.br3","img.br3",-1688498134),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(mypokemon)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pkmtype","div.pkmtype",168271938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#F4F4F4",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(function (){var iter__4523__auto__ = (function pokemon$view$pokemon_info_$_iter__36471(s__36472){
return (new cljs.core.LazySeq(null,(function (){
var s__36472__$1 = s__36472;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36472__$1);
if(temp__5720__auto__){
var s__36472__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36472__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36472__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36474 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36473 = (0);
while(true){
if((i__36473 < size__4522__auto__)){
var types = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36473);
cljs.core.chunk_append(b__36474,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," "].join(''));

var G__36482 = (i__36473 + (1));
i__36473 = G__36482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36474),pokemon$view$pokemon_info_$_iter__36471(cljs.core.chunk_rest(s__36472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36474),null);
}
} else {
var types = cljs.core.first(s__36472__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(types)," "].join(''),pokemon$view$pokemon_info_$_iter__36471(cljs.core.rest(s__36472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(mypokemon));
})()], null)], null);
});
pokemon.view.pokemon_list_render = (function pokemon$view$pokemon_list_render(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.items-center","div.flex.flex-column.items-center",834682703),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0px"], null)], null),"Lista de Pokemons"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pointer","button.pointer",1973833194),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#800000",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #6A0000",new cljs.core.Keyword(null,"color","color",1011675173),"#FFF",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),pokemon.view.load_pkm_list], null),"Load more ..."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#F4F4F4"], null)], null),(function (){var iter__4523__auto__ = (function pokemon$view$pokemon_list_render_$_iter__36475(s__36476){
return (new cljs.core.LazySeq(null,(function (){
var s__36476__$1 = s__36476;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36476__$1);
if(temp__5720__auto__){
var s__36476__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36476__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36476__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36478 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36477 = (0);
while(true){
if((i__36477 < size__4522__auto__)){
var pokemon__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36477);
cljs.core.chunk_append(b__36478,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pointer","li.pointer",-1602973069),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pokemon__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__36477,pokemon__$1,c__4521__auto__,size__4522__auto__,b__36478,s__36476__$2,temp__5720__auto__){
return (function (){
return pokemon.view.load_pkm(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon__$1));
});})(i__36477,pokemon__$1,c__4521__auto__,size__4522__auto__,b__36478,s__36476__$2,temp__5720__auto__))
], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(pokemon__$1))].join(''),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon__$1))].join('')], null));

var G__36484 = (i__36477 + (1));
i__36477 = G__36484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36478),pokemon$view$pokemon_list_render_$_iter__36475(cljs.core.chunk_rest(s__36476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36478),null);
}
} else {
var pokemon__$1 = cljs.core.first(s__36476__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.pointer","li.pointer",-1602973069),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pokemon__$1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"5px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (pokemon__$1,s__36476__$2,temp__5720__auto__){
return (function (){
return pokemon.view.load_pkm(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon__$1));
});})(pokemon__$1,s__36476__$2,temp__5720__auto__))
], null),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(pokemon__$1))].join(''),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pokemon__$1))].join('')], null),pokemon$view$pokemon_list_render_$_iter__36475(cljs.core.rest(s__36476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref((function (){var G__36479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pkm-list","get-pkm-list",-1770385931)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__36479) : re_frame.core.subscribe.call(null,G__36479));
})()));
})()], null)], null);
});
pokemon.view.pkm_search = (function pokemon$view$pkm_search(e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Enter")){
return pokemon.view.pokemon_fetch(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),e.target.value], null),pokemon.queries.pokemon).then((function (value){
var G__36480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-pkm","save-pkm",364084970),new cljs.core.Keyword(null,"pokemon","pokemon",1065917705).cljs$core$IFn$_invoke$arity$1(value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36480) : re_frame.core.dispatch.call(null,G__36480));
}));
} else {
return null;
}
});
pokemon.view.show = (function pokemon$view$show(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main.flex.justify-center","div.main.flex.justify-center",822499036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10% 0px",new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #910000",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 20px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#C60000"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.items-center","div.flex.flex-column.items-center",834682703),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"34px"], null)], null),"Pokemon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.br3","input.br3",-713981044),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px",new cljs.core.Keyword(null,"width","width",-384071477),"250px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"border","border",1444987323),"unset"], null),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),pokemon.view.pkm_search,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Pesquisar o nome do Pokemon ..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokemon.view.pokemon_info,cljs.core.deref((function (){var G__36481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-pkm","get-pkm",-247122554)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__36481) : re_frame.core.subscribe.call(null,G__36481));
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokemon.view.pokemon_list_render], null)], null)], null);
});

//# sourceMappingURL=pokemon.view.js.map

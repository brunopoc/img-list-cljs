goog.provide('pokemon.core');
goog.require('cljs.core');
goog.require('devtools.core');
goog.require('pokemon.view');
goog.require('pokemon.events');
goog.require('pokemon.subs');
goog.require('reagent.core');
goog.require('re_frame.core');
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();
cljs.core.enable_console_print_BANG_();
pokemon.core.render = (function pokemon$core$render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pokemon.view.show], null),document.getElementById("root"));
});
pokemon.core.init = (function pokemon$core$init(){
var G__32443_32444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__32443_32444) : re_frame.core.dispatch_sync.call(null,G__32443_32444));

return pokemon.core.render();
});

//# sourceMappingURL=pokemon.core.js.map

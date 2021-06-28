goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53092){
var map__53093 = p__53092;
var map__53093__$1 = cljs.core.__destructure_map(map__53093);
var m = map__53093__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5754__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
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
var seq__53094_53333 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53095_53334 = null;
var count__53096_53335 = (0);
var i__53097_53336 = (0);
while(true){
if((i__53097_53336 < count__53096_53335)){
var f_53337 = chunk__53095_53334.cljs$core$IIndexed$_nth$arity$2(null,i__53097_53336);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53337], 0));


var G__53338 = seq__53094_53333;
var G__53339 = chunk__53095_53334;
var G__53340 = count__53096_53335;
var G__53341 = (i__53097_53336 + (1));
seq__53094_53333 = G__53338;
chunk__53095_53334 = G__53339;
count__53096_53335 = G__53340;
i__53097_53336 = G__53341;
continue;
} else {
var temp__5754__auto___53342 = cljs.core.seq(seq__53094_53333);
if(temp__5754__auto___53342){
var seq__53094_53343__$1 = temp__5754__auto___53342;
if(cljs.core.chunked_seq_QMARK_(seq__53094_53343__$1)){
var c__4649__auto___53344 = cljs.core.chunk_first(seq__53094_53343__$1);
var G__53345 = cljs.core.chunk_rest(seq__53094_53343__$1);
var G__53346 = c__4649__auto___53344;
var G__53347 = cljs.core.count(c__4649__auto___53344);
var G__53348 = (0);
seq__53094_53333 = G__53345;
chunk__53095_53334 = G__53346;
count__53096_53335 = G__53347;
i__53097_53336 = G__53348;
continue;
} else {
var f_53349 = cljs.core.first(seq__53094_53343__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53349], 0));


var G__53350 = cljs.core.next(seq__53094_53343__$1);
var G__53351 = null;
var G__53352 = (0);
var G__53353 = (0);
seq__53094_53333 = G__53350;
chunk__53095_53334 = G__53351;
count__53096_53335 = G__53352;
i__53097_53336 = G__53353;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53354 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53354], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53354)))?cljs.core.second(arglists_53354):arglists_53354)], 0));
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
var seq__53099_53355 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53100_53356 = null;
var count__53101_53357 = (0);
var i__53102_53358 = (0);
while(true){
if((i__53102_53358 < count__53101_53357)){
var vec__53115_53359 = chunk__53100_53356.cljs$core$IIndexed$_nth$arity$2(null,i__53102_53358);
var name_53360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53115_53359,(0),null);
var map__53118_53361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53115_53359,(1),null);
var map__53118_53362__$1 = cljs.core.__destructure_map(map__53118_53361);
var doc_53363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118_53362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118_53362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53360], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53364], 0));

if(cljs.core.truth_(doc_53363)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53363], 0));
} else {
}


var G__53365 = seq__53099_53355;
var G__53366 = chunk__53100_53356;
var G__53367 = count__53101_53357;
var G__53368 = (i__53102_53358 + (1));
seq__53099_53355 = G__53365;
chunk__53100_53356 = G__53366;
count__53101_53357 = G__53367;
i__53102_53358 = G__53368;
continue;
} else {
var temp__5754__auto___53369 = cljs.core.seq(seq__53099_53355);
if(temp__5754__auto___53369){
var seq__53099_53370__$1 = temp__5754__auto___53369;
if(cljs.core.chunked_seq_QMARK_(seq__53099_53370__$1)){
var c__4649__auto___53371 = cljs.core.chunk_first(seq__53099_53370__$1);
var G__53372 = cljs.core.chunk_rest(seq__53099_53370__$1);
var G__53373 = c__4649__auto___53371;
var G__53374 = cljs.core.count(c__4649__auto___53371);
var G__53375 = (0);
seq__53099_53355 = G__53372;
chunk__53100_53356 = G__53373;
count__53101_53357 = G__53374;
i__53102_53358 = G__53375;
continue;
} else {
var vec__53134_53376 = cljs.core.first(seq__53099_53370__$1);
var name_53377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53134_53376,(0),null);
var map__53137_53378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53134_53376,(1),null);
var map__53137_53379__$1 = cljs.core.__destructure_map(map__53137_53378);
var doc_53380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53137_53379__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53137_53379__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53377], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53381], 0));

if(cljs.core.truth_(doc_53380)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53380], 0));
} else {
}


var G__53382 = cljs.core.next(seq__53099_53370__$1);
var G__53383 = null;
var G__53384 = (0);
var G__53385 = (0);
seq__53099_53355 = G__53382;
chunk__53100_53356 = G__53383;
count__53101_53357 = G__53384;
i__53102_53358 = G__53385;
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
var temp__5754__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5754__auto__)){
var fnspec = temp__5754__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53154 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53155 = null;
var count__53156 = (0);
var i__53157 = (0);
while(true){
if((i__53157 < count__53156)){
var role = chunk__53155.cljs$core$IIndexed$_nth$arity$2(null,i__53157);
var temp__5754__auto___53386__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5754__auto___53386__$1)){
var spec_53387 = temp__5754__auto___53386__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53387)], 0));
} else {
}


var G__53388 = seq__53154;
var G__53389 = chunk__53155;
var G__53390 = count__53156;
var G__53391 = (i__53157 + (1));
seq__53154 = G__53388;
chunk__53155 = G__53389;
count__53156 = G__53390;
i__53157 = G__53391;
continue;
} else {
var temp__5754__auto____$1 = cljs.core.seq(seq__53154);
if(temp__5754__auto____$1){
var seq__53154__$1 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53154__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53154__$1);
var G__53392 = cljs.core.chunk_rest(seq__53154__$1);
var G__53393 = c__4649__auto__;
var G__53394 = cljs.core.count(c__4649__auto__);
var G__53395 = (0);
seq__53154 = G__53392;
chunk__53155 = G__53393;
count__53156 = G__53394;
i__53157 = G__53395;
continue;
} else {
var role = cljs.core.first(seq__53154__$1);
var temp__5754__auto___53396__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5754__auto___53396__$2)){
var spec_53397 = temp__5754__auto___53396__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53397)], 0));
} else {
}


var G__53398 = cljs.core.next(seq__53154__$1);
var G__53399 = null;
var G__53400 = (0);
var G__53401 = (0);
seq__53154 = G__53398;
chunk__53155 = G__53399;
count__53156 = G__53400;
i__53157 = G__53401;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5754__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5754__auto__)){
var msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5754__auto__)){
var ed = temp__5754__auto__;
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
var G__53402 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53403 = cljs.core.ex_cause(t);
via = G__53402;
t = G__53403;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5754__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5754__auto__)){
var root_msg = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5754__auto__)){
var data = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5754__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5754__auto__)){
var phase = temp__5754__auto__;
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
var map__53246 = datafied_throwable;
var map__53246__$1 = cljs.core.__destructure_map(map__53246);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53246__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53246__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53246__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53247 = cljs.core.last(via);
var map__53247__$1 = cljs.core.__destructure_map(map__53247);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53247__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53247__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53248 = data;
var map__53248__$1 = cljs.core.__destructure_map(map__53248);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53248__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53249 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53249__$1 = cljs.core.__destructure_map(map__53249);
var top_data = map__53249__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53250 = phase;
var G__53250__$1 = (((G__53250 instanceof cljs.core.Keyword))?G__53250.fqn:null);
switch (G__53250__$1) {
case "read-source":
var map__53252 = data;
var map__53252__$1 = cljs.core.__destructure_map(map__53252);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53253 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53253__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53253,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53253);
var G__53253__$2 = (cljs.core.truth_((function (){var fexpr__53254 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53254.cljs$core$IFn$_invoke$arity$1 ? fexpr__53254.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53254.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53253__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53253__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53253__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53255 = top_data;
var G__53255__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53255,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53255);
var G__53255__$2 = (cljs.core.truth_((function (){var fexpr__53256 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53256.cljs$core$IFn$_invoke$arity$1 ? fexpr__53256.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53256.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53255__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53255__$1);
var G__53255__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53255__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53255__$2);
var G__53255__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53255__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53255__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53255__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53255__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53257 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53257,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53257,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53257,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53257,(3),null);
var G__53260 = top_data;
var G__53260__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53260,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53260);
var G__53260__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53260__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53260__$1);
var G__53260__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53260__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53260__$2);
var G__53260__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53260__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53260__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53260__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53260__$4;
}

break;
case "execution":
var vec__53268 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53268,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53268,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53268,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53268,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53245_SHARP_){
var or__4223__auto__ = (p1__53245_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__53271 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53271.cljs$core$IFn$_invoke$arity$1 ? fexpr__53271.cljs$core$IFn$_invoke$arity$1(p1__53245_SHARP_) : fexpr__53271.call(null,p1__53245_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__53272 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53272__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53272,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53272);
var G__53272__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53272__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53272__$1);
var G__53272__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53272__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53272__$2);
var G__53272__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53272__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53272__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53272__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53272__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53250__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53278){
var map__53279 = p__53278;
var map__53279__$1 = cljs.core.__destructure_map(map__53279);
var triage_data = map__53279__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__53286 = phase;
var G__53286__$1 = (((G__53286 instanceof cljs.core.Keyword))?G__53286.fqn:null);
switch (G__53286__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53287 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53289 = loc;
var G__53290 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53291_53407 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53292_53408 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53293_53409 = true;
var _STAR_print_fn_STAR__temp_val__53294_53410 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53293_53409);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53294_53410);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53273_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53273_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53292_53408);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53291_53407);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53287,G__53288,G__53289,G__53290) : format.call(null,G__53287,G__53288,G__53289,G__53290));

break;
case "macroexpansion":
var G__53295 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53296 = cause_type;
var G__53297 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53298 = loc;
var G__53299 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53295,G__53296,G__53297,G__53298,G__53299) : format.call(null,G__53295,G__53296,G__53297,G__53298,G__53299));

break;
case "compile-syntax-check":
var G__53300 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53301 = cause_type;
var G__53302 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53303 = loc;
var G__53304 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53300,G__53301,G__53302,G__53303,G__53304) : format.call(null,G__53300,G__53301,G__53302,G__53303,G__53304));

break;
case "compilation":
var G__53305 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53306 = cause_type;
var G__53307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53308 = loc;
var G__53309 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53305,G__53306,G__53307,G__53308,G__53309) : format.call(null,G__53305,G__53306,G__53307,G__53308,G__53309));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53310 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53311 = symbol;
var G__53312 = loc;
var G__53313 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53314_53411 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53315_53412 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53316_53413 = true;
var _STAR_print_fn_STAR__temp_val__53317_53414 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53316_53413);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53317_53414);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53274_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53274_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53315_53412);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53314_53411);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53310,G__53311,G__53312,G__53313) : format.call(null,G__53310,G__53311,G__53312,G__53313));
} else {
var G__53323 = "Execution error%s at %s(%s).\n%s\n";
var G__53324 = cause_type;
var G__53325 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53326 = loc;
var G__53327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53323,G__53324,G__53325,G__53326,G__53327) : format.call(null,G__53323,G__53324,G__53325,G__53326,G__53327));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53286__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

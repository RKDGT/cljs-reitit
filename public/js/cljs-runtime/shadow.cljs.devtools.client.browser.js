goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53897 = arguments.length;
var i__4830__auto___53898 = (0);
while(true){
if((i__4830__auto___53898 < len__4829__auto___53897)){
args__4835__auto__.push((arguments[i__4830__auto___53898]));

var G__53899 = (i__4830__auto___53898 + (1));
i__4830__auto___53898 = G__53899;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53775){
var G__53776 = cljs.core.first(seq53775);
var seq53775__$1 = cljs.core.next(seq53775);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53776,seq53775__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53777 = cljs.core.seq(sources);
var chunk__53778 = null;
var count__53779 = (0);
var i__53780 = (0);
while(true){
if((i__53780 < count__53779)){
var map__53785 = chunk__53778.cljs$core$IIndexed$_nth$arity$2(null,i__53780);
var map__53785__$1 = cljs.core.__destructure_map(map__53785);
var src = map__53785__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53785__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53785__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53785__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53785__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53786){var e_53900 = e53786;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53900);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53900.message)].join('')));
}

var G__53901 = seq__53777;
var G__53902 = chunk__53778;
var G__53903 = count__53779;
var G__53904 = (i__53780 + (1));
seq__53777 = G__53901;
chunk__53778 = G__53902;
count__53779 = G__53903;
i__53780 = G__53904;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53777);
if(temp__5754__auto__){
var seq__53777__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53777__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53777__$1);
var G__53905 = cljs.core.chunk_rest(seq__53777__$1);
var G__53906 = c__4649__auto__;
var G__53907 = cljs.core.count(c__4649__auto__);
var G__53908 = (0);
seq__53777 = G__53905;
chunk__53778 = G__53906;
count__53779 = G__53907;
i__53780 = G__53908;
continue;
} else {
var map__53787 = cljs.core.first(seq__53777__$1);
var map__53787__$1 = cljs.core.__destructure_map(map__53787);
var src = map__53787__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53787__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53787__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53787__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53787__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53788){var e_53909 = e53788;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53909);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53909.message)].join('')));
}

var G__53910 = cljs.core.next(seq__53777__$1);
var G__53911 = null;
var G__53912 = (0);
var G__53913 = (0);
seq__53777 = G__53910;
chunk__53778 = G__53911;
count__53779 = G__53912;
i__53780 = G__53913;
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
return null;
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
var seq__53789 = cljs.core.seq(js_requires);
var chunk__53790 = null;
var count__53791 = (0);
var i__53792 = (0);
while(true){
if((i__53792 < count__53791)){
var js_ns = chunk__53790.cljs$core$IIndexed$_nth$arity$2(null,i__53792);
var require_str_53914 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53914);


var G__53915 = seq__53789;
var G__53916 = chunk__53790;
var G__53917 = count__53791;
var G__53918 = (i__53792 + (1));
seq__53789 = G__53915;
chunk__53790 = G__53916;
count__53791 = G__53917;
i__53792 = G__53918;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53789);
if(temp__5754__auto__){
var seq__53789__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53789__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53789__$1);
var G__53919 = cljs.core.chunk_rest(seq__53789__$1);
var G__53920 = c__4649__auto__;
var G__53921 = cljs.core.count(c__4649__auto__);
var G__53922 = (0);
seq__53789 = G__53919;
chunk__53790 = G__53920;
count__53791 = G__53921;
i__53792 = G__53922;
continue;
} else {
var js_ns = cljs.core.first(seq__53789__$1);
var require_str_53923 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53923);


var G__53924 = cljs.core.next(seq__53789__$1);
var G__53925 = null;
var G__53926 = (0);
var G__53927 = (0);
seq__53789 = G__53924;
chunk__53790 = G__53925;
count__53791 = G__53926;
i__53792 = G__53927;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53794){
var map__53795 = p__53794;
var map__53795__$1 = cljs.core.__destructure_map(map__53795);
var msg = map__53795__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53795__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53795__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53796(s__53797){
return (new cljs.core.LazySeq(null,(function (){
var s__53797__$1 = s__53797;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__53797__$1);
if(temp__5754__auto__){
var xs__6309__auto__ = temp__5754__auto__;
var map__53802 = cljs.core.first(xs__6309__auto__);
var map__53802__$1 = cljs.core.__destructure_map(map__53802);
var src = map__53802__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__53797__$1,map__53802,map__53802__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53795,map__53795__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53796_$_iter__53798(s__53799){
return (new cljs.core.LazySeq(null,((function (s__53797__$1,map__53802,map__53802__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53795,map__53795__$1,msg,info,reload_info){
return (function (){
var s__53799__$1 = s__53799;
while(true){
var temp__5754__auto____$1 = cljs.core.seq(s__53799__$1);
if(temp__5754__auto____$1){
var s__53799__$2 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53799__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__53799__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__53801 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__53800 = (0);
while(true){
if((i__53800 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__53800);
cljs.core.chunk_append(b__53801,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53928 = (i__53800 + (1));
i__53800 = G__53928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53801),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53796_$_iter__53798(cljs.core.chunk_rest(s__53799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53801),null);
}
} else {
var warning = cljs.core.first(s__53799__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53796_$_iter__53798(cljs.core.rest(s__53799__$2)));
}
} else {
return null;
}
break;
}
});})(s__53797__$1,map__53802,map__53802__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53795,map__53795__$1,msg,info,reload_info))
,null,null));
});})(s__53797__$1,map__53802,map__53802__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__53795,map__53795__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53796(cljs.core.rest(s__53797__$1)));
} else {
var G__53929 = cljs.core.rest(s__53797__$1);
s__53797__$1 = G__53929;
continue;
}
} else {
var G__53930 = cljs.core.rest(s__53797__$1);
s__53797__$1 = G__53930;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53803_53931 = cljs.core.seq(warnings);
var chunk__53804_53932 = null;
var count__53805_53933 = (0);
var i__53806_53934 = (0);
while(true){
if((i__53806_53934 < count__53805_53933)){
var map__53809_53935 = chunk__53804_53932.cljs$core$IIndexed$_nth$arity$2(null,i__53806_53934);
var map__53809_53936__$1 = cljs.core.__destructure_map(map__53809_53935);
var w_53937 = map__53809_53936__$1;
var msg_53938__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53809_53936__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53809_53936__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53809_53936__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53809_53936__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53941)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53939),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53940),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53938__$1)].join(''));


var G__53942 = seq__53803_53931;
var G__53943 = chunk__53804_53932;
var G__53944 = count__53805_53933;
var G__53945 = (i__53806_53934 + (1));
seq__53803_53931 = G__53942;
chunk__53804_53932 = G__53943;
count__53805_53933 = G__53944;
i__53806_53934 = G__53945;
continue;
} else {
var temp__5754__auto___53946 = cljs.core.seq(seq__53803_53931);
if(temp__5754__auto___53946){
var seq__53803_53947__$1 = temp__5754__auto___53946;
if(cljs.core.chunked_seq_QMARK_(seq__53803_53947__$1)){
var c__4649__auto___53948 = cljs.core.chunk_first(seq__53803_53947__$1);
var G__53949 = cljs.core.chunk_rest(seq__53803_53947__$1);
var G__53950 = c__4649__auto___53948;
var G__53951 = cljs.core.count(c__4649__auto___53948);
var G__53952 = (0);
seq__53803_53931 = G__53949;
chunk__53804_53932 = G__53950;
count__53805_53933 = G__53951;
i__53806_53934 = G__53952;
continue;
} else {
var map__53810_53953 = cljs.core.first(seq__53803_53947__$1);
var map__53810_53954__$1 = cljs.core.__destructure_map(map__53810_53953);
var w_53955 = map__53810_53954__$1;
var msg_53956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53810_53954__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53810_53954__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53810_53954__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53810_53954__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53959)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53957),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53958),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53956__$1)].join(''));


var G__53960 = cljs.core.next(seq__53803_53947__$1);
var G__53961 = null;
var G__53962 = (0);
var G__53963 = (0);
seq__53803_53931 = G__53960;
chunk__53804_53932 = G__53961;
count__53805_53933 = G__53962;
i__53806_53934 = G__53963;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53793_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53793_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53811){
var map__53812 = p__53811;
var map__53812__$1 = cljs.core.__destructure_map(map__53812);
var msg = map__53812__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53812__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53813 = cljs.core.seq(updates);
var chunk__53815 = null;
var count__53816 = (0);
var i__53817 = (0);
while(true){
if((i__53817 < count__53816)){
var path = chunk__53815.cljs$core$IIndexed$_nth$arity$2(null,i__53817);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53847_53964 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53851_53965 = null;
var count__53852_53966 = (0);
var i__53853_53967 = (0);
while(true){
if((i__53853_53967 < count__53852_53966)){
var node_53968 = chunk__53851_53965.cljs$core$IIndexed$_nth$arity$2(null,i__53853_53967);
if(cljs.core.not(node_53968.shadow$old)){
var path_match_53969 = shadow.cljs.devtools.client.browser.match_paths(node_53968.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53969)){
var new_link_53970 = (function (){var G__53859 = node_53968.cloneNode(true);
G__53859.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53969),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53859;
})();
(node_53968.shadow$old = true);

(new_link_53970.onload = ((function (seq__53847_53964,chunk__53851_53965,count__53852_53966,i__53853_53967,seq__53813,chunk__53815,count__53816,i__53817,new_link_53970,path_match_53969,node_53968,path,map__53812,map__53812__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53968);
});})(seq__53847_53964,chunk__53851_53965,count__53852_53966,i__53853_53967,seq__53813,chunk__53815,count__53816,i__53817,new_link_53970,path_match_53969,node_53968,path,map__53812,map__53812__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53969], 0));

goog.dom.insertSiblingAfter(new_link_53970,node_53968);


var G__53971 = seq__53847_53964;
var G__53972 = chunk__53851_53965;
var G__53973 = count__53852_53966;
var G__53974 = (i__53853_53967 + (1));
seq__53847_53964 = G__53971;
chunk__53851_53965 = G__53972;
count__53852_53966 = G__53973;
i__53853_53967 = G__53974;
continue;
} else {
var G__53975 = seq__53847_53964;
var G__53976 = chunk__53851_53965;
var G__53977 = count__53852_53966;
var G__53978 = (i__53853_53967 + (1));
seq__53847_53964 = G__53975;
chunk__53851_53965 = G__53976;
count__53852_53966 = G__53977;
i__53853_53967 = G__53978;
continue;
}
} else {
var G__53979 = seq__53847_53964;
var G__53980 = chunk__53851_53965;
var G__53981 = count__53852_53966;
var G__53982 = (i__53853_53967 + (1));
seq__53847_53964 = G__53979;
chunk__53851_53965 = G__53980;
count__53852_53966 = G__53981;
i__53853_53967 = G__53982;
continue;
}
} else {
var temp__5754__auto___53983 = cljs.core.seq(seq__53847_53964);
if(temp__5754__auto___53983){
var seq__53847_53984__$1 = temp__5754__auto___53983;
if(cljs.core.chunked_seq_QMARK_(seq__53847_53984__$1)){
var c__4649__auto___53985 = cljs.core.chunk_first(seq__53847_53984__$1);
var G__53986 = cljs.core.chunk_rest(seq__53847_53984__$1);
var G__53987 = c__4649__auto___53985;
var G__53988 = cljs.core.count(c__4649__auto___53985);
var G__53989 = (0);
seq__53847_53964 = G__53986;
chunk__53851_53965 = G__53987;
count__53852_53966 = G__53988;
i__53853_53967 = G__53989;
continue;
} else {
var node_53990 = cljs.core.first(seq__53847_53984__$1);
if(cljs.core.not(node_53990.shadow$old)){
var path_match_53991 = shadow.cljs.devtools.client.browser.match_paths(node_53990.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53991)){
var new_link_53992 = (function (){var G__53860 = node_53990.cloneNode(true);
G__53860.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53991),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53860;
})();
(node_53990.shadow$old = true);

(new_link_53992.onload = ((function (seq__53847_53964,chunk__53851_53965,count__53852_53966,i__53853_53967,seq__53813,chunk__53815,count__53816,i__53817,new_link_53992,path_match_53991,node_53990,seq__53847_53984__$1,temp__5754__auto___53983,path,map__53812,map__53812__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53990);
});})(seq__53847_53964,chunk__53851_53965,count__53852_53966,i__53853_53967,seq__53813,chunk__53815,count__53816,i__53817,new_link_53992,path_match_53991,node_53990,seq__53847_53984__$1,temp__5754__auto___53983,path,map__53812,map__53812__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53991], 0));

goog.dom.insertSiblingAfter(new_link_53992,node_53990);


var G__53993 = cljs.core.next(seq__53847_53984__$1);
var G__53994 = null;
var G__53995 = (0);
var G__53996 = (0);
seq__53847_53964 = G__53993;
chunk__53851_53965 = G__53994;
count__53852_53966 = G__53995;
i__53853_53967 = G__53996;
continue;
} else {
var G__53997 = cljs.core.next(seq__53847_53984__$1);
var G__53998 = null;
var G__53999 = (0);
var G__54000 = (0);
seq__53847_53964 = G__53997;
chunk__53851_53965 = G__53998;
count__53852_53966 = G__53999;
i__53853_53967 = G__54000;
continue;
}
} else {
var G__54001 = cljs.core.next(seq__53847_53984__$1);
var G__54002 = null;
var G__54003 = (0);
var G__54004 = (0);
seq__53847_53964 = G__54001;
chunk__53851_53965 = G__54002;
count__53852_53966 = G__54003;
i__53853_53967 = G__54004;
continue;
}
}
} else {
}
}
break;
}


var G__54005 = seq__53813;
var G__54006 = chunk__53815;
var G__54007 = count__53816;
var G__54008 = (i__53817 + (1));
seq__53813 = G__54005;
chunk__53815 = G__54006;
count__53816 = G__54007;
i__53817 = G__54008;
continue;
} else {
var G__54009 = seq__53813;
var G__54010 = chunk__53815;
var G__54011 = count__53816;
var G__54012 = (i__53817 + (1));
seq__53813 = G__54009;
chunk__53815 = G__54010;
count__53816 = G__54011;
i__53817 = G__54012;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__53813);
if(temp__5754__auto__){
var seq__53813__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53813__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53813__$1);
var G__54013 = cljs.core.chunk_rest(seq__53813__$1);
var G__54014 = c__4649__auto__;
var G__54015 = cljs.core.count(c__4649__auto__);
var G__54016 = (0);
seq__53813 = G__54013;
chunk__53815 = G__54014;
count__53816 = G__54015;
i__53817 = G__54016;
continue;
} else {
var path = cljs.core.first(seq__53813__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53861_54017 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53865_54018 = null;
var count__53866_54019 = (0);
var i__53867_54020 = (0);
while(true){
if((i__53867_54020 < count__53866_54019)){
var node_54021 = chunk__53865_54018.cljs$core$IIndexed$_nth$arity$2(null,i__53867_54020);
if(cljs.core.not(node_54021.shadow$old)){
var path_match_54022 = shadow.cljs.devtools.client.browser.match_paths(node_54021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54022)){
var new_link_54023 = (function (){var G__53873 = node_54021.cloneNode(true);
G__53873.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54022),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53873;
})();
(node_54021.shadow$old = true);

(new_link_54023.onload = ((function (seq__53861_54017,chunk__53865_54018,count__53866_54019,i__53867_54020,seq__53813,chunk__53815,count__53816,i__53817,new_link_54023,path_match_54022,node_54021,path,seq__53813__$1,temp__5754__auto__,map__53812,map__53812__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54021);
});})(seq__53861_54017,chunk__53865_54018,count__53866_54019,i__53867_54020,seq__53813,chunk__53815,count__53816,i__53817,new_link_54023,path_match_54022,node_54021,path,seq__53813__$1,temp__5754__auto__,map__53812,map__53812__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54022], 0));

goog.dom.insertSiblingAfter(new_link_54023,node_54021);


var G__54024 = seq__53861_54017;
var G__54025 = chunk__53865_54018;
var G__54026 = count__53866_54019;
var G__54027 = (i__53867_54020 + (1));
seq__53861_54017 = G__54024;
chunk__53865_54018 = G__54025;
count__53866_54019 = G__54026;
i__53867_54020 = G__54027;
continue;
} else {
var G__54028 = seq__53861_54017;
var G__54029 = chunk__53865_54018;
var G__54030 = count__53866_54019;
var G__54031 = (i__53867_54020 + (1));
seq__53861_54017 = G__54028;
chunk__53865_54018 = G__54029;
count__53866_54019 = G__54030;
i__53867_54020 = G__54031;
continue;
}
} else {
var G__54032 = seq__53861_54017;
var G__54033 = chunk__53865_54018;
var G__54034 = count__53866_54019;
var G__54035 = (i__53867_54020 + (1));
seq__53861_54017 = G__54032;
chunk__53865_54018 = G__54033;
count__53866_54019 = G__54034;
i__53867_54020 = G__54035;
continue;
}
} else {
var temp__5754__auto___54036__$1 = cljs.core.seq(seq__53861_54017);
if(temp__5754__auto___54036__$1){
var seq__53861_54037__$1 = temp__5754__auto___54036__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53861_54037__$1)){
var c__4649__auto___54038 = cljs.core.chunk_first(seq__53861_54037__$1);
var G__54039 = cljs.core.chunk_rest(seq__53861_54037__$1);
var G__54040 = c__4649__auto___54038;
var G__54041 = cljs.core.count(c__4649__auto___54038);
var G__54042 = (0);
seq__53861_54017 = G__54039;
chunk__53865_54018 = G__54040;
count__53866_54019 = G__54041;
i__53867_54020 = G__54042;
continue;
} else {
var node_54043 = cljs.core.first(seq__53861_54037__$1);
if(cljs.core.not(node_54043.shadow$old)){
var path_match_54044 = shadow.cljs.devtools.client.browser.match_paths(node_54043.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54044)){
var new_link_54045 = (function (){var G__53874 = node_54043.cloneNode(true);
G__53874.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54044),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53874;
})();
(node_54043.shadow$old = true);

(new_link_54045.onload = ((function (seq__53861_54017,chunk__53865_54018,count__53866_54019,i__53867_54020,seq__53813,chunk__53815,count__53816,i__53817,new_link_54045,path_match_54044,node_54043,seq__53861_54037__$1,temp__5754__auto___54036__$1,path,seq__53813__$1,temp__5754__auto__,map__53812,map__53812__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54043);
});})(seq__53861_54017,chunk__53865_54018,count__53866_54019,i__53867_54020,seq__53813,chunk__53815,count__53816,i__53817,new_link_54045,path_match_54044,node_54043,seq__53861_54037__$1,temp__5754__auto___54036__$1,path,seq__53813__$1,temp__5754__auto__,map__53812,map__53812__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54044], 0));

goog.dom.insertSiblingAfter(new_link_54045,node_54043);


var G__54046 = cljs.core.next(seq__53861_54037__$1);
var G__54047 = null;
var G__54048 = (0);
var G__54049 = (0);
seq__53861_54017 = G__54046;
chunk__53865_54018 = G__54047;
count__53866_54019 = G__54048;
i__53867_54020 = G__54049;
continue;
} else {
var G__54050 = cljs.core.next(seq__53861_54037__$1);
var G__54051 = null;
var G__54052 = (0);
var G__54053 = (0);
seq__53861_54017 = G__54050;
chunk__53865_54018 = G__54051;
count__53866_54019 = G__54052;
i__53867_54020 = G__54053;
continue;
}
} else {
var G__54054 = cljs.core.next(seq__53861_54037__$1);
var G__54055 = null;
var G__54056 = (0);
var G__54057 = (0);
seq__53861_54017 = G__54054;
chunk__53865_54018 = G__54055;
count__53866_54019 = G__54056;
i__53867_54020 = G__54057;
continue;
}
}
} else {
}
}
break;
}


var G__54058 = cljs.core.next(seq__53813__$1);
var G__54059 = null;
var G__54060 = (0);
var G__54061 = (0);
seq__53813 = G__54058;
chunk__53815 = G__54059;
count__53816 = G__54060;
i__53817 = G__54061;
continue;
} else {
var G__54062 = cljs.core.next(seq__53813__$1);
var G__54063 = null;
var G__54064 = (0);
var G__54065 = (0);
seq__53813 = G__54062;
chunk__53815 = G__54063;
count__53816 = G__54064;
i__53817 = G__54065;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53875){
var map__53876 = p__53875;
var map__53876__$1 = cljs.core.__destructure_map(map__53876);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53876__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53877){
var map__53878 = p__53877;
var map__53878__$1 = cljs.core.__destructure_map(map__53878);
var _ = map__53878__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53878__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53879,done,error){
var map__53880 = p__53879;
var map__53880__$1 = cljs.core.__destructure_map(map__53880);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53880__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53881,done,error){
var map__53882 = p__53881;
var map__53882__$1 = cljs.core.__destructure_map(map__53882);
var msg = map__53882__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53882__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53882__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53882__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53883){
var map__53884 = p__53883;
var map__53884__$1 = cljs.core.__destructure_map(map__53884);
var src = map__53884__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53884__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53885 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53885) : done.call(null,G__53885));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53886){
var map__53887 = p__53886;
var map__53887__$1 = cljs.core.__destructure_map(map__53887);
var msg__$1 = map__53887__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53887__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53888){var ex = e53888;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53889){
var map__53890 = p__53889;
var map__53890__$1 = cljs.core.__destructure_map(map__53890);
var env = map__53890__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53890__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53891){
var map__53892 = p__53891;
var map__53892__$1 = cljs.core.__destructure_map(map__53892);
var msg = map__53892__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53892__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53893){
var map__53894 = p__53893;
var map__53894__$1 = cljs.core.__destructure_map(map__53894);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53894__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53894__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53895){
var map__53896 = p__53895;
var map__53896__$1 = cljs.core.__destructure_map(map__53896);
var svc = map__53896__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53896__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

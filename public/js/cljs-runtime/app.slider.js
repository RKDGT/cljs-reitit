goog.provide('app.slider');
app.slider.slides = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"shown",new cljs.core.Keyword(null,"rait","rait",-1720125182),"4",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"img/hz1.png",new cljs.core.Keyword(null,"userName","userName",1867040765),"Zoltan Nemeth",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"rait","rait",-1720125182),"3",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"img/hz2.png",new cljs.core.Keyword(null,"userName","userName",1867040765),"NoName",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"rait","rait",-1720125182),"4",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"img/h3.png",new cljs.core.Keyword(null,"userName","userName",1867040765),"NoName2",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"",new cljs.core.Keyword(null,"rait","rait",-1720125182),"2",new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575),"User friendly & Customizable",new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455),"Bring to the table win-win survival strategies to ensure proactBring to the table win-win survival strategies to ensure proact",new cljs.core.Keyword(null,"userPict","userPict",-1076281820),"img/hz4.png",new cljs.core.Keyword(null,"userName","userName",1867040765),"NoName3",new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287),"CEO of Pixler Lab"], null)], null));
app.slider.__GT_Next = (function app$slider$__GT_Next(){
var vec__46542 = cljs.core.deref(app.slider.slides);
var seq__46543 = cljs.core.seq(vec__46542);
var first__46544 = cljs.core.first(seq__46543);
var seq__46543__$1 = cljs.core.next(seq__46543);
var first = first__46544;
var first__46544__$1 = cljs.core.first(seq__46543__$1);
var seq__46543__$2 = cljs.core.next(seq__46543__$1);
var second = first__46544__$1;
var rest = seq__46543__$2;
return cljs.core.reset_BANG_(app.slider.slides,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(second,new cljs.core.Keyword(null,"type","type",1174270348),"shown")], null),cljs.core.vec(rest),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(first,new cljs.core.Keyword(null,"type","type",1174270348),"")], null)], 0)));
});
app.slider.__GT_Prev = (function app$slider$__GT_Prev(){
return cljs.core.reset_BANG_(app.slider.slides,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.last(cljs.core.deref(app.slider.slides)),new cljs.core.Keyword(null,"type","type",1174270348),"shown"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(cljs.core.deref(app.slider.slides)),new cljs.core.Keyword(null,"type","type",1174270348),"")], null),cljs.core.rest(cljs.core.butlast(cljs.core.deref(app.slider.slides)))));
});
app.slider.starRait = (function app$slider$starRait(rait){
var out = cljs.core.PersistentVector.EMPTY;
var __GT_change = (0);
while(true){
if((__GT_change > (4))){
return out;
} else {
if((__GT_change < parseInt(rait))){
var G__46555 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-star",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"yellow"], null),new cljs.core.Keyword(null,"key","key",-1516042587),__GT_change], null)], null));
var G__46556 = (__GT_change + (1));
out = G__46555;
__GT_change = G__46556;
continue;
} else {
var G__46557 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-star",new cljs.core.Keyword(null,"key","key",-1516042587),__GT_change], null)], null));
var G__46558 = (__GT_change + (1));
out = G__46557;
__GT_change = G__46558;
continue;
}
}
break;
}
});
app.slider.slide = (function app$slider$slide(p__46545){
var map__46546 = p__46545;
var map__46546__$1 = cljs.core.__destructure_map(map__46546);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var rait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"rait","rait",-1720125182));
var commnetTitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"commnetTitle","commnetTitle",770612575));
var commentDescription = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"commentDescription","commentDescription",-1397803455));
var userPict = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"userPict","userPict",-1076281820));
var userName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"userName","userName",1867040765));
var userIncumbency = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46546__$1,new cljs.core.Keyword(null,"userIncumbency","userIncumbency",-1597992287));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["slider-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-star-rait","div.slider-item-star-rait",-1589326198),(function (){var iter__4622__auto__ = (function app$slider$slide_$_iter__46547(s__46548){
return (new cljs.core.LazySeq(null,(function (){
var s__46548__$1 = s__46548;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__46548__$1);
if(temp__5754__auto__){
var s__46548__$2 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46548__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46548__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46550 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46549 = (0);
while(true){
if((i__46549 < size__4621__auto__)){
var x = cljs.core._nth(c__4620__auto__,i__46549);
cljs.core.chunk_append(b__46550,x);

var G__46559 = (i__46549 + (1));
i__46549 = G__46559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46550),app$slider$slide_$_iter__46547(cljs.core.chunk_rest(s__46548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46550),null);
}
} else {
var x = cljs.core.first(s__46548__$2);
return cljs.core.cons(x,app$slider$slide_$_iter__46547(cljs.core.rest(s__46548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(app.slider.starRait(rait));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.slider-item-header","h5.slider-item-header",635198951),commnetTitle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.slider-item-description","p.slider-item-description",-376808046),commentDescription], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-footer","div.slider-item-footer",-338054009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-footer-user","div.slider-item-footer-user",390865855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.slider-item-user-pict","img.slider-item-user-pict",2028143580),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),userPict,new cljs.core.Keyword(null,"alt","alt",-3214426),"nothing"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-user-personal-info","div.slider-item-user-personal-info",1233818742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.slider-item-user-personal-info-header","h5.slider-item-user-personal-info-header",-162649604),userName], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sub","p.text-sub",1132199043),userIncumbency], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-item-navigation-buttons","div.slider-item-navigation-buttons",-1325014538),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["slider-prev-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.slider.__GT_Prev], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-arrow-left"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.vertical","hr.vertical",2129675977)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["slider-next-item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.slider.__GT_Next], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-arrow-right"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),userName], null));
});
app.slider.slider = (function app$slider$slider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider","div.slider",1951581386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.slider-items","div.slider-items",1249559300),(function (){var iter__4622__auto__ = (function app$slider$slider_$_iter__46551(s__46552){
return (new cljs.core.LazySeq(null,(function (){
var s__46552__$1 = s__46552;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__46552__$1);
if(temp__5754__auto__){
var s__46552__$2 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46552__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46552__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46554 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46553 = (0);
while(true){
if((i__46553 < size__4621__auto__)){
var x = cljs.core._nth(c__4620__auto__,i__46553);
cljs.core.chunk_append(b__46554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.slider.slide,x], null));

var G__46560 = (i__46553 + (1));
i__46553 = G__46560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46554),app$slider$slider_$_iter__46551(cljs.core.chunk_rest(s__46552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46554),null);
}
} else {
var x = cljs.core.first(s__46552__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.slider.slide,x], null),app$slider$slider_$_iter__46551(cljs.core.rest(s__46552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.deref(app.slider.slides));
})()], null)], null);
});

//# sourceMappingURL=app.slider.js.map

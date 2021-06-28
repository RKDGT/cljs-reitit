goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51073 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_51073(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51074 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_51074(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50367 = coll;
var G__50368 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50367,G__50368) : shadow.dom.lazy_native_coll_seq.call(null,G__50367,G__50368));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

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
var G__50394 = arguments.length;
switch (G__50394) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__50396 = arguments.length;
switch (G__50396) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__50398 = arguments.length;
switch (G__50398) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__50400 = arguments.length;
switch (G__50400) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__50439 = arguments.length;
switch (G__50439) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__50479 = arguments.length;
switch (G__50479) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e50480){if((e50480 instanceof Object)){
var e = e50480;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50480;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__50481 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50482 = null;
var count__50483 = (0);
var i__50484 = (0);
while(true){
if((i__50484 < count__50483)){
var el = chunk__50482.cljs$core$IIndexed$_nth$arity$2(null,i__50484);
var handler_51087__$1 = ((function (seq__50481,chunk__50482,count__50483,i__50484,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50481,chunk__50482,count__50483,i__50484,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51087__$1);


var G__51088 = seq__50481;
var G__51089 = chunk__50482;
var G__51090 = count__50483;
var G__51091 = (i__50484 + (1));
seq__50481 = G__51088;
chunk__50482 = G__51089;
count__50483 = G__51090;
i__50484 = G__51091;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50481);
if(temp__5754__auto__){
var seq__50481__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50481__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50481__$1);
var G__51092 = cljs.core.chunk_rest(seq__50481__$1);
var G__51093 = c__4649__auto__;
var G__51094 = cljs.core.count(c__4649__auto__);
var G__51095 = (0);
seq__50481 = G__51092;
chunk__50482 = G__51093;
count__50483 = G__51094;
i__50484 = G__51095;
continue;
} else {
var el = cljs.core.first(seq__50481__$1);
var handler_51096__$1 = ((function (seq__50481,chunk__50482,count__50483,i__50484,el,seq__50481__$1,temp__5754__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50481,chunk__50482,count__50483,i__50484,el,seq__50481__$1,temp__5754__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51096__$1);


var G__51097 = cljs.core.next(seq__50481__$1);
var G__51098 = null;
var G__51099 = (0);
var G__51100 = (0);
seq__50481 = G__51097;
chunk__50482 = G__51098;
count__50483 = G__51099;
i__50484 = G__51100;
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
var G__50508 = arguments.length;
switch (G__50508) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__50509 = cljs.core.seq(events);
var chunk__50510 = null;
var count__50511 = (0);
var i__50512 = (0);
while(true){
if((i__50512 < count__50511)){
var vec__50519 = chunk__50510.cljs$core$IIndexed$_nth$arity$2(null,i__50512);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50519,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50519,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51102 = seq__50509;
var G__51103 = chunk__50510;
var G__51104 = count__50511;
var G__51105 = (i__50512 + (1));
seq__50509 = G__51102;
chunk__50510 = G__51103;
count__50511 = G__51104;
i__50512 = G__51105;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50509);
if(temp__5754__auto__){
var seq__50509__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50509__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50509__$1);
var G__51106 = cljs.core.chunk_rest(seq__50509__$1);
var G__51107 = c__4649__auto__;
var G__51108 = cljs.core.count(c__4649__auto__);
var G__51109 = (0);
seq__50509 = G__51106;
chunk__50510 = G__51107;
count__50511 = G__51108;
i__50512 = G__51109;
continue;
} else {
var vec__50522 = cljs.core.first(seq__50509__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50522,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51110 = cljs.core.next(seq__50509__$1);
var G__51111 = null;
var G__51112 = (0);
var G__51113 = (0);
seq__50509 = G__51110;
chunk__50510 = G__51111;
count__50511 = G__51112;
i__50512 = G__51113;
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
var seq__50525 = cljs.core.seq(styles);
var chunk__50526 = null;
var count__50527 = (0);
var i__50528 = (0);
while(true){
if((i__50528 < count__50527)){
var vec__50561 = chunk__50526.cljs$core$IIndexed$_nth$arity$2(null,i__50528);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51114 = seq__50525;
var G__51115 = chunk__50526;
var G__51116 = count__50527;
var G__51117 = (i__50528 + (1));
seq__50525 = G__51114;
chunk__50526 = G__51115;
count__50527 = G__51116;
i__50528 = G__51117;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50525);
if(temp__5754__auto__){
var seq__50525__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50525__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50525__$1);
var G__51118 = cljs.core.chunk_rest(seq__50525__$1);
var G__51119 = c__4649__auto__;
var G__51120 = cljs.core.count(c__4649__auto__);
var G__51121 = (0);
seq__50525 = G__51118;
chunk__50526 = G__51119;
count__50527 = G__51120;
i__50528 = G__51121;
continue;
} else {
var vec__50564 = cljs.core.first(seq__50525__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50564,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51122 = cljs.core.next(seq__50525__$1);
var G__51123 = null;
var G__51124 = (0);
var G__51125 = (0);
seq__50525 = G__51122;
chunk__50526 = G__51123;
count__50527 = G__51124;
i__50528 = G__51125;
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
var G__50567_51126 = key;
var G__50567_51127__$1 = (((G__50567_51126 instanceof cljs.core.Keyword))?G__50567_51126.fqn:null);
switch (G__50567_51127__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_51132 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_51132,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_51132,"aria-");
}
})())){
el.setAttribute(ks_51132,value);
} else {
(el[ks_51132] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50583){
var map__50584 = p__50583;
var map__50584__$1 = cljs.core.__destructure_map(map__50584);
var props = map__50584__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50584__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50585 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50585,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50585,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50585,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50588 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50588,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50588;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50590 = arguments.length;
switch (G__50590) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50631){
var vec__50632 = p__50631;
var seq__50633 = cljs.core.seq(vec__50632);
var first__50634 = cljs.core.first(seq__50633);
var seq__50633__$1 = cljs.core.next(seq__50633);
var nn = first__50634;
var first__50634__$1 = cljs.core.first(seq__50633__$1);
var seq__50633__$2 = cljs.core.next(seq__50633__$1);
var np = first__50634__$1;
var nc = seq__50633__$2;
var node = vec__50632;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50650 = nn;
var G__50651 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50650,G__50651) : create_fn.call(null,G__50650,G__50651));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50652 = nn;
var G__50653 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50652,G__50653) : create_fn.call(null,G__50652,G__50653));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50654 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50654,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50654,(1),null);
var seq__50657_51135 = cljs.core.seq(node_children);
var chunk__50658_51136 = null;
var count__50659_51137 = (0);
var i__50660_51138 = (0);
while(true){
if((i__50660_51138 < count__50659_51137)){
var child_struct_51139 = chunk__50658_51136.cljs$core$IIndexed$_nth$arity$2(null,i__50660_51138);
var children_51140 = shadow.dom.dom_node(child_struct_51139);
if(cljs.core.seq_QMARK_(children_51140)){
var seq__50673_51141 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51140));
var chunk__50675_51142 = null;
var count__50676_51143 = (0);
var i__50677_51144 = (0);
while(true){
if((i__50677_51144 < count__50676_51143)){
var child_51145 = chunk__50675_51142.cljs$core$IIndexed$_nth$arity$2(null,i__50677_51144);
if(cljs.core.truth_(child_51145)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51145);


var G__51146 = seq__50673_51141;
var G__51147 = chunk__50675_51142;
var G__51148 = count__50676_51143;
var G__51149 = (i__50677_51144 + (1));
seq__50673_51141 = G__51146;
chunk__50675_51142 = G__51147;
count__50676_51143 = G__51148;
i__50677_51144 = G__51149;
continue;
} else {
var G__51150 = seq__50673_51141;
var G__51151 = chunk__50675_51142;
var G__51152 = count__50676_51143;
var G__51153 = (i__50677_51144 + (1));
seq__50673_51141 = G__51150;
chunk__50675_51142 = G__51151;
count__50676_51143 = G__51152;
i__50677_51144 = G__51153;
continue;
}
} else {
var temp__5754__auto___51154 = cljs.core.seq(seq__50673_51141);
if(temp__5754__auto___51154){
var seq__50673_51155__$1 = temp__5754__auto___51154;
if(cljs.core.chunked_seq_QMARK_(seq__50673_51155__$1)){
var c__4649__auto___51156 = cljs.core.chunk_first(seq__50673_51155__$1);
var G__51157 = cljs.core.chunk_rest(seq__50673_51155__$1);
var G__51158 = c__4649__auto___51156;
var G__51159 = cljs.core.count(c__4649__auto___51156);
var G__51160 = (0);
seq__50673_51141 = G__51157;
chunk__50675_51142 = G__51158;
count__50676_51143 = G__51159;
i__50677_51144 = G__51160;
continue;
} else {
var child_51161 = cljs.core.first(seq__50673_51155__$1);
if(cljs.core.truth_(child_51161)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51161);


var G__51162 = cljs.core.next(seq__50673_51155__$1);
var G__51163 = null;
var G__51164 = (0);
var G__51165 = (0);
seq__50673_51141 = G__51162;
chunk__50675_51142 = G__51163;
count__50676_51143 = G__51164;
i__50677_51144 = G__51165;
continue;
} else {
var G__51166 = cljs.core.next(seq__50673_51155__$1);
var G__51167 = null;
var G__51168 = (0);
var G__51169 = (0);
seq__50673_51141 = G__51166;
chunk__50675_51142 = G__51167;
count__50676_51143 = G__51168;
i__50677_51144 = G__51169;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51140);
}


var G__51170 = seq__50657_51135;
var G__51171 = chunk__50658_51136;
var G__51172 = count__50659_51137;
var G__51173 = (i__50660_51138 + (1));
seq__50657_51135 = G__51170;
chunk__50658_51136 = G__51171;
count__50659_51137 = G__51172;
i__50660_51138 = G__51173;
continue;
} else {
var temp__5754__auto___51174 = cljs.core.seq(seq__50657_51135);
if(temp__5754__auto___51174){
var seq__50657_51175__$1 = temp__5754__auto___51174;
if(cljs.core.chunked_seq_QMARK_(seq__50657_51175__$1)){
var c__4649__auto___51176 = cljs.core.chunk_first(seq__50657_51175__$1);
var G__51177 = cljs.core.chunk_rest(seq__50657_51175__$1);
var G__51178 = c__4649__auto___51176;
var G__51179 = cljs.core.count(c__4649__auto___51176);
var G__51180 = (0);
seq__50657_51135 = G__51177;
chunk__50658_51136 = G__51178;
count__50659_51137 = G__51179;
i__50660_51138 = G__51180;
continue;
} else {
var child_struct_51181 = cljs.core.first(seq__50657_51175__$1);
var children_51182 = shadow.dom.dom_node(child_struct_51181);
if(cljs.core.seq_QMARK_(children_51182)){
var seq__50704_51183 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51182));
var chunk__50706_51184 = null;
var count__50707_51185 = (0);
var i__50708_51186 = (0);
while(true){
if((i__50708_51186 < count__50707_51185)){
var child_51187 = chunk__50706_51184.cljs$core$IIndexed$_nth$arity$2(null,i__50708_51186);
if(cljs.core.truth_(child_51187)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51187);


var G__51188 = seq__50704_51183;
var G__51189 = chunk__50706_51184;
var G__51190 = count__50707_51185;
var G__51191 = (i__50708_51186 + (1));
seq__50704_51183 = G__51188;
chunk__50706_51184 = G__51189;
count__50707_51185 = G__51190;
i__50708_51186 = G__51191;
continue;
} else {
var G__51192 = seq__50704_51183;
var G__51193 = chunk__50706_51184;
var G__51194 = count__50707_51185;
var G__51195 = (i__50708_51186 + (1));
seq__50704_51183 = G__51192;
chunk__50706_51184 = G__51193;
count__50707_51185 = G__51194;
i__50708_51186 = G__51195;
continue;
}
} else {
var temp__5754__auto___51196__$1 = cljs.core.seq(seq__50704_51183);
if(temp__5754__auto___51196__$1){
var seq__50704_51197__$1 = temp__5754__auto___51196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50704_51197__$1)){
var c__4649__auto___51198 = cljs.core.chunk_first(seq__50704_51197__$1);
var G__51199 = cljs.core.chunk_rest(seq__50704_51197__$1);
var G__51200 = c__4649__auto___51198;
var G__51201 = cljs.core.count(c__4649__auto___51198);
var G__51202 = (0);
seq__50704_51183 = G__51199;
chunk__50706_51184 = G__51200;
count__50707_51185 = G__51201;
i__50708_51186 = G__51202;
continue;
} else {
var child_51203 = cljs.core.first(seq__50704_51197__$1);
if(cljs.core.truth_(child_51203)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51203);


var G__51204 = cljs.core.next(seq__50704_51197__$1);
var G__51205 = null;
var G__51206 = (0);
var G__51207 = (0);
seq__50704_51183 = G__51204;
chunk__50706_51184 = G__51205;
count__50707_51185 = G__51206;
i__50708_51186 = G__51207;
continue;
} else {
var G__51208 = cljs.core.next(seq__50704_51197__$1);
var G__51209 = null;
var G__51210 = (0);
var G__51211 = (0);
seq__50704_51183 = G__51208;
chunk__50706_51184 = G__51209;
count__50707_51185 = G__51210;
i__50708_51186 = G__51211;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51182);
}


var G__51212 = cljs.core.next(seq__50657_51175__$1);
var G__51213 = null;
var G__51214 = (0);
var G__51215 = (0);
seq__50657_51135 = G__51212;
chunk__50658_51136 = G__51213;
count__50659_51137 = G__51214;
i__50660_51138 = G__51215;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__50731 = cljs.core.seq(node);
var chunk__50732 = null;
var count__50733 = (0);
var i__50734 = (0);
while(true){
if((i__50734 < count__50733)){
var n = chunk__50732.cljs$core$IIndexed$_nth$arity$2(null,i__50734);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51216 = seq__50731;
var G__51217 = chunk__50732;
var G__51218 = count__50733;
var G__51219 = (i__50734 + (1));
seq__50731 = G__51216;
chunk__50732 = G__51217;
count__50733 = G__51218;
i__50734 = G__51219;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50731);
if(temp__5754__auto__){
var seq__50731__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50731__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50731__$1);
var G__51220 = cljs.core.chunk_rest(seq__50731__$1);
var G__51221 = c__4649__auto__;
var G__51222 = cljs.core.count(c__4649__auto__);
var G__51223 = (0);
seq__50731 = G__51220;
chunk__50732 = G__51221;
count__50733 = G__51222;
i__50734 = G__51223;
continue;
} else {
var n = cljs.core.first(seq__50731__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51224 = cljs.core.next(seq__50731__$1);
var G__51225 = null;
var G__51226 = (0);
var G__51227 = (0);
seq__50731 = G__51224;
chunk__50732 = G__51225;
count__50733 = G__51226;
i__50734 = G__51227;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__50736 = arguments.length;
switch (G__50736) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__50769 = arguments.length;
switch (G__50769) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__50771 = arguments.length;
switch (G__50771) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51231 = arguments.length;
var i__4830__auto___51232 = (0);
while(true){
if((i__4830__auto___51232 < len__4829__auto___51231)){
args__4835__auto__.push((arguments[i__4830__auto___51232]));

var G__51233 = (i__4830__auto___51232 + (1));
i__4830__auto___51232 = G__51233;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__50840_51234 = cljs.core.seq(nodes);
var chunk__50841_51235 = null;
var count__50842_51236 = (0);
var i__50843_51237 = (0);
while(true){
if((i__50843_51237 < count__50842_51236)){
var node_51238 = chunk__50841_51235.cljs$core$IIndexed$_nth$arity$2(null,i__50843_51237);
fragment.appendChild(shadow.dom._to_dom(node_51238));


var G__51239 = seq__50840_51234;
var G__51240 = chunk__50841_51235;
var G__51241 = count__50842_51236;
var G__51242 = (i__50843_51237 + (1));
seq__50840_51234 = G__51239;
chunk__50841_51235 = G__51240;
count__50842_51236 = G__51241;
i__50843_51237 = G__51242;
continue;
} else {
var temp__5754__auto___51243 = cljs.core.seq(seq__50840_51234);
if(temp__5754__auto___51243){
var seq__50840_51244__$1 = temp__5754__auto___51243;
if(cljs.core.chunked_seq_QMARK_(seq__50840_51244__$1)){
var c__4649__auto___51245 = cljs.core.chunk_first(seq__50840_51244__$1);
var G__51246 = cljs.core.chunk_rest(seq__50840_51244__$1);
var G__51247 = c__4649__auto___51245;
var G__51248 = cljs.core.count(c__4649__auto___51245);
var G__51249 = (0);
seq__50840_51234 = G__51246;
chunk__50841_51235 = G__51247;
count__50842_51236 = G__51248;
i__50843_51237 = G__51249;
continue;
} else {
var node_51250 = cljs.core.first(seq__50840_51244__$1);
fragment.appendChild(shadow.dom._to_dom(node_51250));


var G__51251 = cljs.core.next(seq__50840_51244__$1);
var G__51252 = null;
var G__51253 = (0);
var G__51254 = (0);
seq__50840_51234 = G__51251;
chunk__50841_51235 = G__51252;
count__50842_51236 = G__51253;
i__50843_51237 = G__51254;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50836){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50836));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50861_51255 = cljs.core.seq(scripts);
var chunk__50862_51256 = null;
var count__50863_51257 = (0);
var i__50864_51258 = (0);
while(true){
if((i__50864_51258 < count__50863_51257)){
var vec__50884_51259 = chunk__50862_51256.cljs$core$IIndexed$_nth$arity$2(null,i__50864_51258);
var script_tag_51260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50884_51259,(0),null);
var script_body_51261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50884_51259,(1),null);
eval(script_body_51261);


var G__51262 = seq__50861_51255;
var G__51263 = chunk__50862_51256;
var G__51264 = count__50863_51257;
var G__51265 = (i__50864_51258 + (1));
seq__50861_51255 = G__51262;
chunk__50862_51256 = G__51263;
count__50863_51257 = G__51264;
i__50864_51258 = G__51265;
continue;
} else {
var temp__5754__auto___51266 = cljs.core.seq(seq__50861_51255);
if(temp__5754__auto___51266){
var seq__50861_51267__$1 = temp__5754__auto___51266;
if(cljs.core.chunked_seq_QMARK_(seq__50861_51267__$1)){
var c__4649__auto___51268 = cljs.core.chunk_first(seq__50861_51267__$1);
var G__51269 = cljs.core.chunk_rest(seq__50861_51267__$1);
var G__51270 = c__4649__auto___51268;
var G__51271 = cljs.core.count(c__4649__auto___51268);
var G__51272 = (0);
seq__50861_51255 = G__51269;
chunk__50862_51256 = G__51270;
count__50863_51257 = G__51271;
i__50864_51258 = G__51272;
continue;
} else {
var vec__50892_51273 = cljs.core.first(seq__50861_51267__$1);
var script_tag_51274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50892_51273,(0),null);
var script_body_51275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50892_51273,(1),null);
eval(script_body_51275);


var G__51276 = cljs.core.next(seq__50861_51267__$1);
var G__51277 = null;
var G__51278 = (0);
var G__51279 = (0);
seq__50861_51255 = G__51276;
chunk__50862_51256 = G__51277;
count__50863_51257 = G__51278;
i__50864_51258 = G__51279;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50896){
var vec__50897 = p__50896;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50897,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50897,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50910 = arguments.length;
switch (G__50910) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__50948 = cljs.core.seq(style_keys);
var chunk__50949 = null;
var count__50950 = (0);
var i__50951 = (0);
while(true){
if((i__50951 < count__50950)){
var it = chunk__50949.cljs$core$IIndexed$_nth$arity$2(null,i__50951);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51281 = seq__50948;
var G__51282 = chunk__50949;
var G__51283 = count__50950;
var G__51284 = (i__50951 + (1));
seq__50948 = G__51281;
chunk__50949 = G__51282;
count__50950 = G__51283;
i__50951 = G__51284;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__50948);
if(temp__5754__auto__){
var seq__50948__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50948__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50948__$1);
var G__51285 = cljs.core.chunk_rest(seq__50948__$1);
var G__51286 = c__4649__auto__;
var G__51287 = cljs.core.count(c__4649__auto__);
var G__51288 = (0);
seq__50948 = G__51285;
chunk__50949 = G__51286;
count__50950 = G__51287;
i__50951 = G__51288;
continue;
} else {
var it = cljs.core.first(seq__50948__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51289 = cljs.core.next(seq__50948__$1);
var G__51290 = null;
var G__51291 = (0);
var G__51292 = (0);
seq__50948 = G__51289;
chunk__50949 = G__51290;
count__50950 = G__51291;
i__50951 = G__51292;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50956,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50960 = k50956;
var G__50960__$1 = (((G__50960 instanceof cljs.core.Keyword))?G__50960.fqn:null);
switch (G__50960__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50956,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50961){
var vec__50962 = p__50961;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50962,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50962,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50955){
var self__ = this;
var G__50955__$1 = this;
return (new cljs.core.RecordIter((0),G__50955__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50957,other50958){
var self__ = this;
var this50957__$1 = this;
return (((!((other50958 == null)))) && ((((this50957__$1.constructor === other50958.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50957__$1.x,other50958.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50957__$1.y,other50958.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50957__$1.__extmap,other50958.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50956){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50965 = k50956;
var G__50965__$1 = (((G__50965 instanceof cljs.core.Keyword))?G__50965.fqn:null);
switch (G__50965__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50956);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50955){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50966 = cljs.core.keyword_identical_QMARK_;
var expr__50967 = k__4481__auto__;
if(cljs.core.truth_((pred__50966.cljs$core$IFn$_invoke$arity$2 ? pred__50966.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50967) : pred__50966.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50967)))){
return (new shadow.dom.Coordinate(G__50955,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50966.cljs$core$IFn$_invoke$arity$2 ? pred__50966.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50967) : pred__50966.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50967)))){
return (new shadow.dom.Coordinate(self__.x,G__50955,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50955),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50955){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50955,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50959){
var extmap__4512__auto__ = (function (){var G__50969 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50959,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50959)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50969);
} else {
return G__50969;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50959),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50959),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50971,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50975 = k50971;
var G__50975__$1 = (((G__50975 instanceof cljs.core.Keyword))?G__50975.fqn:null);
switch (G__50975__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50971,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50976){
var vec__50977 = p__50976;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50977,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50977,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50970){
var self__ = this;
var G__50970__$1 = this;
return (new cljs.core.RecordIter((0),G__50970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50972,other50973){
var self__ = this;
var this50972__$1 = this;
return (((!((other50973 == null)))) && ((((this50972__$1.constructor === other50973.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50972__$1.w,other50973.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50972__$1.h,other50973.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50972__$1.__extmap,other50973.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50971){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50980 = k50971;
var G__50980__$1 = (((G__50980 instanceof cljs.core.Keyword))?G__50980.fqn:null);
switch (G__50980__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50971);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50970){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50981 = cljs.core.keyword_identical_QMARK_;
var expr__50982 = k__4481__auto__;
if(cljs.core.truth_((pred__50981.cljs$core$IFn$_invoke$arity$2 ? pred__50981.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50982) : pred__50981.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50982)))){
return (new shadow.dom.Size(G__50970,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50981.cljs$core$IFn$_invoke$arity$2 ? pred__50981.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50982) : pred__50981.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50982)))){
return (new shadow.dom.Size(self__.w,G__50970,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50970),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50970){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50970,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50974){
var extmap__4512__auto__ = (function (){var G__50984 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50974,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50974)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50984);
} else {
return G__50984;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50974),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50974),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__51342 = (i + (1));
var G__51343 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51342;
ret = G__51343;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50989){
var vec__50990 = p__50989;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50990,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50994 = arguments.length;
switch (G__50994) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5752__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5752__auto__)){
var child = temp__5752__auto__;
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
var G__51345 = ps;
var G__51346 = (i + (1));
el__$1 = G__51345;
i = G__51346;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50995 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50995,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50995,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50995,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50998_51347 = cljs.core.seq(props);
var chunk__50999_51348 = null;
var count__51000_51349 = (0);
var i__51001_51350 = (0);
while(true){
if((i__51001_51350 < count__51000_51349)){
var vec__51008_51351 = chunk__50999_51348.cljs$core$IIndexed$_nth$arity$2(null,i__51001_51350);
var k_51352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51008_51351,(0),null);
var v_51353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51008_51351,(1),null);
el.setAttributeNS((function (){var temp__5754__auto__ = cljs.core.namespace(k_51352);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51352),v_51353);


var G__51354 = seq__50998_51347;
var G__51355 = chunk__50999_51348;
var G__51356 = count__51000_51349;
var G__51357 = (i__51001_51350 + (1));
seq__50998_51347 = G__51354;
chunk__50999_51348 = G__51355;
count__51000_51349 = G__51356;
i__51001_51350 = G__51357;
continue;
} else {
var temp__5754__auto___51358 = cljs.core.seq(seq__50998_51347);
if(temp__5754__auto___51358){
var seq__50998_51359__$1 = temp__5754__auto___51358;
if(cljs.core.chunked_seq_QMARK_(seq__50998_51359__$1)){
var c__4649__auto___51360 = cljs.core.chunk_first(seq__50998_51359__$1);
var G__51361 = cljs.core.chunk_rest(seq__50998_51359__$1);
var G__51362 = c__4649__auto___51360;
var G__51363 = cljs.core.count(c__4649__auto___51360);
var G__51364 = (0);
seq__50998_51347 = G__51361;
chunk__50999_51348 = G__51362;
count__51000_51349 = G__51363;
i__51001_51350 = G__51364;
continue;
} else {
var vec__51011_51365 = cljs.core.first(seq__50998_51359__$1);
var k_51366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51011_51365,(0),null);
var v_51367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51011_51365,(1),null);
el.setAttributeNS((function (){var temp__5754__auto____$1 = cljs.core.namespace(k_51366);
if(cljs.core.truth_(temp__5754__auto____$1)){
var ns = temp__5754__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51366),v_51367);


var G__51368 = cljs.core.next(seq__50998_51359__$1);
var G__51369 = null;
var G__51370 = (0);
var G__51371 = (0);
seq__50998_51347 = G__51368;
chunk__50999_51348 = G__51369;
count__51000_51349 = G__51370;
i__51001_51350 = G__51371;
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
var vec__51015 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51015,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51015,(1),null);
var seq__51018_51372 = cljs.core.seq(node_children);
var chunk__51020_51373 = null;
var count__51021_51374 = (0);
var i__51022_51375 = (0);
while(true){
if((i__51022_51375 < count__51021_51374)){
var child_struct_51376 = chunk__51020_51373.cljs$core$IIndexed$_nth$arity$2(null,i__51022_51375);
if((!((child_struct_51376 == null)))){
if(typeof child_struct_51376 === 'string'){
var text_51377 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51377),child_struct_51376].join(''));
} else {
var children_51378 = shadow.dom.svg_node(child_struct_51376);
if(cljs.core.seq_QMARK_(children_51378)){
var seq__51036_51379 = cljs.core.seq(children_51378);
var chunk__51038_51380 = null;
var count__51039_51381 = (0);
var i__51040_51382 = (0);
while(true){
if((i__51040_51382 < count__51039_51381)){
var child_51383 = chunk__51038_51380.cljs$core$IIndexed$_nth$arity$2(null,i__51040_51382);
if(cljs.core.truth_(child_51383)){
node.appendChild(child_51383);


var G__51384 = seq__51036_51379;
var G__51385 = chunk__51038_51380;
var G__51386 = count__51039_51381;
var G__51387 = (i__51040_51382 + (1));
seq__51036_51379 = G__51384;
chunk__51038_51380 = G__51385;
count__51039_51381 = G__51386;
i__51040_51382 = G__51387;
continue;
} else {
var G__51388 = seq__51036_51379;
var G__51389 = chunk__51038_51380;
var G__51390 = count__51039_51381;
var G__51391 = (i__51040_51382 + (1));
seq__51036_51379 = G__51388;
chunk__51038_51380 = G__51389;
count__51039_51381 = G__51390;
i__51040_51382 = G__51391;
continue;
}
} else {
var temp__5754__auto___51392 = cljs.core.seq(seq__51036_51379);
if(temp__5754__auto___51392){
var seq__51036_51393__$1 = temp__5754__auto___51392;
if(cljs.core.chunked_seq_QMARK_(seq__51036_51393__$1)){
var c__4649__auto___51394 = cljs.core.chunk_first(seq__51036_51393__$1);
var G__51395 = cljs.core.chunk_rest(seq__51036_51393__$1);
var G__51396 = c__4649__auto___51394;
var G__51397 = cljs.core.count(c__4649__auto___51394);
var G__51398 = (0);
seq__51036_51379 = G__51395;
chunk__51038_51380 = G__51396;
count__51039_51381 = G__51397;
i__51040_51382 = G__51398;
continue;
} else {
var child_51399 = cljs.core.first(seq__51036_51393__$1);
if(cljs.core.truth_(child_51399)){
node.appendChild(child_51399);


var G__51400 = cljs.core.next(seq__51036_51393__$1);
var G__51401 = null;
var G__51402 = (0);
var G__51403 = (0);
seq__51036_51379 = G__51400;
chunk__51038_51380 = G__51401;
count__51039_51381 = G__51402;
i__51040_51382 = G__51403;
continue;
} else {
var G__51404 = cljs.core.next(seq__51036_51393__$1);
var G__51405 = null;
var G__51406 = (0);
var G__51407 = (0);
seq__51036_51379 = G__51404;
chunk__51038_51380 = G__51405;
count__51039_51381 = G__51406;
i__51040_51382 = G__51407;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51378);
}
}


var G__51408 = seq__51018_51372;
var G__51409 = chunk__51020_51373;
var G__51410 = count__51021_51374;
var G__51411 = (i__51022_51375 + (1));
seq__51018_51372 = G__51408;
chunk__51020_51373 = G__51409;
count__51021_51374 = G__51410;
i__51022_51375 = G__51411;
continue;
} else {
var G__51412 = seq__51018_51372;
var G__51413 = chunk__51020_51373;
var G__51414 = count__51021_51374;
var G__51415 = (i__51022_51375 + (1));
seq__51018_51372 = G__51412;
chunk__51020_51373 = G__51413;
count__51021_51374 = G__51414;
i__51022_51375 = G__51415;
continue;
}
} else {
var temp__5754__auto___51416 = cljs.core.seq(seq__51018_51372);
if(temp__5754__auto___51416){
var seq__51018_51417__$1 = temp__5754__auto___51416;
if(cljs.core.chunked_seq_QMARK_(seq__51018_51417__$1)){
var c__4649__auto___51418 = cljs.core.chunk_first(seq__51018_51417__$1);
var G__51419 = cljs.core.chunk_rest(seq__51018_51417__$1);
var G__51420 = c__4649__auto___51418;
var G__51421 = cljs.core.count(c__4649__auto___51418);
var G__51422 = (0);
seq__51018_51372 = G__51419;
chunk__51020_51373 = G__51420;
count__51021_51374 = G__51421;
i__51022_51375 = G__51422;
continue;
} else {
var child_struct_51423 = cljs.core.first(seq__51018_51417__$1);
if((!((child_struct_51423 == null)))){
if(typeof child_struct_51423 === 'string'){
var text_51424 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51424),child_struct_51423].join(''));
} else {
var children_51425 = shadow.dom.svg_node(child_struct_51423);
if(cljs.core.seq_QMARK_(children_51425)){
var seq__51042_51426 = cljs.core.seq(children_51425);
var chunk__51044_51427 = null;
var count__51045_51428 = (0);
var i__51046_51429 = (0);
while(true){
if((i__51046_51429 < count__51045_51428)){
var child_51430 = chunk__51044_51427.cljs$core$IIndexed$_nth$arity$2(null,i__51046_51429);
if(cljs.core.truth_(child_51430)){
node.appendChild(child_51430);


var G__51431 = seq__51042_51426;
var G__51432 = chunk__51044_51427;
var G__51433 = count__51045_51428;
var G__51434 = (i__51046_51429 + (1));
seq__51042_51426 = G__51431;
chunk__51044_51427 = G__51432;
count__51045_51428 = G__51433;
i__51046_51429 = G__51434;
continue;
} else {
var G__51435 = seq__51042_51426;
var G__51436 = chunk__51044_51427;
var G__51437 = count__51045_51428;
var G__51438 = (i__51046_51429 + (1));
seq__51042_51426 = G__51435;
chunk__51044_51427 = G__51436;
count__51045_51428 = G__51437;
i__51046_51429 = G__51438;
continue;
}
} else {
var temp__5754__auto___51439__$1 = cljs.core.seq(seq__51042_51426);
if(temp__5754__auto___51439__$1){
var seq__51042_51440__$1 = temp__5754__auto___51439__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51042_51440__$1)){
var c__4649__auto___51441 = cljs.core.chunk_first(seq__51042_51440__$1);
var G__51442 = cljs.core.chunk_rest(seq__51042_51440__$1);
var G__51443 = c__4649__auto___51441;
var G__51444 = cljs.core.count(c__4649__auto___51441);
var G__51445 = (0);
seq__51042_51426 = G__51442;
chunk__51044_51427 = G__51443;
count__51045_51428 = G__51444;
i__51046_51429 = G__51445;
continue;
} else {
var child_51458 = cljs.core.first(seq__51042_51440__$1);
if(cljs.core.truth_(child_51458)){
node.appendChild(child_51458);


var G__51459 = cljs.core.next(seq__51042_51440__$1);
var G__51460 = null;
var G__51461 = (0);
var G__51462 = (0);
seq__51042_51426 = G__51459;
chunk__51044_51427 = G__51460;
count__51045_51428 = G__51461;
i__51046_51429 = G__51462;
continue;
} else {
var G__51463 = cljs.core.next(seq__51042_51440__$1);
var G__51464 = null;
var G__51465 = (0);
var G__51466 = (0);
seq__51042_51426 = G__51463;
chunk__51044_51427 = G__51464;
count__51045_51428 = G__51465;
i__51046_51429 = G__51466;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51425);
}
}


var G__51467 = cljs.core.next(seq__51018_51417__$1);
var G__51468 = null;
var G__51469 = (0);
var G__51470 = (0);
seq__51018_51372 = G__51467;
chunk__51020_51373 = G__51468;
count__51021_51374 = G__51469;
i__51022_51375 = G__51470;
continue;
} else {
var G__51471 = cljs.core.next(seq__51018_51417__$1);
var G__51472 = null;
var G__51473 = (0);
var G__51474 = (0);
seq__51018_51372 = G__51471;
chunk__51020_51373 = G__51472;
count__51021_51374 = G__51473;
i__51022_51375 = G__51474;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51475 = arguments.length;
var i__4830__auto___51476 = (0);
while(true){
if((i__4830__auto___51476 < len__4829__auto___51475)){
args__4835__auto__.push((arguments[i__4830__auto___51476]));

var G__51477 = (i__4830__auto___51476 + (1));
i__4830__auto___51476 = G__51477;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51055){
var G__51056 = cljs.core.first(seq51055);
var seq51055__$1 = cljs.core.next(seq51055);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51056,seq51055__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__51058 = arguments.length;
switch (G__51058) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__48859__auto___51479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48860__auto__ = (function (){var switch__48824__auto__ = (function (state_51065){
var state_val_51066 = (state_51065[(1)]);
if((state_val_51066 === (1))){
var state_51065__$1 = state_51065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51065__$1,(2),once_or_cleanup);
} else {
if((state_val_51066 === (2))){
var inst_51062 = (state_51065[(2)]);
var inst_51063 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51065__$1 = (function (){var statearr_51067 = state_51065;
(statearr_51067[(7)] = inst_51062);

return statearr_51067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51065__$1,inst_51063);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48825__auto__ = null;
var shadow$dom$state_machine__48825__auto____0 = (function (){
var statearr_51068 = [null,null,null,null,null,null,null,null];
(statearr_51068[(0)] = shadow$dom$state_machine__48825__auto__);

(statearr_51068[(1)] = (1));

return statearr_51068;
});
var shadow$dom$state_machine__48825__auto____1 = (function (state_51065){
while(true){
var ret_value__48826__auto__ = (function (){try{while(true){
var result__48827__auto__ = switch__48824__auto__(state_51065);
if(cljs.core.keyword_identical_QMARK_(result__48827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48827__auto__;
}
break;
}
}catch (e51069){var ex__48828__auto__ = e51069;
var statearr_51070_51480 = state_51065;
(statearr_51070_51480[(2)] = ex__48828__auto__);


if(cljs.core.seq((state_51065[(4)]))){
var statearr_51071_51481 = state_51065;
(statearr_51071_51481[(1)] = cljs.core.first((state_51065[(4)])));

} else {
throw ex__48828__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51482 = state_51065;
state_51065 = G__51482;
continue;
} else {
return ret_value__48826__auto__;
}
break;
}
});
shadow$dom$state_machine__48825__auto__ = function(state_51065){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48825__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48825__auto____1.call(this,state_51065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48825__auto____0;
shadow$dom$state_machine__48825__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48825__auto____1;
return shadow$dom$state_machine__48825__auto__;
})()
})();
var state__48861__auto__ = (function (){var statearr_51072 = f__48860__auto__();
(statearr_51072[(6)] = c__48859__auto___51479);

return statearr_51072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48861__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

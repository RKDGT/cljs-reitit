goog.provide('app.clock');
var module$node_modules$analog_clock_react$build$index=shadow.js.require("module$node_modules$analog_clock_react$build$index", {});
app.clock.display_custom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.clock.date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
app.clock.analog_clock_props = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"useCustomTime","useCustomTime",1964148326),new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),new cljs.core.Keyword(null,"centerColor","centerColor",596433035),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"baseColor","baseColor",-184242612),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"centerBorderColor","centerBorderColor",1783016602),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"handColors","handColors",-783255589)],[true,"#2e2e2e","#459cff","300px","#17a2b8",(new Date()).getSeconds(),(new Date()).getHours(),"#fff",(new Date()).getMinutes(),true,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"second","second",-444702010),"#d81c7a",new cljs.core.Keyword(null,"minute","minute",-642875969),"#fff",new cljs.core.Keyword(null,"hour","hour",-555989214),"#fff"], null)]));
app.clock.get_current_time = (function app$clock$get_current_time(){
return setInterval((function (){
var fexpr__48576 = ((cljs.core.not(cljs.core.deref(app.clock.display_custom)))?(function (){var date = (new Date());
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.clock.analog_clock_props,cljs.core.assoc,new cljs.core.Keyword(null,"seconds","seconds",-445266194),date.getSeconds());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.clock.analog_clock_props,cljs.core.assoc,new cljs.core.Keyword(null,"hours","hours",58380855),date.getHours());

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.clock.analog_clock_props,cljs.core.assoc,new cljs.core.Keyword(null,"minutes","minutes",1319166394),date.getMinutes());
})():null);
return (fexpr__48576.cljs$core$IFn$_invoke$arity$0 ? fexpr__48576.cljs$core$IFn$_invoke$arity$0() : fexpr__48576.call(null));
}),(1000));
});
app.clock.change_display = (function app$clock$change_display(){
return cljs.core.reset_BANG_(app.clock.display_custom,cljs.core.not(cljs.core.deref(app.clock.display_custom)));
});
app.clock.clock = (function app$clock$clock(){
app.clock.get_current_time();

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock","div.clock",297094939),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$analog_clock_react$build$index.default,cljs.core.deref(app.clock.analog_clock_props)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn","div.btn",1399662150),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.try-for-free-btn","button.try-for-free-btn",733589093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.clock.change_display], null),"show current time"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.try-for-free-btn","button.try-for-free-btn",733589093),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.clock.change_display], null),"show customn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(app.clock.date),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48577_SHARP_){
return cljs.core.reset_BANG_(app.clock.date,p1__48577_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter in format: hh:mm:ss"], null)], null)], null)], null);
});

//# sourceMappingURL=app.clock.js.map

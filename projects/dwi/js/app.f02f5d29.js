(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],_=0,d=[];_<i.length;_++)o=i[_],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/projects/dwi/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"5ede":function(t,e,a){},"8de3":function(t,e,a){"use strict";var r=a("5ede"),n=a.n(r);n.a},"9c0c":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("router-view")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"logo _mt_5 _ml_5 _pl_5 _d_ib"},[a("mark",{staticClass:"mark mark_size_middle"},[t._v("DWI")])])])}],o=(a("5c0b"),a("2877")),i={},l=Object(o["a"])(i,n,s,!1,null,null,null),c=l.exports,u=a("9483");Object(u["a"])("".concat("/projects/dwi/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var _=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"form _shadow-1",class:t.story.createStoryUnit.formActive&&"form_active"},[a("div",{staticClass:"_ml_3 _mb_3"},[a("mark",{staticClass:"mark mark_size_middle _mr_2 _d_ib"},[t._v("Type:")]),t._v(t._s(t.story.createStoryUnit.data.type)+" ")]),a("div",{staticClass:"_d_ib _ml_3"},[a("mark",{staticClass:"mark mark_size_middle _mr_2 _d_ib _mb_2"},[t._v("Tags:")]),a("transition-group",{attrs:{name:"_list"}},t._l(t.story.createStoryUnit.data.tags,(function(e,r){return a("div",{key:e,staticClass:"tag _mr_2 _mb_2",on:{dblclick:function(e){return t.story.createStoryUnit.data.tags.splice(r,1)}}},[t._v(" "+t._s(e)+" ")])})),0)],1),a("br"),a("div",{staticClass:"_d_ib _mb_3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.story.createStoryUnit.newTag,expression:"story.createStoryUnit.newTag"}],staticClass:"select select_size_middle _ml_3 _w_100",attrs:{size:"4"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.story.createStoryUnit,"newTag",e.target.multiple?a:a[0])}}},t._l(t.setTags,(function(e){return a("option",{key:e,on:{dblclick:function(e){""!=t.story.createStoryUnit.newTag&&t.story.createStoryUnit.data.tags.push(t.story.createStoryUnit.newTag)&&(t.story.createStoryUnit.newTag="")}}},[t._v(" "+t._s(e)+" ")])})),0),a("span",{staticClass:"_d_ib _ml_3 _mt_2"},[t._v("OR (if new tag)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.story.createStoryUnit.newTag,expression:"story.createStoryUnit.newTag"}],staticClass:"input _ml_3 _mt_2",attrs:{type:"text"},domProps:{value:t.story.createStoryUnit.newTag},on:{input:function(e){e.target.composing||t.$set(t.story.createStoryUnit,"newTag",e.target.value)}}}),a("button",{staticClass:"button _ml_3 _mt_2",on:{click:function(e){""!=t.story.createStoryUnit.newTag&&t.story.createStoryUnit.data.tags.push(t.story.createStoryUnit.newTag)&&(t.story.createStoryUnit.newTag="")}}},[t._v(" Add tag ")])]),a("mark",{staticClass:"mark mark_size_middle _d_ib _ml_3"},[t._v("Value:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.story.createStoryUnit.data.value,expression:"story.createStoryUnit.data.value"}],staticClass:"input input_theme_secondary _ml_3 _mt_2",attrs:{type:"number",placeholder:"Number",min:"1"},domProps:{value:t.story.createStoryUnit.data.value},on:{input:function(e){e.target.composing||t.$set(t.story.createStoryUnit.data,"value",e.target.value)}}}),a("button",{staticClass:"button button_size_large button_theme_primary _ml_4 _mt_3",on:{click:t.addStoryUnit}},[t._v(" Add ")])]),a("div",{staticClass:"form-bg",class:t.story.createStoryUnit.formActive&&"form-bg_active",on:{click:function(e){t.story.createStoryUnit.formActive=!1}}}),a("div",{staticClass:"create-story-unit button-group _d_ib _shadow-3"},[a("button",{staticClass:"button button_size_large",attrs:{type:"button"},on:{click:function(e){(t.story.createStoryUnit.formActive=!0)&&(t.story.createStoryUnit.data.type="income")}}},[t._v(" Income ")]),a("div",{staticClass:"button button_size_large",on:{click:function(e){(t.story.createStoryUnit.formActive=!0)&&(t.story.createStoryUnit.data.type="expense")}}},[t._v(" Expense ")])]),a("div",{staticClass:"wrap wrap_page"},[a("div",{staticClass:"wrap__inner _pl_5"},[a("Bubble",{staticClass:"_mt_5 _d_ib",attrs:{interest:t.saveThisWeekInterest,text:"Saved this week as a interest"},nativeOn:{click:function(e){(t.story.type="income")&&(t.story.range="w")}}}),a("Bubble",{staticClass:"_ml_4 _mt_5 _d_ib",attrs:{interest:t.expensesTodayInterest,text:"Expenses today",form:"long",theme:"secondary"},nativeOn:{click:function(e){(t.story.type="expense")&&(t.story.range="d")}}}),a("div",{staticClass:"wrap _mt_5"},[a("div",{staticClass:"balance"},[a("h4",[a("mark",{staticClass:"mark mark_size_large"},[t._v(" Balance "+t._s(t.getSum(t.getData("i","income"))-t.getSum(t.getData("i","expense")))+"$ ")])])])]),a("div",{staticClass:"wrap _mt_4"},[a("h5",[t._v(" Income today "),a("mark",{staticClass:"mark mark_size_small"},[t._v(" "+t._s(t.incomeToday)+"$ ")])]),a("br"),a("br"),a("h6",[t._v(" expenses today "),a("mark",{staticClass:"mark mark_size_small"},[t._v(" "+t._s(t.expensesToday)+"$ ")])]),a("br"),a("br"),a("h5",[t._v(" Last 30 days revenue "),a("mark",{staticClass:"mark mark_size_small"},[t._v(" "+t._s(t.getSum(t.getData("m","income")))+"$ ")])]),a("br"),a("br"),a("h6",[t._v(" Last 30 days expenses "),a("mark",{staticClass:"mark mark_size_small"},[t._v(" "+t._s(t.getSum(t.getData("m","expense")))+"$ ")])])])],1),a("div",{staticClass:"wrap__inner _pl_4"},[a("h3",{staticClass:"_pl_4"},[t._v(t._s(t.story.rangeAssn[t.story.range])+" STORY")]),a("div",{staticClass:"wrap _mt_4"},[a("div",{staticClass:"wrap _mb_2"},[a("div",{staticClass:"_d_ib _ws_nw _mr_3 _mb_2"},[a("mark",{staticClass:"mark mark_size_small"},[t._v(" Range: ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.story.range,expression:"story.range"}],staticClass:"select _ml_2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.story,"range",e.target.multiple?a:a[0])}}},t._l(t.story.rangeAssn,(function(e,r){return a("option",{key:r,domProps:{value:r}},[t._v(" "+t._s(t.story.rangeAssn[r])+" ")])})),0)]),a("div",{staticClass:"_d_ib _mb_2"},[a("mark",{staticClass:"mark mark_size_small"},[t._v(" Sort: ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.story.sort,expression:"story.sort"}],staticClass:"select _ml_2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.story,"sort",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"date"}},[t._v(" date ")]),a("option",{attrs:{value:"value"}},[t._v(" value ")])]),a("div",{staticClass:"button-group _d_ib _ml_2"},[a("button",{staticClass:"button",class:t.story.newer&&"button_theme_secondary",attrs:{type:"button"},on:{click:function(e){t.story.newer=!0}}},[a("i",{staticClass:"button__icon button__icon_only fas fa-sort-amount-down"})]),a("button",{staticClass:"button",class:!t.story.newer&&"button_theme_secondary",attrs:{type:"button"},on:{click:function(e){t.story.newer=!1}}},[a("i",{staticClass:"button__icon button__icon_only fas fa-sort-amount-up"})])])]),a("div",{staticClass:"_d_ib _mb_2"},[a("mark",{staticClass:"mark mark_size_small"},[t._v(" Type: ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.story.type,expression:"story.type"}],staticClass:"select _ml_2",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.story,"type",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:!0}},[t._v(" All ")]),a("option",{attrs:{value:"income"}},[t._v(" income ")]),a("option",{attrs:{value:"expense"}},[t._v(" expense ")])])])]),a("transition-group",{staticClass:"wrap story",attrs:{name:"_list",tag:"div"}},t._l(t.setStory,(function(e){return a("div",{key:e.id,staticClass:"story-unit _mt_3 _list-item",class:"story-unit_type_"+e.type,attrs:{transition:"thing"}},[a("div",{staticClass:"story-unit__value"},[t._v(t._s(e.value)+"$")]),a("div",{staticClass:"story-unit__tags"},t._l(e.tags,(function(e,r){return a("span",{key:r,staticClass:"tag _mr_2"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"story-unit__date _ml_5 _pl_2 _mt_2"},[t._v(" "+t._s(e.date.getFullYear()+"."+e.date.getMonth()+"."+e.date.getDate())+" ")])])})),0)],1)])])])},m=[],y=(a("a4d3"),a("4de4"),a("fb6a"),a("4e82"),a("b680"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bubble",class:(t.form?" bubble_form_"+t.form:"")+(t.theme?" bubble_theme_"+t.theme:"")},[a("div",{staticClass:"bubble__interest"},[t._v(t._s(t.interest&&t.interest)+"%")]),a("div",{staticClass:"bubble__interest-bg",style:{height:t.interest+"%"}}),a("div",{staticClass:"bubble__text"},[a("p",{staticClass:"bubble__text-inner"},[t._v(" "+t._s(t.text)+" ")])])])},p=[],v={name:"Bubble",props:{interest:String,text:String,form:String,theme:String}},f=v,b=Object(o["a"])(f,g,p,!1,null,"776fa2af",null),w=b.exports,h=a("2f62");function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){Object(y["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S={name:"Home",components:{Bubble:w},data:function(){return{story:{type:!0,newer:!0,rangeAssn:{m:"THIS MONTH",w:"THIS WEEK",d:"TODAY"},range:"w",sort:"date",createStoryUnit:{formActive:!1,newTag:"",data:{type:"",tags:[],value:0}}}}},computed:k({},Object(h["b"])(["getSum","getData","getInterest","sortData","getTags"]),{saveThisWeekInterest:function(){var t=this.getSum(this.getData("w","income"))-this.getSum(this.getData("w","expense")),e=this.getSum(this.getData("w","income")),a=this.getInterest(e,t);return a.toFixed(2)},expensesTodayInterest:function(){var t=this.incomeToday,e=this.expensesToday,a=this.getInterest(t,e);return a.toFixed(2)},incomeToday:function(){return this.getSum(this.getData("d","income"))},expensesToday:function(){return this.getSum(this.getData("d","expense"))},setStory:function(){return this.sortData(this.getData(this.story.range,this.story.type),this.story.newer,this.story.sort)},setTags:function(){return this.getTags(this.story.createStoryUnit.data.tags.length,this.story.createStoryUnit.data.tags.slice(-1)[0],this.story.createStoryUnit.data.type)}}),methods:{addStoryUnit:function(){this.story.createStoryUnit.data.value>0&&0!=this.story.createStoryUnit.data.tags.length&&(this.story.createStoryUnit.data.date=new Date,this.$store.state.settings.story.lastId+=1,this.story.createStoryUnit.data.id=this.$store.state.settings.story.lastId,this.$store.state.story.push(this.story.createStoryUnit.data),this.story.createStoryUnit={formActive:!1,newTag:"",data:{type:"",tags:[],value:0}})}}},C=S,x=(a("8de3"),Object(o["a"])(C,d,m,!1,null,"24f9aa1c",null)),T=x.exports;r["a"].use(_["a"]);var U=[{path:"/",name:"home",component:T}],O=new _["a"]({mode:"history",base:"/projects/dwi/",routes:U}),j=O;a("caad"),a("d81d"),a("a9e3");r["a"].use(h["a"]);var A=[{id:1,type:"income",tags:["main work","irregularly"],value:12,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1)},{id:2,type:"income",tags:["main work"],value:7,date:new Date},{id:3,type:"income",tags:["main work"],value:21,date:new Date},{id:4,type:"income",tags:["main work","irregularly"],value:8,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-2)},{id:5,type:"income",tags:["main work","irregularly"],value:8,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-3)},{id:6,type:"income",tags:["main work","irregularly"],value:8,date:new Date((new Date).getFullYear(),(new Date).getMonth()-1,(new Date).getDate())},{id:7,type:"income",tags:["main work","irregularly"],value:3,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-26)},{id:8,type:"income",tags:["main work","irregularly"],value:10,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-20)},{id:9,type:"expense",tags:["gadgets","phone"],value:12,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-1)},{id:10,type:"expense",tags:["eat","vegetables","potatoes"],value:2,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())},{id:11,type:"expense",tags:["eat","vegetables","carrots"],value:4.5,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())},{id:12,type:"expense",tags:["eat","vegetables","сucumbers"],value:3.5,date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate())}],$=new h["a"].Store({state:{settings:{story:{lastId:12}},story:A},mutations:{},actions:{},getters:{getData:function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"w",a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r={d:1,w:7,m:30,i:1/0},n=[];return t.story.map((function(t){if(t.type==a||"boolean"===typeof a&&a){var s=Math.ceil(Math.abs(t.date.getTime()-(new Date).getTime())/864e5)<=r[e];s&&n.push(t)}})),n}},getSum:function(){return function(t){var e=0;return t.map((function(t){e+=Number(t.value)})),e}},getInterest:function(){return function(t,e){return 100*e/t}},sortData:function(){return function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"date";return t.sort((function(t,r){return"date"==a?e?new Date(r.date)-new Date(t.date):new Date(t.date)-new Date(r.date):"value"==a?e?r.value-t.value:t.value-r.value:void 0})),t}},getTags:function(t){return function(e,a,r){var n=[];return t.story.map((function(t){t.type==r&&t.tags[e]&&!n.includes(t.tags[e])&&(1==e?n.push(t.tags[e]):t.tags[e-1]==a&&n.push(t.tags[e]))})),n}}}});r["a"].config.productionTip=!1,new r["a"]({router:j,store:$,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.f02f5d29.js.map
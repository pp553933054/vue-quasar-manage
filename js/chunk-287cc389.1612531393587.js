(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-287cc389"],{"4d4c":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o}));var n={right:"5px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},o={borderRadius:"5px",backgroundColor:"rgba(144,147,153,0.9)",padding:"10px;",margin:"10px;",width:"3px"}},"5f22":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"q-pa-md base-markdown-content",staticStyle:{transform:"translateY(20%)"}},[s("q-card",{attrs:{flat:""}},[s("q-skeleton",{attrs:{height:"150px",square:""}}),s("q-card-section",[s("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text"}}),s("q-skeleton",{staticClass:"text-subtitle1",attrs:{type:"text",width:"50%"}}),s("q-skeleton",{staticClass:"text-caption",attrs:{type:"text"}})],1)],1)],1):t._e()},o=[],i={name:"SkeletonDemo",props:["show"]},a=i,r=s("2877"),c=s("fe09"),l=Object(r["a"])(a,n,o,!1,null,null,null);e["a"]=l.exports;l.options.components=Object.assign(Object.create(l.options.components||null),l.options.components||{},{QCard:c["h"],QSkeleton:c["B"],QCardSection:c["j"]})},b0dd:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-content"},[s("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"100%"},attrs:{"thumb-style":t.thumbStyle,visible:!1}},[t._t("default")],2)],1)},o=[],i=(s("dca8"),s("4d4c")),a={name:"BaseContent",data:function(){return{thumbStyle:i["a"],BasePath:""}},props:["position"],methods:{ScrollToPosition:function(t){this.$refs.scrollArea.setScrollPosition(t,300)},getPosition:function(){return this.$refs.scrollArea.getScrollPosition()}},mounted:function(){this.BasePath=this.$route.path,Object.freeze(this.BasePath);var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},deactivated:function(){window.sessionStorage.setItem(this.BasePath,JSON.stringify({listScrollTop:this.getPosition()}))},activated:function(){var t=window.sessionStorage.getItem(this.$route.path);if(t){var e=JSON.parse(t);this.ScrollToPosition(e.listScrollTop)}},destroyed:function(){sessionStorage.removeItem(this.BasePath)}},r=a,c=s("2877"),l=s("fe09"),d=Object(c["a"])(r,n,o,!1,null,null,null);e["a"]=d.exports;d.options.components=Object.assign(Object.create(d.options.components||null),d.options.components||{},{QScrollArea:l["z"]})},ed69:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-content",[s("skeleton-demo",{attrs:{show:t.isLoadingVisible}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoadingVisible,expression:"!isLoadingVisible"}],staticClass:"base-markdown-content"},[s("v-md-editor",{attrs:{value:t.content,mode:"preview"}})],1)],1)},o=[],i=s("b0dd"),a=s("5f22"),r={name:"renderOptimization",components:{SkeletonDemo:a["a"],BaseContent:i["a"]},data:function(){return{content:"",isLoadingVisible:!1}},methods:{getMsg:function(){var t=this;this.isLoadingVisible=!this.isLoadingVisible;var e={url:this.$PUBLIC_PATH+"data/renderOptimizationData.md",method:"get",responseType:"text"};this.$fetchData(e).then((function(e){t.isLoadingVisible=!t.isLoadingVisible,t.content=e.data})).catch((function(t){}))}},created:function(){this.getMsg()}},c=r,l=s("2877"),d=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=d.exports}}]);
"use strict";(self["webpackChunkcapstone_project_website"]=self["webpackChunkcapstone_project_website"]||[]).push([[443],{6919:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var i=n(3396),s=n(9242),o=n(7139);const r={class:"about"},a={class:"header-internal"},u=(0,i._)("h2",null,"About",-1),c={class:"splash-content"},l=(0,i._)("p",{class:"name name-internal"},"Davy Jones",-1),d={class:"page"},m=["src"],h=["src"],g={class:"arrowBtns"},p=(0,i._)("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,i._)("polygon",{points:".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"})],-1),C=[p],w=(0,i._)("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,i._)("polygon",{points:"23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"})],-1),v=[w];function x(t,e,n,p,w,x){const _=(0,i.up)("WisLogo");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("header",a,[u,(0,i._)("div",c,[(0,i.Wm)(_)]),l]),(0,i._)("div",d,[(0,i.Wm)(s.W3,{name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[w.isContentVisible?((0,i.wg)(),(0,i.iD)("div",{class:"content-wrapper",key:w.currentIndex},[x.currentContent.imgLeft?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"img-left",src:x.currentContent.imgLeft,alt:"Process Image: {{ currentContent.title }}"},null,8,m)):(0,i.kq)("",!0),(0,i._)("div",{class:(0,o.C_)(["content-text",{"text-right":x.currentContent.imgRight}])},[(0,i._)("h3",null,(0,o.zw)(x.currentContent.title),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(x.currentContent.text,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t.id},(0,o.zw)(t),1)))),128))],2),x.currentContent.imgRight?((0,i.wg)(),(0,i.iD)("img",{key:1,class:"img-right",src:x.currentContent.imgRight,alt:"Process Image: {{ currentContent.title }}"},null,8,h)):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])),_:1})]),(0,i._)("div",g,[(0,i._)("button",{class:"previousBtn",onClick:e[0]||(e[0]=(...t)=>x.previousContent&&x.previousContent(...t))},C),(0,i._)("button",{class:"forwardBtn",onClick:e[1]||(e[1]=(...t)=>x.nextContent&&x.nextContent(...t))},v)])])}var _=n(3864),f={name:"AboutView",data(){return{currentIndex:0,content:[{title:"Content 1",text:["This is the first content."],imgLeft:n(3856)},{title:"Content 2",text:["This is the second content."]},{title:"Content 3",text:["This is the third content."]}],isContentVisible:!0}},components:{WisLogo:_.Z},computed:{currentContent(){const t=Math.min(Math.max(0,this.currentIndex),this.content.length-1);return this.content[t]}},methods:{nextContent(){this.isContentVisible=!1,setTimeout((()=>{this.currentIndex=Math.min(this.currentIndex+1,this.content.length-1),this.isContentVisible=!0}),350)},previousContent(){this.isContentVisible=!1,setTimeout((()=>{this.currentIndex=Math.max(this.currentIndex-1,0),this.isContentVisible=!0}),350)},handleKeydown(t){"ArrowLeft"===t.key?this.previousContent():"ArrowRight"===t.key&&this.nextContent()}},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)}},b=n(89);const k=(0,b.Z)(f,[["render",x]]);var y=k},1359:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var i=n(3396),s=n(9242),o=n(7139);const r={class:"process"},a={class:"header-internal"},u=(0,i._)("h2",null,"Process",-1),c={class:"splash-content"},l=(0,i._)("p",{class:"name name-internal"},"Davy Jones",-1),d={class:"page"},m=["src"],h=["src"],g={class:"arrowBtns"},p=(0,i._)("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,i._)("polygon",{points:".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"})],-1),C=[p],w=(0,i._)("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,i._)("polygon",{points:"23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"})],-1),v=[w];function x(t,e,n,p,w,x){const _=(0,i.up)("WisLogo");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("header",a,[u,(0,i._)("div",c,[(0,i.Wm)(_)]),l]),(0,i._)("div",d,[(0,i.Wm)(s.W3,{name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[w.isContentVisible?((0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)(["content-wrapper",{"img-right":x.currentContent.imgRight}]),key:w.currentIndex},[x.currentContent.imgLeft?((0,i.wg)(),(0,i.iD)("img",{key:0,src:x.currentContent.imgLeft,alt:"Process Image: {{ currentContent.title }}"},null,8,m)):(0,i.kq)("",!0),(0,i._)("div",{class:(0,o.C_)(["content-text",{"text-right":x.currentContent.imgRight}])},[(0,i._)("h3",null,(0,o.zw)(x.currentContent.title),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(x.currentContent.text,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t.id},(0,o.zw)(t),1)))),128))],2),x.currentContent.imgRight?((0,i.wg)(),(0,i.iD)("img",{key:1,src:x.currentContent.imgRight,alt:"Process Image: {{ currentContent.title }}"},null,8,h)):(0,i.kq)("",!0)],2)):(0,i.kq)("",!0)])),_:1})]),(0,i._)("div",g,[(0,i._)("button",{class:"previousBtn",onClick:e[0]||(e[0]=(...t)=>x.previousContent&&x.previousContent(...t))},C),(0,i._)("button",{class:"forwardBtn",onClick:e[1]||(e[1]=(...t)=>x.nextContent&&x.nextContent(...t))},v)])])}var _=n(3864),f={name:"ProcessView",data(){return{currentIndex:0,content:[{title:"Content 1",text:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Netus et malesuada fames ac turpis. Imperdiet sed euismod nisi porta lorem mollis. Auctor urna nunc id cursus metus. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu nisl nunc mi ipsum faucibus. A iaculis at erat pellentesque adipiscing. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Netus et malesuada fames ac turpis. Imperdiet sed euismod nisi porta lorem mollis. Auctor urna nunc id cursus metus. Volutpat blandit aliquam etiam erat velit scelerisque in. Eu nisl nunc mi ipsum faucibus. A iaculis at erat pellentesque adipiscing. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo."],imgLeft:n(3856)},{title:"Content 2",text:["This is the second content."],imgRight:n(3856)},{title:"Content 3",text:["This is the third content."]}],isContentVisible:!0}},components:{WisLogo:_.Z},computed:{currentContent(){const t=Math.min(Math.max(0,this.currentIndex),this.content.length-1);return this.content[t]}},methods:{nextContent(){this.isContentVisible=!1,setTimeout((()=>{this.currentIndex=Math.min(this.currentIndex+1,this.content.length-1),this.isContentVisible=!0}),350)},previousContent(){this.isContentVisible=!1,setTimeout((()=>{this.currentIndex=Math.max(this.currentIndex-1,0),this.isContentVisible=!0}),350)},handleKeydown(t){"ArrowLeft"===t.key?this.previousContent():"ArrowRight"===t.key&&this.nextContent()}},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)}},b=n(89);const k=(0,b.Z)(f,[["render",x]]);var y=k},6657:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var i=n(3396),s=n(9242),o=n(7139);const r={class:"resources"},a={class:"header-internal"},u=(0,i._)("h2",null,"Resources",-1),c={class:"splash-content"},l=(0,i._)("p",{class:"name name-internal"},"Davy Jones",-1),d={class:"page"},m=["src"],h=["src"],g={class:"arrowBtns"},p=(0,i._)("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,i._)("polygon",{points:".00006 12 1.42859 10.57141 1.42865 10.57141 10.00006 2 11.42865 3.42859 3.95776 10.89948 24 10.89948 24 12.89948 3.75671 12.89948 11.42865 20.57141 10.00006 22 1.42865 13.42859 1.42859 13.42865 0 12.00006 .00006 12"})],-1),C=[p],w=(0,i._)("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[(0,i._)("polygon",{points:"23.99994 12 22.57141 10.57141 22.57135 10.57141 13.99994 2 12.57135 3.42859 20.04224 10.89948 0 10.89948 0 12.89948 20.24329 12.89948 12.57135 20.57141 13.99994 22 22.57135 13.42859 22.57141 13.42865 24 12.00006 23.99994 12"})],-1),v=[w];function x(t,e,n,p,w,x){const _=(0,i.up)("WisLogo");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("header",a,[u,(0,i._)("div",c,[(0,i.Wm)(_)]),l]),(0,i._)("div",d,[(0,i.Wm)(s.W3,{name:"fade",mode:"out-in"},{default:(0,i.w5)((()=>[w.isContentVisible?((0,i.wg)(),(0,i.iD)("div",{class:"content-wrapper",key:w.currentIndex},[x.currentContent.imgLeft?((0,i.wg)(),(0,i.iD)("img",{key:0,class:"img-left",src:x.currentContent.imgLeft,alt:"Process Image: {{ currentContent.title }}"},null,8,m)):(0,i.kq)("",!0),(0,i._)("div",{class:(0,o.C_)(["content-text",{"text-right":x.currentContent.imgRight}])},[(0,i._)("h3",null,(0,o.zw)(x.currentContent.title),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(x.currentContent.text,(t=>((0,i.wg)(),(0,i.iD)("p",{key:t.id},(0,o.zw)(t),1)))),128))],2),x.currentContent.imgRight?((0,i.wg)(),(0,i.iD)("img",{key:1,class:"img-right",src:x.currentContent.imgRight,alt:"Process Image: {{ currentContent.title }}"},null,8,h)):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])),_:1})]),(0,i._)("div",g,[(0,i._)("button",{class:"previousBtn",onClick:e[0]||(e[0]=(...t)=>x.previousContent&&x.previousContent(...t))},C),(0,i._)("button",{class:"forwardBtn",onClick:e[1]||(e[1]=(...t)=>x.nextContent&&x.nextContent(...t))},v)])])}var _=n(3864),f={name:"ResourcesView",data(){return{currentIndex:0,content:[{title:"Content 1",text:["This is the first content."],imgLeft:n(3856)},{title:"Content 2",text:["This is the second content."]},{title:"Content 3",text:["This is the third content."]}],isContentVisible:!0}},components:{WisLogo:_.Z},computed:{currentContent(){const t=Math.min(Math.max(0,this.currentIndex),this.content.length-1);return this.content[t]}},methods:{nextContent(){this.isContentVisible=!1,setTimeout((()=>{this.currentIndex=Math.min(this.currentIndex+1,this.content.length-1),this.isContentVisible=!0}),350)},previousContent(){this.isContentVisible=!1,setTimeout((()=>{this.currentIndex=Math.max(this.currentIndex-1,0),this.isContentVisible=!0}),350)},handleKeydown(t){"ArrowLeft"===t.key?this.previousContent():"ArrowRight"===t.key&&this.nextContent()}},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)}},b=n(89);const k=(0,b.Z)(f,[["render",x]]);var y=k}}]);
//# sourceMappingURL=about.ce40fb05.js.map
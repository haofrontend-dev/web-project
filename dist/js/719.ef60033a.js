"use strict";(self["webpackChunkweb_project"]=self["webpackChunkweb_project"]||[]).push([[719],{1719:function(t,s,n){n.r(s),n.d(s,{default:function(){return A}});var e=function(){var t=this,s=t._self._c;return s("div",[s("header-main"),s("main",[t._t("default")],2),s("footer-main"),t.isShowBtnUp?s("div",{staticClass:"btn-up"},[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.scrollToTop}},[s("b-icon-arrow-up")],1)]):t._e()],1)},i=[],o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container p-0"},[s("header",{staticClass:"text-lg-center fixed-top w-100"},[s("div",{staticClass:"navbar navbar-expand-lg d-lg-block justify-content-between h-100 navbar-mobile"},[s("router-link",{staticClass:"d-inline-block h-100 logo",attrs:{to:"/"}},[s("img",{staticClass:"logo",attrs:{src:n(7442),alt:""}})]),s("button",{staticClass:"btn-toggle d-inline-block d-lg-none",on:{click:function(s){t.isOpenMenu=!0}}},[s("img",{attrs:{src:n(5512),alt:"",width:"34",height:"20"}})])],1)]),s("nav",{staticClass:"d-none d-lg-block"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),s("router-link",{attrs:{to:"/profile"}},[t._v("Profile")]),s("router-link",{attrs:{to:"/projects"}},[t._v("Projects")]),s("router-link",{attrs:{to:"/contact"}},[t._v("Contacts")])],1),t.isOpenMenu?s("div",{staticClass:"nav-mobile"},[s("div",{staticClass:"nav-content"},[s("img",{attrs:{src:n(6499),alt:""}}),s("span",{staticClass:"icon-close",on:{click:function(s){t.isOpenMenu=!1}}},[t._v("×")]),s("ul",{staticClass:"nav-list"},t._l(t.mobileMenus,(function(n){return s("li",{key:n.name},[n.children?s("button",{staticClass:"btn",on:{click:function(t){n.dropdown=!n.dropdown}}},[s("span",[t._v(" "+t._s(n.name))])]):s("button",{staticClass:"btn",on:{click:t.closeMenuMobile}},[s("router-link",{attrs:{to:n.path}},[t._v(t._s(n.name))])],1),n.dropdown?s("div",{staticClass:"nav-child"},[s("ul",t._l(n.children,(function(n){return s("li",{key:n.name},[s("button",{staticClass:"btn",on:{click:t.closeMenuMobile}},[s("router-link",{attrs:{to:n.path}},[t._v(t._s(n.name))])],1)])})),0)]):t._e()])})),0)])]):t._e()])},a=[],l={data(){return{isOpenMenu:!1,mobileMenus:[{name:"Home",path:"/"},{name:"Profile",path:"/profile"},{name:"Projects",path:"/project",children:[{name:"General",path:"/projects"},{name:"Beauty & FMCG",path:"/projects/beauty"},{name:"F&B",path:"/projects/f&b"},{name:"Key visual",path:"/projects/key-visual"},{name:"Branding",path:"/projects/branding"},{name:"Motion & Illustration",path:"/projects/motion-ai"}],dropdown:!1},{name:"Contact",path:"/contact"}]}},methods:{closeMenuMobile(){this.isOpenMenu=!1}}},c=l,r=n(3736),d=(0,r.Z)(c,o,a,!1,null,"1ce17098",null),v=d.exports,u=function(){var t=this,s=t._self._c;return s("div",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row footer-content"},[s("div",{staticClass:"col-5 col-lg-3 mb-3 logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"w-75",attrs:{src:n(7442),alt:""}})]),s("p",{staticClass:"text-white d-none d-lg-block"},[t._v("All rights reserved 2023")])],1),t._m(0),t._m(1),t._m(2)]),s("p",{staticClass:"mt-3 h5 text-white d-block d-lg-none text-footer"},[t._v(" All rights reserved 2023 ")])])])},p=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-5 col-lg-3 mb-3 service"},[s("div",[s("span",{staticClass:"text-white fw-bold h5"},[t._v("Services")]),s("ul",[s("li",[t._v("Graphic Design")]),s("li",[t._v("Motion Graphic")]),s("li",[t._v("Illustration")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-7 col-lg-4 mb-3 service contact"},[s("div",[s("div",[s("span",{staticClass:"text-white fw-bold h5"},[t._v("Contact")]),s("ul",[s("li",[t._v("T:"),s("span",{staticClass:"ms-2"},[t._v("+84911354264")])]),s("li",[t._v("E:"),s("span",{staticClass:"ms-2"},[t._v("linhchi.nt.158@gmail.com")])])])]),s("div",[s("img",{attrs:{src:n(5779),alt:""}}),s("img",{attrs:{src:n(987),alt:""}}),s("img",{attrs:{src:n(6570),alt:""}})])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-7 col-lg-2 mb-3 service follow"},[s("div",[s("span",{staticClass:"text-white fw-bold h5"},[t._v("Follow me")]),s("ul",[s("li",[t._v("Facebook")]),s("li",[t._v("Instagram")])])])])}],h={},g=h,m=(0,r.Z)(g,u,p,!1,null,"5d5f63b2",null),f=m.exports,b={components:{HeaderMain:v,FooterMain:f},data(){return{isShowBtnUp:!1}},beforeMount(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){window.scrollY>=260?this.isShowBtnUp=!0:this.isShowBtnUp=!1},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},C=b,w=(0,r.Z)(C,e,i,!1,null,"517b3c9d",null),A=w.exports},5512:function(t,s,n){t.exports=n.p+"img/bar.1724541c.svg"},5779:function(t,s,n){t.exports=n.p+"img/svg-fb.18dec9f9.svg"},6570:function(t,s,n){t.exports=n.p+"img/svg-in.0e610901.svg"},987:function(t,s,n){t.exports=n.p+"img/svg-linked.cf5f832b.svg"},6499:function(t){t.exports="data:image/png;base64,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"},7442:function(t,s,n){t.exports=n.p+"img/logo.46fd7452.png"}}]);
//# sourceMappingURL=719.ef60033a.js.map
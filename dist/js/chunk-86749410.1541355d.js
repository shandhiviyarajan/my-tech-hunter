(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86749410"],{"227c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("HeaderComponent"),t._t("default")],2)},r=[],i=s("d784"),o={name:"AuthLayout",components:{HeaderComponent:i["a"]}},l=o,n=s("2877"),c=Object(n["a"])(l,a,r,!1,null,null,null);e["a"]=c.exports},"6a2f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("AuthLayout",[s("b-container",{staticClass:"auth-container"},[s("b-overlay",{attrs:{show:t.show,rounded:"sm"}},[s("b-row",{staticClass:"justify-content-center",attrs:{"no-gutters":""}},[s("ul",{staticClass:"steps"},[s("li",{staticClass:"active"},[t._v(" Choose Subscription ")]),s("li",{staticClass:"active"},[t._v(" Business Information ")]),s("li",{staticClass:"active"},[t._v(" Business Verifications ")]),s("li",[t._v(" Payment confirmation ")]),s("li",[t._v(" SMS Verification & Email Activation ")])]),s("b-col",{attrs:{md:"9"}},[s("b-row",[s("b-col",{attrs:{md:"12"}},[s("div",{staticClass:"auth-page-title"},[s("h1",[t._v(" Business Evidence "),s("br"),t._v(" and Registration documents ")])])])],1),s("b-row",[s("b-col",{staticClass:"pr-5",attrs:{md:"8"}},[s("div",{staticClass:"form-title"},[t._v(" Please fill the above documents. ")]),s("form",[s("b-form-input",{attrs:{type:"email",required:"",placeholder:"Business Registration Number\t"}}),s("b-form-input",{attrs:{type:"text",required:"",placeholder:"Zip code"}}),s("b-form-input",{attrs:{type:"text",required:"",placeholder:"Type of Business "}}),s("div",{staticClass:"alert alert-info"},[s("p",[s("small",[t._v(" Eg : (Network firm, Computer services, Repair Services, Freelancer, IT Shop) ")])])])],1)]),s("b-col",{staticClass:"pl-4",attrs:{md:"4"}},[s("div",{staticClass:"form-title"})])],1),s("b-row",[s("b-form",[s("b-col",{attrs:{md:"11"}},[s("div",{staticClass:"my-4 d-flex justify-content-between"},[s("label",[s("strong",[t._v(" Documents (PDF, JPG, Docx) ")])]),s("p",{staticClass:"text-muted"},[s("strong",[t._v(" For Verificaton ")])])]),s("div",[s("svg",{attrs:{width:"889px",height:"158px",viewBox:"0 0 889 158",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("title",[t._v("Page 1")]),s("defs",[s("rect",{attrs:{id:"path-1",x:"291",y:"634",width:"869",height:"138",rx:"8"}}),s("filter",{attrs:{x:"-2.0%",y:"-9.4%",width:"103.9%",height:"124.6%",filterUnits:"objectBoundingBox",id:"filter-2"}},[s("feOffset",{attrs:{dx:"0",dy:"4",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feComposite",{attrs:{in:"shadowBlurOuter1",in2:"SourceAlpha",operator:"out",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0",type:"matrix",in:"shadowBlurOuter1"}})],1)]),s("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[s("g",{attrs:{id:"Create-Business-step-04-Copy",transform:"translate(-281.000000, -628.000000)"}},[s("g",{attrs:{id:"Rectangle-Copy-13"}},[s("use",{attrs:{fill:"black","fill-opacity":"1",filter:"url(#filter-2)","xlink:href":"#path-1"}}),s("rect",{attrs:{stroke:"#D6D6D6","stroke-width":"1","stroke-linejoin":"square",fill:"#FFFFFF","fill-rule":"evenodd",x:"291.5",y:"634.5",width:"868",height:"137",rx:"8"}})]),s("g",{attrs:{id:"747416",opacity:"0.168241279",transform:"translate(694.000000, 660.000000)",fill:"#000000","fill-rule":"nonzero"}},[s("path",{attrs:{d:"M40.5625,27 L40.5625,38.8743719 C40.5625,39.8164623 39.7914687,40.5829146 38.84375,40.5829146 L5.15625,40.5829146 C4.20853125,40.5829146 3.4375,39.8164623 3.4375,38.8743719 L3.4375,27 L0,27 L0,38.8743719 C0,41.7006432 2.31309375,44 5.15625,44 L38.84375,44 C41.6869062,44 44,41.7006432 44,38.8743719 L44,27 L40.5625,27 Z",id:"Path"}}),s("polygon",{attrs:{id:"Path",points:"22.5 0 12 10.5628148 14.3895433 12.9666533 20.8103215 6.50746361 20.8103215 33 24.1896785 33 24.1896785 6.50746361 30.6104567 12.9666533 33 10.5628148"}})]),s("text",{attrs:{id:"Upload-Registration","font-family":"Inter-Regular_SemiBold, Inter","font-size":"16","font-weight":"500",fill:"#705858","fill-opacity":"0.31288243"}},[s("tspan",{attrs:{x:"621",y:"733"}},[t._v("Upload Registration Copy")])])])])])]),s("b-button",{staticClass:"btn my-4",attrs:{variant:"primary",to:"/verify-code"}},[t._v(" Proceed to Payments ")]),s("p",{staticClass:"text-danger"},[s("strong",[t._v(" We assure that none of your uploaded Business documents will not publish online. ")])])],1)],1)],1)],1)],1)],1)],1),s("footer-component")],1)},r=[],i=s("227c"),o=s("dd3b"),l={name:"BusinessDocuments",data:function(){return{show:!1,formData:{username:"",password:""}}},components:{FooterComponent:o["a"],AuthLayout:i["a"]},methods:{Login:function(t){var e=this;t.preventDefault(),alert(0),"admin@gmail.com"===this.username&&"123456"===this.password&&(this.show=!0,setTimeout((function(){e.show=!1,e.$router.push({name:"Profile"})}),1500))}}},n=l,c=s("2877"),u=Object(c["a"])(n,a,r,!1,null,null,null);e["default"]=u.exports},dd3b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("b-container",[s("b-row",[s("b-col",{attrs:{md:"3",sm:"6"}},[s("ul",{staticClass:"list-group"},[s("li",[s("a",{attrs:{href:"#"}},[s("strong",[t._v(" Business ")])])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a member ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a Tech Pro ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Create a Business ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post an advertisement ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post promotions ")])])])]),s("b-col",{attrs:{md:"3",sm:"6"}},[s("ul",{staticClass:"list-group"},[s("li",[s("a",{attrs:{href:"#"}},[s("strong",[t._v(" Network & security ")])])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a member ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a Tech Pro ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Create a Business ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post an advertisement ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post promotions ")])])])]),s("b-col",{attrs:{md:"3",sm:"6"}},[s("ul",{staticClass:"list-group"},[s("li",[s("a",{attrs:{href:"#"}},[s("strong",[t._v(" Remote Support ")])])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a member ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a Tech Pro ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Create a Business ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post an advertisement ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post promotions ")])])])]),s("b-col",{attrs:{md:"3",sm:"6"}},[s("ul",{staticClass:"list-group"},[s("li",[s("a",{attrs:{href:"#"}},[s("strong",[t._v(" Repair & Services ")])])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a member ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a Tech Pro ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Create a Business ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post an advertisement ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post promotions ")])])])])],1),s("b-row",[s("b-col",{attrs:{md:"3",sm:"6"}},[s("ul",{staticClass:"list-group"},[s("li",[s("a",{attrs:{href:"#"}},[s("strong",[t._v(" Development ")])])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a member ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Become a Tech Pro ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Create a Business ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post an advertisement ")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v(" Post promotions ")])])])]),s("b-col",{attrs:{md:"3",sm:"6"}},[s("ul",{staticClass:"list-group"},[s("li",[s("a",{attrs:{href:"#"}},[s("strong",[t._v(" About TechHunter ")])])]),s("li",[s("a",{attrs:{href:"/about-us"}},[t._v(" About Us ")])]),s("li",[s("a",{attrs:{href:"/contact-us"}},[t._v(" Contact Us ")])]),s("li",[s("a",{attrs:{href:"/ads"}},[t._v(" Advertisements ")])]),s("li",[s("a",{attrs:{href:"/why"}},[t._v(" Why My Tech Hunter ? ")])]),s("li",[s("a",{attrs:{href:"/faq"}},[t._v(" FAQ ")])])])]),s("b-col",{attrs:{md:"3",sm:"6"}},[s("ul",{staticClass:"list-group"},[s("li",[s("a",{attrs:{href:"/"}},[s("strong",[t._v(" Become a Member ")])])]),s("li",[s("a",{attrs:{href:"/get-tech-hunter"}},[t._v(" Get a Tech Hunter Pro ")])]),s("li",[s("a",{attrs:{href:"/become-tech-hunter"}},[t._v(" Become a Tech Hunter Pro ")])]),s("li",[s("a",{attrs:{href:"/create-business"}},[t._v(" Create a Business ")])]),s("li",[s("a",{attrs:{href:"/create-promotion"}},[t._v(" Post Promotions ")])]),s("li",[s("a",{attrs:{href:"/create-post"}},[t._v(" Create Post (services) ")])])])])],1),s("b-row",[s("b-col",{attrs:{md:"6"}},[s("form",{staticClass:"form-subscription"},[s("h2",[t._v(" Subscribe for Newsletter ")]),s("p",[t._v(" Sign up for our latest news & articles. We won’t give you spam mails. ")]),s("b-form-group",[s("b-form-input",{attrs:{type:"email",required:""}}),s("b-button",{attrs:{variant:"primary"},on:{click:t.subscribe}},[s("i",{staticClass:"fa fa-envelope"}),t._v(" Email ")])],1)],1)]),s("b-col",{attrs:{md:"6"}},[s("p",{staticClass:"text-white"},[s("strong",[t._v(" My Tech Hunters Headquarters"),s("br")]),t._v(" 1859 SE Port St Lucie Blvd."),s("br"),t._v(" Port St Lucie, FL 34952"),s("br"),t._v(" info@mytechhunter.com"),s("br"),t._v(" 772.249.3796 "),s("br"),s("br")]),s("div",{staticClass:"social-network-icons"},[s("a",{staticClass:"social-network fb",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook"})]),s("a",{staticClass:"social-network tw"},[s("i",{staticClass:"fa fa-twitter"})]),s("a",{staticClass:"social-network in"},[s("i",{staticClass:"fa fa-linkedin"})])])])],1)],1)],1)},r=[],i={name:"FooterComponent",methods:{subscribe:function(){}}},o=i,l=s("2877"),n=Object(l["a"])(o,a,r,!1,null,null,null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-86749410.1541355d.js.map
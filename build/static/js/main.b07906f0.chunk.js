(this.webpackJsonpnorth_star=this.webpackJsonpnorth_star||[]).push([[0],{216:function(e,t){},229:function(e,t,a){e.exports=a(453)},256:function(e,t,a){},377:function(e,t,a){},445:function(e,t,a){},446:function(e,t,a){},451:function(e,t,a){},452:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(56),o=a(52),l=a(226),m=a(119),u=a(74),d={layoutModalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{visible:!1,destroyOnClose:!0,maskClosable:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"layout_modal_show":return Object.assign({},e,{visible:!0},t.payload);case"layout_modal_hide":return Object.assign({},e,{visible:!1,title:""},t.payload);default:return e}}},p=(Object(u.a)((function(e){return e.layoutModalReducer}),(function(e){return e})),Object(u.a)((function(e){return e.auth_status}),(function(e){return e}))),f=d,g={auth_status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:"",msg:"",userInfo:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":case"logout":return Object.assign({},e,{status:"loading",msg:"loading..."});case"login_success":return Object.assign({},e,{status:"success",msg:"\u767b\u5f55\u6210\u529f",userInfo:t.payload.result.userInfo});case"logout_success":return Object.assign({},e,{status:"success",msg:"\u9000\u51fa\u6210\u529f",userInfo:null});case"login_failure":case"logout_failure":return Object.assign({},e,{status:"error",msg:t.payload.desc,userInfo:null});case"init_auth_status":return Object.assign({},e,{msg:"",status:"",userInfo:null});default:return e}},getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:"",msg:"",userInfo:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getUserById":return Object.assign({},e,{status:"loading",msg:"loading..."});case"getUserById_success":return Object.assign({},e,{status:"success",msg:t.payload.desc,userInfo:t.payload.result.user});case"getUserById_failure":return Object.assign({},e,{status:"error",msg:t.payload.desc,userInfo:{}});case"init_getUserInfo":return Object.assign({},e,{status:"",msg:"",userInfo:{}});default:return e}},changePwd_status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:"",msg:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changePwd":return Object.assign({},e,{status:"loading",msg:"loading..."});case"changePwd_success":return Object.assign({},e,{status:"success",msg:t.payload.desc});case"changePwd_failure":return Object.assign({},e,{status:"error",msg:t.payload.desc});case"init_changePwd_status":return Object.assign({},e,{status:"",msg:""});default:return e}}},y=Object(u.a)((function(e){return e.auth_status}),(function(e){return e})),b=Object(u.a)((function(e){return e.getUserInfo}),(function(e){return e})),h=(Object(u.a)((function(e){return e.changePwd_status}),(function(e){return e})),g),v=Object(o.c)(Object(m.a)({},h,{},f)),E=a(66),N=a.n(E),x=a(102),D=a(215),O=a.n(D).a.create({headers:{"Content-Type":"application/json"}});O.interceptors.response.use((function(e){if(200===e.status)return e.data}),(function(e){return Promise.reject(e)}));var j=O,w=a(216),Y=a.n(w),S={login:{mfunc:"userManager",func:"login"},logout:{mfunc:"userManager",func:"logout"},getUserById:{mfunc:"userManager",func:"getUserById"},changePwd:{mfunc:"userManager",func:"changePwd"}},_=N.a.mark(M);function I(e){return N.a.mark((function t(a){var n,r,c,i,s,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.func,r=e.payload,c=function(){return j.post("/api/".concat(n),{params:r})},t.prev=3,t.next=6,Object(x.a)(c);case 6:i=t.sent,s="",t.t0=String(i.code),t.next="200"===t.t0?11:"304"===t.t0?13:17;break;case 11:return s="".concat(e.type,"_success"),t.abrupt("break",19);case 13:return window.location.href="/login",localStorage.clear(),sessionStorage.clear(),t.abrupt("break",19);case 17:return s="".concat(e.type,"_failure"),t.abrupt("break",19);case 19:return t.next=21,Object(x.b)({type:"".concat(s),payload:i});case 21:t.next=28;break;case 23:return t.prev=23,t.t1=t.catch(3),o="".concat(e.type,"_failure"),t.next=28,Object(x.b)({type:"".concat(o),payload:{msg:"\u8bf7\u6c42\u8d85\u65f6",desc:"\u8bf7\u6c42\u8d85\u65f6"}});case 28:case"end":return t.stop()}}),t,null,[[3,23]])}))}var k=Object.assign({},S,Y.a);function M(){var e,t;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e=N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.c)(t,(function(e){return I(e)(k[t])}));case 2:case"end":return e.stop()}}),e)})),a.t0=N.a.keys(k);case 2:if((a.t1=a.t0()).done){a.next=7;break}return t=a.t1.value,a.delegateYield(e(t),"t2",5);case 5:a.next=2;break;case 7:case"end":return a.stop()}}),_)}var C=M,F=a(20),L=a(168),A=a(73),T=a(63),G=a(61),z=a(225),B=a.n(z),P=(a(255),a(27)),U=a(57),R=a(167),W=a(11),V=a(18),H=a(50),J=a(130),q=a(217),$=a.n(q),K=(a(256),J.a.Item),X=J.a.create()((function(e){var t=e.form,a=t.getFieldDecorator,c=t.validateFields,i=Object(s.b)(),o=Object(T.g)(),l=Object(s.c)(y),m=Object(s.c)(b),u=l.status,d=l.msg,p=l.userInfo;Object(n.useEffect)((function(){"error"===u&&A.a[u](d),"success"===u&&(A.a[u](d),localStorage.setItem("userInfo",JSON.stringify(p)),o.push("/main"))}),[l.status,l,i,d,u,p,o]);var f=Object(n.useState)({"animate-left":"fadeInUp animated delay-05s","animate-right":"fadeInUp animated delay-1s","animate-bottom":"fadeInUp animated fast","animate-bottom-light":"hide","animate-top-light":"hide","animate-1":"fadeInLeft animated delay-1s","animate-2":"fadeInDown animated delay-1s","animate-3":"fadeInRight animated delay-1s","animate-4":"fadeInUp animated  delay-1s"}),g=Object(H.a)(f,2),h=g[0],v=g[1];Object(n.useEffect)((function(){setTimeout((function(){v({"animate-left":"waggle up-left","animate-right":"waggle up-right","animate-bottom":"waggle ","animate-bottom-light":"waggle lightning","animate-top-light":"waggle lightning","animate-1":"waggle","animate-2":"waggle","animate-3":"waggle","animate-4":"waggle up-down"})}),2e3)}),[]);return r.a.createElement("div",{className:"login-container"},r.a.createElement($.a,{className:"canvasNest",config:{pointR:5,lineWidth:3,pointColor:" 39,52,89",lineColor:"39,52,89",count:25},style:{zIndex:-1}}),r.a.createElement(P.a,{gutter:[0,0],type:"flex",justify:"space-around",align:"middle",style:{height:"100%"}},r.a.createElement(V.a,Object.assign({xl:14,lg:14,md:10,sm:8},{className:"container left"}),r.a.createElement("div",{className:"login-animate-container"},r.a.createElement("div",{className:"animate-top-light ".concat(h["animate-top-light"])}),r.a.createElement("div",{className:"animate-left ".concat(h["animate-left"])}),r.a.createElement("div",{className:"animate-right ".concat(h["animate-right"])}),r.a.createElement("div",{className:"animate-bottom ".concat(h["animate-bottom"])}),r.a.createElement("div",{className:"animate-bottom-light ".concat(h["animate-bottom-light"])}),r.a.createElement("div",{className:"animate animate-1 ".concat(h["animate-1"])}),r.a.createElement("div",{className:"animate animate-2 ".concat(h["animate-2"])}),r.a.createElement("div",{className:"animate animate-3 ".concat(h["animate-3"])}),r.a.createElement("div",{className:"animate animate-4 ".concat(h["animate-4"])}))),r.a.createElement(V.a,Object.assign({xl:10,lg:10,md:14,sm:16},{className:"container right"}),r.a.createElement(J.a,{className:"login-form-container",wrapperCol:{xs:{span:24},sm:{span:24}},onSubmit:function(e){return function(e){e.preventDefault(),c({force:!0},(function(e,t){if(!e){var a=t.userAccount,n=t.password,r={userAccount:a,password:btoa(n)};i({type:"login",payload:r})}}))}(e)}},r.a.createElement("h1",{className:"login-log-title"},"BTS"),r.a.createElement(K,null,a("userAccount",{rules:[{required:!0,min:1,max:50,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5e10\u6237!"},{validator:function(e,t,a){""===t||/^[0-9a-zA-Z]+$/.exec(t)?a():a("\u8bf7\u6309\u8981\u6c42\u586b\u5199\u5e10\u6237!")}}]})(r.a.createElement(R.a,{autoComplete:"off",size:"large",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u8d26\u53f7",prefix:r.a.createElement(W.a,{type:"user"})}))),r.a.createElement(K,null,a("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801"}]})(r.a.createElement(R.a,{autoComplete:"off",size:"large",type:"password",placeholder:"\u8bf7\u8f93\u5165\u767b\u5f55\u5bc6\u7801",prefix:r.a.createElement(W.a,{type:"lock"})}))),r.a.createElement(K,null,r.a.createElement(U.a,{size:"large",className:"login-form-button",type:"primary",htmlType:"submit",block:!0,loading:"loading"===m.status||"loading"===l.status},"\u767b\u5f55")),r.a.createElement("span",{className:"container-border top-left"}),r.a.createElement("span",{className:"container-border top-right"}),r.a.createElement("span",{className:"container-border bottom-left"}),r.a.createElement("span",{className:"container-border bottom-right"})))))})),Z=a(166),Q=a(100),ee=a(87),te=a(89),ae=W.a.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_854671_q412psv761b.js"}),ne=function(e){return r.a.createElement(ae,e)},re=(a(377),Object(n.memo)((function(e){var t=te.a.Item,a=Object(s.b)(),c=Object(T.g)(),i=Object(T.h)(),o=Object(s.c)(p),l=JSON.parse(localStorage.getItem("userInfo")),m=l.user_account,u=l.lstRole,d=void 0===u?"\u7ba1\u7406\u5458":u;Object(n.useEffect)((function(){if(""!==o.status){var e=o.status,t=o.msg,n=o.userInfo;"success"===e&&!n&&(localStorage.clear(),c.push("/login")),A.a[e](t),a({type:"init_auth_status"})}}),[o.status,o,a,c]);var f=[{name:"".concat(m,"(").concat(d,")"),onclick:null},{name:"\u9000\u51fa\u7cfb\u7edf",onclick:function(){a({type:"logout"})}}],g=[{title:null,listDom:r.a.createElement(ee.a,{className:"user-msg",overlay:r.a.createElement(te.a,{className:"user-dropdown"},f.map((function(e,a){return r.a.createElement(t,{key:a,className:"user-item"},r.a.createElement("span",{onClick:e.onclick},"".concat(e.name)))})))},r.a.createElement("span",{className:"ant-dropdown-link"},r.a.createElement(ne,{type:"icon-icon-user",style:{color:"#fff"}}))),onclick:null}],y=(i.state||{}).records,b=(void 0===y?{}:y)||{},h=b.planId,v=void 0===h?0:h,E=b.planName,N=void 0===E?"":E,x={"/":"\u89c2\u661f\u53f0","/main":"\u89c2\u661f\u53f0","/main/details":r.a.createElement("div",{className:"top"},r.a.createElement(Q.a,{className:"top-plan top-plan-tooltip",overlayClassName:"top-plan-tooltip-wrapper",placement:"bottom",arrowPointAtCenter:!0,title:r.a.createElement("div",null,r.a.createElement("span",{className:"top-plan-id",style:{marginRight:10}},"ID:".concat(v)),r.a.createElement("span",{className:"top-plan-name"},N))},r.a.createElement("span",{className:"top-plan top-plan-id"},"ID:".concat(v)),r.a.createElement("span",{className:"top-plan top-plan-name"},N)))};return r.a.createElement(P.a,{className:"header-container",type:"flex",justify:"space-between",align:"middle",gutter:16},r.a.createElement(V.a,{xl:4,lg:5,md:6},r.a.createElement("h1",{className:"header-left",onClick:function(){sessionStorage.clear(),window.location.replace("".concat(window.location.origin,"/"))}},"North Star")),r.a.createElement(V.a,{xl:12,lg:12,md:12},r.a.createElement("div",{className:"middle"},x[window.location.pathname])),r.a.createElement(V.a,{xl:4,lg:5,md:6},r.a.createElement("div",{className:"header-right"},g.map((function(e,t){return e.title?r.a.createElement(Q.a,{className:"header-item",placement:"bottom",title:e.title,key:t},r.a.createElement("span",{onClick:e.onclick},e.listDom)):r.a.createElement("span",{className:"header-item msg-wrapper",key:t},e.listDom)})))))}))),ce=a(31),ie=a(32),se=a(126),oe=a(46),le=a(21),me=a(62),ue=a.n(me),de=["#8282FD","#E0F227","#1E90FD","#3FD9C8","#D34995","#F49E35","#B082EC","#D23B39","#FE8687","#8545DE","#6BDB90","#66B6FD","#BB5AF8","#2BC15C","#D599D8","#DF6F6E","#5D8EE3","#98E660","#FE4E69","#4A5FB0","#F9CB22","#D44A96","#4B5FB3","#12C2C2"],pe=le.Guide.Html,fe=function(e){var t=e.title,a=Object(n.useState)([]),c=Object(H.a)(a,2),i=c[0],s=c[1];Object(n.useEffect)((function(){var t=["PC","M","iOS","Android"],a=e.result,n=(void 0===a?[]:a).map((function(e){return{item:e.productLineName?e.productLineName:t[e.platform],count:e.planNum}})),r=new(0,ue.a.DataView);r.source(n).transform({type:"percent",field:"count",dimension:"item",as:"percent"}),s(r)}),[e]);return r.a.createElement("div",null,r.a.createElement(le.Chart,{height:300,data:i,scale:{percent:{formatter:function(e){return e=(100*e).toFixed(2)+"%"}}},forceFit:!0,padding:[0,0,60,0]},r.a.createElement(le.Coord,{type:"theta",radius:.75,innerRadius:.75}),r.a.createElement(le.Axis,{name:"percent"}),r.a.createElement(le.Tooltip,{showTitle:!1,inPlot:!1}),r.a.createElement(le.Guide,null,r.a.createElement(pe,{position:["50%","50%"],html:'<div style="color:#fff;font-size:1.16em;text-align: center;width: 10em;">'.concat(t,"</div>"),alignX:"middle",alignY:"middle"})),r.a.createElement(le.Geom,{select:[!1],type:"intervalStack",position:"percent",color:["item",de],tooltip:["item*percent*count",function(e,t,a){return t=Math.floor(100*t)+"%",{name:e,value:"".concat(a,"\u4e2a\uff08").concat(t,"\uff09")}}],style:{lineWidth:0,stroke:"#fff"}}),r.a.createElement(le.Legend,{name:"item"})))},ge=a(65),ye=a(6),be=a.n(ye),he=function(e){var t=Object(n.useState)([]),a=Object(H.a)(t,2),c=a[0],i=a[1],s=e.height,o=void 0===s?300:s;Object(n.useEffect)((function(){for(var t=e.result,a=[],n=0;n<t.length;n++){for(var r=!0,c=0;c<a.length;c++)a[c].recordDay===t[n].recordDay&&(a[c]=Object(m.a)({},a[c],{},t[n]),r=!1);r&&a.push(t[n])}var s=[];a.forEach((function(e){s=[].concat(Object(ge.a)(s),Object(ge.a)(Object.keys(e)))}));var o=Array.from(new Set(s));if(o.shift(),a.length>1){var l=[];a.forEach((function(e,t){l.push(new Date(e.recordDay).getTime())}));for(var u=l.reduce((function(e,t){return t>e?t:e})),d=l.reduce((function(e,t){return t>e?e:t})),p=[],f=(u-d)/864e5,g=0;g<=f;g++){var y=d+864e5*g;y<=u&&p.push(be()(y).format("YYYY-MM-DD"))}p.forEach((function(e){var t=!0;a.forEach((function(a,n){a.recordDay===e&&(t=!1)})),t&&a.push({recordDay:e})})),o.forEach((function(e){a.forEach((function(t,a){Object.keys(t).includes(e)||(t[e]=0)}))}))}var b=(new ue.a).createView().source(a);b.transform({type:"fold",fields:o,key:"city",value:"value"}),i(b)}),[e]);return r.a.createElement(le.Chart,{height:o,padding:[10,40,75,70],data:c,scale:{value:{formatter:function(e){var t=e.toString().split("."),a=t[0].replace(/(?!\b)(?=(\d{3})+$)/g,",");return t[0]=a,t.join(".")}},recordDay:{range:[0,1]}},forceFit:!0},r.a.createElement(le.Legend,{marker:"circle",textStyle:{}}),r.a.createElement(le.Axis,{name:"recordDay"}),r.a.createElement(le.Axis,{name:"value"}),r.a.createElement(le.Geom,{type:"line",position:"recordDay*value",size:2,color:"city",style:{},shape:"smooth"}),r.a.createElement(le.Geom,{type:"point",position:"recordDay*value",size:2,color:"city",style:{}}),r.a.createElement(le.Geom,{type:"area",position:"recordDay*value",color:["city",["rgba(43, 144, 242,.1)"]],tooltip:"false",shape:"smooth"}),r.a.createElement(le.Tooltip,{crosshairs:{type:"y"}}))},ve=a(127),Ee=a(17),Ne=a.n(Ee),xe=function(e){var t=Object(T.g)(),a=Array.from({length:Ne()(1,10)}).map((function(e,t){return{planId:1e3+10*t,planName:"".concat(["PC","IOS"][Ne()(0,1)],"_").concat(["\u6d4b\u8bd5\u5b9e\u9a8c","\u6b63\u5f0f\u5b9e\u9a8c","\u7070\u5ea6\u5b9e\u9a8c"][Ne()(0,2)],"_").concat(Ne()(1,100)),type:Ne()(2,3)}})),n={size:"small",bordered:!1,dataSource:a,pagination:!1,rowKey:function(e){return e.userName},scroll:{y:a.length>5?250:null},columns:[{title:"ID",dataIndex:"planId",key:"planId",align:"center"},{title:"\u5b9e\u9a8c\u540d\u79f0",dataIndex:"planName",key:"planName",width:"80%",ellipsis:!0,render:function(e,a){return r.a.createElement("div",{className:"row-container",onClick:function(e){t.push({pathname:"/main/details",state:{records:a}})},title:e},e)}}]};return r.a.createElement(ve.a,Object.assign({className:"no-background-table"},n))},De=(a(445),se.a.RangePicker),Oe={gutter:{xs:8,sm:16,md:24,lg:32}},je={xxl:8,xl:8,lg:24,sm:24},we={xxl:8,xl:16,lg:24,sm:24},Ye={xxl:8,xl:24,lg:24,sm:24},Se=function(e){var t={},a=t.platformRecords,n=void 0===a?[{platform:0,planNum:Ne()(5,75)},{platform:1,planNum:Ne()(5,75)},{platform:2,planNum:Ne()(5,75)},{platform:3,planNum:Ne()(5,75)}]:a,c=t.productRecords,i=void 0===c?[{productLineName:"D",planNum:Ne()(5,75)},{productLineName:"G",planNum:Ne()(5,75)}]:c,s={},o=s.interfaceRecords,l=void 0===o?[{productLineName:"D",recordDay:be()().subtract(6,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"D",recordDay:be()().subtract(5,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"D",recordDay:be()().subtract(4,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"D",recordDay:be()().subtract(3,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"D",recordDay:be()().subtract(2,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"D",recordDay:be()().subtract(1,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"G",recordDay:be()().subtract(6,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"G",recordDay:be()().subtract(5,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"G",recordDay:be()().subtract(4,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"G",recordDay:be()().subtract(3,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"G",recordDay:be()().subtract(2,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)},{productLineName:"G",recordDay:be()().subtract(1,"days").format("YYYY-MM-DD"),serviceNum:Ne()(999,2e3),avgTime:Ne()(1,10,!1)}]:o,m=s.planNum,u=void 0===m?Ne()(1,99):m,d=s.avgTime,p=void 0===d?Ne()(0,2,!0):d,f=s.interfaceNum,g=void 0===f?Ne()(5e7,5e8):f,y=[],b=[];l.map((function(e){return y.push(Object.assign({},Object(ie.a)({recordDay:e.recordDay},e.productLineName,e.serviceNum))),b.push(Object.assign({},Object(ie.a)({recordDay:e.recordDay},e.productLineName,e.avgTime))),e}));var h=Object(oe.c)({to:{planNum:u,avgTime:p,interfaceNum:g},from:{planNum:0,avgTime:0,interfaceNum:0},config:oe.b.default});return r.a.createElement("div",{className:"stargazing-container"},r.a.createElement(P.a,Object.assign({},Oe,{type:"flex",align:"top"}),r.a.createElement(V.a,Object.assign({},je,{span:8}),r.a.createElement(P.a,{type:"flex",align:"top"},r.a.createElement(V.a,{className:"mb20",span:24,style:{textAlign:"center"}},r.a.createElement(De,{size:"lagrge",className:"global-calendar",dropdownClassName:"global-calendar-dropdown",allowClear:!1,separator:"\u2014",disabled:!0,defaultValue:[be()().subtract(6,"days"),be()().subtract(1,"days")],ranges:{"\u4eca\u5929":[be()(),be()()],"\u8fd17\u5929":[be()().subtract(6,"days"),be()()],"\u8fd130\u5929":[be()().subtract(29,"days"),be()()],"\u8fd190\u5929":[be()().subtract(89,"days"),be()()]},disabledDate:function(e){return e&&e>be()().endOf("day")},onCalendarChange:function(e,t){}})),r.a.createElement(V.a,{className:"mb20",span:24},r.a.createElement(ce.a,{title:"\u5b9e\u9a8c\u5206\u5e03"},r.a.createElement(P.a,null,r.a.createElement(V.a,{span:12},r.a.createElement(fe,{title:"\u4ea7\u54c1\u7ebf",result:i})),r.a.createElement(V.a,{span:12},r.a.createElement(fe,{title:"\u7ec8\u7aef",result:n}))))),r.a.createElement(V.a,{className:"mb20",span:24},r.a.createElement(ce.a,{title:"\u5b9e\u9a8c\u5217\u8868",className:"user-action-container"},r.a.createElement(xe,null))))),r.a.createElement(V.a,Object.assign({},we,{className:"mb20",span:8}),r.a.createElement(ce.a,{title:"\u603b\u89c8",style:{minHeight:"845px"}},r.a.createElement(P.a,null,r.a.createElement(V.a,{span:24,className:"mb20"},r.a.createElement("div",{className:"interfaceNum-container"},r.a.createElement("div",{className:"tag-context"},"\u8c03\u7528\u63a5\u53e3\u6b21\u6570"),r.a.createElement(oe.a.div,{className:"num-tag"},h.interfaceNum.interpolate((function(e){return e.toLocaleString("en-US",{maximumFractionDigits:0})}))))),r.a.createElement(V.a,{span:12},r.a.createElement("div",{className:"info-tag avg-time-container"},r.a.createElement("div",{className:"tag-context"},"\u5e73\u5747\u54cd\u5e94\u901f\u5ea6"),r.a.createElement("div",{className:"num-wrapper"},r.a.createElement(oe.a.span,null,h.avgTime.interpolate((function(e){return e.toLocaleString("en-US",{maximumFractionDigits:2})}))),r.a.createElement("span",{className:"tag-unit"},"ms")))),r.a.createElement(V.a,{span:12},r.a.createElement("div",{className:"info-tag plan-num-container"},r.a.createElement("div",{className:"tag-context"},"\u65b0\u589e\u6709\u6548\u5b9e\u9a8c"),r.a.createElement("div",{className:"num-wrapper"},r.a.createElement(oe.a.span,null,h.planNum.interpolate((function(e){return e.toFixed(0)}))),r.a.createElement("span",{className:"tag-unit"},"\u4e2a"))))))),r.a.createElement(V.a,Object.assign({},Ye,{span:8}),r.a.createElement(P.a,Object.assign({},Oe,{type:"flex",align:"top"}),r.a.createElement(V.a,{className:"mb20",span:24},r.a.createElement(ce.a,{title:"\u6bcf\u65e5\u8c03\u7528\u6b21\u6570"},r.a.createElement(he,{height:340,result:y}))),r.a.createElement(V.a,{className:"mb20",span:24},r.a.createElement(ce.a,{title:"\u6bcf\u65e5\u54cd\u5e94\u901f\u5ea6"},r.a.createElement(he,{height:340,result:b})))))))},_e=ue.a.DataView,Ie=function(e){var t=e.records,a=void 0===t?[]:t,c=e.height,i=void 0===c?302.5:c,s=Object(n.useState)({dv:new _e,minDay:0,maxDay:0}),o=Object(H.a)(s,2),l=o[0],m=o[1];Object(n.useEffect)((function(){var e=new _e,t=[],n=[],r=[],c="",i="";a&&a.map((function(e,a){var s="\u5b9e\u9a8c_".concat(e.versionId,"_").concat(e.versionName);return c=c?be()(e.dayStart,"x")<be()(c,"x")?e.dayStart:c:e.dayStart,i=i?be()(e.dayStart,"x")>be()(i,"x")?e.dayStart:i:e.dayStart,-1===n.indexOf(s)&&n.push(s),-1===r.indexOf(e.dayStart)?(r.push(e.dayStart),t.push(Object(ie.a)({day:e.dayStart},s,Number(e.specimen)))):t.map((function(t){return t.day===e.dayStart&&(t[s]=Number(e.specimen)),t})),e})),e.source(t).transform({type:"fold",fields:n,key:"versionName",value:"specimen"}),m({dv:e,minDay:c,maxDay:i})}),[a]);var u={day:{formatter:function(e){return be()(e).format("MM-DD")},min:be()(l.minDay).format("YYYY-MM-DD"),max:be()(l.minDay).format("YYYY-MM-DD")},specimen:{min:0}};return r.a.createElement(le.Chart,{data:a&&a.length?l.dv:[],scale:u,forceFit:!0,placeholder:!0,height:i,padding:[10,40,120,40]},r.a.createElement(le.Legend,{formatter:function(e,t,a){return e.split("_").slice(0,e.split("_").length-1).toString().replace(/,/gi,"_")}}),r.a.createElement(le.Axis,{name:"day"}),r.a.createElement(le.Axis,{name:"specimen"}),r.a.createElement(le.Tooltip,{crosshairs:{type:"y"}}),r.a.createElement(le.Geom,{type:"line",size:1.5,position:"day*specimen",color:["versionName"],shape:"smooth",tooltip:["day*versionName*specimen",function(e,t,a){return{title:e,name:t.split("_").slice(0,t.split("_").length-1).toString().replace(/,/gi,"_"),value:void 0!==a?a:""}}]}),r.a.createElement(le.Geom,{type:"point",size:1,position:"day*specimen",color:["versionName"],shape:"circle",tooltip:["day*versionName*specimen",function(e,t,a){return{title:e,name:t.split("_").slice(0,t.split("_").length-1).toString().replace(/,/gi,"_"),value:void 0!==a?a:""}}]}),r.a.createElement(le.Geom,{type:"area",position:"day*specimen",color:["versionName",["rgba(43, 144, 242,.1)"]],tooltip:"false",shape:"smooth"}))},ke=function(e){var t=e.type,a=[];return Array.from({length:7}).map((function(e,n){return Array.from({length:t}).map((function(e,t){return a.push({versionId:1e3+t,specimen:Ne()(1e3,3e3),versionName:1e3+t,dayStart:be()().subtract(7-Number(n),"days").format("YYYY-MM-DD")}),e}))})),r.a.createElement(ce.a,{className:"specimen-count-chart-container",title:"\u5b9e\u9a8c\u6837\u672c\u91cf"},r.a.createElement(Ie,{records:a}))},Me=me.DataSet.DataView,Ce=function(e){var t=e.records,a=void 0===t?[]:t,c=e.height,i=void 0===c?400:c,s=Object(n.useState)({dv:new Me,minDay:0,maxDay:0}),o=Object(H.a)(s,2),l=o[0],m=o[1];Object(n.useEffect)((function(){var e=new Me,t=[],n=[],r=[],c="",i="";a&&a.map((function(e,a){var s="\u5b9e\u9a8c_".concat(e.versionId,"_").concat(e.versionName);return c=c?be()(e.dayStart,"x")<be()(c,"x")?e.dayStart:c:e.dayStart,i=i?be()(e.dayStart,"x")>be()(i,"x")?e.dayStart:i:e.dayStart,-1===n.indexOf(s)&&n.push(s),-1===r.indexOf(e.dayStart)?(r.push(e.dayStart),t.push(Object(ie.a)({day:e.dayStart},s,Number(e.specimen)))):t.map((function(t){return t.day===e.dayStart&&(t[s]=Number(e.specimen)),t})),e})),e.source(t).transform({type:"fold",fields:n,key:"versionName",value:"specimen"}),m({dv:e,minDay:c,maxDay:i})}),[a]);var u={day:{formatter:function(e){return be()(e).format("YYYY-MM-DD")},min:be()(l.minDay).format("YYYY-MM-DD"),max:be()(l.minDay).format("YYYY-MM-DD")},specimen:{min:0}};return r.a.createElement(le.Chart,{data:a&&a.length?l.dv:[],scale:u,forceFit:!0,placeholder:!0,height:i,padding:[10,40,120,40]},r.a.createElement(le.Legend,{formatter:function(e,t,a){return e.split("_").slice(0,e.split("_").length-1).toString().replace(/,/gi,"_")}}),r.a.createElement(le.Axis,{name:"day"}),r.a.createElement(le.Axis,{name:"specimen"}),r.a.createElement(le.Tooltip,{crosshairs:{type:"y"}}),r.a.createElement(le.Geom,{type:"line",size:1.5,position:"day*specimen",color:["versionName"],shape:"smooth",tooltip:["day*versionName*specimen",function(e,t,a){return{title:e,name:t.split("_").slice(0,t.split("_").length-1).toString().replace(/,/gi,"_"),value:void 0!==a?a:""}}]}),r.a.createElement(le.Geom,{type:"point",size:1,position:"day*specimen",color:["versionName"],shape:"circle",tooltip:["day*versionName*specimen",function(e,t,a){return{title:e,name:t.split("_").slice(0,t.split("_").length-1).toString().replace(/,/gi,"_"),value:void 0!==a?a:""}}]}),r.a.createElement(le.Geom,{type:"area",position:"day*specimen",color:["versionName",["rgba(43, 144, 242,.1)"]],tooltip:"false",shape:"smooth"}))},Fe=a(165),Le=a.n(Fe),Ae=function(e){var t=e.records,a=Le()(t,"versionId"),n=[],c=a.map((function(e){return{key:e.versionId,versionName:"\u5b9e\u9a8c_".concat(e.versionName)}}));t.map((function(e,t){return n.push({title:e.dayStart,dataIndex:e.dayStart,key:e.dayStart,specimen:e.specimen,id:e.versionId}),e})),c.map((function(e){return n.map((function(t){return e.key===Number(t.id)&&(e[t.key]=t.specimen),t})),e}));var i={columns:[{title:"\u7248\u672c\u540d\u79f0",dataIndex:"versionName",key:"versionName",fixed:"left",width:165}].concat(Le()(n,"key").reverse()),source:c},s={x:i.columns.length<8?null:225*i.columns.length,y:i.source.length<4?null:185*i.source.length};return r.a.createElement(ve.a,{size:"small",columns:i.columns,className:"no-background-table",dataSource:i.source,scroll:s,pagination:!1})},Te=function(e){var t=[],a=e.type;return Array.from({length:7}).map((function(e,n){return Array.from({length:a}).map((function(e,a){return t.push({versionId:1e3+a,specimen:Ne()(1e3,3e3),versionName:1e3+a,dayStart:be()().subtract(7-Number(n),"days").format("YYYY-MM-DD")}),e}))})),r.a.createElement(P.a,{gutter:[16,10],type:"flex",justify:"space-between",align:"top"},r.a.createElement(V.a,{span:24},r.a.createElement(ce.a,{className:"mid-card-chart-container",title:"\u5b9e\u9a8c\u5206\u6790"},r.a.createElement(Ce,{records:t}))),r.a.createElement(V.a,{span:24},r.a.createElement(ce.a,{className:"result-mid-table-container",title:"\u5b9e\u9a8c\u660e\u7ec6"},r.a.createElement(Ae,{records:t,type:a}))))},Ge=(a(446),se.a.RangePicker),ze={gutter:[16,16]},Be={middle:{xxl:16,xl:16,lg:24,sm:24},siber_left:{xxl:8,xl:8,lg:24,sm:24},siber_left_content:{xxl:24,xl:24,lg:12,sm:12},siber_right:{xxl:6,xl:24,lg:24,sm:24},siber_right_content:{xxl:24}},Pe=function(e){var t={},a=t.specimen,n=void 0===a?Ne()(100,999999):a,c=t.days,i=void 0===c?Ne()(10,225):c,s=Object(oe.c)({to:{specimen:Number(n),days:i},from:{specimen:0,days:0},config:oe.b.default}),o=(Object(T.h)().state.records||{}).type;return r.a.createElement("div",{className:"result-container"},r.a.createElement(P.a,Object.assign({},ze,{type:"flex",justify:"space-between",align:"top"}),r.a.createElement(V.a,Object.assign({},Be.siber_left,{className:"mb20"}),r.a.createElement(P.a,{gutter:[16,10],type:"flex",justify:"space-between",align:"top"},r.a.createElement(V.a,{xxl:24,xl:24,lg:10,sm:10},r.a.createElement(Ge,{size:"lagrge",className:"mb10 global-calendar",dropdownClassName:"global-calendar-dropdown",allowClear:!1,separator:"\u2014",disabled:!0,defaultValue:[be()().subtract(6,"days"),be()().subtract(1,"days")],disabledDate:function(e){return e&&e>be()().endOf("day")},onCalendarChange:function(e,t){}}),r.a.createElement(ce.a,{title:"\u5b9e\u9a8c\u5df2\u8fd0\u884c\u5929\u6570",className:"num-container days mb10"},r.a.createElement(oe.a.div,{className:"num-box"},s.days.interpolate((function(e){return e.toFixed(0)})))),r.a.createElement(ce.a,{title:"\u8bbf\u5ba2\u6837\u672c\u603b\u6570",className:"num-container specimen"},r.a.createElement(oe.a.div,{className:"num-box"},s.specimen.interpolate((function(e){return e.toLocaleString("en-US",{maximumFractionDigits:0})}))))),r.a.createElement(V.a,{xxl:24,xl:24,lg:10,sm:10},r.a.createElement(ke,{type:o})))),r.a.createElement(V.a,Object.assign({},Be.middle,{className:"mb20"}),r.a.createElement(Te,{MidConfig:Be.middle,type:o}))))},Ue={colors:de,showSinglePoint:!0,plotCfg:{padding:[500,500,600,100]},axis:{left:{position:"left",title:null,label:{offset:8,autoRotate:!0,textStyle:{fill:"#47608A"}},line:{lineWidth:1,stroke:"#47608A"},tickLine:null,grid:{zIndex:-1,lineStyle:{stroke:"#47608A",lineWidth:1,lineDash:[9,5]},hideFirstLine:!0}},bottom:{position:"bottom",title:null,label:{offset:16,autoRotate:!0,textStyle:{fill:"#47608A",fontSize:12,lineHeight:16,textBaseline:"middle"}},line:{lineWidth:1,stroke:"#47608A"},tickLine:{lineWidth:1,stroke:"#47608A",length:4,alignWithLabel:!0}}},tooltip:Object(ie.a)({},"".concat("g2-tooltip"),{backgroundColor:"rgba(29,39,54, 1)",boxShadow:"rgb(20, 78, 127) 0px 0px 15px 10px inset",color:"rgb(255, 255, 255)",border:"1px solid rgb(5,119,208)",borderRadius:"4px"}),tooltipCrosshairsRect:{rectStyle:{fill:"#0092FE",opacity:.9}},tooltipCrosshairsLine:{lineStyle:{stroke:"#0092FE",lineWidth:3}},shape:{hollowPoint:{lineWidth:3}},legend:{bottom:{width:200,textStyle:{fill:"#fff",fontSize:12}}},label:{}},Re=le.G2.Global,We=le.G2.Util,Ve=le.G2.Theme,He=Z.a.Header,Je=Z.a.Content,qe=We.deepMix(Ue,Ve);Re.setTheme(qe);var $e=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(He,{style:{position:"fixed",zIndex:999,width:"100%"}},r.a.createElement(re,null)),r.a.createElement(Je,{className:"main-containers"},r.a.createElement(G.a,null),r.a.createElement(T.d,null,r.a.createElement(T.a,{exact:!0,from:"/",to:"/main"}),r.a.createElement(T.b,{exact:!0,path:"/main",component:Se}),r.a.createElement(T.b,{exact:!0,path:"/main/details",component:Pe}))))};A.a.config({maxCount:1,top:64});var Ke=function(e){var t=e.component,a=Object(L.a)(e,["component"]);return r.a.createElement(T.b,Object.assign({},a,{render:function(e){return localStorage.getItem("userInfo")?r.a.createElement(t,e):r.a.createElement(T.a,{to:"/login"})}}))},Xe=function(e){var t=e.component,a=Object(L.a)(e,["component"]);return r.a.createElement(T.b,Object.assign({},a,{render:function(e){return localStorage.getItem("userInfo")?r.a.createElement(T.a,{to:"/main"}):r.a.createElement(t,e)}}))},Ze=function(e){return r.a.createElement(F.a,{locale:B.a},r.a.createElement("div",{className:"app"},r.a.createElement(G.a,null,r.a.createElement(T.d,null,r.a.createElement(Xe,{path:"/login",component:X}),r.a.createElement(Ke,{exact:!0,path:"/",component:$e}),r.a.createElement(Ke,{path:"/main",component:$e}),"\xcf"))))},Qe=(a(451),a(452),Object(l.a)()),et=Object(o.e)(v,Object(o.a)(Qe));Qe.run(C),i.a.render(r.a.createElement(s.a,{store:et},r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[229,1,2]]]);
//# sourceMappingURL=main.b07906f0.chunk.js.map
(this["webpackJsonptodolist-1-new"]=this["webpackJsonptodolist-1-new"]||[]).push([[0],{13:function(e,t,s){},19:function(e,t,s){e.exports={content:"Profile_content__2bVbl"}},23:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__wEPyW",active:"Dialogs_active__3Ir0j",itemDialogs:"Dialogs_itemDialogs__1xG0x",messages:"Dialogs_messages__1qLzh"}},24:function(e,t,s){e.exports={info:"ProfileInfo_info__33qwx",photoSmall:"ProfileInfo_photoSmall__sihW0"}},25:function(e,t,s){e.exports={usersPhoto:"users_usersPhoto__g3Sqh",activePages:"users_activePages__1Q9yI",notActivePage:"users_notActivePage__2IePW"}},27:function(e,t,s){e.exports={itemDialogs:"DialogsItem_itemDialogs__20vU3",active:"DialogsItem_active__1s7-B"}},29:function(e,t,s){e.exports={post:"MyPosts_post__2Bqj9",addText:"MyPosts_addText__1Lxto"}},30:function(e,t,s){e.exports={content:"Posts_content__3o3pC",item:"Posts_item__2YUVg"}},40:function(e,t,s){e.exports={header:"Header_header__2eVZF"}},41:function(e,t,s){},43:function(e,t,s){e.exports={loader:"Preloading_loader__1ZZFm",load1:"Preloading_load1__1kRSQ"}},48:function(e,t,s){},6:function(e,t,s){e.exports={nav:"Navbar_nav__2jcuY",item:"Navbar_item__1KvGe",activLink:"Navbar_activLink__2jFm0"}},74:function(e,t,s){"use strict";s.r(t),s.d(t,"renderEnteerTree",(function(){return _e}));var n=s(1),a=s.n(n),c=s(16),i=s.n(c),o=(s(48),s(13),s(40)),r=s.n(o),l=s(0),u=function(){return Object(l.jsx)("header",{className:r.a.header,children:Object(l.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCm48YLb7mh4rFyJNq202jtVys3xZlhMQNg&usqp=CAU",alt:""})})},j=s(6),d=s.n(j),b=s(4),g=function(){return Object(l.jsxs)("div",{className:d.a.nav,children:[Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(b.b,{to:"/profile/",className:d.a.activLink,children:"Profile"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(b.b,{to:"/dialogs/",className:d.a.activLink,children:"Messages"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(b.b,{to:"/news/",className:d.a.activLink,children:"News"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(b.b,{to:"/music/",className:d.a.activLink,children:"Music"})}),Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(b.b,{to:"/settings/",className:d.a.activLink,children:"Sattings"})}),"//",Object(l.jsx)("div",{className:d.a.item,children:Object(l.jsx)(b.b,{to:"/users/",className:d.a.activLink,children:"USERS"})})]})},p=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Test News Components"})})},h=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Test Settings"})})},m=s(2),O=function(){return Object(l.jsx)("h1",{children:"Test Music Components"})},f=s(23),x=s.n(f),v=s(27),P=s.n(v),_=function(e){return Object(l.jsx)("div",{className:P.a.dialog+" "+P.a.active,children:Object(l.jsxs)(b.b,{to:"/dialogs/"+e.id,children:[" ",e.name," "]})})},N=s(41),w=s.n(N),y=function(e){return Object(l.jsx)("div",{className:w.a.messag,children:e.message})},k=s(8),F=s(3),S="changeDialogPost",U="addDialogPost",A={dialogNick:[{id:1,name:"Anatoliy"},{id:2,name:"Sergey"},{id:3,name:"Sveta"},{id:4,name:"Nikifor"},{id:5,name:"Arsrniy"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"I`am learn to React"}],messageBody:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(F.a)(Object(F.a)({},e),{},{messageBody:t.value?t.value:""});case U:var s={id:3,message:e.messageBody.trim()};return Object(F.a)(Object(F.a)({},e),{},{messages:e.messages.concat(s),messageBody:""});default:return e}},D=Object(k.b)((function(e){return{dialogNick:e.dialogsPages.dialogNick,messages:e.dialogsPages.messages,messageBody:e.dialogsPages.messageBody}}),(function(e){return{updateNewMessageBody:function(t){e(function(e){return{type:S,value:e}}(t))},sendMessage:function(){e({type:U})}}}))((function(e){var t=e.messages.map((function(e){return Object(l.jsx)(y,{message:e.message})}));return Object(l.jsxs)("div",{className:x.a.dialogs,children:[Object(l.jsx)("div",{className:x.a.itemDialogs,children:e.dialogNick.map((function(e){return Object(l.jsx)(_,{name:e.name,id:e.id})}))}),Object(l.jsxs)("div",{className:x.a.messages,children:[t,Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{value:e.messageBody,onChange:function(t){e.updateNewMessageBody(t.currentTarget.value)}})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return e.sendMessage()},children:"add"})})]})]})})),L=s(17),C=s(18),E=s(22),I=s(20),M=s(19),B=s.n(M),G=s(12),q=s.n(G),R=s(24),H=s.n(R),J=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7f/Istanbul_IMG_7257_1725.jpg",alt:""}),Object(l.jsxs)("div",{className:H.a.info,children:[Object(l.jsx)("img",{className:H.a.photoSmall,src:e.profilePage.photos.small,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f"}),Object(l.jsx)("img",{className:H.a.photoSmall,src:e.profilePage.photos.large,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0431\u043e\u043b\u044c\u0448\u0430\u044f"}),Object(l.jsxs)("div",{children:[" ",e.profilePage.fullName," "]}),"Ava+discrip"]})]})},W=s(29),z=s.n(W),Q=s(30),V=s.n(Q),Z=function(e){return Object(l.jsx)("div",{className:V.a.post,children:Object(l.jsxs)("div",{className:V.a.item,children:[Object(l.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlaWqOUHlXgQBKHi5jFoXsPTmxDI6SjFVzA&usqp=CAU",alt:""}),e.message,Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"like "}),e.likescounte]})]})})},Y=s(21),K={aboutMe:null,contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},lookingForAJob:!0,lookingForAJobDescription:null,fullName:null,userId:null,photos:{small:void 0,large:void 0},post:[{id:1,message:"It's me. What are you doing?",likescounte:5},{id:2,message:"I'am learn",likescounte:13}],newPostText:""},X=function(){return{type:"addPost"}},$=function(e){return{type:"changePost",action:e}},ee=function(e){return{type:"SET_PROFILE",action:e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changePost":return Object(F.a)(Object(F.a)({},e),{},{newPostText:t.action});case"addPost":var s={id:6,message:e.newPostText,likescounte:0};return e.newPostText.trim()?Object(F.a)(Object(F.a)({},e),{},{post:[].concat(Object(Y.a)(e.post),[s]),newPostText:""}):e;case"SET_PROFILE":return Object(F.a)(Object(F.a)({},e),{},{aboutMe:t.action.aboutMe,contacts:Object(F.a)({},t.action.contacts),lookingForAJob:t.action.lookingForAJob,lookingForAJobDescription:t.action.lookingForAJobDescription,fullName:t.action.fullName,userId:t.action.userId,photos:Object(F.a)({},t.action.photos)});default:return e}},se=Object(k.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{updateText:function(t){e($(t))},addNewText:function(){e({type:"addPost"})}}}))((function(e){var t=e.profilePage.post.map((function(e){return Object(l.jsx)(Z,{message:e.message,likescounte:e.likescounte})}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"My post"}),Object(l.jsxs)("div",{className:z.a.addText,children:[Object(l.jsx)("textarea",{value:e.profilePage.newPostText,onChange:function(t){e.updateText(t.currentTarget.value)},children:" "}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.addNewText()},children:"Add post"})})]}),Object(l.jsx)("div",{className:z.a.post,children:t})]})})),ne=function(e){return Object(l.jsxs)("div",{className:B.a.content,children:[Object(l.jsx)(J,{profilePage:e.profilePage}),Object(l.jsx)(se,{})]})};var ae=function(e){return function(t){var s=Object(m.e)(),n=Object(m.f)(),a=Object(m.g)();return Object(l.jsx)(e,Object(F.a)(Object(F.a)({},t),{},{router:{location:s,navigate:n,params:a}}))}},ce=function(e){Object(E.a)(s,e);var t=Object(I.a)(s);function s(){return Object(L.a)(this,s),t.apply(this,arguments)}return Object(C.a)(s,[{key:"componentDidMount",value:function(){var e=this;q.a.get("https://social-network.samuraijs.com/api/1.0/profile/2").then((function(t){e.props.setProfile(t.data)}))}},{key:"render",value:function(){return Object(l.jsx)("div",{className:B.a.content,children:Object(l.jsx)(ne,{profilePage:this.props.profilePage,changePostProfile:this.props.changePostProfile,addPostProfile:X,setProfile:ee})})}}]),s}(a.a.Component),ie=(ae(ce),Object(k.b)((function(e){return{profilePage:e.profilePage}}),{changePostProfile:$,addPostProfile:X,setProfile:ee})(ce)),oe={items:[],totalCount:0,error:null,currentPage:1,totalPageSize:10,isFetching:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW_":return Object(F.a)(Object(F.a)({},e),{},{items:e.items.map((function(e){return e.id===t.id?Object(F.a)(Object(F.a)({},e),{},{followed:!0}):e}))});case"UN_FOLLOW_":return Object(F.a)(Object(F.a)({},e),{},{items:e.items.map((function(e){return e.id===t.id?Object(F.a)(Object(F.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(F.a)(Object(F.a)({},e),{},{items:Object(Y.a)(t.items.items),totalCount:t.items.totalCount,error:t.items.error});case"CHANGE_USERS_PAGE":return Object(F.a)(Object(F.a)({},e),{},{currentPage:t.currentPage});case"CHANGE_Fetching":return Object(F.a)(Object(F.a)({},e),{},{isFetching:t.isFetching});default:return e}},le=s(25),ue=s.n(le),je=s.p+"static/media/USERS.ebe73738.svg",de=function(e){for(var t=[],s=1;s<=10;s++)t.push(s);return Object(l.jsxs)("div",{children:[t.map((function(t){return Object(l.jsx)("span",{className:e.currentPage===t?ue.a.activePages:ue.a.notActivePage,onClick:function(){return s=t,void(e.upDateUsers&&e.upDateUsers(s));var s},children:t+" "},t)})),e.users.items.map((function(t){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(b.b,{to:"/profile",children:Object(l.jsx)("img",{className:ue.a.usersPhoto,src:null!=t.photos.small?t.photos.small:je,alt:""})})}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)("button",{onClick:function(){return e.changeUnFollow(t.id)},children:"Follow"}):Object(l.jsx)("button",{onClick:function(){return e.changeFollow(t.id)},children:"Unfollow"})})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:t.name}),Object(l.jsx)("div",{children:t.status})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:"us.location.city"}),Object(l.jsx)("div",{children:"us.location.country"})]})]},t.id)}))]})},be=s(43),ge=s.n(be),pe=function(){return Object(l.jsx)("div",{className:ge.a.loader,children:"Loading..."})},he=function(e){Object(E.a)(s,e);var t=Object(I.a)(s);function s(){var e;Object(L.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).upDateUsers=function(t){e.props.changeFetching&&e.props.changeFetching(!0),q.a.get("https://social-network.samuraijs.com/api/1.0/users?page=\n        ".concat(t,"\n        &count=").concat(e.props.users.totalPageSize)).then((function(t){e.props.changeFetching&&e.props.changeFetching(!1),e.props.setUsers&&e.props.setUsers(t.data)}))},e}return Object(C.a)(s,[{key:"componentDidMount",value:function(){var e=this;q.a.get("https://social-network.samuraijs.com/api/1.0/users?page=\n        ".concat(this.props.currentPage,"\n        &count=").concat(this.props.users.totalPageSize)).then((function(t){e.props.setUsers&&e.props.setUsers(t.data)}))}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:this.props.users.isFetching?Object(l.jsx)(pe,{}):Object(l.jsx)(de,{users:this.props.users,currentPage:this.props.currentPage,changeFollow:this.props.follow,changePages:this.props.changePages,changeUnFollow:this.props.unFollow,upDateUsers:this.upDateUsers})})}}]),s}(a.a.Component),me=Object(k.b)((function(e){return{users:e.users,currentPage:e.users.currentPage}}),{follow:function(e){return{type:"FOLLOW_",id:e}},unFollow:function(e){return{type:"UN_FOLLOW_",id:e}},setUsers:function(e){return{type:"SET_USERS",items:e}},changePages:function(e){return{type:"CHANGE_USERS_PAGE",currentPage:e}},changeFetching:function(e){return{type:"CHANGE_Fetching",isFetching:e}}})(he),Oe=function(e){return Object(l.jsx)(b.a,{children:Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)(u,{}),Object(l.jsx)(g,{}),Object(l.jsx)("div",{className:"app-wrapper-content",children:Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{path:"/profile",element:Object(l.jsx)(ie,{})}),Object(l.jsx)(m.a,{path:"/dialogs",element:Object(l.jsx)(D,{}),children:Object(l.jsx)(m.a,{path:"/dialogs:id",element:Object(l.jsx)(D,{})})}),Object(l.jsx)(m.a,{path:"/users",element:Object(l.jsx)(me,{})}),Object(l.jsx)(m.a,{path:"/news",element:Object(l.jsx)(p,{})}),Object(l.jsx)(m.a,{path:"/settings",element:Object(l.jsx)(h,{})}),Object(l.jsx)(m.a,{path:"/music",element:Object(l.jsx)(O,{})})]})})]})})},fe=s(31),xe=Object(fe.a)({profilePage:te,dialogsPages:T,users:re}),ve=Object(fe.b)(xe);window.store=ve;var Pe=ve,_e=function(){i.a.render(Object(l.jsxs)(k.a,{store:Pe,children:[Object(l.jsx)(Oe,{state:Pe.getState(),dispatch:Pe.dispatch.bind(Pe)}),","]}),document.getElementById("root"))};_e(),Pe.subscribe(_e)}},[[74,1,2]]]);
//# sourceMappingURL=main.0cba546c.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{131:function(e,t,n){e.exports={img:"Preloader_img__OI9am"}},132:function(e,t,n){},133:function(e,t,n){e.exports={profileWrapper:"Profile_profileWrapper__CeI79"}},15:function(e,t,n){e.exports={nav:"Navigation_nav__39dxo",item:"Navigation_item__322Ml",active:"Navigation_active__10xic"}},242:function(e,t,n){},243:function(e,t,n){},25:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3NPR3",dialogsItems:"Dialogs_dialogsItems__3cTeW",messages:"Dialogs_messages__nbjyP",dialog:"Dialogs_dialog__2T_--",active:"Dialogs_active__BvRDv",answer:"Dialogs_answer__2TRcO"}},288:function(e,t,n){"use strict";n.r(t);var s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,291)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))},r=n(9),a=n(12),c=n.n(a),i=n(21),o=n(5),u=n(41),l=n(127),j=n.n(l).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b7b7629a-058d-4df6-866c-6165a8a8aade"}}),d=function(e,t){return j.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},b=function(e){return j.delete("follow/".concat(e)).then((function(e){return e.data}))},g=function(e){return j.post("follow/".concat(e)).then((function(e){return e.data}))},f=function(e){return j.get("profile/".concat(e)).then((function(e){return e.data}))},O=function(e){return j.get("profile/status/".concat(e))},p=function(e){return j.put("profile/status",{status:e})},h=function(){return j.get("auth/me").then((function(e){return e.data}))},m=function(e,t,n){return j.post("auth/login",{email:e,password:t,rememberMe:n})},x=function(){return j.delete("/auth/login")},v={id:null,email:null,login:null,isAuth:!1},A=function(e,t,n,s){return{type:"AUTH/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:s}}},w=function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){var n,s,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:0===(n=e.sent).resultCode&&(s=n.data,r=s.email,a=s.login,i=s.id,t(A(i,r,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===e.sent.data.resultCode&&t(A(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=n(34),P=n(290),E={dialogs:[{id:Object(P.a)(),name:"Roman"},{id:Object(P.a)(),name:"Romazan"},{id:Object(P.a)(),name:"Diyar"},{id:Object(P.a)(),name:"Ilyas"},{id:Object(P.a)(),name:"Viktor"}],messages:[{id:Object(P.a)(),message:"Hi"},{id:Object(P.a)(),message:"Hello"},{id:Object(P.a)(),message:"How are you?"},{id:Object(P.a)(),message:"Awesome"},{id:Object(P.a)(),message:"What's new ?"}]},U={post:[{id:1,message:"Hello",likesCount:12},{id:2,message:"Its my first post",likesCount:30},{id:3,message:"Yo",likesCount:40},{id:4,message:"Mu-a-ha-ha",likesCount:606}],profile:null,status:"",newPostText:""},N=function(e){return{type:"PROFILE/SET_STATUS",status:e}},B={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},I=function(e){return{type:"USERS/SET_CURRENT_PAGE",currentPage:e}},k=function(e){return{type:"USERS/TOGGLE_IS_FETCHING",isFetching:e}},y=function(e,t){return{type:"USERS/FOLLOWING_IN_PROGRESS",isFetching:e,userId:t}},D=n(129),T=n(126),F={initialized:!1},R=Object(r.c)({dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS/SEND_MESSAGE":return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(S.a)(e.messages),[{id:Object(P.a)(),message:t.newMessageBody}])});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/ADD_POST":return Object(o.a)(Object(o.a)({},e),{},{post:[].concat(Object(S.a)(e.post),[{id:5,message:t.newPostMessage,likesCount:0}]),newPostText:" "});case"PROFILE/SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"PROFILE/SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"PROFILE/DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{post:e.post.filter((function(e){return e.id!==t.id}))});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:Object(S.a)(e.users).map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case"USERS/UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:Object(S.a)(e.users).map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case"USERS/SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"USERS/SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"USERS/SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case"USERS/TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"USERS/FOLLOWING_IN_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingProgress:t.isFetching?[].concat(Object(S.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_USER_DATA":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},form:T.a}),L=Object(r.e)(R,Object(r.a)(D.a));window.store=L;var _=n(1),M=n.n(_),z=n(69),Q=n.n(z),G=(n(242),n(29)),V=n(30),J=n(32),Y=n(31),H=(n(243),n(13)),W=n(15),K=n.n(W),X=n(0),Z=function(){return Object(X.jsxs)("nav",{className:K.a.nav,children:[Object(X.jsx)("div",{className:K.a.item,children:Object(X.jsx)(H.b,{to:"/users",activeClassName:K.a.active,children:"Users"})}),Object(X.jsx)("div",{className:K.a.item,children:Object(X.jsx)(H.b,{to:"/profile",activeClassName:K.a.active,children:"Profile"})}),Object(X.jsx)("div",{className:K.a.item,children:Object(X.jsx)(H.b,{to:"/dialogs",activeClassName:K.a.active,children:"Messages"})}),Object(X.jsx)("div",{className:K.a.item,children:Object(X.jsx)(H.b,{to:"/news",activeClassName:K.a.active,children:"News"})}),Object(X.jsx)("div",{className:K.a.item,children:Object(X.jsx)(H.b,{to:"/music",activeClassName:K.a.active,children:"Music"})}),Object(X.jsx)("div",{className:K.a.item,children:Object(X.jsx)(H.b,{to:"/settings",activeClassName:K.a.active,children:"Settings"})}),Object(X.jsx)("div",{className:K.a.item})]})},q=n(10),$=function(){return Object(X.jsx)("div",{children:"News"})},ee=function(){return Object(X.jsx)("div",{children:"Settings"})},te=function(){return Object(X.jsx)("div",{children:"Music"})},ne=n(25),se=n.n(ne),re=function(e){var t="/dialogs/"+e.id;return Object(X.jsxs)("div",{className:se.a.dialog,children:[Object(X.jsx)("img",{alt:"avatar",src:"https://cdn1.iconfinder.com/data/icons/user-interface-design-flat/60/017_-_Male_User-ui-user-interface-avatar-512.png"}),Object(X.jsx)(H.b,{activeClassName:se.a.active,to:t,children:e.name})]})},ae=function(e){return Object(X.jsx)("div",{children:Object(X.jsx)("div",{className:se.a.message,children:e.message})})},ce=n(124),ie=n(125),oe=n(58),ue=n(55),le=n.n(ue),je=function(e){var t=e.meta,n=e.children,s=t.touched&&t.error;return Object(X.jsxs)("div",{className:le.a.formControl+" "+(s?le.a.error:""),children:[Object(X.jsx)("div",{children:n}),s&&Object(X.jsx)("span",{children:t.error})]})},de=function(e){var t=e.input,n=(e.meta,Object(oe.a)(e,["input","meta"]));return Object(X.jsx)(je,Object(o.a)(Object(o.a)({},e),{},{children:Object(X.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))}))},be=function(e){var t=e.input,n=(e.meta,Object(oe.a)(e,["input","meta"]));return Object(X.jsx)(je,Object(o.a)(Object(o.a)({},e),{},{children:Object(X.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},ge=function(e){if(!e)return"Field is required"},fe=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbol")}},Oe=fe(50),pe=Object(ie.a)({form:"dialogAddMessageForm"})((function(e){return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(X.jsx)("div",{children:Object(X.jsx)(ce.a,{component:de,name:"newMessageBody",placeholder:"Enter your message",validate:[ge,Oe]})}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{children:"send"})})]})})})),he=n(11),me=function(e){return{isAuth:e.auth.isAuth}};function xe(e){return Object(he.b)(me)((function(t){var n=t.isAuth,s=Object(oe.a)(t,["isAuth"]);return n?Object(X.jsx)(e,Object(o.a)({},s)):Object(X.jsx)(q.a,{to:"/login"})}))}var ve=Object(r.d)(Object(he.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{sendMessage:function(e){return{type:"DIALOGS/SEND_MESSAGE",newMessageBody:e}}}),xe)((function(e){var t=e.sendMessage,n=e.dialogs,s=e.messages,r=n.map((function(e){return Object(X.jsx)(re,{name:e.name,id:e.id},e.id)})),a=s.map((function(e){return Object(X.jsx)(ae,{message:e.message,id:e.id},e.id)}));return Object(X.jsxs)("div",{className:se.a.dialogs,children:[Object(X.jsx)("div",{className:se.a.dialogsItems,children:r}),Object(X.jsxs)("div",{className:se.a.messages,children:[Object(X.jsx)("div",{children:a}),Object(X.jsx)(pe,{onSubmit:function(e){t(e.newMessageBody)}})]})]})})),Ae=n(38),we=n.n(Ae),Ce=n(93),Se=n.n(Ce),Pe=function(e){for(var t=e.totalUsersCount,n=e.pageSize,s=e.currentPage,r=e.onPageChanged,a=Math.ceil(t/n),c=[],i=1;i<=a;i++)c.push(i);return Object(X.jsx)("div",{children:c.map((function(e){return Object(X.jsx)("span",{className:s===e?Se.a.selectedPage:Se.a.Page,onClick:function(){r(e)},children:e})}))})},Ee=function(e){var t=e.user,n=e.followProgress,s=e.follow,r=e.unFollow;return Object(X.jsxs)("div",{className:we.a.items,children:[Object(X.jsx)(H.b,{to:"/profile/"+t.id,children:Object(X.jsx)("div",{children:Object(X.jsx)("img",{alt:"photoProfile",src:null!==t.photos.small?t.photos.small:"data:image/png;base64,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"})})}),Object(X.jsx)("div",{children:t.followed?Object(X.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:we.a.button,onClick:function(){s(t.id)},children:"UnFollow"}):Object(X.jsx)("button",{disabled:n.some((function(e){return e===t.id})),className:we.a.button,onClick:function(){r(t.id)},children:"Follow"})}),Object(X.jsxs)("div",{className:we.a.userInfo,children:[Object(X.jsx)("div",{children:t.name}),Object(X.jsx)("div",{children:t.status})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{children:"u.location?.country"}),Object(X.jsx)("div",{children:"u.location?.city"})]})]})},Ue=function(e){var t=e.totalUsersCount,n=e.pageSize,s=e.follow,r=e.unFollow,a=e.usersPage,c=e.currentPage,i=e.onPageChanged,o=e.followProgress;return Object(X.jsxs)("div",{children:[Object(X.jsx)(Pe,{totalUsersCount:t,pageSize:n,currentPage:c,onPageChanged:i}),Object(X.jsx)("div",{className:we.a.wrapper,children:a.map((function(e){return Object(X.jsx)(Ee,{user:e,followProgress:o,follow:s,unFollow:r},e.id)}))})]})},Ne=n.p+"static/media/Rocket.9dd581ae.gif",Be=n(131),Ie=n.n(Be),ke=function(){return Object(X.jsx)("div",{children:Object(X.jsx)("img",{alt:"preloader",src:Ne,className:Ie.a.img})})},ye=function(e){return e.usersPage.users},De=function(e){return e.usersPage.pageSize},Te=function(e){return e.usersPage.totalUsersCount},Fe=function(e){return e.usersPage.currentPage},Re=function(e){return e.usersPage.isFetching},Le=function(e){return e.usersPage.followingProgress},_e=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(G.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(X.jsxs)(X.Fragment,{children:[this.props.isFetching?Object(X.jsx)(ke,{}):null,Object(X.jsx)(Ue,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,follow:this.props.follow,unFollow:this.props.unFollow,usersPage:this.props.usersPage,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,followProgress:this.props.followProgress})]})}}]),n}(M.a.Component),Me=Object(r.d)(Object(he.b)((function(e){return{usersPage:ye(e),pageSize:De(e),totalUsersCount:Te(e),currentPage:Fe(e),isFetching:Re(e),followProgress:Le(e)}}),{follow:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(y(!0,e)),t.next=3,b(e);case 3:0===t.sent.resultCode&&n({type:"USERS/UNFOLLOW",id:e}),n(y(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(y(!0,e)),t.next=3,g(e);case 3:0===t.sent.resultCode&&n({type:"USERS/FOLLOW",id:e}),n(y(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:I,getUsers:function(e,t){return function(){var n=Object(i.a)(c.a.mark((function n(s){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(k(!0)),s(I(e)),n.next=4,d(e,t);case 4:r=n.sent,s(k(!1)),s({type:"USERS/SET_USERS",users:r.items}),s({type:"USERS/SET_TOTAL_USERS_COUNT",totalCount:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},followingInProgress:y}))(_e),ze=n(57),Qe=n(39),Ge=n.n(Qe),Ve=function(e){var t=e.status,n=e.updateStatus,s=Object(_.useState)(!1),r=Object(ze.a)(s,2),a=r[0],c=r[1],i=Object(_.useState)(t),o=Object(ze.a)(i,2),u=o[0],l=o[1];Object(_.useEffect)((function(){l(t)}),[t]);return Object(X.jsxs)("div",{children:[!a&&Object(X.jsx)("div",{style:{marginTop:"20px"},children:Object(X.jsx)("span",{onDoubleClick:function(){c(!0)},children:t||"Enter your status"})}),a&&Object(X.jsx)("div",{style:{marginTop:"20px"},children:Object(X.jsx)("input",{onBlur:function(){c(!1),n(u)},autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},value:u})})]})},Je=function(e){var t=e.status,n=e.profile,s=e.updateStatus,r=Object(_.useState)(!0),a=Object(ze.a)(r,2),c=a[0],i=a[1];return n?Object(X.jsxs)("div",{className:Ge.a.wrapper,children:[Object(X.jsxs)("div",{className:Ge.a.description,children:[Object(X.jsxs)("div",{className:Ge.a.info,children:[Object(X.jsx)(Ve,{status:t,updateStatus:s}),Object(X.jsxs)("h3",{children:["FirstName : ",Object(X.jsx)("span",{children:n.fullName})]}),Object(X.jsxs)("h3",{children:["Looking for a job : ",Object(X.jsx)("span",{children:n.lookingForAJob?"Yes":"No"})]}),Object(X.jsxs)("h3",{children:["looking For A Job Description : ",Object(X.jsx)("span",{children:n.lookingForAJobDescription})]})]}),Object(X.jsxs)("div",{onClick:function(){return i(!c)},children:["Toggle",c?"":Object(X.jsxs)("div",{className:Ge.a.toggle,children:[Object(X.jsxs)("span",{children:["Git: ",n.contacts.github]}),Object(X.jsxs)("span",{children:["VK: ",n.contacts.vk]}),Object(X.jsxs)("span",{children:["FaceBook: ",n.contacts.facebook]}),Object(X.jsxs)("span",{children:["Twitter: ",n.contacts.twitter]}),Object(X.jsxs)("span",{children:["Instagram: ",n.contacts.instagram]}),Object(X.jsxs)("span",{children:["MainLink: ",n.contacts.mainLink]}),Object(X.jsxs)("span",{children:["Website: ",n.contacts.website]}),Object(X.jsxs)("span",{children:["YouTube: ",n.contacts.youtube]})]})]})]}),Object(X.jsx)("div",{className:Ge.a.ava,children:Object(X.jsx)("div",{className:Ge.a.img,children:Object(X.jsx)("img",{alt:"avatar",src:n.photos.large||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQppfBCwxxoQg3WctXTif09_hUrdIItPqnA&usqp=CAU"})})})]}):Object(X.jsx)(ke,{})},Ye=n(132),He=n.n(Ye),We=n(46),Ke=n.n(We),Xe=function(e){return Object(X.jsxs)("div",{className:Ke.a.PostWrapper,children:[Object(X.jsx)("div",{className:Ke.a.box1,children:Object(X.jsx)("div",{className:Ke.a.ava,children:Object(X.jsx)("img",{alt:"avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png"})})}),Object(X.jsx)("div",{className:Ke.a.box2,children:e.message}),Object(X.jsx)("div",{className:Ke.a.box3,children:e.likescount})]})},Ze=fe(10),qe=Object(ie.a)({form:"PostMessageForm"})((function(e){return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(X.jsx)("div",{children:Object(X.jsx)(ce.a,{component:de,name:"newPostMessage",placeholder:"Enter your message",validate:[ge,Ze]})}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{children:"Send post"})})]})})})),$e=M.a.memo((function(e){var t=e.addPost,n=e.posts.map((function(e){return Object(X.jsx)(Xe,{message:e.message,likescount:e.likesCount},e.id)}));return Object(X.jsxs)("div",{children:[Object(X.jsx)("div",{className:He.a.posts,children:n}),Object(X.jsx)(qe,{onSubmit:function(e){t(e.newPostMessage)}})]})})),et=Object(he.b)((function(e){return{posts:e.profilePage.post}}),{addPost:function(e){return{type:"PROFILE/ADD_POST",newPostMessage:e}}})($e),tt=n(133),nt=n.n(tt),st=function(e){var t=e.profile,n=e.status,s=e.updateStatus;return Object(X.jsxs)("div",{className:nt.a.profileWrapper,children:[Object(X.jsx)(Je,{profile:t,status:n,updateStatus:s}),Object(X.jsx)(et,{})]})},rt=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=JSON.stringify(this.props.authorizedUserId))||this.props.history.push("/login"),this.props.SetUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(X.jsx)("div",{children:Object(X.jsx)(st,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}]),n}(M.a.Component),at=Object(r.d)(Object(he.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{SetUserProfile:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:s=t.sent,n({type:"PROFILE/SET_USER_PROFILE",profile:s});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:s=t.sent,n(N(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:0===t.sent.data.resultCode&&n(N(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),q.f,xe)(rt),ct=n(94),it=n.n(ct),ot=function(e){return Object(X.jsxs)("header",{className:it.a.header,children:[Object(X.jsx)("img",{alt:"logo",src:"https://img.icons8.com/plasticine/2x/duolingo-logo.png"}),Object(X.jsx)("div",{className:it.a.loginBlock,children:e.isAuth?Object(X.jsxs)("div",{children:[e.login," - ",Object(X.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(X.jsx)(H.b,{to:"/login",children:"Login"})})]})},ut=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){return Object(X.jsx)(ot,Object(o.a)({},this.props))}}]),n}(M.a.Component),lt=Object(he.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:C})(ut),jt=Object(ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(X.jsxs)("form",{onSubmit:t,children:[Object(X.jsx)("div",{children:Object(X.jsx)(ce.a,{component:be,validate:[ge],name:"email",placeholder:"Email"})}),Object(X.jsx)("div",{children:Object(X.jsx)(ce.a,{component:be,validate:[ge],name:"password",type:"password",placeholder:"password"})}),Object(X.jsxs)("div",{children:[Object(X.jsx)(ce.a,{component:be,type:"checkbox",name:"rememberMe"}),"Remember me"]}),n&&Object(X.jsx)("div",{className:le.a.formSummaryError,children:n}),Object(X.jsx)("div",{children:Object(X.jsx)("button",{children:"Login"})})]})})),dt=Object(he.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var s=Object(i.a)(c.a.mark((function s(r){var a,i;return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m(e,t,n);case 2:0===(a=s.sent).data.resultCode?r(w()):(i=a.data.messages.length>0?a.data.messages[0]:"Some Error",r(Object(u.a)("login",{_error:i})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},logout:C})((function(e){var t=e.login;return e.isAuth?Object(X.jsx)(q.a,{to:"/profile"}):Object(X.jsxs)("div",{children:[Object(X.jsx)("h1",{children:"Login"}),Object(X.jsx)(jt,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}})]})})),bt=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(G.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(X.jsxs)("div",{className:"app-wrapper",children:[Object(X.jsx)(lt,{}),Object(X.jsx)(Z,{}),Object(X.jsxs)("div",{className:"app-wrapper-content",children:[Object(X.jsx)(q.b,{path:"/dialogs",render:function(){return Object(X.jsx)(ve,{})}}),Object(X.jsx)(q.b,{path:"/profile/:userId?",render:function(){return Object(X.jsx)(at,{})}}),Object(X.jsx)(q.b,{path:"/users",render:function(){return Object(X.jsx)(Me,{})}}),Object(X.jsx)(q.b,{path:"/news",component:$}),Object(X.jsx)(q.b,{path:"/settings",component:ee}),Object(X.jsx)(q.b,{path:"/music",component:te}),Object(X.jsx)(q.b,{path:"/login",render:function(){return Object(X.jsx)(dt,{})}})]})]}):Object(X.jsx)(ke,{})}}]),n}(M.a.Component),gt=Object(r.d)(q.f,Object(he.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(w());Promise.all([t]).then((function(){e({type:"SET_INITIALIZED"})}))}}}))(bt);Q.a.render(Object(X.jsx)(he.a,{store:L,children:Object(X.jsx)(H.a,{children:Object(X.jsx)(gt,{})})}),document.getElementById("root")),s()},38:function(e,t,n){e.exports={items:"Users_items__1DePs",button:"Users_button__3GMLc",userInfo:"Users_userInfo__1gG46",Page:"Users_Page__3Wl1c"}},39:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__17kvD",wrapper:"ProfileInfo_wrapper__2kzJx",description:"ProfileInfo_description__QTNV2",ava:"ProfileInfo_ava__3Rg7n",img:"ProfileInfo_img__2kZj3",info:"ProfileInfo_info__3gyJU",toggle:"ProfileInfo_toggle__1iLaQ"}},46:function(e,t,n){e.exports={PostWrapper:"Post_PostWrapper__3n0DT",box1:"Post_box1__bdI_k",ava:"Post_ava__1i1pU",box2:"Post_box2__2wzCx",box3:"Post_box3__3P-1H"}},55:function(e,t,n){e.exports={formControl:"FormsControl_formControl__rr0La",error:"FormsControl_error__3vsq-",formSummaryError:"FormsControl_formSummaryError__1DrmJ"}},93:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__n9_ZE"}},94:function(e,t,n){e.exports={header:"Header_header__21LKl",loginBlock:"Header_loginBlock__3zGHu"}}},[[288,1,2]]]);
//# sourceMappingURL=main.89804f37.chunk.js.map
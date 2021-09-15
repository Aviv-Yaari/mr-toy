(this["webpackJsonpex-miss-toy"]=this["webpackJsonpex-miss-toy"]||[]).push([[0],{355:function(e,t,n){},373:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(13),o=n.n(a),s=n(6),c=n(7),i=n(10),u=n(11),l=n(24),d=n(39),p=n(23),j=n(412),h=n(2),b=function(e){var t=e.user,n=e.onLogout;return Object(h.jsx)("div",{className:"user flex align-center wrap justify-center",children:t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.b,{to:"/user",children:Object(h.jsxs)(j.a,{children:[t.firstName,t.isAdmin?" (Admin)":""]})}),Object(h.jsx)(d.b,{to:"/logout",children:Object(h.jsx)(j.a,{onClick:n,children:"Log Out"})})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.b,{to:"/signup",children:Object(h.jsx)(j.a,{children:"Sign Up"})}),Object(h.jsx)(d.b,{to:"/login",children:Object(h.jsx)(j.a,{children:"Log In"})})]})})},f=function(e){var t=e.onLogout,n=Object(l.d)((function(e){return e.userModule.user}));return Object(h.jsxs)("header",{className:"app-header full flex align-center",children:[Object(h.jsx)(d.b,{className:"logo",to:"/toy",children:Object(h.jsx)(j.a,{size:"large",children:"Mr.Toy"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)(d.b,{to:"/toy/add",children:Object(h.jsx)(j.a,{children:"Add Toy"})}),Object(h.jsx)(d.b,{to:"/toy/dashboard",children:Object(h.jsx)(j.a,{children:"Dashboard"})}),Object(h.jsx)(d.b,{to:"/toy/about",children:Object(h.jsx)(j.a,{children:"About"})})]}),Object(h.jsx)(b,{user:n,onLogout:t})]})},m=n(427),O=n(425),x=function(e){var t=e.userMsg,n=t.msg,r=t.isError,a=t.isOpen,o=e.hideUserMsg;return Object(h.jsx)(m.a,{open:a,autoHideDuration:6e3,onClose:o,children:Object(h.jsx)(O.a,{elevation:6,variant:"filled",onClose:o,severity:r?"error":"info",children:n})})},v=function(e,t){return function(n){n({type:"SHOW_USER_MSG",msg:e,isError:t})}},y=n(9),g=n.n(y),w=n(15),T=n(109),S=n.n(T),k={saveToStorage:function(e,t){sessionStorage.setItem(e,JSON.stringify(t))},loadFromStorage:function(e){var t=sessionStorage.getItem(e);t&&(t=JSON.parse(t));return t},removeFromStorage:function(e){sessionStorage.removeItem(e)}};var E=S.a.create({withCredentials:!0}),C={signup:function(e){return N.apply(this,arguments)},login:function(e,t){return M.apply(this,arguments)},logout:function(){return F.apply(this,arguments)},loadFromStorage:function(){return k.loadFromStorage("user")}};function N(){return(N=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/api/auth/signup",{user:t});case 2:return _((n=e.sent).data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(w.a)(g.a.mark((function e(t,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/api/auth/login",{email:t,password:n});case 2:return _((r=e.sent).data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/api/auth/logout");case 2:D();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){k.saveToStorage("user",e)}function D(){k.removeFromStorage("user")}var A=function(e,t){return function(){var n=Object(w.a)(g.a.mark((function n(r){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.login(e,t);case 2:a=n.sent,r({type:"SET_USER",user:a});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},L=function(e){return function(t){return t({type:"SET_USER",user:e})}},R=n(27),B=n(430),U=n(424),I=n(429),W=n(110),P=n.n(W),Y=n(117),q=n(189),V=n.n(q),H=n(48),z=n(118),G=n.n(z),J=n(119),X=n.n(J),$=n(203),K=n(188),Q=n.n(K),Z=function(e){var t=e.sort,n=Object(r.useState)(null),a=Object(H.a)(n,2),o=a[0],s=a[1],c=function(t){e.onSortField(t),setTimeout(i,500)},i=function(){s(null)};return Object(h.jsxs)("section",{className:"toy-sort",children:[Object(h.jsx)(j.a,{endIcon:Object(h.jsx)(Q.a,{}),onClick:function(e){s(e.currentTarget)},children:"Sort"}),Object(h.jsxs)($.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:i,children:[Object(h.jsxs)(I.a,{onClick:function(){return c("name")},children:[1===t.name&&Object(h.jsx)(G.a,{}),-1===t.name&&Object(h.jsx)(X.a,{}),"Name"]}),Object(h.jsxs)(I.a,{onClick:function(){return c("price")},children:[1===t.price&&Object(h.jsx)(G.a,{}),-1===t.price&&Object(h.jsx)(X.a,{}),"Price"]}),Object(h.jsxs)(I.a,{onClick:function(){return c("createdAt")},children:[1===t.createdAt&&Object(h.jsx)(G.a,{}),-1===t.createdAt&&Object(h.jsx)(X.a,{}),"Created At"]})]})]})},ee=S.a.create({withCredentials:!0}),te={getToys:function(e,t){return ae.apply(this,arguments)},getToyById:function(e){return oe.apply(this,arguments)},create:function(e){return se.apply(this,arguments)},remove:function(e){return ce.apply(this,arguments)},update:function(e){return ie.apply(this,arguments)},getAllLabels:function(){return ne},getToysLabelMap:function(e){return e.reduce((function(e,t){return t.labels.forEach((function(t){e.hasOwnProperty(t)?e[t]++:e[t]=1})),e}),{})},getToysYearMap:function(e){return e.reduce((function(e,t){var n=new Date(t.createdAt).getFullYear();return e.hasOwnProperty(n)?e[n]++:e[n]=1,e}),{})}},ne=["On wheels","Box game","Battery Powered","Art","Baby","Doll","Puzzle","Outdoor"],re="/api/toy";function ae(){return(ae=Object(w.a)(g.a.mark((function e(t,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.get(re,{params:{criteria:t,sort:n}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.get("".concat(re,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.post(re,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.delete("".concat(re,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return(ie=Object(w.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.put("".concat(re,"/").concat(t._id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ue=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isExpanded:!1},e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.props.onSetFilter(Object(R.a)({},r,a))},e.handleLabelChange=function(t){var n=t.map((function(e){return e.value}));e.props.onSetFilter({labels:n})},e.onToggleFilter=function(){e.setState((function(e){return{isExpanded:!e.isExpanded}}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.allLabels=te.getAllLabels().map((function(e){return{label:e,value:e}}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.filter,t=e.name,n=void 0===t?"":t,r=e.inStock,a=void 0===r?"all":r,o=this.props,s=o.onSortField,c=o.sort,i=this.state.isExpanded;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"search flex align-center",children:[Object(h.jsx)(P.a,{}),Object(h.jsx)(B.a,{onChange:this.handleChange,placeholder:"Search\u2026",name:"name",value:n,fullWidth:!0})]}),Object(h.jsxs)("section",{className:"toy-filter",children:[Object(h.jsxs)("div",{className:"btns flex flex space-between",children:[Object(h.jsx)(j.a,{startIcon:Object(h.jsx)(V.a,{}),onClick:this.onToggleFilter,children:"Filter"}),Object(h.jsx)(Z,{onSortField:s,sort:c})]}),Object(h.jsx)("section",{className:"filters flex wrap grow",children:i&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"in-stock",children:Object(h.jsxs)(U.a,{variant:"outlined",fullWidth:!0,size:"small",select:!0,name:"inStock",value:a,onChange:this.handleChange,children:[Object(h.jsx)(I.a,{value:!0,children:"In stock"}),Object(h.jsx)(I.a,{value:!1,children:"Out of stock"}),Object(h.jsx)(I.a,{value:"all",children:"Stock"})]})}),Object(h.jsx)("div",{className:"labels",children:Object(h.jsx)(Y.a,{placeholder:"Labels",options:this.allLabels,isMulti:!0,onChange:this.handleLabelChange})})]})})]})]})}}]),n}(r.Component),le=n(422),de=n(417),pe=n(418),je=n(421),he=n(420),be=n(419),fe=n(120),me=n(111),Oe=n.n(me),xe=n(431),ve=function(e){var t=e.labels;return t?Object(h.jsx)("div",{className:"toy-label-list flex",style:{gap:"10px",flexWrap:"wrap",padding:"8px 16px"},children:t.map((function(e,t){return Object(h.jsx)(xe.a,{label:e},t)}))}):Object(h.jsx)(h.Fragment,{})},ye=n(416),ge=n(191),we=n.n(ge),Te=n(190),Se=n.n(Te),ke=function(e){var t=e.onToyClick,n=e.onToyEdit,r=e.onRemoveToy,a=e.toy;return Object(h.jsxs)(h.Fragment,{children:[t&&Object(h.jsx)(ye.a,{onClick:function(){return t(a)},"aria-label":"view",children:Object(h.jsx)(P.a,{})}),Object(h.jsx)(ye.a,{onClick:function(){return n(a)},"aria-label":"edit",children:Object(h.jsx)(Se.a,{})}),Object(h.jsx)(ye.a,{onClick:function(){return r(a)},"aria-label":"delete",children:Object(h.jsx)(we.a,{})})]})},Ee=function(e){var t=e.toy,n=e.onToyClick,r=e.onRemoveToy,a=e.onToyEdit,o=t.name,s=t.price,c=t.labels,i=t.inStock,u=t.createdAt,l=t.description;return Object(h.jsxs)(de.a,{className:"toy-preview",children:[Object(h.jsxs)(pe.a,{onClick:function(){return n(t)},children:[Object(h.jsx)(be.a,{className:"media",image:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",title:"Contemplative Reptile"}),Object(h.jsxs)(he.a,{children:[Object(h.jsxs)(fe.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[o,!i&&" - Out of Stock!"]}),Object(h.jsx)(fe.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",children:l}),Object(h.jsxs)(fe.a,{variant:"h6",component:"h3",children:[s,"$"]}),Object(h.jsx)(fe.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",children:Oe()(u).format("MMMM Do YYYY")})]})]}),Object(h.jsx)(ve,{labels:c}),Object(h.jsx)(je.a,{children:Object(h.jsx)(ke,{toy:t,onToyClick:n,onToyEdit:a,onRemoveToy:r})})]})},Ce=function(e){var t=e.toys,n=e.onRemoveToy,r=e.onToggleToy,a=e.onToyClick,o=e.onToyEdit;return t?Object(h.jsxs)("section",{className:"toy-list",children:[t.map((function(e){return Object(h.jsx)(Ee,{toy:e,onRemoveToy:n,onToggleToy:r,onToyClick:a,onToyEdit:o},e._id)})),!t.length&&Object(h.jsx)("p",{children:"No toys to show"})]}):Object(h.jsx)("div",{style:{textAlign:"center",marginTop:"50px"},children:Object(h.jsx)(le.a,{color:"secondary"})})},Ne=n(30),Me=n(66),Fe=n.n(Me),_e={toys:null,currToy:null,filter:{},sort:{field:"createdAt",type:1}};var De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e.filter,t=arguments.length>1?arguments[1]:void 0;return function(){var n=Object(w.a)(g.a.mark((function n(r){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,te.getToys(e,t);case 2:a=n.sent,r({type:"SET_TOYS",toys:a});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},Ae=function(e){return function(){var t=Object(w.a)(g.a.mark((function t(n){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.getToyById(e);case 2:r=t.sent,n({type:"SET_TOY",toy:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Le=function(e){return function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.create(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Re=function(e){return function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.remove(e._id);case 2:n({type:"REMOVE_TOY",id:e._id});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Be=function(e){return function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te.update(e);case 2:n({type:"UPDATE_TOY",toy:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ue=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onRemoveToy=function(t){e.props.removeToy(t),e.props.showUserMsg("Toy removed")},e.onToyClick=function(t){var n=t._id;e.props.history.push("/toy/"+n)},e.onToyEdit=function(t){var n=t._id;e.props.history.push("/toy/".concat(n,"/edit"))},e.onSetFilter=function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.setFilter(n);case 2:e.props.loadToys(e.props.filter);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onSortField=function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.sortField(n);case 2:e.props.loadToys(void 0,e.props.sort);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.loadToys();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.toys,n=e.filter,r=e.sort;return Object(h.jsxs)("main",{className:"toy-app",children:[Object(h.jsx)(ue,{filter:n,onSetFilter:this.onSetFilter,onSortField:this.onSortField,sort:r}),Object(h.jsx)(Ce,{toys:t,onRemoveToy:this.onRemoveToy,onToyClick:this.onToyClick,onToyEdit:this.onToyEdit})]})}}]),n}(r.Component),Ie={loadToys:De,addToy:Le,removeToy:Re,updateToy:Be,setFilter:function(e){return function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SET_FILTER",filter:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},clearFilter:function(){return function(e){e({type:"SET_FILTER",filter:_e.filter})}},showUserMsg:v,sortField:function(e){return function(){var t=Object(w.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SORT_FIELD",field:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},We=Object(l.b)((function(e){var t=e.toyModule;return{toys:t.toys,filter:t.filter,sort:t.sort}}),Ie)(Ue),Pe=n(192),Ye=n.n(Pe),qe=n(423),Ve=n(428),He=function(e){var t=e.reviews;return Object(h.jsx)("section",{className:"flex toy-review-list",children:t.map((function(e){return Object(h.jsx)(ze,{review:e},e._id)}))})};function ze(e){var t=e.review,n=t.author,r=t.title,a=t.body,o=t.createdAt;return Object(h.jsxs)(de.a,{children:[Object(h.jsx)(qe.a,{avatar:Object(h.jsx)(Ve.a,{"aria-label":"recipe",children:n.charAt(0).toUpperCase()}),title:r,subheader:Oe()(o).format("MMMM Do YYYY")}),Object(h.jsx)(he.a,{children:Object(h.jsx)(fe.a,{variant:"body2",component:"p",children:a})})]})}var Ge=n(140),Je=n.n(Ge),Xe=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isExpanded:!1},e.onTogglePopup=function(){e.setState((function(e){return{isExpanded:!e.isExpanded}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.isExpanded,t=this.props.icon;return Object(h.jsxs)("section",{className:"popup",children:[Object(h.jsx)(ye.a,{className:"icon",onClick:this.onTogglePopup,children:e?Object(h.jsx)(Je.a,{}):t}),e&&Object(h.jsxs)("div",{className:"content flex column",children:[Object(h.jsx)("header",{children:Object(h.jsx)(ye.a,{className:"btn-close",onClick:this.onTogglePopup,children:Object(h.jsx)(Je.a,{})})}),Object(h.jsx)("main",{className:"main-content grow",children:this.props.children}),Object(h.jsx)("footer",{})]})]})}}]),n}(r.Component),$e=n(22),Ke=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={messages:[{text:"Hey there!",from:"Bot"}]},e.onSend=function(t){t.preventDefault();var n={text:t.target.text.value,from:"Puki"},r={text:"Hello Puki, nice to meet you.",from:"Bot"};e.addMessage(n,(function(){return setTimeout(e.addMessage,500,r)})),t.target.reset()},e.addMessage=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.setState((function(e){return{messages:[].concat(Object($e.a)(e.messages),[t])}}),n)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.messages;return Object(h.jsxs)("section",{className:"chat-app flex column space-between",children:[Object(h.jsx)("div",{className:"messages",children:e.map((function(e,t){return Object(h.jsxs)("div",{className:"message",children:[Object(h.jsxs)("span",{className:"from",children:[e.from,":"]})," ",e.text]},t)}))}),Object(h.jsxs)("form",{className:"send flex",onSubmit:this.onSend,children:[Object(h.jsx)(U.a,{name:"text",variant:"outlined",fullWidth:!0}),Object(h.jsx)(j.a,{type:"submit",variant:"outlined",children:"Send"})]})]})}}]),n}(r.Component),Qe=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isEditMode:!1},e.loadToy=function(){var t=e.props.match.params.id;e.props.getToyById(t)},e.onRemoveToy=function(t){e.props.removeToy(t),e.props.showUserMsg("Toy removed"),e.props.history.push("/toy")},e.onToyEdit=function(t){var n=t._id;e.props.history.push("/toy/".concat(n,"/edit"))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.loadToy()}},{key:"render",value:function(){if(!this.props.toys||!this.props.toys.length)return Object(h.jsx)(le.a,{});var e=this.props.toys[0],t=e.name,n=e.description,r=e.price,a=e.labels,o=e.inStock,s=e.reviews;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[Object(h.jsxs)("section",{className:"toy-details container",children:[Object(h.jsxs)(fe.a,{variant:"h3",gutterBottom:!0,style:{fontWeight:"500"},children:[t," ",!o&&" - Out of Stock!"]}),Object(h.jsx)(ve,{labels:a}),Object(h.jsx)("img",{className:"toy-img",src:"https://material-ui.com/static/images/cards/contemplative-reptile.jpg",alt:"",width:"100%"}),Object(h.jsx)(fe.a,{variant:"body1",gutterBottom:!0,children:n}),Object(h.jsxs)(fe.a,{variant:"h6",children:["Price: ",r,"$"]}),Object(h.jsx)("section",{className:"toy-actions",children:Object(h.jsx)(ke,{toy:e,onToyEdit:this.onToyEdit,onRemoveToy:this.onRemoveToy})})]}),Object(h.jsxs)("section",{className:"toy-reviews",children:[Object(h.jsx)(fe.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:"bold"},children:"Reviews"}),s&&Object(h.jsx)(He,{reviews:s})]})]}),Object(h.jsx)(Xe,{icon:Object(h.jsx)(Ye.a,{}),children:Object(h.jsx)(Ke,{})})]})}}]),n}(r.Component),Ze={getToyById:Ae,removeToy:Re,showUserMsg:v},et=Object(l.b)((function(e){return{toys:e.toyModule.toys}}),Ze)(Qe),tt=n(143),nt={getRandomColor:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}};var rt=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={labelChartData:null,yearChartData:null},e.createChartData=function(e){var t={labels:[],datasets:[{data:[],backgroundColor:[]}]};for(var n in e){var r=e[n];t.labels.push(n),t.datasets[0].data.push(r),t.datasets[0].backgroundColor.push(nt.getRandomColor())}return t},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(w.a)(g.a.mark((function e(){var t,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.loadToys();case 2:t=this.props.toys,n=this.createChartData(te.getToysLabelMap(t)),r=this.createChartData(te.getToysYearMap(t)),this.setState({labelChartData:n,yearChartData:r});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.labelChartData,n=e.yearChartData;return Object(h.jsxs)("main",{className:"toy-dashboard container",children:[Object(h.jsx)(fe.a,{variant:"h3",gutterBottom:!0,style:{fontWeight:"500"},children:"Dashboard"}),Object(h.jsxs)("div",{className:"charts-container flex wrap",children:[Object(h.jsxs)("section",{className:"chart",children:[Object(h.jsx)(fe.a,{variant:"h5",gutterBottom:!0,align:"center",children:"Toy Labels"}),Object(h.jsx)(tt.a,{data:t})]}),Object(h.jsxs)("section",{className:"chart",children:[Object(h.jsx)(fe.a,{variant:"h5",gutterBottom:!0,align:"center",children:"Toy Years"}),Object(h.jsx)(tt.a,{data:n})]})]})]})}}]),n}(r.Component),at={loadToys:De},ot=Object(l.b)((function(e){return{toys:e.toyModule.toys}}),at)(rt),st=n(204),ct=function(e){var t=e.name;return Object(h.jsx)("div",{className:"branch-marker",children:Object(h.jsxs)("span",{children:[t," Branch"]})})},it=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).branches=[{name:"Tel Aviv",lat:32.0853,lng:34.7818},{name:"Beirut",lat:33.8938,lng:35.5018},{name:"Cairo",lat:30.0444,lng:31.2357}],e.state={currBranch:e.branches[0]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.currBranch,n=t.lat,r=t.lng;return Object(h.jsxs)("main",{className:"container",children:[Object(h.jsx)(fe.a,{variant:"h3",gutterBottom:!0,style:{fontWeight:"500"},children:"About Us"}),Object(h.jsx)(fe.a,{variant:"subtitle1",gutterBottom:!0,children:"We are proud to be announced as the best toy store in the middle east for the third year in a row."}),Object(h.jsx)(fe.a,{variant:"h5",gutterBottom:!0,align:"center",style:{marginTop:"40px"},children:"Our Branches"}),Object(h.jsx)("section",{className:"branches flex justify-center",style:{marginBottom:"40px"},children:this.branches.map((function(t){return Object(h.jsx)(j.a,{onClick:function(){return e.setState({currBranch:t})},children:t.name},t.name)}))}),Object(h.jsx)("div",{style:{height:"500px",width:"100%"},children:Object(h.jsx)(st.a,{bootstrapURLKeys:{key:""},center:{lat:n,lng:r},defaultZoom:7,children:this.branches.map((function(e){return Object(h.jsx)(ct,{lat:e.lat,lng:e.lng,name:e.name},e.name)}))})})]})}}]),n}(r.Component),ut=(n(355),n(112)),lt=n.n(ut),dt=function(){var e=Object(l.c)(),t=Object(p.f)(),n=function(){var n=Object(w.a)(g.a.mark((function n(r){var a,o,s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),a=new FormData(r.currentTarget),o={email:a.get("email"),password:a.get("password"),firstName:a.get("firstName"),lastName:a.get("lastName")},e(v("Signing up...")),n.prev=4,n.next=7,C.signup(o);case 7:return s=n.sent,n.next=10,e(L(s));case 10:e(v("Signed up successfuly")),t.push("/toy"),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),e(v(n.t0.response.data.err,!0));case 17:case"end":return n.stop()}}),n,null,[[4,14]])})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)("main",{className:"sign-up container",children:[Object(h.jsxs)("section",{className:"heading flex column align-center justify-center",children:[Object(h.jsx)(Ve.a,{style:{backgroundColor:"#dc004e"},children:Object(h.jsx)(lt.a,{})}),Object(h.jsx)(fe.a,{component:"h1",variant:"h5",children:"Sign up"})]}),Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsx)(U.a,{variant:"outlined",autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,label:"First Name",autoFocus:!0}),Object(h.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Last Name",name:"lastName",autoComplete:"lname"}),Object(h.jsx)(U.a,{className:"full",variant:"outlined",required:!0,fullWidth:!0,label:"Email Address",name:"email",autoComplete:"email"}),Object(h.jsx)(U.a,{className:"full",variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",autoComplete:"new-password"}),Object(h.jsx)(j.a,{className:"btn-signup full",type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Sign Up"})]})]})},pt=function(){var e=Object(l.c)(),t=Object(p.f)(),n=function(){var n=Object(w.a)(g.a.mark((function n(r){var a,o,s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),a=new FormData(r.currentTarget),o=a.get("email"),s=a.get("password"),e(v("Logging in...")),n.prev=5,n.next=8,e(A(o,s));case 8:e(v("Logged in")),t.push("/toy"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),e(v(n.t0.response.data.err,!0));case 15:case"end":return n.stop()}}),n,null,[[5,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)("main",{className:"login container",children:[Object(h.jsxs)("section",{className:"heading flex column align-center justify-center",children:[Object(h.jsx)(Ve.a,{style:{backgroundColor:"#3f51b5"},children:Object(h.jsx)(lt.a,{})}),Object(h.jsx)(fe.a,{component:"h1",variant:"h5",children:"Log In"})]}),Object(h.jsxs)("form",{onSubmit:n,className:"flex column",children:[Object(h.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),Object(h.jsx)(U.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"}),Object(h.jsx)(j.a,{className:"btn-signup full",type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:"Log In"})]})]})},jt=n(202),ht=n(89),bt=ht.b({name:ht.c("Enter Name").required("Name is required").min(2,"Name must be 2 letters or longer"),description:ht.c("Enter Description").required("Description is required").min(10,"Description must be 10 letters or longer"),price:ht.a("Enter Price").required("Price is required")}),ft=te.getAllLabels().map((function(e){return{label:e,value:e}})),mt=function(e){var t=e.name,n=e.formik;return Object(h.jsx)(U.a,Object(Ne.a)(Object(Ne.a)({},e),{},{fullWidth:!0,variant:"outlined",value:n.values[t],error:n.touched[t]&&Boolean(n.errors[t]),helperText:n.touched[t]&&n.errors[t],onChange:n.handleChange}))},Ot=function(e){var t=e.isEdit,n=e.initialValues,r=e.onSubmit,a=Object(jt.a)({initialValues:n,onSubmit:r,validationSchema:bt});return Object(h.jsxs)("form",{className:"toy-add container",onSubmit:a.handleSubmit,children:[Object(h.jsx)(fe.a,{variant:"h3",gutterBottom:!0,style:{fontWeight:"500"},children:t?"Edit Toy":"Add Toy"}),Object(h.jsx)(mt,{label:"Toy Name",name:"name",formik:a}),Object(h.jsx)(mt,{label:"Toy Description",name:"description",multiline:!0,formik:a}),Object(h.jsx)(mt,{label:"Price",name:"price",type:"number",formik:a}),Object(h.jsxs)(mt,{label:"Availability",name:"inStock",select:!0,formik:a,children:[Object(h.jsx)(I.a,{value:!0,children:"In stock"}),Object(h.jsx)(I.a,{value:!1,children:"Out of stock"})]}),Object(h.jsx)("div",{className:"labels",children:Object(h.jsx)(Y.a,{placeholder:"Labels",options:ft,isMulti:!0,onChange:function(e){var t=e.map((function(e){return e.value}));a.setFieldValue("labels",t)},defaultValue:n.labels.map((function(e){return{label:e,value:e}}))})}),Object(h.jsx)(j.a,{type:"submit",children:t?"Save Changes":"Submit New Toy"})]})},xt={name:"The cool doll",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate facere iusto sapiente ad, est animi quidem ex numquam? Quis quibusdam ratione qui provident sequi quasi voluptate, velit commodi illo minima?",price:150,inStock:!0,labels:[]},vt=function(e){var t=Object(l.c)(),n=function(){var n=Object(w.a)(g.a.mark((function n(r){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(v("Adding..")),n.next=4,t(Le(r));case 4:t(v("Toy Added")),e.history.push("/toy"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),t(v("Could not add toy",!0)),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsx)(Ot,{isEdit:!1,initialValues:xt,onSubmit:n})},yt=function(e){var t=Object(l.c)(),n=Object(l.d)((function(e){return e.toyModule.currToy}));Object(r.useEffect)((function(){var n=e.match.params.id;t(Ae(n))}),[t,e.match.params]);var a=function(){var n=Object(w.a)(g.a.mark((function n(r){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(v("Updating..")),n.next=4,t(Be(r));case 4:t(v("Toy details updated")),e.history.push("/toy/".concat(r._id)),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),t(v("Could not update toy. "+n.t0.response.data.err,!0)),console.error(n.t0),console.dir(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return n?Object(h.jsx)(Ot,{isEdit:!0,initialValues:n,onSubmit:a}):Object(h.jsx)(le.a,{})},gt=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onLogout=function(){e.props.logout(),e.props.showUserMsg("Logged out"),window.location.href="/toy"},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.loadUserFromStorage()}},{key:"render",value:function(){var e=this.props,t=e.userMsg,n=e.hideUserMsg;return Object(h.jsx)("main",{className:"main-container",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(f,{onLogout:this.onLogout}),Object(h.jsx)(x,{userMsg:t,hideUserMsg:n}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/toy/about",component:it}),Object(h.jsx)(p.a,{path:"/toy/dashboard",component:ot}),Object(h.jsx)(p.a,{path:"/toy/add",component:vt}),Object(h.jsx)(p.a,{path:"/toy/:id/edit",component:yt}),Object(h.jsx)(p.a,{path:"/toy/:id",component:et}),Object(h.jsx)(p.a,{path:"/toy",component:We}),Object(h.jsx)(p.a,{path:"/signup",component:dt}),Object(h.jsx)(p.a,{path:"/login",component:pt})]})]})})}}]),n}(r.Component),wt={hideUserMsg:function(){return function(e){e({type:"HIDE_USER_MSG"})}},loadUserFromStorage:function(){return function(e){var t=C.loadFromStorage();t&&e({type:"SET_USER",user:t})}},logout:function(){return function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.logout();case 2:t({type:"SET_USER",user:null});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},showUserMsg:v},Tt=Object(l.b)((function(e){var t=e.userModule.user;return{userMsg:e.generalModule.userMsg,user:t}}),wt)(gt),St=n(90),kt=n(201),Et={userMsg:{isOpen:!1,isError:!1,msg:""}};var Ct={user:null};var Nt=Object(St.b)({toyModule:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,n=arguments.length>1?arguments[1]:void 0,r=Fe.a.cloneDeep(t);switch(n.type){case"SET_TOY":return Object(Ne.a)(Object(Ne.a)({},t),{},{currToy:n.toy});case"SET_TOYS":r.toys=n.toys;break;case"REMOVE_TOY":-1!==(e=r.toys.findIndex((function(e){return e._id===n.id})))&&r.toys.splice(e,1);break;case"UPDATE_TOY":-1!==(e=r.toys.findIndex((function(e){return e._id===n.toy._id})))&&(r.toys[e]=n.toy);break;case"SET_FILTER":var a=Object(Ne.a)(Object(Ne.a)({},t.filter),n.filter);return""===a.name&&delete a.name,"all"===a.inStock&&delete a.inStock,Fe.a.isEmpty(a.labels)&&delete a.labels,Object(Ne.a)(Object(Ne.a)({},t),{},{filter:a});case"SORT_FIELD":var o=1===Object.values(t.sort)[0]?-1:1;return Object(Ne.a)(Object(Ne.a)({},t),{},{sort:Object(R.a)({},n.field,o)})}return r},userModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0,n=Fe.a.cloneDeep(e);switch(t.type){case"SET_USER":return Object(Ne.a)(Object(Ne.a)({},e),{},{user:t.user});case"UPDATE_USER":n.user=t.user}return n},generalModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0,n=Fe.a.cloneDeep(e);switch(t.type){case"SHOW_USER_MSG":n.userMsg.isOpen=!0,n.userMsg.msg=t.msg||e.userMsg,n.userMsg.isError=t.isError;break;case"HIDE_USER_MSG":n.userMsg.isOpen=!1}return n}}),Mt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||St.c,Ft=Object(St.d)(Nt,Mt(Object(St.a)(kt.a)));o.a.render(Object(h.jsx)(l.a,{store:Ft,children:Object(h.jsx)(Tt,{})}),document.getElementById("root"))}},[[373,1,2]]]);
//# sourceMappingURL=main.1ea607ee.chunk.js.map
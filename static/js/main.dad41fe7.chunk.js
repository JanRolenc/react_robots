/*! For license information please see main.dad41fe7.chunk.js.LICENSE.txt */
(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),s=n.n(c),i=(n(12),n(13),n(4)),o=n(5),a=n(7),h=n(6),l=(n(14),n(0)),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),Object(l.jsx)("h3",{style:{margin:"20px 0px 2px 0px"},children:t}),Object(l.jsx)("p",{style:{fontSize:"90%"},children:n})]})},u=(n(16),function(e){var t=e.robots,n=t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}));return Object(l.jsx)("div",{className:"cardList",children:n})}),j=function(e){var t=e.searchChange;return Object(l.jsx)("input",{onChange:t,placeholder:"search robots",type:"search",style:{padding:"5px",margin:"20px",fontSize:"15px",width:"200px"}})},b=function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"2px solid black",height:"800px"},children:e.children})},f=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(l.jsxs)("div",{style:{flexDirection:"column"},children:[Object(l.jsx)("h1",{children:"RoboFriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange})]}),Object(l.jsx)(b,{children:Object(l.jsx)(u,{robots:t})})]})}}]),n}(r.Component);n(17);s.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.dad41fe7.chunk.js.map
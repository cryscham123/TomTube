(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{40:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),i=s(33),r=s.n(i),o=s(9),l=s(10),d=s(12),u=s(11),m=(s(40),s(13)),j=s(2),p=s(8),h=s.n(p),b=s(15),v=s(16),O=s.n(v),f=function(e){var t=e.id,s=e.title,n=e.uploader,c=e.thumbnailM,i=e.des;return Object(a.jsxs)(m.b,{className:"movie",to:{pathname:"/details/".concat(t),state:{title:s,uploader:n,des:i,id:t,fromNavigation:!0}},children:[Object(a.jsx)("img",{className:"movie__thumb",src:c.url,alt:s}),Object(a.jsxs)("div",{className:"movie__info",children:[Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("span",{className:"movie__title",children:s}),Object(a.jsx)("p",{className:"movie__uploader",children:n})]}),Object(a.jsxs)("p",{className:"movie__des",children:[i.slice(0,100),"..."]})]})]})},x=function(e){var t=e.items;return Object(a.jsx)("div",{className:"movies",children:t.map((function(e){return Object(a.jsx)(f,{id:e.id,title:e.snippet.title,uploader:e.snippet.channelTitle,des:e.snippet.description,thumbnailM:e.snippet.thumbnails.medium},e.id)}))})},y=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,items:[]},e.getMovies=Object(b.a)(h.a.mark((function t(){var s,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA27KL5mOLc2XfoX9JpmjuInlR9jXfhKmg");case 2:s=t.sent,a=s.data.items,e.setState({items:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.items;return console.log(s),Object(a.jsxs)("div",{className:"homeGrid",children:[Object(a.jsx)("span",{className:"homeTitle",children:"Most Viewed"}),t?"Loading...":Object(a.jsx)(x,{items:s})]})}}]),s}(n.Component),g=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,items:[]},e.getMovies=Object(b.a)(h.a.mark((function t(){var s,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA27KL5mOLc2XfoX9JpmjuInlR9jXfhKmg");case 2:s=t.sent,a=s.data.items,e.setState({items:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/"),this.getMovies()}},{key:"handleDes",value:function(){var e=document.querySelector(".fa-chevron-down"),t=document.querySelector(".fa-chevron-up"),s=document.querySelector(".detail__desCon");e?(e.classList.add("fa-chevron-up"),e.classList.remove("fa-chevron-down"),s.style.display="contents"):t&&(t.classList.add("fa-chevron-down"),t.classList.remove("fa-chevron-up"),s.style.display="none")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.items,n=this.props.location;return n.state?Object(a.jsxs)("div",{className:"totalGrid",children:[Object(a.jsxs)("div",{className:"detailGrid",children:[Object(a.jsx)("div",{class:"video-container",children:Object(a.jsx)("iframe",{id:"ytplayer",type:"text/html",width:"100%",height:"auto",src:"https://www.youtube.com/embed/".concat(n.state.id),frameBorder:"0",allowFullscreen:!0})}),Object(a.jsxs)("div",{className:"detail__info",children:[Object(a.jsx)("span",{className:"detail__title",children:n.state.title}),Object(a.jsxs)("p",{className:"detail__uploader",children:[n.state.uploader,Object(a.jsx)("button",{className:"desControl",onClick:this.handleDes,children:Object(a.jsx)("i",{className:"fas fa-chevron-down"})})]}),Object(a.jsx)("div",{className:"detail__desCon",children:Object(a.jsx)("p",{className:"desCon__des",children:n.state.des})})]})]}),Object(a.jsxs)("div",{className:"otherGrid",children:[Object(a.jsx)("span",{className:"otherTitle",children:"Other videos..."}),t?"Loading...":Object(a.jsx)(x,{items:s})]})]}):null}}]),s}(n.Component),N=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,items:[]},e.getMovies=Object(b.a)(h.a.mark((function t(){var s,a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.props.location.pathname,t.next=3,O.a.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(s.slice(8),"&key=AIzaSyA27KL5mOLc2XfoX9JpmjuInlR9jXfhKmg"));case 3:a=t.sent,n=a.data.items,e.setState({items:n,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.items;return Object(a.jsxs)("div",{className:"homeGrid",children:[Object(a.jsx)("span",{className:"homeTitle",children:"Results"}),Object(a.jsx)("div",{className:"movies",children:t?"Loading...":s.map((function(e){return Object(a.jsx)(f,{id:e.id.videoId,title:e.snippet.title,uploader:e.snippet.channelTitle,des:e.snippet.description,thumbnailM:e.snippet.thumbnails.medium},e.id.videoId)}))})]})}}]),s}(n.Component),_=Object(j.e)((function(e){var t=c.a.createRef(),s=c.a.createRef();return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsxs)(m.b,{className:"nav__link title",to:"/",children:[Object(a.jsx)("i",{className:"fab fa-youtube"}),"Tomtube"]}),Object(a.jsxs)("form",{ref:t,className:"nav__form",onSubmit:function(a){a.preventDefault(),e.history.push("/search/".concat(s.current.value)),t.current.reset()},children:[Object(a.jsx)("input",{ref:s,className:"search",type:"text",placeholder:"search..."}),Object(a.jsx)("button",{className:"submit",type:"submit",children:Object(a.jsx)("i",{className:"fas fa-search"})})]})]})})),L=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(m.a,{children:[Object(a.jsx)(_,{}),Object(a.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(a.jsx)(j.a,{path:"/details/:id",component:g}),Object(a.jsx)(j.a,{path:"/search/:id",component:N})]}),Object(a.jsx)("footer",{})]})}}]),s}(n.Component);s(63);r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.c7f6b240.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Aaron\'s cooking blog"}}}}')},K392:function(e,t,a){"use strict";a.r(t),a.d(t,"blogListQuery",(function(){return c}));a("a1Th"),a("Btvt");var n=a("Wbzz"),r=a("gkIX"),l=a("soUV"),i=a("q1tI"),o=a.n(i);t.default=function(e){var t=e.data,a=e.pageContext,i=t.allMarkdownRemark.edges,c=a.currentPage,u=1===c,s=c===a.numPages,m=c-1==1?"/blog":"../"+(c-1).toString(),d=(u?"/blog/":"../")+(c+1).toString();return o.a.createElement(l.a,null,i.map((function(e){var t=e.node;return o.a.createElement(r.a,{date:t.frontmatter.date,excerpt:t.excerpt,key:t.id,slug:t.fields.slug,title:t.frontmatter.title})})),!u&&o.a.createElement(n.Link,{to:m,rel:"prev"},"← Previous Page"),!s&&o.a.createElement(n.Link,{to:d,rel:"next"},"Next Page →"))};var c="3033958440"},gkIX:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),l=a.n(r);t.a=function(e){var t=e.date,a=e.excerpt,r=e.slug,i=e.title,o=function(e){return e?l.a.createElement("p",null,e):null}(a);return l.a.createElement("div",null,l.a.createElement(n.Link,{to:r},l.a.createElement("h4",null,i+" - "+t)),o)}},lKc3:function(e,t,a){},rMi8:function(e,t,a){},soUV:function(e,t,a){"use strict";var n=a("IRj2"),r=(a("lKc3"),a("Wbzz")),l=a("q1tI"),i=a.n(l),o=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"Header"},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(r.Link,{to:"/"},t)))},c=(a("rMi8"),function(){return i.a.createElement("nav",{className:"NavBar"},i.a.createElement(r.Link,{to:"/blog"},"Blog"))});t.a=function(e){var t,a,r,l=e.children,u=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement(o,{siteTitle:null!==(t=null===(a=u.site)||void 0===a||null===(r=a.siteMetadata)||void 0===r?void 0:r.title)&&void 0!==t?t:""}),i.a.createElement("main",null,l),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-63009883b4afeb3c62b2.js.map
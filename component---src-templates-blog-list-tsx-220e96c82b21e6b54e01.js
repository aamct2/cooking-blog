(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{K392:function(e,t,n){"use strict";n.r(t),n.d(t,"blogListQuery",(function(){return i}));n("a1Th"),n("Btvt");var a=n("Wbzz"),r=n("gkIX"),l=n("soUV"),u=n("q1tI"),o=n.n(u),c=n("1Yd/");t.default=function(e){var t=e.data,n=e.pageContext,u=t.allMarkdownRemark.edges,i=n.currentPage,g=1===i,s=i===n.numPages,d=i-1==1?"/blog":"../"+(i-1).toString(),m=(g?"/blog/":"../")+(i+1).toString();return o.a.createElement(l.a,null,o.a.createElement(c.a,{title:"Blog"}),o.a.createElement("h1",null,"Blog"),u.map((function(e){var t=e.node;return o.a.createElement(r.a,{date:t.frontmatter.date,excerpt:t.excerpt,key:t.id,slug:t.fields.slug,title:t.frontmatter.title})})),!g&&o.a.createElement(a.Link,{to:d,rel:"prev"},"← Previous Page"),!s&&o.a.createElement(a.Link,{to:m,rel:"next"},"Next Page →"))};var i="3033958440"},gkIX:function(e,t,n){"use strict";var a=n("Wbzz"),r=n("q1tI"),l=n.n(r);t.a=function(e){var t=e.date,n=e.excerpt,r=e.slug,u=e.title,o=function(e){return e?l.a.createElement("p",null,e):null}(n);return l.a.createElement("div",null,l.a.createElement(a.Link,{to:r},l.a.createElement("h4",null,u+" - "+t)),o)}}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-220e96c82b21e6b54e01.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/9aa":function(t,n,e){var r=e("NykK"),o=e("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"0JQy":function(t,n,e){e("SRfc"),e("Oyvg");var r="[\\ud800-\\udfff]",o="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",u="\\ud83c[\\udffb-\\udfff]",f="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",c="[\\ud800-\\udbff][\\udc00-\\udfff]",i="(?:"+o+"|"+u+")"+"?",l="[\\ufe0e\\ufe0f]?"+i+("(?:\\u200d(?:"+[f,a,c].join("|")+")[\\ufe0e\\ufe0f]?"+i+")*"),s="(?:"+[f+o+"?",o,a,c,r].join("|")+")",d=RegExp(u+"(?="+u+")|"+s+l,"g");t.exports=function(t){return t.match(d)||[]}},"0ZTe":function(t,n,e){var r=e("wy8a"),o=e("quyA"),u=e("Em2t"),f=e("dt0z");t.exports=function(t){return function(n){n=f(n);var e=o(n)?u(n):void 0,a=e?e[0]:n.charAt(0),c=e?r(e,1).join(""):n.slice(1);return a[t]()+c}}},AP2z:function(t,n,e){e("a1Th"),e("h7Nl"),e("Btvt");var r=e("nmnc"),o=Object.prototype,u=o.hasOwnProperty,f=o.toString,a=r?r.toStringTag:void 0;t.exports=function(t){var n=u.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(c){}var o=f.call(t);return r&&(n?t[a]=e:delete t[a]),o}},Em2t:function(t,n,e){var r=e("bahg"),o=e("quyA"),u=e("0JQy");t.exports=function(t){return o(t)?u(t):r(t)}},ExA7:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},GXOs:function(t,n,e){"use strict";e.r(n),e.d(n,"pageQuery",(function(){return l}));e("iPrl");var r=e("Wbzz"),o=e("soUV"),u=e("q1tI"),f=e.n(u),a=e("1Yd/"),c=e("gQMU"),i=e.n(c);n.default=function(t){var n=t.pageContext,e=t.data,u=n.tag,c=e.allMarkdownRemark,l=c.edges,s=c.totalCount,d=s+" post"+(1===s?"":"s")+' tagged with "'+u+'"';return f.a.createElement(o.a,null,f.a.createElement(a.a,{title:i()(u),description:"List of blog posts tagged with '"+u+"'"}),f.a.createElement("h1",null,d),f.a.createElement("ol",null,l.map((function(t){var n=t.node,e=n.fields.slug,o=n.frontmatter.title,u=n.frontmatter.date;return f.a.createElement("li",{key:e},f.a.createElement(r.Link,{to:e},o," - ",u))}))),f.a.createElement(r.Link,{to:"/tags"},"All tags"))};var l="1182432617"},KfNM:function(t,n,e){e("a1Th"),e("h7Nl"),e("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},KxBF:function(t,n){t.exports=function(t,n,e){var r=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(e=e>o?o:e)<0&&(e+=o),o=n>e?0:e-n>>>0,n>>>=0;for(var u=Array(o);++r<o;)u[r]=t[r+n];return u}},Kz5y:function(t,n,e){var r=e("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();t.exports=u},NykK:function(t,n,e){var r=e("nmnc"),o=e("AP2z"),u=e("KfNM"),f=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?o(t):u(t)}},WFqU:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e("yLpj"))},Z0cm:function(t,n,e){e("LK8F");var r=Array.isArray;t.exports=r},bahg:function(t,n,e){e("KKXr"),t.exports=function(t){return t.split("")}},dt0z:function(t,n,e){var r=e("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,n){t.exports=function(t,n){for(var e=-1,r=null==t?0:t.length,o=Array(r);++e<r;)o[e]=n(t[e],e,t);return o}},gQMU:function(t,n,e){var r=e("0ZTe")("toUpperCase");t.exports=r},iPrl:function(t,n,e){},nmnc:function(t,n,e){var r=e("Kz5y").Symbol;t.exports=r},quyA:function(t,n,e){e("Oyvg");var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return r.test(t)}},wy8a:function(t,n,e){var r=e("KxBF");t.exports=function(t,n,e){var o=t.length;return e=void 0===e?o:e,!n&&e>=o?t:r(t,n,e)}},zoYe:function(t,n,e){e("a1Th"),e("h7Nl"),e("Btvt");var r=e("nmnc"),o=e("eUgh"),u=e("Z0cm"),f=e("/9aa"),a=r?r.prototype:void 0,c=a?a.toString:void 0;t.exports=function t(n){if("string"==typeof n)return n;if(u(n))return o(n,t)+"";if(f(n))return c?c.call(n):"";var e=n+"";return"0"==e&&1/n==-1/0?"-0":e}}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-6630fef49bab60c47cee.js.map
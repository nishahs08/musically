(this.webpackJsonpmusically=this.webpackJsonpmusically||[]).push([[0],{137:function(n,t,e){},204:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),c=e(28),u=e.n(c),i=(e(137),e(23)),s=e.n(i),o=e(35),l=e(10),p=e(247),f=e(245),d=e(46),b=e(243),h=e(244),j=e(2),v=function(n){var t=n.searchString,e=n.onSearchStringChanged,c=n.matchedArtists,u=n.onArtistSelected,i=Object(r.useState)(!1),s=Object(l.a)(i,2),o=s[0],p=s[1];return Object(j.jsx)(b.a,{fullWidth:!0,id:"search",open:o,onOpen:function(){p(!0)},onClose:function(){p(!1)},onChange:function(n,t){u((null===t||void 0===t?void 0:t.mbid)||null)},isOptionEqualToValue:function(n,t){return n.mbid===t.mbid},getOptionLabel:function(n){return n.name},options:c,renderInput:function(n){return Object(j.jsx)(h.a,Object(d.a)(Object(d.a)({},n),{},{label:"Search for artists",value:t,onChange:function(n){return e(n.target.value)},InputProps:Object(d.a)(Object(d.a)({},n.InputProps),{},{endAdornment:Object(j.jsx)(a.a.Fragment,{children:n.InputProps.endAdornment})})}))}})},m=e(116),O=e(115),g=e.n(O);function x(n){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(s.a.mark((function n(t){var e,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.post("https://graphbrainz.herokuapp.com",{query:t});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(s.a.mark((function n(t){var e,r,a,c,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x('{\n            search {\n                artists(query: "'.concat(t,'", first: 1) {\n                    nodes {\n                        name\n                        mbid\n                        fanArt {\n                            thumbnails {\n                                url\n                            }\n                        }\n                    }\n                }\n            }\n        }'));case 3:return a=n.sent,c=a.data,u=(null===(e=c.search)||void 0===e||null===(r=e.artists)||void 0===r?void 0:r.nodes)||[],n.abrupt("return",u);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",[]);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function I(n){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(s.a.mark((function n(t){var e,r,a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x('{\n            browse {\n                releaseGroups(artist: "'.concat(t,'") {\n                    nodes {\n                        mbid\n                        title\n                        fanArt {\n                            albumCovers {\n                                url\n                            }\n                        }\n                        theAudioDB {\n                            frontImage\n                            backImage\n                            spineImage\n                            discImage\n                        }\n                    }\n                }\n            }\n        }'));case 3:return r=n.sent,a=r.data,c=(null===(e=a.browse)||void 0===e?void 0:e.releaseGroups.nodes)||[],n.abrupt("return",c);case 9:return n.prev=9,n.t0=n.catch(0),n.abrupt("return",[]);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}var C=function(){var n=Object(r.useState)(""),t=Object(l.a)(n,2),e=t[0],a=t[1],c=function(n,t){var e=Object(r.useState)(n),a=Object(l.a)(e,2),c=a[0],u=a[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){return u(n)}),t);return function(){clearTimeout(e)}}),[n,t]),c}(e,500),u=Object(r.useState)([]),i=Object(l.a)(u,2),d=i[0],b=i[1];Object(r.useEffect)((function(){function n(){return(n=Object(o.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=b,n.next=3,y(e);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}""!==c?function(){n.apply(this,arguments)}():b([])}),[c]);var h=Object(r.useState)(null),O=Object(l.a)(h,2),g=O[0],x=O[1],S=Object(r.useState)([]),w=Object(l.a)(S,2),A=w[0],C=w[1];Object(r.useEffect)((function(){function n(){return(n=Object(o.a)(s.a.mark((function n(t){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=C,n.next=3,I(t);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}g?function(t){n.apply(this,arguments)}(g):C([])}),[g]);var k=A.map((function(n){return function(n){return function(n){var t=n.theAudioDB;return(null===t||void 0===t?void 0:t.backImage)||(null===t||void 0===t?void 0:t.frontImage)}(n)||function(n){var t,e=n.fanArt;return null===(t=((null===e||void 0===e?void 0:e.albumCovers)||[]).find((function(n){return n.url})))||void 0===t?void 0:t.url}(n)||"picture"}(n)}));return console.log(k),Object(j.jsx)(p.a,{maxWidth:"lg",children:Object(j.jsxs)(f.a,{container:!0,justifyContent:"center",sx:{marginTop:"100px"},children:[Object(j.jsx)(f.a,{sm:12,children:Object(j.jsx)(v,{matchedArtists:d,searchString:e,onSearchStringChanged:a,onArtistSelected:function(n){return x(n)}})}),Object(j.jsx)(f.a,{sm:12,children:Object(j.jsx)(m.a,{images:k})})]})})},k=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,248)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;e(n),r(n),a(n),c(n),u(n)}))};u.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),k()}},[[204,1,2]]]);
//# sourceMappingURL=main.bf61f61e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DWd4:function(e,t,a){"use strict";var n=a("MUpH"),r=a("q1tI"),o=a.n(r),i=a("Wbzz"),c=a("vOnD"),l=a("yyBi"),d=a("Ncnu"),u=a("nndF"),m=a("9eSz"),s=a.n(m),g=Object(c.c)((function(e){var t=e.className,a=e.img,n=(e.width,Object(i.c)("3856503164"));return o.a.createElement(s.a,{fluid:a||n.defaultImg.childImageSharp.fluid,className:t})})).withConfig({displayName:"DisplayImage",componentId:"mo9wkh-0"})(["width:",";min-height:100%;"],(function(e){return e.width}));function f(){var e=Object(n.a)([""]);return f=function(){return e},e}function p(){var e=Object(n.a)(["\n  width: 100vw;\n  max-width: ",";\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-column-gap: ",";\n  .img {\n    align-self: center;\n    width: ",";\n  }\n  .info {\n\n  }\n  a {\n    text-decoration: none;\n  }\n  ]\n  "]);return p=function(){return e},e}function h(){var e=Object(n.a)(["margin-bottom: ",";"]);return h=function(){return e},e}function y(){var e=Object(n.a)(["\n       padding: ",";"]);return y=function(){return e},e}var b=c.c.div.withConfig({displayName:"PostRow__Center",componentId:"dl0rf-0"})(["h3{color:",";}.img,.info{padding:",";","}.img{display:block;","}.featured{margin-bottom:",";","}.normal{margin-bottom:",";font-size:",";}.info{p{line-height:20px;font-size:",";color:",";}}width:90vw;margin:0 auto;",""],u.c.mainBlack,Object(u.g)(15),u.a.laptop(y(),Object(u.g)(30)),Object(u.b)({width:Object(u.g)(0),color:u.c.primaryColor}),Object(u.g)(30),u.a.laptop(h(),Object(u.g)(76)),Object(u.g)(20),Object(u.g)(24),Object(u.g)(16),u.c.mainBlack,u.a.laptop(p(),Object(u.g)(1170),Object(u.g)(32),(function(e){return e.imageWidth}))),v=c.c.div.withConfig({displayName:"PostRow__Category",componentId:"dl0rf-1"})(["color:",";font-size:",";font-weight:700;margin-top:",";",""],u.c.mainGrey,Object(u.g)(16),Object(u.g)(44),u.a.laptop(f())),w=c.c.div.withConfig({displayName:"PostRow__Date",componentId:"dl0rf-2"})(["font-size:",";color:",";"],Object(u.g)(14),u.c.mainGrey);t.a=function(e){var t=e.text,a=e.heading,n=e.image,r=e.slug,c=e.featured,u=e.category,m=e.date;return o.a.createElement(l.a,null,o.a.createElement(i.a,{to:"/"+r},o.a.createElement(b,{imageWidth:c?"50vw":"25vw"},o.a.createElement(g,{className:"img",img:n}),o.a.createElement("div",{className:"info"},o.a.createElement(d.a,{title:a,className:c?"featured":"normal"}),o.a.createElement("p",null,t),o.a.createElement(v,null,c?""+u:null),o.a.createElement(w,null,m)))))}},L24t:function(e,t,a){"use strict";var n=a("MUpH"),r=a("q1tI"),o=a.n(r),i=a("vOnD"),c=a("Wbzz"),l=a("ma3e"),d=a("mp+t"),u=a.n(d),m=a("nndF");function s(){var e=Object(n.a)(["\n\tflex-direction:row;\n\theight: auto;\n\tmargin: 0 0 0 0;\n\t"]);return s=function(){return e},e}function g(){var e=Object(n.a)(["display:none;"]);return g=function(){return e},e}var f=function(e){var t=e.data,a=Object(r.useState)(!1),n=a[0],i=a[1],d="undefined"!=typeof window?window.location.href:"/";return o.a.createElement("div",null,o.a.createElement(p,null,o.a.createElement(h,{type:"button",onClick:function(){i((function(e){return!e}))}},"Categories ",o.a.createElement(l.a,null))),o.a.createElement(y,{className:n?""+u.a.show:""+u.a.hide},t.categories.nodes.map((function(e){var t=d.includes("/ko")?e.koCategory:d.includes("/zh-hans")?e.zhchCategory:d.includes("/zh-hant")?e.zhtwCategory:e.category,a="categories/"+e.slug;return o.a.createElement(b,{key:a},o.a.createElement(c.a,{to:""+a},t))}))))},p=i.c.div.withConfig({displayName:"Categories__FlexBox",componentId:"sc-1lyy9wq-0"})(["",""],m.d),h=i.c.button.withConfig({displayName:"Categories__MobileMenu",componentId:"sc-1lyy9wq-1"})(["color:",";background-color:transparent;margin-top:1rem;border:none;outline:none;font-size:",";order:99;cursor:pointer;",";"],m.c.mainBlack,Object(m.g)(14),m.a.tablet(g())),y=i.c.ul.withConfig({displayName:"Categories__StyledMenu",componentId:"sc-1lyy9wq-2"})(["display:flex;list-style:none;margin:3rem 0 0 0;align-items:center;padding:0;justify-content:flex-start;flex:4;font-weight:500;flex-direction:column;height:0;overflow:hidden;transition:all 0.3s linear;a{text-decoration:none;color:",";}a:hover{text-decoration:none;color:",";}",";"],m.c.mainBlack,m.c.secondaryColor,m.a.tablet(s())),b=i.c.li.withConfig({displayName:"Categories__MenuItem",componentId:"sc-1lyy9wq-3"})(["padding:1rem 2rem;"]);t.a=function(e){var t=Object(c.c)("4184689195");return o.a.createElement(f,Object.assign({},e,{data:t}))}},Ncnu:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("vOnD"),i=a("nndF");t.a=Object(o.c)((function(e){var t=e.className,a=e.title;e.align;return r.a.createElement("h3",{className:t},a)})).withConfig({displayName:"Title",componentId:"sc-1mqz4og-0"})(["font-size:",";text-transform:capitalize;",";",";text-align:",";"],Object(i.g)(32),Object(i.f)(3),i.e.main,(function(e){return e.align||"left"}))},"b/9x":function(e,t,a){"use strict";var n=a("MUpH"),r=a("q1tI"),o=a.n(r),i=a("vOnD"),c=a("ma3e"),l=a("Wbzz"),d=a("yyBi"),u=a("Ncnu"),m=a("nndF");function s(){var e=Object(n.a)(["flex-direction: row;"]);return s=function(){return e},e}var g=i.c.div.withConfig({displayName:"Category__Cat",componentId:"ib2ebd-0"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin-top:",";",""],Object(m.g)(30),m.a.laptop(s())),f=i.c.div.withConfig({displayName:"Category__More",componentId:"ib2ebd-1"})([".button{display:flex;flex-direction:row;color:",";}.button:hover{color:",";","}.icon{padding-left:",";}"],m.c.mainBlack,m.c.secondaryColor,m.h,Object(m.g)(10));t.a=function(e){var t=e.children,a=e.category,n=e.url;return o.a.createElement(d.a,null,o.a.createElement(g,null,o.a.createElement(u.a,{title:a}),o.a.createElement(f,null,o.a.createElement(l.a,{to:n,className:"button"},o.a.createElement("p",null,"See more in ",a),o.a.createElement(c.d,{className:"icon"})))),t)}},g3Xo:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("7oih"),i=a("MUpH"),c=a("vOnD"),l=a("Wbzz"),d=a("nndF"),u=a("bUY0"),m=a("L24t"),s=a("DWd4"),g=a("b/9x");function f(){var e=Object(i.a)(["\n    border-top: 3px solid ","; \n    width: 5vw;\n    margin-top: ",";"]);return f=function(){return e},e}function p(){var e=Object(i.a)(["  display: grid;\n  grid-template-columns: 10vw 80vw 10vw;\n  column-gap: ",";"]);return p=function(){return e},e}var h=c.c.div.withConfig({displayName:"KoPosts__Grid",componentId:"sc-1qdui4r-0"})(["",";"],d.a.tablet(p(),Object(d.g)(5))),y=c.c.div.withConfig({displayName:"KoPosts__FeaturedRow",componentId:"sc-1qdui4r-1"})(["padding:0 2vw;display:flex;flex-direction:column;justify-content:center;align-items:center;h1{text-align:center;margin:20px 0;"," font-size:",";color:",";}"],d.e,Object(d.g)(38),d.c.mainBlack),b=c.c.div.withConfig({displayName:"KoPosts__Title",componentId:"sc-1qdui4r-2"})(["border-top:3px solid ",";margin-top:",";",";"],d.c.mainBlack,Object(d.g)(40),d.a.tablet(f(),d.c.mainBlack,Object(d.g)(80))),v=function(){var e=Object(l.c)("4258603845"),t=e.newsUpdate.nodes,a=e.featured.nodes,n=e.events.nodes,o=e.furtherReading.nodes,i=e.technology.nodes,c=e.pressRelease.nodes,f=e.file.childImageSharp,p=e.useCase.nodes;return r.a.createElement(h,null,r.a.createElement("div",null),r.a.createElement(y,null,r.a.createElement(b,null,r.a.createElement("h1",null,"Blog")),r.a.createElement(m.a,null),a.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.a,{heading:e.title,text:e.post.metaDescription,slug:"ko/"+e.enPost.post.slug,image:null===e.featuredImage||void 0===e.featuredImage?f.fluid:e.featuredImage.childImageSharp.fluid,category:e.category.koCategory,date:e.date,featured:!0}),r.a.createElement(u.a,{color:d.c.lightGrey}))})),r.a.createElement(g.a,{category:"News Update",url:"/categories/news-update"},t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.a,{heading:e.title,text:e.post.metaDescription,slug:"ko/"+e.enPost.post.slug,date:e.date,image:null!==e.featuredImage?e.featuredImage.childImageSharp.fluid:f.fluid}),r.a.createElement(u.a,{color:d.c.lightGrey}))}))),r.a.createElement(g.a,{category:"Events",url:"/categories/events"},n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.a,{heading:e.title,text:e.post.metaDescription,slug:"ko/"+e.enPost.post.slug,date:e.date,image:null!==e.featuredImage?e.featuredImage.childImageSharp.fluid:f.fluid}),r.a.createElement(u.a,{color:d.c.lightGrey}))}))),r.a.createElement(g.a,{category:"Further Reading",url:"/categories/further-reading"},o.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.a,{heading:e.title,text:e.post.metaDescription,slug:"ko/"+e.enPost.post.slug,date:e.date,image:null!==e.featuredImage?e.featuredImage.childImageSharp.fluid:f.fluid}),r.a.createElement(u.a,{color:d.c.lightGrey}))}))),r.a.createElement(g.a,{category:"Press Releases",url:"/categories/press-release"},c.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.a,{heading:e.title,text:e.post.metaDescription,slug:"ko/"+e.enPost.post.slug,date:e.date,image:null!==e.featuredImage?e.featuredImage.childImageSharp.fluid:f.fluid}),r.a.createElement(u.a,{color:d.c.lightGrey}))}))),r.a.createElement(g.a,{category:"Technology",url:"/categories/technology"},i.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.a,{heading:e.title,text:e.post.metaDescription,slug:"ko/"+e.enPost.post.slug,date:e.date,image:null!==e.featuredImage?e.featuredImage.childImageSharp.fluid:f.fluid}),r.a.createElement(u.a,{color:d.c.lightGrey}))}))),r.a.createElement(g.a,{category:"Use Cases",url:"/categories/use-case"},p.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(s.a,{heading:e.title,text:e.post.metaDescription,slug:"ko/"+e.enPost.post.slug,date:e.date,image:null!==e.featuredImage?e.featuredImage.childImageSharp.fluid:f.fluid}),r.a.createElement(u.a,{color:d.c.lightGrey}))})))),r.a.createElement("div",null))},w=a("AP93");t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(w.a,{title:"Home",language:"en",description:"Our blog provides the latest information about the MXC Foundation, the MXC token, and relevant industry news regarding blockchain and the internet of things (IoT).",enPost:"https://blog.mxc.org",koPost:"https://blog.mxc.org/ko",hansPost:"https://blog.mxc.org/zh-hans",hantPost:"https://blog.mxc.org/zh-hant"}),r.a.createElement(v,null))}},"mp+t":function(e,t,a){e.exports={show:"Categories-module--show--3O9Tu",hide:"Categories-module--hide--2KBxy"}},yyBi:function(e,t,a){"use strict";var n=a("vOnD"),r=a("nndF"),o=n.c.section.withConfig({displayName:"Section",componentId:"b40q6g-0"})(["padding:"," 0;background:",";a{text-decoration:none;}"],Object(r.g)(28),(function(e){return e.color}));t.a=o}}]);
//# sourceMappingURL=component---src-pages-ko-js-88509773c4af181dd87a.js.map
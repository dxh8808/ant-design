webpackJsonp([142,359],{753:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(111),s(110)),e=t(p),c=s(1),o=t(c),l=s(2);t(l);n.exports={content:[["p","\u4f7f\u7528 ",["code","marks"]," \u5c5e\u6027\u6807\u6ce8\u5206\u6bb5\u5f0f\u6ed1\u5757\uff0c\u4f7f\u7528 ",["code","value"]," / ",["code","defaultValue"]," \u6307\u5b9a\u6ed1\u5757\u4f4d\u7f6e\u3002\u5f53 ",["code","included=false"]," \u65f6\uff0c\u8868\u660e\u4e0d\u540c\u6807\u8bb0\u95f4\u4e3a\u5e76\u5217\u5173\u7cfb\u3002\u5f53 ",["code","step=null"]," \u65f6\uff0cSlider \u7684\u53ef\u9009\u503c\u4ec5\u6709 ",["code","marks"]," \u6807\u51fa\u6765\u7684\u90e8\u5206\u3002"]],meta:{order:3,title:"\u5206\u6bb5\u5f0f\u6ed1\u5757",filename:"components/slider/demo/mark.md",id:"components-slider-demo-mark"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Slider <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> marks <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  <span class="token number" >0</span><span class="token punctuation" >:</span> <span class="token string" >\'0\xb0C\'</span><span class="token punctuation" >,</span>\n  <span class="token number" >26</span><span class="token punctuation" >:</span> <span class="token string" >\'26\xb0C\'</span><span class="token punctuation" >,</span>\n  <span class="token number" >37</span><span class="token punctuation" >:</span> <span class="token string" >\'37\xb0C\'</span><span class="token punctuation" >,</span>\n  <span class="token number" >100</span><span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    style<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n      color<span class="token punctuation" >:</span> <span class="token string" >\'red\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>strong</span><span class="token punctuation" >></span></span><span class="token number" >100</span>\xb0C<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>strong</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5305\u542b\u5173\u7cfb<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >marks</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>marks<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >37</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >range</span> <span class="token attr-name" >marks</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>marks<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token number" >26</span><span class="token punctuation" >,</span> <span class="token number" >37</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5e76\u5217\u5173\u7cfb<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >marks</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>marks<span class="token punctuation" >}</span></span> <span class="token attr-name" >included</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >37</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u7ed3\u5408 step<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >marks</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>marks<span class="token punctuation" >}</span></span> <span class="token attr-name" >step</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >37</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span><span class="token template-string" ><span class="token string" >`step=null`</span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Slider</span> <span class="token attr-name" >marks</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>marks<span class="token punctuation" >}</span></span> <span class="token attr-name" >step</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >null</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >37</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={0:"0\xb0C",26:"26\xb0C",37:"37\xb0C",100:{style:{color:"red"},label:o["default"].createElement("strong",null,"100\xb0C")}};return o["default"].createElement("div",null,o["default"].createElement("p",null,"\u5305\u542b\u5173\u7cfb"),o["default"].createElement(e["default"],{marks:n,defaultValue:37}),o["default"].createElement(e["default"],{range:!0,marks:n,defaultValue:[26,37]}),o["default"].createElement("p",null,"\u5e76\u5217\u5173\u7cfb"),o["default"].createElement(e["default"],{marks:n,included:!1,defaultValue:37}),o["default"].createElement("p",null,"\u7ed3\u5408 step"),o["default"].createElement(e["default"],{marks:n,step:10,defaultValue:37}),o["default"].createElement("p",null,"`step=null`"),o["default"].createElement(e["default"],{marks:n,step:null,defaultValue:37}))}}}});
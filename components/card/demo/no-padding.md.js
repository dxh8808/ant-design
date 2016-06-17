webpackJsonp([314,359],{577:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(126),s(125)),o=t(p),c=s(1),e=t(c),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u8c03\u6574\u9ed8\u8ba4\u8fb9\u8ddd\uff0c\u8bbe\u5b9a\u5bbd\u5ea6\u3002"]],"en-US":[["p","Customizing default width and margin."]]},meta:{order:3,title:{"zh-CN":"\u66f4\u7075\u6d3b\u7684\u5185\u5bb9\u5c55\u793a","en-US":"Customized content"},filename:"components/card/demo/no-padding.md",id:"components-card-demo-no-padding"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Card <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >240</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >bodyStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>custom-image<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >alt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span> <span class="token attr-name" >width</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>100%<span class="token punctuation" >"</span></span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>custom-card<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Europe Street beat<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>www<span class="token punctuation" >.</span>instagram<span class="token punctuation" >.</span>com<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Card</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return e["default"].createElement(o["default"],{style:{width:240},bodyStyle:{padding:0}},e["default"].createElement("div",{className:"custom-image"},e["default"].createElement("img",{alt:"example",width:"100%",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})),e["default"].createElement("div",{className:"custom-card"},e["default"].createElement("h3",null,"Europe Street beat"),e["default"].createElement("p",null,"www.instagram.com")))},style:".custom-image img {\n  display: block;\n}\n.custom-card {\n  padding: 10px 16px;\n}\n.custom-card p {\n  color: #999;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.custom-image</span> img </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> block<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.custom-card</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >10</span>px <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.custom-card</span> p </span><span class="token punctuation" >{</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#999</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});
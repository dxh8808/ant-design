webpackJsonp([133,359],{762:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(113),a(112)),o=t(p),c=a(1),e=t(c),u=a(2);t(u);n.exports={content:[["p","\u4f7f\u7528 Steps \u7684 ",["code","status"]," \u5c5e\u6027\u6765\u6307\u5b9a\u5f53\u524d\u6b65\u9aa4\u7684\u72b6\u6001\u3002"]],meta:{order:6,title:"\u6b65\u9aa4\u8fd0\u884c\u9519\u8bef",filename:"components/steps/demo/error.md",id:"components-steps-demo-error"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Steps <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Step <span class="token operator" >=</span> Steps<span class="token punctuation" >.</span>Step<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> steps <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5df2\u5b8c\u6210\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u591a\u4fe1\u606f\u7684\u63cf\u8ff0\u554a\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u9519\u8bef\u793a\u4f8b\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u591a\u4fe1\u606f\u7684\u8036\u54e6\u8036\u54e6\u54e6\u8036\u54e6\u8036\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u53c8\u4e00\u4e2a\u5f85\u8fd0\u884c\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u63cf\u8ff0\u554a\u63cf\u8ff0\u554a\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5f85\u8fd0\u884c\'</span><span class="token punctuation" >,</span>\n  description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u91cc\u662f\u591a\u4fe1\u606f\u7684\u63cf\u8ff0\u554a\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>s<span class="token punctuation" >,</span> i<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Step</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>i<span class="token punctuation" >}</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>title<span class="token punctuation" >}</span></span> <span class="token attr-name" >description</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>s<span class="token punctuation" >.</span>description<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Steps</span> <span class="token attr-name" >current</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >status</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>steps<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Steps</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].Step,s=[{title:"\u5df2\u5b8c\u6210",description:"\u8fd9\u91cc\u662f\u591a\u4fe1\u606f\u7684\u63cf\u8ff0\u554a"},{title:"\u9519\u8bef\u793a\u4f8b",description:"\u8fd9\u91cc\u662f\u591a\u4fe1\u606f\u7684\u8036\u54e6\u8036\u54e6\u54e6\u8036\u54e6\u8036"},{title:"\u53c8\u4e00\u4e2a\u5f85\u8fd0\u884c",description:"\u63cf\u8ff0\u554a\u63cf\u8ff0\u554a"},{title:"\u5f85\u8fd0\u884c",description:"\u8fd9\u91cc\u662f\u591a\u4fe1\u606f\u7684\u63cf\u8ff0\u554a"}].map(function(s,a){return e["default"].createElement(n,{key:a,title:s.title,description:s.description})});return e["default"].createElement(o["default"],{current:1,status:"error"},s)}}}});
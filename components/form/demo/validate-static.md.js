webpackJsonp([257,359],{635:function(a,n,s){"use strict";function t(a){return a&&a.__esModule?a:{"default":a}}var p=(s(23),s(22)),e=t(p),o=(s(36),s(35)),c=t(o),l=(s(17),s(24)),u=t(l),k=(s(46),s(45)),i=t(k),r=s(1),m=t(r),g=s(2);t(g);a.exports={content:[["p","\u6211\u4eec\u4e3a\u8868\u5355\u63a7\u4ef6\u5b9a\u4e49\u4e86\u4e09\u79cd\u6821\u9a8c\u72b6\u6001\uff0c\u4e3a ",["code","<FormItem>"]," \u5b9a\u4e49 ",["code","validateStatus"]," \u5c5e\u6027\u5373\u53ef\u3002"],["p","validateStatus: 'success', 'warning', 'error', 'validating'\u3002"],["p","\u53e6\u5916\u4e3a\u8f93\u5165\u6846\u6dfb\u52a0\u53cd\u9988\u56fe\u6807\uff0c\u8bbe\u7f6e ",["code","<FormItem>"]," \u7684 ",["code","hasFeedback"]," \u5c5e\u6027\u503c\u4e3a ",["code","true"]," \u5373\u53ef\u3002"],["p",["strong","\u6ce8\u610f"],": \u53cd\u9988\u56fe\u6807\u53ea\u5bf9 ",["code","<Input />"]," \u6709\u6548\u3002"]],meta:{order:6,title:"\u6821\u9a8c\u63d0\u793a",filename:"components/form/demo/validate-static.md",id:"components-form-demo-validate-static"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Form<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> DatePicker<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5931\u8d25\u6821\u9a8c<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >help</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u6570\u5b57\u548c\u5b57\u6bcd\u7ec4\u5408<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u65e0\u6548\u9009\u62e9<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u544a\u6821\u9a8c<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u524d\u65b9\u9ad8\u80fd\u9884\u8b66<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6821\u9a8c\u4e2d<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >hasFeedback</span>\n      <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>validating<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >help</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4fe1\u606f\u5ba1\u6838\u4e2d...<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6211\u662f\u88ab\u6821\u9a8c\u7684\u5185\u5bb9<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>validating<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6210\u529f\u6821\u9a8c<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >hasFeedback</span>\n      <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6211\u662f\u6b63\u6587<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u544a\u6821\u9a8c<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >hasFeedback</span>\n      <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u524d\u65b9\u9ad8\u80fd\u9884\u8b66<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5931\u8d25\u6821\u9a8c<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >hasFeedback</span>\n      <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >help</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u6570\u5b57\u548c\u5b57\u6bcd\u7ec4\u5408<span class="token punctuation" >"</span></span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u65e0\u6548\u9009\u62e9<span class="token punctuation" >"</span></span> <span class="token attr-name" >id</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n      <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u884c\u5185\u6821\u9a8c<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >5</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token attr-name" >help</span>\n    <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span> <span class="token attr-name" >validateStatus</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >help</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u9009\u62e9\u6b63\u786e\u65e5\u671f<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-form-split<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token operator" >-</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var a=i["default"].Item;return m["default"].createElement(i["default"],{horizontal:!0},m["default"].createElement(a,{label:"\u5931\u8d25\u6821\u9a8c",labelCol:{span:5},wrapperCol:{span:12},validateStatus:"error",help:"\u8bf7\u8f93\u5165\u6570\u5b57\u548c\u5b57\u6bcd\u7ec4\u5408"},m["default"].createElement(u["default"],{defaultValue:"\u65e0\u6548\u9009\u62e9",id:"error"})),m["default"].createElement(a,{label:"\u8b66\u544a\u6821\u9a8c",labelCol:{span:5},wrapperCol:{span:12},validateStatus:"warning"},m["default"].createElement(u["default"],{defaultValue:"\u524d\u65b9\u9ad8\u80fd\u9884\u8b66",id:"warning"})),m["default"].createElement(a,{label:"\u6821\u9a8c\u4e2d",labelCol:{span:5},wrapperCol:{span:12},hasFeedback:!0,validateStatus:"validating",help:"\u4fe1\u606f\u5ba1\u6838\u4e2d..."},m["default"].createElement(u["default"],{defaultValue:"\u6211\u662f\u88ab\u6821\u9a8c\u7684\u5185\u5bb9",id:"validating"})),m["default"].createElement(a,{label:"\u6210\u529f\u6821\u9a8c",labelCol:{span:5},wrapperCol:{span:12},hasFeedback:!0,validateStatus:"success"},m["default"].createElement(u["default"],{defaultValue:"\u6211\u662f\u6b63\u6587",id:"success"})),m["default"].createElement(a,{label:"\u8b66\u544a\u6821\u9a8c",labelCol:{span:5},wrapperCol:{span:12},hasFeedback:!0,validateStatus:"warning"},m["default"].createElement(u["default"],{defaultValue:"\u524d\u65b9\u9ad8\u80fd\u9884\u8b66",id:"warning"})),m["default"].createElement(a,{label:"\u5931\u8d25\u6821\u9a8c",labelCol:{span:5},wrapperCol:{span:12},hasFeedback:!0,validateStatus:"error",help:"\u8bf7\u8f93\u5165\u6570\u5b57\u548c\u5b57\u6bcd\u7ec4\u5408"},m["default"].createElement(u["default"],{defaultValue:"\u65e0\u6548\u9009\u62e9",id:"error"})),m["default"].createElement(a,{label:"\u884c\u5185\u6821\u9a8c",labelCol:{span:5},help:!0},m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(a,{validateStatus:"error",help:"\u8bf7\u9009\u62e9\u6b63\u786e\u65e5\u671f"},m["default"].createElement(c["default"],null))),m["default"].createElement(e["default"],{span:"1"},m["default"].createElement("p",{className:"ant-form-split"},"-")),m["default"].createElement(e["default"],{span:"6"},m["default"].createElement(a,null,m["default"].createElement(c["default"],null)))))}}}});
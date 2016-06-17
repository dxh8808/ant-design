webpackJsonp([194,359],{700:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(79),a(78)),o=t(p),c=(a(151),a(150)),e=t(c),u=(a(70),a(69)),l=t(u),i=a(1),k=t(i),r=a(2);t(r);n.exports={content:[["p","\u53ef\u4ee5\u5224\u65ad\u662f\u5426\u9700\u8981\u5f39\u51fa\u3002"]],meta:{order:3,title:"\u6761\u4ef6\u89e6\u53d1",filename:"components/popconfirm/demo/dynamic-trigger.md",id:"components-popconfirm-demo-dynamic-trigger"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Popconfirm<span class="token punctuation" >,</span> Switch<span class="token punctuation" >,</span> message <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      condition<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>   <span class="token comment" spellcheck="true">// \u662f\u5426\u6ee1\u8db3\u6761\u4ef6\uff0c\u4e0d\u6ee1\u8db3\u5219\u5f39\u51fa\u786e\u8ba4\u6846</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >changeCondition</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> condition<span class="token punctuation" >:</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >confirm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    message<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token string" >\'\u8fdb\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c. next step.\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >cancel</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    message<span class="token punctuation" >.</span><span class="token function" >error</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u53d6\u6d88\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleVisibleChange</span><span class="token punctuation" >(</span>visible<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token operator" >!</span>visible<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >return</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token comment" spellcheck="true">// \u6253\u5f00\u524d\u8fdb\u884c\u5224\u65ad</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>condition<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>condition<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >confirm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>  <span class="token comment" spellcheck="true">// \u76f4\u63a5\u6267\u884c\u4e0b\u4e00\u6b65</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> visible <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>  <span class="token comment" spellcheck="true">// \u8fdb\u884c\u786e\u8ba4</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u4efb\u52a1\u5417\uff1f<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>visible<span class="token punctuation" >}</span></span> <span class="token attr-name" >onVisibleChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleVisibleChange<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>confirm<span class="token punctuation" >}</span></span> <span class="token attr-name" >onCancel</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>cancel<span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5220\u9664\u67d0\u4efb\u52a1<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n        \u70b9\u51fb\u662f\u5426\u76f4\u63a5\u6267\u884c\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >defaultChecked</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>changeCondition<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].createClass({displayName:"App",getInitialState:function(){return{visible:!1,condition:!0}},changeCondition:function(n){this.setState({condition:n})},confirm:function(){this.setState({visible:!1}),l["default"].success("\u8fdb\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c. next step.")},cancel:function(){this.setState({visible:!1}),l["default"].error("\u70b9\u51fb\u4e86\u53d6\u6d88")},handleVisibleChange:function(n){return n?(console.log(this.state.condition),void(this.state.condition?this.confirm():this.setState({visible:n}))):void this.setState({visible:n})},render:function(){return k["default"].createElement("div",null,k["default"].createElement(e["default"],{title:"\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u4efb\u52a1\u5417\uff1f",visible:this.state.visible,onVisibleChange:this.handleVisibleChange,onConfirm:this.confirm,onCancel:this.cancel},k["default"].createElement("a",{href:"#"},"\u5220\u9664\u67d0\u4efb\u52a1")),k["default"].createElement("br",null),k["default"].createElement("br",null),"\u70b9\u51fb\u662f\u5426\u76f4\u63a5\u6267\u884c\uff1a",k["default"].createElement(o["default"],{defaultChecked:!0,onChange:this.changeCondition}))}});return k["default"].createElement(n,null)}}}});
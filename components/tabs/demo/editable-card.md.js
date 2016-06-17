webpackJsonp([96,359],{800:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(62),s(61)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u53ea\u6709\u5361\u7247\u6837\u5f0f\u7684\u9875\u7b7e\u652f\u6301\u65b0\u589e\u548c\u5173\u95ed\u9009\u9879\u3002"]],meta:{order:9,title:"\u65b0\u589e\u548c\u5173\u95ed\u9875\u7b7e",filename:"components/tabs/demo/editable-card.md",id:"components-tabs-demo-editable-card"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>newTabIndex <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> panes <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e00\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e8c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      activeKey<span class="token punctuation" >:</span> panes<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span>key<span class="token punctuation" >,</span>\n      panes<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>activeKey<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> activeKey <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onEdit</span><span class="token punctuation" >(</span>targetKey<span class="token punctuation" >,</span> action<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >[</span>action<span class="token punctuation" >]</span><span class="token punctuation" >(</span>targetKey<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >add</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> panes <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>panes<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> activeKey <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`newTab</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>newTabIndex<span class="token operator" >++</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n    panes<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u65b0\u5efa\u9875\u7b7e<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>activeKey<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u65b0\u9875\u9762<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> panes<span class="token punctuation" >,</span> activeKey <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >remove</span><span class="token punctuation" >(</span>targetKey<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> activeKey <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>activeKey<span class="token punctuation" >;</span>\n    <span class="token keyword" >let</span> lastIndex<span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>panes<span class="token punctuation" >.</span><span class="token function" >forEach</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>pane<span class="token punctuation" >,</span> i<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>pane<span class="token punctuation" >.</span>key <span class="token operator" >===</span> targetKey<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        lastIndex <span class="token operator" >=</span> i <span class="token operator" >-</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> panes <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>panes<span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>pane <span class="token operator" >=</span><span class="token operator" >></span> pane<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> targetKey<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>lastIndex <span class="token operator" >>=</span> <span class="token number" >0</span> <span class="token operator" >&amp;&amp;</span> activeKey <span class="token operator" >===</span> targetKey<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      activeKey <span class="token operator" >=</span> panes<span class="token punctuation" >[</span>lastIndex<span class="token punctuation" >]</span><span class="token punctuation" >.</span>key<span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> panes<span class="token punctuation" >,</span> activeKey <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >activeKey</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>activeKey<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>editable-card<span class="token punctuation" >"</span></span> <span class="token attr-name" >onEdit</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onEdit<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>panes<span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].TabPane,a=c["default"].createClass({displayName:"Demo",getInitialState:function(){this.newTabIndex=0;var a=[c["default"].createElement(n,{tab:"\u9009\u9879\u5361",key:"1"},"\u9009\u9879\u5361\u4e00\u5185\u5bb9"),c["default"].createElement(n,{tab:"\u9009\u9879\u5361",key:"2"},"\u9009\u9879\u5361\u4e8c\u5185\u5bb9")];return{activeKey:a[0].key,panes:a}},onChange:function(n){this.setState({activeKey:n})},onEdit:function(n,a){this[a](n)},add:function(){var a=this.state.panes,s="newTab"+this.newTabIndex++;a.push(c["default"].createElement(n,{tab:"\u65b0\u5efa\u9875\u7b7e",key:s},"\u65b0\u9875\u9762")),this.setState({panes:a,activeKey:s})},remove:function(n){var a=this.state.activeKey,s=void 0;this.state.panes.forEach(function(a,t){a.key===n&&(s=t-1)});var t=this.state.panes.filter(function(a){return a.key!==n});s>=0&&a===n&&(a=t[s].key),this.setState({panes:t,activeKey:a})},render:function(){return c["default"].createElement(o["default"],{onChange:this.onChange,activeKey:this.state.activeKey,type:"editable-card",onEdit:this.onEdit},this.state.panes)}});return c["default"].createElement(a,null)}}}});
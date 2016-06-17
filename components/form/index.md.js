webpackJsonp([256,359],{636:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var a=o(1),d=(n(a),o(2));n(d);t.exports={content:["section",["p","\u5177\u6709\u6570\u636e\u6536\u96c6\u3001\u6821\u9a8c\u548c\u63d0\u4ea4\u529f\u80fd\u7684\u8868\u5355\uff0c\u5305\u542b\u590d\u9009\u6846\u3001\u5355\u9009\u6846\u3001\u8f93\u5165\u6846\u3001\u4e0b\u62c9\u9009\u62e9\u6846\u7b49\u5143\u7d20\u3002"],["h2","\u8868\u5355"],["p","\u6211\u4eec\u4e3a ",["code","form"]," \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u79cd\u6392\u5217\u65b9\u5f0f\uff1a"],["ul",["li",["p","\u6c34\u5e73\u6392\u5217\uff1a\u53ef\u4ee5\u5b9e\u73b0 ",["code","label"]," \u6807\u7b7e\u548c\u8868\u5355\u63a7\u4ef6\u7684\u6c34\u5e73\u6392\u5217\uff1b"]],["li",["p","\u884c\u5185\u6392\u5217\uff1a\u4f7f\u5176\u8868\u73b0\u4e3a ",["code","inline-block"]," \u7ea7\u522b\u7684\u63a7\u4ef6\u3002"]]],["h2","\u8868\u5355\u57df"],["p","\u8868\u5355\u4e00\u5b9a\u4f1a\u5305\u542b\u8868\u5355\u57df\uff0c\u8868\u5355\u57df\u53ef\u4ee5\u662f\u8f93\u5165\u63a7\u4ef6\uff0c\u6807\u51c6\u8868\u5355\u57df\uff0c\u6807\u7b7e\uff0c\u4e0b\u62c9\u83dc\u5355\uff0c\u6587\u672c\u57df\u7b49\u3002"],["p","\u8fd9\u91cc\u6211\u4eec\u5c01\u88c5\u4e86\u8868\u5355\u57df ",["code","<Form.Item />"]," \u3002"],["pre",{lang:"jsx",highlighted:'<span class="token operator" >&lt;</span>Form<span class="token punctuation" >.</span>Item <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span><span class="token operator" >></span>\n  <span class="token punctuation" >{</span>children<span class="token punctuation" >}</span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form.Item</span><span class="token punctuation" >></span></span>'},["code","<Form.Item {...props}>\n  {children}\n</Form.Item>"]],["blockquote",["p","\u6ce8\uff1a\u6807\u51c6\u8868\u5355\u4e2d\u4e00\u5f8b\u4f7f\u7528\u5927\u53f7\u63a7\u4ef6\u3002"]]],meta:{category:"Components",chinese:"\u8868\u5355",type:"Form Control",cols:1,english:"Form",filename:"components/form/index.md"},toc:["ul",["li",["a",{href:"#\u8868\u5355"},"\u8868\u5355"]],["li",["a",{href:"#\u8868\u5355\u57df"},"\u8868\u5355\u57df"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["h3","Form"],["p",["strong","\u66f4\u591a\u793a\u4f8b\u53c2\u8003 ",["a",{title:null,href:"http://react-component.github.io/form/"},"rc-form"]],"\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","form"],["td","\u7ecf ",["code","Form.create()"]," \u5305\u88c5\u8fc7\u7684\u7ec4\u4ef6\u4f1a\u81ea\u5e26 ",["code","this.props.form"]," \u5c5e\u6027\uff0c\u76f4\u63a5\u4f20\u7ed9 Form \u5373\u53ef"],["td","object"],["td","\u65e0"]],["tr",["td","horizontal"],["td","\u6c34\u5e73\u6392\u5217\u5e03\u5c40"],["td","boolean"],["td","false"]],["tr",["td","inline"],["td","\u884c\u5185\u6392\u5217\u5e03\u5c40"],["td","boolean"],["td","false"]],["tr",["td","onSubmit"],["td","\u6570\u636e\u9a8c\u8bc1\u6210\u529f\u540e\u56de\u8c03\u4e8b\u4ef6"],["td","Function(e:Event)"],["td"]],["tr",["td","prefixCls"],["td","\u6837\u5f0f\u7c7b\u540d\uff0c\u9ed8\u8ba4\u4e3a ant-form\uff0c\u901a\u5e38\u60a8\u4e0d\u9700\u8981\u8bbe\u7f6e"],["td","string"],["td","'ant-form'"]]]],["h3","Form.create(options)"],["p","\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >class</span> <span class="token class-name" >CustomizedForm</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span>\n\nCustomizedForm <span class="token operator" >=</span> Form<span class="token punctuation" >.</span><span class="token function" >create</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >(</span>CustomizedForm<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'},["code","class CustomizedForm extends React.Component {}\n\nCustomizedForm = Form.create({})(CustomizedForm);"]],["p",["code","options"]," \u7684\u914d\u7f6e\u9879\u5982\u4e0b\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"]]],["tbody",["tr",["td","onFieldsChange"],["td","\u5f53 ",["code","Form.Item"]," \u5b50\u8282\u70b9\u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\u89e6\u53d1\uff0c\u53ef\u4ee5\u628a\u5bf9\u5e94\u7684\u503c\u8f6c\u5b58\u5230 Redux store"],["td","Function(props, fields)"]],["tr",["td","mapPropsToFields"],["td","\u628a props \u8f6c\u4e3a\u5bf9\u5e94\u7684\u503c\uff0c\u53ef\u7528\u4e8e\u628a Redux store \u4e2d\u7684\u503c\u8bfb\u51fa"],["td","Function(props): Object{ fieldName: Object{ value } }"]]]],["p","\u7ecf\u8fc7 ",["code","Form.create"]," \u5305\u88c5\u7684\u7ec4\u4ef6\u5c06\u4f1a\u81ea\u5e26 ",["code","this.props.form"]," \u5c5e\u6027\uff0c",["code","this.props.form"]," \u63d0\u4f9b\u7684 API \u5982\u4e0b\uff1a"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"]]],["tbody",["tr",["td","getFieldsValue"],["td","\u83b7\u53d6\u4e00\u7ec4\u8f93\u5165\u63a7\u4ef6\u7684\u503c\uff0c\u5982\u4e0d\u4f20\u5165\u53c2\u6570\uff0c\u5219\u83b7\u53d6\u5168\u90e8\u7ec4\u4ef6\u7684\u503c"],["td","Function([fieldNames: string[]])"]],["tr",["td","getFieldValue"],["td","\u83b7\u53d6\u4e00\u4e2a\u8f93\u5165\u63a7\u4ef6\u7684\u503c"],["td","Function(fieldName: string)"]],["tr",["td","setFieldsValue"],["td","\u8bbe\u7f6e\u4e00\u7ec4\u8f93\u5165\u63a7\u4ef6\u7684\u503c"],["td","Function(obj: object)"]],["tr",["td","setFields"],["td","\u8bbe\u7f6e\u4e00\u7ec4\u8f93\u5165\u63a7\u4ef6\u7684\u503c\u4e0e Error"],["td","Function(obj: object)"]],["tr",["td","validateFields"],["td","\u6821\u9a8c\u5e76\u83b7\u53d6\u4e00\u7ec4\u8f93\u5165\u57df\u7684\u503c\u4e0e Error"],["td","Function([fieldNames: string[]], ","[options: object]",", callback: Function(errors, values))"]],["tr",["td","validateFieldsAndScroll"],["td","\u4e0e ",["code","validateFields"]," \u76f8\u4f3c\uff0c\u4f46\u6821\u9a8c\u5b8c\u540e\uff0c\u5982\u679c\u6821\u9a8c\u4e0d\u901a\u8fc7\u7684\u83dc\u5355\u57df\u4e0d\u5728\u53ef\u89c1\u8303\u56f4\u5185\uff0c\u5219\u81ea\u52a8\u6eda\u52a8\u8fdb\u53ef\u89c1\u8303\u56f4"],["td","\u53c2\u8003 ",["code","validateFields"]]],["tr",["td","getFieldError"],["td","\u83b7\u53d6\u67d0\u4e2a\u8f93\u5165\u63a7\u4ef6\u7684 Error"],["td","Function(name)"]],["tr",["td","isFieldValidating"],["td","\u5224\u65ad\u4e00\u4e2a\u8f93\u5165\u63a7\u4ef6\u662f\u5426\u5728\u6821\u9a8c\u72b6\u6001"],["td","Function(name)"]],["tr",["td","resetFields"],["td","\u91cd\u7f6e\u4e00\u7ec4\u8f93\u5165\u63a7\u4ef6\u7684\u503c\u4e0e\u72b6\u6001\uff0c\u5982\u4e0d\u4f20\u5165\u53c2\u6570\uff0c\u5219\u91cd\u7f6e\u6240\u6709\u7ec4\u4ef6"],["td","Function([names: string[]])"]],["tr",["td","getFieldProps"],["td","\u7528\u4e8e\u548c\u8868\u5355\u8fdb\u884c\u53cc\u5411\u7ed1\u5b9a\uff0c\u8be6\u89c1\u4e0b\u65b9\u63cf\u8ff0"],["td"]]]],["h4","this.props.form.getFieldProps(id, options)"],["h5","\u7279\u522b\u6ce8\u610f"],["p",["code","getFieldProps"]," \u8c03\u7528\u4e0d\u80fd\u4f4d\u4e8e\u7eaf\u51fd\u6570\u7ec4\u4ef6\u4e2d: ",["a",{title:null,href:"https://github.com/facebook/react/pull/6534"},"https://github.com/facebook/react/pull/6534"]],["p",["code","getFieldProps"]," \u8fd4\u56de\u7684\u5c5e\u6027\u5305\u62ec ",["code","id"],"\u3001",["code","value"],"\uff08\u6216\u4f60\u8bbe\u7f6e\u7684\u5176\u5b83 ",["code","valuePropName"],"\uff09\u3001",["code","ref"],"\u3001",["code","onChange"],"\uff08\u6216\u8005\u4f60\u8bbe\u7f6e\u7684\u5176\u5b83 ",["code","trigger"]," ",["code","validateTrigger"],"\uff09\uff0c",["strong","\u6240\u4ee5\u4e0d\u5e94\u518d\u8bbe\u7f6e\u540c\u6837\u7684\u5c5e\u6027"],"\uff0c\u4ee5\u514d\u51b2\u7a81\u3002\u5982\u679c\u5bf9\u5176\u8fd4\u56de\u503c\u7684\u7ec6\u8282\u6709\u5174\u8da3\uff0c\u53ef\u4ee5 ",["code","console.log"]," \u51fa\u6765\u67e5\u770b\u3002"],["blockquote",["p","\u5728\u8868\u5355\u4e2d ",["code","defaultValue"]," \u4e5f\u4e0d\u5e94\u8be5\u88ab\u8bbe\u7f6e\uff0c\u8bf7\u4f7f\u7528\u4e0b\u9762\u7684 ",["code","initialValue"],"\u3002"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","options.id"],["td","\u5fc5\u586b\u8f93\u5165\u63a7\u4ef6\u552f\u4e00\u6807\u5fd7"],["td","string"],["td"]],["tr",["td","options.valuePropName"],["td","\u5b50\u8282\u70b9\u7684\u503c\u7684\u5c5e\u6027\uff0c\u5982 Switch \u7684\u662f 'checked'"],["td","string"],["td","'value'"]],["tr",["td","options.initialValue"],["td","\u5b50\u8282\u70b9\u7684\u521d\u59cb\u503c\uff0c\u7c7b\u578b\u3001\u53ef\u9009\u503c\u5747\u7531\u5b50\u8282\u70b9\u51b3\u5b9a"],["td"],["td"]],["tr",["td","options.trigger"],["td","\u6536\u96c6\u5b50\u8282\u70b9\u7684\u503c\u7684\u65f6\u673a"],["td","string"],["td","'onChange'"]],["tr",["td","options.getValueFromEvent"],["td","\u53ef\u4ee5\u628a onChange \u7684\u53c2\u6570\u8f6c\u5316\u4e3a\u63a7\u4ef6\u7684\u503c\uff0c\u4f8b\u5982 DatePicker \u53ef\u8bbe\u4e3a\uff1a",["code","(date, dateString) => dateString"]],["td","function(..args)"],["td",["a",{title:null,href:"https://github.com/react-component/form#optiongetvaluefromevent"},"reference"]]],["tr",["td","options.validateTrigger"],["td","\u6821\u9a8c\u5b50\u8282\u70b9\u503c\u7684\u65f6\u673a"],["td","string"],["td","'onChange'"]],["tr",["td","options.rules"],["td","\u6821\u9a8c\u89c4\u5219\uff0c\u53c2\u89c1 ",["a",{title:null,href:"https://github.com/yiminghe/async-validator"},"async-validator"]],["td","array"],["td"]],["tr",["td","options.onXXX"],["td","\u7531\u4e8e ",["code","getFieldProps"]," \u4f1a\u5360\u7528 ",["code","onChange"]," \u7b49\u4e8b\u4ef6\uff08\u5373\u4f60\u6240\u8bbe\u7f6e\u7684 ",["code","trigger"]," ",["code","validateTrigger"],"\uff09\uff0c\u6240\u4ee5\u5982\u679c\u4ecd\u9700\u7ed1\u5b9a\u4e8b\u4ef6\uff0c\u8bf7\u5728 ",["code","options"]," \u5185\u8bbe\u7f6e"],["td","function"],["td","\u65e0"]],["tr",["td","options.exclusive"],["td","\u662f\u5426\u548c\u5176\u4ed6\u63a7\u4ef6\u4e92\u65a5\uff0c\u7279\u522b\u7528\u4e8e Radio \u5355\u9009\u63a7\u4ef6"],["td","boolean"],["td","false"]]]],["h3","Form.Item"],["blockquote",["p","\u4e00\u4e2a Form.Item \u5efa\u8bae\u53ea\u653e\u4e00\u4e2a child\uff0c\u6709\u591a\u4e2a child \u65f6\uff0c",["code","help"]," ",["code","required"]," ",["code","validateStatus"]," \u65e0\u6cd5\u81ea\u52a8\u751f\u6210\u3002"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u53ef\u9009\u503c"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","label"],["td","label \u6807\u7b7e\u7684\u6587\u672c"],["td","string"],["td"],["td"]],["tr",["td","labelCol"],["td","label \u6807\u7b7e\u5e03\u5c40\uff0c\u901a ",["code","<Col>"]," \u7ec4\u4ef6\uff0c\u8bbe\u7f6e ",["code","span"]," ",["code","offset"]," \u503c\uff0c\u5982 ",["code","{span: 3, offset: 12}"]],["td","object"],["td"],["td"]],["tr",["td","wrapperCol"],["td","\u9700\u8981\u4e3a\u8f93\u5165\u63a7\u4ef6\u8bbe\u7f6e\u5e03\u5c40\u6837\u5f0f\u65f6\uff0c\u4f7f\u7528\u8be5\u5c5e\u6027\uff0c\u7528\u6cd5\u540c labelCol"],["td","object"],["td"],["td"]],["tr",["td","help"],["td","\u63d0\u793a\u4fe1\u606f\uff0c\u5982\u4e0d\u8bbe\u7f6e\uff0c\u5219\u4f1a\u6839\u636e\u6821\u9a8c\u89c4\u5219\u81ea\u52a8\u751f\u6210"],["td","string"],["td"],["td"]],["tr",["td","extra"],["td","\u989d\u5916\u7684\u63d0\u793a\u4fe1\u606f\uff0c\u548c help \u7c7b\u4f3c\uff0c\u5f53\u9700\u8981\u9519\u8bef\u4fe1\u606f\u548c\u63d0\u793a\u6587\u6848\u540c\u65f6\u51fa\u73b0\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u3002"],["td","string"],["td"],["td"]],["tr",["td","required"],["td","\u662f\u5426\u5fc5\u586b\uff0c\u5982\u4e0d\u8bbe\u7f6e\uff0c\u5219\u4f1a\u6839\u636e\u6821\u9a8c\u89c4\u5219\u81ea\u52a8\u751f\u6210"],["td","bool"],["td"],["td","false"]],["tr",["td","validateStatus"],["td","\u6821\u9a8c\u72b6\u6001\uff0c\u5982\u4e0d\u8bbe\u7f6e\uff0c\u5219\u4f1a\u6839\u636e\u6821\u9a8c\u89c4\u5219\u81ea\u52a8\u751f\u6210"],["td","string"],["td","'success' 'warning' 'error' 'validating'"],["td"]],["tr",["td","hasFeedback"],["td","\u914d\u5408 validateStatus \u5c5e\u6027\u4f7f\u7528\uff0c\u5c55\u793a\u6821\u9a8c\u72b6\u6001\u56fe\u6807\uff0c\u5efa\u8bae\u53ea\u914d\u5408 Input \u7ec4\u4ef6\u4f7f\u7528"],["td","bool"],["td"],["td","false"]],["tr",["td","prefixCls"],["td","\u6837\u5f0f\u7c7b\u540d\uff0c\u9ed8\u8ba4\u4e3a ant-form\uff0c\u901a\u5e38\u60a8\u4e0d\u9700\u8981\u8bbe\u7f6e"],["td","string"],["td"],["td","'ant-form'"]]]],["style","\n.code-box-demo .ant-form-horizontal {\n  max-width: 540px;\n}\n"]]}}});
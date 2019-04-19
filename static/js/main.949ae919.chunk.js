(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(_,e,t){"use strict";var a=t(0),n=t.n(a);t(19);e.a=function(_){return n.a.createElement("button",{className:"btn btn-secondary calculator-buttons",style:{minWidth:_.minWidth},onClick:function(){_.onInputClick(_.label)}},"Delete"===_.label?n.a.createElement("i",{class:"fas fa-backspace"}):_.label)}},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_components_outputScreen__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_components_buttons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1),_App_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(20),_App_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__),_components_heading__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8),App=function(_Component){function App(){var _getPrototypeOf2,_this;Object(C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={expr:"",question:"",answer:"",minWidth:0},_this.handleInputClick=function(input){switch(console.log("Handle click function",input),input){case"=":try{var ans=eval(_this.state.question).toString()}catch(err){_this.setState({answer:"Math error!"})}void 0===ans?_this.setState({answer:"Math Error"}):_this.setState({answer:ans,question:"",expr:ans});break;case"Clear":console.log("case Clear"),_this.setState({question:"",answer:"",expr:""});break;case"Delete":console.log("case Delete");var str=_this.state.expr;str=str.substr(0,str.length-1),_this.setState({question:str,answer:"",expr:str}),console.log(_this.state.question);break;default:var ques=_this.state.expr+input;_this.setState({question:ques,answer:"",expr:ques}),console.log(_this.state.question)}},_this}return Object(C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(C_CalculatorApp_Simple_Calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"text-center"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_heading__WEBPACK_IMPORTED_MODULE_9__.a,null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"offset-sm-5 calculator border border-secondary rounded"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_outputScreen__WEBPACK_IMPORTED_MODULE_6__.a,{question:this.state.question,answer:this.state.answer}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"btn-group"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"Clear",onInputClick:this.handleInputClick,minWidth:75}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"Delete",minWidth:74,onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"/",onInputClick:this.handleInputClick}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"btn-group"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"7",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"8",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"9",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"*",onInputClick:this.handleInputClick}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"btn-group"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"4",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"5",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"6",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"-",onInputClick:this.handleInputClick}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"btn-group"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"1",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"2",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"3",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"+",onInputClick:this.handleInputClick}))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"row"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{class:"btn-group"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"0",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:".",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"=",onInputClick:this.handleInputClick}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_7__.a,{label:"00",onInputClick:this.handleInputClick})))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},,,,function(_,e,t){"use strict";var a=t(0),n=t.n(a);e.a=function(){return n.a.createElement("h1",null,"Simple Calculator using React")}},,,function(_,e,t){"use strict";var a=t(0),n=t.n(a),l=(t(18),function(_){var e=_.value;return n.a.createElement("div",{className:"outputScreenRow"},n.a.createElement("input",{className:"output-screen-row",type:"text",readOnly:!0,value:e}))});e.a=function(_){return n.a.createElement("div",{className:"outScreen"},n.a.createElement(l,{value:_.question}),n.a.createElement(l,{value:_.answer}))}},function(_,e,t){_.exports=t(21)},,,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),l=t(3),r=t.n(l),c=t(4);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(c.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.949ae919.chunk.js.map
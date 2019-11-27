webpackJsonp([2],{131:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=t(0),c=t.n(i),u=t(149),s=t(146),l=t(134),A=t(45),d=t(166),p=t.n(d),b=t(49),g=t(8),h=t(9),C=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),m=function(n){function e(){var n,t,a,i;r(this,e);for(var s=arguments.length,l=Array(s),A=0;A<s;A++)l[A]=arguments[A];return t=a=o(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(l))),a.state={controls:{name:Object(u.a)("input","text","Your name...","",{required:!0}),password:Object(u.a)("input","password","Your password...","",{required:!0})},isSignup:!0},a.inputChangedHandler=function(n){var e=n.target,t=e.name,r=e.value,o=Object.assign({},a.state.controls),i=!0;o[t].value=r,o[t].valid=Object(u.c)(o[t].value,o[t].validations),o[t].touched=!0;for(var c in o)i=o[c].valid&&i;a.setState({controls:o,formIsValid:i})},a.submitHandler=function(n){n.preventDefault(),a.props.onAuth(a.state.controls.name.value,a.state.controls.password.value,a.state.isSignup)},a.switchSignHandler=function(){a.setState(function(n){return{isSignup:!n.isSignup}})},a.buildErrorMessage=function(n){var e=null;return n&&(e=c.a.createElement("p",null,n.message)),e},i=t,o(a,i)}return a(e,n),C(e,[{key:"componentDidMount",value:function(){!this.props.buildingBurger&&this.props.authRedirect&&this.props.onSetAuthRedirect()}},{key:"render",value:function(){var n=this,e=this.buildErrorMessage(this.props.error),t=Object(u.b)(this.state.controls);return this.props.loading?c.a.createElement(A.a,null):this.props.isAuth?c.a.createElement(h.c,{to:this.props.authRedirect}):c.a.createElement("div",{className:p.a.Auth},e,c.a.createElement("form",{onSubmit:this.submitHandler},t.map(function(e){return c.a.createElement(s.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,elementName:e.name,value:e.config.value,changed:n.inputChangedHandler,invalid:!e.config.valid,shouldValidate:e.config.validations,touched:e.config.touched})}),c.a.createElement(l.a,{btnType:"success",disabled:!this.state.formIsValid},"Submit")),c.a.createElement(l.a,{clicked:this.switchSignHandler,btnType:"Danger"},"Switch to ",this.state.isSignup?"Sign In":"Sign Up"))}}]),e}(i.Component),f=function(n){return{loading:n.auth.loading,error:n.auth.error,isAuth:""!==n.auth.token,buildingBurger:n.burgerBuilder.building,authRedirect:n.auth.authRedirect}},B=function(n){return{onAuth:function(e,t,r){return n(b.a(e,t,r))},onSetAuthRedirect:function(){return n(b.d("/"))}}};e.default=Object(g.b)(f,B)(m)},134:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(137),i=t.n(a),c=function(n){return o.a.createElement("button",{onClick:n.clicked,disabled:n.disabled,className:[i.a.Button,i.a[n.btnType]].join(" ")},n.children)};e.a=c},137:function(n,e,t){var r=t(138);"string"===typeof r&&(r=[[n.i,r,""]]);var o={};o.transform=void 0;t(127)(r,o);r.locals&&(n.exports=r.locals)},138:function(n,e,t){e=n.exports=t(126)(!0),e.push([n.i,".Button__Button__ajevi{background-color:transparent;border:none;color:coral;outline:none;cursor:pointer;font:inherit;padding:10px;margin:10px;font-weight:700}.Button__Button__ajevi:first-of-type{margin-left:0;padding-left:0}.Button__Button__ajevi:disabled{color:#ccc;cursor:not-allowed}.Button__Success__1DMln{color:#5c9210}.Button__Danger__18hYt{color:#944317}","",{version:3,sources:["C:/Users/conar/OneDrive/Escritorio/Repositories/React-review-concepts/react-apps/burger-proyect-redux/src/components/UI/Button/Button.css"],names:[],mappings:"AAAA,uBACI,6BAA8B,AAC9B,YAAa,AACb,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,aAAc,AACd,aAAc,AACd,YAAa,AACb,eAAkB,CACrB,AAED,qCACI,cAAe,AACf,cAAgB,CACnB,AAED,gCACI,WAAY,AACZ,kBAAoB,CACvB,AAED,wBACI,aAAe,CAClB,AAED,uBACI,aAAe,CAClB",file:"Button.css",sourcesContent:[".Button {\r\n    background-color: transparent;\r\n    border: none;\r\n    color: coral;\r\n    outline: none;\r\n    cursor: pointer;\r\n    font: inherit;\r\n    padding: 10px;\r\n    margin: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\n.Button:first-of-type {\r\n    margin-left: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.Button:disabled {\r\n    color: #ccc;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.Success {\r\n    color: #5C9210;\r\n}\r\n\r\n.Danger {\r\n    color: #944317;\r\n}"],sourceRoot:""}]),e.locals={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},146:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(147),i=t.n(a),c=function(n){var e=null,t=null,r=[i.a.InputElement];switch(n.invalid&&n.shouldValidate&&n.touched&&r.push(i.a.Invalid),n.invalid&&n.touched&&(t=o.a.createElement("p",{className:i.a.ValidationError},"Please enter a valid value!")),n.elementType){case"input":e=o.a.createElement("input",Object.assign({className:r.join(" "),name:n.elementName},n.elementConfig,{onChange:n.changed,value:n.value}));break;case"textarea":e=o.a.createElement("textarea",Object.assign({className:r.join(" "),name:n.elementName},n.elementConfig,{onChange:n.changed,value:n.value}));break;case"select":e=o.a.createElement("select",{className:r.join(" "),name:n.elementName,onChange:n.changed,value:n.value},n.elementConfig.options.map(function(n){return o.a.createElement("option",{key:n.value,value:n.value},n.displayValue)}));break;default:e=o.a.createElement("input",Object.assign({className:r.join(" "),name:n.elementName},n.elementConfig,{onChange:n.changed,value:n.value}))}return o.a.createElement("div",{className:i.a.Input},o.a.createElement("label",{className:i.a.Label},n.label),e,t)};e.a=c},147:function(n,e,t){var r=t(148);"string"===typeof r&&(r=[[n.i,r,""]]);var o={};o.transform=void 0;t(127)(r,o);r.locals&&(n.exports=r.locals)},148:function(n,e,t){e=n.exports=t(126)(!0),e.push([n.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:salmon}.Input__ValidationError__ukId8{color:red;margin:5px 0}","",{version:3,sources:["C:/Users/conar/OneDrive/Escritorio/Repositories/React-review-concepts/react-apps/burger-proyect-redux/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACC,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAC/B,AAED,qBACC,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACnB,AAED,4BACC,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAC/B,AAED,kCACC,aAAc,AACd,qBAAuB,CACvB,AAED,uBACC,qBAAsB,AACtB,uBAAyB,CACzB,AAED,+BACI,UAAW,AACX,YAAc,CACjB",file:"Input.css",sourcesContent:[".Input {\r\n\twidth: 100%;\r\n\tpadding: 10px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n\tfont-weight: bold;\r\n\tdisplay: block;\r\n\tmargin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n\toutline: none;\r\n\tborder: 1px solid #ccc;\r\n\tbackground-color: white;\r\n\tfont: inherit;\r\n\tpadding: 6px 10px;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n\toutline: none;\r\n\tbackground-color: #ccc;\r\n}\r\n\r\n.Invalid {\r\n\tborder: 1px solid red;\r\n\tbackground-color: salmon;\r\n}\r\n\r\n.ValidationError {\r\n    color: red;\r\n    margin: 5px 0;\r\n}"],sourceRoot:""}]),e.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d",ValidationError:"Input__ValidationError__ukId8"}},149:function(n,e,t){"use strict";t.d(e,"c",function(){return r}),t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a});var r=function(n,e){var t=!0;if(!e)return!0;if(e.required&&(t=""!==n.trim()&&t),e.minLength&&(t=n.length>=e.minLength&&t),e.maxLength&&(t=n.length<=e.maxLength&&t),e.isEmail){t=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(n)&&t}if(e.isNumeric){t=/^\d+$/.test(n)&&t}return t},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"input",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Your placeholder...",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return{elementType:n,elementConfig:Object.assign({type:e,placeholder:t},a),value:r,validations:o,valid:!1,touched:!1}},a=function(n){var e=[];for(var t in n)e.push({id:t,config:n[t],name:t});return e}},166:function(n,e,t){var r=t(167);"string"===typeof r&&(r=[[n.i,r,""]]);var o={};o.transform=void 0;t(127)(r,o);r.locals&&(n.exports=r.locals)},167:function(n,e,t){e=n.exports=t(126)(!0),e.push([n.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #ccc;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}button{background:#000}@media (min-width:600px){.Auth__ContactData__2_pdI{width:500px}}","",{version:3,sources:["C:/Users/conar/OneDrive/Escritorio/Repositories/React-review-concepts/react-apps/burger-proyect-redux/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACC,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAC/B,AAED,OACC,eAAkB,CAClB,AAED,yBACC,0BACC,WAAa,CACb,CACD",file:"Auth.css",sourcesContent:[".Auth {\r\n\tmargin: 20px auto;\r\n\twidth: 80%;\r\n\ttext-align: center;\r\n\t-webkit-box-shadow: 0 2px 3px #ccc;\r\n\t        box-shadow: 0 2px 3px #ccc;\r\n\tborder: 1px solid #ccc;\r\n\tpadding: 10px;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n\tbackground: black;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n\t.ContactData {\r\n\t\twidth: 500px;\r\n\t}\r\n}"],sourceRoot:""}]),e.locals={Auth:"Auth__Auth__1TInt",ContactData:"Auth__ContactData__2_pdI"}}});
//# sourceMappingURL=2.bc1f4333.chunk.js.map
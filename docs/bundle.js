webpackJsonp([1],[function(t,e,o){"use strict";var n=o(1);new n.AdvModule.AppModule,o(5),o(4)},function(t,e,o){"use strict";var n,r=o(2);!function(t){var e=function(){function t(){this.app=r.module("app",[]),t.currentCountryModule=this}return t.getInstance=function(){return t.currentCountryModule},t.prototype.registerService=function(t,e){console.log("Registered service "+t),this.app.service(t,e)},t.prototype.registerController=function(t,e){this.app.controller(t,function(){return e})},t.prototype.registerControllerWithFactory=function(t,e){this.app.controller(t,e)},t.prototype.registerFilter=function(t,e){this.app.filter(t,e)},t.prototype.registerComponent=function(t,e){this.app.component(t,e)},t}();t.AppModule=e}(n=e.AdvModule||(e.AdvModule={}))},,,function(t,e,o){var n,r=o(1);!function(t){var e=function(){function t(t){this.content=t.GetSampleData()}return t}();e.$inject=["SampleService"],t.SampleController=e;var o=function(){function t(){this.templateUrl="./sample.component.html",this.controller=e}return t}();t.SampleComponent=o,r.AdvModule.AppModule.getInstance().registerComponent("sample",new o)}(n||(n={}))},function(t,e,o){var n,r=o(1);!function(t){var e=function(){function t(t,e){this.sourceToUrlMap={WhatsNew:"http://joymon.github.io/Data/Home/WhatsNew.html",WhoAmI:"http://joymon.github.io/Data/Home/WhoAmI.html"},this.http=t,this.q=e}return t.prototype.GetUrl=function(t){return this.sourceToUrlMap[t]},t.prototype.Get=function(t){var e=this.GetUrl(t),o=this.q.defer();return this.http.get(e).error(function(t){o.reject(t)}).then(function(t){o.resolve({data:t.data})}),o.promise},t.prototype.GetSampleData=function(){return"I am 'Test data' from Sample Service"},t}();e.$inject=["$http","$q"],t.SampleService=e,r.AdvModule.AppModule.getInstance().registerService("SampleService",e)}(n||(n={}))}]);
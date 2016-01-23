(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("components/app/app.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "        <li><a ng-link=\"['/Home']\">Home</a></li>\n" +
    "    </ul>\n" +
    "</nav>\n" +
    "<main>\n" +
    "    <ng-outlet></ng-outlet>\n" +
    "</main>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("components/home/home.html",
    "<!--<h1>Hello {{$ctrl.name}}!</h1>-->\n" +
    "Hello\n" +
    "\n" +
    "<!--<div><a ng-link=\"nestedTest\">Go to nested test</a></div>-->\n" +
    "<!--<div><a ng-link=\"combinedTest\">Go to combined test</a></div>-->\n" +
    "<!--<div><a ng-link=\"insideOne\">Go to inside one</a></div>-->\n" +
    "<!--<div><a ng-link=\"insideTwo\">Go to inside two</a></div>-->\n" +
    "<!--<div><a ng-link=\"someModule.anotherHome\">Go to another home</a></div>-->\n" +
    "");
}]);
})();

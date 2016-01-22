(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("./components/combined-test/combined-test.html",
    "<div>\n" +
    "    <h1>Inside {{combinedTest.componentName}}</h1>\n" +
    "    <div ng-viewport=\"master\"></div>\n" +
    "    <div ng-viewport=\"detail\"></div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("./components/inside-two/inside-two.html",
    "<div>\n" +
    "    <h2>Inside {{insideTwo.componentName}}</h2>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("./components/home/home.html",
    "<h1>Hello {{home.name}}!</h1>\n" +
    "\n" +
    "\n" +
    "<div><a ng-link=\"nestedTest\">Go to nested test</a></div>\n" +
    "<div><a ng-link=\"combinedTest\">Go to combined test</a></div>\n" +
    "<div><a ng-link=\"insideOne\">Go to inside one</a></div>\n" +
    "<div><a ng-link=\"insideTwo\">Go to inside two</a></div>\n" +
    "<div><a ng-link=\"someModule.anotherHome\">Go to another home</a></div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("./components/nested-test/nested-test.html",
    "<div>\n" +
    "    <h1>Inside {{nestedTest.componentName}}</h1>\n" +
    "    <div><a ng-link=\"nestedOne\">Go to nested one</a>|<a ng-link=\"nestedTwo\">Go to nested two</a></div>\n" +
    "    <div ng-viewport></div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("./components/inside-one/inside-one.html",
    "<div>\n" +
    "    <h2>Inside {{insideOne.componentName}}</h2>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("./components/some-module/another-home/another-home.html",
    "<h1>Hello some-module {{home.name}}!</h1>\n" +
    "\n" +
    "<a ng-link=\"insideOne\">Go to inside one</a>");
}]);
})();

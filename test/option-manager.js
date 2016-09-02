var assert = require("assert");
var OptionManager = require("../lib/transformation/file/options/option-manager");
var Logger = require("../lib/transformation/file/logger");

suite("option-manager", function () {
  suite("memoisePluginContainer", function () {
    test("throws for babel 5 plugin", function() {
      return assert.throws(
        function () {
          OptionManager.memoisePluginContainer(
            function (ref) {
              var Plugin = ref.Plugin;
              return new Plugin("object-assign", {});
            }
          );
        },
        /Babel 5 plugin is being run with Babel 6/
      );
    })
  });

  suite("mergeOptions", function () {
    test("throws for removed babel 5 options", function() {
      return assert.throws(
        function () {
          var opt = new OptionManager(new Logger(null, "unknown"));
          opt.init({
            'randomOption': true
          });
        },
        /Unknown option: base.randomOption/
      );
    })
    test("throws for removed babel 5 options", function() {
      return assert.throws(
        function () {
          var opt = new OptionManager(new Logger(null, "unknown"));
          opt.init({
            'auxiliaryComment': true,
            'blacklist': true
          });
        },
        /Using removed Babel 5 option: base.auxiliaryComment - Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`/
      );
    })
  });
});

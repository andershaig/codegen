(function ($, codeg, undefined) {

  // Settings
  var s = {
    version: '0.0.1'
  };

  // Templates
  var t = {
    text: '<input type="text" id="{{ id }}" value="{{ default }}">'
  }

  // Sample Public Function
  codeg.log = function () {
      console.log("This is a public function!");
  };
  
  // Setup
  var init = function () {
    var template = Handlebars.compile(t.text);

    var data = {
      "id": "testing",
      "default": "my default value"
    };

    var result = template(data);

    console.log(result);
  };

  // Kick it off
  init();

}(jQuery, window.codeg = window.codeg || {}));


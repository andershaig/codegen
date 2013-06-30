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
  
  // Kick it off
  var init = function () {
    var template = Handlebars.compile(source);

    var data = {
      "id": "testing",
      "default": "my default value"
    };

    var result = template(data);

    console.log(result);
  };
  
}(jQuery, window.codeg = window.codeg || {}));


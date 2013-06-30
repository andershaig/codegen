(function ($, codeg, undefined) {

  // Settings
  var s = {
    debug: true,
    version: '0.0.1'
  };

  // Logging
  var l = function (msg) {
    if (s.debug) {
      console.log(msg);
    }
  };

  // Templates
  var templates = [
    {
      type: 'text',
      raw: '<input type="text" id="{{ id }}" value="{{ default }}">'
    },
    {
      type: 'textarea',
      raw: '<textarea id="{{ id }}">{{ default }}</textarea>'
    }
  ];

  // Render Methods
  var render = {};

  // Generate Render Methods
  var compile = function () {
    for (var i = 0; i < templates.length; i++) {
      var template = templates[i];
      render[template.type] = Handlebars.compile(template.raw);
    }
  }
  
  // Setup
  var init = function () {
    compile();

    var data = {
      "id": "testing",
      "default": "my default value"
    };

    var text = render.text(data);
    var textarea = render.textarea(data);

    l(text);
    l(textarea);

    $(document).ready( function () {
      $('.codeg-input').append(text).append(textarea);
    });
  };

  // Kick it off
  init();

}(jQuery, window.codeg = window.codeg || {}));


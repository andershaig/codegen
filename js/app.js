$(document).ready(function () {

	// Set up object
    var ccss = ccss || {};

    // Set defaults for any used properties
    ccss.padding = o_O('5px');
    ccss.margin  = o_O('10px');
    // TODO - make rendering a given property fully dependent on whether or not it has value
    ccss.display = o_O();

    // TODO - make names not be hard coded anymore. Either make this a bigger JSON object, use o_0 cast / model etc...

    // Maybe do them more directly, e.g.
    // var display = o_O({key: 'display', value: 'block'}).bind('#display')
    ccss.height = o_O('200px');

    // TODO - Maybe don't actually use bind at all but use the onchange event or similar to re-render all the CSS output when any item changes? Or just suck it up and go with computer on click rather than live preview?
 
    // Render
    o_O.bind(ccss, '#output');

    $(document).on('click', '#none', function () {
    	ccss.display('none');
    });

  // PREVIOUS EXAMPLE:
  // SETTINGS
 //  var settings = {
 //    maxBorder:      20,  //px
 //    minFontSize:    10,
 //    maxFontSize:    30,
 //    minPadding:    	 1,
 //    maxPadding:    	20
 //  }
  
 //  // OPTIONS
 //  var options = {
 //    className:      o_O('minim'),
 //    fontSize:       o_O('15px'),
 //    fontWeight:     o_O('bold'),
 //    fontStyle:      o_O('none'),
 //    textTransform:	o_O('none'),
 //    paddingTB:      o_O('7px'),
 //    paddingLR:      o_O('14px'),
 //    borderRadius:   o_O('3px'),
 //    primaryColor:	  o_O('3a8ba6'),
 //    buttonText:		 o_O('Your Button'),
 //    fullCode: function() {
 //    	return '<button class="' + this.className() + '">' + this.buttonText() + '</button>';
 //    },
 //    fullStyle: function() { 
 //    	var css = [
	// 	    '.' + this.className() + ' {'
 //        ,'   color:                  #' + this.primaryColor() + ';' // TEMP - for testing
	// 	    ,'   display:                inline-block;'
	// 	    ,'   font-size:              ' + this.fontSize() + ';'
	// 	    ,'   font-weight:            ' + this.fontWeight() + ';'
	// 	    ,'   font-style:             ' + this.fontStyle() + ';'
	// 	    ,'   text-transform:         ' + this.textTransform() + ';'
	// 	    ,'   padding:                ' + this.paddingTB() + ' ' + this.paddingLR() + ';'
	// 	    ,'   -webkit-border-radius:  ' + this.borderRadius() + ';'
	// 	    ,'      -moz-border-radius:  ' + this.borderRadius() + ';'
	// 	    ,'           border-radius:  ' + this.borderRadius() + ';'
	// 	    ,'}'
	// 	  ].join('\n');
		
 //    	return css;
	// },
	// compactStyle: function() {
 //    	var css = {
	// 	    display: 'inline-block',
	// 	    fontSize: this.fontSize(),
	// 	    fontWeight: this.fontWeight(),
 //        fontStyle: this.fontStyle(),
 //        textTransform: this.textTransform(),
	// 	    padding: this.paddingTB() + ' ' + this.paddingLR(),
	// 	    WebkitBorderRadius: this.borderRadius(),
	// 	    MozBorderRadius: this.borderRadius(),
	// 	    borderRadius: this.borderRadius(),
	// 	    textDecoration: 'none'
	// 	  };
		
 //    	return css;
 //  	}
 //  };

 //  o_O.bind(options, '#wrapper');

});
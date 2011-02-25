// JavaScript Document

var jqueryColorpicker = {};


Drupal.behaviors.jqueryColorpicker = function()
{
	var targets = "";
	var first = true;
	for(var i = 0; i < Drupal.settings.jqueryColorpicker.ids.length; i++)
	{
		if(!first)
		{
			targets += ", ";
		}
		else
		{
			first = false;
		}
		var id = "#" + Drupal.settings.jqueryColorpicker.ids[i] + "-wrapper";
		$(id).children(".inner_wrapper").css({"background-image" : "url(" + Drupal.settings.jqueryColorpicker.backgrounds[i] + ")", "height" : "36px", "width" : "36px", "position" : "relative"})
		.children(".color_picker").css({"background-image" : "url(" + Drupal.settings.jqueryColorpicker.backgrounds[i] + ")", "background-repeat" : "no-repeat", "background-position" : "center center", "height" : "30px", "width" : "30px", "position" : "absolute", "top" : "3px", "left" : "3px"})
		.children().css({"display" : "none"});
		targets += id;
		
	}
	
	$(targets).each(function()
	{
		var target = $(this).children(".inner_wrapper").attr("id");
		$("#" + target).siblings("label:first").css("display",  "inline");
		var defaultColor = $("#" + target + " .color_picker").css("background-color");
		if(defaultColor.match(/rgb/))
		{
			defaultColor = jqueryColorpicker.rgb2hex(defaultColor);
		}
		var trigger = $(this).children(".inner_wrapper").children(".color_picker");
		trigger.ColorPicker(
		{
			color: defaultColor,
			onShow: function (colpkr)
			{
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr)
			{
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb)
			{
				$("#" + target + " .color_picker").css("backgroundColor", "#" + hex).children("input").val(hex);
			}
		});
	});
}



jqueryColorpicker.rgb2hex = function(rgb)
{
	var result = new String;
	var number = new Number;
	var numbers = rgb.match(/\d+/g), j, result, number;
	for (j = 0;j < numbers.length;j += 1)
	{
		number = numbers[j] * 1;
		number = number.toString(16); // convert to hex
		if (number.length < 2) // enforce double-digit
		{
			number = "0" + number;
		}
		result += number;
	}
	return result;
}
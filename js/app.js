



// This is gonna get a bit hairy...
// 1-254 we have for the words.

function paint_time() {

	$('.current').removeClass('current');

    // Figure out what needs to be lit.
    var d = new Date();

	var cur_wday = d.getDay()   + 1,
		cur_mday = d.getDate()  + 8;
		cur_mon  = d.getMonth() + 41;

	// What a massive bodge - This only works for 20 Century
	var century = parseInt(d.getFullYear().toString(10).substr(0,2), 10) + 34,
		year    = parseInt(d.getFullYear().toString(10).substr(0,2), 10) + 49;

	// Light up the years
	$('.word'+cur_wday).addClass('current');
	$('.word'+cur_mday).addClass('current');
	$('.word'+cur_mon).addClass('current');
	$('.word'+century).addClass('current');
	$('.word'+year).addClass('current');


	// Light up the Time
	var cur_hour = d.getHours() % 12 + 118,
		cur_min  = d.getMinutes() + 131,
		cur_sec  = d.getSeconds() + 191;

	$('.word'+cur_hour).addClass('current');
	$('.word'+cur_min).addClass('current');
	$('.word'+cur_sec).addClass('current');


	// Light up the connectors
	$('.word8').addClass('current');
	$('.word40').addClass('current');
	$('.word118').addClass('current');
	$('.word191').addClass('current');
	$('.word251').addClass('current');
	
}





function generate_text(joins, days, months, numbers, ordinals) {

	$('<p/>').appendTo('body');

	$.each(days, function(key, value) {
		$('p').append(value + ' ');
	});

	$('p').append('The ');

	$.each(ordinals, function(key, value) {
		$('p').append(value + ' ');
	});

	$('p').append('Of ');

	$.each(months, function(key, value) {
		$('p').append(value + ' ');
	});

	// Century
	$.each(numbers, function(key, value) {
		if (key % 10 === 0 && key > 0) {
			$('p').append(value + ' ');
		}
	});

	// 2 Digit Year
	$.each(numbers, function(key, value) {
		$('p').append(value + ' ');
	});

	$('p').append('At ');

	$.each(numbers, function(key, value) {
		if (key > 0 && key <= 12) {
			$('p').append(value + ' ');
		}
	});

	$('p').append("O'Clock ");

	$.each(numbers, function(key, value) {
		if (key > 0 && key <= 9) {
			$('p').append('Oh-' + value + ' ');
		} else if (key > 0) {
			$('p').append(value + ' ');
		}
	});

	$('p').append('And ');

	$.each(numbers, function(key, value) {
		if (key > 0 && key <= 59) {
			$('p').append(value + ' ');
		}
	});


	$('p').append('Seconds Precisely ');

}














$(document).ready(function() {

	var joins = [
		"The",
	];

	var w = [
		"To",
		"The",
		"Of",
		"On",
		"At",
		"Precisely",
		"Quarter",
		"Half",
		"Past",
		"Seconds",
		"And",
		"Thousdand",
		"AM",
		"PM",
		"O'Clock",
		"AD",
		"BC",
		"BCE",		  // Before Common Era
		"BP",		  // Before Present
		"Point"
	];
	
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	
	
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];	
	
	
	var numbers = [
		"Zero",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen",
		"Twenty",
		"Twenty-One",
		"Twenty-Two",
		"Twenty-Three",
		"Twenty-Four",
		"Twenty-Five",
		"Twenty-Six",
		"Twenty-Seven",
		"Twenty-Eight",
		"Twenty-Nine",
		"Thirty",
		"Thirty-One",
		"Thirty-Two",
		"Thirty-Three",
		"Thirty-Four",
		"Thirty-Five",
		"Thirty-Six",
		"Thirty-Seven",
		"Thirty-Eight",
		"Thirty-Nine",
		"Fourty",
		"Fourty-One",
		"Fourty-Two",
		"Fourty-Three",
		"Fourty-Four",
		"Fourty-Five",
		"Fourty-Six",
		"Fourty-Seven",
		"Fourty-Eight",
		"Fourty-Nine",
		"Fifty",
		"Fifty-One",
		"Fifty-Two",
		"Fifty-Three",
		"Fifty-Four",
		"Fifty-Five",
		"Fifty-Six",
		"Fifty-Seven",
		"Fifty-Eight",
		"Fifty-Nine"
	];
	
	
	var ordinals = [
		"First",
		"Second",
		"Third",
		"Fourth",
		"Fifth",
		"Sixth",
		"Seventh",
		"Eight",
		"Ninth",
		"Tenth",
		"Eleventh",
		"Twelfth",
		"Thirteenth",
		"Fourteenth",
		"Fifteenth",
		"Sixteenth",
		"Seventeenth",
		"Eighteenth",
		"Nineteenth",
		"Twentieth",
		"Twenty-First",
		"Twenty-Second",
		"Twenty-Third",
		"Twenty-Fourth",
		"Twenty-Fifth",
		"Twenty-Sixth",
		"Twenty-Seventh",
		"Twenty-Eight",
		"Twenty-Ninth",
		"Thirtieth",
		"Thirty-First"
	];

	// Generates the paragraph text from the above
	generate_text(joins, days, months, numbers, ordinals);
	
	// Lettering.js to split my paragraph into words
	$("p").lettering('words');
	
	// Set the clock running	
	window.setInterval(paint_time, 1000);
});








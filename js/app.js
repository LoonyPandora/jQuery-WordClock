
$(document).ready(function() {

	var words = {
		days    : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		months  : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],	
		numbers : [
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
			"Twenty‑One",
			"Twenty‑Two",
			"Twenty‑Three",
			"Twenty‑Four",
			"Twenty‑Five",
			"Twenty‑Six",
			"Twenty‑Seven",
			"Twenty‑Eight",
			"Twenty‑Nine",
			"Thirty",
			"Thirty‑One",
			"Thirty‑Two",
			"Thirty‑Three",
			"Thirty‑Four",
			"Thirty‑Five",
			"Thirty‑Six",
			"Thirty‑Seven",
			"Thirty‑Eight",
			"Thirty‑Nine",
			"Fourty",
			"Fourty‑One",
			"Fourty‑Two",
			"Fourty‑Three",
			"Fourty‑Four",
			"Fourty‑Five",
			"Fourty‑Six",
			"Fourty‑Seven",
			"Fourty‑Eight",
			"Fourty‑Nine",
			"Fifty",
			"Fifty‑One",
			"Fifty‑Two",
			"Fifty‑Three",
			"Fifty‑Four",
			"Fifty‑Five",
			"Fifty‑Six",
			"Fifty‑Seven",
			"Fifty‑Eight",
			"Fifty‑Nine"
		],
		ordinals : [
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
			"Twenty‑First",
			"Twenty‑Second",
			"Twenty‑Third",
			"Twenty‑Fourth",
			"Twenty‑Fifth",
			"Twenty‑Sixth",
			"Twenty‑Seventh",
			"Twenty‑Eight",
			"Twenty‑Ninth",
			"Thirtieth",
			"Thirty‑First"
		]
	};

	// Generates the paragraph text from the above
	create_text(words);

	// Set the clock running	
 	window.setInterval(paint_time, 1000);
});


// Updates the clock, highlighting the current date / time
function paint_time() {
	$('.current').removeClass('current');

    // Figure out what needs to be lit.
    var d = new Date();

	// Light up the years
	var wday = d.getDay(),
		mday = d.getDate() - 1, // JavaScript, Y NO ZERO INDEXED?
		mon  = d.getMonth();

	$('.day'+wday).addClass('current');
	$('.month'+mon).addClass('current');
	$('.ordinal'+mday).addClass('current');

	// Light up the Time
	var hour = d.getHours() % 12,
		min  = d.getMinutes(),
		sec  = d.getSeconds();

	$('.hour'+hour).addClass('current');
	$('.minute'+min).addClass('current');
	$('.second'+sec).addClass('current');

	// Light up the connectors
	if (sec === 0) {
		$('.precisely').addClass('current');
	} else {
		$('.and').addClass('current');
		$('.seconds').addClass('current');
	}
}




// Creates container element, and will eventually selectively call date / time - depending on options.
function create_text(words) {
	$('<p/>').appendTo('body');

	create_date_words(words.days, words.months, words.ordinals);
	create_time_words(words.numbers);
}


// Creates the month related words
function create_date_words(days, months, ordinals) {
	$.each(days, function(key, value) {
		$('p').append($('<span/>').addClass('day'+key).text(value+' '));
	});

	$.each(months, function(key, value) {
		$('p').append($('<span/>').addClass('month'+key).text(value+' '));
	});

	$.each(ordinals, function(key, value) {
		$('p').append($('<span/>').addClass('ordinal'+key).text(value+' '));
	});
}


// Creates the time related words
function create_time_words(numbers) {
	// Hours
	$.each(numbers, function(key, value) {
		if (key > 0 && key <= 12) {
			$('p').append($('<span/>').addClass('hour'+key).text(value+' '));
		}
		// 12 hour clock, so 12 is zero and 12
		$('.hour12').addClass('hour0');
	});

	$('p').append($('<span/>').addClass('oclock').text("O'Clock "));

	// Minutes
	$.each(numbers, function(key, value) {
		if (key > 0 && key <= 9) {
			$('p').append($('<span/>').addClass('minute'+key).text('Oh‑'+value+' '));
		} else if (key > 0) {
			$('p').append($('<span/>').addClass('minute'+key).text(value+' '));
		}
	});

	$('p').append($('<span/>').addClass('and').text('And '));

	// Seconds
	$.each(numbers, function(key, value) {
		if (key > 0 && key <= 59) {
			$('p').append($('<span/>').addClass('second'+key).text(value+' '));
		}
	});

	$('p').append($('<span/>').addClass('seconds').text('Seconds '));
	$('p').append($('<span/>').addClass('precisely').text('Precisely'));
}



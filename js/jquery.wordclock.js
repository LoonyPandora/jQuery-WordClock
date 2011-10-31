/*
 * jQuery WordClock
 * Version 0.1.0
 * https://github.com/LoonyPandora/jQuery-WordClock
 *
 * Makes clocks, that are words
 * 
 * Copyright (c) 2011 James Aitken (loonypandora.co.uk)
 * Dual licensed under the MIT and GPL licenses.
*/

(function($){

	$.fn.wordclock = function(options) {
        var settings = default_settings();
        settings.container = this;

        if (options) { 
            $.extend(settings, options);
        }

        $.each(settings.quanta, function(key, quantum) {
            switch (quantum.toLowerCase()) {
                case 'days'     : day_names(settings);     break;
                case 'months'   : month_names(settings);   break;
                case 'ordinals' : day_ordinals(settings);  break;
                case 'hours'    : hours(settings);         break;
                case 'minutes'  : minutes(settings);       break;
                case 'seconds'  : seconds(settings);       break;
            }
        });

        // We only want one single paint timer running at a time
        // Could bog down browsers with too many, or get out of sync
        clearInterval(paint_timer);
        var paint_timer = window.setInterval("paint_timer()", 1000);

    };

})(jQuery);


function paint_timer() {
    $('.current').removeClass('current');

    // Figure out what needs to be lit.
    var d = new Date();

    // Light up the date
    var wday = d.getDay(),
        mday = d.getDate() - 1, // JavaScript, Y NO ZERO INDEXED?
        mon  = d.getMonth();

    $('.day'+wday).addClass('current');
    $('.month'+mon).addClass('current');
    $('.ordinal'+mday).addClass('current');

    // Light up the time
    var hour = d.getHours()   % 12,
        min  = d.getMinutes() % 60,
        sec  = d.getSeconds() % 60;

    $('.hour'+hour).addClass('current');
    $('.minute'+min).addClass('current');
    $('.second'+sec).addClass('current');

    // Light up the connectors
    if (sec !== 0) {
        $('.seconds_prefix span').addClass('current');
        $('.seconds_postfix span').addClass('current');
    }
}



function day_names(settings) {
    var p = $('<p/>').appendTo(settings.container).addClass('days');

    $.each(settings.days, function(key, value) {
        $('<span/>').appendTo(p).text(value+' ').addClass('day'+key);
    });
}


function month_names(settings) {
    var p = $('<p/>').appendTo(settings.container).addClass('months');

    $.each(settings.months, function(key, value) {
        $('<span/>').appendTo(p).text(value+' ').addClass('month'+key);
    });
}

function day_ordinals(settings) {
    var p = $('<p/>').appendTo(settings.container).addClass('ordinals');

    $.each(settings.ordinals, function(key, value) {
        $('<span/>').appendTo(p).text(value+' ').addClass('ordinal'+key);
    });
}

function hours(settings) {
    var p = $('<p/>').appendTo(settings.container).addClass('hours');

    $.each(settings.numbers, function(key, value) {
        if (key > 0 && key <= 12) {
            $('<span/>').appendTo(p).text(value+' ').addClass('hour'+key);
        }
    });
    
}

function minutes(settings) {
    var p = $('<p/>').appendTo(settings.container).addClass('minutes');

    $('<span/>').appendTo(p).text("O'Clock ").addClass('minute0');

    $.each(settings.numbers, function(key, value) {
        if (key > 0 && key <= 9) {
            $('<span/>').appendTo(p).text("Oh‑"+value+' ').addClass('minute'+key);
        } else if (key > 0) {
            $('<span/>').appendTo(p).text(value+' ').addClass('minute'+key);
        }
    });
}

function seconds(settings) {
    var p = $('<p/>').appendTo(settings.container).addClass('seconds_prefix');
    $('<span/>').appendTo(p).text('And ');

    var p = $('<p/>').appendTo(settings.container).addClass('seconds');
    $('<span/>').appendTo(p).text("Precisely ").addClass('second0');

    $.each(settings.numbers, function(key, value) {
        if (key > 0 && key <= 59) {
            $('<span/>').appendTo(p).text(value+' ').addClass('second'+key);
        }
    });

    var p = $('<p/>').appendTo(settings.container).addClass('seconds_postfix');
    $('<span/>').appendTo(p).text('Seconds ');
}


// The style and direction settings are not done yet.
// slider has the effect of moving the paragraph in the direction specified
// block-text is the default, text flowing over multiple lines
// giving a datetime will make it act like a countdown to that moment

function default_settings() {
    return {
        style      : ['slider','block-text'],
        direction  : ['vertical', 'horizontal'],
        datetime   : '2012-01-01',
        quanta     : ["days", "months", "weeks", "ordinals", "hours", "minutes", "seconds", "years"],
        days       : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months     : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],    
        numbers    : [
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
}

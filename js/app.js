
$(document).ready(function() {

    $('#wordclock').wordclock({
        quanta : ["months", "ordinals", "hours", "minutes", "seconds"]
    });

    $('#months').wordclock({
        quanta : ["months"]
    });

    $('#ordinals').wordclock({
        quanta : ["ordinals"]
    });

    $('#hours').wordclock({
        quanta : ["hours"]
    });

    $('#minutes').wordclock({
        quanta : ["minutes"]
    });

    $('#seconds').wordclock({
        quanta : ["seconds"]
    });

});


$( "#bulle7").click(function () {
    $('#myModal').modal('show');
});

$(document).ready(function(){
    $("#toptip").tooltip({
        placement:"top",

    });
});

$('[data-toggle="tooltip"]').each(function(){
    var options = {
        html: true
    };

    if ($(this)[0].hasAttribute('data-type')) {
        options['template'] =
            '<div class="tooltip ' + $(this).attr('data-type') + '" role="tooltip">' +
            '<div class="tooltip-arrow"></div>' +
            '<div class="tooltip-inner"></div>' +
            '</div>';
    }

    $(this).tooltip(options);
});

$('[data-toggle="modal tooltip"]').each(function(){
    var options = {
        html: true
    };

    if ($(this)[0].hasAttribute('data-type')) {
        options['template'] =
            '<div class="tooltip ' + $(this).attr('data-type') + '" role="tooltip">' +
            '<div class="tooltip-arrow"></div>' +
            '<div class="tooltip-inner"></div>' +
            '</div>';
    }

    $(this).tooltip(options);
});
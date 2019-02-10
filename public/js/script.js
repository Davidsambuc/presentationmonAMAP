for (let i =1; i<16; i++) {
    let selector = "#bulle" + i;
    console.log(selector);
    $(selector).click(function () {
        let selector1 = '#myModal' + i;
        console.log(selector1);
        $(selector1).modal('show');
    });
}

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
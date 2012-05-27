define(['jquery'], function($) {
    return {
        addCSS: function(text) {
            var stylesheet = $('<style>');
            var head = $('head');
            stylesheet.html(text);
            head.append(stylesheet);
        }
    };
});

(function($) {
  var REGEXP_IFDEV = new RegExp('<!--juiview: *ifdev *-->([\n]*?.*?)*?<!--juiview: *end *-->', 'm');
  $.loadView = function(path, callback) {
    $.get(path, function(res) {
      if (res)
        res = res.replace(REGEXP_IFDEV, "");
      if (callback)
        callback(res);
    });
  }
  $.fn.loadView = function(path) {
    var self = this;
    $.loadView(path, function(res) {
      $(self).html(res);
    });
  }
})(jQuery);

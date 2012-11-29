// Generated by CoffeeScript 1.4.0
(function() {

  (function($) {
    var $comments, expandOrCollapse, hideChildren, showChildren, toggle_button;
    toggle_button = "<span class='collapse_handle' style='cursor:pointer;margin-left:23px;margin-right:-26px;font-weight:bold;'>[-]</span>";
    $comments = $('div.comment');
    $comments.find('.comment_info').before(toggle_button);
    expandOrCollapse = function(direction) {
      var comment, current_offset, parent_offset, self, _i, _len, _ref;
      self = this;
      parent_offset = self.parent().css('margin-left');
      _ref = self.parent().nextAll();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        comment = _ref[_i];
        current_offset = $(comment).css('margin-left');
        if (current_offset > parent_offset) {
          if (direction === 'up') {
            $(comment).slideUp();
          } else {
            $(comment).slideDown();
          }
        } else {
          return false;
        }
      }
    };
    hideChildren = function() {
      var $self;
      $self = $(this);
      expandOrCollapse.call($self, 'up');
      $self.text('[+]').addClass('expand_handle').removeClass('collapse_handle');
      $self.parent().css('margin-bottom', 0).find('.comment_info').nextAll().hide();
      $self.prev().hide();
      return $self.off('click').on('click', showChildren);
    };
    showChildren = function() {
      var $self;
      $self = $(this);
      expandOrCollapse.call($self, 'down');
      $self.text('[-]').addClass('collapse_handle').removeClass('expand_handle');
      $self.parent().css('margin-bottom', 10).find('.comment_info').nextAll().show();
      $self.prev().show();
      return $self.off('click').on('click', hideChildren);
    };
    return $('span.collapse_handle').on('click', hideChildren);
  })(jQuery);

}).call(this);

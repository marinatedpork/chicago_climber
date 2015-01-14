var widestChild = function(sel, child) {
  max = 0;
  if (child) {
    $(sel).children().find(child).each(function(){
      c_width = parseInt($(this).width());
      if (c_width > max) {
        max = c_width;
      }
    });
    return max;
  } else {
    $(sel).each(function(){
      c_width = parseInt($(this).width());
      if (c_width > max) {
        max = c_width;
      }
    });
    return max;
  }
};

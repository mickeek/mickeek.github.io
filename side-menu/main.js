(function($) {
    $(document).ready(function() {
        $.slidebars({
            scrollLock: true
        });

        //new IScroll('#wrapper');

        $('body').on('touchstart','.sb-slidebar',function(e) {
          if (e.currentTarget.scrollTop === 0) {
            e.currentTarget.scrollTop = 1;
          } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
            e.currentTarget.scrollTop -= 1;
          }
        });

        $('#overlay').on('touchstart', function (ev) {
            ev.preventDefault();
        });
    });
}) (jQuery);
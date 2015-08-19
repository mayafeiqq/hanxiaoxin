/*编写者:吴蒋
  时间:2010-07-20
  描述:要改样子只要修改图片 覆盖本源码图片即可
 */
//Download by http://sc.xueit.com
(function ($) {
    $.wcheck = function (o) {
        var objCheckbox;
        objCheckbox = $("input[type='checkbox']");
        
        objCheckbox.wrap("<span style='display: inline-block; width: 15px; height: 15px; text-align: left;vertical-align: middle; _overflow: hidden;'></span>");
        objCheckbox.css("filter", "alpha(opacity = 0)");
        objCheckbox.css("opacity", "0");
        objCheckbox.each(function (i) {
            var nchenckbox = $(this);
            var pcheck = $(this).parent();
            pcheck.css("background", "url(images/checkbox.gif)");
            nchenckbox.change(function () {
                checkstate(nchenckbox, pcheck);
            });

            pcheck.mousemove(function () {
                pcheck.css("background-position", "0 31px");
            });

            pcheck.mouseout(function () {
                checkstate(nchenckbox, pcheck);
            });
        });
    }

    function checkstate(nb, pc) {
        if (nb.attr("checked")) {
            pc.css("background-position", "0 15px");
        }
        else {
            pc.css("background-position", "0 0");
        }
    }
})(jQuery);
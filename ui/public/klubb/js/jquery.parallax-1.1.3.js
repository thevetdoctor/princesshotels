/*
 Plugin: jQuery Parallax
 Version 1.1.3
 Author: Ian Lunn
 Twitter: @IanLunn
 Author URL: http://www.ianlunn.co.uk/
 Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 */

!function(a){var b=a(window),c=b.height();b.resize(function(){c=b.height()}),a.fn.parallax=function(d,e,f){function k(){var f=b.scrollTop();g.each(function(){var b=a(this),j=b.offset().top,k=h(b);j+k<f||j>f+c||g.css("backgroundPosition",d+" "+Math.round((i-f)*e)+"px")})}var h,i,g=a(this);g.each(function(){i=g.offset().top}),h=f?function(a){return a.outerHeight(!0)}:function(a){return a.height()},(arguments.length<1||null===d)&&(d="50%"),(arguments.length<2||null===e)&&(e=.1),(arguments.length<3||null===f)&&(f=!0),b.bind("scroll",k).resize(k),k()}}(jQuery);
!function(a){"use strict";function b(){f(),g(),h(),i()}function c(){}function d(){}function e(){}function f(){a("audio.mkd-blog-audio").mediaelementplayer({audioWidth:"100%"})}function g(){if(a(".mkd-blog-holder.mkd-blog-type-masonry").length){var b=a(".mkd-blog-holder.mkd-blog-type-masonry");b.waitForImages({finished:function(){b.isotope({itemSelector:"article",resizable:!1,masonry:{columnWidth:".mkd-blog-masonry-grid-sizer",gutter:".mkd-blog-masonry-grid-gutter"}}),setTimeout(function(){b.addClass("mkd-appeared"),b.isotope("layout")},400)},waitForAll:!0});var c=a(".mkd-filter-blog-holder");a(".mkd-filter").on("click",function(){var d=a(this),e=d.attr("data-filter");return c.find(".mkd-active").removeClass("mkd-active"),d.addClass("mkd-active"),b.isotope({filter:e}),!1})}}function h(){if(a(".mkd-blog-holder.mkd-blog-type-masonry").length){var b=a(".mkd-blog-holder.mkd-blog-type-masonry");if(b.hasClass("mkd-masonry-pagination-infinite-scroll")){var c=1;a(".mkd-blog-infinite-scroll-button a").appear(function(d){d.preventDefault();var e=a(".mkd-blog-infinite-scroll-button a"),f=e.attr("href"),g=".mkd-blog-infinite-scroll-button a",h=a(g).attr("href");e.css("visibility","visible"),e.text(mkdGlobalVars.vars.mkdMessage),a.get(f+"",function(d){var f=a(".mkd-masonry-pagination-infinite-scroll",d).wrapInner("").html();h=a(g,d).attr("href"),b.append(f).waitForImages(function(){mkd.modules.blog.mkdInitAudioPlayer(),mkd.modules.common.mkdSlickSlider(),mkd.modules.common.mkdFluidVideo(),b.isotope("reloadItems").isotope({sortBy:"original-order"}),a(".mkd-masonry-pagination-load-more").isotope("layout")}),e.parent().data("rel")>c?(e.attr("href",h),e.css("visibility","hidden")):(e.text(mkdGlobalVars.vars.mkdFinishedMessage),setTimeout(function(){e.parent().fadeOut(600,function(){e.parent().remove()})},600))}),c++},{one:!1,accX:0,accY:mkdGlobalVars.vars.mkdElementAppearAmount})}else if(b.hasClass("mkd-masonry-pagination-load-more")){var c=1;a(".mkd-blog-load-more-button a").on("click",function(d){d.preventDefault();var e=a(this),f=e.attr("href"),g=".mkd-blog-load-more-button a",h=a(g).attr("href");a.get(f+"",function(d){var f=a(".mkd-masonry-pagination-load-more",d).wrapInner("").html();h=a(g,d).attr("href"),b.append(f).isotope("reloadItems").isotope({sortBy:"original-order"}),mkd.modules.blog.mkdInitAudioPlayer(),mkd.modules.common.mkdSlickSlider(),mkd.modules.common.mkdFluidVideo(),setTimeout(function(){a(".mkd-masonry-pagination-load-more").isotope("layout")},400),e.parent().data("rel")>c?e.attr("href",h):e.parent().remove()}),c++})}}}function i(){var b=a(".mkd-blog-holder.mkd-blog-load-more:not(.mkd-blog-type-masonry)");b.length&&b.each(function(){var b,c,d=a(this),e=d.find(".mkd-load-more-ajax-pagination .mkd-btn");c=d.data("max-pages"),e.on("click",function(f){f.preventDefault(),f.stopPropagation();var g=j(d);if((b=g.nextPage)<=c){var h=k(g);a.ajax({type:"POST",data:h,url:MikadoAjaxUrl,success:function(c){b++,d.data("next-page",b);var e=a.parseJSON(c),f=e.html;d.waitForImages(function(){d.find("article:last").after(f),setTimeout(function(){mkd.modules.blog.mkdInitAudioPlayer(),mkd.modules.common.mkdOwlSlider(),mkd.modules.common.mkdFluidVideo()},400)})}})}b===c&&e.hide()})})}function j(a){var b={};return b.nextPage="",b.number="",b.category="",b.blogType="",b.archiveCategory="",b.archiveAuthor="",b.archiveTag="",b.archiveDay="",b.archiveMonth="",b.archiveYear="",void 0!==a.data("next-page")&&!1!==a.data("next-page")&&(b.nextPage=a.data("next-page")),void 0!==a.data("post-number")&&!1!==a.data("post-number")&&(b.number=a.data("post-number")),void 0!==a.data("category")&&!1!==a.data("category")&&(b.category=a.data("category")),void 0!==a.data("blog-type")&&!1!==a.data("blog-type")&&(b.blogType=a.data("blog-type")),void 0!==a.data("archive-category")&&!1!==a.data("archive-category")&&(b.archiveCategory=a.data("archive-category")),void 0!==a.data("archive-author")&&!1!==a.data("archive-author")&&(b.archiveAuthor=a.data("archive-author")),void 0!==a.data("archive-tag")&&!1!==a.data("archive-tag")&&(b.archiveTag=a.data("archive-tag")),void 0!==a.data("archive-day")&&!1!==a.data("archive-day")&&(b.archiveDay=a.data("archive-day")),void 0!==a.data("archive-month")&&!1!==a.data("archive-month")&&(b.archiveMonth=a.data("archive-month")),void 0!==a.data("archive-year")&&!1!==a.data("archive-year")&&(b.archiveYear=a.data("archive-year")),b}function k(a){return{action:"buro_mikado_blog_load_more",nextPage:a.nextPage,number:a.number,category:a.category,blogType:a.blogType,archiveCategory:a.archiveCategory,archiveAuthor:a.archiveAuthor,archiveTag:a.archiveTag,archiveDay:a.archiveDay,archiveMonth:a.archiveMonth,archiveYear:a.archiveYear}}var l={};mkd.modules.blog=l,l.mkdInitAudioPlayer=f,l.mkdOnDocumentReady=b,l.mkdOnWindowLoad=c,l.mkdOnWindowResize=d,l.mkdOnWindowScroll=e,a(document).ready(b),a(window).load(c),a(window).resize(d),a(window).scroll(e)}(jQuery);
function isInView(i){const n=$(i).offset().top-$(window).scrollTop(),o=$(i).height(),e=n>0&&n<o/2,r=n<=0&&n>-1*o;return e||r}$(window).scroll(function(){isInView($("#video-container"))?$(".navbar-sidebar").hide():$(".navbar-sidebar").show()});
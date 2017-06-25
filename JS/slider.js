'use strict';
$(function () {
    /*zmienne */
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    
    /* funkcja slide */
    function slide(newSlideIndex) {
        if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
            
            return;
        }
            var marginLeft = (newSlideIndex * (-100)) + '%';
        slideShow.animate({'margin-left': marginLeft}, 800, function(){slideIndex = newSlideIndex;
        });
    }
 
    
    /*szerokość kontenera */
slideShow.css('width', slideCount * 100 + "%");
    console.log(slideWidth);
    
    /*  szerokość i położenie pojedynczego slajdu */
    
    $('.single-slide').each(function(index) {
        $(this).css({'width': slideWidth +'%', 'margin-left': index * slideWidth + '%'});
    });
    
    /*kliknięcia w strzałki */
    $('.prev-slide').click(function() {
        
        slide(slideIndex - 1);
        
     });
        
    
    $('.next-slide').click(function() {
        
        slide(slideIndex + 1);
        
 
    });
    
    
});
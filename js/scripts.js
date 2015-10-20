$(function() {
    // Navigation Toggle for Tablet/Mobile
    $( ".navbar-toggle" ).click(function() {
        $( ".navmenu" ).toggleClass( "hide" );
        $(".menu-text").toggleClass("hide");
    });
    // End Navigation Toggle
    $('#datePicker').datepicker({

    });
    //Services Grid
    $('.home-service-grid').each(function(i, item) {
        console.log(i)
        $(this).addClass('grid-'+i);
        //var $item = $(item);
        //
        //if( $item.hasClass('specialprice') || $item.parents('.specialprice') )
        //{
        //    $item.addClass('strike');
        //}

    });

});/**
 * Created by Vinny on 9/30/2015.
 */

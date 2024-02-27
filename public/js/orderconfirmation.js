$(document).ready(function(){
    buildMap();
  });
  
  var sw = document.body.clientWidth,
      bp = 550,
      $map = $('.map');
  var static = "https://maps.google.com/maps/api/staticmap?center=40.440625,-79.995886&zoom=13&markers=40.440625,-79.995886&size=640x320&sensor=true";
  var embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30959.322872406767!2d-87.20820781614381!3d14.082173602311418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x8f6fa32750c2860f%3A0xf1c7c06bb342ffa7!2sKFC%2C%20Boulevard%20Morazan%2C%20Tegucigalpa!3m2!1d14.100625299999999!2d-87.1817825!4m5!1s0x8f6fbd234fcf88fb%3A0x6a5537e2901e06a7!2sLa%20Joya%2C%20Tegucigalpa!3m2!1d14.0650091!2d-87.1908905!5e0!3m2!1sen!2shn!4v1702442023447!5m2!1sen!2shn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  
  function buildMap() {
    if(sw>bp) { //If Large Screen
        if($('.map-container').length < 1) { //If map doesn't already exist
          buildEmbed();
        }
    } else {
        if($('.static-img').length < 1) { //If static image doesn't exist
          buildStatic();
        }
    }
  };
  
  function buildEmbed() { //Build iframe view
      $('<div class="map-container"/>').html(embed).prependTo($map);
  };
    
  function buildStatic() { //Build static map
     var mapLink = $('.map-link').attr('href'),
         $img = $('<img class="static-img" />').attr('src',static);
     $('<a/>').attr('href',mapLink).html($img).prependTo($map); 
  }
  
  $(window).resize(function() {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
  });
     
  
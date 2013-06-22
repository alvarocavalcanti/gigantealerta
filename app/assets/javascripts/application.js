// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function(){
    var map;
    function setupMap() {
      if (navigator.geolocation) {
          map= navigator.geolocation.getCurrentPosition(initialize);
        } else {
          alert("Geolocation not available");
        }
      }   

    function initialize(position) {
        var mapOptions = {
            center: new google.maps.LatLng(position.coords.latitude,  position.coords.longitude),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        marker = new google.maps.Marker( { position: mapOptions.center, map: map, title: "You are here" });    
        return map     
    }

    function updateMap(points){
        var i;
        for (i=0; i<points.length; i++){
            marker = new google.maps.Marker({ position: new google.maps.LatLng(points.latitude,  pooints.longitude), map: map});
        }
    }
    
    google.maps.event.addDomListener(window, 'load', setupMap);
});

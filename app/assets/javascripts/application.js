
$(function(){
    var map;
    function setupMap() {
      if (navigator.geolocation) {
          map = navigator.geolocation.getCurrentPosition(initialize);
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
        load_markers();
    }
    
    function load_markers () {
        $.getJSON("/markers.json", function(data){
            $.each(data, function(){
                new google.maps.Marker({ position: new google.maps.LatLng(this.latitude,  this.longitude), map: map})
            });
        })
    }
    
    google.maps.event.addDomListener(window, 'load', setupMap);
});



var marker;

function siteMap() {
    var map = new google.maps.Map(document.getElementById('mapping'), {
        zoom: 20,
        center: { lat: 20.852843, lng: 79.859965 },
        mapTypeId: 'satellite'
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 20.852843, lng: 79.859965 }
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
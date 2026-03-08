
$(".nav a").click(function (e) {
    var _left = parseInt($($(this).attr("href")).position().left);
    $(".content-scroller").animate({ scrollLeft: _left }, 1000, 'easeInOutExpo', function () { });
});
$(".mobile-nav a").click(function (e) {
    var _top = parseInt($($(this).attr("href")).position().top);
    $(".content-scroller").animate({ scrollTop: _top }, 1000, 'easeInOutExpo', function () { });
});


var _svgEle = document.getElementsByTagName('svg');
if (document.getElementById("skill").clientWidth <= 832) {
    $('.box').css('width', '330px');                
    for (let _svg of _svgEle) {

        var _children = _svg.children;

        for (let _line of _children) {

            switch (_line.getAttribute("class")) {
                case "top":
                    _line.x1.baseVal.value = 0;
                    _line.y1.baseVal.value = 0;
                    _line.x2.baseVal.value = 1200;
                    _line.y2.baseVal.value = 0;
                    break;
                case "left":
                    _line.x1.baseVal.value = 0;
                    _line.y1.baseVal.value = 200;
                    _line.x2.baseVal.value = 0;
                    _line.y2.baseVal.value = -424;
                    break;
                case "bottom":
                    _line.x1.baseVal.value = 350;
                    _line.y1.baseVal.value = 200;
                    _line.x2.baseVal.value = -700;
                    _line.y2.baseVal.value = 200;
                    break;
                case "right":
                    _line.x1.baseVal.value = 330;
                    _line.y1.baseVal.value = 0;
                    _line.x2.baseVal.value = 330;
                    _line.y2.baseVal.value = 624;
                    break;
                default:
                    break;
            }
        }

    }
}
else {
    $('.box').css('width', '330px');
    for (let _svg of _svgEle) {

        var _children = _svg.children;

        for (let _line of _children) {

            switch (_line.getAttribute("class")) {
                case "top":
                    _line.x1.baseVal.value = 0;
                    _line.y1.baseVal.value = 0;
                    _line.x2.baseVal.value = 1030;
                    _line.y2.baseVal.value = 0;
                    break;
                case "left":
                    _line.x1.baseVal.value = 0;
                    _line.y1.baseVal.value = 200;
                    _line.x2.baseVal.value = 0;
                    _line.y2.baseVal.value = -424;
                    break;
                case "bottom":
                    _line.x1.baseVal.value = 330;
                    _line.y1.baseVal.value = 200;
                    _line.x2.baseVal.value = -700;
                    _line.y2.baseVal.value = 200;
                    break;
                case "right":
                    _line.x1.baseVal.value = 330;
                    _line.y1.baseVal.value = 0;
                    _line.x2.baseVal.value = 330;
                    _line.y2.baseVal.value = 624;
                    break;
                default:
                    break;
            }
        }

    }
}

var _content = document.getElementsByClassName("content");
if (_content[0].clientWidth <= 727) 
    document.getElementById("mapping").style.width = "100%";
else 
    document.getElementById("mapping").style.width = "50%";

$(document).ready(function () {
    if (window.innerWidth > 920) {
        var _contents = $(".content");
        let x = 0, _windowHeight = window.innerHeight;
        for(let _content of _contents) {
            if (_content.clientHeight > _windowHeight) {
                _contents.eq(x).addClass("scroll");
                let perc = (_content.clientHeight / _windowHeight) * 100 + '%';
                _contents.eq(x).css('height', perc)
            }

            x++;
        }
    } 
});



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
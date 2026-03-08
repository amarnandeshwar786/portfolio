
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


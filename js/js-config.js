$(document).ready(function () {
    $("#scroll-btn, .header-list-item").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.gallery-item').on({
        'mouseover': function () {
            var hoverElement = $(this).find('.gallery-substrate');
            hoverElement.toggleClass('show')
        },
        'mouseout': function () {
            var hoverElement = $(this).find('.gallery-substrate');
            hoverElement.toggleClass('show')
        }
    });

    var NavTop = $('#stickyHeader').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > NavTop ) {
            $('#stickyHeader').css({position: 'fixed', top: '0px', margin: '0 auto', zIndex:'1001', width:'100%'});
        } else {
            $('#stickyHeader').css({position: 'static'});
        }
    });

});
var elem = document.getElementById("select-slider").childNodes,
    count = 0,
    args = Array.prototype.slice.call(elem);
function getElemts(element) {
    return element.classList !== undefined
}
var arrayElements = args.filter(getElemts),
    l = arrayElements.length;
function pushElement(itemDirection) {
    if (itemDirection === 1) {
        if (count == l - 1) {
            arrayElements[count].classList.remove('show');
            count = 0;
            arrayElements[count].classList.add('show');
        }
        else {
            arrayElements[count].classList.remove('show');
            arrayElements[count + itemDirection].classList.add('show');
            count += 1
        }
    }
    if (itemDirection === -1) {
        if (count == 0) {
            arrayElements[count].classList.remove('show');
            count = l - 1;
            arrayElements[count].classList.add('show');
        }
        else {
            arrayElements[count].classList.remove('show');
            arrayElements[count + itemDirection].classList.add('show');
            count -= 1
        }
    }
}
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

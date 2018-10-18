$(document).ready(function() {

    // MAKE THE WORLD SPIN
    var worldElement = $('.world')[0],
        worldImages = [
            'images/kucuk_prens.jpg'
        ],
        currentImageIndex = 0;

    setInterval(spinWorld, 0);

    function spinWorld() {
        currentImageIndex ++;

        if (currentImageIndex === worldImages.length) {
            currentImageIndex = 0;
        }

        worldElement.setAttribute('src', worldImages[currentImageIndex]);
    }

});

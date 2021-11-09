$(document).ready(function () {
    // Animated on Scroll
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true
        })
    }
    aos_init()
})

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
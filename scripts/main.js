$(document).ready(function () {
    // ========== Animated on Scroll ==========
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: true
        })
    }
    aos_init()

    // ========== Auto typed ==========
    $(".typed").typed({
        strings: ["Pendaftaran Media Secara Online", "Sebagai Jembatan Antara Pemerintah Kabupaten dengan Media Massa", "Mengoptimalkan Proses Bisnis Kerjasama yang Mudah dan Efisien","Media Cetak, Media Online, Media Televisi, dan Media Radio"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 15,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 15,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });
})

// ========== Modal bs ==========
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
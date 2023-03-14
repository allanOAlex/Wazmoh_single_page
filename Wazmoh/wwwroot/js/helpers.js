const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


$(document).ready(function () {
    // Smooth scroll to section when a navlink is clicked
    $('a.scroll-link').click(function (event) {
        event.preventDefault();
        var sectionId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top
        }, 1000);
    });
});

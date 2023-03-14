

var links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        
        var target = document.querySelector(link.getAttribute('href'));
        if (target) {
            var sections = document.querySelectorAll('.animated-section');
            sections.forEach(function (section) {
                section.classList.remove('active');
            });

            target.classList.add('active');

            var animation = link.dataset.animation;
            if (animation) {
                target.classList.add(animation);
            }
            
            window.scrollTo(0, 0);

        }
    });
});













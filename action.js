var header = document.querySelector('header');
var fixedHeader = document.querySelector('#fixed-header');
var placeholder = document.querySelector('.header-placeholder');
var body = document.querySelector('body')

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
        header.classList.add('scroll')
        fixedHeader.classList.add('scroll');
        body.classList.add('scroll');
        placeholder.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
        fixedHeader.classList.remove('scroll');
        body.classList.remove('scroll')
        placeholder.classList.remove('scroll')
    }
});

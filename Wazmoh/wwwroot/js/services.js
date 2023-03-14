const epxandableHeader = document.querySelector('.expandable-header');
const epxandableContent = document.querySelector('.expandable-content');

epxandableHeader.addEventListener('click', function () {
    epxandableContent.style.display = epxandableContent.style.display === 'none' ? 'block' : 'none';
});

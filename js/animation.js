
document.querySelector('.backgtound-main img').style.opacity = 1;
document.querySelector('.section-1').style.opacity = 1;

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('showed');
        }
    })
}
let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = [
    document.querySelector('.section-2>div:first-child'),
    document.querySelector('#work-1'),
    document.querySelector('#work-2'),
    document.querySelector('#work-3'),
    document.querySelector('#work-4'),
    document.querySelector('.section-3'),
    document.querySelector('.cost h1'),
    document.querySelector('.cost__content'),
    document.querySelector('.steps h1'),
    document.querySelector('.step-1'),
    document.querySelector('.step-2'),
    document.querySelector('.step-3'),
    document.querySelector('.step-4'),
    document.querySelector('.step-5'),
    document.querySelector('.step-6'),
    document.querySelector('.contacts'),
];

for (let elm of elements) {
    observer.observe(elm);
}
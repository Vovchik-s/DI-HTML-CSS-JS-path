const tableSvg = document.querySelector('#Tablet')

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation')
        }
    })
});

observer.observe(document.querySelector('tableSvg'));


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const tablet = entry.target.querySelector('#Tablet');

        if (entry.isIntersecting) {
            tablet.classList.add('animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('animation');
    });
});

observer.observe(document.querySelector('.about-container--svg'));
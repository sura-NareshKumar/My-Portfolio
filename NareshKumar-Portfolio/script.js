// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const prevButton = document.querySelector('.project-nav.prev');
const nextButton = document.querySelector('.project-nav.next');
const projectsWrapper = document.querySelector('.projects-row');
const projectBoxes = document.querySelectorAll('.project-box');
const projectCount = projectBoxes.length;
const boxWidth = projectBoxes[0].offsetWidth + 20; // Width of each box + margin
const visibleItems = 3; // Number of visible items at a time

let currentIndex = 0;

function updateButtons() {
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex >= projectCount - visibleItems ? 'none' : 'block';
}

function showNext() {
    if (currentIndex < projectCount - visibleItems) {
        currentIndex++;
        projectsWrapper.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
        updateButtons();
    }
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        projectsWrapper.style.transform = `translateX(-${currentIndex * boxWidth}px)`;
        updateButtons();
    }
}

prevButton.addEventListener('click', showPrev);
nextButton.addEventListener('click', showNext);

// Initialize button visibility
updateButtons();

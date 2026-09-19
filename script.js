const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section[id]");


// =========================
// MOBILE MENU
// =========================

menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menu.innerHTML = "<i class='bx bx-x'></i>";
    } else {
        menu.innerHTML = "<i class='bx bx-menu'></i>";
    }

});

// =========================
// ACTIVE NAV ON SCROLL
// =========================

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);

// Run immediately when page loads
updateActiveLink();


const projectsTrack = document.querySelector(".projects-track");
const projectCards = document.querySelectorAll(".project-card");

const projectPrev = document.getElementById("projectPrev");
const projectNext = document.getElementById("projectNext");
const projectCurrent = document.getElementById("projectCurrent");

let projectIndex = 0;


function updateProjects() {

    const cardWidth = projectCards[0].offsetWidth;
    const gap = 24;

    projectsTrack.style.transform =
        `translateX(-${projectIndex * (cardWidth + gap)}px)`;

    projectCurrent.textContent =
        String(projectIndex + 1).padStart(2, "0");
}


projectNext.addEventListener("click", () => {

    if (projectIndex < projectCards.length - 3) {

        projectIndex++;

        updateProjects();

    }

});


projectPrev.addEventListener("click", () => {

    if (projectIndex > 0) {

        projectIndex--;

        updateProjects();

    }

});


window.addEventListener("resize", updateProjects);

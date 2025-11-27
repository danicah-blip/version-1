document.querySelector(".logo img").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const navLinks = document.querySelectorAll(".nav a");
const headerHeight = document.querySelector(".header").offsetHeight;

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        const targetPosition = target.offsetTop - headerHeight - 10;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 20;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const button = document.getElementById('to-munebtn');

button.addEventListener('click', () =>{
    window.location.href = 'menu-side.html';
})

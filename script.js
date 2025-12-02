/*Logo header button logic*/
document.querySelector(".logo img").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/*Logo header button logic*/


/*Smooth scroll logic*/
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
/*Smooth scroll logic*/


/*To menu button logic*/
const button = document.getElementById('to-munebtn');

button.addEventListener('click', () =>{
    window.location.href = 'menu-side.html';
})
/*To menu button logic*/


/*Map button logic*/
const mapbutton = document.getElementById('mapb');

mapbutton.addEventListener('click', () =>{

    window.location.href='https://www.google.com/maps/place/Bogchi+Kusina/@14.1244082,120.9028387,388m/data=!3m1!1e3!4m6!3m5!1s0x33bd9d003ee95127:0x5d5045670da7978!8m2!3d14.1242935!4d120.9034258!16s%2Fg%2F11y371m1dq!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D';
})  
/*Map button logic*/
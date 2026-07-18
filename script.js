const links = document.querySelectorAll("nav a");

links.forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

        navLinks.classList.remove("active");

        menu.innerHTML="<i class='bx bx-menu'></i>";

    });

});


const menu=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menu.innerHTML="<i class='bx bx-x'></i>";

    }

    else{

        menu.innerHTML="<i class='bx bx-menu'></i>";

    }

});


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
/*======================
      THEME
=======================*/

const themeToggle =
document.getElementById("theme-toggle");

const themeIcon =
themeToggle.querySelector("i");

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light");

    themeIcon.className="bx bx-moon";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeIcon.className="bx bx-moon";

        localStorage.setItem("theme","light");

    }

    else{

        themeIcon.className="bx bx-sun";

        localStorage.setItem("theme","dark");

    }

});

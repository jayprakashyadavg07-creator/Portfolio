// EMAILJS INIT (PUT YOUR KEY)
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

// MENU
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>navbar.classList.toggle('active');

// THEME
document.getElementById("theme-toggle").onclick=()=>{
  document.body.classList.toggle("light");
};

// ACTIVE NAV
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('.navbar a');

window.onscroll=()=>{
  sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if(top>=offset && top<offset+height){
      navLinks.forEach(links=>links.classList.remove('active'));
      document.querySelector('.navbar a[href*='+id+']').classList.add('active');
    }
  });
};

// TYPED
new Typed(".multiple-text",{
  strings:["Full Stack Developer","Frontend Expert","UI Designer"],
  typeSpeed:100,backSpeed:100,backDelay:1000,loop:true
});

// MODAL
function openModal(){document.getElementById("projectModal").style.display="block";}
document.querySelector(".close-btn").onclick=()=>document.getElementById("projectModal").style.display="none";

// EMAIL SEND
document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
  .then(()=>alert("Message sent successfully!"));
});

// PARTICLES
particlesJS("particles-js",{particles:{number:{value:80},size:{value:3},move:{speed:2},line_linked:{enable:true}}});

// SCROLL REVEAL
ScrollReveal({distance:'80px',duration:2000,delay:200});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-box,.portfolio-box',{origin:'bottom'});
/* =========================================================
   SKILLS ANIMATION ON SCROLL
========================================================= */

function animateSkills(){
  document.querySelectorAll(".skill-bar").forEach(bar=>{
    const progress = bar.querySelector(".progress");
    const width = bar.getAttribute("data-width");
    progress.style.width = width;
  });

  document.querySelectorAll(".circle").forEach(circle=>{
    const percent = circle.getAttribute("data-percent");
    circle.style.background =
      `radial-gradient(closest-side,#020617 79%,transparent 80%),
       conic-gradient(var(--main-color) ${percent}%, #0a0f1f 0)`;
  });
}

window.addEventListener("scroll", ()=>{
  const skillsSection = document.querySelector(".skills");
  const position = skillsSection.getBoundingClientRect().top;

  if(position < window.innerHeight - 100){
    animateSkills();
  }
});
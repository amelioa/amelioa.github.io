let typeahead = document.getElementById("typeahead");

let typeaheadContent = [
    "|",
    "G|",
    "Gr|",
    "Gra|",
    "Grap|",
    "Graph|",
    "Graphi|",
    "Graphic|",
    "Graphic |",
    "Graphic D|",
    "Graphic De|",
    "Graphic Des|",
    "Graphic Desi|",
    "Graphic Desig|",
    "Graphic Design|",
    "Graphic Designe|",
    "Graphic Designer|",
    "Graphic Designer|",
    "Graphic Designer|",
    "Graphic Designer",
    "Graphic Designer|",
    "Graphic Designe|",
    "Graphic Design|",
    "Graphic Desig|",
    "Graphic Desi|",
    "Graphic Des|",
    "Graphic De|",
    "Graphic D|",
    "Graphic |",
    "Graphic|",
    "Graphi|",
    "Graph|",
    "Grap|",
    "Gra|",
    "Gr|",
    "G|",
    "|",
    "W|",
    "We|",
    "Web|",
    "Web |",
    "Web D|",
    "Web De|",
    "Web Dev|",
    "Web Deve|",
    "Web Devel|",
    "Web Develop|",
    "Web Develope|",
    "Web Developer|",
    "Web Developer|",
    "Web Developer|",
    "Web Developer",
    "Web Developer|",
    "Web Develope|",
    "Web Develop|",
    "Web Devel|",
    "Web Deve|",
    "Web Dev|",
    "Web D|",
    "Web |",
    "Web|",
    "We|",
    "W|",
    "|",
    "S|",
    "St|",
    "Stu|",
    "Stud|",
    "Stude|",
    "Studen|",
    "Student|",
    "Student|",
    "Student|",
    "Student",
    "Student|",
    "Studen|",
    "Stude|",
    "Stud|",
    "Stu|",
    "St|",
    "S|",
    "|",
    "C|",
    "Cr|",
    "Cre|",
    "Crea|",
    "Creat|",
    "Creati|",
    "Creativ|",
    "Creative|",
    "Creative|",
    "Creative|",
    "Creative",
    "Creative|",
    "Creativ|",
    "Creati|",
    "Creat|",
    "Crea|",
    "Cre|",
    "Cr|",
    "C|",
    "|",
];

let typeaheadIndex = 0;

function displayTypeahead() {
    let currentString = typeaheadContent[typeaheadIndex];

    typeahead.innerHTML = currentString;

    typeaheadIndex++;
    if (typeaheadIndex >= typeaheadContent.length) {
        typeaheadIndex = 0;
    }
}

setInterval(displayTypeahead, 100);

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 200,
  reset: false
});

sr.reveal('#about_me_portrait', {origin: 'left'});
sr.reveal('#about_me_text', {origin: 'right'});
sr.reveal('.services_container', {origin: 'top'});
sr.reveal('.skills_content:nth-child(1) h3', {origin: 'left'});
sr.reveal('.skills_content:nth-child(1) .skills_data', {origin: 'left', interval: 150});
sr.reveal('.skills_content:nth-child(2) h3', {origin: 'right'});
sr.reveal('.skills_content:nth-child(2) .skills_data', {origin: 'right', interval: 150});
sr.reveal('.projects_container .projects_cards', {delay: 150, origin: 'bottom', interval: 150});

const skillsDataElements = document.querySelectorAll('.skills_content:nth-child(2) .skills_data');

// Calculate the delays for reversed animation
let delay = 150 * (skillsDataElements.length - 1);
skillsDataElements.forEach(element => {
  sr.reveal(element, { origin: 'right', delay: delay });
  delay -= 300; // Decrease delay for each element
});

let hamburgerButton = document.getElementById("hamburger");
let closeButton = document.getElementById("close");
let mobileNav = document.getElementById("mobile_nav");

hamburgerButton.onclick = function(){
    mobileNav.classList.add("active");
};

closeButton.onclick = function(){
    mobileNav.classList.remove("active");
};
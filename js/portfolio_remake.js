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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.closest('#GD_skill')) {
        entry.target.classList.add('show');
      } else if (entry.target.closest('#WD_skill')) {
        entry.target.classList.add('show');
      } else if (entry.target.classList.contains('hidden-up')) {
        entry.target.classList.add('show');
      } else if (entry.target.classList.contains('hidden-down')) {
        entry.target.classList.add('show');
      }
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElementsLeftGD = document.querySelectorAll('#GD_skill .hidden-left');
hiddenElementsLeftGD.forEach((el) => observer.observe(el));

const hiddenElementsLeftWD = document.querySelectorAll('#WD_skill .hidden-left');
hiddenElementsLeftWD.forEach((el) => observer.observe(el));

const hiddenElementsTop = document.querySelectorAll('.hidden-up');
hiddenElementsTop.forEach((el) => observer.observe(el));

const hiddenElementsBottom = document.querySelectorAll('.hidden-down');
hiddenElementsBottom.forEach((el) => observer.observe(el));

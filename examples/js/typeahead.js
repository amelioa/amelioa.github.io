let typeahead = document.getElementById("typeahead");

let typeaheadContent = [
    "",
    "|",
    "H|",
    "He|",
    "Hel|",
    "Hell|",
    "Hello|",
    "Hello |",
    "Hello w|",
    "Hello wo|",
    "Hello wor|",
    "Hello worl|",
    "Hello world|",
    "Hello world",
    "Hello world|",
    "Hello worl|",
    "Hello wor|",
    "Hello wo|",
    "Hello w|",
    "Hello |",
    "Hello|",
    "Hell|",
    "Hel|",
    "He|",
    "H|",
    "|",
    ""
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

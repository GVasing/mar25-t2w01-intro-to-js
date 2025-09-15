console.log("domstuff.js has loaded.");

function paragraphTagUpdater(){
    // 1. Find 'p' tag
    let targetPTag = document.querySelector("p");

    console.log(targetPTag);

    // 2. Update text of 'p' tag

    // innerHTML parses the string as valid HTML
    // targetPTag.innerHTML = "<h1>Some cool message here.</h1>";

    // innerText does no HTML parsing, just treats the string as a string.
    targetPTag.innerText = "<h1>Some cool message here.</h1>";

}

paragraphTagUpdater();


// Breakfast menu renderer.

let breakfastMenuItems = [
    "pancakes",
    "blueberry pancakes",
    "bacon and eggs",
    "omlette",
    "avo smash"
];

function breakfastRenderer () {
    // 1. Render the breakfast menu container
    // 1a. Find the menu container parent element
    let targetParentContainer = document.querySelector("body");

    // 1b. Create the menu container element
    let menuContainer = document.createElement("section");
    console.log(menuContainer);
    menuContainer.id = "breakfastmenu";

    // 1c. Append the menu container element to the parent container element
    targetParentContainer.appendChild(menuContainer);

    // 2. Create menu options


    // 3. Insert menu options into breakfast menu container
}

breakfastRenderer();
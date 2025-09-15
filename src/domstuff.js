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
    // for loop style
    // for (let index = 0; index < breakfastMenuItems.length; index++) {
    //     const individualMenuItem = breakfastMenuItems[index];
    //     console.log(individualMenuItem)        
    // };

    // forOf style
    // for (const individualMenuItem of breakfastMenuItems) {
    //     console.log(individualMenuItem)
    // };

    // forIn style
    // for (const key in breakfastMenuItems) {
    //     // if (!Object.hasOwn(object, key)) continue;
    //     const element = breakfastMenuItems[key];   
    //     console.log(key, element);
    // }

    // forEach style
    // breakfastMenuItems.forEach(individualMenuItem => {
    //     console.log(individualMenuItem);
    //     let menuItemCard = document.createElement("section");
    //     menuItemCard.className = "menuItem";
    //     let menuItemTitle = document.createElement("h2")
    //     menuItemTitle.innerText = individualMenuItem;
    //     menuItemCard.appendChild(menuItemTitle);

        // searching the page for content is slow.  Try to avoid.
        // let menuContainer = document.getElementById("breakfastmenu");
    //     menuContainer.appendChild(menuItemCard);
    // });

    // map style
    let menuItemCards = breakfastMenuItems.map(individualMenuItem => {
        console.log(individualMenuItem);

        let menuItemCard = document.createElement("section");
        menuItemCard.className = "menuItem";
        let menuItemTitle = document.createElement("h2")
        menuItemTitle.innerText = individualMenuItem;
        menuItemCard.appendChild(menuItemTitle);

        return menuItemCard;
    });

    // 3. Insert menu options into breakfast menu container
    if (menuItemCards.length != 0) {
        menuContainer.append(...menuItemCards);
    };
    
}

breakfastRenderer();
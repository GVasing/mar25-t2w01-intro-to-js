console.log("domstuff.js has loaded.");

/** 
 * This function finds and updates the text of a paragraph tag on the webpage.
 * 
 * `The new text will be a message here`
*/
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
/**
 * Will render a list of menu items as HTML on a web page.
 * 
 * @param {string[]} targetMenuList Array of strings where each string is one menu item.
 * 
 * @example <caption>How to use the 'breakfastRenderer'</caption>
 * 
 * breakfastRenderer(['bananas', 'yoghurt'])
 */
function breakfastRenderer (targetMenuList = breakfastMenuItems) {

    // 0. Delete existing menu content
    let existingMenu = document.getElementById("breakfastmenu");
    if (existingMenu){
        existingMenu.remove();
    }

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
    let menuItemCards = targetMenuList.map(individualMenuItem => {
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
 
// breakfastRenderer();

let menuToggleButton = document.getElementById("menuToggleButton");
menuToggleButton.addEventListener("click", (event) => breakfastRenderer(breakfastMenuItems));
// OR if no default value in parent funciton argument
// menuToggleButton.addEventListener("click", () => breakfastRenderer(breakfastMenuItems));

let menuFilterField = document.getElementById("menuSearchField");
menuFilterField.addEventListener("change", (event) => {
    console.log("search field has changed.");
    console.log(event.target.value);

    let userSearchTerm = event.target.value;

    // Potential way to filter menu HTML content
    // 1. Find menu content on page
    // 2. Find innerText or Class name of each item in the found menu content
    // 3. Remove elements that do not have matching innerText
    // This way is good because it does not lean on existing array data

    // If existing array is available to this function.  We can do:
    // 1. Check if search term is in array
    // 2. Clear out the rendered menu content
    // 3. Call the menu renderer with a new filtered array
    let matchingItems = breakfastMenuItems.filter((individualItem) => {
        // if (individualItem.includes(userSearchTerm)){
        //     return individualItem;
        // }

        // OR

        return individualItem.includes(userSearchTerm);
    });
    console.log(matchingItems);

    breakfastRenderer(matchingItems);
})
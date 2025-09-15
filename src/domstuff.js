console.log("domstuff.js has loaded.");

function paragraphTagUpdater(){
    // 1. Find 'p' tag
    let targetPTag = document.querySelector("p");

    console.log(targetPTag);

    // 2. Update text of 'p' tag

    // innerHTML parses the string as valid HTML
    targetPTag.innerHTML = "<h1>Some cool message here.</h1>";

    // innerText does no HTML parsing, just treats the string as a string.
    // targetPTag.innerText = "<h1>Some cool message here.</h1>";

}

paragraphTagUpdater();
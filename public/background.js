import agarrarTweets from "../src/content-scripts/agarrarTweets.js"

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && (changeInfo.url.includes("google.com") ||changeInfo.url.includes("chrome://extensions/") )) {
        agarrarTweets();
        console.log("hola");
    }

    chrome.scripting.executeScript({
        target: {tabId: tabId},
        func: () => {
            alert('La suma es: ' + (2 + 3));
        }
    });
});

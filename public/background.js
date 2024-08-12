import agarrarTweets from "../src/content-scripts/agarrarTweets.js"

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("x.com")) {
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

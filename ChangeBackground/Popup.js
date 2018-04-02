window.onload = function () {
    chrome.tabs.executeScript(null, {
        code: "document.body.style.backgroundImage='url(https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)'"
    })
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

	var hour = new Date().getHours();
	var superCode = "document.getElementsByClassName('nightmode-toggle')[0].click();";
	var executiveCode = superCode;
	if(hour >= 7 && hour <= 19){
		executiveCode = 'if(window.getComputedStyle(document.body, null).getPropertyValue("background-color") != "rgb(230, 236, 240)") { ' + superCode + ' }';	
/*	    chrome.browserAction.setIcon({
            path: { "256": "logo_day_256.png" }
        });*/
	} else {
		executiveCode = 'if(window.getComputedStyle(document.body, null).getPropertyValue("background-color") != "rgb(20, 29, 38)") { ' + superCode + ' }';
/*		chrome.browserAction.setIcon({
            path: { "256": "logo_night_256.png" }
        });*/
	}
	
	chrome.tabs.executeScript(null, {code: executiveCode});

});
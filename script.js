chrome.webNavigation.onCompleted.addListener(function(details) {
	chrome.browserAction.getBadgeText({tabId: details.tabId}, function(result) {
		console.log('badge: ',result);
		if(result!='') {
			chrome.tabs.executeScript(null,{code:"toggleRTLPresence(true)"},function(results){
				chrome.browserAction.setBadgeText ( { text: results[0] ||  ""} );
			});
		}
	});
});/*
	chrome.tabs.executeScript(details.tabId, {
		code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
		'     alert("Cat not found!");' +
		' }'
	});
}, {
	url: [{
		// Runs on example.com, example.net, but also example.foo.com
		hostContains: '.example.'
	},
*/

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null,{code:"toggleRTLPresence()"},function(results){
		chrome.browserAction.setBadgeText ( { text: results[0] ||  ""} );
	});
});
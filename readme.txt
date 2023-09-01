please check another project on extension to get more information 
youtube channel -: The Coding Train


line no -: 7 "matechs[]" tell the browser on which website extension should be work or not ,  we can also give website url instead of this "<all_urls>" 

without background file user need to reload page to enable extension,
in menifest file , only have one "background" file that contain functionality of extention like-: what will happen when user click on extension

after add background file , it will be appear on extension "inspect views "fileName" "

in background.js , line No-:1  "chrome.browserAction.onClicked.addListener(funtion_call);"   it will be Fired when a browser action icon is clicked

in background.js , line No-:7 " chrome.tabs.sendMessage(tab.id,msg)" Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. 
                                The "chrome.runtime.onMessage" event is fired in each content script running in the specified tab for the current extension.

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse){
    console.log(message.txt)
   if(message.txt === "hello"){
    let paragraph = document.querySelectorAll('p');
    
    let color = ["red","pink","yellow","purple","blue","orange","brown"]

    let random = Math.floor(Math.random()*color.length)
    
    for(p of paragraph){
        p.style.backgroundColor=`${color[random]}`;
    }
   }    
}

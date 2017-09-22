function genericOnClick(info, tab) {
  chrome.tabs.sendMessage(tab.id, info.selectionText);
}


var title = "Saebiz!";
var id = chrome.contextMenus.create({"title": title, "contexts":["selection"], "onclick": genericOnClick});






// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

//   if (changeInfo.status === 'complete') {

//     chrome.tabs.sendMessage(tabId, {
//       message: ''
//     });
//   }
// });

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, {
    message: 'togglePasswordFields'
  });
});


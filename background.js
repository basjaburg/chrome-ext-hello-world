chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: exampleFunction
    });
  });
  
  function exampleFunction() {
    alert('Hello from the background!');
  }
  
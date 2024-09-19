const appUrl = "http://localhost:3000";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "getSession") {
    fetch(`${appUrl}/api/auth/session`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retreive session data");
        }
      })
      .then((session) => {
        sendResponse(session);
      })
      .catch((error) => {
        console.error(error);
      });
    return true;
  }
});

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.createNewTab) {
    chrome.tabs.update(sender.tab.id, { url: message.url });
  }
});

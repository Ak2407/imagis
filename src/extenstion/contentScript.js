const appUrl = "http://localhost:3000";

window.onload = function () {
  const observer = new MutationObserver(() => {
    const toolbar = document.querySelector('[data-testid="toolBar"]');

    if (
      toolbar &&
      !document.getElementById("autofill-button") &&
      toolbar.innerText.includes("Reply")
    ) {
      const autofillButton = document.createElement("button");
      const sparkleSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wand-sparkles"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>
      `;

      autofillButton.innerHTML = sparkleSVG;
      autofillButton.id = "autofill-button";
      autofillButton.style.cssText = `
        margin-top: 8px;
        background: transparent;
        border: none;
        margin-left: 8px;
        border-radius: 9999px;
        padding: 10px 10px;
        font-weight: bold;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
      `;
      autofillButton.addEventListener("click", autofillReply);

      // Insert the button into the toolbar
      toolbar.insertBefore(autofillButton, toolbar.secondChild);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

async function autofillReply() {
  const autofillButton = document.getElementById("autofill-button");

  autofillButton.disabled = true;
  autofillButton.style.filter = "grayscale(100%) opacity(0.5)";

  try {
    const tweetContent = document.querySelector('div[data-testid="tweetText"]');
    const replyBox = document.querySelector(
      'div[data-testid="tweetTextarea_0"]',
    );

    if (tweetContent && replyBox) {
      chrome.runtime.sendMessage({ type: "getSession" }, async (session) => {
        if (session) {
          const tweetContentText = tweetContent.innerText;

          const response = await fetch(`${appUrl}/api/reply`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tweet: tweetContentText }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const aiReply = await response.text();
          replyBox.focus();
          document.execCommand("insertText", false, aiReply);
        } else {
          autofillButton.addEventListener("click", () => {
            chrome.runtime.sendMessage({
              createNewTab: true,
              url: `${appUrl}/auth/signup?next=${encodeURIComponent(window.location.href)}`,
            });
          });
          console.log("No session found.");
        }
      });
    } else {
      console.error("Failed to find reply box or tweet content.");
    }
  } catch (error) {
    console.error("Error in autofillReply:", error);
  } finally {
    autofillButton.disabled = false;
    autofillButton.style.filter = "";
  }
}

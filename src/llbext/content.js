(() => {
  const text = document.body.innerText.slice(0, 500); // small sample
  chrome.runtime.sendMessage({ pageSummary: text });
})();

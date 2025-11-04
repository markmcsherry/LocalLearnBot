chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const visit = {
      url: tab.url,
      title: tab.title,
      time: new Date().toISOString()
    };

    // Save to local storage
    const { history = [] } = await chrome.storage.local.get('history');
    history.push(visit);
    await chrome.storage.local.set({ history });
  }
});

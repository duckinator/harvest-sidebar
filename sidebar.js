function updateSidebar() {
    var currentTab = browser.tabs.getCurrent();
    var currentUrl = currentTab.url;
    var urlParts = url.split("/");
    var itemId;

    // If it's not an issue or PR, don't do anything.
    if (urlParts[5] == "issues" || urlParts[5] == "pulls") {
        // <user>/<repo>/<issue or pull>/<issue or pr number>
        itemId = urlParts.slice(3, 7).join("/");
    } else {
        // 
        itemId = urlParts.slice(3, 5).join("/");
    }

    var externalItemId = encodeURIComponent(itemId);
    var externalItemName = encodeURIComponent(currentTab.title);
    var permalink = encodeURIComponent(currentUrl);

    var url = "https://platform.harvestapp.com/platform/timer?external_item_id=how-is%2Fhow_is%23227&external_item_name=%23227%3A%20resolve%20codeclimate%20issues&permalink=https%3A%2F%2Fgithub.com%2Fhow-is%2Fhow_is%2Fissues%2F227&closeable=false&default_project_code=HowIs&default_project_code=HowIs";
    var url = "https://platform.harvestapp.com/platform/timer?external_item_id=" + externalitemId + "&external_item_name=" + externalItemName + "&permalink=" + permalink;
 
   browser.sidebarAction.setPanel({
        "tabId": currentTab.id,
        "panel": url,
    });
    browser.sidebarAction.open();
}

// New tab is activated.
browser.tabs.onActivated.addListener(updateSidebar);

// New page is loaded.
browser.tabs.onUpdated.addListener(updateSidebar);

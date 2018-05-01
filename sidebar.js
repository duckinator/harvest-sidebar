var iframe = null;

function addSidebar() {
    if (iframe != null) {
      return;
    }

    var currentUrl = location.href;
    var urlParts = currentUrl.split("/");
    var itemId;

    var repo = urlParts.slice(3, 5).join("/");

    // Projects being tracked.
    if (["how-is/how_is","rubygems/rubygems"].indexOf(repo) == -1) {
      return;
    }

    // No actual issue number is specified.
    if (urlParts.length != 7) {
      return;
    }

    // If it's not an issue or PR, don't do anything.
    if (urlParts[5] == "issues" || urlParts[5] == "pulls") {
        // <user>/<repo>/<issue or pull>/<issue or pr number>
        itemId = urlParts.slice(3, 7).join("/");
    } else {
        itemId = urlParts.slice(3, 5).join("/");
    }

    var externalItemId = encodeURIComponent(itemId);
    var externalItemName = encodeURIComponent(document.title);
    var permalink = encodeURIComponent(currentUrl);

    var url = "https://platform.harvestapp.com/platform/timer?external_item_id=" + externalItemId + "&external_item_name=" + externalItemName + "&permalink=" + permalink + "#" + repo;

    iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style = "position: fixed; left: 0; top: 0; height: 100%;";
    document.body.appendChild(iframe);

    document.addEventListener("load", addSidebar);
}

addSidebar();

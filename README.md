# Template Repository for developing chrome extension

## icons
- Replace with 16, 32, 48, 128, 300 pixel versions of your icon and an svg for your extension's logo

## background.js
- configures chrome browser how to implement extension on browser front end
- for example, the user can view the extension in the right-click context menu

## content.js
- has access to tab's DOM, does light processing, and makes necessary API calls

## manifest.json
- configures what the extension has access to, what the background/content scripts are, what its icons are
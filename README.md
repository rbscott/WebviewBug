README.md

## Description

Small repository to reproduce a Crash in the latest version of the react native webview on Chrome. Running this test wih a Webview on Chrome Version 73.0.3683.90.

## Running the Test

Just launch the App on Android. The crash doesn't happen every time, but typically on a Pixel 2, if you ran the App (and closed in between) at least 10 times. It would crash one of them.

If you want to test changes to the HTML file, you can run a local server and update App.js to reference your local machine.

Example:

```
  cd test-html
  python -m SimpleHTTPServer
```

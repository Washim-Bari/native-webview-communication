## 1.Run the index.html by live server
## 2.Run the React native app
## 3.Change IP address present in the WebViewComponent.js component uri:'http://192.168.0.102' by your IP address

<WebView
      source={{
        uri: 'http://192.168.0.102:5500/web/index.html',
      }}
      onMessage={handleMessage}
/>
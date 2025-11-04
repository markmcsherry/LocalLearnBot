<!DOCTYPE html>
<html>
  <head>
    <title>Learning Bot</title>
    <style>
      body { font-family: sans-serif; width: 300px; padding: 10px; }
      textarea { width: 100%; height: 60px; }
      button { width: 100%; margin-top: 5px; }
      .response { margin-top: 10px; white-space: pre-wrap; }
    </style>
  </head>
  <body>
    <h3>Learning Bot</h3>
    <textarea id="message" placeholder="Ask about your browsing..."></textarea>
    <button id="send">Send</button>
    <div class="response" id="response"></div>
    <script src="popup.js"></script>
  </body>
</html>

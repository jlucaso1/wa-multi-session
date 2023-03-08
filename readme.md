# Whatsapp Multi Session

Connecting Your app with Whatsapp Messaging

Lightweight library for whatsapp. Not require Selenium or any other browser.

Stand above [Baileys](https://github.com/adiwajshing/Baileys) Library.

## Installation

Install package using npm

```
  npm install wa-multi-session
```

Then import your code

Using JS Module

```ts
import whatsapp from "wa-multi-session";
```

or using CommonJS

```ts
const whatsapp = require("wa-multi-session");
```

## Session Usage/Examples

Start New Session

```ts
// create session with ID : mysessionid

const session = await whatsapp.startWhatsapp("mysessionid");
// Then, scan QR on terminal
```

Get All Session ID

```ts
const sessions = whatsapp.getAllSession();
// returning all session ID that has been created
```

Get Session Data By ID

```ts
const session = whatsapp.getSession("mysessionid");
// returning session data
```

## Messaging Usage/Examples

Send Text Message

```ts
await whatsapp.sendTextMessage({
  sessionId: "mysessionid", // session ID
  to: "6281234567890", // always add country code (ex: 62)
  text: "Hi There, This is Message from Server!", // message you want to send
});
```

Send Image

```ts
const image = fs.readFileSync("./myimage.png");
const send = await whatsapp.sendImage({
  sessionId: "session1",
  to: "6281234567890",
  text: "My Image Caption",
  media: image, // can from URL too
});
```

Send Video

```ts
const video = fs.readFileSync("./myvideo.mp4");
const send = await whatsapp.sendImage({
  sessionId: "session1",
  to: "6281234567890",
  text: "My Video Caption",
  media: video, // can from URL too
});
```

## Configuration Usage/Examples

Add Listener/Callback When Receive a Message

```ts
whatsapp.onMessageReceived((msg) => {
  console.log(`New Message Received On Session: ${msg.sessionId} >>>`, msg);
});
```

## Authors

- [@mimamch](https://www.github.com/mimamch)

## Feedback or Support

If you have any feedback or support, please reach out to me at mimamch28@gmail.com

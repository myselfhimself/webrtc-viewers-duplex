webrtc-viewers-duplex
=====================

## A WebRTC Viewers Duplex Proof-of-Concept


### Usage
- On a NodeJS server, run: node server.js
- In a recent web browser: open index.html in one tab, and game.html in another.
  Within index.html, enter a player name and start running, see what's happening within game.html.
- Note that webcam is shown but not streamed anywhere for now.



### Roadmap
1. Page1 + Node + Page2 (almost empty htmls).
   Send an event from Page1 to Page2.
2. Send webcam from Page1 to Page 2.
2. Bonus: plug in a facial recognition library to extract a face rectangular canvas out of the webcam signal.
3. Design Page2 UI.
4. Make Page2 players move according to Page1 keypresses.

### LATER
- sound ?

---
### Sources

- https://bitbucket.org/webrtc/codelab
- http://blog.gingertech.net/2013/02/06/video-conferencing-in-html5-webrtc-via-socket-io/ 
- https://www.webrtc-experiment.com/
- http://bloggeek.me/nodejs-webrtc/
- http://www.creativebloq.com/javascript/get-started-webrtc-1132857 stream to video to canvas management


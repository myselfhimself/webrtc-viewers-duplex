# Roadmap

Some POCs for experimenting video conference rooms using WebRTC and basic facial moves recognitions with OpenCS/JS like technologies. 

## Step 1: 1 user selfie camera
1. Status: *STARTED*
1. User sees himself in camera.
1. WebRTC with simple device camera handling + stream rendering into canvas(?).

## Step 2: 2 users video conference
1. Status: TODO
1. Users A and B see each other's camera respectively and themselves on same webpage.
1. WebRTC with handshake, possibly gate servers..

## Step 3: N users video conference
1. Status: TODO
1. N users join in progressively a video conference and each other's face camera streams along with their own.
1. WebRTC with NxN video streams and probably multiple gate servers.

## Step 4: 1 user's face moves recognition + events trigger
1. Status: TODO
1. Back to Step 1, except now that when the user moves its head top/bottom/left/right of camera, dummy events are console-logged. 
1. Use client-side OpenCV / JS + console.log ?

## Step 5: 1 user's camera output moves with face motion recognition
1. Status: TODO
1. When user moves head left/right/top/bottom, camera output moves the same direction on x-y.
1. Same technical requirements as Step 4.

## Step 6: 2 users video conference + face moves recognition + camera outputs moving
1. Status: TODO
1. When users moves head up/down/left/right, their own camera output move the same direction on x-y.
1. Same technical requirements as Step 4.

## Step 7: whole video conference room with face moves recognition
1. Status: TODO
1. Same as step 6, with N participants. 


## 🔎 Overview
This repository implements `VR viewer` designed for real-time NeRF rendering in mobile devices. Powered by **WebXR**, **Three.js** and **MobileNeRF**, we provide a lightweight **web-view integrated with Flutter app**. It eliminates the need for high-end hardware, making it possible to run 3D models smoothly on standard mobile devices - Achieves 60 fps on the Galaxy S22.

## 🤖 Features

We support viewing the generated 3D models in two modes: **`VR Mode`** and **`Web Mode`**.

|👐 Care giver                  |   👐 Care recipient             |
|:-------------------------|:-------------------------|
|![Demo Preview](./assets/caregiver-demo.gif)|![Dataset Preview](./assets/carerecipient-demo.gif)|
| <div align="left">✔️ Dynamic position & scale editing and saving capabilities<br>✔️ Simple interactions through VR devices<br>✔️ Editing support on mobile devices</div> | <div align="left">✔️ Static scene viewer with pre-saved settings<br>✔️ Viewing support for both VR and mobile platforms<br>✔️ Support for forward-facing, unbounded, and indoor(⚠️) scene</div> |

We plan to support more features and interactions soon!🥳



## 🙍‍♂️	User Guide with VR Devices

Experience our VR viewer if you have a VR setup. Before launching the app, ensure your VR and mobile devices are connected.

### 😎 For Quest 2 Users:

1. **Connecting your Quest 2**: Link your Quest2 with mobile device. Follow the instructions in-VR and in the Meta Quest mobile app to complete the setup process. Refer to the [official guidance](https://www.meta.com/ko-kr/help/quest/articles/getting-started/getting-started-with-quest-2/install-meta-quest-mobile-app/). Just ensuring a mirroring connection suffices for our service.

   ❗Note: Your VR device and mobile device **MUST BE** connected with same network.

2. **Accessing the VR Viewer**: Once connected, the `Start VR` button on our web-based VR viewer becomes automatically accessible. Click it, and enjoy your VR journey!

   - Access several pre-trained example models [here](https://rememvr-2024-solutionchallenge.github.io/vr-viewer/demo).
   - This VR viewer connects with Flutter APK. If you have your own trained scene and avatar, you can see your own model with this viewer. [Learn how to create your own model here](https://github.com/RememVR-2024-SolutionChallenge/ai-server).
   - We've tested with Oculus Quest 2 and Galaxy S22. We will support more VR devices soon.

## ✅ TODO
- [ ]  Add Avatar interactions using [mixamo](https://www.mixamo.com/).
- [ ]  Add trackball interactions for manipulating scene and avatar using ray casting.
- [ ]  Support for more VR and mobile devices.








## 🔖 References
- MobileNeRF + WebXR [[Link]](https://github.com/mrxz/mobilenerf-viewer-webxr) [Apache 2.0]
- Google Draco [[Link]](https://github.com/google/draco) [Apache 2.0]
- three.js example [[Link]](https://github.com/mrdoob/three.js) [MIT]
- WebXR Device API [[Link]](https://codelabs.developers.google.com/ar-with-webxr?hl=ko#0) [Google Codelab]
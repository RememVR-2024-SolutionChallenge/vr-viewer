## 🔎 Overview
This repository implements VR viewer using for real-time nerf rendering in mobile devices. Powered by WebXR, Three.js and MobileNeRF technologies.

## 🛠️ Architecture
TODO: insert architecture image from drawio

## 🤖 Features

Our pipeline supports viewing the generated 3D models in two modes:

VR Mode: When a VR device is connected, users can immerse themselves in the virtual environment to view the 3D models.

Web Mode: In the absence of a VR connection, the models are accessible via a web-based viewer, ensuring broad accessibility.
This comprehensive pipeline marries the power of AI with the immersive capabilities of VR, offering a unique and engaging user experience.

|👐 Care giver                  |   👐 Care recipient             |
|:-------------------------:|:-------------------------:|
<img src="">|<img src="">|
| A viewer page with editing capabilities is provided. Due to the complexity of automatically generating a 3D scene that appropriately displays the scene (background) and avatar together, based on the input data’s type, size, and various parameters, simple editing features are added to delegate this task to caregivers. | A viewer page without editing capabilities is shown. A viewer page without editing capabilities is shown. A viewer page without editing capabilities is shown. |



## 🙍‍♂️	User Guide with VR Devices

Experience our VR viewer if you have a VR setup. Before launching the app, ensure your VR and mobile devices are connected.

### 😎 For Quest 2 Users:

1. **Connecting your Quest 2**: Link your Quest2 with mobile device. Follow the instructions in-VR and in the Meta Quest mobile app to complete the setup process. Refer to the [official guidance](https://www.meta.com/ko-kr/help/quest/articles/getting-started/getting-started-with-quest-2/install-meta-quest-mobile-app/). Just ensuring a mirroring connection suffices for our service.

   ❗Note: Your VR device and mobile device **MUST BE** connected with same network.

2. **Accessing the VR Viewer**: Once connected, the `Start VR` button on our web-based VR viewer becomes automatically accessible. Click it, and enjoy your VR journey!

   - Access several pre-trained example models [here](https://rememvr-2024-solutionchallenge.github.io/vr-viewer/demo).
   - This VR viewer connects with Flutter APK. If you have your own trained scene and avatar, you can see your own model with this viewer. [Learn how to create your own model here](https://github.com/RememVR-2024-SolutionChallenge/ai-server).
   - We've tested with Oculus Quest 2 and Galaxy S22. We will support more VR devices soon.


## 🔖 References
* MobileNeRF: Exploiting the Polygon Rasterization Pipeline for Efficient Neural Field Rendering on Mobile Architectures (Apache-2.0 license)
* MobileNeRF + WebXR
* Draco (Apache-2.0 license)
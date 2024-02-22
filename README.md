# vr-viewer
```
vr-viewer
├─ data
│  ├─ model_1
│  │  ├─ avatar
│  │  │  ├─ avatar_1.fbx
│  │  │  └─ avatar_1.json
│  │  └─ scene
│  │     ├─ scene_1.glb
│  │     ├─ scene_1_mlp.json
│  │     ├─ scene_1.json
│  │     ├─ scene_1_shape0.pngfeat0.png
│  │     ├─ scene_1_shape0.pngfeat1.png
│  │     ├─ scene_1_shape1.pngfeat0.png
│  │     ├─ scene_1_shape1.pngfeat1.png
│  │     ├─ scene_1_shape2.pngfeat0.png
│  │     ├─ scene_1_shape2.pngfeat1.png
│  │     ├─ scene_1_shape3.pngfeat0.png
│  │     └─ scene_1_shape3.pngfeat1.png
│  ├─ avatar
│  │  └─ avatar_1
│  │     ├─ avatar_1.fbx
│  │     └─ avatar_1.json
│  └─ scene
│     └─ scene_1
│        ├─ scene_1.glb
│        ├─ scene_1_mlp.json
│        ├─ scene_1.json
│        ├─ scene_1_shape0.pngfeat0.png
│        ├─ scene_1_shape0.pngfeat1.png
│        ├─ scene_1_shape1.pngfeat0.png
│        ├─ scene_1_shape1.pngfeat1.png
│        ├─ scene_1_shape2.pngfeat0.png
│        ├─ scene_1_shape2.pngfeat1.png
│        ├─ scene_1_shape3.pngfeat0.png
│        └─ scene_1_shape3.pngfeat1.png
├─ Dockerfile
├─ main.py
├─ README.md
├─ requirements.txt
└─ template
   ├─ editor.html
   ├─ index.html
   ├─ js
   │  ├─ ARButton.js
   │  ├─ BufferGeometryUtils.js
   │  ├─ curves
   │  │  ├─ NURBSCurve.js
   │  │  └─ NURBSUtils.js
   │  ├─ DRACOLoader.js
   │  ├─ FBXLoader.js
   │  ├─ GLTFLoader.js
   │  ├─ libs
   │  │  └─ fflate.module.js
   │  ├─ OBJLoader.js
   │  ├─ OrbitControls.js
   │  ├─ ParameterSlider.js
   │  ├─ three.module.js
   │  ├─ VRButton.js
   │  └─ WebGL.js
   └─ viewer.html

```
```
vr-viewer
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 06
│  │  │  └─ a5f0797d645b2564fdec35e85d57f323393b70
│  │  ├─ 08
│  │  │  └─ 666feb103f91c4351aff1599ae04b004d40146
│  │  ├─ 12
│  │  │  └─ f15d15f13c96ccdb88625ecc2fc042a5eada27
│  │  ├─ 26
│  │  │  ├─ 1ec44c1d25369ea908e1b08b2d335b1f9ad2ec
│  │  │  └─ dc597ac64ce8ba248fe9b5045d3947c7c0f497
│  │  ├─ 29
│  │  │  └─ e30679065f0ba49773f217e03dafceb380880b
│  │  ├─ 30
│  │  │  └─ 6cbbe89908ba77f17c62f70fac1faf22206212
│  │  ├─ 35
│  │  │  └─ bf73dbf64024cb0af9ecba9fd4d05213d42781
│  │  ├─ 41
│  │  │  └─ 244056e09d4289f18b0cad0a9562229af13d1b
│  │  ├─ 53
│  │  │  └─ 9c734863a0662e41a9c97359064e9a8de46e74
│  │  ├─ 54
│  │  │  └─ 49358fa49b4ca4f27713ce80494fa02e0fa290
│  │  ├─ 57
│  │  │  └─ 03bd46f68ec9fd1200c50409be522f38d4d752
│  │  ├─ 59
│  │  │  └─ 411cf16b32e9fff8b6ff2022f4f5ee63649db0
│  │  ├─ 5e
│  │  │  └─ 48187f26bc443386184458f2af2a2433db5990
│  │  ├─ 5f
│  │  │  └─ dc22cf41749abacef3cafa7c6d2bcf9e04b5ae
│  │  ├─ 64
│  │  │  └─ f459c62dc598c8430ecca1ec606de09c5a211a
│  │  ├─ 6a
│  │  │  └─ 50262110418040e3b9538e6480abae417a9e6d
│  │  ├─ 81
│  │  │  └─ 4f4b11a9b23945a078937bae2d34619a38546b
│  │  ├─ 82
│  │  │  └─ 9cf5f0b6d705edfb4062a670d0ca43ef0b21d9
│  │  ├─ 83
│  │  │  └─ 6177266a47b6bba8189a052f3f7dd606a68904
│  │  ├─ 89
│  │  │  ├─ 73aa3a9fe0611017033b0431ccb2547877004f
│  │  │  └─ 94da563eec2859c105089d7e143b1ce92056b1
│  │  ├─ 8b
│  │  │  ├─ dbaf6f5c18d4abfa88360e0b8d96cc76b3ea10
│  │  │  └─ e31a8051dd9ef0ae1d68a00567acb4d3b6a9e3
│  │  ├─ 8f
│  │  │  └─ fc6e45bb65ad19c6ec31e745554b77ffa606dc
│  │  ├─ 91
│  │  │  └─ 0744a1edb2f7b1715ef47641930391185072cb
│  │  ├─ 99
│  │  │  ├─ 0b9c814bc5ffc88a8dbfea6e084747846e245e
│  │  │  └─ 9e8cc09bd2650603062096ca66a586eda9683f
│  │  ├─ 9c
│  │  │  ├─ 83f94e04d8815b81a9b51679534f212e719213
│  │  │  └─ afa5f7b3052a509e7dd27cf991605645e73707
│  │  ├─ 9e
│  │  │  └─ 62d65ffb3ac86cebb967a80c5246b3e7db56b6
│  │  ├─ a2
│  │  │  ├─ 128b193e6123adcb5b4fa14e1fe62b0d5db899
│  │  │  └─ 94671ad5fd11bc987821f089f20d11a3abeccc
│  │  ├─ a8
│  │  │  └─ 8f25b25242b8aa84f0689c43da1419735d2502
│  │  ├─ b1
│  │  │  └─ 70224ee961e399944a8d185cecfa3d3c452587
│  │  ├─ b3
│  │  │  └─ 2b3162f5fcb5a911a742245abdf74017795d4a
│  │  ├─ b4
│  │  │  └─ e41e8d8f267bc823ec8fd93a20e21ff15992ab
│  │  ├─ ba
│  │  │  └─ ab4f1c37721909875b848714ba62aa5d5c1e05
│  │  ├─ c5
│  │  │  └─ d9465ab333eb14e8bb44cd18547056456f8e37
│  │  ├─ cd
│  │  │  └─ 42358fce31da6727dd921413a15360ee8f3b45
│  │  ├─ d1
│  │  │  └─ d91646f2799c992df566b05b07630daab0d18b
│  │  ├─ d5
│  │  │  └─ 1caf9c79a69904a1dee068ace06df798eb95c8
│  │  ├─ d9
│  │  │  ├─ 521f1cb49c5fc429c4d3fba1c6b75e8b7e8e50
│  │  │  └─ b55d750faa3803c88475eb5177801294367f1a
│  │  ├─ ec
│  │  │  └─ 38aadcc0e932e0a76cfb4f9fbf70f6c903a95c
│  │  ├─ f2
│  │  │  └─ c7823c9aed05414f36af2b85cbef4dc696fba9
│  │  ├─ f3
│  │  │  └─ d92a8253594a3f452d5e7b3f17a363085084c9
│  │  ├─ fb
│  │  │  └─ ea1a4961f1fd0bdea5104ac88bd623bd792b8a
│  │  ├─ ff
│  │  │  └─ fe5b94ad742d585e86efa96344c6e16225ca62
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-cfcdd5ba389fbb2eede692364cbf39fa58639fc1.idx
│  │     ├─ pack-cfcdd5ba389fbb2eede692364cbf39fa58639fc1.pack
│  │     └─ pack-cfcdd5ba389fbb2eede692364cbf39fa58639fc1.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ data
│  ├─ avatar
│  │  ├─ avatar_1
│  │  │  ├─ avatar_1.fbx
│  │  │  └─ avatar_1.json
│  │  └─ avatar_2
│  │     ├─ avatar_2.fbx
│  │     └─ avatar_2.json
│  ├─ model_1
│  │  ├─ avatar
│  │  │  ├─ avatar_1.fbx
│  │  │  └─ avatar_1.json
│  │  └─ scene
│  │     ├─ scene_1.glb
│  │     ├─ scene_1.json
│  │     ├─ scene_1_shape0.pngfeat0.png
│  │     ├─ scene_1_shape0.pngfeat1.png
│  │     ├─ scene_1_shape1.pngfeat0.png
│  │     ├─ scene_1_shape1.pngfeat1.png
│  │     ├─ scene_1_shape2.pngfeat0.png
│  │     ├─ scene_1_shape2.pngfeat1.png
│  │     ├─ scene_1_shape3.pngfeat0.png
│  │     └─ scene_1_shape3.pngfeat1.png
│  └─ scene
│     ├─ scene_1
│     │  ├─ scene_1.glb
│     │  ├─ scene_1.json
│     │  ├─ scene_1_shape0.pngfeat0.png
│     │  ├─ scene_1_shape0.pngfeat1.png
│     │  ├─ scene_1_shape1.pngfeat0.png
│     │  ├─ scene_1_shape1.pngfeat1.png
│     │  ├─ scene_1_shape2.pngfeat0.png
│     │  ├─ scene_1_shape2.pngfeat1.png
│     │  ├─ scene_1_shape3.pngfeat0.png
│     │  └─ scene_1_shape3.pngfeat1.png
│     └─ scene_2
├─ Dockerfile
├─ main.py
├─ README.md
├─ requirements.txt
└─ template
   ├─ editor.html
   ├─ index.html
   ├─ js
   │  ├─ ARButton.js
   │  ├─ BufferGeometryUtils.js
   │  ├─ curves
   │  │  ├─ NURBSCurve.js
   │  │  └─ NURBSUtils.js
   │  ├─ DRACOLoader.js
   │  ├─ FBXLoader.js
   │  ├─ GLTFLoader.js
   │  ├─ libs
   │  │  └─ fflate.module.js
   │  ├─ OBJLoader.js
   │  ├─ OrbitControls.js
   │  ├─ ParameterSlider.js
   │  ├─ three.module.js
   │  ├─ VRButton.js
   │  └─ WebGL.js
   ├─ test.html
   └─ viewer.html

```
let video = document.getElementById("video");
let model;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let windowHeight = window.outerHeight * 0.4;
let windowWidth = window.outerWidth - 100;


const setupCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: windowWidth, height: windowHeight },
        audio: false,
      })
      .then((stream) => {
        video.srcObject = stream;
        // document.getElementById('goalCount').innerHTML = goalCount
      });
  };


  
setupCamera();
video.addEventListener("loadeddata", async () => {
  // document.getElementById("video").offsetWidth, document.getElementById("video").offsetHeight



  canvas.width = document.getElementById("video").offsetWidth;
  canvas.height = document.getElementById("video").offsetHeight;
  canvas.setAttribute("width", windowWidth);
  canvas.setAttribute("height", windowHeight);
//   detector = await poseDetection.createDetector(
//     poseDetection.SupportedModels.MoveNet,
//     detectorConfig
//   );

//   document.getElementById("loadingText").innerHTML =
//     "Please stand in front of camera";
//   setInterval(detectPose, 30);


// const img = document.getElementById('img');

// // Load the model.
// cocoSsd.load().then(model => {
//     // detect objects in the image.
//     model.detect(img).then(predictions => {
//         console.log('Predictions: ', predictions);
//     });
// });
});
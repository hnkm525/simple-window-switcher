import './App.css';
import { useEffect } from "react"

function App() {

  const startButton: any = document.getElementById("startButton");
  console.log(startButton);

  let localVideo: any;
  const audioCheck = document.getElementById('audio_check');
  let localStream: any = null;


  const playVideo = async (element: any, stream: any) => {
    console.log("element", element);
    console.log("stream", stream);
    

    element.srcObject = stream;
    try {
      await element.play();
    }
    catch (err) {
      console.error(err)
    };
  }

  const onClickStart = async () => {
    const option = { video: { frameRate: 60 }, audio: true };
    try {
      await navigator.mediaDevices.getDisplayMedia(option)
      .then((res)=>{
        playVideo(localVideo, res);
        localStream = res;
      });
      console.log('mediaDevice.getDisplayMedia　Screen Capture OK');
    } catch (err) {
      console.error('mediaDevice.getDisplayMedia() error:', err);
    }
  }

  const onClickStop = (stream:any) => {
    cleanupVideoElement(localVideo);
    if (localStream) {
      stopStream(localStream);
      localStream = null;
    }
  }

  const cleanupVideoElement = (element:any) => {
    element.pause();
    element.srcObject = null;
  }

  const stopStream = (stream: any) => {
    stream.getTracks().forEach((track: any) => track.stop());
  }

  useEffect(() => {
    const startButton: any = document.getElementById("startButton");
    console.log(startButton);
    startButton.disabled = false;
    localVideo = document.getElementById('video');
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div id="container">
          <button id="startButton" onClick={onClickStart}>Start</button>
          <button id="startButton" onClick={onClickStop}>Stop</button>
        </div>
        <video className="video" id="video" autoPlay muted={true}></video>
      </header>
    </div>
  );
}

export default App;

import { SetRecorder } from "@/types/recorder";

export async function getUserMediaPermissionToRecord() {
  try {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    if (stream) {
      stream.getTracks().forEach((track: any) => track.stop());
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export async function startRecording(setRecorderState: SetRecorder) {
  if (navigator.mediaDevices.getUserMedia) {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setRecorderState((prevState) => {
        return {
          ...prevState,
          initRecording: true,
          mediaStream: stream,
        };
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("getUserMedia not supported on your browser!");
  }
}

export function saveRecording(recorder: any) {
  if (recorder.state !== "inactive") recorder.stop();
}

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export default function useAudioVisualization(
  audioUrl: string | null,
  id: string
) {
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    waveSurferRef.current = WaveSurfer.create({
      container: `#${id}`,
      waveColor: "#9CA3AF",
      progressColor: "#8B5CF6",
      interact: false,
      cursorWidth: 0,
      barWidth: 2,
      barGap: 2,
      height: 28,
      width: 100,
    });

    setTimeout(() => {
      audioUrl && waveSurferRef.current?.load(audioUrl);
    }, 200);

    waveSurferRef.current.on("ready", () => {
      const trackDuration = waveSurferRef.current?.getDuration();
      trackDuration && setDuration(trackDuration);
    });

    waveSurferRef.current.on("audioprocess", () => {
      if (waveSurferRef.current?.isPlaying()) {
        const totalTime = waveSurferRef.current.getDuration(),
          currentTime = waveSurferRef.current.getCurrentTime(),
          remainingTime = totalTime - currentTime;
        setRemainingTime(remainingTime);
      }
    });

    waveSurferRef.current.on("play", () => {
      setIsPlaying(true);
    });

    waveSurferRef.current.on("pause", () => {
      setIsPlaying(false);
    });

    waveSurferRef.current.on("finish", function () {
      waveSurferRef.current?.seekTo(0);
    });

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
      }
    };
  }, [audioUrl]);

  const handleTogglePlay = () => {
    if (waveSurferRef.current) {
      if (isPlaying) {
        waveSurferRef.current.pause();
      } else {
        waveSurferRef.current.play();
      }
    }
  };

  const onStopPlaying = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current?.stop();
    }
  };

  return {
    isPlaying,
    duration,
    remainingTime,
    onStopPlaying: () => onStopPlaying(),
    handleTogglePlay: () => handleTogglePlay(),
  };
}

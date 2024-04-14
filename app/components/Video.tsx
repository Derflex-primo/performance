"use client";

import React, { useRef, useState, useEffect } from "react";
import theme from "@/public/json/theme.json";
import Play from "@/public/icons/Play";
import Pause from "@/public/icons/Paused";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [showPauseIcon, setShowPauseIcon] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
        setShowPauseIcon(true);
        pauseTimeoutRef.current = setTimeout(() => {
          setShowPauseIcon(false);
        }, 2000);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
        setShowPauseIcon(false);
        if (pauseTimeoutRef.current) {
          clearTimeout(pauseTimeoutRef.current);
        }
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.target as HTMLDivElement;
    const newTime =
      (e.nativeEvent.offsetX / progressBar.clientWidth) *
      (videoRef.current?.duration || 0);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVideoEnded = () => {
    setIsPaused(true);
    setProgress(0);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {isPaused && (
        <div className="absolute  opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Play svgcolor={theme.palette.main} />
        </div>
      )}
      {showPauseIcon && (
        <div className="absolute  opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Pause svgcolor={theme.palette.main} />
        </div>
      )}
      <video
        ref={videoRef}
        className="h-full w-full"
        preload="metadata"
        onClick={handleToggle}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
      >
        <source src="/video/test-video.mp4" type="video/mp4" />
      </video>
      <div
        onClick={handleSeek}
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "gray",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: theme.palette.main,
          }}
        />
      </div>
      {false && <div className="absolute  text-[10px] bottom-3 left-4 md:left-8 text-stone-500"> { /* DISCLAIMER FEATURED */}
        This video is protected by copyright law and unauthorized recording,
        copying, or redistribution is strictly prohibited
      </div>
      }
    </div>
  );
};

export default Video;

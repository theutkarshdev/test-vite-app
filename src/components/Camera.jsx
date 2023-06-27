import React, { useEffect, useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream = null;

    const constraints = { video: { facingMode: 'user' } };

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const handleiOSPermissions = async () => {
      try {
        await videoRef.current.play();
        startCamera();
      } catch (error) {
        console.error('Error playing video element:', error);
      }
    };

    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('controls', 'true');
      videoRef.current.setAttribute('muted', 'true');
      videoRef.current.setAttribute('autoplay', 'true');

      handleiOSPermissions();
    } else {
      startCamera();
    }

    return () => {
      if (stream && stream.getTracks) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} />
    </div>
  );
};

export default Camera;

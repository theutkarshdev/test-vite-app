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

    startCamera();

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
      <video ref={videoRef} autoPlay={true} playsInline={true} />
    </div>
  );
};

export default Camera;

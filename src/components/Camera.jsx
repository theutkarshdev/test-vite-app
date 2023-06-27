import React, { useEffect, useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: { facingMode: 'user' } };

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay={true} />
    </div>
  );
};

export default Camera;

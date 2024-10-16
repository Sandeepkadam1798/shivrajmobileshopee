

'use client'

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Volume2, VolumeX, Share2 ,Pause ,Play  } from 'lucide-react';

const videos = [
  { id: 1, src: 'https://res.cloudinary.com/diifdlgwr/video/upload/v1729035942/F34B5AB4D1D2FCC9332E4E64873CAF84_video_dashinit_ckfau7.mp4', title: 'Leh Ladakh Tour Packages', description: 'The heart of the Himalayan Wonderland' },
  { id: 2, src: 'https://res.cloudinary.com/diifdlgwr/video/upload/v1729036637/Shivraj/p5fom6hzkac0po6vtglz.mp4', title: 'Leh Ladakh Tour Packages', description: 'The heart of the Himalayan Wonderland' },
  { id: 3, src: 'https://res.cloudinary.com/diifdlgwr/video/upload/v1729037216/Shivraj/lq7a95dhsolp5upavctu.mp4', title: 'Bali Adventure', description: 'Explore the Island of Gods' },
  { id: 4, src: 'https://res.cloudinary.com/diifdlgwr/video/upload/v1729036179/Shivraj/b0boiwju9tamz7fjeife.mp4', title: 'Bali Adventure', description: 'Explore the Island of Gods' },
  { id: 5, src: 'https://res.cloudinary.com/diifdlgwr/video/upload/v1729036233/Shivraj/qzptlktk6jkfgwve4cns.mp4', title: 'Thailand Beaches', description: 'Discover tropical paradise' },
  { id: 6, src: 'https://res.cloudinary.com/diifdlgwr/video/upload/v1729036303/Shivraj/xhs1m0f8as02cghh9kgw.mp4', title: 'Thailand Beaches', description: 'Discover tropical paradise' },
  { id: 7, src: 'https://res.cloudinary.com/diifdlgwr/video/upload/v1729037357/Shivraj/bqwxoabs8rxswo4i0aso.mp4', title: 'Thailand Beaches', description: 'Discover tropical paradise' },
];

export default function VideoPage() {

  const videoRefs = useRef(videos.map(() => React.createRef()));
  const [isPlaying, setIsPlaying] = useState(Array(videos.length).fill(true));
  const [isMuted, setIsMuted] = useState(true);
  const observerRef = useRef(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const video = entry.target;
//             video.play();
//             setIsPlaying((prev) => {
//               const newState = [...prev];
//               newState[videos.findIndex((v) => v.src === video.src)] = true;
//               return newState;
//             });
//           } else {
//             const video = entry.target;
//             video.pause();
//             setIsPlaying((prev) => {
//               const newState = [...prev];
//               newState[videos.findIndex((v) => v.src === video.src)] = false;
//               return newState;
//             });
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     videoRefs.current.forEach((ref) => {
//       if (ref.current) {
//         observerRef.current.observe(ref.current);
//       }
//     });

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, []);


useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoIndex = videos.findIndex((v) => v.src === entry.target.src);
          if (entry.isIntersecting) {
            entry.target.play();
            setIsPlaying((prev) => {
              const newState = [...prev];
              newState[videoIndex] = true;
              return newState;
            });
          } else {
            entry.target.pause();
            setIsPlaying((prev) => {
              const newState = [...prev];
              newState[videoIndex] = false;
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.muted = !isMuted;
      }
    });
  };


  const togglePlayPause = (index) => {
    const video = videoRefs.current[index].current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying((prev) => {
      const newState = [...prev];
      newState[index] = !prev[index];
      return newState;
    });
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  // Prevent touch focus on mobile to avoid opening the keyboard
  const preventFocus = (event) => {
    event.preventDefault();
  };

  return (
    <div className="fixed inset-0 bg-black">
      <div className="relative h-full overflow-y-auto snap-y snap-mandatory">
        {videos.map((video, index) => (
          <div key={video.id} className="relative w-full h-screen snap-start">
            <video
              ref={videoRefs.current[index]}
              className="w-full h-full object-cover"
              src={video.src}
              loop
              playsInline
              muted={isMuted}
              tabIndex="-1" // Prevent focus on video
              onTouchStart={preventFocus} // Prevent keyboard from opening on touch
            />
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={toggleMute}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </button>
             
            </div>

            <div className="absolute  top-[450px] right-0 p-4">
        
            <button
                    onClick={() => togglePlayPause(index)}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {isPlaying[index] ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                </div>

            <div className="absolute  top-[500px] right-0 p-4">
        
            <button
                  onClick={handleShare}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Share2 className="w-6 h-6" />
                </button>
                </div>
          
            {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-white text-lg font-semibold">{video.title}</h2>
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
                <button
                  onClick={handleShare}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

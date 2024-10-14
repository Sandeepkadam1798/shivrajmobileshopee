

'use client'

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Volume2, VolumeX, Share2 ,Pause ,Play  } from 'lucide-react';

const videos = [
  { id: 1, src: 'https://player.vimeo.com/progressive_redirect/playback/943963402/rendition/1080p/file.mp4?loc=external&signature=f9ccc754006c29745a1e9ddc7b2b5f01d6a75904639767f772c7be73571fdbb3', title: 'Leh Ladakh Tour Packages', description: 'The heart of the Himalayan Wonderland' },
  { id: 2, src: 'https://player.vimeo.com/progressive_redirect/playback/943968161/rendition/1080p/file.mp4?loc=external&signature=c0071a138028013aad9ca854005f23058e41bdf684ec84662bcc944b28f859ad', title: 'Bali Adventure', description: 'Explore the Island of Gods' },
  { id: 3, src: 'https://player.vimeo.com/progressive_redirect/playback/943968161/rendition/1080p/file.mp4?loc=external&signature=c0071a138028013aad9ca854005f23058e41bdf684ec84662bcc944b28f859ad', title: 'Thailand Beaches', description: 'Discover tropical paradise' },
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

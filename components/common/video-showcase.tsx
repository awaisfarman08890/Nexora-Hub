"use client";

import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  poster?: string;
}

const videoProjects: VideoItem[] = [
  {
    id: "video-1",
    title: "Corporate Brand Video",
    description: "A compelling corporate brand video that captures the essence of modern business excellence. Featuring sophisticated visual storytelling, dynamic transitions, and professional color grading that elevates your brand identity to new heights.",
    src: "/videos/video1.mp4",
    poster: "/images/project1.jpg"
  },
  {
    id: "video-2", 
    title: "Product Showcase",
    description: "An engaging product showcase that brings your offerings to life with cinematic quality. Showcasing innovative editing techniques, smooth motion graphics, and captivating visual effects that drive customer engagement and sales.",
    src: "/videos/video2.mp4",
    poster: "/images/project2.jpg"
  }
];

export default function VideoShowcase() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleVideoClick = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideo === videoId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.keys(videoRefs.current).forEach(id => {
        if (id !== videoId && videoRefs.current[id]) {
          videoRefs.current[id]?.pause();
        }
      });
      video.play();
      setPlayingVideo(videoId);
    }
  };

  const toggleMute = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    video.muted = !video.muted;
    setMutedStates(prev => ({
      ...prev,
      [videoId]: video.muted
    }));
  };

  const handleVideoEnded = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-sm font-bold animate-pulse shadow-lg">
              🎬 Premium Video Production
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-fade-in">
            Video Editing Showcase
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover our <span className="font-semibold text-blue-600">award-winning video editing portfolio</span> featuring cinematic storytelling, 
            advanced visual effects, and <span className="font-semibold text-purple-600">professional color grading</span> that transforms ordinary footage into extraordinary content.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {videoProjects.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/20 dark:border-slate-700/50"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  poster={video.poster}
                  onEnded={handleVideoEnded}
                  muted={mutedStates[video.id] || false}
                  loop
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 via-black/40 to-transparent transition-all duration-500 cursor-pointer z-20",
                    playingVideo === video.id ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  )}
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-6 border-2 border-white/40 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {playingVideo === video.id ? (
                      <div className="w-10 h-10 flex items-center justify-center">
                        <div className="w-4 h-8 border-l-2 border-r-2 border-white rounded-sm"></div>
                      </div>
                    ) : (
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    )}
                  </div>
                </div>

                {/* Mute/Unmute Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute(video.id);
                  }}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110 z-30"
                >
                  {mutedStates[video.id] ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>

                {/* Video Status Indicator */}
                {playingVideo === video.id && (
                  <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20 animate-pulse z-30">
                    ▶️ Playing
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-8 bg-gradient-to-br from-white/90 to-slate-50/90 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    {video.title}
                  </h3>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {video.description}
                </p>
                
                {/* Video Features */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    🎬 Cinematic Editing
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    🎨 Color Grading
                  </span>
                  <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    ✨ Motion Graphics
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    🎭 Visual Effects
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm font-bold border border-white/30 shadow-lg">
                  🚀 Transform Your Vision
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your Masterpiece?
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Let our expert team transform your vision into <span className="font-semibold">cinematic excellence</span> that captivates audiences, 
                elevates your brand, and delivers <span className="font-semibold">exceptional results</span>.
              </p>
              <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl transform">
                🎬 Start Your Project Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

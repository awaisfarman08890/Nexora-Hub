"use client";

import { Play, Volume2, VolumeX, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  poster?: string;
  category: string;
  duration: string;
}

const videoPortfolio: VideoItem[] = [
  {
    id: "portfolio-1",
    title: "Corporate Brand Story",
    description: "A compelling corporate brand video showcasing modern business excellence with sophisticated visual storytelling and professional color grading.",
    src: "/videos/video1.mp4",
    category: "Corporate",
    duration: "2:30"
  },
  {
    id: "portfolio-2",
    title: "Product Launch Campaign",
    description: "An engaging product showcase featuring cinematic quality editing, smooth motion graphics, and captivating visual effects that drive engagement.",
    src: "/videos/video2.mp4",
    category: "Commercial",
    duration: "1:45"
  }
];

export default function VideoPortfolio() {
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
    <section className="py-20 relative overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]" />

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] w-[600px] h-[140px] bg-gradient-to-r from-indigo-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] transform rotate-12 animate-pulse"></div>
        
        <div className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] w-[500px] h-[120px] bg-gradient-to-r from-rose-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] transform -rotate-15 animate-pulse delay-1000"></div>
        
        <div className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] w-[300px] h-[80px] bg-gradient-to-r from-violet-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] transform -rotate-8 animate-pulse delay-500"></div>
        
        <div className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%] w-[200px] h-[60px] bg-gradient-to-r from-amber-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] transform rotate-20 animate-pulse delay-1500"></div>
        
        <div className="absolute left-[20%] md:left-[25%] top-[5%] md:top-[10%] w-[150px] h-[40px] bg-gradient-to-r from-cyan-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] transform -rotate-25 animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-bold animate-pulse shadow-lg">
              🎬 Video Editing Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in">
            Our Creative Work
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover our <span className="font-semibold text-blue-400">award-winning video editing portfolio</span> featuring 
            cinematic storytelling, advanced visual effects, and <span className="font-semibold text-purple-400">professional color grading</span>.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {videoPortfolio.map((video, index) => (
            <div
              key={video.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/20"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-800 via-blue-800 to-purple-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                                 <video
                   ref={(el) => {
                     videoRefs.current[video.id] = el;
                   }}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-8 bg-gradient-to-br from-white/10 to-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-white">
                      {video.title}
                    </h3>
                  </div>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
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
                  🚀 Ready to Create?
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Bring Your Vision to Life
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Transform your ideas into <span className="font-semibold">cinematic excellence</span> with our expert video editing services.
              </p>
              <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl transform">
                🎬 Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

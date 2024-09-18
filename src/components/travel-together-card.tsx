import React, { Fragment, useState } from 'react';
import VideoPopup from './videoPopup';
import { NextPage } from 'next';
import { Dialog, Transition } from "@headlessui/react";

type VideoProps = {
  videoSrc?: any;
}

const TravelTogetherCard: NextPage<VideoProps> = ({ videoSrc }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleThumbnailClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true)
  };

  const closePopup = () => {
    setSelectedVideo(null);
    setIsOpen(false)
  };

  const videoArray = Array.isArray(videoSrc) ? videoSrc : [videoSrc];

  return (
    <div>
      <div>
        {videoArray?.map((video: string) => (
          <div key={video} className="cursor-pointer" onClick={() => handleThumbnailClick(video)}>
            <img src={`https://img.youtube.com/vi/${getYouTubeVideoId(video)}/0.jpg`} alt="Video Thumbnail" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/assets/images/logo/youtube.webp" alt="Play Button" className="w-16 h-12" />
            </div>
          </div>
        ))}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closePopup}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[500px] rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <VideoPopup videoUrl={selectedVideo} closePopup={closePopup} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

// Function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w\-]{11})/);
  return match ? match[1] : '';
};

export default TravelTogetherCard;



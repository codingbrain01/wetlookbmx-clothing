import { useState } from "react";
import vid000 from "../assets/vid-000.mp4";
import vid001 from "../assets/vid-001.mp4";
import vid002 from "../assets/vid-002.mp4";
import vidThumb0 from "../assets/wtlk-thumbnail0.png";
import vidThumb1 from "../assets/wtlk-thumbnail1.png";
import vidThumb2 from "../assets/wtlk-thumbnail2.png";
import wtlkIMG0 from "../assets/wtlk-img0.jpg";
import wtlkIMG1 from "../assets/wtlk-img1.jpg";
import wtlkIMG2 from "../assets/wtlk-img2.jpg";

function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (mediaSrc, mediaType) => {
    setSelectedMedia({ src: mediaSrc, type: mediaType });
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-black text-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-9">Gallery</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          <div
            className="w-[270px] h-[480px] object-cover border-2 border-green-400 shadow-[0_0_10px_#34C759] rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex justify-center items-center"
            style={{ aspectRatio: "9/16" }}
            onClick={() => handleMediaClick(vid000, "video")}
          >
            <img
              src={vidThumb0}
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className="w-[270px] h-[480px] object-cover border-2 border-green-400 shadow-[0_0_10px_#34C759] rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex justify-center items-center"
            style={{ aspectRatio: "9/16" }}
            onClick={() => handleMediaClick(vid001, "video")}
          >
            <img
              src={vidThumb1}
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className="w-[270px] h-[480px] object-cover border-2 border-green-400 shadow-[0_0_10px_#34C759] rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex justify-center items-center"
            style={{ aspectRatio: "9/16" }}
            onClick={() => handleMediaClick(vid002, "video")}
          >
            <img
              src={vidThumb2}
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className="w-[270px] h-[480px] object-cover border-2 border-green-400 shadow-[0_0_10px_#34C759] rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex justify-center items-center"
            style={{ aspectRatio: "9/16" }}
            onClick={() => handleMediaClick(wtlkIMG0, "image")}
          >
            <img
              src={wtlkIMG0}
              alt="Photo of Monkey"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className="w-[270px] h-[480px] object-cover border-2 border-green-400 shadow-[0_0_10px_#34C759] rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex justify-center items-center"
            style={{ aspectRatio: "9/16" }}
            onClick={() => handleMediaClick(wtlkIMG1, "image")}
          >
            <img
              src={wtlkIMG1}
              alt="Photo of Monkey"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div
            className="w-[270px] h-[480px] object-cover border-2 border-green-400 shadow-[0_0_10px_#34C759] rounded-lg transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer flex justify-center items-center"
            style={{ aspectRatio: "9/16" }}
            onClick={() => handleMediaClick(wtlkIMG2, "image")}
          >
            <img
              src={wtlkIMG2}
              alt="Photo of Monkey"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Add more media here */}
        </div>
      </div>
      {selectedMedia && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          {selectedMedia.type === "video" ? (
            <video
              src={selectedMedia.src}
              alt="Selected Media"
              className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_10px_#34C759]"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={selectedMedia.src}
              alt="Selected Media"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-[0_0_10px_#34C759]"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;

import { useState } from "react";
import Image from "next/image";

const Slider = ({ photos, getter, setter }) => {
  const handleSelection = (label) => {
    setter(label);
  };

  return (
    <div className="carousel rounded-box w-64">
      {photos.length &&
        photos.map((photo) => (
          <Photo
            key={photo.label}
            photo={photo}
            isSelected={photo.label === getter}
            onSelect={handleSelection}
          />
        ))}
    </div>
  );
};

const Photo = ({ photo, isSelected, onSelect }) => {
  const [loading, setLoading] = useState(true);

  // Function to handle when image is loaded
  const handleImageLoad = () => {
    setLoading(false); // Image has finished loading
  };

  return (
    <div
      className="carousel-item w-64 flex flex-col items-center justify-center bg-secondary"
      onClick={() => onSelect(photo.label)}
    >
      <div className="relative w-64 h-64 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        <Image
          src={photo.src}
          alt={`Image of ${photo.label}`}
          className="object-cover w-full h-full"
          width={256}
          height={256}
          onLoadingComplete={handleImageLoad} // Trigger when the image is loaded
        />
      </div>

      <div className="flex my-2 text-center">
        <input
          type="checkbox"
          id={photo.label}
          checked={isSelected}
          onChange={() => onSelect(photo.label)}
          className="checkbox checkbox-md mr-2"
        />
        <label htmlFor={photo.label} className="text-lg">
          {photo.label}
        </label>
      </div>
    </div>
  );
};

export default Slider;

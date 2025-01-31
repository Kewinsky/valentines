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
  return (
    <div
      className="carousel-item w-64 flex flex-col items-center justify-center"
      onClick={() => onSelect(photo.label)}
    >
      <div className="relative w-64 h-64 overflow-hidden">
        <Image
          src={photo.src}
          className="object-cover w-full h-full"
          alt={`Image of ${photo.label}`}
          width={256}
          height={256}
        />
      </div>

      <div className="flex mt-2 text-center">
        <input
          type="checkbox"
          id={photo.label}
          checked={isSelected}
          onChange={() => onSelect(photo.label)}
          className="checkbox checkbox-md mr-2"
        />
        <label for={photo.label} className="text-lg">
          {photo.label}
        </label>
      </div>
    </div>
  );
};

export default Slider;

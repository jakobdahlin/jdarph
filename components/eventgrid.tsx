import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499933/IMG_6090_gul997.jpg",

];

export default function EventGrid() {
  return (
    <div className="xs:columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-5 mx-2 lg:mb-52">
      {images.map((src, index) => (
        <div key={index} className="relative break-inside-avoid">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={1000}
            height={0}
            className="w-full h-auto rounded-xl object-cover transition-transform mb-4 
      duration-200 transform hover:scale-95"
          />
        </div>
      ))}
    </div>
  );
}

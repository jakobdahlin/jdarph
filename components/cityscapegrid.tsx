import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500389/ManhattanWest_IMG_5683_cckwy5.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500374/JD_2342_1_oy6bh8.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500340/JD__9058_mzsqgp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500295/JD__7184_tiqcpx.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500236/JD__3551_ounghy.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500194/JD__2249_obiko5.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500187/JD__2085_75Rock_qcbg3d.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500097/IMG_9304_vueh3e.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500054/IMG_7656_usydbs.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500018/IMG_6773_qdlygi.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499983/IMG_6615_om1eec.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499955/IMG_6300_yftms2.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499944/IMG_6227_y2cbl6.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499925/IMG_6030_zp3svf.jpg",
];

export default function CityscapeGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {images.map((src, index) => (
        <div key={index} className="relative w-auto max-w-[400px]">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={350} // Adjust width
            height={0} // Auto height to maintain aspect ratio
            className="w-auto h-auto max-w-full object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}

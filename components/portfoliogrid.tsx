"use client"

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type PortfolioImage = {
  id: number;
  src: string;
  available: boolean;
};

const images: PortfolioImage[] = [
  { id: 1, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830394/JD__9505-Pano_owpaeb.jpg", available: true },
    { id: 2, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830390/IMG_7656_i4bqdr.jpg",available: true },
    { id: 3, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830390/JD__4288_md7mei.jpg",available: true },
    { id: 4, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830389/JD__9598_df1ayc.jpg",available: true },
    { id: 5, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830384/JD__9420_bnqxx4.jpg",available: true },
    { id: 6, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830382/IMG_8270_doecnl.jpg",available: true },
    { id: 7, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830382/JD__4295_23_ycpk3z.jpg",available: true },
    { id: 8, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830379/IMG_8098_dkradd.jpg",available: true },
    { id: 9, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830386/Manhattan-Mist_cv1vmh.jpg",available: false },
    { id: 10, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830376/IMG_7988-copy_yurdf5.jpg",available: true },
    { id: 11, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830383/IMG_6392_loocul.jpg",available: true },
    { id: 12, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830375/IMG_5846_fwhy0y.jpg",available: true },
    { id: 13, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830374/IMG_7484_n64ncx.jpg",available: true },
    { id: 14, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830374/IMG_7443_mj3ia5.jpg",available: true },
    { id: 15, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830370/IMG_7320_udpoz5.jpg",available: true },
    { id: 16, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830373/IMG_7486_mvzuiv.jpg",available: true },
    { id: 17, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830373/IMG_0995_ags7hu.jpg",available: true },
    { id: 18, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830369/IMG_6383_qwbt9f.jpg",available: true },
    { id: 19, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830367/IMG_5109_ksv2hm.jpg",available: true },
    { id: 20, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830367/IMG_5074_jcx7lg.jpg",available: true },
    { id: 21, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830365/IMG_5050_05_v30dsw.jpg",available: false },
    { id: 22, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830365/IMG_4608_efbmlu.jpg",available: true },
    { id: 23, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830365/IMG_5024_bmfxvf.jpg",available: true },
    { id: 24, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830365/IMG_4980_ovg5gr.jpg",available: true },
    { id: 25, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830360/IMG_2991_b88b7t.jpg",available: true },
    { id: 26, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830360/IMG_4777_Stars2_wfas79.jpg",available: true },
    { id: 27, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830360/IMG_4806_wz4hor.jpg",available: true },
    { id: 28, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830359/IMG_4456_tj03ft.jpg",available: true },
    { id: 29, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830359/IMG_4523_utl5ku.jpg",available: true },
    { id: 30, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830359/IMG_3992_Empty5x7_nuwyu1.jpg",available: true },
    { id: 31, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830358/IMG_4435_ak5yhy.jpg",available: true },
    { id: 32, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830358/IMG_4437_idt16k.jpg",available: true },
    { id: 33, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830354/IMG_4382_rtbrk0.jpg",available: true },
    { id: 34, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830386/Mickey_sBeach_x9lv4m.jpg",available: true },
    { id: 35, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830353/IMG_3371_xpklsd.jpg",available: true },
    { id: 36, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830352/IMG_3307_2_g2t84o.jpg",available: true },
    { id: 37, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830352/IMG_3352_noejp6.jpg",available: true },
    { id: 38, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830352/IMG_2915_rm7ls2.jpg",available: true },
    { id: 39, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830352/IMG_2662_jirsyn.jpg",available: true },
    { id: 40, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830350/IMG_2907_ahpts6.jpg",available: true },
    { id: 41, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830350/IMG_2853_k1i4ga.jpg",available: true },
    { id: 42, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830349/IMG_2030_22_bd0qin.jpg",available: true },
    { id: 43, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830348/IMG_2675-HDR-1_wgwxwi.jpg",available: true },
    { id: 44, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830348/IMG_2661_o8lgql.jpg",available: true },
    { id: 45, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830347/IMG_2660_2_pcrmyq.jpg",available: true },
    { id: 46, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830347/IMG_0167_iixhnf.jpg",available: true },
    { id: 47, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830346/IMG_1994_tyfcea.jpg",available: true },
    { id: 48, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830344/IMG_1979_2_ux61ua.jpg",available: true },
    { id: 49, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830343/IMG_1562_z19uo2.jpg",available: true },
    { id: 50, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830341/GoldenLighthouse_j0lx4v.jpg",available: true },
    { id: 51, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830340/IMG_0784_yoozdw.jpg",available: true },
    { id: 52, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830340/GateRed_nv8kyd.jpg",available: true },
    { id: 53, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830339/IMG_0780-copy_bt8kfg.jpg",available: true },
    { id: 54, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830335/IMG_0017-copy_qd0ign.jpg",available: true },
    { id: 55, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830335/bg_centralpark_cd5vmm.jpg",available: true },
    { id: 56, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830334/Chrysler-Building_W_efbtio.jpg",available: true },
    { id: 57, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830333/BolinasBay_ydbzrw.jpg",available: true },
    { id: 58, src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1744830333/_JakobDahlin_IMG_4846_t04rnh.jpg",available: true },
];

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <>
      <div className="min-[420px]:columns-1 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 2xl:columns-4 lg:mb-52">
      {images.map((img, index) => (
  <div
    key={index}
    className="relative break-inside-avoid overflow-hidden group cursor-pointer"
    onClick={() => {
      if (img.available) {
        setSelectedImage(img.src);
        setSelectedId(index + 1);
      }
    }}
  >
    <div className="relative w-full h-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
<Image
  src={img.src}
  alt={`Image ${index + 1}`}
  width={1500}
  height={0}
  className={`w-full h-auto object-cover transition-transform mb-4 duration-300 transform ${
    !img.available ? 'opacity-50' : ''
  }`}
/>
      </motion.div>

      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded group-hover:scale-110 transition-transform">
        ID #{index + 1}
      </div>

      {!img.available && (
  <div className="absolute inset-0 group">
    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow z-10">
      In contract
    </div>

    {/* Tooltip */}
    <div className="absolute bottom-2 left-2 z-50 hidden group-hover:block">
      <div className="bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded shadow  group-hover:scale-110 transition-transform">
        Ask for availability
      </div>
    </div>
  </div>
)}
    </div>
  </div>
))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        >
          <div className="relative max-w-4xl w-full px-4">
          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
>
  <Image
    src={selectedImage || ""}
    alt={`Selected image ${selectedId || "?"}`}
    width={600}
    height={0}
    className="w-full max-h-[90vh] h-auto object-contain rounded-lg"
  />
</motion.div>
<div className="absolute top-4 left-4 flex flex-col items-start gap-2">
  <div className="bg-white/80 text-black ml-2 text-md px-3 py-1 rounded-xl shadow">
    ID #{selectedId}
  </div>
  <button
    onClick={(e) => {
      e.stopPropagation(); // prevents closing when clicking the button itself
      setSelectedImage(null);
    }}
    className="bg-white/80 text-black px-3 py-1 
    rounded-xl hover:bg-white ml-2 transition text-md shadow"
  >
    ✕ Close
  </button>
</div>

            <div className="absolute inset-0 mx-32 z-10 pointer-events-none bg-[url('/images/JAKOBLOGO.png')] opacity-20 bg-repeat bg-contain" />

          </div>
        </div>
      )}
    </>
  );
}

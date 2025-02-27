import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499933/IMG_6090_gul997.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500387/JD_9642_g82ito.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498145/IMG_1524_xur9rh.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499856/IMG_3415_il8yyh.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497952/IMG_1185_pbykxu.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500360/JD__9421_shvslh.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500039/IMG_6887_ahngot.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499911/IMG_5784_m65c6e.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499862/IMG_3430_vhbgg1.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499905/IMG_4463_gzuukh.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch6_ow3gz7.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498355/IMG_2052_ujgg0r.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch12_krl9bd.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch4_vzttij.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500366/JD__9908_pdfolf.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499084/IMG_2523_difk6k.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498146/IMG_1527_shenrg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499887/IMG_3840_wg9olg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499067/IMG_2200_vu0gic.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500054/IMG_7681_12_shkwtg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch1_jsvtkg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500346/JD__9340_jhvuqm.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498131/IMG_1334_cadw1r.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500381/JD_9472_lbrcqg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500054/IMG_7681_12_shkwtg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497300/IMG_0099_vv3sp4.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498121/IMG_1213_oyvuut.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500338/JD__9054_aqh52m.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500031/IMG_6819_nga12r.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500172/JD__1979_32OS_kmqiqp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497948/IMG_1176_rkhaw2.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch5_vtphi0.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch16_fjtt30.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500278/JD__6558_atiwgb.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497931/IMG_0963_qz1xy0.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch11_qpni0y.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497652/IMG_0155_eiwtz2.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497936/IMG_0979_wtugmx.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500262/JD__5001_op5xjg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch10_fqtrvy.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498129/IMG_1320_bio8cl.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch8_bdidg3.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497295/BrooklynCommons_IMG_5576_iegwbc.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300987/jdarch18_vqnzz5.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500309/JD__7922_kt5arg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch14_vqagqg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500359/JD__9371_niwdne.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch9_faktwl.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch15_ys25kw.jpg",
];

export default function InteriorGrid() {
  return (
<div className="min-[420px]:columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-5 lg:mb-52">
  {images.map((src, index) => (
    <div key={index} className="relative break-inside-avoid overflow-hidden rounded-xl">
      <div className="relative w-full h-auto">
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        width={1000}
        height={0}
        className="w-full h-auto rounded-xl object-cover transition-transform mb-4 
        duration-200 transform hover:scale-95"
      />
    </div>
    </div>
  ))}
</div>
  );
}
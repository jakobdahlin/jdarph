import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500221/JD__3382_x4xkjk.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500374/JD_2342_1_oy6bh8.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500104/IMG_9398_23_fcdqle.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500098/IMG_9309_evmev2.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499984/IMG_6625_mywhgk.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499895/IMG_3898-Pano_2_fomv3h.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499887/IMG_3846_em9vja.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498844/IMG_2183_did6ul.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498357/IMG_2088_bff9ug.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498136/IMG_1378_qzguaw.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497916/IMG_0408_s9t0i6.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497912/IMG_0401_m4ymlx.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497263/205Hudson_5th_23_x72qpj.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497242/7F2A7332_l3sg27.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300989/jdimage13_i8ystj.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300987/jdarch19_jwm2ki.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499956/IMG_6319_v1g6ou.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500067/IMG_8400_e1dd6x.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499901/IMG_4011_ieol6s.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499999/IMG_6670_uteswe.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499977/IMG_6571_wx13m0.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500237/JD__3810_demlyt.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499950/IMG_6289_mgogtk.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499853/IMG_3200_ak4ohk.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500116/IMG_9533_evivbc.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499076/IMG_2483_a2dqyc.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498240/IMG_2010_doobcr.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500018/IMG_6773_qdlygi.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499399/IMG_2560_gron3i.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500050/IMG_7610_ahngi0.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498833/IMG_2107_wcfh8x.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498160/IMG_1930_yn0ytn.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498160/IMG_1562_fhpjdo.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499983/IMG_6615_om1eec.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499991/IMG_6628_f7m0u7.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498094/7F2A7377_4x5_kddksl.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498137/IMG_1381_a4lgkp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497303/IMG_0105_ch3mpl.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300989/jdimage12_wiwdwz.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499970/IMG_6542_nwkoli.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300988/jdimage9_kh9cxm.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497242/7F2A7332_l3sg27.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch2_huvfc1.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499949/IMG_6264_qw6i3v.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499984/IMG_6606_vqicaq.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497298/FROM-45ROCK-40THROOF_9022_llhuuf.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300985/jdarch7_gldxmf.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300989/jdimage15_ej4g07.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499844/IMG_2712_ESB2_kryu1z.jpg",
  
];

export default function MasonryGrid() {
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

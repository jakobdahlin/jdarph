import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499933/IMG_6090_gul997.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500103/IMG_9325_qjhwk1.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500054/IMG_7656_usydbs.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499842/IMG_2662_cxqkxv.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499504/IMG_2660_2_xqdhau.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499402/IMG_2642_tl2eeb.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498095/160Varick_11th_17_gfa3cs.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498231/IMG_1949_toj2mj.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497920/IMG_0716_200Fifth_paaryl.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498096/33_SE_IMG_9678_jf6a0v.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497654/IMG_0167_a6vgxg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497303/IMG_0116_je3sg9.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497250/33_S_IMG_9681_ucgtby.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498094/33_NW_IMG_9665_o9uyjn.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497257/205Hudson_5th_22_jutae6.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300990/jdimage20_wmpvkp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300989/jdimage14_x7duhb.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300989/jdimage16_i2pw82.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300986/jdarch13_a43p1v.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300988/jdimage7_ma44qm.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739300988/jdimage5_jwgrss.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498122/IMG_0147_nbo1ka.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498231/IMG_1958_sqezip.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498349/IMG_2017_x7gdwd.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498838/IMG_2165_rt9eil.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498839/IMG_2182_tw7lrz.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499843/IMG_2679_isqhi1.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499843/IMG_2675-HDR-1_qkdnrf.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499082/IMG_2507_mijoii.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499399/IMG_2618_2_aehbgg.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499849/IMG_2888_dljjzj.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499505/IMG_2661_rk1ggs.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499876/IMG_3595_hehibp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499888/IMG_3853_ljhssr.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499898/IMG_3954_dmnnnk.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499924/IMG_6027_b8dbxb.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499944/IMG_6227_y2cbl6.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500012/IMG_6748_is4lnm.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500246/JD__4492_ta4vao.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500227/JD__3541_uhnevn.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500019/IMG_6781_boq4ur.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500227/JD__3540_sv2io0.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500288/JD__7143_ie2ot0.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500047/IMG_7571_wlo9xp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500097/IMG_9281_y9rnnu.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500111/IMG_9439_zuvpir.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500287/JD__7128_l4yort.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500180/JD__2025_32OS_rkc7te.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500133/JD__0094_wv22ho.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500207/JD__2653_ofhzgf.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500293/JD__7147_pax6an.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500208/JD__2661_eahhzq.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500173/JD__2015_32OS_xyoe9q.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500132/JD__0164_ortalw.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500228/JD__3543_wwtlxp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500236/JD__3551_ounghy.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500294/JD__7150_s5wwcq.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500213/JD__3165_rmu0wy.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500247/JD__4493_pgahjm.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500220/JD__3381_jxmz52.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500236/JD__3544_mc1wea.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500294/JD__7182_k0yx4b.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500295/JD__7184_tiqcpx.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500302/JD__7203_vxcvne.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500309/JD__7753_rfh932.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500311/JD__7932_g1crmj.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500340/JD__9058_mzsqgp.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500345/JD__9060_kuc0w0.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500347/JD__9348_ynewju.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500352/JD__9350_r09zis.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500366/JD__9995_r533lr.jpg",
  "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500394/ManhattanWest_IMG_5687_mfg19z.jpg",

];

export default function InteriorGrid() {
  return (
    <div className="xs:columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-5 mx-2 lg:mb-52">
      {images.map((src, index) => (
        <div key={index} className="relative break-inside-avoid">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={1000} // Keeps consistent width
            height={0} // Auto height to maintain aspect ratio
            className="w-full h-auto rounded-xl object-cover transition-transform mb-4 
      duration-200 transform hover:scale-95"
          />
        </div>
      ))}
    </div>
  );
}

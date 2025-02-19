import HeroSection from "../components/herosection";
import LicenseOptionsSection from "@/components/licensecard";

export default function Home() {
  return (

<main className="text-center flex flex-col items-center justify-center">

  <div className="w-full max-w-screen-xl mx-auto px-4 mb-10">
    <HeroSection/>
    <div className="max-w-6xl mx-4 mt-14">
  <img 
    src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499843/IMG_2675-HDR-1_qkdnrf.jpg" 
    alt="Architecture" 
    className="w-full h-auto rounded-xl shadow-lg"
  />
  </div>

    <LicenseOptionsSection/>
  </div>
</main>

  );
}

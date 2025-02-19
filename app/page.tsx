import HeroSection from "@/components/herosection";
import LicenseOptionsSection from "@/components/licensecard";
import Image from "next/image";
import LandingPage from "@/components/customsection";

export default function Home() {
  return (

<main className="text-center flex flex-col items-center justify-center">

  <div className="w-full max-w-screen-xl mx-auto px-4 mb-10">
    <HeroSection/>
    <div className="max-w-6xl mx-4 mt-14">
    <Image 
    src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499843/IMG_2675-HDR-1_qkdnrf.jpg" 
    alt="Architecture" 
    width={1200} // Adjust width
    height={800} // Adjust height
    className="w-full h-auto rounded-3xl shadow-lg"
    />
    </div>
    <LicenseOptionsSection/>
    <LandingPage
  imageSrc="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497948/IMG_1176_rkhaw2.jpg"
  imageAlt="Beautiful Architecture"
  title="Book a custom photoshoot"
  description="Custom photography is tailored to your needs, starting with a consultation and a planned photoshoot. The images are captured to match your vision and delivered within 12 hours."
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  onPrimaryClick={() => console.log("Primary Clicked")}
  onSecondaryClick={() => console.log("Secondary Clicked")}
/>
  </div>

</main>
  );
}

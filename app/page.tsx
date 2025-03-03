import HeroSection from "@/components/herosection";
import LicenseOptionsSection from "@/components/licensecard";
import LandingPage from "@/components/customsection";
import ImageSlider from "@/components/imageslider";

const images = [
  { src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500359/JD__9394_uwfpkg.jpg", alt: "Image 1" },
  { src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500031/IMG_6819_nga12r.jpg", alt: "Image 2" },
  { src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500117/JD__0052_nm3qjz.jpg", alt: "Image 3" },
  { src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739499843/IMG_2675-HDR-1_qkdnrf.jpg", alt: "Image 4" },
  { src: "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739498129/IMG_1320_bio8cl.jpg", alt: "Image 5" },
]

export default function Home() {
  return (
<main className="text-center flex flex-col items-center justify-center">
  <div className="w-full max-w-screen-xl mx-auto px-4 mb-10">
    <HeroSection/>
    <div className="max-w-6xl mt-14 mx-auto items-center justify-center">
    <ImageSlider images={images} />
    </div>
    <LicenseOptionsSection/>
    <LandingPage
  imageSrc="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497948/IMG_1176_rkhaw2.jpg"
  imageAlt="Beautiful Architecture"
  title="Book a custom photoshoot"
  description="Custom photography provides tailored images to meet your specific needs, whether for branding, 
  marketing, or personal projects. The process typically starts with a consultation to understand your vision, 
  followed by a carefully planned photoshoot to capture the perfect shots.
  Afterward, the images are professionally edited and delivered in high resolution, 
  ensuring they align with your creative goals. Custom photography allows you to have unique, 
  high-quality visuals that stand out and effectively represent your brand or project."
  primaryButtonText="Get Started"
  secondaryButtonText="Learn More"
  onPrimaryClick={() => console.log("Primary Clicked")}
  onSecondaryClick={() => console.log("Secondary Clicked")}
/>
  </div>
</main>
  );
}

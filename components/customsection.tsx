import Image from "next/image"
import Contactbutton from "./contactbutton";

interface LandingPageProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
}

export default function LandingPage({
  imageSrc,
  imageAlt,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: LandingPageProps) {
  return (
    <div className="text-white">
      <div className="container mx-auto py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src={imageSrc || "https://res.cloudinary.com/dj10sb6gx/image/upload/v1739497948/IMG_1176_rkhaw2.jpg"}
              alt={imageAlt}
              width={300}
              height={400}
              className="rounded-3xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-3xl font-bold mb-6">{title}</h1>
            <p className="text-lg md:text-lg mb-8 text-neutral-600 text-left">{description}</p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
              <Contactbutton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


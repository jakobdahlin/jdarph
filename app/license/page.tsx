import LicenseOptionsSection from "@/components/licensecard";
import LicenseComparison from "@/components/license-comparison";
import FAQSection from "@/components/faq-section";

export default function License() {
  return (

<main className="text-center flex flex-col items-center 
justify-center w-full max-w-screen-2xl mx-auto">
  <div className="w-full mx-auto px-4 mb-10">
  <LicenseOptionsSection/>
    <LicenseComparison/>
    <FAQSection />
  </div>
</main>
  );
}

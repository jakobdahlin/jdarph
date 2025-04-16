import PortfolioGrid from "@/components/portfoliogrid";


export default function About() {
  return (

<main className="text-center flex flex-col items-center 
justify-center w-full max-w-screen-2xl mx-auto">
  <div className="w-full mx-auto px-4 mb-10">
  <h2 className="text-white text-3xl mb-4">Portfolio</h2>
    <div className="flex max-w-3xl mx-auto items-center justify-center">
    
    <p className=" text-neutral-400 mb-10">
        The photographs below are compressed and watermarked. The high resolution originals will be provided through file sharing or email attachment depending on scale.
    </p>
    </div>
    <div className="mb-4"><PortfolioGrid/></div>

  </div>
</main>
  );
}

import InteriorGrid from "@/components/interiorgrid";

export default function Home() {
  return (

<main className="text-center flex flex-col items-center justify-center">
  <div className="w-full mx-auto px-4 mb-10">
    <h2 className="text-white text-3xl mb-10">Interior</h2>
    <InteriorGrid/>
  </div>
</main>
  );
}

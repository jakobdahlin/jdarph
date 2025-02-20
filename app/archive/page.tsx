import InteriorGrid from "@/components/interiorgrid";
import ExteriorGrid from "@/components/exteriorgrid";
import CityscapeGrid from "@/components/cityscapegrid";

export default function Home() {
  return (

<main className="text-center flex flex-col items-center 
justify-center w-full max-w-screen-2xl mx-auto">
  <div className="w-full mx-auto px-4 mb-10">
    <h2 className="text-white text-3xl mb-10">Interior</h2>
    <div className="mb-4"><InteriorGrid/></div>
    <h2 className="text-white text-3xl mb-10">Exterior</h2>
    <div className="mb-4"><ExteriorGrid/></div>
    <h2 className="text-white text-3xl mb-10">Cityscape</h2>
    <div className="mb-4"><CityscapeGrid/></div>
  </div>
</main>
  );
}

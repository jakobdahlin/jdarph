import Link from "next/link";

export default function PostCard({ title, excerpt, slug, category, coverImage }: { 
  title: string; 
  excerpt: string; 
  slug: string; 
  category: string;
  coverImage: string; 
}) {

  return (
<div className="border border-neutral-700 rounded-3xl bg-neutral-900/50 
overflow-hidden shadow-xl flex flex-col h-full">
  <img src={coverImage} alt={title} className="w-full object-cover" />
  
  <div className="p-4 flex flex-col flex-grow">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-neutral-500 mb-4 flex-grow">{excerpt}</p>

    <div className="items-center relative z-10 flex justify-center mt-12">
    <Link href={slug} className="relative w-full mx-auto justify-center items-center">
      <button
  className="relative cursor-pointer w-full h-full rounded-xl 
      py-3 bg-neutral-900 hover:text-neutral-300 active:text-white
      overflow-hidden group transition-transform 
      duration-100 transform hover:scale-95 shadow-[0px_15px_15px_rgba(0,0,0,0.3)]
      hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)]
      active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]"
>
  <div
    style={{
      background: `
        border-box linear-gradient(180deg,
          rgba(100, 100, 100, 1), 
          rgba(50, 50, 50, 1),
          rgba(38, 38, 38, 1),
          rgba(38, 38, 38, 1)
        )
      `,
    }}
    className="
      absolute inset-0 rounded-xl transition-all duration-100
      bg-[linear-gradient(145deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))] 
      group-hover:bg-[linear-gradient(90deg,_rgba(0,255,0,0.8),_rgba(255,0,0,0.8),_rgba(0,0,255,0.8))]
    "
  />

  <div 
    className="absolute inset-[1px] bg-neutral-900 rounded-xl pointer-events-none 
      transition-shadow duration-100 z-10 lg:animate-slowPulse
    " 
  />

  <span className="relative z-10 flex text-lg justify-center items-center w-full h-full">
    Read More
  </span>
</button>

      </Link>
    </div>
  </div>
</div>

  )
}

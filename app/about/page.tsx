import Image from "next/image"

export default function AboutMe() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="https://i.ibb.co/QvVx3JR8/JDPortrait.jpg"
            alt="Jakob Dahlin"
            width={300}
            height={300}
            className="mx-auto rounded-full border-4 border-white shadow-2xl shadow-black"
          />
          <h1 className="mt-6 text-4xl font-bold text-white">Jakob Dahlin</h1>
          <p className="mt-2 text-xl text-neutral-500">New York's Top Architectural Photographer</p>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          <section className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-4">Architectural Photography</h2>
            <p className="text-neutral-500">
              Jakob's talent isn't just limited to digital design; he's also made a name for himself in architectural
              photography. His work has gained a lot of recognition, especially in New York City, though his reach goes
              well beyond that. He's known for capturing both residential and commercial real estate, giving buildings a
              new sense of life and personality through his creative eye.
            </p>
            <p className="mt-4 text-neutral-500">
              His portfolio is packed with iconic landmarks like the Woolworth Building, Empire State Building, Four
              Seasons Private Residences, The Textile Building, and The News Building. People in cities like New York,
              Los Angeles, and Stockholm have praised his skill in showcasing the grandeur and intricate details of
              these structures. It's that ability to blend artistry and architecture that really sets him apart.
            </p>
          </section>

          <section className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-4">Featured on Million Dollar Listing: New York</h2>
            <p className="text-neutral-500">
              Jakob's reputation as an architectural photographer took off even more after his work was featured on
              Million Dollar Listing: New York. That exposure opened doors to collaborations with top real estate brands
              and gave his work global visibility.
            </p>
            <p className="mt-4 text-neutral-500">
              His talent has even caught the eye of major international companies like IKEA, who have showcased his
              photography. This kind of recognition has cemented his status as one of the go-to names in architectural
              photography.
            </p>
          </section>

          <section className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-4">Jakob Dahlin and Design</h2>
            <p className="text-neutral-500">
              Jakob Dahlin brings together his talent for architectural photography with a strong passion for UI/UX,
              graphic, and web design. He's always pushing himself to learn, experimenting with new tools, apps, and
              coding languages to stay ahead in these ever-changing fields. For him, it's all about growth and staying
              on top of his game.
            </p>
          </section>

          <section className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Connecting UI/UX, Graphic Design, and Web Design
            </h2>
            <p className="text-neutral-500">
              Jakob is all about crafting websites that are both user-friendly and visually captivating, striking a
              balance between functionality and aesthetics. His graphic design background gives him the edge to design
              interfaces that feel simple yet leave a lasting impression.
            </p>
            <p className="mt-4 text-neutral-500">
              For him, brand and user research are key. He believes that to create a successful product—whether it's a
              site or something else—it needs to align with the brand's identity while also truly resonating with its
              users. That attention to both form and function is what makes his work stand out.
            </p>
          </section>

          <section className="mb-8 lg:mb-0 lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-4">Always Learning and Evolving</h2>
            <p className="text-neutral-500">
              Jakob is fueled by a nonstop drive to learn. Whether it's picking up a new design tool, testing out the
              latest apps, or exploring different coding languages, he's always up for a challenge. He approaches
              problems with a "why not?" attitude, ready to try new things and learn from the experience.
            </p>
            <p className="mt-4 text-neutral-500">
              This commitment to growth allows him to consistently deliver fresh, innovative solutions that meet the
              needs of both his clients and their audiences. For Jakob, it's all about staying ahead of the curve and
              pushing creative boundaries.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


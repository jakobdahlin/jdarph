import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-500 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <Link href="/">
  <img src="https://i.ibb.co/fzWckJHf/JAKOBLOGO.png" alt="jakob-dahlin-logo" className="w-44 h-auto mb-6 rounded-lg" />
  </Link>
            <p className="mb-4">
            Capturing the design and character of New York City’s architecture, I create high-quality images that highlight the structure, details, and atmosphere of buildings for architects, developers, and businesses.
            </p>


            <Link href="/about" className="text-blue-400 hover:text-blue-300">
              Learn More
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-neutral-300">Home</Link></li>
              <li><Link href="/archive" className="hover:text-neutral-300">Archive</Link></li>
              <li><Link href="/license" className="hover:text-neutral-300">License</Link></li>
              <li><Link href="/blog" className="hover:text-neutral-300">Blog</Link></li>
              <li><Link href="/about" className="hover:text-neutral-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Anytown, USA 12345</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p className="mb-2">Email: jakob@jakobdahlin.com</p>
          </div>
          <div>
          <img 
          src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500054/IMG_7681_12_shkwtg.jpg" 
          alt="jakob-dahlin-logo" 
          className="w-auto h-64 mb-6 rounded-xl" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} Jakob Dahlin Architectural Photograph. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}



import Link from "next/link";
import { Github, Linkedin, Instagram, Link2, Mail } from 'lucide-react';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-500 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <img 
                src="https://i.ibb.co/fzWckJHf/JAKOBLOGO.png" 
                alt="jakob-dahlin-logo" 
                className="w-44 h-auto mb-6 rounded-lg" 
              />
            </Link>
            <p className="mb-4">
              Bringing New York's architecture to life through photography since 2015, capturing the city's evolving skyline, iconic landmarks, and hidden architectural gems with precision and artistry.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/archive" className="hover:text-neutral-300">Archive</Link></li>
              <li><Link href="/license" className="hover:text-neutral-300">License</Link></li>
              <li><Link href="/blog" className="hover:text-neutral-300">Blog</Link></li>
              <li><Link href="/about" className="hover:text-neutral-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-neutral-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Social</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <Instagram className="w-6 h-6 mr-2 text-white" />
                <Link href="https://instagram.com/jakobdahlin" className="hover:text-neutral-300">Instagram</Link>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 mr-2 text-white" />
                <Link href="https://www.linkedin.com/in/jakobdahlin/" className="hover:text-neutral-300">LinkedIn</Link>
              </div>
              <div className="flex items-center">
                <Github className="w-6 h-6 mr-2 text-white" />
                <Link href="https://github.com/jakobdahlin" className="hover:text-neutral-300">Instagram</Link>
              </div>
              <div className="flex items-center">
                <Link2 className="w-6 h-6 mr-2 text-white" />
                <Link href="https://jakobdahlin.com" className="hover:text-neutral-300">jakobdahlin.com</Link>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-white" />
                <Link href="/archive" className="hover:text-neutral-300">Email</Link>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://res.cloudinary.com/dj10sb6gx/image/upload/v1739500054/IMG_7681_12_shkwtg.jpg" 
              alt="jakob-dahlin-logo" 
              className="w-auto h-60 mb-6 rounded-xl" 
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p>&copy; {currentYear} Jakob Dahlin Architectural Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

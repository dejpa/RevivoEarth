// src/app/components/Footer.tsx
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'; 

export default function Footer() {
    return (
        <footer className="bg-zinc-200 text-green-950 p-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className='md-1/3'>
                    <h3 className="text-md md:text-lg font-bold">Contact Us</h3>
                    <p>Address: 123 Green St, Eco City</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Email: info@RevivoEarth.com</p>
                </div>
                <div className='md-1/3'>
                    <h3 className="text-md md:text-lg font-bold">Quick Links</h3>
                    <ul>
                        <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div className='md-1/3'>
                    <h3 className="text-md md:text-lg font-bold">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                        href="https://www.instagram.com/@revivoearth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a
                        href="https://www.linkedin.com/company/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                        >
                        <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                        href="https://twitter.com/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                        >
                        <FaXTwitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© 2025 BioMulch. All rights reserved.</p>
            </div>
        </footer>
    );
  }
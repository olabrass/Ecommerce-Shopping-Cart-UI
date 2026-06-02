import { FaStore } from "react-icons/fa"; 


 export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-20 py-12 md:grid-cols-3">

        {/* Brand Section */}
        <div>
    <div className="flex items-center gap-2">
        <FaStore className="text-3xl text-white-600" />
        <h1 className="text-2xl font-bold text-white-800">
            PhillyMart
        </h1>
    </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            A modern React-based e-commerce product catalogue powered by JSON Server.
            Built for speed, scalability, and clean UI experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Developer Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Developer
          </h3>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <span className="text-gray-400">Name:</span> Philips Ola
            </p>

            <p>
              <span className="text-gray-400">Role:</span> Frontend Developer (React)
            </p>

            <p>
              <span className="text-gray-400">Project:</span> Product Catalogue (React + JSON Server)
            </p>

            <p>
              <span className="text-gray-400">Location:</span> Lagos, Nigeria
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-24 py-6 text-sm md:flex-row">

          <p className="text-gray-500">
            © {new Date().getFullYear()} PhillyMart. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with ❤️ using React & JSON Server
          </p>

        </div>
      </div>

    </footer>
  );
}

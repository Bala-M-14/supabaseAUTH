import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-neutral-800 sticky top-0 bg-black/50 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Nova Auth</div>
          <div className="space-x-6 hidden sm:flex">
            <a href="#features" className="hover:text-neutral-300 transition">Features</a>
            <a href="#pricing" className="hover:text-neutral-300 transition">Pricing</a>
            <Link href="/login" className="text-white hover:text-neutral-300 transition">Sign In</Link>
          </div>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8">
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
            Secure Authentication <br />
            <span className="text-neutral-400">Made Simple</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Build powerful applications with bulletproof authentication. Sign up now and get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link 
              href="/signup"
              className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-neutral-100 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              href="/login"
              className="border border-neutral-600 text-white font-bold py-3 px-8 rounded-lg hover:border-neutral-400 hover:bg-neutral-900 transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-800">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-3">Enterprise Grade Security</h3>
            <p className="text-neutral-400">Bank-level encryption and security protocols to keep your data safe.</p>
          </div>

         <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-neutral-400">Optimized performance with minimal latency for the best user experience.</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Works Everywhere</h3>
            <p className="text-neutral-400">Seamless experience across all devices and platforms.</p>
          </div>
        </div>
      </section>

         <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold">100M+</div>
            <p className="text-neutral-400 mt-2">Authentications processed</p>
          </div>
          <div>
            <div className="text-5xl font-bold">99.99%</div>
            <p className="text-neutral-400 mt-2">Uptime guarantee</p>
          </div>
          <div>
            <div className="text-5xl font-bold">0ms</div>
            <p className="text-neutral-400 mt-2">Auth latency</p>
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-neutral-800">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Join thousands of developers building amazing apps with secure authentication.
          </p>
          <Link 
            href="/signup"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-neutral-100 transition-all transform hover:scale-105"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

     
      <footer className="border-t border-neutral-800 mt-20 py-12 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 flex justify-between items-center text-neutral-400 text-sm">
            <p>&copy; 2024 Auth. All rights reserved.</p>
            <p>Built with Next.js & Supabase</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

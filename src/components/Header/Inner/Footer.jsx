import React from 'react'

const Footer = () => {
  return (
    <footer className=\"bg-[#1a3a1c] text-[#9dbf9a] px-4 md:px-8 lg:px-16 py-8 md:py-12\">
      
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-10 border-b border-[#2e5e31]">

        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-[#2e7d32] rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <span className="text-white text-lg font-medium">FreshMart</span>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Fresh groceries delivered to your doorstep in 30 minutes. 
            100% organic, best quality produce at affordable prices.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 mt-1">
            {[
              // Facebook
              <path key="fb" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
              // Instagram
              <><rect key="ig-r" x="2" y="2" width="20" height="20" rx="5"/><path key="ig-p" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line key="ig-l" x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
              // Twitter
              <path key="tw" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>,
            ].map((icon, i) => (
              <button key={i}
                className="w-9 h-9 rounded-lg bg-[#2a5c2d] border border-[#3a7a3e] flex items-center justify-center hover:bg-[#3a7a3e] transition cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="#9dbf9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'Shop', 'Categories', 'About Us', 'Blog', 'Contact'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-green-400 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-medium mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {['Fruits & Vegetables', 'Dairy & Eggs', 'Bakery', 'Beverages', 'Snacks', 'Organic'].map(cat => (
              <li key={cat}>
                <a href="#" className="hover:text-green-400 transition">{cat}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <svg className="mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="#5dc45d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              123 Green Street, Karachi, Pakistan
            </p>
            <p className="flex items-start gap-2">
              <svg className="mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="#5dc45d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +92 300 1234567
            </p>
            <p className="flex items-start gap-2">
              <svg className="mt-0.5 flex-shrink-0" width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="#5dc45d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              hello@freshmart.pk
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="flex items-center gap-1 bg-[#2a5c2d] border border-[#3a7a3e] rounded-md px-3 py-1 text-xs">
                🚚 30 min delivery
              </span>
              <span className="flex items-center gap-1 bg-[#2a5c2d] border border-[#3a7a3e] rounded-md px-3 py-1 text-xs">
                🔒 100% secure
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center pt-5 text-xs text-[#6a9a68]">
        <span>© 2026 FreshMart. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#9dbf9a] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#9dbf9a] transition">Terms of Service</a>
          <a href="#" className="hover:text-[#9dbf9a] transition">Refund Policy</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-pink-50 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div class="lg:col-span-1">
            <h3 class="text-purple-600 text-2xl font-semibold mb-4">kalenjin.online</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6">
              Celebrating the rich heritage, culture, and achievements of the Kalenjin people.
              Join us in preserving and sharing our traditions.
            </p>
            <div class="flex space-x-3">
              <a href="#" class="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-gray-600 hover:bg-purple-600 hover:text-white transition-all duration-200 hover:-translate-y-1 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-gray-900 font-semibold text-base mb-4">Explore</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Communities</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Culture</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Music</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Events</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Shop</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Donate</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-gray-900 font-semibold text-base mb-4">Discover</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Radio & TV</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Sports</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">History</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Map</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-gray-900 font-semibold text-base mb-4">Learn</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Learn Kalenjin</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Proverbs</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Famous Leaders</a></li>
              <li><a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Food</a></li>
            </ul>
          </div>
        </div>

        <div class="bg-purple-50 rounded-2xl p-6 mb-8">
          <h4 class="text-gray-900 font-semibold text-base mb-6">Get in Touch</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m2 7 10 7 10-7"></path>
              </svg>
              <div>
                <div class="text-purple-600 font-semibold text-xs uppercase tracking-wide mb-1">Email</div>
                <div class="text-gray-700 text-sm">info@kalenjin.online</div>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <div class="text-purple-600 font-semibold text-xs uppercase tracking-wide mb-1">Location</div>
                <div class="text-gray-700 text-sm">Rift Valley, Kenya</div>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <div class="text-purple-600 font-semibold text-xs uppercase tracking-wide mb-1">Phone</div>
                <div class="text-gray-700 text-sm">+254 700 000 000</div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm mb-4 md:mb-0">
            © {{ currentYear }} kalenjin.online. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-600 text-sm hover:text-purple-600 transition-colors">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

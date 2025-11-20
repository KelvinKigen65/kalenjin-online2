import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">About Kalenjin.Online</h1>
          <p class="text-xl md:text-2xl opacity-90">
            Preserving and celebrating Kalenjin heritage in the digital age
          </p>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-4">
              Kalenjin.Online is dedicated to preserving, celebrating, and sharing the rich cultural heritage
              of the Kalenjin people. We serve as a digital repository and platform for cultural education,
              bringing together communities from across the globe.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Through our platform, we aim to ensure that future generations have access to their cultural
              roots while adapting to the modern world. We celebrate our traditions, language, music, and
              the achievements of Kalenjin people worldwide.
            </p>
          </div>

          <!-- Values -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-xl shadow-md p-6 text-center">
              <div class="text-4xl mb-4">🌍</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p class="text-gray-600">Bringing Kalenjin people together across borders</p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6 text-center">
              <div class="text-4xl mb-4">📚</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Education</h3>
              <p class="text-gray-600">Preserving and teaching our cultural heritage</p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6 text-center">
              <div class="text-4xl mb-4">🎉</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Celebration</h3>
              <p class="text-gray-600">Honoring our traditions and achievements</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="py-16 bg-purple-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p class="text-xl text-white opacity-90 mb-8">
            Join us in preserving and celebrating Kalenjin heritage
          </p>
          <button class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  `
})
export class AboutPage {}

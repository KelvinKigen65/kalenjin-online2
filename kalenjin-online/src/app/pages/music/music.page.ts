import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Kalenjin Music</h1>
          <p class="text-xl md:text-2xl opacity-90">
            Traditional songs, instruments, and musical heritage
          </p>
        </div>
      </section>

      <!-- Traditional Instruments -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Traditional Instruments</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div class="text-4xl mb-4">🎺</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Sibrengwet</h3>
              <p class="text-gray-600">A traditional horn made from animal horn, used for communication and ceremonial purposes.</p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div class="text-4xl mb-4">🪘</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Drums</h3>
              <p class="text-gray-600">Various drums used in ceremonies and celebrations, providing rhythm for dances and songs.</p>
            </div>

            <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div class="text-4xl mb-4">🎸</div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">String Instruments</h3>
              <p class="text-gray-600">Traditional stringed instruments that accompany storytelling and folk songs.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Song Types -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Types of Traditional Songs</h2>
          <div class="space-y-6">
            <div class="border-l-4 border-pink-600 pl-6 py-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Warrior Songs (Cheptalel)</h3>
              <p class="text-gray-600">Songs of bravery and heroism sung by warriors, celebrating victories and encouraging courage.</p>
            </div>

            <div class="border-l-4 border-pink-600 pl-6 py-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Work Songs</h3>
              <p class="text-gray-600">Rhythmic songs sung during communal activities like farming, building, and herding.</p>
            </div>

            <div class="border-l-4 border-pink-600 pl-6 py-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Ceremonial Songs</h3>
              <p class="text-gray-600">Special songs for weddings, initiations, and other important community ceremonies.</p>
            </div>

            <div class="border-l-4 border-pink-600 pl-6 py-4">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Lullabies</h3>
              <p class="text-gray-600">Gentle songs sung by mothers to soothe and entertain children.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
})
export class MusicPage {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CulturalAspect {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Kalenjin Culture</h1>
          <p class="text-xl md:text-2xl opacity-90">
            Rich traditions, clothing, customs, and ceremonies
          </p>
        </div>
      </section>

      <!-- Cultural Aspects -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div *ngFor="let aspect of culturalAspects"
                 class="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">{{ aspect.icon }}</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ aspect.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ aspect.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Traditional Clothing Section -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Traditional Clothing</h2>
          <div class="prose max-w-none text-gray-600">
            <p class="text-lg leading-relaxed mb-4">
              Traditional Kalenjin clothing reflects the community's pastoral heritage and warrior traditions.
              Men traditionally wore animal skins and decorated themselves with ornaments made from beads,
              copper, and brass.
            </p>
            <p class="text-lg leading-relaxed">
              Women adorned themselves with elaborate beadwork, leather skirts, and brass coils.
              Today, these traditional items are worn during ceremonies, celebrations, and cultural events,
              preserving the rich heritage of the Kalenjin people.
            </p>
          </div>
        </div>
      </section>
    </main>
  `
})
export class CulturePage {
  culturalAspects: CulturalAspect[] = [
    {
      title: 'Initiation Ceremonies',
      description: 'Tumdo (circumcision) is a crucial rite of passage marking the transition from childhood to adulthood, accompanied by teachings on community values and responsibilities.',
      icon: '🎭'
    },
    {
      title: 'Traditional Music & Dance',
      description: 'Kalenjin music features unique instruments like the kubing (mouth harp) and traditional dances performed during celebrations, ceremonies, and community gatherings.',
      icon: '🎵'
    },
    {
      title: 'Age-Set System',
      description: 'The Ipinda age-set system organizes society into groups initiated together, creating lifelong bonds and social structure within the community.',
      icon: '👥'
    },
    {
      title: 'Oral Traditions',
      description: 'Stories, proverbs (ngokwek), and historical narratives passed down through generations preserve cultural wisdom and identity.',
      icon: '📖'
    },
    {
      title: 'Marriage Customs',
      description: 'Traditional marriage involves elaborate processes including dowry negotiation (koito), ceremonies, and celebrations that unite families.',
      icon: '💍'
    },
    {
      title: 'Dietary Traditions',
      description: 'Traditional foods include mursik (fermented milk), ugali, vegetables, and meat, reflecting the agricultural and pastoral lifestyle.',
      icon: '🥘'
    }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Community {
  name: string;
  description: string;
  region: string;
}

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Kalenjin Communities</h1>
          <p class="text-xl md:text-2xl opacity-90">
            Discover the diverse communities that make up the Kalenjin people
          </p>
        </div>
      </section>

      <!-- Communities List -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div *ngFor="let community of communities"
                 class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ community.name }}</h3>
              <p class="text-purple-600 font-semibold mb-3">{{ community.region }}</p>
              <p class="text-gray-600 leading-relaxed">{{ community.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
})
export class CommunitiesPage {
  communities: Community[] = [
    {
      name: 'Nandi',
      region: 'Nandi County',
      description: 'Known for their warrior traditions and athletic prowess, the Nandi community has produced many world-renowned runners.'
    },
    {
      name: 'Kipsigis',
      region: 'Kericho County',
      description: 'The largest Kalenjin sub-tribe, famous for tea farming and rich cultural traditions.'
    },
    {
      name: 'Tugen',
      region: 'Baringo County',
      description: 'Known for their resilience and adaptation to diverse ecological zones from highlands to lowlands.'
    },
    {
      name: 'Keiyo',
      region: 'Elgeyo-Marakwet County',
      description: 'Inhabitants of the scenic Kerio Valley, known for their agricultural practices and honey production.'
    },
    {
      name: 'Marakwet',
      region: 'Elgeyo-Marakwet County',
      description: 'Famous for their ancient irrigation systems and terraced farming on steep hillsides.'
    },
    {
      name: 'Pokot',
      region: 'West Pokot County',
      description: 'Semi-nomadic pastoralists known for their livestock keeping and unique cultural practices.'
    },
    {
      name: 'Sabaot',
      region: 'Trans-Nzoia County',
      description: 'Mountain dwellers known for their agricultural skills and preservation of traditional customs.'
    },
    {
      name: 'Terik',
      region: 'Nandi County',
      description: 'A small but culturally significant community with unique linguistic characteristics.'
    }
  ];
}

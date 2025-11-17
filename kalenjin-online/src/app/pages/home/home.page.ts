import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeritageCard {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main>
      <section class="relative h-[600px] bg-gradient-to-br from-amber-900 via-stone-800 to-stone-900 overflow-hidden">
        <div class="absolute inset-0 bg-black/50"></div>

        <div class="relative h-full flex items-center justify-center px-4">
          <div class="text-center text-white max-w-4xl">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              kalenjin.online
            </h1>
            <p class="text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-lg opacity-95">
              Embrace the spirit, stories, and songs of the Kalenjin people.
            </p>
            <button
              (click)="scrollToHeritage()"
              class="inline-block bg-white/20 backdrop-blur-md text-white border-2 border-white px-8 py-3.5 text-lg font-medium rounded-lg hover:bg-white/30 hover:-translate-y-1 transition-all duration-300 shadow-xl">
              Explore Culture
            </button>
          </div>
        </div>
      </section>

      <section id="heritage" class="py-16 md:py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Discover Our Heritage
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              A rich tapestry of culture, history, and community waiting to be explored.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              *ngFor="let card of heritageCards"
              class="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div class="w-12 h-12 mb-4 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="w-full h-full"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                  <g [innerHTML]="card.icon"></g>
                </svg>
              </div>

              <h3 class="text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {{ card.title }}
              </h3>

              <p class="text-gray-600 leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  `
})
export class HomePage {
  heritageCards: HeritageCard[] = [
    {
      title: 'Communities',
      description: 'List of Kalenjin Communities',
      icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>'
    },
    {
      title: 'Culture',
      description: 'Traditions, clothing, and customs.',
      icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>'
    },
    {
      title: 'Map',
      description: 'Heatmap of where to find kalenjins.',
      icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>'
    },
    {
      title: 'Music',
      description: 'Traditional songs and instruments.',
      icon: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>'
    },
    {
      title: 'Sports',
      description: 'Athletic achievements and traditions.',
      icon: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>'
    },
    {
      title: 'History',
      description: 'Stories and historical events.',
      icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>'
    }
  ];

  scrollToHeritage(): void {
    const element = document.getElementById('heritage');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

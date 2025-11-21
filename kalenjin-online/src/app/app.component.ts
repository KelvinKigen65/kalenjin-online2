import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen bg-purple-600 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-xl">
        <h1 class="text-4xl font-bold text-purple-600 mb-4">
          ✅ It's Working!
        </h1>
        <p class="text-xl text-gray-700">
          Angular and Tailwind are connected.
        </p>
      </div>
    </div>
  `
})
export class AppComponent {}

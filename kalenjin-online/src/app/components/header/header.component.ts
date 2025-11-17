import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a routerLink="/"
             class="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors duration-200">
            kalenjin.online
          </a>

          <nav class="flex items-center space-x-4">
            <a routerLink="/"
               class="text-gray-600 hover:text-purple-600 transition-colors duration-200 p-2"
               title="Home">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="w-5 h-5"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </a>

            <button (click)="onSignIn()"
                    class="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-sm hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="w-4 h-4"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   stroke-width="2"
                   stroke-linecap="round"
                   stroke-linejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span>Sign In</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  onSignIn(): void {
    console.log('Sign in clicked');
  }
}

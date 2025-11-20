import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a routerLink="/"
             class="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors duration-200">
            kalenjin.online
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-6">
            <a routerLink="/"
               routerLinkActive="text-purple-600"
               [routerLinkActiveOptions]="{exact: true}"
               class="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Home
            </a>
            <a routerLink="/communities"
               routerLinkActive="text-purple-600"
               class="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Communities
            </a>
            <a routerLink="/culture"
               routerLinkActive="text-purple-600"
               class="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Culture
            </a>
            <a routerLink="/music"
               routerLinkActive="text-purple-600"
               class="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              Music
            </a>
            <a routerLink="/about"
               routerLinkActive="text-purple-600"
               class="text-gray-600 hover:text-purple-600 transition-colors font-medium">
              About
            </a>

            <button (click)="onSignIn()"
                    class="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-sm hover:shadow-md ml-4">
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

          <!-- Mobile Menu Button -->
          <button (click)="toggleMenu()"
                  class="md:hidden text-gray-600 hover:text-purple-600 transition-colors p-2">
            <svg *ngIf="!isMenuOpen"
                 xmlns="http://www.w3.org/2000/svg"
                 class="w-6 h-6"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg *ngIf="isMenuOpen"
                 xmlns="http://www.w3.org/2000/svg"
                 class="w-6 h-6"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="isMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <nav class="flex flex-col space-y-3">
            <a routerLink="/"
               (click)="closeMenu()"
               routerLinkActive="text-purple-600 bg-purple-50"
               [routerLinkActiveOptions]="{exact: true}"
               class="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-3 py-2 rounded-lg">
              Home
            </a>
            <a routerLink="/communities"
               (click)="closeMenu()"
               routerLinkActive="text-purple-600 bg-purple-50"
               class="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-3 py-2 rounded-lg">
              Communities
            </a>
            <a routerLink="/culture"
               (click)="closeMenu()"
               routerLinkActive="text-purple-600 bg-purple-50"
               class="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-3 py-2 rounded-lg">
              Culture
            </a>
            <a routerLink="/music"
               (click)="closeMenu()"
               routerLinkActive="text-purple-600 bg-purple-50"
               class="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-3 py-2 rounded-lg">
              Music
            </a>
            <a routerLink="/about"
               (click)="closeMenu()"
               routerLinkActive="text-purple-600 bg-purple-50"
               class="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors font-medium px-3 py-2 rounded-lg">
              About
            </a>
            <button (click)="onSignIn()"
                    class="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-purple-700 transition-colors">
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
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onSignIn(): void {
    console.log('Sign in clicked');
    this.closeMenu();
  }
}

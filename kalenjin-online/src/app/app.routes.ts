import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { CommunitiesPage } from './pages/communities/communities.page';
import { CulturePage } from './pages/culture/culture.page';
import { MusicPage } from './pages/music/music.page';
import { AboutPage } from './pages/about/about.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'communities', component: CommunitiesPage },
  { path: 'culture', component: CulturePage },
  { path: 'music', component: MusicPage },
  { path: 'about', component: AboutPage },
  { path: '**', redirectTo: '' }
];

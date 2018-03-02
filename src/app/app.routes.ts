import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//Dos formas para que nuestros redireccionamientos funcionen.
//1. UseHash
export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
//export const app_routing = RouterModule.forRoot(app_routes);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Routes
import { app_routing } from './app.routes';

// Services
import { SpotifyService } from './services/spotify.service';

// My Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  // When you define something in providers scope, it means that this
  // could be used in all the application.
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

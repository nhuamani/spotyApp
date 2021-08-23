import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/shared/card/card.component';
import { BuscarComponent } from './components/buscar/buscar.component';

// Routes
import { AppRoutingModule } from './app.routing';

// Services
import { SpotifyService } from './services/spotify.service';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    BuscarComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

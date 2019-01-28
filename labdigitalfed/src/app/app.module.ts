import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/parts/header/header.component';
import { NavbarComponent } from './templates/parts/navbar/navbar.component';
import { BannerComponent } from './templates/parts/banner/banner.component';
import { BlocksComponent } from './templates/parts/blocks/blocks.component';
import { ContactFormComponent } from './templates/parts/contact-form/contact-form.component';
import { FooterComponent } from './templates/parts/footer/footer.component';
import { FooterCarouselComponent } from './templates/parts/footer-carousel/footer-carousel.component';
import { HappinessIndicatorComponent } from './templates/parts/happiness-indicator/happiness-indicator.component';
import { SectionContactComponent } from './templates/parts/section-contact/section-contact.component';
import { HomepageComponent } from './templates/pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    BlocksComponent,
    ContactFormComponent,
    FooterComponent,
    FooterCarouselComponent,
    HappinessIndicatorComponent,
    SectionContactComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

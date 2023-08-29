import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ClockComponent } from './components/clock/clock.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { TextinputdivComponent } from './components/textinputdiv/textinputdiv.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewsComponent } from './components/news/news.component';
import { PriceComponent } from './components/price/price.component';
import { AboutComponent } from './components/about/about.component';
import { NewsBlockComponent } from './components/news-block/news-block.component';
import { HttpClientModule } from '@angular/common/http';
import { NewService } from './services/new.service';
import { ApiSearchComponent } from './components/api-search/api-search.component';


const appRoutes:Routes=[
  {path:'', component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"news", component: NewsComponent},
  {path:"price", component: PriceComponent},
  {path:'**', component: NotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    ClockComponent,
    PicturesComponent,
    TextinputdivComponent,
    HomeComponent,
    NotFoundComponent,
    NewsComponent,
    PriceComponent,
    AboutComponent,
    NewsBlockComponent,
    ApiSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule {}

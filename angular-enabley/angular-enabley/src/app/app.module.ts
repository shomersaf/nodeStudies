import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './components/my/my.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './components/details/details.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/result/result.component';
import { GaleryComponent } from './components/galery/galery.component';
import { InputAndOutputsComponent } from './components/input-and-outputs/input-and-outputs.component';
import { OnlyHebrewDirective } from './directives/only-hebrew.directive';
import { SuffixPipe } from './pipes/suffix.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    HeaderComponent,
    DetailsComponent,
    SkillsComponent,
    MainComponent,
    ResultComponent,
    GaleryComponent,
    InputAndOutputsComponent,
    OnlyHebrewDirective,
    SuffixPipe ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

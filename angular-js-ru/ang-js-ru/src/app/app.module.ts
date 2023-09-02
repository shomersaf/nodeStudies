import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopicComponent } from './components/topic/topic.component';
import { ColorizeDirective } from './directives/colorize.directive';
import { DelayDirective } from './directives/delay.directive';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicComponent,
    ColorizeDirective,
    DelayDirective,
    FooterComponent,
    DynamicComponent,
    UsersComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'



import { AppComponent } from './app.component';
import { AppNavvComponent } from './app-navv/app-navv.component';
import { AppListtComponent } from './app-listt/app-listt.component';
import { AppFooterrComponent } from './app-footerr/app-footerr.component';



@NgModule({
  declarations: [
    AppComponent,
    AppNavvComponent,
    AppListtComponent,
    AppFooterrComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

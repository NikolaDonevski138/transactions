import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
// import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // StoreModule.forRoot(fromApp.appReducer)

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
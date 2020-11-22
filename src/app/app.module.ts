import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyListItemComponent } from './currency-list/currency-list-item/currency-list-item.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { MoneyComponent } from './money/money.component';


@NgModule({
  declarations: [AppComponent,
    MoneyComponent,
    CurrencySelectorComponent,
    CurrencyListComponent,
    CurrencyListItemComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Currencies } from './model/currencies';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConversionRate } from './model/conversion-rate.model';
import { ConversionRatesService } from './services/conversion-rates.service';
import { CurrencyListService } from './services/currency-list.service';

@Component({
  selector: 'simple-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  newRates: ConversionRate;
  isLoading = false;
  responseErrorMessage: string;
  baseCurrencies: Currencies;
  currencies: Currencies;

  constructor(
    private conversionRatesService: ConversionRatesService,
    private currencyListService: CurrencyListService
  ) { }

  ngOnInit() {
    this.currencies = this.currencyListService.getCurrencies();
    this.baseCurrencies = this.currencyListService.generateBaseCurrencies(['EUR', 'USD', 'GBP']);

    this.subscription = this.conversionRatesService
    .getLoadingStatus()
    .subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onExchangeRateUpdate(newRates: ConversionRate) {
    this.newRates = newRates;
  }
}

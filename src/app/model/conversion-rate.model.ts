import { ExchangeRates } from './exchanges-rates.model';

export class ConversionRate {
  constructor(
    public amount: number,
    public baseCurrencyCode: string,
    public date: Date,
    public rates: ExchangeRates
  ) { }
}

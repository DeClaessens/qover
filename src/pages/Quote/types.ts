export interface IQuote {
  quote?: QuoteResponse;
}

export interface GetQuoteDTO {
  carId: string;
  purchasePrice: number;
  age: number;
}

export interface QuoteResponse {
  yearlyPrice: {
    universal: number;
    global: number;
  };
}

export interface IFrequencyLabel {
  selected: Boolean;
}

export interface IQuotePanel {
  title: string;
  price: number;
  features: React.ReactNode[];
  selected?: Boolean;
  monthly: Boolean;
  onSelect: () => void;
}

export interface IWrapper {
  selected?: Boolean;
}

export interface IHeadingWrapper {
  selected?: Boolean;
}

export interface IPriceWrapper {
  selected?: Boolean;
}

export interface IFeature {
  selected?: Boolean;
}

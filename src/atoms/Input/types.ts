export interface IInput {
  name: string;
  label: string;
  variant: "underlined" | "box";
  type: "text" | "password" | "email" | "number";
  error?: string;
  step?: string;
  backLabel?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IBoxInput {
  error?: string;
}

export interface IBoxBackLabel {
  error?: string;
}

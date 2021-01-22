export interface IButton {
  variant: "regular" | "outlined" | "lightblue" | "lightblue-selected";
  children: React.ReactNode;
  disabled?: Boolean;
  onClick: () => void;
}

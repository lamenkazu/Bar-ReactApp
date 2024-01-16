export interface SelectOption {
  value: string;
  label: string;
}

export const drinkOptions: SelectOption[] = [
  { value: "", label: "Selecionar" },
  { value: "Dose", label: "Dose" },
  { value: "Cerveja", label: "Cerveja" },
  { value: "Cigarro", label: "Cigarro" },
  { value: "Refrigerante", label: "Refrigerante" },
  { value: "Café", label: "Café" },
  { value: "Aperitivo", label: "Aperitivo" },
  { value: "Doce", label: "Doce" },
  { value: "Uso", label: "Uso" },
];

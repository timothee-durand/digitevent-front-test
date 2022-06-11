export interface NumbersApiResponse {
  text: string;
  number: number;
  found: boolean;
  type: FactType;
}

export type FactType = "math" | "date" | "Math" | "Date";

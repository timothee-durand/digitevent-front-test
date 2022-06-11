export interface NumbersApiResponse {
  text: string;
  number: number;
  found: boolean;
  type: "math" | "date";
}

import axios from "axios";
import type { NumbersApiResponse } from "@/types/api";

const PATHS = Object.freeze({
  MATH: "math",
  DATE: "date",
});

const numbersApi = axios.create({
  baseURL: "http://numbersapi.com/random/",
  params: {
    json: true,
  },
});

export const getRandomMathFact = async (): Promise<NumbersApiResponse> => {
  return await numbersApi.get(PATHS.MATH).then((response) => response.data);
};

export const getRandomDateFact = async (): Promise<NumbersApiResponse> => {
  return await numbersApi.get(PATHS.DATE).then((response) => response.data);
};

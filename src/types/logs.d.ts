import type { FactType } from "@/types/api";

export interface LogItem {
  type: FactType;
  text: string;
  time: string;
}

export type LogArray = Array<LogItem>;
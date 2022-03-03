import xlsxlib from "xlsxlib";
import type { WorkBook, XLSX } from "types";
const xlsx = xlsxlib as XLSX;

export const getWorkBook = async (path: string): Promise<WorkBook> => {
  const rawText = await Deno.readFile(path);
  return await xlsx.read(rawText, { type: "buffer" });
};

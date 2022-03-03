import xlsxlib from "xlsxlib";
import type { WorkBook, WorkSheet, XLSX } from "types";
const xlsx = xlsxlib as XLSX;

export const getWorkBook = async (path: string): Promise<WorkBook> => {
  const rawText = await Deno.readFile(path);
  return await xlsx.read(rawText, { type: "buffer" });
};

export const getWorksheet = (workbook: WorkBook, sheetName: string): WorkSheet => workbook.Sheets[sheetName];

export const worksheetsToJson = (workbook: WorkBook, worksheets: string[]): Record<string, WorkSheet[]> => {
  return worksheets.reduce((a, c) => ({
    ...a,
    [c]: xlsx.utils.sheet_to_json(getWorksheet(workbook, c)),
  }), {});
};

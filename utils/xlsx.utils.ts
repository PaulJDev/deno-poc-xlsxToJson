import xlsxlib from "xlsxlib";
import type { WorkBook, WorkSheet, XLSX } from "types";
const xlsx = xlsxlib as XLSX;

export const getWorkBook = (path: string): WorkBook => {
  try {
    const text = Deno.readFileSync(path)
    return xlsx.read(text, { type: 'buffer' });
  } catch (err) {
    throw new Error(err)
  }  
};

export const getWorksheet = (workbook: WorkBook, sheetName: string): WorkSheet => workbook.Sheets[sheetName];

export const worksheetsToJson = (workbook: WorkBook, worksheets: string[]): Record<string, WorkSheet[]> => {
  return worksheets.reduce((a, c) => ({
    ...a,
    [c]: xlsx.utils.sheet_to_json(getWorksheet(workbook, c)),
  }), {});
};

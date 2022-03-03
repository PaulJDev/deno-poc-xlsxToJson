import xlsxlib from "xlsxlib";
import type { XLSX } from "types";
import { getWorkBook, getWorksheet, worksheetsToJson } from "utils";
import { config } from "env";

const xlsx = xlsxlib as XLSX;

const workbook = getWorkBook(config().XLSX_PATH);

//Worksheet to JSON
const sheet = getWorksheet(workbook, workbook.SheetNames[0]); //workbook.Sheets[workbook.SheetNames[0]];
const json = xlsx.utils.sheet_to_json(sheet);
console.log(json);

//Worksheets to JSON
const worksheetToJson = worksheetsToJson(workbook, workbook.SheetNames);
console.log(worksheetToJson);

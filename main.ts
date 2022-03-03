import xlsxlib from "xlsxlib";
import type { XLSX } from "types";
import { getWorkBook } from "utils";
const xlsx = xlsxlib as XLSX;

const XLSX_PATH = "./Diccionario.xlsx";

const workbook = await getWorkBook(XLSX_PATH);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const json = await xlsx.utils.sheet_to_json(sheet);

console.log(json);

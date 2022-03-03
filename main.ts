import xlsxlib from "xlsxlib";
import type { XLSX } from "types";
import { getWorkBook } from "utils";
import { config } from "env";

const xlsx = xlsxlib as XLSX;

const workbook = await getWorkBook(config().XLSX_PATH);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const json = await xlsx.utils.sheet_to_json(sheet);

console.log(json);

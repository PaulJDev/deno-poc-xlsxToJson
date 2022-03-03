import xlsxlib from 'https://jspm.dev/xlsx@0.17.5'
import { XLSX } from "./types/mod.ts";
import { getWorkBook } from './utils/mod.ts'
const xlsx = xlsxlib as XLSX;

const XLSX_PATH = './Diccionario.xlsx'

const workbook = await getWorkBook(XLSX_PATH)
const sheetData = workbook.Sheets[workbook.SheetNames[0]]
const csvString = await xlsx.utils.sheet_to_json(sheetData)

console.log(csvString)



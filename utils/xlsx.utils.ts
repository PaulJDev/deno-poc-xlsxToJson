import xlsxlib from 'https://jspm.dev/xlsx@0.17.5'
import type { XLSX, WorkBook } from "../types/mod.ts";
const xlsx = xlsxlib as XLSX;

export const getWorkBook = async (path: string): Promise<WorkBook> => {
    const rawText = await Deno.readFile(path)
    return await xlsx.read(rawText, { type: 'buffer' })
}
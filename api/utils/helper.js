import fs from "fs/promises";
import path from "path"; //créer un chemin complet vers un ficher
import { fileURLToPath } from "url"; // obtenir le chemin du module encours
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "..", "DB.json");

export async function loadDatas() {
  try {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}
export async function saveDatas(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf-8");
}

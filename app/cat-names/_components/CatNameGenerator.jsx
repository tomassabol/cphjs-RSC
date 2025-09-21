import { readFile } from "node:fs/promises";
import { RevealButton } from "./RevealButton";

export async function CatNameGenerator() {
  const catFile = await readFile("./cats.txt", "utf-8");
  const catNames = catFile.split("\n");
  const index = Math.floor(Math.random() * catNames.length);
  const catName = catNames[index];
  return <RevealButton catName={catName} />;
}

// Museum of the Year 3000 — u-donrulezz-museum-of-the-year-3000-b727a0bb
// Writes the museum label (one line, <=200 chars, English) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "Remote control, 2017. The household's most powerful object, fought over daily, yet used only to make the pictures louder. Marcus Hale lost three a year to the sofa, where all power goes to die.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");

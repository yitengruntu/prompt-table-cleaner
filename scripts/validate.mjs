import fs from "node:fs";

const requiredFiles = [
  "README.md",
  "LICENSE",
  "demo/index.html",
  "data/sample-table.csv",
  "product/scope.md",
  "product/validation-plan.md"
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const demo = fs.readFileSync("demo/index.html", "utf8");
for (const marker of ["Prompt Table Cleaner", "Markdown output", "JSON rows"]) {
  if (!demo.includes(marker)) {
    throw new Error(`Demo missing marker: ${marker}`);
  }
}

console.log("prompt-table-cleaner validation passed");


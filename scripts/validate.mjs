import fs from "node:fs";

const requiredFiles = [
  "README.md",
  "LICENSE",
  "assets/preview.svg",
  "demo/index.html",
  "docs/index.html",
  "data/sample-table.csv",
  ".github/ISSUE_TEMPLATE/workflow-request.yml",
  "distribution/launch-copy.md",
  "product/github-pages.md",
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

const docsDemo = fs.readFileSync("docs/index.html", "utf8");
if (docsDemo !== demo) {
  throw new Error("docs/index.html must match demo/index.html");
}

const readme = fs.readFileSync("README.md", "utf8");
for (const marker of ["assets/preview.svg", "docs/index.html", "workflow"]) {
  if (!readme.includes(marker)) {
    throw new Error(`README missing marker: ${marker}`);
  }
}

console.log("prompt-table-cleaner validation passed");

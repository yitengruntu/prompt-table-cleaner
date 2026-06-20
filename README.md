# Prompt Table Cleaner

Clean copied web tables into prompt-ready Markdown and JSON.

This is a tiny local demo for AI-heavy users who copy tables from docs, dashboards, search results, admin panels, or CSV exports and need structured context that can be pasted into ChatGPT, Codex, Claude, or another agent.

## Try The Demo

Open:

`demo/index.html`

Paste a CSV, TSV, or copied table-like text. The demo normalizes empty cells, trims whitespace, and produces:

- Markdown table
- JSON rows
- a compact summary line for prompts

## What This Tests

The demand question is not whether table conversion is possible. It is whether people who work with AI tools care enough to star, clone, open an issue, or ask for a browser extension, CLI, or clipboard workflow.

## What It Is Not

This v0.1 package is not a browser extension, SaaS product, paid tool, or full spreadsheet parser. It is a GitHub interest probe with a working static demo.

## Validation Signal

Continue only if someone asks for one of these:

- Chrome extension
- clipboard watcher
- CLI command
- HTML table extraction from a live page
- better CSV parsing for messy exports
- integration with Codex or another coding agent

No concrete workflow request means this stays a killed probe.


# ELearn - Assignment Tracker

An e-learning platform module that helps students manage and track their university assignments and tasks.

## Data model
| Field      | Type         | Notes                                      |
| ---------- | ------------ | ------------------------------------------ |
| title      | text         | required, max 100 chars                    |
| submitted  | boolean      | toggled from the list, default false       |
| difficulty | fixed values | Low, Medium, High                          |
| subject    | relation     | WebTech, Databases, Math                   |
| user       | relation     | the owner of the item (from week 11)       |

Sample data used across all stages:
1. "Stage 1 Mockup", not submitted, Medium
2. "SQL Queries lab", submitted, High
3. "Math Homework 3", not submitted, Low

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool       | Used for                                                   |
| ---------- | ---------------------------------------------------------- |
| Gemini     | brainstorming the data model, generating README for stage 1|
Details per stage: see the `ai-log/` folder.

## Status
- [ ] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
## Stage 4: Components built from data
The raw JSON list is replaced with React components (`TemaCard` and `TemeList`). Data is passed via props. Empty state handles zero items gracefully.

## Stage 4: Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | item component and list component created | [frontend/src/components/]([https://github.com/RobertPru/Prunescu_Robert_proiectTW/tree/main/frontend/src/components]) | read code |
| S4-R2 | data passed via props, key attribute used | [frontend/src/components/TemeList.jsx]([https://github.com/RobertPru/Prunescu_Robert_proiectTW/blob/main/frontend/src/components/TemeList.jsx]) | read code |
| S4-R3 | empty list shows message | [frontend/src/components/TemeList.jsx]([https://github.com/RobertPru/Prunescu_Robert_proiectTW/blob/main/frontend/src/components/TemeList.jsx]) | clear data array |
| S4-R4 | finished item styled differently | [frontend/src/components/TemaCard.jsx]([https://github.com/RobertPru/Prunescu_Robert_proiectTW/blob/main/frontend/src/components/TemaCard.jsx]) | look at card |
| S4-R5 | console free of warnings/errors | Console F12 | open F12 |
| S4-R6 | README Stage 4 section + AI log | [README.md]([https://github.com/RobertPru/Prunescu_Robert_proiectTW/tree/main/frontend/ai-log])
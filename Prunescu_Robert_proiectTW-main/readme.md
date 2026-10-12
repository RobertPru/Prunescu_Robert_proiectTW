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
## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Stage 3: Checklist
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json]([PUNE-LINK-AICI]) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L11-L18]([PUNE-LINK-AICI]) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx#L1-L5]([PUNE-LINK-AICI]) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css]([PUNE-LINK-AICI]) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore]([PUNE-LINK-AICI]) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md]([PUNE-LINK-AICI]), [ai-log/etapa-03.md]([PUNE-LINK-AICI]) | read |
| S3-R7 | commit "Stage 3" pushed | [link to commit]([PUNE-LINK-AICI]) | commit history |
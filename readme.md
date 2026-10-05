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
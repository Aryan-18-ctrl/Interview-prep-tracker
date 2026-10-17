# Interview Practice Tracker

A React-based app that helps me manage my interview preparation in one place. I can add questions, track their status, filter questions, and check my preparation progress from the dashboard.

## Features

- **Dashboard:** Shows preparation progress for DSA, Git & GitHub, and Technical questions, along with the latest Machine Coding status.
- **Question Management:** Add, view, edit, and delete questions.
- **Search & Filters:** Search questions by text and filter them by category and difficulty.
- **Form Validation:** Uses React Hook Form to validate required fields and display error messages.
- **LocalStorage:** Saves questions in the browser so the data stays available after refreshing the page.
- **Responsive UI:** Built with Tailwind CSS to support different screen sizes.
- **Toast Notifications:** Displays success messages when questions are added, updated, or deleted.

## Getting Started

### Requirements

- Node.js
- npm

### Installation

Clone the repository and open the project folder.

```bash
npm install
npm run dev
```

Open the local URL provided by Vite in the terminal.

### Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build


## How It Works

### Dashboard

The dashboard calculates progress from the saved questions.

- Shows total and completed questions for each category.
- Displays completion percentages through progress cards.
- Shows the status of the latest Machine Coding entry.
- Updates automatically when questions are added, edited, or deleted.

### Question Management

I used a shared question form for creating and editing questions.

Each question contains:

- Question title
- Category
- Difficulty
- Status

Available categories are DSA, Git & GitHub, Technical, and Machine Coding.

Difficulty levels are Easy, Medium, and Hard. The available statuses are Pending, In Progress, and Completed.

### Search and Filters

The Questions page includes a search bar and dropdown filters to find questions by their text, category, and difficulty. When no questions match the search or selected filters, an empty state is displayed.

### Data Storage

I used React Context to share question data between the dashboard, create form, and questions page.

The questions are stored in the browser's `localStorage` under the `questionData` key. This allows the data to remain available after a page refresh without requiring a backend or database.

## Project Structure

```text
src/
├── components/   # Reusable UI components
├── Context/      # Shared state and localStorage
├── Layout/       # Shared page layout
├── pages/        # Dashboard and question pages
├── routes/       # Route configuration
├── App.jsx
├── index.css
└── main.jsx
```

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- React Hook Form
- Lucide React
- React Icons
- React Hot Toast

## What I Learned

While building this project, I practised managing shared state using React Context, handling forms and validation, implementing CRUD operations, filtering data, storing data in LocalStorage, and building a responsive dashboard.

This project helped me understand how to connect different React components and keep the UI updated whenever the underlying data changes.

## Project Video Walkthrough

[Click here to watch the project walkthrough](https://drive.google.com/drive/folders/1WrUL86_FCzgUnfjkhVsDkCeDtrzkxzKk?usp=sharing)







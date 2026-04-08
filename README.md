# COLORS (LAMP Stack Web App)

## Overview

COLORS is a simple web application that lets a user log in and manage a personal list of colors. After logging in, a user can add colors and search through their saved colors. This project was originally built as part of a lab for learning full‑stack development with the LAMP stack.

## Technologies Used

- Frontend: HTML5, CSS3, vanilla JavaScript
- Backend: PHP (procedural style)
- Database: MySQL or MariaDB
- Stack: LAMP style environment (Apache + PHP + MySQL)

## Project Structure

The repository is organized similarly to the suggested structure in the assignment:

- `index.html`, `color.html` – entry pages for the COLORS UI (public frontend)
- `css/` – styles for the UI
- `js/` – frontend JavaScript, including the logic that calls the PHP APIs
- `images/` – static image assets used by the UI
- `LAMPAPI/` – backend PHP API endpoints
  - `Login.php` – handles user login
  - `AddColor.php` – adds a new color for a user
  - `SearchColors.php` – searches colors for a user
  - `dbconfig.example.php` – example DB configuration **template** (no real secrets)
- `.gitignore` – ignores local configuration and other unneeded files

This corresponds to the example structure in the prompt where `LAMPAPI/` plays the role of the `api/` directory, and the HTML/CSS/JS files at the root (plus subfolders) act as the `public/` directory.

## Setup Instructions

1. **Prerequisites**
   - A web server with PHP support (e.g., XAMPP, WAMP, MAMP, or a LAMP stack).
   - MySQL or MariaDB server.

2. **Database Setup**
   - Create a database (for example, `COP4331`).
   - Create the required tables, such as `Users` and `Colors`, using the schema provided in your course materials or lab instructions.
   - Create a MySQL user with permissions to access this database.

3. **Configure Database Credentials (no secrets in Git)**
   - Copy `LAMPAPI/dbconfig.example.php` to `LAMPAPI/dbconfig.local.php`:
     - `cp LAMPAPI/dbconfig.example.php LAMPAPI/dbconfig.local.php` (or copy via File Explorer).
   - Edit `LAMPAPI/dbconfig.local.php` and fill in your real database settings:
     - `host` – database host (e.g., `localhost`)
     - `user` – database username
     - `pass` – database password
     - `db` – database name
   - The file `dbconfig.local.php` is **ignored by Git** via `.gitignore` and must not be committed.

4. **Deploy the Application**
   - Place this project folder (for example, `ColorsLab/`) under your web server document root:
     - e.g., `C:\xampp\htdocs\ColorsLab` on Windows with XAMPP.
   - Ensure your Apache/PHP server is running.

5. **Run the App**
   - Open a browser and navigate to:
     - `http://localhost/ColorsLab/index.html` (or the appropriate URL for your setup).
   - Log in with a valid user account already present in the `Users` table.
   - Add colors and search them using the UI.

## How to Access the APIs

The frontend JavaScript calls the PHP endpoints in `LAMPAPI/`:

- `LAMPAPI/Login.php` – expects JSON with `login` and `password`, returns user info or error.
- `LAMPAPI/AddColor.php` – expects JSON with `userId` and `color`, inserts a new color.
- `LAMPAPI/SearchColors.php` – expects JSON with `userId` and `search`, returns matching colors.

Each script reads JSON from the request body and replies in JSON format, making it easy to call from JavaScript `fetch` or other clients.

## CI and Linting

This repository now includes a GitHub Actions workflow that runs on every push and pull request. It installs the Node-based lint tools and checks the HTML, CSS, and JavaScript files.

To run the same checks locally, install dependencies and run:

```bash
npm install
npm run lint
```

## Assumptions and Limitations

- Authentication is simplified for lab purposes and does not implement advanced security best practices (password hashing, sessions, CSRF protection, etc.).
- Error handling is minimal and tailored to the course requirements.
- The database schema and example data are assumed to be provided externally (e.g., course materials).
- The app is intended for local/lab use, not for production deployment.

## AI Usage

GitHub Copilot Chat (GPT-5.1) was used to help write this project summary/README. All AI-assisted text was reviewed and approved by me though.

The goal of this project was to create a table that showcases project details in an aesthetically pleasing and responsive manner.

#### Hosted URL: https://rashmi988.github.io/ProjectTable/

## Features

- **Project Listing Table:**
  Displays structured table with the following columns:

  - S.No.
  - Percentage Funded
  - Amount Pledged

- **Pagination:**
  - The table supports pagination, showing 5 records per page. Users can easily navigate between pages to view more data.
  - Pagination is dynamic and ensures the data is easily accessible.

## Expected Output

The table displays data in the following format:
| S.No. | Percentage Funded | Amount Pledged |
|-------|-------------------|----------------|
| 1 | 86 | $152 |

The data is paginated with a maximum of 5 records per page.

## How to Run the Project Locally

1. **Clone this repository to your local machine:**

   ```bash
   git clone https://github.com/Rashmi988/ProjectTable.git
   cd ProjectTable
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Visit http://localhost:5173 in your browser to view the app.

## Deployment on GitHub Pages

To deploy the app on GitHub Pages, follow these steps:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

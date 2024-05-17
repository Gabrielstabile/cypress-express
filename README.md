# cypress-express

# building the env
install npm and run at the root of the project:
> npm install

open a new terminal tab and go to apps/markL/api folder and run:
> npm install

> npm run db:init

> npm run dev

open a new terminal tab and go to apps/markL/web folder and run:
> npm install

> npm run dev

### **go to localhost:3000 and check if it is reachable**

#

# Running tests via cypress UI

Run the following command at the root folder of the project **(projects/cypress-express-mark)**
1. >yarn cypress open
2. Click at E2E testing
3. Select a browser and start
4. Run the **"tasks.cy.js"** tests suite

# Running tests via cypress CLI (headless mode)

Run the following command at the root folder of the project **(projects/cypress-express-mark)**
1. >yarn cypress run

# Generating a allure report

This project is configured to generate a allure report, for that, follow the instructions:

1. >yarn cypress run
2. check if the allure-results folder were created
3. > yarn allure serve
4. This will open a allure report server at your default browser with the execution results
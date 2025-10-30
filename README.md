# 🚀 QA Automation Testing –  Task

This project contains **automated end-to-end (E2E) tests** built with **WebdriverIO**  
to test the form functionality on [Notch QA Task](https://wearenotch.com/qa_task/).

It serves as an example of a **QA automation project** that tests form inputs, dropdown selections,  
file uploads, and validation messages.

---

## 📖 Table of Contents

- 🧠 About  
- ⚙️ Technologies  
- 📁 Project Structure  
- 💡 Installation & Setup  
- 🧪 Test Scenarios  
- 🛠️ Troubleshooting 

---

## 🧠 About

This repository demonstrates **automated QA testing** using the **WebdriverIO** framework.  
The tests verify key functionalities of a web form, including:

- Filling out text input fields (first name, last name, email, phonenumber)
- Displaying validation messages (e.g., *“This field is required”*)
- Selecting checkboxes and dropdown options
- Uploading files and submitting the form

---

## ✨ Features

- 🔹 WebdriverIO E2E tests  
- 🔹 Page Object Model structure  
- 🔹 Automated testing of inputs, dropdowns, and checkboxes
- 🔹 Test execution in Chrome browser  
---

## ⚙️ Installation

### Prerequisites
Before running the tests, make sure you have the following installed on your system:
- Node.js v18+
- npm (comes with Node.js) or yarn
- Google Chrome browser

### Steps
```bash
# Clone the repository
git clone https://github.com/nikoladomagoj/wdio-automation-tests.git

# Navigate to the project folder
cd wdio-automation-tests

# Initialize npm (if not already done)
npm init -y

# Install dependencies
npm install

# Install WebdriverIO CLI as a development dependency
npm install --save-dev @wdio/cli

#Run the WebdriverIO configuration wizard (only needed once)
npx wdio config

# Run the E2E test suite
npx wdio run wdio.conf.js

# In your wdio.conf.js, make sure the capabilities section includes Chrome and enforces the classic WebDriver mode
capabilities: [{
browserName: 'chrome',
'wdio:enforceWebDriverClassic': true
}],


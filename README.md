CRUD Application with Node.js, Express, MongoDB, and EJS
A simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, MongoDB (using Mongoose), and EJS templating engine.

Features
✅ Create new entries with two values
📋 View all entries in a clean table format
✏️ Edit existing entries
🗑️ Delete entries
🎨 Responsive design with CSS styling
🔒 Environment variables for configuration
🛠️ MVC architecture pattern
Prerequisites
Node.js (v14 or higher)
MongoDB (running locally)
npm or yarn
Installation
git clone https://github.com/mukilan88/crud-app.git
cd crud-app
npm install
Dependencies
express mongoose ejs dotenv nodemon

npm install express mongoose ejs dotenv

npm install --save-dev nodemon
or
npm install -g nodemon # nodemon will be installed globally to your system path.
Project Structure
crud-app/
├── models/
│ └── Data.js
├── public/
│ └── style.css
├── views/
│ ├── add.ejs
│ ├── edit.ejs
│ └── index.ejs
├── app.js
├── package.json
└── README.md

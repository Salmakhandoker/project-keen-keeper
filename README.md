
# 👥 KeenKeeper — Keep Your Friendships Alive

## 📌 Project Description

KeenKeeper is a modern friendship management web application that helps users stay connected with their friends. It tracks interactions, reminds you when to reconnect, and provides a timeline of communication history.

---

## 🚀 Live Demo

🔗 https://your-live-link.com

---

## 📸 Screenshots

### 🏠 Home Page

![Home](./screenshots/home.png)

### 👤 Friend Details

![Details](./screenshots/details.png)

### 📜 Timeline Page

![Timeline](./screenshots/timeline.png)

---

## 🛠️ Technologies Used

* ⚛️ React.js
* 🌐 React Router DOM
* 🎨 Tailwind CSS
* 📊 Recharts
* 🔔 React Toastify

---

## ✨ Key Features

### 🔝 Navbar

* Fully responsive navbar
* Logo on left, navigation links on right
* Active route highlighting
* Icons included with each link

### 🎯 Banner Section

* Centered title and subtitle
* "Add a Friend" button with icon
* Summary cards display

### 👫 Friends Section

* Dynamic data from JSON file
* Responsive grid layout (4 columns on large screens)
* Status-based color coding (overdue, almost due, on-track)
* Clickable cards → navigate to details page

### 👤 Friend Details Page

* Two-column responsive layout
* Detailed friend information
* Action buttons (Snooze, Archive, Delete)
* Quick Check-In system (Call, Text, Video)

### ⚡ Interaction System

* Adds timeline entries dynamically
* Shows toast notifications on interaction
* Tracks date and activity type

### 📜 Timeline Page

* Displays all interaction history
* Icons for Call / Text / Video
* Clean timeline UI

### 📊 Stats Page (Challenge Feature)

* Pie chart using Recharts
* Shows interaction distribution

---

## 📂 Project Structure

```
src/
 ┣ components/
 ┣ pages/
 ┣ data/
 ┃ ┗ friends.json
 ┣ context/
 ┗ App.jsx
```

---

## 📋 Sample Friend Data

```json
{
  "id": 1,
  "name": "Alex Johnson",
  "picture": "https://example.com/photo.jpg",
  "email": "alex@example.com",
  "days_since_contact": 10,
  "status": "almost due",
  "tags": ["college", "close friend"],
  "bio": "Met during university life. Loves traveling.",
  "goal": 14,
  "next_due_date": "2026-05-01"
}
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-Salmakhandoker/keenkeeper.git

# Go to project folder
cd keenkeeper

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 📱 Responsive Design

* ✅ Mobile
* ✅ Tablet
* ✅ Desktop

---

## 🛠️ Additional Features

* 🔄 Loading spinner while fetching data
* 🚫 Custom 404 page for invalid routes
* 🔔 Toast notifications for user actions
* 🔁 Page reload works without errors

---

## 🎯 Challenge Features

* 📊 Friendship Analytics (Pie Chart)
* 🔍 Timeline filtering (Call / Text / Video)

---

## 🌟 Optional Improvements

* 🔃 Sort timeline (Newest / Oldest)
* 🔎 Search functionality

---

## 📌 Git Commit Requirement

* Minimum 8 meaningful commits
* Example: `added friend card component`

---

## 👩‍💻 Author

* Salma khandoker

---

## 📄 License

This project is open-source and available under the MIT License.

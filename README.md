# 🚀 CampuWay — Smart Campus Navigation System

![License](https://img.shields.io/github/license/DivyaPrakash4/CampuWay-?style=flat-square)
![Stars](https://img.shields.io/github/stars/DivyaPrakash4/CampuWay-?style=flat-square)
![Forks](https://img.shields.io/github/forks/DivyaPrakash4/CampuWay-?style=flat-square)
![Issues](https://img.shields.io/github/issues/DivyaPrakash4/CampuWay-?style=flat-square)

> **CampusWay** is an interactive web application designed to help students, faculty, and visitors navigate a college campus efficiently by finding the shortest route between two points.  
> Built with **React (Vite)** for the frontend and **Spring Boot** for the backend, it delivers fast, accurate, and responsive route suggestions.

---

## ✨ Features
- 🗺 **Interactive Map Interface** — Select start and destination points with ease.
- ⚡ **Fast Route Calculation** — Optimized algorithms for shortest path detection.
- 🎨 **Modern UI** — Built with React (Vite) for speed and smooth experience.
- 🔗 **RESTful API Integration** — Spring Boot backend handles pathfinding logic.
- 📱 **Responsive Design** — Fully functional on desktop, tablet, and mobile devices.

---

## 🛠 Tech Stack
### **Frontend**
- React (Vite)
- JavaScript, HTML, CSS
- Axios (API Calls)

### **Backend**
- Spring Boot
- Java
- REST API

### **Other Tools**
- Git & GitHub
- VS Code / IntelliJ IDEA
- Node.js

---

## 📂 Project Structure
campuway/
├── backend/ (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/Nav/
│   │   │   │   ├── controller/
│   │   │   │   │   └── NavigationController.java
│   │   │   │   ├── model/
│   │   │   │   │   ├── Graph.java
│   │   │   │   │   └── Path.java
│   │   │   │   ├── service/
│   │   │   │   │   └── DijkstraService.java
│   │   │   │   └── NavApplication.java (main class)
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── (other resources)
│   │   └── test/ (test files)
│   └── pom.xml
│
└── frontend/ (React)
    ├── public/
    │   ├── index.html
    │   └── (other public assets)
    ├── src/
    │   ├── components/
    │   │   ├── GraphNode.jsx
    │   │   ├── GraphLines.jsx
    │   │   ├── NodeSelector.jsx
    │   │   ├── PathResult.jsx
    │   │   └── useNavigation.js (custom hook)
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    └── (other config files)

## 📸 Screenshots

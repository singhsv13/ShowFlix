# 🎬 ShowFlix

ShowFlix is a React-based movie discovery app where users can **browse movies**, **search**, and **bookmark their favourites** for later.  
Think of it as your personal mini streaming hub UI — clean, modern, and functional.  

---

## ✨ Features

- 🔍 **Search Movies** – search for shows/movies with a responsive debounced search box (with FontAwesome icons).  
- 🎥 **Movie List Page** – displays a paginated list of movies fetched from a database/dummy dataset.  
- ⭐ **Favourites** – mark movies as favourites/bookmarks to view later.  
- 👤 **Profile Dashboard** – shows user details (dummy for now) and a favourites list.  
- 🔑 **Authentication Gate** – only logged-in users can access **Favourites** & **Profile**, while guests can still browse movies.  
- 📄 **Static Pages** – About page and custom 404 page.  
- 🎨 **UI/UX** – built with TailwindCSS, clean design inspired by streaming platforms (Netflix-style vibes).  

---

## 🛠️ Tech Stack

- **Frontend:** React (with Vite for bundling)  
- **Routing:** React Router v6+ (protected routes, layouts, nested routes, lazy loading)  
- **Styling:** TailwindCSS  
- **Icons:** FontAwesome  
- **State Management:** useState, useReducer, custom hooks  
- **Data:** Dummy JSON dataset (~50 movies with `id`, `name`, `rating`, `description`)  

---

## 📜 License

This project is licensed under the MIT License.
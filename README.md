<div align="center">

# 🖤 **Blyntrex — Modern Social Media UI**

### Built with **React + TailwindCSS**, inspired by Instagram  

✨ _A sleek, modern, and fully responsive social media interface with elegant dark mode, live stories, interactive posts, and smart user suggestions._

<br>


---

</div>

## 🖼️ **Sign Up Page — User Registration Interface**
<img width="1900" height="1080" alt="Blyntrex Main Preview" src="https://github.com/user-attachments/assets/d3899f9f-9e03-4452-a8f7-d45dfc152a6f" />

### ✨ Overview
This is the **Sign Up** screen built using **React**, **Tailwind CSS**, and **LocalStorage**.  
It allows users to easily create an account by entering their **first name**, **last name**, **email**, and **password**.

---

### ⚙️ **Key Features**

✅ **Modern UI** — Clean, responsive, and visually appealing design  
🔐 **User Validation** — Prevents duplicate registrations using existing email check  
💾 **Local Storage Integration** — Securely stores user data in the browser  
🚀 **Smooth Navigation** — Redirects users to the Login page after successful signup  
🎨 **Tailwind Styling** — Gradient buttons, rounded inputs, and hover animations  

---

### 💡 **Tech Stack**

| Technology | Purpose |
|-------------|----------|
| ⚛️ React.js | Component-based frontend logic |
| 💨 Tailwind CSS | Responsive and modern UI design |
| 🧠 LocalStorage | Data persistence and user management |

---

### 📜 **Code Overview**

The `Signup.jsx` component handles:
- Collecting user details (name, email, password)
- Checking if email already exists in **LocalStorage**
- Creating new user objects with profile and bio
- Persisting data locally for session retention
- Displaying success alerts and redirecting to Login page

🖌️ The design includes rounded inputs, gradient buttons, and smooth hover animations — ensuring a modern and minimal aesthetic.

<br>


---

## 🔐 **Login Page — Modern UI with React + TailwindCSS**
<img width="1920" height="1080" alt="Signup Page" src="https://github.com/user-attachments/assets/4562f84f-87e6-4368-b9ee-4509407bda85" />

🚀 The **Login Page** provides a minimal, elegant interface for user authentication using **LocalStorage**.

---

### ✨ **Features**

🧑‍💻 User-friendly login form  
📧 Email & password validation  
💾 LocalStorage-based login verification  
⚡ Smooth Tailwind transitions  
🔁 Switch between Login and Signup pages  
🧠 Session persistence via LocalStorage  

---

### 🧩 **Tech Stack**

| Tech | Description |
|------|--------------|
| ⚛️ React (Vite) | UI & routing |
| 🎨 Tailwind CSS | Styling framework |
| 🗃️ LocalStorage | User data management |
| 🔄 React Router DOM | Page navigation |

---

### 📜 **Code Overview**

The `Login.jsx` component:
- Accepts email & password input  
- Checks credentials with stored LocalStorage users  
- If valid → redirects to `/main`  
- If invalid → displays error message  

This ensures **secure client-side login simulation** with a seamless user flow.

---

## 🏠 **Main Page — Dashboard & Feed Interface**

<img width="1892" height="1080" alt="Main Page Preview" src="https://github.com/user-attachments/assets/d3153509-40df-40af-a8ba-9d0cd6b60d57" />

---

### 🚀 **Features**

#### 🏠 **Dashboard Layout**
- Three responsive sections:
  - **Left Sidebar:** Navigation (Home, Explore, Reels, etc.)
  - **Middle Feed:** Stories & posts
  - **Right Sidebar:** Profile info & suggestions  
- Elegant **dark UI** for premium aesthetics  

#### 📱 **Stories Section**
- Scrollable, live story bar  
- Gradient rings for active stories  
- Story initials for easy identification  

#### 🖼️ **Posts Feed**
- Realistic post layout with:
  - Profile details  
  - Image feed  
  - Like, comment, share, save buttons  
  - Expandable captions ("More/Less")  
  - Comment input field  

#### 🧑‍💻 **User Profile & Suggestions**
- Displays logged-in user  
- “Suggested for you” section  
- “Switch” profile option  
- Footer links (About, API, Privacy, etc.)

#### 💬 **Messages Button**
- Floating message shortcut (desktop)  
- Converts to mobile bottom navbar  

#### 📱 **Mobile Friendly**
- Bottom tab bar for small screens  
- Adaptive layout across all devices  

---

### 🧩 **Component Breakdown**

| Component | Description |
|------------|-------------|
| `Header.jsx` | Top story section wrapper |
| `Left.jsx` | Sidebar navigation (desktop & mobile) |
| `Main.jsx` | Combines all major components |
| `Messages.jsx` | Floating message shortcut |
| `Middle.jsx` | Feed management (posts, likes, comments) |
| `Right.jsx` | User profile & suggestions |
| `Story.jsx` | Renders active and static stories |

---

### 🧠 **Tech Stack**

- ⚛️ **React.js** — Component-driven frontend  
- 🎨 **Tailwind CSS** — Fast and modern styling  
- 🧰 **Lucide Icons** — Clean, minimal icon pack  
- 💾 **LocalStorage** — Session and data storage  

---

### 🖼️ **Preview**

> A fully responsive, Instagram-inspired feed layout powered by React + TailwindCSS.

---


---

<div align="center">

💫 *"Blyntrex — Experience social connection through elegant design."*  
🖤 Built with passion using React + TailwindCSS.

</div>

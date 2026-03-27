# 🏨 Emilia Hotel - Dynamic Login & Validation System

A sleek, functional front-end authentication interface built for the **Emilia Hotel** project. This application focuses on high-quality user experience through **Bootstrap 5** integration and rigorous **Client-Side Validation** using JavaScript Regular Expressions (RegEx).

---

## 🚀 Key Features

* **Robust Form Validation:** Real-time data integrity checks using advanced RegEx patterns for:
    * **Names:** Prevents spaces or numeric characters.
    * **Email:** Standard format verification.
    * **Age:** Restricted to a logical range of **0–120**.
    * **Phone Numbers:** Supports multiple formats (e.g., `000-000-0000`, `0000000000`, or `000 000 0000`).
    * **Canadian Postal Codes:** Specifically tuned to the Canadian alphanumeric format (A1B 2C3).
* **Dynamic UI Manipulation:** * Smooth **Bootstrap 5 Modal** transitions.
    * Automatic navigation toggle between **Login** and **Logout** states.
    * Personalized greeting message and dynamic **User Profile Card** generation upon successful login.
* **Visual Feedback:** Instant UI updates with green (success) or red (error) borders and dynamic placeholder messages to guide the user.
* **State Management:** Intelligent form resetting logic that clears all data and error styles when the modal is reopened.

---

## 🛠️ Technologies Used

* **HTML5 & CSS3:** Structural layout and custom styling.
* **JavaScript (ES6+):** Logic, DOM manipulation, and Event Listeners.
* **Bootstrap 5:** Responsive design, Grid system, and Modal components.
* **Bootstrap Icons:** Visual indicators for form inputs.

---

## 📂 Project Structure

```text
.
├── css/
│   └── style.css      # Custom styling for error/success states
├── js/
│   └── lab05.js       # Main logic (RegEx, Validation, UI toggles)
├── index.html         # Main entry point (Emilia Hotel UI)
└── README.md          # Project documentation

# React + Redux Login and Dashboard

This is a simple React web application that:
- Allows a user to **log in** using a username from the [DummyJSON API](https://dummyjson.com/users).
- Displays the user’s profile details (name, gender, age, address, company, etc.) on a Dashboard page.

## Features

1. **Login Form**  
   - Users enter a username (e.g., `michaelw`, `emilys`).
   - On submit, it checks against the DummyJSON API. If found, redirects to Dashboard; otherwise displays an error.

2. **Dashboard**  
   - Fetches additional user details by ID (`GET /users/{id}`).
   - Shows avatar, name, gender, age, address, company info, and contact details.

3. **State Management**  
   - Uses **Redux Toolkit** (`configureStore`, `createSlice`, `createAsyncThunk`) to handle state, login, and async requests.

4. **UI/Styling**  
   - Built with **Material-UI (MUI)** for components like `TextField`, `Button`, `Card`, etc.
   - Optional SCSS or other styling methods can be added as desired.

5. **Routing**  
   - **react-router-dom** for two main routes: `/` (LoginPage) and `/dashboard` (DashboardPage).
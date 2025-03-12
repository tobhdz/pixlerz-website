import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/other/reset.css";
import "./assets/other/fonts.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

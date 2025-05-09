import React, { useEffect } from "react";
import "./FormPage.css";

export default function FormPage() {
  useEffect(() => {
    // Cargar el script de Typeform
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Guardar el estado del scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Permitir el scroll
    document.body.style.overflow = "auto";

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="formpage-container">
      <div data-tf-live="01JRZMPAY52RS7JTD7ARD2YQH1"></div>
    </div>
  );
}

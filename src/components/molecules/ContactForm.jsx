import { useState } from 'react'; // Hook de React para manejar datos que cambian (estado)
import { Button } from '../atoms/Button'; // Importamos el botón reutilizable (Átomo)

export const ContactForm = () => {
  // Estado para guardar el correo y el mensaje del formulario
  const [formData, setFormData] = useState({ email: '', message: '' });
  
  // Estado para saber si el formulario ya fue enviado y mostrar mensaje de confirmación
  const [submitted, setSubmitted] = useState(false);

  // Función para capturar lo que el usuario escribe en las cajas de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Función para procesar el envío del formulario al presionar el botón
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (formData.email && formData.message) {
      setSubmitted(true); // Activa el mensaje de éxito si los campos están completos
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {/* Campo para ingresar el Correo Electrónico */}
      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="tu@correo.com"
        />
      </div>

      {/* Campo para escribir el Mensaje */}
      <div>
        <label>Mensaje:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>

      {/* Botón reutilizable de envío */}
      <Button type="submit">Enviar Mensaje</Button>

      {/* Mensaje dinámico de confirmación de envío */}
      {submitted && <p className="success-msg">¡Gracias por contactarme! Te responderé pronto.</p>}
    </form>
  );
};
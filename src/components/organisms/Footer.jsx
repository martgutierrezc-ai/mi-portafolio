export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Martín Gutiérrez. Todos los derechos reservados.</p>
    </footer>
  );
};
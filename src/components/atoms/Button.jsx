export const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className="custom-btn">
      {children}
    </button>
  );
};
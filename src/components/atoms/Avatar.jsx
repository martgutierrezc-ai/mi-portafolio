import './Avatar.css';

export const Avatar = ({ src, alt = "Avatar de perfil", initials = "MG" }) => {
  return (
    <div className="avatar-container">
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : (
        <div className="avatar-placeholder">
          <span>{initials}</span>
        </div>
      )}
    </div>
  );
};
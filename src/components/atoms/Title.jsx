export const Title = ({ text, level = 2 }) => {
  const Tag = `h${level}`;
  return <Tag className="section-title">{text}</Tag>;
};
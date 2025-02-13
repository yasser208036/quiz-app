export const Button = ({ label, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
};

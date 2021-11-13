const Button = (props) => {
  const { text = "0 Days" } = props;
  return <div className="main-button">{text}</div>;
};

export default Button;

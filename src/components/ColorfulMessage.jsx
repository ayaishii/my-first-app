export const ColorfulMessage = (props) => {
  console.log("--ColorfulMessage--");
  const { color, children } = props;
  const contentStyleA = {
    color: props.color,
    fontSize: "18px",
  };

  return <p style={contentStyleA}>{props.children}</p>;
};

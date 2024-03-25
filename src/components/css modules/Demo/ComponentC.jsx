function ComponentC(props) {
  const styleObject = {backgroundColor: "yellow", padding : "10px"};
  return (
    <div className={props.className}>
      <p>This is Component C</p>
    </div>
  );
}
export default ComponentC;


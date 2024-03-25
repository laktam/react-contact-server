import { useEffect, useState } from "react";
import ContactServer from "./components/Contact server/ContactServer";
import StyledComponent from "./components/StyledComponent";
import ComponentA from "./components/css modules/Demo/ComponentA";
import ComponentB from "./components/css modules/Demo/ComponentB";

function App() {
  // const [text, setText] = useState([]);

  // useEffect(() => {
  //   fetch(process.env.REACT_APP_URL + "api/authors")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setText(data);
  //     });
  // }, []);

  return (
    <div>
      {/* {text.map((item) => {
        return <p>{item.fullName}</p>;
      })} */}
      <ContactServer />
      <StyledComponent />
      <ComponentA />
      <ComponentB />
      {/* <ContactServer /> */}
    </div>
  );
}

export default App;

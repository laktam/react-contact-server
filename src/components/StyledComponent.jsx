import styled from "styled-components";
import ComponentC from "./css modules/Demo/ComponentC";

const StyledComponentC = styled(ComponentC)`
padding : 20px; 
color: red;`


function StyledComponent(){
    return <div >
        <ComponentC />
        <StyledComponentC> Styled Component C</StyledComponentC>
    </div>
}

export default StyledComponent;
import styled from "styled-components";

let StyledButton=styled.button`
color:white;
background-color:red;
`

let StyledButtonProps=styled.button`
color:${(props)=>{return props.flag?"black":"white"}};
background-color:green;
margin-left:3px;
`
let FancyButtonInherit=styled(StyledButtonProps).attrs((props)=>({type:props.flag?'button':'submit'}))`
background-color:blue;
border:2px solid black;
&:hover{
background-color:black;
color:white;
border:2px solid red;
}
`
export default StyledButton; 
export {StyledButtonProps};
export {FancyButtonInherit};
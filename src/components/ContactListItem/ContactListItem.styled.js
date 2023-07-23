import styled from "@emotion/styled";


export const SearchList = styled.ul`
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-direction: row;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: blue;
  justify-content: space-between;
  // padding: 2px;
  

  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;

     button {
        // border-color: red;
        // color: red;
        opacity: 1;
        // transform: scale(1.025);
      }
    
  }
`;

export const Text = styled.p`
  margin: 0;
  :not(:last-child) {
    margin-right: 5px;
  }
`;

export const Button = styled.button`
font-size: 12px;
width: 96px;
height: 24px;
background-color: white;
border: 1px solid gray;
border-radius: 5px;
cursor: pointer;
opacity: 0.6;

&:hover, &:focus {
  border-color: red;
  color: red;
  opacity: 1;
}
`;
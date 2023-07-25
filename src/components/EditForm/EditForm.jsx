import PropTypes from 'prop-types';
import { FormStyle, Label, Input, Button } from "./EditForm.styled";

import { useDispatch } from "react-redux"; 
import {  editContact } from "redux/operations";


const EditForm = ({ onClose, id, name, number }) => {
  const dispatch = useDispatch();
  
    const initialName = name;
    const initialNumber = number;


  const handleSubmit = event => {
    event.preventDefault();

    
    const form = event.currentTarget;
    dispatch(editContact({
      id,
      name: form.elements.name.value,
      number: form.elements.number.value,
    }));
console.log(name, number)
    // setTimeout(() => {
    //   dispatch(editContact())
    // }, 500);
    form.reset();
  };




  return(
    <>
    <form onSubmit={handleSubmit}>
    <FormStyle>      
      <Label>
        Name 
        <Input
          type='text' 
          name='name'
          defaultValue={name} 
          placeholder="John Smith"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label> 

      <Label>
        Phone 
        <Input
          type='tel' 
          name='number'
          defaultValue={number} 
          placeholder="_ _ _ - _ _ _ - _ _ _ _"
          pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label> 

          <div style={{display:'flex', gap: '20px', }}>
            <Button
              type="submit"
              disabled={initialName !== name || initialNumber !== number}
            >Save</Button>
            <Button type="button" onClick={onClose}>Cancel</Button>
          </div>
    </FormStyle>
    </form>
    </>
  )
}

export default EditForm;

EditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
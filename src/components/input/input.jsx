import './input.css';

export const Input = ({placeholder, handleChange}) => (
   <input type="search" 
   className = 'search '
   placeholder={placeholder}
   onChange={handleChange} 
   />)
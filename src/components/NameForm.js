import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import  { Navigate, useNavigate } from 'react-router-dom';


export const NameForm = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const link = "/schedule/"+name;
    console.log(link);
    navigate(link);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default NameForm
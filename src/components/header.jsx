import React from 'react';
import './header.css';
import { useStore } from './store';
function Header() {
  const{input,handleChange,handleInput} = useStore();
  return (
    <header className='w-full h-[250px] bg-cover flex items-center justify-center flex-col'>
      <div className='w-[500px] h-fit'>
        <h1 className='text-4xl font-bold mb-2'>T O D O</h1>
        <input type='text' placeholder='Crete a new task' className='w-5/6 h-10 mt-2 p-3 input-dark' value={input} onChange={handleChange} onBlur={handleInput} required></input>
      </div>
    </header>
  )
}
export default Header

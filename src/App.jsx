import { useCallback, useEffect, useRef, useState } from 'react'
import {get_value} from './js/varible'

function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword]= useState("");
  //const [clickCopy,seClickCopy] = useState(false);
  let clickCopy = get_value()
  console.log(clickCopy)
  

  const passwordRef = useRef(null)
  const buttonRef = useRef(null);
  const generate_password =  useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charAllowed)str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~}"
    if(numberAllowed) str += "0123456789"
    for(let i = 1;i<= length; i++){
      let rd = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(rd)
    }
    setPassword(pass)
  },[length,numberAllowed,setPassword,charAllowed])

  const copyText = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    buttonRef.current.className=buttonRef.current.className.replace(700,300)
    console.log(buttonRef.current.className.replace(700,300))

  }


  useEffect(()=>{
    generate_password()
    buttonRef.current.className=buttonRef.current.className.replace(300,700)
  },[length,numberAllowed,charAllowed])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-5 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
          />
          <button 
          className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0`}
          ref={buttonRef}
          onClick={copyText} >copy</button>
          
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

    </>
  )
}

export default App

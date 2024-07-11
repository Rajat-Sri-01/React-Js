import { useCallback, useEffect, useState, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8) // by default value is 8
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordGenerator = useCallback( () => { // used to memoize the function or optimise the fn, hold the function in cache or memory for further use
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let special = "!@#$%^&*()"
    if (number) {
      str += num
    }
    if (character) { 
      str += special
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  },[length,number, character,setPassword])
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

//   Selecting Text:
// The passwordRef.current?.select(); 
// method ensures that the text field referenced by passwordRef is selected. The optional chaining (?.) is used to safely access current in case passwordRef is null or undefined.

// Setting Selection Range:
// The setSelectionRange(0, 999); 
// method sets the selection range to cover the entire text content. This is useful for ensuring that all text in the input field is selected, allowing it to be copied to the clipboard.

// Copying to Clipboard:
// window.navigator.clipboard.writeText(password); uses the Clipboard API to copy the selected text (password) to the clipboard.

  useEffect(() => { // used to run or relaod
    passwordGenerator()
  }, [length,number,character,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
           />
           <button
            onClick={copyPasswordToClipboard}
           className="btn-3d bg-blue-500 text-white py-2 px-4 shadow-lg transform transition-transform duration-200 ease-in-out active:translate-y-1 active:shadow-none"
           >Copy
           </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={50}
            maxLength={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label > Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {number}
            id='characterInput'
            onChange={() => {setNumber((prev) => !prev)}}

             />
             <label>Numbers:{number}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {character}
            id='characterInput'
            onChange={() => {setCharacter((prev) => !prev)}}

             />
             <label>Characters:{character}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

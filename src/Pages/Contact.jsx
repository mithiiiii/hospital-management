import React, { useState } from 'react'

function Contact() {
  const formUrl = "http://localhost:5000/addForm";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intrest, setIntrest] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const[message,setMessage]=useState("")
  const [mess,setMess]=useState("");
  
  const Contact=(e)=>{
    e.preventDefault()

    console.log(name, phoneNumber, email, intrest);
    const body = {
      name,
      intrest,
      email,
      phone:phoneNumber,
      message,
    };
    fetch(formUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((json) => {


      setMess(json.message);
      

    })
    .catch((error) => {
      setMess("Internal Error");
    })
    
   
  }


  return (
  <div className='flex justify-center h-[80vh] pt-10'>
    
    <p className='text-gray-700'>{mess}</p>
    <form class="w-full max-w-lg ">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Name
        </label>
        <input 
         value={name}
         onChange={(e) => setName(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="your name"/>
      
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Email
        </label>
        <input
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="your email"/>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Phone Number
        </label>
        <input 
        value={phoneNumber}
        onChange={(e) => setPhone(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="phone number"/>
        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          Intrest
        </label>
        <input 
        value={intrest}
        onChange={(e) => setIntrest(e.target.value)}
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="your intrest"/>
      </div></div>
      {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Message
        </label>
        <div class="relative">
          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Zip
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
      </div> */}
       <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          Message
        </label>
        <input 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        class=" block  bg-gray-200 text-gray-700 border border-gray-200 h-[100px] w-[300px] rounded py-3 px-4 leading-tight focus:outline-nonex focus:bg-white focus:border-gray-500" id="grid-city" type="textarea" placeholder="your message"/>
      </div></div>
    <button className="bg-gray-500 font-lemon text-white rounded-xl py-2 mt-10 w-40" onClick={Contact}>SUBMIT</button>
  
  </form>
  
  </div>
  )
}

export default Contact
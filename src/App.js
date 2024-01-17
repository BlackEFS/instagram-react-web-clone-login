
import React, { useEffect, useRef, useState } from 'react';
import Input from './components/Input';
import { AiFillFacebook } from "react-icons/ai"

import screenshot1 from './img/screenshot1.png'; // resmin yolu src klasörüne göre ayarlandı
import screenshot2 from './img/screenshot2.png'; // resmin yolu src klasörüne göre ayarlandı
import screenshot3 from './img/screenshot3.png'; // resmin yolu src klasörüne göre ayarlandı
import screenshot4 from './img/screenshot4.png'; // resmin yolu src klasörüne göre ayarlandı

function App() {

  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const enable = username && password


  useEffect(() => {

    let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add('opacity-0')
      } else {
        images[total - 1].classList.add('opacity-0')
      }
      images[current].classList.remove('opacity-0')

      if (current === total - 1) {
        current = 0

      } else {
        current += 1
      }
    }
    imageSlider()
    let interval = setInterval((imageSlider), 3000)
    return () => {

      clearInterval(interval)
    }

  }, [ref])

  return (
    <div className='h-full w-full flex-wrap overflow-auto flex items-center gap-x-8 justify-center'>
      {/* Görsel kısmı aşağıda */}
      <div className="hidden md:block w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={screenshot1} alt="Screenshot1" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={screenshot2} alt="Screenshot2" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={screenshot3} alt="Screenshot3" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src={screenshot4} alt="Screenshot4" />
        </div>
      </div>
      {/* form kısmı */}

      <div className='w-[350px] grid gap-y-3'>
      <div className=' bg-white border px-[40px] pt-10 pb-6'>
        <a href='#' className='flex  justify-center mb-8'>
          <img className='h-[51px]' src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt='' />

        </a>
        <form className=' grid gap-y-1.5'>

          <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Phone number, username or email " />
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password " />


          <button type='submit' disabled={!enable} className='h-[30px] mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50'>Log In</button>

          <div className='flex items-center my-2.5 mb-3.5'>
            <div className='h-px bg-gray-300 flex-1' />
            <span className='px-4 text-[13px] text-gray-500 font-semibold'>OR</span>
            <div className='h-px bg-gray-300 flex-1' />
          </div>
          <div>
            <a href='#' className='flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook '>
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a href='#' className='text-xs flex items-center justify-center text-link'>
              Forget Password?
            </a>
          </div>
        </form>        
        </div>
        <div className=' bg-white border p-4 text-sm text-center'>
          Don't have an account? <a href='#' className='font-semibold text-brand '>Sing up </a>
        </div>
      </div>


    </div >
  );
}

export default App;
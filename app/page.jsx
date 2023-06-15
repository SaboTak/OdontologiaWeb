'use client'
import Image from "next/image"
import OdontLogo from "./media/OdontLogo.png"
import { useState } from "react"
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const router = useRouter();

  const [usuario, setUsuario] = useState();
  const [password, setpassword] = useState();

  const Login = async () => {
    try {
      const response = await axios.post('https://NyamAnd.pythonanywhere.com/login', {
        email: usuario,
        password: password
      });
      console.log('Autenticación exitosa');
      console.log('Token:', response.data.token);
      localStorage.setItem('UserToken', response.data.token);
      router.push('/odontograma')
    } catch (error) {
      console.error('Error de autenticación:', error);
    }
  }


  return (
    <div id="login" className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm bg-white p-6  rounded-lg shadow-xl ">
        <div className="flex items-center mb-6">
          <Image src={OdontLogo} className="h-14 w-14  mx-auto " />
        </div>
        <div className="mb-4">

          <input
            value={usuario}
            onChange={() => setUsuario(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-6">
          <input
            value={password}
            onChange={() => setpassword(event.target.value)}
            className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => Login()}
            className="bg-main hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  )
}
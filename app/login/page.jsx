import Image from "next/image"
import OdontLogo from "../media/OdontLogo.png"

export default function LoginPage(){
    return (
        <div id="login" className="flex justify-center items-center h-screen">
        <form className="w-full max-w-sm bg-white p-6  rounded-lg shadow-xl ">
          <div className="flex items-center mb-6">
            <Image src={OdontLogo} className="h-14 w-14  mx-auto " />
          </div>
          <div className="mb-4">

            <input
              className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-6">
            <input
              className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-main hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    )
}
export default function NavbarComponent(){
    return (
        <div className='flex p-5 bg-main'>
        <div className='flex'>
            <p className='my-auto px-4 font-semibold text-xl text-white'>Mi Restaurante</p>
        </div>
        <div className='ml-auto flex'>
            <div className='cursor-pointer my-auto flex border-x border-white px-6'>
                <button className='px-4 py-1 text-white bg-main-opacity ml-4 rounded-2xl font-semibold text-base flex '><p className='mr-10'>Eddy C.</p> <div className=' fechaAbajoBlanca my-auto'></div></button>
            </div>
            <div className=' my-auto ml-6'>
            </div>
        </div>

    </div>
    )
}
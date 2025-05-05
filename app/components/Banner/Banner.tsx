import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                        ¡Elimina los piojos en<br /> una sola sesión!.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                        Dile adiós a la pediculosis con nuestro tratamiento seguro, rápido y garantizado. Agenda tu cita hoy mismo.
                        </p>
                    </div>


                    <div className="text-center mt-5 mb-24">
                        
                        <a href='https://wa.me/5547403702?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias.' className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
                        ¡Agenda tu cita!
                        </a>
                        
                    </div>
                    <div className="flex justify-center ">
                        <Image src={'/assets/banner/9.webp'} alt="banner-image" width={600} height={600} className=" rounded-xl"/>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Banner;

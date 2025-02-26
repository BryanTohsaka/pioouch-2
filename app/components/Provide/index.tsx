import Image from "next/image";
import Link from "next/link";

interface datatype {
    imgSrc: string;
    title: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/provide/1.svg",
        title: "Detección precisa",
        paragraph: "Identificamos la presencia de piojos y liendres con un examen detallado.",
    },
    {
        imgSrc: "/assets/provide/2.svg",
        title: "Tratamiento efectivo",
        paragraph: "Eliminación en una sola sesión con métodos seguros y sin pesticidas.",
    },
    {
        imgSrc: "/assets/provide/3.svg",
        title: "Prevención garantizada",
        paragraph: "Asesoría y productos especializados para evitar nuevas infestaciones.",
    },
    {
        imgSrc: "/assets/provide/4.svg",
        title: "Apto para niños",
        paragraph: "Tratamientos seguros y sin dolor para todas las edades.",
    },
];

const Provide = () => {
    return (
        <div id="services">
            <div className='mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* COLUMNA-1 */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                                Eliminamos los piojos de forma rápida y segura.
                            </p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                                Nuestro tratamiento es 100% efectivo, sin pesticidas y apto para toda la familia. Recupera la tranquilidad en una sola sesión.
                            </h4>
                            
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* COLUMNA-2 */}
                    <div className='col-span-6 lg:col-span-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl'>
                            {Aboutdata.map((item, i) => (
                                <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                    <Image src={item.imgSrc} alt={item.title} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.title}</h4>
                                    <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Provide;

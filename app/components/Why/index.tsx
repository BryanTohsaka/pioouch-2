import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Eficacia garantizada",
        subheading: "Eliminamos piojos y liendres en una sola sesión con resultados 100% efectivos.",
    },
    {
        heading: "Métodos seguros",
        subheading: "Tratamientos sin pesticidas, aptos para niños y adultos sin riesgos.",
    },
    {
        heading: "Atención profesional",
        subheading: "Especialistas capacitados que garantizan un servicio rápido y sin dolor.",
    }
];

const Why = () => {
    return (
        <div id="about">
            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMNA-1 */}
                    <div className="lg:-ml-64 flex justify-center">
                        <Image src="/assets/why/8.webp" alt="treatment-image" width={600} height={900} className="rounded-xl"/>
                    </div>

                    {/* COLUMNA-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
                            ¿Por qué elegirnos?
                        </h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
                            Olvídate de los piojos sin químicos agresivos ni tratamientos interminables. Nuestra clínica ofrece la solución más rápida y efectiva.
                        </h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Why;

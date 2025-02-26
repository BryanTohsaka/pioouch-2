import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/users.svg',
        percent: '50k+',
        heading: "Pacientes atendidos",
        subheading: "Familias que han confiado en nosotros para eliminar piojos y liendres.",
    },
    {
        imgSrc: '/assets/buyers/smile.svg',
        percent: '70k+',
        heading: "Sesiones completadas",
        subheading: "Tratamientos efectivos realizados con resultados garantizados.",
    },
    {
        imgSrc: '/assets/buyers/book.svg',
        percent: '98%',
        heading: "Clientes satisfechos",
        subheading: "Personas que recomiendan nuestro servicio por su efectividad y rapidez.",
    },
    {
        imgSrc: '/assets/buyers/plus.svg',
        percent: '20+',
        heading: "Especialistas",
        subheading: "Un equipo profesional altamente capacitado en eliminación de piojos.",
    }
];

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border p-2 w-fit rounded-lg'>
                            <Image src={items.imgSrc} alt={items.heading} width={40} height={40} />
                        </div>
                        <h2 className='text-4xl lg:text-6xl purple font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;

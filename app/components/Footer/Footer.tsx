import React from "react";

const branches = [
    {
        name: "Sucursal Coapa",
        address: [
            "Prol. División del Nte. 4506, Coapa",
            "Prado Coapa, Tlalpan, 14357",
            "Ciudad de México, CDMX"
        ],
        phone: "",
    },
    {
        name: "Sucursal Tláhuac",
        address: [
            "Av. la Turba 636-Local 10",
            "Agrícola Metropolitana, Tláhuac, 13280",
            "Ciudad de México, CDMX"
        ],
        phone: "",
    },
    {
        name: "Sucursal Iztapalapa, Tepalcates",
        address: [
            "José Arrese 22, Tepalcates",
            "Iztapalapa, 09210",
            "Ciudad de México, CDMX"
        ],
        phone: "",
    },
    {
        name: "Sucursal La Villa, Tepeyac",
        address: [
            "Parque Guadalupe 27, Industrial",
            "Gustavo A. Madero, 07800",
            "Ciudad de México, CDMX"
        ],
        phone: "",
    },
    {
        name: "Sucursal Barranca del Muerto",
        address: [
            "Francisco de P. Miranda 377, Merced Gómez",
            "Álvaro Obregón, 01480",
            "Ciudad de México, CDMX"
        ],
        phone: "",
    },
];

const Footer = () => {
    return (
        <footer className="bg-slate text-white py-24">
            <h3 className=" capitalize text-center font-bold text-2xl">nuestras sucursales</h3>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {branches.map((branch, index) => (
                        <div key={index} className="space-y-4 lg:pl-20">
                            <h2 className="text-2xl font-bold">{branch.name}</h2>
                            <address className="not-italic space-y-2">
                                {branch.address.map((line, idx) => (
                                    <p key={idx}>{line}</p>
                                ))}
                                <p className="hidden">Tel: {branch.phone}</p>
                            </address>
                        </div>
                    ))}
                </div>
                <div className="border-t border-slate-700 mt-8 pt-8 text-center">
                    <p>© {new Date().getFullYear()} Developer by Zyntus</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

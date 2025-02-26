import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate text-white pb-48">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 lg:pl-20">
                        <h2 className="text-2xl font-bold">Nuestra Ubicación</h2>
                        <address className="not-italic space-y-2">
                            <p className="text-lg">Suc. La villa</p>
                            <p>Parque Guadalupe 27</p>
                            <p>Gustavo A. Madero, 0780</p>
                            <p>Tel: 55 8330 7020</p>
                        </address>
                        <div className="pt-4">
                            <h3 className="text-xl font-bold mb-2">Horario de Atención</h3>
                            <ul className="space-y-1">
                                <li>Lunes - Viernes: 10:00 - 19:00</li>
                                <li>Sábado: 10:00 - 18:00</li>
                                <li>Domingo: 10:00 - 16:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Encuéntranos</h2>
                        <div className="h-[300px] w-full rounded-lg overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.4642251074183!2d-99.12464712294282!3d19.478653481810717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f97518cd9de7%3A0x44f4c9d9455a6f88!2sParque%20Guadalupe%2027%2C%20Industrial%2C%20Gustavo%20A.%20Madero%2C%2007800%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1740535999017!5m2!1ses-419!2smx" width="100%" height="300" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-700 mt-8 pt-8 text-center">
                    <p>© {new Date().getFullYear()} Developer by Zyntus</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

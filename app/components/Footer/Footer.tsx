import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate text-white pb-48">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 lg:pl-20">
                        <h2 className="text-2xl font-bold">Sucursal Coapa</h2>
                        <address className="not-italic space-y-2">
                            <p>Prol. División del Nte</p>
                            <p>Tlalpan, 14357</p>
                            <p>Tel: 55 7012 7591</p>
                        </address>
                        
                    </div>
                    <div className="space-y-4 lg:pl-20">
                        <h2 className="text-2xl font-bold">Sucursal Tlahuac</h2>
                        <address className="not-italic space-y-2">
                            <p>Av. la Turba 636-Local 10</p>
                            <p>Agrícola Metropolitana, Tláhuac, 13280</p>
                            <p>Tel: 55 4740 3702</p>
                        </address>

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

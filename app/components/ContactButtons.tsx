"use client";
import React, { useState } from 'react';

const ContactButtons: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleWhatsAppOptions = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    return (
        <div className="font-sans flex justify-start items-center bg-gray-100 pl-5 transition-all">
            {/* Overlay */}
            <div
                id="overlay"
                className={`fixed inset-0 bg-black backdrop-blur-sm bg-opacity-40 z-10 ${isMenuOpen ? 'block' : 'hidden'}`}
                onClick={closeMenu}
            ></div>

            <div className="fixed bottom-5 left-5 flex flex-col gap-3 max-w-[60vw] z-20 ">
                <div
                    className="flex items-center bg-green-600 text-white px-3 py-2 rounded-full font-bold shadow-md transition-all cursor-pointer relative lime"
                    onClick={toggleWhatsAppOptions}
                >
                    <div className="relative flex items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            alt="WhatsApp Logo"
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div className="w-3 h-3 bg-green rounded-full absolute bottom-0 right-2 border-2 border-white"></div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <span className="text-xs font-normal opacity-90">Atención inmediata</span>
                        <span>Info por WhatsApp</span>
                    </div>
                </div>

                <div
                    id="whatsapp-options"
                    className={`flex flex-col gap-2 bg-white p-3 rounded-lg shadow-md absolute bottom-20 left-1/2 transform -translate-x-1/2 w-48 z-30 ${isMenuOpen ? 'flex' : 'hidden'
                        }`}
                >
                    <h3 className="text-sm font-bold pb-2">Selecciona tu sucursal:</h3>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Coapa%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="text-black px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200">
                        Coapa
                    </a>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20IztapalapaMe%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="text-black px-2 py-3 bg-gray-100 hover:bg-gray-200 border-y-2 border-grey">
                        Iztapalapa
                    </a>
                    <a href="https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Mixcoac%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias." className="text-black px-2 py-1 bg-gray-100 rounded-md hover:bg-gray-200">
                        Mixcoac
                    </a>
                </div>

                <a
                    href="tel:+123456789"
                    className="flex items-center bg-purple-800 text-white px-3 py-2 rounded-full font-bold shadow-md transition-all cursor-pointer relative bg-purple md:hidden"
                >
                    <div className="relative flex items-center ">
                        <img
                            src="https://vivahr.com/wp-content/uploads/2023/02/bilingual-customer-service-representative-job-description-template.jpg"
                            alt="Agente"
                            className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div className="w-3 h-3 bg-green rounded-full absolute bottom-0 right-2 border-2 border-white"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-normal opacity-90">2 Agentes online</span>
                        <span>Llama a un asesor</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ContactButtons;
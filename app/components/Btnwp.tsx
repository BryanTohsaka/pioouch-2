import { IoLogoWhatsapp, IoCall } from "react-icons/io5";

const Btnwp = () => {
  return (
    <>
      <div className='btn-wp btn-fixed'>
        <a href='https://wa.me/525570127591?text=Hola%20Sin%20Piojos%C2%AE.%20Me%20puedes%20dar%20info%20sobre%20los%20tratamientos%20para%20eliminar%20piojos?%20Gracias.'>
        <IoLogoWhatsapp />
        </a>
        </div>
      <div className='btn-pn btn-fixed'><a href='tel:5570127591'><IoCall /></a></div>
    </>
    
  )
}

export default Btnwp;
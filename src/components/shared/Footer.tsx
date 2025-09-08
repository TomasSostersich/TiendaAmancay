import {Link} from "react-router-dom";
import { socialLinks } from "../../constants/links";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";


export const Footer = () => {
    return <footer className="py-16 bg-gray-950 px-12 flex justify-between gap-10 text-slate-200 text-sm flex-wrap mt:10 md:flex-nowrap">
        <Link to='/' className={`text-2xl font-bold tracking-tighter transition-all text-white flex-1`}>
            Amancay Accesorios & Bijou
        </Link>
        <div className="flex flex-col gap-4 flex-1">
            <p className="font-semibold uppercase tracking-tighter">
                Desarrolado por Soster.Dev
            </p>
            <p className="font-semibold uppercase tracking-tighter">
                Medios de pago
            </p>
            <div className="flex flex-row w-full"></div>
            <MdOutlinePayments size={28}/>
            <RiSecurePaymentFill size={28}/>

        </div>
        <div className="flex flex-col gap-4 flex-1">
            <p className="font-semibold uppercase tracking-tighter">
                Políticas
            </p>
            <nav className="flex flex-col gap-2 text-xs font-medium">
                <Link to='/products'>Productos</Link>
                <Link to='#'className="text-slate-300 hover:text-white">Politicas de privacidad</Link>
                <Link to='#'className="text-slate-300 hover:text-white">Terminos de uso</Link>
            </nav>
        </div>

        <div className="flex flex-col gap-4 flex-1">
            <p className="font-semibold uppercase tracking-tighter">
                Síguenos
            </p>
            <p className="text-xs leading-6">
                No te pierdas las novedades de Amancay en Instagram
            </p>
            <div className="flex">
                {
                    socialLinks.map((link)=>(
                        <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            rel="norefferer"
                            className="text-slate-300 border border-gray-800 w-full h-full py-3.5 flex items-center justify-center transition-all hover:bg-gray hover:text-fuchsia-400"
                            >
                            {link.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    </footer>
}
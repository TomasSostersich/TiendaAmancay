import { Link } from 'react-router-dom';

export const Banner = () => {
	return (
		<div className='relative bg-gray-900 text-white'>
			{/* IMAGEN DE FONDO */}
			<div
				className='absolute  inset-0 bg-cover bg-center opacity-70 h-full'
				style={{ backgroundImage: 'url(/img/img-banner.webp)' }}
			/>

			{/* OVERLAY */}
			<div className='absolute inset-0 bg-black opacity-50' />

			{/* CONTENIDO */}
			<div className='relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8'>
				<h1 className='text-4xl font-bold mb-4 lg:text-6xl'>
					Los mejores accesorios para tu estilo
				</h1>

				<p className='text-lg mb-8 lg:text-2xl'>
					Descubre las ofertas exclusivas y las últimas novedades 
				</p>

				<Link
					to='/products'
					className='group flex items-center relative bg-neutral-800 h-16 w-full sm:w-64 border border-amber-500/30 text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden hover:border-[#f8e37b] hover:shadow-lg transition-all duration-500 ease-in-out'>
              {/* Efecto de brillo */}
              		<span className="absolute w-12 h-12 right-1 top-1 bg-[#f8e37b] rounded-full blur-lg group-hover:opacity-100 opacity-80 transition-all duration-300"></span>
              
              {/* Efecto de partículas (opcional) */}
              <span className="absolute z-10 w-20 h-20 bg-gray-50 right-8 top-3 rounded-full blur-lg group-hover:animate-pulse opacity-30"></span>
              
              {/* Texto del botón */}
              <span className="relative z-20">Ver catálogo</span>
              {/* Efecto hover - overlay gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#4B1D1D]/50 to-[#4b1d1dc1]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
				</Link>
			</div>
		</div>
	);
};

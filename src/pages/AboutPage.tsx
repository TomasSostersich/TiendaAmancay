export const AboutPage = () => {
	return (
		<div className='space-y-5'>
			<h1 className='text-center text-4xl font-semibold tracking-tight mb-5'>
				Amancay accesorios
			</h1>

			<img
				src='public/img/fondoabout.jpg'
				alt='Imagen de fondo'
				className='h-[500px] w-full object-cover'
			/>

			<div className='flex flex-col gap-4 tracking-tighter leading-7 text-sm font-medium text-slate-800'>
				<p>
                    El Amancay es una flor originaria de los Andes sudamericanos que simboliza el amor puro y eterno según la leyenda que la rodea.<br />
                    Esta flor, de una belleza sencilla pero impactante, es conocida por su capacidad de florecer en lugares inóspitos, representando fortaleza, pasión y un amor que trasciende dificultades.
                </p>
                <p>
                    Así como la flor Amancay simboliza emociones profundas, cada accesorio puede representar un gesto de amor, una conexión especial o un momento único en la vida de quienes lo usan.<br />
                    En Amancay Accesorios cada pieza es como la flor, elegida para destacar lo más hermoso de cada persona, llevando consigo un mensaje de amor y fortaleza.
                </p>

				<h2 className='text-3xl font-semibold tracking-tighh mt-8 mb-4'>
					¡No esperes más y eleva tu estilo a un nuevo nivel!
				</h2>

				<p>
					Para más información, no dudes en ponerte en contacto con
					nosotros, a través de nuestro correo electrónico:{' '}
					<a href='mailto:amancayaccess@gmail.com'>
						amancayaccess@gmail.com
					</a>{' '}
				</p>
			</div>
		</div>
	);
};

import { Separator } from '../shared/Separator';

const availableMaterials = [
	'Anillos',
	'Cadenas',
	'Pulseras',
	'Aros',
	'Collares de Gamuza',
	'Pulseras de hilo',
];

interface Props {
	selectedMaterials: string[];
	setSelectedMaterials: (materials: string[]) => void;
}

export const ContainerFilter = ({ selectedMaterials, setSelectedMaterials }: Props) => {
	const handleMaterialChange = (material: string) => {
		if (selectedMaterials.includes(material)) {
			setSelectedMaterials(selectedMaterials.filter(b => b !== material));
		} else {
			setSelectedMaterials([...selectedMaterials, material]);
		}
	};

	return (
		<div className='p-5 border border-slate-200 rounded-lg h-fit col-span-2 lg:col-span-1'>
			<h3 className='font-semibold text-xl mb-4'>Filtros</h3>

			{/* Separador */}
			<Separator />

			<div className='flex flex-col gap-3'>
				<h3 className='text-lg font-medium text-black'>Tipo de Producto</h3>

				<div className='flex flex-col gap-2'>
					{availableMaterials.map(material => (
						<label key={material} className='inline-flex items-center'>
							<input
								type='checkbox'
								className='text-black border-black focus:ring-black accent-black'
								checked={selectedMaterials.includes(material)}
								onChange={() => handleMaterialChange(material)}
							/>
							<span className='ml-2 text-black text-sm cursor-pointer'>
								{material}
							</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

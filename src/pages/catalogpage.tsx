function CatalogoPage() {
    return (
        <section className="h-screen flex flex-col">
            <nav className="fixed flex justify-between items-center bg-gray-200 w-full z-50 top-0 left-0 right-0 px-8 p-2 shadow-2xl font-semibold">
                <span className="material-icons text-black cursor-pointer transition-transform duration-300 hover:scale-125">arrow_back</span>
                <div className="flex space-x-4">
                    <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg text-stone-700 transition-all duration-300 ease-in-out active:scale-95 border-none bg-transparent cursor-pointer">
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="tracking-wider">Anillos</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                    </button>
                    <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg text-stone-700 transition-all duration-300 ease-in-out active:scale-95 border-none bg-transparent cursor-pointer">
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="tracking-wider">Aros</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                    </button>
                    <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg text-stone-700 transition-all duration-300 ease-in-out active:scale-95 border-none bg-transparent cursor-pointer">
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="tracking-wider">Cadenas</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                    </button>
                    <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg text-stone-700 transition-all duration-300 ease-in-out active:scale-95 border-none bg-transparent cursor-pointer">
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="tracking-wider">Pulseras</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                    </button>
                    <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg text-stone-700 transition-all duration-300 ease-in-out active:scale-95 border-none bg-transparent cursor-pointer">
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="tracking-wider">Chockers</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                    </button>
                </div>
                <span className="material-icons text-black cursor-pointer transition-transform duration-300 hover:scale-125">shopping_cart</span>
            </nav>
            <div className="flex items-center justify-center flex-grow max-h-screen">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80%] h-[80%] p-4">
                    <div className="row-span-2 bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="src/assets/img/Tabla_Talles_Anillo.webp" alt="Tabla talle anillos" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78a72649-cd3a-4f81-8e20-872d106a73d3.png" alt="Product 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b5c6222-cff0-491d-985f-7fff3d6b4594.png" alt="Product 3" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <h2 className="font-semibold text-4xl text-stone-700 border-b-3">Todos nuestros productos</h2>
            </div>
        </section>
    );
}

export default CatalogoPage;

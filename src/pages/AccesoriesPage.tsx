import { useState } from "react";
import { CardProduct } from "../components/products/CardProduct";
import { ContainerFilter } from "../components/products/ContainerFilter";
import { prepareProducts } from "../helpers";
import { useFilteredProducts } from "../hooks/products/useFilteredProducts";
import { Pagination } from '../components/shared/Pagination';

export const AccesoriesPage = () => {
  const [page, setPage] = useState(1);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({
    page,
    material: selectedMaterials,
  });

  const preparedProducts = prepareProducts(products);

  return (
    <>
      <h1 className='text-5xl font-semibold text-center mb-12'>
        Todos los accesorios
      </h1>

      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-6'>
        {/* FILTROS */}
        <ContainerFilter 
          selectedMaterials={selectedMaterials}
          setSelectedMaterials={setSelectedMaterials}
        />

        {isLoading ? (
          <div className='col-span-2 flex items-center justify-center h-[500px]'>
            <p className='text-2xl'>Cargando...</p>
          </div>
        ) : (
          <div className='col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12'>
            <div className='grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4'>
              {preparedProducts.map(product => (
                <CardProduct
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  sizes={product.sizes}
                  img={product.images[0]}
                  slug={product.slug}
                  variants={product.variants}
                />
              ))}
            </div>

            {/* TODO: Paginación */}
            <Pagination 
              totalItems={totalProducts}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

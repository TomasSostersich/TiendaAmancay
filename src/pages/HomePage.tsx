import { FeatureGrid } from '../components/Home/FeatureGrid';
import { ProductGrid } from '../components/Home/ProductGrid';
import { ProductGridSkeleton } from '../components/skeletons/ProductGridSkeleton';
import { useHomeProducts } from '../hooks';

const transformVariants = (variants: any[]) => {
  return variants.map(variant => ({
    ...variant,
    size_name: variant.size_name ?? variant.size,
    price: Number(variant.price) || 0, // asegura un price numérico
  }));
};

const prepareProductsWithFixes = (products: any[]) => {
  return products.map(product => {
    const variants = transformVariants(product.variants || []);

    // Tomar price del producto si existe, sino el mínimo de las variantes, sino 0
    const productPrice =
      Number(product.price) ||
      (variants.length > 0
        ? Math.min(...variants.map(v => Number(v.price)))
        : 0);

    // Obtener talles: primero product.sizes, si no, tomar los sizes de las variantes
    const sizes =
      product.sizes?.map((s: { size: string }) => s.size) ||
      variants.map(v => v.size).filter(Boolean) ||
      [];

    return {
      ...product,
      variants,
      size: sizes,
      price: productPrice,
      sizeMessage: sizes.length > 0 ? null : 'Sin talles disponibles', // mensaje auxiliar si no hay talles
    };
  });
};
export const HomePage = () => {
  const { recentProducts, popularProducts, isLoading } = useHomeProducts();

  const preparedRecentProducts = prepareProductsWithFixes(recentProducts);
  const preparedPopularProducts = prepareProductsWithFixes(popularProducts);

  return (
    <div>
      <FeatureGrid />

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid title="Nuevos Productos" products={preparedRecentProducts} />
      )}

      {isLoading ? (
        <ProductGridSkeleton numberOfProducts={4} />
      ) : (
        <ProductGrid title="Productos Destacados" products={preparedPopularProducts} />
      )}
    </div>
  );
};

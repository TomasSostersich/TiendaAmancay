import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { VariantProduct } from "../../interfaces";
import { Tag } from "../shared/Tag";
import { useCartStore } from "../../store/cart.store";
import toast from "react-hot-toast";
import { formatPrice } from "../../helpers";

interface Props {
  img: string;
  name: string;
  price: number;
  slug: string;
  sizes?: { name: string; size: string }[]; // Opcional para evitar undefined
  variants?: VariantProduct[]; // Opcional para evitar undefined
}

export const CardProduct = ({
  img,
  name,
  price,
  slug,
  sizes = [], // fallback a array vacío
  variants = [], // fallback a array vacío
}: Props) => {
  // Estado inicial seguro
  const [activeSize, setActiveSize] = useState<{
    name: string;
    size: string;
  } | null>(sizes.length ? sizes[0] : null);

  const addItem = useCartStore((state) => state.addItem);

  // Variante seleccionada según tamaño activo
  const selectedVariant = variants.find(
    (variant) => variant.size === activeSize?.size
  );
  const stock = selectedVariant?.stock || 0;

  const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!activeSize) {
      toast.error("Seleccione un tamaño", { position: "bottom-right" });
      return;
    }

    if (selectedVariant && selectedVariant.stock > 0) {
      addItem({
        variantId: selectedVariant.id,
        productId: slug,
        name,
        image: img,
        size: activeSize.name,
        price: selectedVariant.price,
        quantity: 1,
      });
      toast.success("Producto añadido al carrito", {
        position: "bottom-right",
      });
    } else {
      toast.error("Producto agotado", { position: "bottom-right" });
    }
  };

  return (
    <div className="flex flex-col gap-6 relative m-4">
      <Link
        to={`/products/${slug}`}
        className="flex relative group overflow-hidden "
      >
        <div className="flex h-[350px] w-full items-center justify-center py-2 lg:h-[250px]">
          <img src={img} alt={name} className="object-contain h-full w-full" />
        </div>

        <button
          className="bg-white border border-slate-200 absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-[100%] transition-all duration-300 group-hover:translate-y-0"
          onClick={handleAddClick}
        >
          <FiPlus />
          Añadir
        </button>
      </Link>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-[15px] font-medium">{name}</p>
        <p className="text-[15px] font-medium">{formatPrice(price)}</p>

        <div className="flex gap-3">
          {sizes.length ? (
            sizes.map((size) => (
              <span
                key={size.size}
                className={`grid place-items-center w-5 h-5 rounded-full cursor-pointer ${
                  activeSize?.size === size.size ? "border border-black" : ""
                }`}
                onClick={() => setActiveSize(size)}
              >
                <span className="w-[14px] h-[14px] rounded-full" />
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-500">
              Sin talles disponibles
            </span>
          )}
        </div>
      </div>

      <div className="absolute top-2 left-2">
        {stock === 0 && <Tag contentTag="agotado" />}
      </div>
    </div>
  );
};

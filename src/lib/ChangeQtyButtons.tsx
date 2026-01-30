import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { Minus, Plus } from "lucide-react";
import { useShallow } from "zustand/shallow";

type Props = { productId: string };

export function ChangeQtyButtons({ productId }: Props) {
  const { getProductById, incQty, decQty } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
    })),
  );
  const product = getProductById(productId);
  console.log(product, "product");

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button onClick={() => decQty(product.id)}>
            <Minus></Minus>
          </Button>
          <p>{product.qty}</p>
          <Button onClick={() => incQty(product.id)}>
            <Plus></Plus>
          </Button>
        </div>
      )}
    </>
  );
}

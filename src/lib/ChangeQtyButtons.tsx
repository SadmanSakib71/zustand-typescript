import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

type Props = { productId: string };

export function ChangeQtyButtons({ productId }: Props) {
  const { getProductById, incQty, decQty, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
      setTotal: state.setTotal,
    })),
  );
  const product = getProductById(productId);

  useEffect(() => {
    const UnSub = useStore.subscribe(
      (state) => state.products,
      (products) => {
        setTotal(
          products.reduce((acc, item) => acc + item.price * item.qty, 0),
        );
      },
      { fireImmediately: true },
    );
    return UnSub;
  }, [setTotal]);

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

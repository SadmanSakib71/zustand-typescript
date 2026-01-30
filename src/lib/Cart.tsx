import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useStore } from "@/store/store";
import { CircleX, ShoppingCart, Trash2 } from "lucide-react";
import { useShallow } from "zustand/shallow";
import { ChangeQtyButtons } from "./ChangeQtyButtons";

export function Cart() {
  const { removeProduct, reset, products, total } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      removeProduct: state.removeProduct,
      products: state.products,
      total: state.total,
    })),
  );

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size="icon">
            <ShoppingCart></ShoppingCart>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="overflow-y-scroll h-96 flex flex-col gap-2">
          <div className="flex gap-2 text-lg items-center">
            <h1>Cart:</h1>
            <Button onClick={reset} variant="destructive" size="icon">
              <CircleX />
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {products.map((product) => (
              <Card className="flex flex-col" key={product.id}>
                <CardHeader className="flex flex-row items-center gap-2">
                  <CardTitle> {product.title}</CardTitle>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeProduct(product.id)}
                  >
                    <Trash2 />
                  </Button>
                </CardHeader>
                <CardContent>{product.price}</CardContent>
                <CardFooter>
                  <ChangeQtyButtons productId={product.id} />
                </CardFooter>
              </Card>
            ))}
          </div>
          <p>Total: {total}$</p>
        </PopoverContent>
      </Popover>
    </div>
  );
}

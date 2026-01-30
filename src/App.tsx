import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { ChangeQtyButtons } from "./lib/ChangeQtyButtons";
import { PRODUCTS_DATA } from "./lib/mockData";
import { useStore } from "./store/store";

function App() {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);
  return (
    <main className="flex flex-col gap-3 dark bg-background h-screen max-w-sm mx-auto mt-2">
      <h1 className="text-2xl">Products:</h1>
      <div className="flex flex-col gap-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product?.id}>
            <CardHeader>{product?.title}</CardHeader>
            <CardContent>{product?.price}</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyButtons productId={product?.id}></ChangeQtyButtons>
              ) : (
                <Button onClick={() => addProduct(product)} variant="default">
                  Add To Cart
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default App;

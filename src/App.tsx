import { create } from "zustand";
import { Button } from "./components/ui/button";

const useStore = create<{
  count: number;
  increment: () => void;
  decrement: () => void;
}>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state?.count + 1 })),
  decrement: () => set((state) => ({ count: state?.count - 1 })),
}));

function App() {
  const store = useStore();
  return (
    <>
      <Button onClick={store.increment}>+</Button>
      <Count />
      <Button onClick={store.decrement}>-</Button>
    </>
  );
}

function Count() {
  const store = useStore();
  return <>{store.count}</>;
}

export default App;

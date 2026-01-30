import { useShallow } from "zustand/shallow";
import { useStore } from "./store/store";

function App() {
  const { address } = useStore(
    useShallow((state) => ({
      address: state.address,
    })),
  );

  // const fullName = useStore((state) => state.fullName);

  return <>{address}</>;
}

export default App;

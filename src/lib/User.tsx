import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useStore } from "@/store/store";
import { UserIcon } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export function User() {
  const { fullName, userName, address, setAddress, fetchUser } = useStore(
    useShallow((state) => ({
      fullName: state.fullName,
      userName: state.userName,
      address: state.address,
      setAddress: state.setAddress,
      fetchUser: state.fetchUser,
    })),
  );

  useEffect(() => {
    async function fetchData() {
      await fetchUser();
    }
    fetchData();
  }, [fetchUser]);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size="icon">
            <UserIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="overflow-y-scroll h-96 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <p>{fullName}</p>
            <p className="text-sm">{userName}</p>
          </div>
          <Label htmlFor="address">Your Address:</Label>
          <Input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

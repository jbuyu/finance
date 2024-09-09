import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CalculateReturnsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Dialog>
      <DialogTrigger asChild> 
        <Button variant="outline">Calculate Return</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Return Form</DialogTitle>
          <DialogDescription>
            Calculate the return on your premiumns
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4   " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right w-2/3 flex ">
              Principle Amount
            </Label>
            <Input
              {...register("principal_amount", { required: true })}
              id="principal_amount"
              defaultValue={0}
              type="number"
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right w-2/3 flex ">
              Interest 1
            </Label>
            <Input
              {...register("interest_1", { required: true })}
              id="interest_1"
              defaultValue={0}
              type="number"
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right w-2/3 flex ">
              Interest 2
            </Label>
            <Input
              {...register("interest_2", { required: true })}
              id="interest_2"
              defaultValue={0}
              type="number"
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right w-2/3 flex ">
              Monthly Contributions
            </Label>
            <Input
              {...register("monthly_contributions", { required: true })}
              id="monthly_contributions"
              defaultValue={0}
              type="number"
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right w-2/3 flex ">
              Investment Period
            </Label>
            <Input
              {...register("investment_period", { required: true })}
              id="investment_period"
              defaultValue={0}
              type="number"
            />
          </div>
          <div className="flex justify-between items-center">
            <Label htmlFor="name" className="text-right w-2/3 border-2 flex ">
              Compound Interval
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">monthly</SelectItem>
                <SelectItem value="dark">quarterly</SelectItem>
                <SelectItem value="system">yearly</SelectItem>
              </SelectContent>
            </Select>
            </div>


          <DialogFooter>
            <Button type="submit">Calculate</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

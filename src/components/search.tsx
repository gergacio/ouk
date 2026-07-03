"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function SearchWithFilters() {
  return (
    <div className="space-y-4 space-x-40">
      <Input type="search" placeholder="Search..." className="w-full" />

      <RadioGroup defaultValue="all" className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="r1" />
          <Label htmlFor="r1">Computer Science </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="users" id="r2" />
          <Label htmlFor="r2">Differential Calculus</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="posts" id="r3" />
          <Label htmlFor="r3">Integral Calculus</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

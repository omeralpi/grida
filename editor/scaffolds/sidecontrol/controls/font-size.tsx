import {
  Select,
  SelectContent,
  SelectItem,
} from "@/components/ui-editor/select";
import * as SelectPrimitive from "@radix-ui/react-select";
import InputPropertyNumber from "../ui/number";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/components/lib/utils";
import type { editor } from "@/grida-canvas";
import type { TMixed } from "./utils/types";

export function FontSizeControl({
  value,
  onValueChange,
  onValueCommit,
}: {
  value?: TMixed<number>;
  onValueChange?: (change: editor.api.NumberChange) => void;
  onValueCommit?: (change: editor.api.NumberChange) => void;
}) {
  return (
    <div className="relative">
      <InputPropertyNumber
        mode="auto"
        type="integer"
        value={value}
        placeholder="inherit"
        min={1}
        step={1}
        onValueChange={onValueChange}
        onValueCommit={onValueCommit}
        className={cn(
          "overflow-hidden",
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        )}
      />
      <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-center border-l">
        <Select
          value={String(value)}
          onValueChange={(_v) => {
            const value = parseInt(_v);
            onValueChange?.({ type: "set", value });
          }}
        >
          <SelectPrimitive.SelectTrigger asChild>
            <button className="w-full text-muted-foreground flex items-center justify-center size-6 p-2 opacity-50">
              <ChevronDownIcon />
            </button>
          </SelectPrimitive.SelectTrigger>
          <SelectContent align="end">
            {Object.entries(twsizes).map(([key, value]) => (
              <SelectItem key={key} value={String(value["font-size"])}>
                {value["font-size"]}{" "}
                <span className="text-muted-foreground text-xs">
                  {value.name}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

const twsizes = {
  "text-xs": {
    "font-size": 12,
    name: "xs",
  },
  "text-sm": {
    "font-size": 14,
    name: "sm",
  },
  "text-base": {
    "font-size": 16,
    name: "base",
  },
  "text-lg": {
    "font-size": 18,
    name: "lg",
  },
  "text-xl": {
    "font-size": 20,
    name: "xl",
  },
  "text-2xl": {
    "font-size": 24,
    name: "2xl",
  },
  "text-3xl": {
    "font-size": 30,
    name: "3xl",
  },
  "text-4xl": {
    "font-size": 36,
    name: "4xl",
  },
  "text-5xl": {
    "font-size": 48,
    name: "5xl",
  },
  "text-6xl": {
    "font-size": 60,
    name: "6xl",
  },
  "text-7xl": {
    "font-size": 72,
    name: "7xl",
  },
  "text-8xl": {
    "font-size": 96,
    name: "8xl",
  },
  "text-9xl": {
    "font-size": 128,
    name: "9xl",
  },
};

import { cn } from "@/lib/utils"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { ColorOption } from "@/components/event-calendar/lib/types"

export default function RadioGroupColorElement({
  colorOption,
}: {
  colorOption: ColorOption
}) {
  return (
      <RadioGroupItem
        key={colorOption.value}
        id={`color-${colorOption.value}`}
        value={colorOption.value}
        aria-label={colorOption.label}
        className={cn(
          "size-6 shadow-none",
          colorOption.bgClass,
          colorOption.borderClass
        )}
      />
  )
}

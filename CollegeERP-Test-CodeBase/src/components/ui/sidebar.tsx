import { Button } from "../../components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../../components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">☰</Button>
      </SheetTrigger>
      <SheetContent>
        <div className="py-4">
          <div className="items-center">
            <Button>Home</Button>
          </div>
          <div className="items-center">
            <Button>About</Button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

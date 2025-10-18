import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCartStore } from "../../store/CartStore/cartStore"
import { Trash2, ShoppingCart, Plus, Minus } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CartDrawer() {
  const { items, removeItem, increment, decrement } = useCartStore()

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[500px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[70vh] pr-2 mt-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <div className="text-sm text-muted-foreground">{item.price.toLocaleString()} $</div>
                  <div className="flex items-center mt-2 gap-2">
                    <Button size="icon" variant="outline" onClick={() => decrement(item.id)}>
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <Button size="icon" variant="outline" onClick={() => increment(item.id)}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button size="icon" variant="destructive" onClick={() => removeItem(item.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </ScrollArea>

        {items.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between mb-4 text-lg font-semibold">
              <span>Total:</span>
              <span>{total.toLocaleString()} $</span>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

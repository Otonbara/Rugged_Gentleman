import AccessoriesProductCard from "../components/AccessoriesProductCard";

const accessoriesCollection = [
    { id: 1, name: "Black Nike Just Do It Face Cap", price: 15000, image: "/Accessories/1.jpg", quantity: 10 },
    { id: 2, name: "Blue Lacoste Face Cap", price: 15000, image: "/Accessories/2.jpg", quantity: 10 },
    { id: 3, name: "White Adidas Originals Face Cap", price: 15000, image: "/Accessories/3.jpg", quantity: 10 },
    { id: 4, name: "Navy Blue Polo Ralph Face Cap", price: 15000, image: "/Accessories/4.jpg", quantity: 10 },
    { id: 5, name: "Black NY Face Cap", price: 15000, image: "/Accessories/5.jpg", quantity: 10 },
    { id: 6, name: "Silver Body Blue Dial Tissot Wristwatch", price: 200000, image: "/Accessories/6.jpg", quantity: 5 },
    { id: 7, name: "Silver Body Silver Dial Tissot Wristwatch", price: 230000, image: "/Accessories/7.jpg", quantity: 5 },
    { id: 8, name: "Silver Body Silver Dial Omega Wristwatch", price: 280000, image: "/Accessories/8.jpg", quantity: 5 },
    { id: 9, name: "Silver/Gold Body Black Dial Omega Wristwatch", price: 400000, image: "/Accessories/9.jpg", quantity: 5 },
    { id: 10, name: "Dark Green Body Dark Green Dial Seiko Wristwatch", price: 355000, image: "/Accessories/10.jpg", quantity: 5 },
    { id: 11, name: "Silver Lacoste Bracelet", price: 10000, image: "/Accessories/11.jpg", quantity: 20 },
    { id: 12, name: "Silver Empori Armani Bracelet", price: 10000, image: "/Accessories/12.jpg", quantity: 20 },
    { id: 13, name: "Silver Minimalist Bracelet", price: 7000, image: "/Accessories/13.jpg", quantity: 20 },
    { id: 14, name: "Silver Chain with Pendant", price: 9000, image: "/Accessories/14.jpg", quantity: 20 },
    { id: 15, name: "Silver Minimalist Chain", price: 8000, image: "/Accessories/15.jpg", quantity: 20 },
    { id: 16, name: "Silver Cuban Chain", price: 12000, image: "/Accessories/16.jpg", quantity: 20 },
    { id: 17, name: "Black Ring", price: 6000, image: "/Accessories/17.jpg", quantity: 30 },
    { id: 18, name: "Silver/Black Ring", price: 4500, image: "/Accessories/18.jpg", quantity: 30 },
    { id: 19, name: "3pcs Silver Ring", price: 12000, image: "/Accessories/19.jpg", quantity: 30 },
    { id: 20, name: "5pcs Ring", price: 20000, image: "/Accessories/20.jpg", quantity: 30 },
];

export default function Accessories() {
    return (
        <article className="mx-auto px-4 py-6 bg-zinc-200">
            <h1 className="text-4xl font-bold text-center mb-4">OUR ACCESSORIES COLLECTION</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {accessoriesCollection.map((accessory) => (
                    <AccessoriesProductCard key={accessory.id} product={accessory} />
                ))}
            </div>
        </article>
    )
}
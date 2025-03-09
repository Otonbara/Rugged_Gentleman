import AccessoriesProductCard from "../components/AccessoriesProductCard";

const accessoriesCollection = [
    { id: 1, name: "Black Nike Just Do It Face Cap", price: "₦15,000", image: "/Accessories/1.jpg" },
    { id: 2, name: "Blue Lacoste Face Cap", price: "₦15,000", image: "/Accessories/2.jpg" },
    { id: 3, name: "White Adidas Originals Face Cap", price: "₦15,000", image: "/Accessories/3.jpg" },
    { id: 4, name: "Navy Blue Polo Ralph Face Cap", price: "₦15,000", image: "/Accessories/4.jpg" },
    { id: 5, name: "Black NY Face Cap", price: "₦15,000", image: "/Accessories/5.jpg" },
    { id: 6, name: "Silver Body Blue Dial Tissot Wristwatch", price: "₦200,000", image: "/Accessories/6.jpg" },
    { id: 7, name: "Silver Body Silver Dial Tissot Wristwatch", price: "₦230,000", image: "/Accessories/7.jpg" },
    { id: 8, name: "Silver Body Silver Dial Omega Wristwatch", price: "₦280,000", image: "/Accessories/8.jpg" },
    { id: 9, name: "Silver/Gold Body Black Dial Omega Wristwatch", price: "₦400,000", image: "/Accessories/9.jpg" },
    { id: 10, name: "Dark Green Body Dark Green Dial Seiko Wristwatch", price: "₦355,000", image: "/Accessories/10.jpg" },
    { id: 11, name: "Silver Lacoste Bracelet", price: "₦10,000", image: "/Accessories/11.jpg" },
    { id: 12, name: "Silver Empori Armani Bracelet", price: "₦10,000", image: "/Accessories/12.jpg" },
    { id: 13, name: "Silver Minimalist Bracelet", price: "₦7,000", image: "/Accessories/13.jpg" },
    { id: 14, name: "Silver Chain with Pendant", price: "₦9,000", image: "/Accessories/14.jpg" },
    { id: 15, name: "Silver Minimalist Chain", price: "₦8,000", image: "/Accessories/15.jpg" },
    { id: 16, name: "Silver Cuban Chain", price: "₦12,000", image: "/Accessories/16.jpg" },
    { id: 17, name: "Black Ring", price: "₦6,000", image: "/Accessories/17.jpg" },
    { id: 18, name: "Silver/Black Ring", price: "₦4,500", image: "/Accessories/18.jpg" },
    { id: 19, name: "3pcs Silver Ring", price: "₦12,000", image: "/Accessories/19.jpg" },
    { id: 20, name: "5pcs Ring", price: "₦20,000", image: "/Accessories/20.jpg" },
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
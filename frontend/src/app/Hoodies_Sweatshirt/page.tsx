import ProductCard from "../components/ProductCard"

const hoodies_sweatshirtsCollection = [
    { id: 1, name: "Black Hoodie", price: "₦25,000", image: "/Hoodies_Sweatshirts/1.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 2, name: "Black Zipper Hoodie", price: "₦27,000", image: "/Hoodies_Sweatshirts/2.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 3, name: "Grey Acid Wash Hoodie", price: "₦30,000", image: "/Hoodies_Sweatshirts/3.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 4, name: "Nike Vintage Hoodie", price: "₦40,000", image: "/Hoodies_Sweatshirts/4.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 5, name: "White Champion Hoodies", price: "₦40,000", image: "/Hoodies_Sweatshirts/5.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 6, name: "Black Sweatshirt", price: "₦25,000", image: "/Hoodies_Sweatshirts/6.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 7, name: "Grey Sweatshirt", price: "₦25,000", image: "/Hoodies_Sweatshirts/7.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 8, name: "Blue Sweatshirt", price: "₦25,000", image: "/Hoodies_Sweatshirts/8.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 9, name: "Grey Annie Bing Sweatshirt", price: "₦30,000", image: "/Hoodies_Sweatshirts/9.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 10, name: "Supreme Armless Sweatshirt" , price: "₦70,000", image: "/Hoodies_Sweatshirts/10.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 11, name: "Black Half-Zip Sweatshirt", price: "₦30,000", image: "/Hoodies_Sweatshirts/11.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 12, name: "Black Half-Zip Sweatshirt", price: "₦25,000", image: "/Hoodies_Sweatshirts/12.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 13, name: "Black The North Face Half-Zip Sweatshirt", price: "₦40,000", image: "/Hoodies_Sweatshirts/13.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 14, name: "Navy Blue The North Face Half-Zip Sweatshirt", price: "₦40,000", image: "/Hoodies_Sweatshirts/14.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 15, name: "Navy Blue Almafi Coast Half-Zip Sweatshirt", price: "₦35,000", image: "/Hoodies_Sweatshirts/15.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 16, name: "Black Harrignton Jacket", price: "₦45,000", image: "/Hoodies_Sweatshirts/16.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 17, name: "Blue Nike Harrignton Jacket", price: "₦45,000", image: "/Hoodies_Sweatshirts/17.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 18, name: "Black Acne Studio Harrignton Jacket", price: "₦38,000", image: "/Hoodies_Sweatshirts/18.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 19, name: "Blue Tommy Hilfiger Harrignton Jacket", price: "₦50,000", image: "/Hoodies_Sweatshirts/19.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 20, name: "Blue Polo Ralph Harrignton Jacket", price: "₦55,000", image: "/Hoodies_Sweatshirts/20.jpg", size: ["S", "M", "L", "XL", "2XL"] }
]

export default function Hoodies_Sweatshirts() {
    return (
        <article className="mx-auto px-4 py-6 bg-zinc-200">
            <h1 className="text-4xl font-bold text-center mb-4">OUR HOODIES & SWEATSHIRTS COLLECTION</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {hoodies_sweatshirtsCollection.map((hoodie_sweatshirt) => (
                    <ProductCard key={hoodie_sweatshirt.id} product={hoodie_sweatshirt} />
                ))}
            </div>
        </article>
    )
}
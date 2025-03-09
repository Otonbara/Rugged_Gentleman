import ProductCard from "../components/ProductCard";

const topsCollection = [
    {id: 1, name: "Brown Corduroy Short Sleeve Shirt", price: 50000, image: "/Tops/1.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 2, name: "Earth Green Corduroy Short Sleeve Shirt", price: 50000, image: "/Tops/2.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 3, name: "Grey Linen Short Sleeve Shirt", price: 50000, image: "/Tops/3.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 4, name: "Dark Blue Jean Short Sleeve Shirt", price: 55000, image: "/Tops/4.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 5, name: "Brown Shein Short Sleeve Shirt", price: 30000, image: "/Tops/5.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 6, name: "Green Shein Short Sleeve Shirt", price: 30000, image: "/Tops/6.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 7, name: "Blue Short Sleeve T-Shirt", price: 20000, image: "/Tops/7.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 8, name: "Sky Blue Short Sleeve T-Shirt", price: 20000, image: "/Tops/8.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 9, name: "Green Short Sleeve T-Shirt", price: 20000, image: "/Tops/9.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 10, name: "Light Blue Short Sleeve T-Shirt", price: 20000, image: "/Tops/10.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 11, name: "Biege Short Sleeve T-Shirt", price: 20000, image: "/Tops/11.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 12, name: "Black Short Sleeve T-Shirt", price: 20000, image: "/Tops/12.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 13, name: "White Long Sleeve Shirt", price: 35000, image: "/Tops/13.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 14, name: "Navy Blue Long Sleeve Shirt", price: 35000, image: "/Tops/14.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 15, name: "Black Short Sleeve Shirt", price: 35000, image: "/Tops/15.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 16, name: "White Short Sleeve Shirt", price: 35000, image: "/Tops/16.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 17, name: "Navy Blue Short Sleeve Shirt", price: 35000, image: "/Tops/17.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 18, name: "Red & Black Pinstripe Short Sleeve Shirt", price: 35000, image: "/Tops/18.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 19, name: "Black Short Sleeve T-Shirt W/Collar", price: 30000, image: "/Tops/19.jpg", size: ["S", "M", "L", "XL", "2XL"]},
    {id: 20, name: "Black Polo Ralph Short Sleeve T-Shirt W/Collar", price: 30000, image: "/Tops/20.jpg", size: ["S", "M", "L", "XL", "2XL"]},
];

export default function Tops() {
    return (
        <article className="mx-auto px-4 py-6 bg-zinc-200">
            <h1 className="text-4xl font-bold text-center mb-4">OUR TOPS COLLECTION</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {topsCollection.map((top) => (
                    <ProductCard key={top.id} product={top} />
                ))}
            </div>
        </article>
    )
}
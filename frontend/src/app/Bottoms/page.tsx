import ProductCard from "../components/ProductCard"

const bottomsCollection = [
    { id: 1, name: "Navy Blue Formal Trouser", price: 25000, image: "/Bottoms/1.jpg", size: [30, 32, 34, 36, 38] },
    { id: 2, name: "Black Formal Trouser", price: 25000, image: "/Bottoms/2.jpg", size: [30, 32, 34, 36, 38] },
    { id: 3, name: "Grey Formal Trouser", price: 25000, image: "/Bottoms/3.jpg", size: [30, 32, 34, 36, 38] },
    { id: 4, name: "Brown Formal Trouser", price: 25000, image: "/Bottoms/4.jpg", size: [30, 32, 34, 36, 38] },
    { id: 5, name: "Wine Formal Trouser", price: 25000, image: "/Bottoms/5.jpg", size: [30, 32, 34, 36, 38] },
    { id: 6, name: "Washed Blue Straight Jean", price: 28000, image: "/Bottoms/6.jpg", size: [30, 32, 34, 36, 38] },
    { id: 7, name: "Washed Dark Blue Straight Jean", price: 28000, image: "/Bottoms/7.jpg", size: [30, 32, 34, 36, 38] },
    { id: 8, name: "Washed Black Straight Jean", price: 28000, image: "/Bottoms/8.jpg", size: [30, 32, 34, 36, 38] },
    { id: 9, name: "Black Straight Jean", price: 28000, image: "/Bottoms/9.jpg", size: [30, 32, 34, 36, 38] },
    { id: 10, name: "Light Blue Straight Jean", price: 28000, image: "/Bottoms/10.jpg", size: [30, 32, 34, 36, 38] },
    { id: 11, name: "Black Cargo Pant", price: 23000, image: "/Bottoms/11.jpg", size: [30, 32, 34, 36, 38] },
    { id: 12, name: "Grey Cargo Pant", price: 23000, image: "/Bottoms/12.jpg", size: [30, 32, 34, 36, 38] },
    { id: 13, name: "Grey Cargo Pant", price: 23000, image: "/Bottoms/13.jpg", size: [30, 32, 34, 36, 38] },
    { id: 14, name: "Army Green Cargo Pant", price: 23000, image: "/Bottoms/14.jpg", size: [30, 32, 34, 36, 38] },
    { id: 15, name: "Black Cargo Pant", price: 23000, image: "/Bottoms/15.jpg", size: [30, 32, 34, 36, 38] },
    { id: 16, name: "Grey Sweatpant", price: 15000, image: "/Bottoms/16.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 17, name: "Grey Sweatpant", price: 15000, image: "/Bottoms/17.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 18, name: "Black Sweatpant", price: 15000, image: "/Bottoms/18.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 19, name: "Black Nike Sweatpant", price: 15000, image: "/Bottoms/19.jpg", size: ["S", "M", "L", "XL", "2XL"] },
    { id: 20, name: "Black Jordan Sweatpant", price: 15000, image: "/Bottoms/20.jpg", size: ["S", "M", "L", "XL", "2XL"] },
]

export default function Bottoms() {
    return (
        <article className="mx-auto px-4 py-6 bg-zinc-200">
            <h1 className="text-4xl font-bold text-center mb-4">OUR BOTTOMS COLLECTION</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bottomsCollection.map((bottom) => (
                    <ProductCard key={bottom.id} product={bottom} />
                ))}
            </div>
        </article>
    )
}
import ProductCard from "../components/ProductCard"

const footwearsCollection = [
    { id: 1, name: "Brown Prada Penny Loafers", price: "₦45,000", image: "/Footwears/1.jpg", size: [41, 42, 43, 44, 45] },
    { id: 2, name: "Black Penny Loafers", price: "₦38,000", image: "/Footwears/2.jpg", size: [41, 42, 43, 44, 45] },
    { id: 3, name: "Black Chelsea Boots", price: "₦58,000", image: "/Footwears/3.jpg", size: [41, 42, 43, 44, 45] },
    { id: 4, name: "Brown Chelsea Boots", price: "₦58,000", image: "/Footwears/4.jpg", size: [41, 42, 43, 44, 45] },
    { id: 5, name: "White Airforce 1", price: "₦70,000", image: "/Footwears/5.jpg", size: [41, 42, 43, 44, 45] },
    { id: 6, name: "Black Vans Old Skool", price: "₦55,000", image: "/Footwears/6.jpg", size: [41, 42, 43, 44, 45] },
    { id: 7, name: "Blue Suede Adidas Samba", price: "₦70,000", image: "/Footwears/7.jpg", size: [41, 42, 43, 44, 45] },
    { id: 8, name: "White New Balance 530", price: "₦60,000", image: "/Footwears/8.jpg", size: [41, 42, 43, 44, 45] },
    { id: 9, name: "Biege/Brown Adidas Originals Forums Low", price: "₦70,000", image: "/Footwears/9.jpg", size: [41, 42, 43, 44, 45] },
    { id: 10, name: "White/Black Bape Sta" , price: "₦100,000", image: "/Footwears/10.jpg", size: [41, 42, 43, 44, 45] },
    { id: 11, name: "Nike Air Jordan 1 Black/White & Green", price: "₦60,000", image: "/Footwears/11.jpg", size: [41, 42, 43, 44, 45] },
    { id: 12, name: "All-Star Converse High", price: "₦60,000", image: "/Footwears/12.jpg", size: [41, 42, 43, 44, 45] },
    { id: 13, name: "Brown Oxfords Brouge", price: "₦55,000", image: "/Footwears/13.jpg", size: [41, 42, 43, 44, 45] },
    { id: 14, name: "Black Monkstrap Shoe", price: "₦55,000", image: "/Footwears/14.jpg", size: [41, 42, 43, 44, 45] },
    { id: 15, name: "Biege Vans Cruze", price: "₦60,000", image: "/Footwears/15.jpg", size: [41, 42, 43, 44, 45] },
    { id: 16, name: "White Nike Airmax '00", price: "₦67,000", image: "/Footwears/16.jpg", size: [41, 42, 43, 44, 45] },
    { id: 17, name: "Black Nike Airmax '00", price: "₦67,000", image: "/Footwears/17.jpg", size: [41, 42, 43, 44, 45] },
    { id: 18, name: "Black Crocs Clogs", price: "₦38,000", image: "/Footwears/18.jpg", size: [41, 42, 43, 44, 45] },
    { id: 19, name: "Black Nike Victori Slides", price: "₦38,000", image: "/Footwears/19.jpg", size: [41, 42, 43, 44, 45] },
    { id: 20, name: "Black Adidas Adilette Slides", price: "₦38,000", image: "/Footwears/20.jpg", size: [41, 42, 43, 44, 45] }
]

export default function Footwears() {
    return (
        <article className="mx-auto px-4 py-6 bg-zinc-200">
            <h1 className="text-4xl font-bold text-center mb-4">OUR FOOTWEARS COLLECTION</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {footwearsCollection.map((footwear) => (
                    <ProductCard key={footwear.id} product={footwear} />
                ))}
            </div>
        </article>
    )
}
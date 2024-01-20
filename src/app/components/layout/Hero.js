import Right from "../icons/Right";
import Image from "next/image";

export default function Hero(){
    return (
        <section className="grid grid-cols-2">
        <div className="py-12">
            <h1 className="text-4xl font-semibold"> Everything is better with Burger</h1>
            <p className="my-4 text-gray-500">Burger is the missing piece that makes
                everyday complete, a simple yet delicious joy in life
            </p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase flex items-center
                 gap-2 text-white px-4 py-2 rounded-full font-semibold"> 
                Order Now
                <Right />
                </button>
                <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                     Learn More
                    <Right />
                </button>
            </div>
            </div>

            <div className= "relative">
            <Image src={'/burger.jpg'} layout={'fill'} 
            objectFit={'contain'} alt={'Hamburger'} />
        </div>
        </section>
    )
}
import Image from "next/image"

export default function MenuItem() {
    return(
        <div className="bg-gray-200 p-4
        rounded-lg text-center hover:bg-white hover:shadow-md 
        hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/burger.png" className="max-h-auto 
                max-h-24 block mx-auto " alt="burger"/>
            </div>
            <h4 className="font-semibold text-xl my-3">
                Deluxe Burger 
            </h4>
            <p className="text-gray-500 text-sm">
                Delicious Deluxe burger ready to be devoured,
                full of nutrients
            </p>
            <button className="mt-4 bg-primary
             text-white rounded-full px-8 py-2">
                Add to Cart $15 
            </button>
        </div>
    )
}
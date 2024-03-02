import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeaders from "./SectionHeaders"


export default function HomeMenu() {
 return (
    <section className="">
      <div className="absolute left-0 right-0 w-full
      justify-start">
        <div className="h-48 w-48 absolute -left-20 -top-20 -z-10">
            <Image src={'/salad1.png'} layout={'fill'}
            objectFit={'contain'} alt={'salad'} />
        </div>
        <div className="h-48 w-48 absolute -top-24 -right-20 -z-10">
            <Image src={'/salad2.png'} layout={'fill'}
            objectFit={'contain'} alt={'salad'} />
            </div>
        </div>
        <div className="text-center mb-4">
            <SectionHeaders 
                subHeader={'check out'} 
                mainHeader={'Menu'}/>
        </div>
        <div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    </section>
 )
}
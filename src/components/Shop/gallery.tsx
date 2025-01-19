import Image from "next/image";
import image1 from "@/public/images/gallery1.png"
import image2 from "@/public/images/gallery2.png"
import image3 from "@/public/images/gallery3.png"
import image4 from "@/public/images/gallery4 (2).png"
import image5 from "@/public/images/gallery5.png"

export default function GridGallery() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2">
          <Image
            src={image1}
            alt="Floral Dress"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src={image2}
            alt="Eco Aware Coat"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src={image4}
            alt="Denim Jacket"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src={image3}
            alt="Casual Hoodie"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Image
            src={image5}
            alt="Patterned Denim"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  
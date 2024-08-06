import Image from "next/image";
import text_one from "@/public/texting/screen-1.png";
import text_two from "@/public/texting/screen-2.png";
import text_three from "@/public/texting/screen-3.png";
import text_four from "@/public/texting/screen-4.png";


export default function ImageGrid() {
  
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-2">
      <div className="overflow-hidden space-y-4">
          <Image
            src={text_one}
            alt="Image 1"
            // layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md border"
          />
          <Image
            src={text_two}
            alt="Image 1"
            // layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md border"
          />
        </div>
        <div className="overflow-hidden mt-24 space-y-4">
          <Image
            src={text_three}
            alt="Image 1"
            // layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md border"
          />
          <Image
            src={text_four}
            alt="Image 1"
            // layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md border"
          />
        </div>

        {/* <div className="overflow-hidden mt-9 space-y-4">
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            // layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
          <Image
            src="https://via.placeholder.com/600x1000"
            alt="Image 1"
            // layout="responsive"
            width={300}
            height={600}
            className="w-full rounded shadow-md"
          />
        </div> */}
      </div>
    </div>
  );
}

import Image from 'next/image';
import text_one from "@/public/texting/texting-1.png";
import text_two from "@/public/texting/texting-2.png";
import text_three from "@/public/texting/texting-3.png";
import text_four from "@/public/texting/texting-4.png";

export default function ImageGrid() {
  return (
    <div className="container mx-auto p-0">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="overflow-visible space-y-4 md:max-w-max max-w-xs">
          <Image
            src={text_four}
            alt="Image 1"
            width={300}
            height={600}
            quality={100}
            className="w-full rounded-lg shadow-md border transform transition-transform md:duration-300 hover:scale-110"
          />
          <Image
            src={text_two}
            alt="Image 1"
            width={300}
            height={600}
            quality={100}
            className="w-full rounded-lg shadow-md border transform transition-transform duration-300 md:hover:scale-110"
          />
        </div>
        <div className="overflow-visible space-y-4 md:mt-14 md:max-w-max max-w-xs">
          <Image
            src={text_three}
            alt="Image 1"
            width={300}
            height={600}
            quality={100}
            className="w-full rounded-lg shadow-md border transform transition-transform duration-300 md:hover:scale-110"
          />
          <Image
            src={text_one}
            alt="Image 1"
            width={300}
            height={600}
            quality={100}
            className="w-full rounded-lg shadow-md border transform transition-transform duration-300 md:hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
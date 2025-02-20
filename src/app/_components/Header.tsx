import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="bg-[#18181B] w-full h-[68px]"></div>
      <Image
        width={1000}
        height={1000}
        alt=""
        src="https://res.cloudinary.com/dpy6izfnd/image/upload/v1740020607/ze5mfkqwr7dwsogiyaky.png"
        className="w-full"
      />
    </div>
  );
}

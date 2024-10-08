import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="item-center hidden lg:flex ">
        <Image src="/logo.png" alt="Logo" height={28} width={28} />
        <p className="font-semibold text-white text-2xl ml-2.5">WealthPal</p>
      </div>
    </Link>
  );
};

import { Image } from "@/components/ui/image";
import cn from "classnames";
import Link from "@/components/ui/link";
import logo from "../../../public/img/logo.png";

const Logo = ({ className }) => {
  return (
    <Link href="/" className={cn("inline-flex", className)}>
      <span className={`relative h-10 w-32 overflow-hidden md:w-40 lg:h-18`}>
        <Image
          src={logo}
          alt={""}
          fill
          sizes="(max-width: 768px) 100vw"
          loading="eager"
          className="object-contain"
        />
      </span>
    </Link>
  );
};

export default Logo;

import { Technology } from "../Technologies";
import Image from "next/image";

type Props = {
  technology: Technology;
};

const Logo = ({ technology }: Props) => (
  <div className="">
    <Image
      src={`/images/logos/${technology}.png`}
      alt={technology + " logo"}
      width={64}
      height={64}
    />
  </div>
);

export default Logo;

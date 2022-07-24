import Link from "next/link";
import { CloseMenu } from "../..";

type Props = {
  url: string;
  children: React.ReactNode;
  onClick?: CloseMenu;
};

const Item = ({ url, children, onClick }: Props) => (
  <li onClick={onClick}>
    <Link href={url}>{children}</Link>
  </li>
);

export default Item;

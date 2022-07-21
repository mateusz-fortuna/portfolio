import Link from "next/link";

type Props = {
  url: string;
  children: React.ReactNode;
};

const Item = ({ url, children }: Props) => (
  <li>
    <Link href={url}>{children}</Link>
  </li>
);

export default Item;

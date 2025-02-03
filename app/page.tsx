import Link from "next/link";
import { Button, H1 } from "@/components/Button";

export default function Page() {
  return (
    <div>
      <H1 />
      <Button color="blue" text="home page" />
      <Link href="/about">About</Link>
    </div>
  );
}

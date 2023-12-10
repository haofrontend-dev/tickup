import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      Hello
      <Button size="sm" variant="outline">
        This is Button
      </Button>
    </main>
  );
}

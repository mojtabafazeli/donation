import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 grow justify-center align-center">
      <Image
        className="mx-auto"
        src="/diyar.png"
        width={200}
        height={200}
        alt="دیار"
      />
      <Link className="flex justify-center align-center " href="home">
        <Image
          className="mx-auto border-b-2 border-black p-1"
          src="/yari.webp"
          width={100}
          height={100}
          alt="یاری کنید"
        />
      </Link>
    </div>
  );
}

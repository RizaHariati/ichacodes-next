import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header id="header" className="w-full h-screen">
        <div className="h-[85%] w-full max-w-6xl bg-fillLitSolid mx-auto rounded-b-lg shadow-sm relative overflow-hidden">
          <div className="h-[85%] w-auto absolute bottom-0 left-0 rounded-tr-lg overflow-hidden shadow-sm shadow-shadow">
            <Image
              priority
              height={900}
              width={300}
              src="/images/profile_pic.jpg"
              alt="main image"
              className=" object-center object-cover w-60 h-full"
            />
          </div>
        </div>
      </header>
      <section></section>
    </main>
  );
}

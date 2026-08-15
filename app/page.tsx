import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        id="#"
        className="mt-12 py-24 w-full bg-linear-to-b from-black to-neutral-800"
      >
        <div className="flex md:flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-8">
          <div className="">
            <h1 className="text-6xl font-bold uppercase max-w-md">
              The man who <br /> changed how we <br /> understand the <br />{" "}
              universe
            </h1>
            {/* <p className="mt-4 font-semibold text-white/60 text-xl">1643 — 1727</p> */}
            <button className="mt-6 p-4 border transition-colors rounded-sm hover:bg-white hover:text-black flex items-center gap-2 text-lg">
              Explore his journey <ArrowDown />
            </button>
          </div>
          <div className="flex-1 items-center justify-center flex relative">
            <Image
              src={"/isaac-newton.png"}
              alt="Isaac Newton"
              width={350}
              height={350}
            />
            <Image
              className="md:hidden falling-animation absolute -top-20 right-20"
              src={"/apple.png"}
              alt="Apple"
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>

      <section
        id=""
        className="py-24 bg-black bg-linear-to-t from-black to-neutral-800"
      >
        <div className="max-w-7xl mx-auto p-8">
          <h2 className="text-4xl font-bold text-center">
            THE MAN BEHIND THE MIND.
          </h2>
          <div>
            <p className="text-center text-white/90 mt-6">
              <span className="text-xl font-bold">Sir Isaac Newton</span> was an
              English polymath who was a mathematician, physicist, astronomer,
              alchemist, theologian, author and inventor. He was a key figure in
              the Scientific Revolution and the Enlightenment that followed. His
              book Philosophiæ Naturalis Principia Mathematica (Mathematical
              Principles of Natural Philosophy), first published in 1687,
              achieved the first great unification in physics and established
              classical mechanics. Newton also made seminal contributions to
              optics, and shares credit with the German mathematician Gottfried
              Wilhelm Leibniz for formulating infinitesimal calculus, although
              he developed calculus years before Leibniz. Newton contributed to
              and refined the scientific method, and his work is considered the
              most influential in bringing forth modern science.
            </p>
          </div>
        </div>
      </section>
      <section
        id="journey"
        className="py-24 bg-black bg-linear-to-t from-neutral-800 to-black overflow-hidden"
      >
        <div className="p-8 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center">
            BEFORE THE LAWS, THERE WAS A QUESTION.
          </h2>
          <p className="text-center mt-6 text-neutral-200">
            &quot;Why does the Moon stay in the sky while an apple falls to the
            ground?&quot;
          </p>
          <div className="flex items-center justify-center mt-8">
            <Image
              className="bouncing-animation"
              src={"/moon.png"}
              alt="Image of Moon"
              width={600}
              height={600}
            />
          </div>
          {/* <div className="flex items-center justify-center"><ArrowDown className="h-10 w-10"/></div> */}
        </div>
      </section>
      <section className="py-24 bg-linear-to-b from-neutral-800 to-black">
        <div className="p-8 max-w-7xl mx-auto">
          <h2 className="font-bold text-4xl text-center">
            THE BOY FROM WOOLSTHORPE
          </h2>
          <div>
            <div className="mt-50 flex flex-col md:flex-row items-center justify-between ">
              <div className="flex-1">
                <p className="text-6xl font-bold">1643</p>
                <p className="text-lg text-white/90 mt-2">
                  Woolsthorpe, England
                </p>
                <p className="max-w-md mt-6 mb-8 md:mb-0">
                  Isaac Newton was born in a small village in Lincolnshire. His
                  childhood was far removed from the great scientific revolution
                  he would eventually help create.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={"/woolsthorpe-manor.jpg"}
                  alt="Woolsthorpe Manor"
                  height={500}
                  width={500}
                  className="rounded-sm"
                />
              </div>
            </div>
            <div className="mt-50 flex flex-col md:flex-row items-center justify-between ">
              <div className="flex-1">
                <p className="text-6xl font-bold">1661</p>
                <p className="text-lg text-white/90 mt-2">CAMBRIDGE</p>
                <p className="max-w-md mt-6 mb-8 md:mb-0">
                  Isaac Newton was born in a small village in Lincolnshire. His
                  childhood was far removed from the great scientific revolution
                  he would eventually help create.
                </p>
              </div>
              <div className="flex-1 relative">
                <Image
                  src={"/cambridge.jpg"}
                  alt="Woolsthorpe Manor"
                  height={500}
                  width={500}
                  className="rounded-sm"
                />
              </div>
            </div>

            <div className="mt-50 flex flex-col md:flex-row items-center justify-between ">
              <div className="flex-1">
                <p className="text-6xl font-bold">1665</p>
                <p className="text-lg text-white/90 mt-2">CAMBRIDGE CLOSED.</p>
                <p className="max-w-md mt-6 mb-8 md:mb-0">
                  The plague forced Newton to return home.
                </p>
              </div>
              <div className="flex-1 relative">
                {/* <div className="w-[500px] h-[330px] border rounded-sm  flex items-center justify-center blur-3xl">
                  <p className="">CLOSED</p>
                </div> */}
                <Image src={"/cambridge.jpg"} alt="Woolsthorpe Manor" height={500} width={500} className="rounded-sm"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="p-8 max-w-7xl mx-auto">
          <h1 className="text-4xl text-center font-bold">
            AND THEN, HE BEGAN <br /> TO ASK DIFFERENT QUESTIONS.
          </h1>
        </div>
      </section>

      <section className="py-24" id="discoveries">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-center">THE YEAR OF WONDERS</h2>
            <p className="text-white/90 text-center mt-6">1665–1667</p>
            <Image
              className=""
              src={"/newton-writing.png"}
              alt="Issac Newton's Handwriting"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="p-8 max-w-7xl mx-auto ">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-6xl font-bold text-center">Gravity</h2>
            <Image
              src={"/earth.png"}
              alt="Image of Earth"
              width={400}
              height={400}
              className="bouncing-animation mx-auto mt-8 mb-8"
            />
            <p className="text-lg font-medium text-white/90 text-center max-w-md mx-auto">
              What pulls an apple toward Earth might also hold the Moon in
              orbit.
            </p>
            <Link
              href={"/"}
              className="px-4 py-2.5 border rounded mt-8 inline-flex items-center gap-2 text-md"
            >
              More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold text-center">Calculas</h2>
            <Image
              src={"/calculas.svg"}
              alt="Image of Calculas"
              width={400}
              height={400}
              className="bouncing-animation mx-auto mt-8 mb-8"
            />
            <p className="text-lg font-medium text-white/90 text-center max-w-md mx-auto">
              Newton developed calculus to describe change and motion
              mathematically—giving him a powerful new way to understand the
              physical world.
            </p>
            <Link
              href={"/"}
              className="px-4 py-2.5 border rounded mt-8 inline-flex items-center gap-2 text-md"
            >
              More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold text-center">Optics</h2>
            <Image
              src={"/optics.webp"}
              alt="Image of Optics"
              width={400}
              height={400}
              className="bouncing-animation mx-auto mt-8 mb-8"
            />
            <p className="text-lg font-medium text-white/90 text-center max-w-md mx-auto">
              Newton developed calculus to describe change and motion
              mathematically—giving him a powerful new way to understand the
              physical world.
            </p>
            <Link
              href={"/"}
              className="px-4 py-2.5 border rounded mt-8 inline-flex items-center gap-2 text-md"
            >
              More <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-b from-black to-neutral-950 border-t border-neutral-800">
        <div className="py-20 px-5 md:px-0 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row  md:items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold uppercase">Isaac Newton</h2>
              <p className="mt-2 text-white/60">
                The man who changed how we understand the universe.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-white/60 tracking-[3px]">Built by</p>
              <p className="mt-2 font-bold">Murtuza Shaikh</p>
              <p className="mt-2 font-bold text-white/60">
                X <a target="_blank" href="https://x.com/MurtuzaSh37756">Murtuza</a>
              </p>
            </div>
          </div>
          <div className="mt-20 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-sm text-white/40">© 2026 Murtuza</p>

            <Link
              href="/"
              className="group flex items-center gap-2 border border-white/20 px-4 py-2.5 rounded-sm transition-all hover:bg-white hover:text-black"
            >
              Explore the universe
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

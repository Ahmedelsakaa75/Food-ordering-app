import Hero from "@/components/layout/Hero";
import Header from "../components/layout/Header";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section>
        <div className="text-center my-16">
          <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />

          <div className="flex flex-col gap-4 max-w-2xl mx-auto text-gray-500 mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate magnam, odit quo cumque sunt accusantium aliquam.
              Exercitationem quam accusantium commodi illo impedit dolores
              voluptatum hic repudiandae, laudantium explicabo eius enim!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate magnam, odit quo cumque sunt accusantium aliquam.
              Exercitationem quam accusantium commodi illo impedit dolores
              voluptatum hic repudiandae, laudantium explicabo eius enim!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              tempora iure eius maiores eligendi ratione, doloremque culpa fuga
              non quis.
            </p>
          </div>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={'Don\'t Hesitate'} mainHeader={'Contact Us'} />
        <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+201061640401">+20 106 164 0401</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
      &copy; 2024 All Rights Reserved
      </footer>
    </>
  );
}

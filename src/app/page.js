import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <HomeMenu />
    <section className="text-center my-16">
      <SectionHeaders 
        subHeader={'Our Story'}
        mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex
        flex-col gap-4">
        <p>
        Welcome to FlavorBurst Burgers, where culinary excellence meets the 
        joy of indulgence! At our burger haven, we are passionate about 
        crafting an extraordinary dining experience for burger enthusiasts. 
        Established with a commitment to quality and innovation, 
        FlavorBurst Burgers is not just a restaurant; 
        it is a celebration of flavors that dance on your taste buds.
        </p>
        <p>
        Our journey began with a simple belief – 
        that a burger is more than just a meal; 
        it is a canvas for creativity. Each burger on our menu is a carefully 
        curated masterpiece, bringing together the finest ingredients and 
        culinary expertise to deliver a symphony of tastes.
         From the Signature Supreme Burger, an ode to classic indulgence,
         to the Spicy Jalapeño Fiesta Burger, an adventurous exploration of 
         heat and spice, we take pride in offering a diverse menu that caters 
         to every palate.
        </p>
        <p>
        Beyond the delectable bites, FlavorBurst Burgers is also about 
        fostering a sense of community. 
        Our warm and inviting atmosphere welcomes friends and 
        families to share memorable moments over delicious meals. 
        We invite you to join us on this gastronomic journey, 
        where passion for food meets exceptional service, 
        and every bite tells a story. FlavorBurst Burgers – 
        where burgers are not just a dish, but an experience worth savoring.
        </p>
        </div>
    </section>
    <section className="text-center my-8">
    <SectionHeaders 
      subHeader={"Don't Hesitate"} 
      mainHeader={"Contact us"} 
      />
      <div className="mt-8">
        <a className="text-4xl underline text-gray-600" href="tel:+123123123">
          <h1>+12 312 3123</h1>
        </a>
      </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
          &copy; 2024 All rights reserved
      </footer>
    </>
  );
}

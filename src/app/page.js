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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
         nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
         nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

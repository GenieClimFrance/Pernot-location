import Footer from "./Footer";
import SliderFooter from "./SliderFooter";

const SimpleFooter = () => {
  return (
    <footer>
      <section className="pt-0">
        <SliderFooter />
      </section>
      <Footer />
      <div className="h-10 bg-primary" />
    </footer>
  );
};

export default SimpleFooter;

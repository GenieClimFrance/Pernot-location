import Footer from "./Footer";
import SliderFooter from "./SliderFooter";

interface FooterSectionProps {
  forwardedRef: (el: HTMLElement | null) => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ forwardedRef }) => {
  return (
    <section
      ref={forwardedRef}
      className="snap-section overflow-y-auto h-screen"
    >
      <div className="pt-20 md:pt-10 bg-secondary">
        <SliderFooter />
      </div>
      <Footer />
    </section>
  );
};

export default FooterSection;

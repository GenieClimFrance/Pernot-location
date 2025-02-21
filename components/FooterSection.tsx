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
      <div className="pt-10">
        <SliderFooter />
      </div>
      <Footer />
      <div className="h-10 bg-primary" />
    </section>
  );
};

export default FooterSection;

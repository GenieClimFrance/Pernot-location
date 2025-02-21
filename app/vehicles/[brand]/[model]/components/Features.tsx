import { FaPlus } from "react-icons/fa";

function Features({ features, model }: { features?: string[]; model: string }) {
  if (!features || features.length === 0) return null;

  return (
    <section className="mt-12 lg:mt-0">
      <h3 className="text-2xl text-secondary font-bold mb-4 uppercase font-roboto">
        Caractéristiques du{" "}
        <span className="text-primary text-nowrap">{model}</span>
      </h3>
      <ul className="flex flex-col gap-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex flex-row text-lg items-center gap-4 py-6 px-4 rounded-md shadow-lg bg-white"
          >
            <FaPlus className="w-6 h-6 text-primary" />
            <p className="text-secondary">{feature}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;

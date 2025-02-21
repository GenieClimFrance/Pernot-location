import Image from "next/image";

interface Equipment {
  id: number;
  name: string;
  icon: string;
}

function Equipments({ equipments }: { equipments?: Equipment[] }) {
  if (!equipments || equipments.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl text-secondary font-bold mb-8 uppercase font-roboto">
        Équipements Clés
      </h2>
      <ul className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        {equipments.map((equipment) => (
          <li
            key={equipment.id}
            className="flex flex-row text-lg items-center gap-8 lg:gap-4"
          >
            <div className="flex items-center justify-center w-12 h-12 p-2 bg-primary rounded-full">
              <Image
                alt={equipment.name}
                className="w-6 h-6"
                height={24}
                src={equipment.icon}
                width={24}
              />
            </div>
            <p className="text-secondary text-xl">{equipment.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Equipments;

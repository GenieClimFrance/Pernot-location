export type Vehicles = {
  id: number;
  brand: string;
  model: string;
  motor?: string;
  type: "car" | "motorcycle";
  carType?: "SUV" | "Berline" | "Cabriolet" | "Coupé" | "Break" | "Moto";
  thumbnail: string;
  description: string[] | string;
  price: {
    day: number;
    weekend: number;
    week: number;
  };
  priceWithDriver: {
    day: number;
    weekend: number;
    week: number;
  };
  images?: string[];
  passengers: number;
  fuelType: "Diesel" | "Electric" | "Hybrid" | "Essence";
  transmission: "Automatique" | "Manuelle" | "Desmodromique";
  isNew: boolean;
  features?: string[];
  equipments?: Equipments[];
};

export type Equipments = {
  id: number;
  name: string;
  icon: string;
};

export const equipments: Equipments[] = [
  {
    id: 1,
    name: "Apple CarPlay",
    icon: "/icon/smartphone.svg",
  },
  {
    id: 2,
    name: "Toit ouvrant",
    icon: "/icon/sunroof.svg",
  },
  {
    id: 3,
    name: 'Jantes 22" Style',
    icon: "/icon/rims.svg",
  },
  {
    id: 4,
    name: "Bluetooth",
    icon: "/icon/bluetooth.svg",
  },
  {
    id: 5,
    name: "Volant Sport Cuir",
    icon: "/icon/volant.svg",
  },
  {
    id: 6,
    name: "Park Assist",
    icon: "/icon/parking.svg",
  },
  {
    id: 7,
    name: "Borne Wi-Fi",
    icon: "/icon/wifi.svg",
  },
  {
    id: 8,
    name: "Caméra de recul",
    icon: "/icon/recul.svg",
  },
  {
    id: 9,
    name: "Chassis sport",
    icon: "/icon/chassis.svg",
  },
  {
    id: 10,
    name: "Sellerie cuir Alcantara",
    icon: "/icon/cuir.svg",
  },
  {
    id: 11,
    name: "Suspension sport",
    icon: "/icon/suspension.svg",
  },
  {
    id: 12,
    name: "Caméra 360°",
    icon: "/icon/recul.svg",
  },
  {
    id: 7,
    name: "Radar de recul",
    icon: "/icon/wifi.svg",
  },
  {
    id: 14,
    name: "Sièges chauffants",
    icon: "/icon/cuir.svg",
  },
  {
    id: 15,
    name: "Sièges AV sport",
    icon: "/icon/cuir.svg",
  },
  {
    id: 16,
    name: "Toit panoramique",
    icon: "/icon/sunroof.svg",
  },
  {
    id: 17,
    name: "Quick shifter",
    icon: "/icon/shifter.svg",
  },
  {
    id: 18,
    name: "Launch control",
    icon: "/icon/launch.svg",
  },
  {
    id: 19,
    name: "Poignées chauffantes",
    icon: "/icon/poignees.svg",
  },
];

export const vehicles: Vehicles[] = [
  {
    id: 1,
    brand: "Lamborghini",
    model: "Urus",
    type: "car",
    thumbnail: "/cars/thumbnails/lamborghini-urus.png",
    description: [
      "Découvrez un SUV d'exception qui repousse les limites de la performance et du raffinement. Premier SUV de la marque au Taureau, l'Urus incarne l'ADN Lamborghini avec son design agressif, son moteur surpuissant et son confort inégalé.",
      "Une véritable fusion entre une supercar et un SUV confort, conçu pour offrir des sensations fortes à chaque instant.",
    ],
    price: {
      day: 2200,
      weekend: 4100,
      week: 7200,
    },
    priceWithDriver: {
      day: 1800,
      weekend: 3700,
      week: 6800,
    },
    images: [
      "/cars/lamborghini-urus/1.webp",
      "/cars/lamborghini-urus/2.webp",
      "/cars/lamborghini-urus/3.webp",
      "/cars/lamborghini-urus/4.webp",
    ],
    passengers: 5,
    fuelType: "Diesel",
    transmission: "Automatique",
    isNew: true,
    carType: "SUV",
    features: [
      "Moteur d'exception",
      "Design audacieux",
      "Technologie de pointe",
      "Intérieur luxueux et sportif",
    ],
    equipments: (
      [
        "Radar de recul",
        "Caméra 360°",
        "Suspension sport",
        "Toit ouvrant",
        "Bluetooth",
        "Sièges chauffants",
      ] as const
    ).map((name) => {
      const found = equipments.find((eq) => eq.name === name);

      if (!found) {
        throw new Error(`L'équipement ${name} n'a pas été trouvé.`);
      }

      return found;
    }),
  },
  {
    id: 2,
    brand: "Land rover",
    model: "Range Rover Sport",
    type: "car",
    motor: "D250 MHEV Diesel",
    thumbnail: "/cars/thumbnails/range-rover-sport.png",
    description:
      "Découvrez le Range Rover Sport, le SUV qui incarne à la fois l'élégance britannique et la puissance tout-terrain. Ce modèle emblématique est conçu pour offrir une expérience de conduite raffinée, que vous soyez en ville ou sur des routes plus exigeantes. Avec son design audacieux et ses lignes racées, le Range Rover Sport attire tous les regards, tandis que ses performances impressionnantes et son confort de conduite en font le choix idéal pour des trajets inoubliables.",
    price: {
      day: 1000,
      weekend: 1800,
      week: 3700,
    },
    priceWithDriver: {
      day: 800,
      weekend: 1500,
      week: 3300,
    },
    images: [
      "/cars/land-rover-range-rover/1.webp",
      "/cars/land-rover-range-rover/2.webp",
      "/cars/land-rover-range-rover/3.webp",
      "/cars/land-rover-range-rover/4.webp",
    ],
    passengers: 5,
    fuelType: "Diesel",
    transmission: "Automatique",
    isNew: true,
    carType: "SUV",
    features: [
      "Moteur puissant et performant",
      "Technologie de pointe",
      "Confort",
      "Capacités tout-terrain",
    ],
    equipments: (
      [
        "Apple CarPlay",
        "Toit ouvrant",
        'Jantes 22" Style',
        "Volant Sport Cuir",
        "Bluetooth",
        "Park Assist",
      ] as const
    ).map((name) => {
      const found = equipments.find((eq) => eq.name === name);

      if (!found) {
        throw new Error(`L'équipement ${name} n'a pas été trouvé.`);
      }

      return found;
    }),
  },
  {
    id: 3,
    brand: "Audi",
    model: "RS7",
    type: "car",
    motor: "4.0 TFSI Quattro TIPTRONIC",
    thumbnail: "/cars/thumbnails/audi-rs7.png",
    description: [
      "Plongez dans l'univers de la haute performance et du raffinement avec l'Audi RS7 4.0 TFSI Quattro Tiptronic. Cette berline sportive, au design élégant et agressif, allie puissance brute et technologies de pointe pour offrir une expérience de conduite exceptionnelle.",
      "Chaque détail de l'Audi RS7 reflète le savoir-faire inégalé d'Audi, faisant de ce modèle un chef-d'œuvre d'ingénierie et de luxe.",
    ],
    price: {
      day: 1200,
      weekend: 2000,
      week: 3900,
    },
    priceWithDriver: {
      day: 1000,
      weekend: 1700,
      week: 3500,
    },
    images: [
      "/cars/audi-rs7/1.webp",
      "/cars/audi-rs7/2.webp",
      "/cars/audi-rs7/3.webp",
      "/cars/audi-rs7/4.webp",
    ],
    passengers: 5,
    fuelType: "Essence",
    transmission: "Manuelle",
    isNew: true,
    carType: "Berline",
    features: [
      "Motorisation surpuissante",
      "Allure sportive",
      "Technologie embarquée avancée",
      "Luxe intérieur sans compromis",
    ],
    equipments: (
      [
        "Borne Wi-Fi",
        "Caméra de recul",
        'Jantes 22" Style',
        "Chassis sport",
        "Bluetooth",
        "Sellerie cuir Alcantara",
      ] as const
    ).map((name) => {
      const found = equipments.find((eq) => eq.name === name);

      if (!found) {
        throw new Error(`L'équipement ${name} n'a pas été trouvé.`);
      }

      return found;
    }),
  },
  {
    id: 4,
    brand: "Porsche",
    model: "E-Cayenne",
    type: "car",
    thumbnail: "/cars/thumbnails/porsche-e-cayenne.png",
    description: [
      "Avec le Porsche E-Cayenne Hybride Coupé, redécouvrez le plaisir de conduire un SUV de prestige alliant puissance, efficacité et raffinement. Son design sculpté, sa motorisation hybride performante et son intérieur luxueux en font un choix idéal.",
      "Il s'adapte à toutes les situations : silencieux et efficient en ville, puissant et réactif sur autoroute, il sait se montrer aussi confortable que redoutable en termes de performances.",
    ],
    price: {
      day: 900,
      weekend: 1700,
      week: 3600,
    },
    priceWithDriver: {
      day: 700,
      weekend: 1400,
      week: 3200,
    },
    images: [
      "/cars/porsche-e-cayenne/1.webp",
      "/cars/porsche-e-cayenne/2.webp",
      "/cars/porsche-e-cayenne/3.webp",
      "/cars/porsche-e-cayenne/4.webp",
    ],
    passengers: 5,
    fuelType: "Essence",
    transmission: "Automatique",
    isNew: true,
    carType: "SUV",
    features: [
      "Moteur hybride haute performance",
      "Conduite polyvalente",
      "Habitacle luxueux et connecté",
      "Dynamisme et agilité",
    ],
    equipments: (
      [
        "Borne Wi-Fi",
        "Caméra de recul",
        "Toit panoramique",
        "Bluetooth",
        "Sièges AV sport",
      ] as const
    ).map((name) => {
      const found = equipments.find((eq) => eq.name === name);

      if (!found) {
        throw new Error(`L'équipement ${name} n'a pas été trouvé.`);
      }

      return found;
    }),
  },
  // {
  //   id: 5,
  //   brand: "Ducati",
  //   model: "Panigale V4 S",
  //   type: "motorcycle",
  //   thumbnail: "/motos/thumbnails/ducati-panigale-v4-s.png",
  //   description: [
  //     "C'est une moto d'exception conçue pour offrir des performances époustouflantes et un design racé à couper le souffle. Véritable bijou d'ingénierie, cette Ducati est la fusion parfaite entre puissance, précision et élégance. ",
  //     "Que ce soit sur circuit ou sur route, la Panigale V4 S garantit une expérience de pilotage unique, mêlant adrénaline et maîtrise absolue.",
  //   ],
  //   price: {
  //     day: 1000,
  //     weekend: 1200,
  //     week: 1500,
  //   },
  //   priceWithDriver: {
  //     day: 1200,
  //     weekend: 1400,
  //     week: 1600,
  //   },
  //   images: [
  //     "/motos/ducati-panigale-v4-s/1.webp",
  //     "/motos/ducati-panigale-v4-s/2.webp",
  //     "/motos/ducati-panigale-v4-s/3.webp",
  //     "/motos/ducati-panigale-v4-s/4.webp",
  //   ],
  //   passengers: 2,
  //   fuelType: "Essence",
  //   transmission: "Desmodromique",
  //   isNew: true,
  //   carType: "Moto",
  //   features: [
  //     "Chassis ultra léger",
  //     "Moteur V4 surpuissant",
  //     "Aérodynamisme optimisé",
  //     "Design Ducati iconique",
  //   ],
  //   equipments: (
  //     ["Quick shifter", "Launch control", "Poignées chauffantes"] as const
  //   ).map((name) => {
  //     const found = equipments.find((eq) => eq.name === name);

  //     if (!found) {
  //       throw new Error(`L'équipement ${name} n'a pas été trouvé.`);
  //     }

  //     return found;
  //   }),
  // },
];

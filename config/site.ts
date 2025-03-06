export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PL location",
  description: "PL location",
  navItems: [
    {
      label: "Accueil",
      href: "/",
      key: "home",
    },
    {
      label: "Nos voitures",
      href: "/vehicle?type=car",
      key: "cars",
    },
    {
      label: "Nos motos",
      href: "/vehicle?type=motorcycle",
      key: "motorcycles",
    },
    {
      label: "Contact",
      href: "/#contact",
      key: "contact",
    },
  ],
  links: {
    instagram: {
      url: "https://www.instagram.com/pernotlocationvoiture_bordeaux/",
      icon: "IoLogoInstagram",
    },
    facebook: {
      url: "https://www.facebook.com/profile.php?id=100091111111111",
      icon: "FaFacebookF",
    },
    linkedin: {
      url: "https://www.linkedin.com/company/pernotlocation/",
      icon: "FaLinkedinIn",
    },
    youtube: {
      url: "https://www.youtube.com/@pernotlocation",
      icon: "FaYoutube",
    },
  },
};

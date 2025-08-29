// Centralized product data for search functionality
export interface Product {
  id: string;
  title: string;
  image: string;
  link: string;
  category: string;
  buttonColor: string;
}

export const allProducts: Product[] = [
  // Tech Products
  {
    id: "tech-1",
    title: "GameSir G7 SE Wired Controller",
    image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-2", 
    title: "Apple Watch Series 10",
    image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-3",
    title: "HP Stream 14 Laptop",
    image: "/lovable-uploads/d9a41e8b-bdcd-4b51-86a1-182c966f3cdb.png", 
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-4",
    title: "Hot and Cold Lifting Face Massager",
    image: "/lovable-uploads/c7f054b9-fb50-4d67-9a13-52d91f49a4b0.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-5",
    title: "Women Period Pain Relief Belt",
    image: "/lovable-uploads/e4c4a301-f425-4755-9c2f-d0779fb16c56.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-6",
    title: "Smart Speaker Stereo Surround",
    image: "/lovable-uploads/3ea2eed9-aaf6-491a-82fb-b54368d28156.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-7",
    title: "Fujifilm INSTAX Mini 11 Camera",
    image: "/lovable-uploads/0e9249d1-e033-4533-97d3-af0fba179649.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-8",
    title: "3-in-1 Magnetic Wireless Charger",
    image: "/lovable-uploads/3db2c2d2-bf1f-4ca5-8a33-92ace6e9a69c.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-9",
    title: "Wireless Kitty Headphones",
    image: "/lovable-uploads/fd58b0fe-b9ec-40c4-bef7-87e5ea9cc3e7.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-10",
    title: "NEW OPPO Pad 2 - 8GB/256GB",
    image: "/lovable-uploads/522481eb-a3c8-4d04-80de-abcbd7fa142a.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-11",
    title: "POCO X7 Pro 5G | Dimensity 8400-Ultra",
    image: "/lovable-uploads/cf03d7e0-5d2d-49e5-bbc3-05c57f1e6555.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-12",
    title: "Speaker Bluetooth Karaoke 2 Mic + Super Bass",
    image: "/lovable-uploads/0bb117f4-76d8-49ef-9f74-88b88a184415.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-13",
    title: "Meta Quest 3S 128GB - Get Batman: Arkham Shadow",
    image: "/lovable-uploads/43587acb-999b-44bf-84a3-90f7192a6738.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-14",
    title: "PlayStation VR 2 - Horizon Call of The Mountain Bundle",
    image: "/lovable-uploads/a7112867-3e6a-4f72-8d32-de6915794e7a.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-15",
    title: "Turtle Beach Recon 50 Wired Gaming Headset",
    image: "/lovable-uploads/a48bb481-207b-44d1-9a1e-11317c1b8aa8.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-16",
    title: "Hisense Laser Mini Projector C2, 65-300\"",
    image: "/lovable-uploads/9b810d80-facc-426d-ac2f-64e2a75902c5.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-17",
    title: "Xencelabs Pen Display 16 Bundle with Quick Keys",
    image: "/lovable-uploads/586a67db-eb4e-415c-ade6-928c3d370c5a.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-18",
    title: "ProtoArc Wireless Trackball Mouse, EM01 NL",
    image: "/lovable-uploads/65851a7d-09f3-4f9c-bd56-1eb2043ad75a.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-19",
    title: "Robot Pet Dog ChatGPT-4o Smart AI",
    image: "/lovable-uploads/1b4d3f3a-d9a0-46b5-86d0-2d33a2081cab.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },
  {
    id: "tech-20",
    title: "Teamgee 15.6\" Laptop Screen Extender",
    image: "/lovable-uploads/7283581c-a75c-4dcf-8c9b-345fc75077c6.png",
    link: "#",
    category: "tech",
    buttonColor: "#30bdbe"
  },

  // Sports Products (sample - you can extend this)
  {
    id: "sports-1",
    title: "Sport Product 1",
    image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
    link: "#",
    category: "sports",
    buttonColor: "#ed5603"
  },
  {
    id: "sports-2",
    title: "Sport Product 2",
    image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
    link: "#",
    category: "sports",
    buttonColor: "#ed5603"
  },

  // Home Products (sample)
  {
    id: "home-1",
    title: "Home Product 1",
    image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
    link: "#",
    category: "home",
    buttonColor: "#bf0100"
  },
  {
    id: "home-2",
    title: "Home Product 2",
    image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
    link: "#",
    category: "home",
    buttonColor: "#bf0100"
  },

  // Kids Products (sample)
  {
    id: "kids-1",
    title: "Kids Toy 1",
    image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
    link: "#",
    category: "kids",
    buttonColor: "#8254d0"
  },
  {
    id: "kids-2",
    title: "Kids Toy 2",
    image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
    link: "#",
    category: "kids",
    buttonColor: "#8254d0"
  },

  // Health Products (sample)
  {
    id: "health-1",
    title: "Health Product 1",
    image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
    link: "#",
    category: "health",
    buttonColor: "#d8ad00"
  },
  {
    id: "health-2",
    title: "Health Product 2",
    image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
    link: "#",
    category: "health",
    buttonColor: "#d8ad00"
  },

  // Incredibles Products (sample)
  {
    id: "incredibles-1",
    title: "Incredible Product 1",
    image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
    link: "#",
    category: "incredibles",
    buttonColor: "#5cc801"
  },
  {
    id: "incredibles-2",
    title: "Incredible Product 2",
    image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
    link: "#",
    category: "incredibles",
    buttonColor: "#5cc801"
  },
];

// Search function
export const searchProducts = (query: string): Product[] => {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return [];
  
  return allProducts.filter(product => 
    product.title.toLowerCase().includes(normalizedQuery) ||
    product.category.toLowerCase().includes(normalizedQuery)
  );
};
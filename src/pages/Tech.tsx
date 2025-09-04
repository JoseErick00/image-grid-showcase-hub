import CategoryGrid from "@/components/CategoryGrid";

const Tech = () => {
  // Tech products with uploaded images
  const techProducts = [
    {
      id: "tech-1",
      title: "GameSir G7 SE Wired Controller",
      image: "/lovable-uploads/ba07690d-d721-48bd-8feb-dc524c00fa06.png",
      link: "#",
    },
    {
      id: "tech-2", 
      title: "Apple Watch Series 10",
      image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
      link: "#",
    },
    {
      id: "tech-3",
      title: "HP Stream 14 Laptop",
      image: "/lovable-uploads/d9a41e8b-bdcd-4b51-86a1-182c966f3cdb.png", 
      link: "#",
    },
    {
      id: "tech-4",
      title: "Hot and Cold Lifting Face Massager",
      image: "/lovable-uploads/c7f054b9-fb50-4d67-9a13-52d91f49a4b0.png",
      link: "#",
    },
    {
      id: "tech-5",
      title: "Women Period Pain Relief Belt",
      image: "/lovable-uploads/e4c4a301-f425-4755-9c2f-d0779fb16c56.png",
      link: "#",
    },
    {
      id: "tech-6",
      title: "Smart Speaker Stereo Surround",
      image: "/lovable-uploads/3ea2eed9-aaf6-491a-82fb-b54368d28156.png",
      link: "#",
    },
    {
      id: "tech-7",
      title: "Fujifilm INSTAX Mini 11 Camera",
      image: "/lovable-uploads/0e9249d1-e033-4533-97d3-af0fba179649.png",
      link: "#",
    },
    {
      id: "tech-8",
      title: "3-in-1 Magnetic Wireless Charger",
      image: "/lovable-uploads/3db2c2d2-bf1f-4ca5-8a33-92ace6e9a69c.png",
      link: "#",
    },
    {
      id: "tech-9",
      title: "Wireless Kitty Headphones",
      image: "/lovable-uploads/fd58b0fe-b9ec-40c4-bef7-87e5ea9cc3e7.png",
      link: "#",
    },
    {
      id: "tech-10",
      title: "NEW OPPO Pad 2 - 8GB/256GB",
      image: "/lovable-uploads/522481eb-a3c8-4d04-80de-abcbd7fa142a.png",
      link: "#",
    },
    {
      id: "tech-11",
      title: "POCO X7 Pro 5G | Dimensity 8400-Ultra",
      image: "/lovable-uploads/cf03d7e0-5d2d-49e5-bbc3-05c57f1e6555.png",
      link: "#",
    },
    {
      id: "tech-12",
      title: "Speaker Bluetooth Karaoke 2 Mic + Super Bass",
      image: "/lovable-uploads/0bb117f4-76d8-49ef-9f74-88b88a184415.png",
      link: "#",
    },
    {
      id: "tech-13",
      title: "Meta Quest 3S 128GB - Get Batman: Arkham Shadow",
      image: "/lovable-uploads/43587acb-999b-44bf-84a3-90f7192a6738.png",
      link: "#",
    },
    {
      id: "tech-14",
      title: "PlayStation VR 2 - Horizon Call of The Mountain Bundle",
      image: "/lovable-uploads/a7112867-3e6a-4f72-8d32-de6915794e7a.png",
      link: "#",
    },
    {
      id: "tech-15",
      title: "Turtle Beach Recon 50 Wired Gaming Headset",
      image: "/lovable-uploads/a48bb481-207b-44d1-9a1e-11317c1b8aa8.png",
      link: "#",
    },
    {
      id: "tech-16",
      title: "Hisense Laser Mini Projector C2, 65-300\"",
      image: "/lovable-uploads/9b810d80-facc-426d-ac2f-64e2a75902c5.png",
      link: "#",
    },
    {
      id: "tech-17",
      title: "Xencelabs Pen Display 16 Bundle with Quick Keys",
      image: "/lovable-uploads/586a67db-eb4e-415c-ade6-928c3d370c5a.png",
      link: "#",
    },
    {
      id: "tech-18",
      title: "ProtoArc Wireless Trackball Mouse, EM01 NL",
      image: "/lovable-uploads/65851a7d-09f3-4f9c-bd56-1eb2043ad75a.png",
      link: "#",
    },
    {
      id: "tech-19",
      title: "Robot Pet Dog ChatGPT-4o Smart AI",
      image: "/lovable-uploads/1b4d3f3a-d9a0-46b5-86d0-2d33a2081cab.png",
      link: "#",
    },
    {
      id: "tech-20",
      title: "Teamgee 15.6\" Laptop Screen Extender",
      image: "/lovable-uploads/7283581c-a75c-4dcf-8c9b-345fc75077c6.png",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div 
        className="w-full h-[400px] flex items-center justify-center relative"
        style={{
          backgroundColor: '#30bdbe',
        }}
      >
        <img 
          src="/lovable-uploads/76c528a6-d36e-4b7e-890e-b915f184a590.png"
          alt="Technology Banner"
          className="hidden md:block max-h-full max-w-full object-contain"
        />
        <img 
          src="/lovable-uploads/53d54fc2-cb9e-41f1-9bb1-0d9140579772.png"
          alt="bannerMobile_Tech"
          className="md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center py-12 bg-black">
        <h1 className="font-omne-medium text-4xl md:text-5xl text-white mb-4">
          Tech Selection
        </h1>
        <p className="font-omne-regular text-lg text-gray-300 max-w-2xl mx-auto px-4">
          The future is just one click away.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CategoryGrid 
          items={techProducts}
          columns={2}
          aspectRatio="portrait"
          buttonColor="#30bdbe"
        />
      </div>
    </div>
  );
};

export default Tech;
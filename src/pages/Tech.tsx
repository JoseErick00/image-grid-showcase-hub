import CategoryGrid from "@/components/CategoryGrid";

const Tech = () => {
  // Tech products with uploaded images
  const techProducts = [
    {
      id: "tech-1",
      title: "Custom Controllerzz Wireless Controller for Microsoft Xbox",
      image: "/lovable-uploads/634a8b86-78f1-4ff0-b5e7-97028a2deacf.png",
      link: "https://amzn.to/3JMNJyr",
    },
    {
      id: "tech-2", 
      title: "Apple Watch Series 10",
      image: "/lovable-uploads/83c147a8-9409-4947-b562-f8762431c5ac.png",
      link: "https://amzn.to/4g9DUXC",
    },
    {
      id: "tech-3",
      title: "HP Stream 14 Laptop",
      image: "/lovable-uploads/d9a41e8b-bdcd-4b51-86a1-182c966f3cdb.png", 
      link: "https://amzn.to/46mta4O",
    },
    {
      id: "tech-4",
      title: "Hot and Cold Lifting Face Massager",
      image: "/lovable-uploads/c7f054b9-fb50-4d67-9a13-52d91f49a4b0.png",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601394644682",
    },
    {
      id: "tech-5",
      title: "Women Period Pain Relief Belt",
      image: "/lovable-uploads/e4c4a301-f425-4755-9c2f-d0779fb16c56.png",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601220806740",
    },
    {
      id: "tech-6",
      title: "Smart Speaker Stereo Surround",
      image: "/lovable-uploads/3ea2eed9-aaf6-491a-82fb-b54368d28156.png",
      link: "https://offer.alibaba.com/cps/0f4752f4?bm=cps&src=saf&productId=1601398799470",
    },
    {
      id: "tech-7",
      title: "Fujifilm INSTAX Mini 11 Camera",
      image: "/lovable-uploads/0e9249d1-e033-4533-97d3-af0fba179649.png",
      link: "https://amzn.to/3V1gaLu",
    },
    {
      id: "tech-8",
      title: "3-in-1 Magnetic Wireless Charger",
      image: "/lovable-uploads/3db2c2d2-bf1f-4ca5-8a33-92ace6e9a69c.png",
      link: "https://amzn.to/41ZUCTB",
    },
    {
      id: "tech-9",
      title: "YOWU Cat Ear Headphones CE, Wired/Wireless Headphones",
      image: "/lovable-uploads/49247e7f-652a-4022-bee1-c766317f9969.png",
      link: "https://amzn.to/465JW74",
    },
    {
      id: "tech-10",
      title: "NEW OPPO Pad 2 - 8GB/256GB",
      image: "/lovable-uploads/522481eb-a3c8-4d04-80de-abcbd7fa142a.png",
      link: "https://amzn.to/4m6ONL7",
    },
    {
      id: "tech-11",
      title: "Xiaomi Poco X7 PRO 5G + 4G LTE (for Tmobile Mint Tello & Global)",
      image: "/lovable-uploads/474c5f55-db97-45b8-8cce-4a6468a7e13a.png",
      link: "https://amzn.to/4807AUP",
    },
    {
      id: "tech-12",
      title: "Maui Jim Men's Puu Kukui Polarized Sunglasses",
      image: "/lovable-uploads/a8bb6679-5259-4185-ae80-3f25c3721497.png",
      link: "https://amzn.to/45ZzvmN",
    },
    {
      id: "tech-13",
      title: "Meta Quest 3S 128GB - Get Batman: Arkham Shadow",
      image: "/lovable-uploads/43587acb-999b-44bf-84a3-90f7192a6738.png",
      link: "https://amzn.to/47ZUrv0",
    },
    {
      id: "tech-14",
      title: "PlayStation VR 2 - Horizon Call of The Mountain Bundle",
      image: "/lovable-uploads/a7112867-3e6a-4f72-8d32-de6915794e7a.png",
      link: "https://amzn.to/4g9zK1J",
    },
    {
      id: "tech-15",
      title: "SteelSeries Arctis Nova Pro",
      image: "/lovable-uploads/ad3956a2-e1c0-4f0f-895e-cae11873e6d4.png",
      link: "https://amzn.to/47oY5hV",
    },
    {
      id: "tech-16",
      title: "Hisense Laser Mini Projector C2, 65-300\"",
      image: "/lovable-uploads/9b810d80-facc-426d-ac2f-64e2a75902c5.png",
      link: "https://amzn.to/461255L",
    },
    {
      id: "tech-17",
      title: "Xencelabs Pen Display 16 Bundle with Quick Keys",
      image: "/lovable-uploads/586a67db-eb4e-415c-ade6-928c3d370c5a.png",
      link: "https://amzn.to/47u82dV",
    },
    {
      id: "tech-18",
      title: "ProtoArc Wireless Trackball Mouse, EM01 NL",
      image: "/lovable-uploads/65851a7d-09f3-4f9c-bd56-1eb2043ad75a.png",
      link: "https://amzn.to/3HIF4g3",
    },
    {
      id: "tech-19",
      title: "Petma Smart Robot Dog for Kids",
      image: "/lovable-uploads/ca54d36d-9437-4b8c-81b3-ddfe71260adc.png",
      link: "https://amzn.to/4gi4yxC",
    },
    {
      id: "tech-20",
      title: "Teamgee 15.6\" Laptop Screen Extender",
      image: "/lovable-uploads/7283581c-a75c-4dcf-8c9b-345fc75077c6.png",
      link: "https://amzn.to/4m6fmAb",
    },
    {
      id: "tech-21",
      title: "Monster Boomerang Neck Speaker Bluetooth Wireless",
      image: "/lovable-uploads/f3e1f45b-88cc-4ce2-9f43-27cbfd728e7d.png",
      link: "https://amzn.to/45RwdSt",
    },
    {
      id: "tech-22",
      title: "5-in-1 Wireless Charging Station with Bluetooth Speaker",
      image: "/lovable-uploads/426c8c07-2f8f-4d52-88c9-64747c24f8a6.png",
      link: "https://amzn.to/4p67cKI",
    },
    {
      id: "tech-23",
      title: "RayNeo Air 3s AR/XR Glasses, 201\" 120Hz FHD HueView Display",
      image: "/lovable-uploads/9674ab6b-75dc-4d40-a523-c8464bb75249.png",
      link: "https://amzn.to/3I4szvj",
    },
    {
      id: "tech-24",
      title: "VITURE Luma Pro XR Glasses — 152\" 1200p Ultra Sharp Display",
      image: "/lovable-uploads/664478b1-4853-43d2-9f7d-b01540a616e3.png",
      link: "https://amzn.to/483Jngv",
    },
    {
      id: "tech-25",
      title: "Hydrogen Water Bottle Generator - Up to 8100 PPB",
      image: "/lovable-uploads/0028a9de-aa89-41e0-abbe-1a73255ea473.png",
      link: "https://amzn.to/46ccoUP",
    },
    {
      id: "tech-26",
      title: "Dancing Ferrofluid Bluetooth Speaker 5.0",
      image: "/lovable-uploads/3f13bb30-799b-4fbb-91b1-8099a0045b27.png",
      link: "https://amzn.to/4p8vDqN",
    },
    {
      id: "tech-27",
      title: "Upgraded Outdoor Speakers Bluetooth Speaker",
      image: "/lovable-uploads/46ae7fa6-b927-405e-aec6-60f45b7c1869.png",
      link: "https://amzn.to/4neKwGr",
    },
    {
      id: "tech-28",
      title: "Marshall Stanmore III Bluetooth Home Speaker",
      image: "/lovable-uploads/ddaa180d-bb93-4f16-b0cd-e68b32a90674.png",
      link: "https://amzn.to/4mOSHtp",
    },
    {
      id: "tech-29",
      title: "Apple 2024 iMac All-in-One Desktop",
      image: "/lovable-uploads/6bc31590-9077-4a58-be3e-e1740c948f5e.png",
      link: "https://amzn.to/4m44rqF",
    },
    {
      id: "tech-30",
      title: "Samsung Galaxy Z Flip7 Cell Phone, 512GB AI Smartphone",
      image: "/lovable-uploads/4ceed69b-5ae1-4c23-b749-014d836a4835.png",
      link: "https://amzn.to/3K5pziM",
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
      <div className="text-center py-12">
        <h1 className="font-omne-medium text-2xl md:text-5xl text-foreground mb-6">
          Cool. Clever. Cutting-edge.
        </h1>
        <p className="font-omne-regular text-base md:text-lg text-muted-foreground max-w-[85%] md:max-w-[85%] mx-auto px-4">
          We scan Amazon, eBay, Shopee and all apps for the latest smart gadgets and tech toys. Expect unexpected genius.
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
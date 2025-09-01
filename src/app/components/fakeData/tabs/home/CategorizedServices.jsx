const categorizedServices = [
  {
    id: 1,
    title: "Nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Elena Mirai",
        serviceName: "Balayage & Blowout",
        price: "220.00 CHF",
        rating: "4.9",
        distance: "0.5 km",
        avatarImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Leila Hassan",
        serviceName: "Acrylic Nail Art",
        price: "160.00 CHF",
        rating: "4.8",
        distance: "2.5 km",
        avatarImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Mira Solis",
        serviceName: "Gel Manicure",
        price: "120.00 CHF",
        rating: "4.7",
        distance: "1.1 km",
        avatarImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1588776814546-ec7d2c3f1b3f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Tanya Rivera",
        serviceName: "French Tips",
        price: "140.00 CHF",
        rating: "4.6",
        distance: "3.2 km",
        avatarImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Zara Bloom",
        serviceName: "Nail Spa Treatment",
        price: "180.00 CHF",
        rating: "4.9",
        distance: "0.9 km",
        avatarImage:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1611078489935-0cb9c3e9a3d1?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 2,
    title: "Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Kai Tanaka",
        serviceName: "Deep Tissue Massage",
        price: "180.00 CHF",
        rating: "4.7",
        distance: "1.2 km",
        avatarImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Lina Moreau",
        serviceName: "Swedish Massage",
        price: "150.00 CHF",
        rating: "4.6",
        distance: "2.0 km",
        avatarImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Jasper Lee",
        serviceName: "Hot Stone Therapy",
        price: "200.00 CHF",
        rating: "4.8",
        distance: "1.8 km",
        avatarImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1588776814546-ec7d2c3f1b3f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Nadia Khan",
        serviceName: "Prenatal Massage",
        price: "170.00 CHF",
        rating: "4.9",
        distance: "2.3 km",
        avatarImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 3,
    title: "Eyelashes",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Sara Kim",
        serviceName: "Volume Lash Extensions",
        price: "140.00 CHF",
        rating: "4.6",
        distance: "3.0 km",
        avatarImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Lana Voss",
        serviceName: "Classic Lash Set",
        price: "120.00 CHF",
        rating: "4.5",
        distance: "1.5 km",
        avatarImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Maya Lenz",
        serviceName: "Hybrid Lash Fill",
        price: "130.00 CHF",
        rating: "4.7",
        distance: "2.1 km",
        avatarImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1588776814546-ec7d2c3f1b3f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Nina Patel",
        serviceName: "Lash Lift & Tint",
        price: "110.00 CHF",
        rating: "4.8",
        distance: "2.7 km",
        avatarImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 4,
    title: "Barber",
    image:
      "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Jamal Reed",
        serviceName: "Classic Fade",
        price: "90.00 CHF",
        rating: "4.5",
        distance: "0.8 km",
        avatarImage:
          "https://images.unsplash.com/photo-1603415526960-f8f6f3f8c3f3?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Leo Grant",
        serviceName: "Beard Trim",
        price: "60.00 CHF",
        rating: "4.4",
        distance: "1.3 km",
        avatarImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Carlos Mendes",
        serviceName: "Haircut & Style",
        price: "100.00 CHF",
        rating: "4.6",
        distance: "2.0 km",
        avatarImage:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1588776814546-ec7d2c3f1b3f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Omar Aziz",
        serviceName: "Straight Razor Shave",
        price: "70.00 CHF",
        rating: "4.7",
        distance: "1.7 km",
        avatarImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 5,
    title: "Hair",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Sophia Chen",
        serviceName: "Balayage Highlights",
        price: "250.00 CHF",
        rating: "4.8",
        distance: "1.2 km",
        avatarImage:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Marcus Lee",
        serviceName: "Men's Haircut",
        price: "80.00 CHF",
        rating: "4.7",
        distance: "0.9 km",
        avatarImage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1503951914875-452162b0f3d1?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Isabella Rossi",
        serviceName: "Keratin Treatment",
        price: "300.00 CHF",
        rating: "4.9",
        distance: "2.3 km",
        avatarImage:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 6,
    title: "Skincare",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Dr. Emma Wilson",
        serviceName: "Facial Treatment",
        price: "180.00 CHF",
        rating: "4.9",
        distance: "1.5 km",
        avatarImage:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Lucas Martin",
        serviceName: "Acne Treatment",
        price: "220.00 CHF",
        rating: "4.7",
        distance: "2.1 km",
        avatarImage:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Aisha Patel",
        serviceName: "Microdermabrasion",
        price: "200.00 CHF",
        rating: "4.8",
        distance: "0.7 km",
        avatarImage:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1591073113125-e5a3cda64da4?auto=format&fit=c crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 7,
    title: "Makeup",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Chloe Dubois",
        serviceName: "Bridal Makeup",
        price: "280.00 CHF",
        rating: "4.9",
        distance: "1.8 km",
        avatarImage:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Rafael Silva",
        serviceName: "Evening Glam",
        price: "150.00 CHF",
        rating: "4.6",
        distance: "2.5 km",
        avatarImage:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Yuki Tanaka",
        serviceName: "Natural Day Makeup",
        price: "120.00 CHF",
        rating: "4.7",
        distance: "0.5 km",
        avatarImage:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 8,
    title: "Spa",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Serenity Spa",
        serviceName: "Full Day Spa Package",
        price: "450.00 CHF",
        rating: "4.9",
        distance: "3.2 km",
        avatarImage:
          "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1544164352-62535ba7cdc8?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Oasis Wellness",
        serviceName: "Aromatherapy Session",
        price: "160.00 CHF",
        rating: "4.8",
        distance: "1.7 km",
        avatarImage:
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Tranquility Retreat",
        serviceName: "Couples Massage",
        price: "320.00 CHF",
        rating: "4.9",
        distance: "2.8 km",
        avatarImage:
          "https://images.unsplash.com/photo-1551836026-d5c8c5ab235e?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1560073744-ff35d6b4c3c1?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 9,
    title: "Waxing",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Smooth Studio",
        serviceName: "Full Body Wax",
        price: "220.00 CHF",
        rating: "4.7",
        distance: "1.3 km",
        avatarImage:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
      },
      {
        providerName: "Bare Essentials",
        serviceName: "Brazilian Wax",
        price: "90.00 CHF",
        rating: "4.8",
        distance: "2.0 km",
        avatarImage:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Silk Skin",
        serviceName: "Facial Waxing",
        price: "60.00 CHF",
        rating: "4.6",
        distance: "0.9 km",
        avatarImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
  {
    id: 10,
    title: "Yoga",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
    serviceCount: "30 Services",
    data: [
      {
        providerName: "Zenith Yoga",
        serviceName: "Private Yoga Session",
        price: "120.00 CHF",
        rating: "4.9",
        distance: "1.5 km",
        avatarImage:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=c crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Harmony Studio",
        serviceName: "Group Yoga Class",
        price: "35.00 CHF",
        rating: "4.7",
        distance: "0.8 km",
        avatarImage:
          "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      },
      {
        providerName: "Balance Center",
        serviceName: "Hot Yoga Session",
        price: "45.00 CHF",
        rating: "4.8",
        distance: "2.2 km",
        avatarImage:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=150&q=80",
        image:
          "https://images.unsplash.com/photo-1545389336-8c6dfce0a3a3?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },
];
export default categorizedServices;

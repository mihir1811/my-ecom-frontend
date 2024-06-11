export const data = {
  userProfileData: {
    _id:1,
    firstName: "tony",
    lastName: "stark",
    email: "stark12@gmail.com",
    phone: "1234567890", // now country code is not mendatory
    billingAddress: {
      city: "surat",
      country: "india",
      state: "gujarat",
      pincode: "395001", // not mendatory
    },
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s",
      userRole:"USER"
  },
  products: [
    {
      _id:2,
      StockNumber: 3630449327,
      productName: "",
      description: "",
      productImgs: [],
      price: "",
      ratings: [
        {
          name: "peter parker",
          text: "nice product",
          ratings: 5,
        },
      ],
      shape:
        "round" ||
        "Pear" ||
        "Princess" ||
        "Marquise" ||
        "Emerald" ||
        "Cushion Brilliant" ||
        "Cushion Modified" ||
        "Asscher" ||
        "Sq. Emerald" ||
        "Oval" ||
        "Radiant" ||
        "Heart" ||
        "European Cut" ||
        "Old Miner" ||
        "Baguette" ||
        "Briolette" ||
        "Bullets" ||
        "Calf" ||
        "Half Moon" ||
        "Hexagonal" ||
        "Kite" ||
        "Lozenge" ||
        "Octagonal" ||
        "Pentagonal" ||
        "Rose" ||
        "Shield" ||
        "Square" ||
        "Square Radiant" ||
        "Star" ||
        "Tapered Baguette" ||
        "Tapered Bullet" ||
        "Trapezoid" ||
        "Triangular" ||
        "Trilliant",
      color:
        "D" ||
        "E" ||
        "F" ||
        "G" ||
        "H" ||
        "I" ||
        "J" ||
        "K" ||
        "L" ||
        "M" ||
        "N" ||
        "O" ||
        "P" ||
        "Q" ||
        "R" ||
        "S" ||
        "T" ||
        "U" ||
        "V" ||
        "W" ||
        "X" ||
        "Y" ||
        "Z",
      carat:
        "FL" ||
        "IF" ||
        "VVS1" ||
        "VVS2" ||
        "VS1" ||
        "VS2" ||
        "VS3" ||
        "SI1" ||
        "SI2" ||
        "SI3",
      clarity: "",
      cut: "",
      weight: "",
      fluorescence: "",
      lab: "GIA",
      depth: "",
      table: "",
      polish: "",
      symmetry: "",
      certificateDocumentImg: "",
      storeId:3
    },
  ],
  storeDetails: {
    _id: 3, 
    userId: 1,
    storeName: "jd's stores",
    totalProducts: 10,
    isVerified: true,
  },
};

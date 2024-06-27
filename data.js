export const data = {
  userProfileData: {
    _id: 1,
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
    userRole: "USER",
  },
  products: [
    {
      _id: 2,
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
      storeId: 3,
      productType: "Lab" || "Natural",
    },
  ],
  storeDetails: {
    _id: 3,
    userId: 1,
    storeName: "jd's stores",
    totalProducts: 10,
    isVerified: true,
  },
  cart: {
    products: [
      {
        _id: 2,
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
        storeId: 3,
      },
    ],
  },
};

export const productsList = [
  {
    _id: 2,
    StockNumber: 3630449327,
    productName:
      "Natural Loose Round Cut Diamond | Salt And Pepper Diamond Ring | Rustic Diamond | Diamond For Jewelry Making",
    description: `Natural Diamond Round Brilliant shape 0.50 ct 
Color: D
Clarity: VVS1
GIA lab CERT # 2384587698
Cut: Very Good
Polish: Very Good
Symmetry: Very Good
We are iamond manufacturers since 1963 !
Fast Shipping !
Gorgeous Stone !

Please notice, custom duties and VAT are on the buyer's responsibility and not included in the price. Please check before auctioning.
Bidders from Belgium: Please note, you may need to clear the shipment from the Diamond Office in Antwerp.
Bidders from France: Please note the increased cost for shipments to France. This cost includes the handling, delivery and broker fee which is required for importing loose diamonds to France. This is a specialized service provided by D2D VAL Express. This fee covers all costs except any applicable Import VAT.
150 euros shipping cost to France.

e50`,
    productImgs: [
      "https://i.etsystatic.com/23591157/r/il/d4540f/5540918649/il_794xN.5540918649_h9de.jpg",
      "https://i.etsystatic.com/23591157/r/il/031457/5540912205/il_794xN.5540912205_fua7.jpg",
    ],
    price: "39.283",
    ratings: [
      {
        name: "peter parker",
        text: "nice product",
        ratings: 5,
      },
    ],
    shape: "round",
    color: "D",
    clarity: "SI1",
    cut: "Good",
    weight: "1.08",
    fluorescence: "",
    lab: "GIA",
    depth: "",
    table: "",
    polish: "",
    symmetry: "",
    certificateDocumentImg: "",
    storeId: 3,
    productType: "Natural",
  },
];

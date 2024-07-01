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
    userRole: "SELLER",
  },
  products: [
    {
      _id: 2,
      stockNumber: 3630449327,
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
        stockNumber: 3630449327,
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
    _id: 1,
    stockNumber: 5048181700,
    title: "Exquisite Round Cut Diamond Bracelet with Adjustable Clasp",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    productImgs: [
      "http://dummyimage.com/800x800.png/dddddd/000000",
      "http://dummyimage.com/799x800.png/dddddd/000000",
    ],
    marketPrice: 71.89,
    msrpPrice: 3.13,
    ratings: [
      {
        name: "Daffy Ruste",
        text: "Excellent value for the money",
        value: 3,
      },
    ],
    shape: "Princess",
    color: "K",
    clarity: "VVS1",
    cut: "Ideal",
    weight: 6.99,
    fluorescence: "Very Strong",
    lab: "GHI",
    depth: 21.32,
    table: 10.67,
    polish: "Fair",
    symmetry: "Good",
    certificateDocumentImg:
      "https://unc.edu/orci.html?mattis=a&nibh=pede&ligula=posuere&nec=nonummy&sem=integer&duis=non&aliquam=velit&convallis=donec&nunc=diam&proin=neque&at=vestibulum&turpis=eget&a=vulputate&pede=ut&posuere=ultrices&nonummy=vel&integer=augue&non=vestibulum&velit=ante&donec=ipsum&diam=primis&neque=in&vestibulum=faucibus&eget=orci&vulputate=luctus&ut=et&ultrices=ultrices&vel=posuere&augue=cubilia&vestibulum=curae&ante=donec&ipsum=pharetra&primis=magna&in=vestibulum&faucibus=aliquet&orci=ultrices&luctus=erat&et=tortor&ultrices=sollicitudin&posuere=mi&cubilia=sit&curae=amet&donec=lobortis&pharetra=sapien&magna=sapien&vestibulum=non&aliquet=mi&ultrices=integer&erat=ac&tortor=neque&sollicitudin=duis&mi=bibendum&sit=morbi&amet=non&lobortis=quam&sapien=nec&sapien=dui&non=luctus&mi=rutrum&integer=nulla&ac=tellus&neque=in&duis=sagittis&bibendum=dui&morbi=vel&non=nisl&quam=duis&nec=ac&dui=nibh&luctus=fusce&rutrum=lacus&nulla=purus&tellus=aliquet&in=at&sagittis=feugiat&dui=non&vel=pretium&nisl=quis&duis=lectus&ac=suspendisse&nibh=potenti",
    stoneType: "Natural",
  },
  {
    _id: 2,
    stockNumber: 9502413175,
    title: "Exquisite Round Cut Diamond Bracelet with Adjustable Clasp",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    productImgs: ["http://dummyimage.com/799x800.png/cc0000/ffffff"],
    marketPrice: 64.33,
    msrpPrice: 30.56,
    ratings: [
      {
        name: "Jermaine Chesterfield",
        text: "Average quality",
        value: 4,
      },
      {
        name: "Max Belone",
        text: "Great product",
        value: 4,
      },
      {
        name: "Shawn O'Lenane",
        text: "So-so product",
        value: 4,
      },
      {
        name: "Amelita Toby",
        text: "very disappointed",
        value: 1,
      },
      {
        name: "Francklin Craven",
        text: "Great product",
        value: 5,
      },
    ],
    shape: "Asscher",
    color: "P",
    clarity: "SI2",
    cut: "Excellent",
    weight: 2.81,
    fluorescence: "Strong",
    lab: "IGI",
    depth: 50.15,
    table: 89.26,
    polish: "Very Good",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://rakuten.co.jp/id/mauris/vulputate.jpg?in=gravida&hac=nisi&habitasse=at&platea=nibh&dictumst=in&etiam=hac&faucibus=habitasse&cursus=platea&urna=dictumst&ut=aliquam&tellus=augue&nulla=quam&ut=sollicitudin&erat=vitae&id=consectetuer&mauris=eget&vulputate=rutrum&elementum=at&nullam=lorem&varius=integer&nulla=tincidunt&facilisi=ante&cras=vel&non=ipsum&velit=praesent&nec=blandit&nisi=lacinia&vulputate=erat&nonummy=vestibulum&maecenas=sed&tincidunt=magna&lacus=at&at=nunc&velit=commodo&vivamus=placerat&vel=praesent&nulla=blandit&eget=nam&eros=nulla",
  },
  {
    _id: 3,
    stockNumber: 6052970597,
    title: "Sparkling Diamond Ring with Emerald Accents and Platinum Band",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    productImgs: [
      "http://dummyimage.com/799x800.png/cc0000/ffffff",
      "http://dummyimage.com/800x800.png/cc0000/ffffff",
    ],
    marketPrice: 79.54,
    msrpPrice: 0.76,
    ratings: [
      {
        name: "Donielle Luffman",
        text: "exceeded my expectations",
        value: 1,
      },
      {
        name: "Shaylah Baldoni",
        text: "Best purchase I've made in a long time",
        value: 3,
      },
      {
        name: "Guthrey O'Deoran",
        text: "would not buy again",
        value: 3,
      },
      {
        name: "Merlina Woodford",
        text: "Great product",
        value: 2,
      },
      {
        name: "Gard Traylen",
        text: "So-so product",
        value: 2,
      },
    ],
    shape: "Asscher",
    color: "J",
    clarity: "IF",
    cut: "Poor",
    weight: 5.6,
    fluorescence: "Very Strong",
    lab: "GRS",
    depth: 14.15,
    table: 64.89,
    polish: "Poor",
    symmetry: "Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://prlog.org/morbi/non/quam/nec/dui.png?vivamus=et",
  },
  {
    _id: 4,
    stockNumber: 3634599762,
    title:
      "Stunning Oval Diamond Cluster Earrings with Sterling Silver Setting",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    productImgs: ["http://dummyimage.com/799x800.png/5fa2dd/ffffff"],
    marketPrice: 14.92,
    msrpPrice: 27.51,
    ratings: [
      {
        name: "Matilda Lope",
        text: "So-so product",
        value: 3,
      },
      {
        name: "Hetti Farlane",
        text: "Impressed with the fast shipping and packaging",
        value: 5,
      },
      {
        name: "Florina Olsson",
        text: "Great product",
        value: 1,
      },
    ],
    shape: "Oval",
    color: "Z",
    clarity: "FL",
    cut: "Ideal",
    weight: 8.21,
    fluorescence: "Very Strong",
    lab: "EGL",
    depth: 94.63,
    table: 65.14,
    polish: "Fair",
    symmetry: "Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://miitbeian.gov.cn/pretium/quis/lectus/suspendisse/potenti/in/eleifend.png?vestibulum=maecenas&eget=tincidunt&vulputate=lacus&ut=at&ultrices=velit&vel=vivamus&augue=vel&vestibulum=nulla&ante=eget&ipsum=eros&primis=elementum&in=pellentesque&faucibus=quisque&orci=porta&luctus=volutpat&et=erat&ultrices=quisque&posuere=erat&cubilia=eros&curae=viverra&donec=eget&pharetra=congue&magna=eget&vestibulum=semper&aliquet=rutrum&ultrices=nulla&erat=nunc&tortor=purus&sollicitudin=phasellus&mi=in&sit=felis&amet=donec&lobortis=semper&sapien=sapien&sapien=a&non=libero&mi=nam&integer=dui&ac=proin&neque=leo&duis=odio&bibendum=porttitor&morbi=id&non=consequat&quam=in&nec=consequat&dui=ut&luctus=nulla&rutrum=sed&nulla=accumsan&tellus=felis&in=ut&sagittis=at&dui=dolor&vel=quis&nisl=odio&duis=consequat&ac=varius&nibh=integer&fusce=ac&lacus=leo&purus=pellentesque&aliquet=ultrices&at=mattis",
  },
  {
    _id: 5,
    stockNumber: 2119422761,
    title: "Luxurious Diamond Pendant Necklace with Sapphire Detailing",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    productImgs: [
      "http://dummyimage.com/800x800.png/dddddd/000000",
      "http://dummyimage.com/800x800.png/ff4444/ffffff",
    ],
    marketPrice: 45.01,
    msrpPrice: 19.65,
    ratings: [
      {
        name: "Hedy Haack",
        text: "very disappointed",
        value: 5,
      },
      {
        name: "Sharity Juara",
        text: "decent price",
        value: 5,
      },
      {
        name: "Joscelin Forber",
        text: "would not buy again",
        value: 1,
      },
      {
        name: "Cristian Fergyson",
        text: "Best purchase I've made in a long time",
        value: 4,
      },
      {
        name: "Stevy Buten",
        text: "So-so product",
        value: 4,
      },
    ],
    shape: "Cushion",
    color: "U",
    clarity: "I1",
    cut: "Poor",
    weight: 3.05,
    fluorescence: "Faint",
    lab: "GHI",
    depth: 81.85,
    table: 49.11,
    polish: "Poor",
    symmetry: "Good",
    stoneType: "Lab",
    certificateDocumentImg:
      "http://usatoday.com/nisl/aenean/lectus/pellentesque/eget/nunc/donec.js?erat=donec&vestibulum=odio&sed=justo&magna=sollicitudin&at=ut&nunc=suscipit&commodo=a&placerat=feugiat&praesent=et&blandit=eros&nam=vestibulum&nulla=ac",
  },
  {
    _id: 6,
    stockNumber: 1870484267,
    title:
      "Stunning Oval Diamond Cluster Earrings with Sterling Silver Setting",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    productImgs: [
      "http://dummyimage.com/800x800.png/5fa2dd/ffffff",
      "http://dummyimage.com/799x800.png/5fa2dd/ffffff",
    ],
    marketPrice: 15.0,
    msrpPrice: 86.03,
    ratings: [
      {
        name: "Biddie McClory",
        text: "Terrible customer service",
        value: 2,
      },
      {
        name: "Giulio Boulsher",
        text: "wouldn't buy again",
        value: 2,
      },
    ],
    shape: "Asscher",
    color: "F",
    clarity: "SI2",
    cut: "Good",
    weight: 6.62,
    fluorescence: "None",
    lab: "GCAL",
    depth: 91.66,
    table: 11.58,
    polish: "Excellent",
    symmetry: "Poor",
    stoneType: "Lab",
    certificateDocumentImg:
      "http://biglobe.ne.jp/magna/ac.aspx?quis=parturient&augue=montes&luctus=nascetur&tincidunt=ridiculus&nulla=mus&mollis=etiam&molestie=vel",
  },
  {
    _id: 7,
    stockNumber: 1825948267,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    productImgs: [
      "http://dummyimage.com/799x800.png/ff4444/ffffff",
      "http://dummyimage.com/800x800.png/ff4444/ffffff",
    ],
    marketPrice: 43.61,
    msrpPrice: 35.23,
    ratings: [
      {
        name: "Lulita Clevely",
        text: "Best purchase I've made in a long time",
        value: 2,
      },
      {
        name: "Elsbeth Gronaller",
        text: "highly recommend!",
        value: 3,
      },
      {
        name: "Olivia Dameisele",
        text: "Great product",
        value: 5,
      },
      {
        name: "Leodora Asquith",
        text: "Best purchase I've made in a long time",
        value: 1,
      },
    ],
    shape: "Princess",
    color: "H",
    clarity: "SI1",
    cut: "Excellent",
    weight: 6.21,
    fluorescence: "None",
    lab: "EGL",
    depth: 52.05,
    table: 36.21,
    polish: "Poor",
    symmetry: "Very Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://addtoany.com/consequat/varius/integer.json?odio=praesent&odio=blandit&elementum=nam&eu=nulla&interdum=integer&eu=pede&tincidunt=justo&in=lacinia&leo=eget&maecenas=tincidunt&pulvinar=eget&lobortis=tempus&est=vel&phasellus=pede&sit=morbi&amet=porttitor&erat=lorem&nulla=id&tempus=ligula&vivamus=suspendisse&in=ornare",
  },
  {
    _id: 8,
    stockNumber: 6047899344,
    title:
      "Stunning Oval Diamond Cluster Earrings with Sterling Silver Setting",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    productImgs: ["http://dummyimage.com/799x800.png/5fa2dd/ffffff"],
    marketPrice: 77.87,
    msrpPrice: 17.22,
    ratings: [
      {
        name: "Elbert Avis",
        text: "So-so product",
        value: 4,
      },
      {
        name: "Derk Henker",
        text: "Impressed with the fast shipping and packaging",
        value: 1,
      },
      {
        name: "Arlan Aubry",
        text: "wouldn't buy again",
        value: 5,
      },
      {
        name: "Peder Battershall",
        text: "exceeded my expectations",
        value: 4,
      },
      {
        name: "Nicholas Cosbee",
        text: "Excellent value for the money",
        value: 4,
      },
      {
        name: "Vasilis Conew",
        text: "would not buy again",
        value: 1,
      },
      {
        name: "Sukey Bowich",
        text: "Great product",
        value: 4,
      },
    ],
    shape: "Round",
    color: "N",
    clarity: "VVS1",
    cut: "Excellent",
    weight: 4.77,
    fluorescence: "Very Strong",
    lab: "GHI",
    depth: 85.31,
    table: 63.86,
    polish: "Excellent",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://ucsd.edu/aenean/auctor/gravida/sem.png?et=enim&ultrices=lorem&posuere=ipsum&cubilia=dolor&curae=sit&nulla=amet&dapibus=consectetuer&dolor=adipiscing&vel=elit&est=proin&donec=interdum&odio=mauris",
  },
  {
    _id: 9,
    stockNumber: 3399288904,
    title: "Dazzling Princess Cut Diamond Necklace with White Gold Chain",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    productImgs: ["http://dummyimage.com/799x800.png/dddddd/000000"],
    marketPrice: 73.31,
    msrpPrice: 0.85,
    ratings: [
      {
        name: "Carleen Roffe",
        text: "very disappointed",
        value: 3,
      },
      {
        name: "Rakel Hegg",
        text: "highly recommend!",
        value: 3,
      },
    ],
    shape: "Round",
    color: "T",
    clarity: "VS2",
    cut: "Very Good",
    weight: 8.35,
    fluorescence: "Faint",
    lab: "GIA",
    depth: 3.65,
    table: 36.37,
    polish: "Excellent",
    symmetry: "Poor",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://google.es/aenean/lectus/pellentesque/eget/nunc.html?enim=vulputate&in=ut&tempor=ultrices&turpis=vel&nec=augue&euismod=vestibulum&scelerisque=ante&quam=ipsum&turpis=primis&adipiscing=in&lorem=faucibus&vitae=orci&mattis=luctus&nibh=et&ligula=ultrices&nec=posuere&sem=cubilia&duis=curae&aliquam=donec&convallis=pharetra&nunc=magna&proin=vestibulum&at=aliquet&turpis=ultrices&a=erat&pede=tortor&posuere=sollicitudin&nonummy=mi&integer=sit&non=amet&velit=lobortis&donec=sapien&diam=sapien&neque=non&vestibulum=mi&eget=integer&vulputate=ac&ut=neque&ultrices=duis&vel=bibendum&augue=morbi&vestibulum=non&ante=quam&ipsum=nec&primis=dui&in=luctus&faucibus=rutrum&orci=nulla&luctus=tellus&et=in&ultrices=sagittis&posuere=dui&cubilia=vel&curae=nisl&donec=duis&pharetra=ac&magna=nibh",
  },
  {
    _id: 10,
    stockNumber: 3887161123,
    title: "Elegant Diamond Stud Earrings Set in Rose Gold",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    productImgs: ["http://dummyimage.com/799x800.png/5fa2dd/ffffff"],
    marketPrice: 50.68,
    msrpPrice: 4.92,
    ratings: [
      {
        name: "Bev Gyver",
        text: "Average quality",
        value: 1,
      },
      {
        name: "Giraldo Duesbury",
        text: "Not worth the price",
        value: 1,
      },
      {
        name: "Artair Penhallurick",
        text: "Terrible customer service",
        value: 1,
      },
      {
        name: "Dicky Gouly",
        text: "would not buy again",
        value: 4,
      },
      {
        name: "Guntar Stammler",
        text: "decent price",
        value: 2,
      },
      {
        name: "Rhodie Tate",
        text: "Not worth the price",
        value: 4,
      },
    ],
    shape: "Cushion",
    color: "D",
    clarity: "VS1",
    cut: "Good",
    weight: 2.73,
    fluorescence: "Very Strong",
    lab: "IGI",
    depth: 77.98,
    table: 96.55,
    polish: "Poor",
    symmetry: "Very Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://baidu.com/ornare/imperdiet/sapien/urna.xml?at=iaculis&nunc=diam&commodo=erat&placerat=fermentum&praesent=justo&blandit=nec&nam=condimentum&nulla=neque&integer=sapien&pede=placerat&justo=ante&lacinia=nulla&eget=justo&tincidunt=aliquam&eget=quis&tempus=turpis&vel=eget&pede=elit&morbi=sodales&porttitor=scelerisque&lorem=mauris&id=sit&ligula=amet&suspendisse=eros&ornare=suspendisse&consequat=accumsan&lectus=tortor&in=quis&est=turpis&risus=sed&auctor=ante&sed=vivamus&tristique=tortor&in=duis&tempus=mattis&sit=egestas&amet=metus&sem=aenean&fusce=fermentum&consequat=donec&nulla=ut&nisl=mauris&nunc=eget&nisl=massa&duis=tempor&bibendum=convallis&felis=nulla&sed=neque&interdum=libero&venenatis=convallis&turpis=eget&enim=eleifend&blandit=luctus&mi=ultricies&in=eu&porttitor=nibh&pede=quisque&justo=id&eu=justo&massa=sit&donec=amet&dapibus=sapien&duis=dignissim&at=vestibulum&velit=vestibulum&eu=ante&est=ipsum&congue=primis&elementum=in&in=faucibus&hac=orci&habitasse=luctus&platea=et&dictumst=ultrices&morbi=posuere&vestibulum=cubilia&velit=curae&id=nulla&pretium=dapibus&iaculis=dolor&diam=vel&erat=est&fermentum=donec&justo=odio&nec=justo&condimentum=sollicitudin&neque=ut&sapien=suscipit&placerat=a&ante=feugiat&nulla=et",
  },
  {
    _id: 11,
    stockNumber: 5855226634,
    title: "Exquisite Round Cut Diamond Bracelet with Adjustable Clasp",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    productImgs: [
      "http://dummyimage.com/799x800.png/dddddd/000000",
      "http://dummyimage.com/800x800.png/cc0000/ffffff",
    ],
    marketPrice: 23.63,
    msrpPrice: 74.75,
    ratings: [],
    shape: "Princess",
    color: "F",
    clarity: "VVS2",
    cut: "Good",
    weight: 9.55,
    fluorescence: "None",
    lab: "SSEF",
    depth: 88.97,
    table: 87.32,
    polish: "Poor",
    symmetry: "Excellent",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://msn.com/cras/mi.html?eu=at&massa=nulla&donec=suspendisse&dapibus=potenti&duis=cras&at=in&velit=purus&eu=eu&est=magna&congue=vulputate&elementum=luctus&in=cum",
  },
  {
    _id: 12,
    stockNumber: 2160930802,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    productImgs: ["http://dummyimage.com/799x800.png/ff4444/ffffff"],
    marketPrice: 36.83,
    msrpPrice: 29.19,
    ratings: [
      {
        name: "Seymour Moxon",
        text: "exceeded my expectations",
        value: 3,
      },
      {
        name: "Cacilie Selby",
        text: "Average quality",
        value: 5,
      },
    ],
    shape: "Emerald",
    color: "Z",
    clarity: "I2",
    cut: "Poor",
    weight: 2.43,
    fluorescence: "None",
    lab: "IGI",
    depth: 89.88,
    table: 30.85,
    polish: "Fair",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://facebook.com/eget/orci/vehicula.html?est=sapien&congue=ut&elementum=nunc&in=vestibulum&hac=ante&habitasse=ipsum&platea=primis&dictumst=in&morbi=faucibus&vestibulum=orci&velit=luctus&id=et&pretium=ultrices&iaculis=posuere&diam=cubilia&erat=curae&fermentum=mauris&justo=viverra&nec=diam&condimentum=vitae&neque=quam&sapien=suspendisse&placerat=potenti&ante=nullam&nulla=porttitor&justo=lacus&aliquam=at&quis=turpis&turpis=donec&eget=posuere&elit=metus&sodales=vitae&scelerisque=ipsum&mauris=aliquam&sit=non&amet=mauris&eros=morbi&suspendisse=non&accumsan=lectus&tortor=aliquam&quis=sit&turpis=amet&sed=diam&ante=in&vivamus=magna&tortor=bibendum&duis=imperdiet&mattis=nullam&egestas=orci&metus=pede&aenean=venenatis&fermentum=non&donec=sodales&ut=sed&mauris=tincidunt&eget=eu&massa=felis&tempor=fusce&convallis=posuere&nulla=felis&neque=sed&libero=lacus&convallis=morbi&eget=sem&eleifend=mauris&luctus=laoreet&ultricies=ut&eu=rhoncus&nibh=aliquet&quisque=pulvinar&id=sed&justo=nisl&sit=nunc&amet=rhoncus&sapien=dui&dignissim=vel&vestibulum=sem&vestibulum=sed&ante=sagittis&ipsum=nam&primis=congue&in=risus&faucibus=semper&orci=porta&luctus=volutpat&et=quam&ultrices=pede&posuere=lobortis&cubilia=ligula&curae=sit&nulla=amet&dapibus=eleifend&dolor=pede&vel=libero&est=quis&donec=orci&odio=nullam&justo=molestie&sollicitudin=nibh",
  },
  {
    _id: 13,
    stockNumber: 8466610504,
    title: "Dazzling Princess Cut Diamond Necklace with White Gold Chain",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    productImgs: ["http://dummyimage.com/799x800.png/ff4444/ffffff"],
    marketPrice: 40.03,
    msrpPrice: 18.99,
    ratings: [
      {
        name: "Alwyn Maffioni",
        text: "Great product",
        value: 1,
      },
      {
        name: "Christy Marchello",
        text: "Average quality",
        value: 5,
      },
      {
        name: "Brittani Smidmor",
        text: "Average quality",
        value: 3,
      },
      {
        name: "Dean Mincini",
        text: "Terrible customer service",
        value: 3,
      },
      {
        name: "Robert Hardan",
        text: "Impressed with the fast shipping and packaging",
        value: 3,
      },
      {
        name: "Anthia Stiffkins",
        text: "exceeded my expectations",
        value: 4,
      },
      {
        name: "Sibyl Caulwell",
        text: "very disappointed",
        value: 5,
      },
      {
        name: "Vivian Morin",
        text: "Not worth the price",
        value: 2,
      },
    ],
    shape: "Oval",
    color: "E",
    clarity: "I2",
    cut: "Fair",
    weight: 0.6,
    fluorescence: "Very Strong",
    lab: "HRD",
    depth: 58.93,
    table: 78.33,
    polish: "Fair",
    symmetry: "Excellent",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://wikipedia.org/faucibus/orci/luctus/et.js?sit=ultrices&amet=erat&consectetuer=tortor&adipiscing=sollicitudin&elit=mi&proin=sit&risus=amet&praesent=lobortis&lectus=sapien&vestibulum=sapien&quam=non&sapien=mi&varius=integer&ut=ac&blandit=neque&non=duis&interdum=bibendum&in=morbi&ante=non&vestibulum=quam&ante=nec&ipsum=dui&primis=luctus&in=rutrum&faucibus=nulla&orci=tellus&luctus=in&et=sagittis&ultrices=dui&posuere=vel&cubilia=nisl&curae=duis&duis=ac&faucibus=nibh&accumsan=fusce&odio=lacus&curabitur=purus&convallis=aliquet&duis=at&consequat=feugiat&dui=non&nec=pretium&nisi=quis&volutpat=lectus&eleifend=suspendisse&donec=potenti&ut=in&dolor=eleifend&morbi=quam&vel=a&lectus=odio&in=in&quam=hac&fringilla=habitasse&rhoncus=platea&mauris=dictumst&enim=maecenas&leo=ut&rhoncus=massa&sed=quis&vestibulum=augue&sit=luctus&amet=tincidunt&cursus=nulla",
  },
  {
    _id: 14,
    stockNumber: 2702117093,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    productImgs: ["http://dummyimage.com/800x800.png/5fa2dd/ffffff"],
    marketPrice: 95.91,
    msrpPrice: 22.02,
    ratings: [
      {
        name: "Mercy Tothacot",
        text: "Excellent value for the money",
        value: 3,
      },
    ],
    shape: "Emerald",
    color: "U",
    clarity: "I3",
    cut: "Ideal",
    weight: 4.8,
    fluorescence: "Faint",
    lab: "EGL",
    depth: 40.0,
    table: 2.27,
    polish: "Good",
    symmetry: "Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://amazon.co.jp/venenatis.html?convallis=lorem&morbi=id&odio=ligula&odio=suspendisse&elementum=ornare&eu=consequat&interdum=lectus&eu=in&tincidunt=est&in=risus&leo=auctor&maecenas=sed&pulvinar=tristique&lobortis=in&est=tempus&phasellus=sit&sit=amet&amet=sem&erat=fusce&nulla=consequat&tempus=nulla&vivamus=nisl&in=nunc&felis=nisl&eu=duis&sapien=bibendum&cursus=felis&vestibulum=sed&proin=interdum&eu=venenatis&mi=turpis&nulla=enim&ac=blandit&enim=mi&in=in&tempor=porttitor&turpis=pede&nec=justo&euismod=eu&scelerisque=massa&quam=donec&turpis=dapibus&adipiscing=duis&lorem=at&vitae=velit&mattis=eu&nibh=est&ligula=congue&nec=elementum&sem=in&duis=hac&aliquam=habitasse&convallis=platea&nunc=dictumst&proin=morbi&at=vestibulum&turpis=velit&a=id&pede=pretium&posuere=iaculis&nonummy=diam&integer=erat&non=fermentum&velit=justo&donec=nec&diam=condimentum&neque=neque&vestibulum=sapien&eget=placerat&vulputate=ante&ut=nulla&ultrices=justo&vel=aliquam&augue=quis&vestibulum=turpis&ante=eget&ipsum=elit&primis=sodales",
  },
  {
    _id: 15,
    stockNumber: 1719011940,
    title: "Sparkling Diamond Ring with Emerald Accents and Platinum Band",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    productImgs: [
      "http://dummyimage.com/800x800.png/dddddd/000000",
      "http://dummyimage.com/799x800.png/dddddd/000000",
    ],
    marketPrice: 50.57,
    msrpPrice: 29.87,
    ratings: [
      {
        name: "Claiborn McCambridge",
        text: "exceeded my expectations",
        value: 2,
      },
      {
        name: "Rafferty Rudsdell",
        text: "Average quality",
        value: 2,
      },
      {
        name: "Aloin Henriques",
        text: "Great product",
        value: 2,
      },
      {
        name: "Edsel De L'Isle",
        text: "Best purchase I've made in a long time",
        value: 2,
      },
      {
        name: "Christin Sibray",
        text: "Terrible customer service",
        value: 3,
      },
      {
        name: "Dmitri Margiotta",
        text: "Excellent value for the money",
        value: 1,
      },
    ],
    shape: "Oval",
    color: "T",
    clarity: "I2",
    cut: "Poor",
    weight: 2.7,
    fluorescence: "None",
    lab: "GCAL",
    depth: 80.11,
    table: 38.09,
    polish: "Very Good",
    symmetry: "Poor",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://free.fr/sit/amet/turpis/elementum/ligula/vehicula.jsp?gravida=mauris&sem=vulputate&praesent=elementum&id=nullam&massa=varius&id=nulla&nisl=facilisi&venenatis=cras&lacinia=non&aenean=velit&sit=nec&amet=nisi&justo=vulputate&morbi=nonummy&ut=maecenas&odio=tincidunt&cras=lacus&mi=at&pede=velit&malesuada=vivamus&in=vel&imperdiet=nulla&et=eget&commodo=eros&vulputate=elementum&justo=pellentesque&in=quisque&blandit=porta&ultrices=volutpat&enim=erat&lorem=quisque&ipsum=erat&dolor=eros&sit=viverra&amet=eget&consectetuer=congue&adipiscing=eget&elit=semper&proin=rutrum&interdum=nulla&mauris=nunc&non=purus&ligula=phasellus&pellentesque=in&ultrices=felis&phasellus=donec&id=semper&sapien=sapien&in=a&sapien=libero&iaculis=nam&congue=dui&vivamus=proin&metus=leo&arcu=odio&adipiscing=porttitor&molestie=id&hendrerit=consequat&at=in&vulputate=consequat&vitae=ut&nisl=nulla&aenean=sed&lectus=accumsan&pellentesque=felis&eget=ut&nunc=at&donec=dolor&quis=quis&orci=odio&eget=consequat&orci=varius",
  },
  {
    _id: 16,
    stockNumber: 2794057777,
    title: "Sparkling Diamond Ring with Emerald Accents and Platinum Band",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    productImgs: [
      "http://dummyimage.com/799x800.png/dddddd/000000",
      "http://dummyimage.com/800x800.png/ff4444/ffffff",
    ],
    marketPrice: 11.31,
    msrpPrice: 70.96,
    ratings: [],
    shape: "Emerald",
    color: "S",
    clarity: "VVS1",
    cut: "Ideal",
    weight: 2.18,
    fluorescence: "Strong",
    lab: "GCAL",
    depth: 76.92,
    table: 46.1,
    polish: "Excellent",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://creativecommons.org/nulla.xml?vulputate=nulla&elementum=integer&nullam=pede&varius=justo&nulla=lacinia&facilisi=eget&cras=tincidunt&non=eget&velit=tempus&nec=vel&nisi=pede&vulputate=morbi&nonummy=porttitor&maecenas=lorem&tincidunt=id&lacus=ligula&at=suspendisse&velit=ornare&vivamus=consequat&vel=lectus&nulla=in&eget=est&eros=risus&elementum=auctor&pellentesque=sed&quisque=tristique&porta=in&volutpat=tempus&erat=sit&quisque=amet&erat=sem&eros=fusce&viverra=consequat&eget=nulla&congue=nisl&eget=nunc&semper=nisl&rutrum=duis&nulla=bibendum&nunc=felis&purus=sed&phasellus=interdum&in=venenatis&felis=turpis&donec=enim&semper=blandit&sapien=mi&a=in&libero=porttitor&nam=pede&dui=justo&proin=eu&leo=massa&odio=donec&porttitor=dapibus",
  },
  {
    _id: 17,
    stockNumber: 425377966,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    productImgs: ["http://dummyimage.com/800x800.png/5fa2dd/ffffff"],
    marketPrice: 53.42,
    msrpPrice: 50.28,
    ratings: [
      {
        name: "Kalina Garrie",
        text: "would not buy again",
        value: 1,
      },
      {
        name: "Cayla Binyon",
        text: "Impressed with the fast shipping and packaging",
        value: 2,
      },
      {
        name: "Sherilyn Clilverd",
        text: "would not buy again",
        value: 1,
      },
    ],
    shape: "Pear",
    color: "E",
    clarity: "FL",
    cut: "Fair",
    weight: 2.03,
    fluorescence: "Faint",
    lab: "HRD",
    depth: 71.13,
    table: 74.11,
    polish: "Good",
    symmetry: "Very Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://ca.gov/ligula/sit/amet.html?rhoncus=adipiscing&aliquet=elit&pulvinar=proin&sed=risus&nisl=praesent&nunc=lectus&rhoncus=vestibulum&dui=quam&vel=sapien&sem=varius&sed=ut&sagittis=blandit&nam=non&congue=interdum&risus=in&semper=ante&porta=vestibulum&volutpat=ante&quam=ipsum&pede=primis&lobortis=in&ligula=faucibus&sit=orci&amet=luctus&eleifend=et&pede=ultrices&libero=posuere&quis=cubilia&orci=curae&nullam=duis",
  },
  {
    _id: 18,
    stockNumber: 343116896,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    productImgs: ["http://dummyimage.com/799x800.png/cc0000/ffffff"],
    marketPrice: 28.63,
    msrpPrice: 95.32,
    ratings: [
      {
        name: "Rochell Junkin",
        text: "So-so product",
        value: 4,
      },
      {
        name: "Bradly Stanbro",
        text: "decent price",
        value: 3,
      },
      {
        name: "Ester Face",
        text: "Excellent value for the money",
        value: 1,
      },
      {
        name: "Norma Alldread",
        text: "Average quality",
        value: 3,
      },
      {
        name: "Sharona Tills",
        text: "Terrible customer service",
        value: 2,
      },
      {
        name: "Ambros Langworthy",
        text: "decent price",
        value: 2,
      },
      {
        name: "Birgitta Aiton",
        text: "highly recommend!",
        value: 5,
      },
      {
        name: "Dana Piggins",
        text: "Impressed with the fast shipping and packaging",
        value: 2,
      },
    ],
    shape: "Pear",
    color: "N",
    clarity: "FL",
    cut: "Good",
    weight: 9.48,
    fluorescence: "Very Strong",
    lab: "GRS",
    depth: 86.93,
    table: 28.87,
    polish: "Good",
    symmetry: "Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://cyberchimps.com/metus/vitae/ipsum/aliquam.js?tempus=justo&semper=etiam&est=pretium&quam=iaculis&pharetra=justo&magna=in&ac=hac&consequat=habitasse&metus=platea&sapien=dictumst&ut=etiam&nunc=faucibus&vestibulum=cursus&ante=urna&ipsum=ut&primis=tellus&in=nulla&faucibus=ut&orci=erat&luctus=id&et=mauris&ultrices=vulputate&posuere=elementum&cubilia=nullam&curae=varius&mauris=nulla&viverra=facilisi&diam=cras&vitae=non&quam=velit",
  },
  {
    _id: 19,
    stockNumber: 1870966762,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    productImgs: [
      "http://dummyimage.com/800x800.png/5fa2dd/ffffff",
      "http://dummyimage.com/799x800.png/5fa2dd/ffffff",
    ],
    marketPrice: 27.78,
    msrpPrice: 75.09,
    ratings: [
      {
        name: "Gabriella Chatain",
        text: "would not buy again",
        value: 1,
      },
      {
        name: "Isadora Meert",
        text: "Impressed with the fast shipping and packaging",
        value: 4,
      },
      {
        name: "Clyde Greenway",
        text: "So-so product",
        value: 5,
      },
      {
        name: "Pebrook Print",
        text: "So-so product",
        value: 5,
      },
    ],
    shape: "Radiant",
    color: "U",
    clarity: "I3",
    cut: "Good",
    weight: 7.6,
    fluorescence: "None",
    lab: "EGL",
    depth: 72.78,
    table: 79.18,
    polish: "Excellent",
    symmetry: "Very Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://utexas.edu/nascetur.js?amet=amet&eleifend=eleifend&pede=pede&libero=libero&quis=quis&orci=orci&nullam=nullam&molestie=molestie&nibh=nibh&in=in&lectus=lectus&pellentesque=pellentesque&at=at&nulla=nulla&suspendisse=suspendisse&potenti=potenti&cras=cras&in=in&purus=purus&eu=eu&magna=magna&vulputate=vulputate&luctus=luctus&cum=cum&sociis=sociis&natoque=natoque&penatibus=penatibus&et=et&magnis=magnis&dis=dis&parturient=parturient&montes=montes&nascetur=nascetur&ridiculus=ridiculus&mus=mus",
  },
  {
    _id: 20,
    stockNumber: 6656899703,
    title: "Dazzling Princess Cut Diamond Necklace with White Gold Chain",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    productImgs: [
      "http://dummyimage.com/799x800.png/ff4444/ffffff",
      "http://dummyimage.com/799x800.png/dddddd/000000",
    ],
    marketPrice: 70.61,
    msrpPrice: 49.59,
    ratings: [],
    shape: "Princess",
    color: "D",
    clarity: "SI1",
    cut: "Ideal",
    weight: 5.72,
    fluorescence: "Strong",
    lab: "EGL",
    depth: 8.67,
    table: 39.99,
    polish: "Fair",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://mayoclinic.com/lectus/in/quam/fringilla.jpg?vestibulum=diam&ante=erat&ipsum=fermentum&primis=justo&in=nec&faucibus=condimentum&orci=neque&luctus=sapien&et=placerat&ultrices=ante&posuere=nulla&cubilia=justo&curae=aliquam&mauris=quis&viverra=turpis&diam=eget&vitae=elit&quam=sodales&suspendisse=scelerisque&potenti=mauris&nullam=sit&porttitor=amet&lacus=eros&at=suspendisse&turpis=accumsan&donec=tortor&posuere=quis&metus=turpis&vitae=sed&ipsum=ante&aliquam=vivamus&non=tortor&mauris=duis&morbi=mattis&non=egestas&lectus=metus&aliquam=aenean&sit=fermentum&amet=donec&diam=ut&in=mauris&magna=eget&bibendum=massa&imperdiet=tempor&nullam=convallis&orci=nulla&pede=neque&venenatis=libero&non=convallis&sodales=eget&sed=eleifend&tincidunt=luctus&eu=ultricies&felis=eu&fusce=nibh&posuere=quisque&felis=id&sed=justo&lacus=sit&morbi=amet&sem=sapien&mauris=dignissim&laoreet=vestibulum&ut=vestibulum&rhoncus=ante&aliquet=ipsum&pulvinar=primis&sed=in&nisl=faucibus&nunc=orci&rhoncus=luctus&dui=et&vel=ultrices&sem=posuere&sed=cubilia&sagittis=curae&nam=nulla&congue=dapibus&risus=dolor&semper=vel&porta=est&volutpat=donec&quam=odio&pede=justo&lobortis=sollicitudin&ligula=ut&sit=suscipit&amet=a&eleifend=feugiat&pede=et&libero=eros&quis=vestibulum&orci=ac&nullam=est&molestie=lacinia&nibh=nisi&in=venenatis",
  },
  {
    _id: 21,
    stockNumber: 9216238014,
    title: "Luxurious Diamond Pendant Necklace with Sapphire Detailing",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    productImgs: [
      "http://dummyimage.com/799x800.png/cc0000/ffffff",
      "http://dummyimage.com/799x800.png/5fa2dd/ffffff",
    ],
    marketPrice: 98.65,
    msrpPrice: 19.72,
    ratings: [
      {
        name: "Ernestus Bielfelt",
        text: "exceeded my expectations",
        value: 5,
      },
      {
        name: "Odo Pedlow",
        text: "Best purchase I've made in a long time",
        value: 3,
      },
    ],
    shape: "Pear",
    color: "P",
    clarity: "SI2",
    cut: "Good",
    weight: 9.9,
    fluorescence: "Very Strong",
    lab: "HRD",
    depth: 39.3,
    table: 9.45,
    polish: "Poor",
    symmetry: "Excellent",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://topsy.com/metus/aenean/fermentum/donec/ut/mauris.jsp?suspendisse=iaculis&potenti=justo&cras=in&in=hac&purus=habitasse&eu=platea&magna=dictumst&vulputate=etiam&luctus=faucibus&cum=cursus&sociis=urna&natoque=ut",
  },
  {
    _id: 22,
    stockNumber: 6262396249,
    title: "Exquisite Round Cut Diamond Bracelet with Adjustable Clasp",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    productImgs: [
      "http://dummyimage.com/800x800.png/dddddd/000000",
      "http://dummyimage.com/800x800.png/dddddd/000000",
    ],
    marketPrice: 44.16,
    msrpPrice: 20.51,
    ratings: [
      {
        name: "Tobin Pinckney",
        text: "decent price",
        value: 1,
      },
      {
        name: "Nancy Fahrenbach",
        text: "Average quality",
        value: 4,
      },
      {
        name: "Cissiee Malicki",
        text: "So-so product",
        value: 3,
      },
      {
        name: "Elvis Etheredge",
        text: "Not worth the price",
        value: 1,
      },
      {
        name: "Danell Belhomme",
        text: "highly recommend!",
        value: 3,
      },
      {
        name: "Shaughn Craufurd",
        text: "So-so product",
        value: 4,
      },
      {
        name: "Sebastien Constantinou",
        text: "decent price",
        value: 4,
      },
    ],
    shape: "Round",
    color: "F",
    clarity: "I2",
    cut: "Poor",
    weight: 1.66,
    fluorescence: "None",
    lab: "GHI",
    depth: 57.63,
    table: 15.73,
    polish: "Fair",
    symmetry: "Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://walmart.com/ipsum/dolor/sit.js?et=pede&magnis=libero&dis=quis&parturient=orci&montes=nullam&nascetur=molestie&ridiculus=nibh&mus=in&etiam=lectus&vel=pellentesque&augue=at&vestibulum=nulla&rutrum=suspendisse&rutrum=potenti&neque=cras&aenean=in&auctor=purus&gravida=eu&sem=magna&praesent=vulputate&id=luctus&massa=cum&id=sociis&nisl=natoque&venenatis=penatibus&lacinia=et&aenean=magnis&sit=dis&amet=parturient&justo=montes&morbi=nascetur&ut=ridiculus&odio=mus&cras=vivamus&mi=vestibulum&pede=sagittis&malesuada=sapien&in=cum&imperdiet=sociis&et=natoque&commodo=penatibus&vulputate=et&justo=magnis&in=dis&blandit=parturient&ultrices=montes&enim=nascetur&lorem=ridiculus&ipsum=mus&dolor=etiam&sit=vel&amet=augue&consectetuer=vestibulum&adipiscing=rutrum&elit=rutrum&proin=neque&interdum=aenean&mauris=auctor&non=gravida&ligula=sem&pellentesque=praesent&ultrices=id&phasellus=massa&id=id&sapien=nisl&in=venenatis&sapien=lacinia&iaculis=aenean&congue=sit&vivamus=amet&metus=justo&arcu=morbi&adipiscing=ut&molestie=odio&hendrerit=cras&at=mi&vulputate=pede&vitae=malesuada",
  },
  {
    _id: 23,
    stockNumber: 1182245478,
    title:
      "Stunning Oval Diamond Cluster Earrings with Sterling Silver Setting",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    productImgs: ["http://dummyimage.com/799x800.png/5fa2dd/ffffff"],
    marketPrice: 31.49,
    msrpPrice: 22.35,
    ratings: [
      {
        name: "Uriah Sperski",
        text: "Impressed with the fast shipping and packaging",
        value: 1,
      },
      {
        name: "Christoper Atthow",
        text: "Excellent value for the money",
        value: 1,
      },
      {
        name: "Gillan Haddington",
        text: "exceeded my expectations",
        value: 1,
      },
      {
        name: "Tisha Vollam",
        text: "Not worth the price",
        value: 1,
      },
      {
        name: "Almire Doughton",
        text: "exceeded my expectations",
        value: 1,
      },
      {
        name: "Marty Ellcock",
        text: "highly recommend!",
        value: 2,
      },
      {
        name: "Gottfried Gaber",
        text: "Great product",
        value: 2,
      },
      {
        name: "Winifred Allwell",
        text: "Great product",
        value: 3,
      },
      {
        name: "Doreen Diamond",
        text: "very disappointed",
        value: 5,
      },
      {
        name: "Garvy Sheers",
        text: "Impressed with the fast shipping and packaging",
        value: 1,
      },
    ],
    shape: "Oval",
    color: "I",
    clarity: "VVS1",
    cut: "Very Good",
    weight: 2.88,
    fluorescence: "Medium",
    lab: "GIA",
    depth: 0.28,
    table: 79.43,
    polish: "Good",
    symmetry: "Poor",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://un.org/maecenas.js?magna=odio&ac=cras&consequat=mi&metus=pede&sapien=malesuada&ut=in&nunc=imperdiet&vestibulum=et&ante=commodo&ipsum=vulputate&primis=justo&in=in&faucibus=blandit&orci=ultrices&luctus=enim&et=lorem&ultrices=ipsum&posuere=dolor&cubilia=sit&curae=amet&mauris=consectetuer&viverra=adipiscing&diam=elit&vitae=proin&quam=interdum&suspendisse=mauris&potenti=non&nullam=ligula&porttitor=pellentesque&lacus=ultrices&at=phasellus&turpis=id&donec=sapien&posuere=in&metus=sapien&vitae=iaculis&ipsum=congue&aliquam=vivamus&non=metus&mauris=arcu&morbi=adipiscing&non=molestie&lectus=hendrerit&aliquam=at&sit=vulputate&amet=vitae&diam=nisl&in=aenean&magna=lectus&bibendum=pellentesque&imperdiet=eget&nullam=nunc&orci=donec&pede=quis&venenatis=orci&non=eget&sodales=orci&sed=vehicula&tincidunt=condimentum&eu=curabitur&felis=in&fusce=libero&posuere=ut&felis=massa&sed=volutpat&lacus=convallis&morbi=morbi&sem=odio&mauris=odio&laoreet=elementum&ut=eu&rhoncus=interdum&aliquet=eu&pulvinar=tincidunt&sed=in&nisl=leo&nunc=maecenas&rhoncus=pulvinar&dui=lobortis&vel=est&sem=phasellus&sed=sit&sagittis=amet&nam=erat&congue=nulla&risus=tempus&semper=vivamus&porta=in&volutpat=felis&quam=eu",
  },
  {
    _id: 24,
    stockNumber: 7342419745,
    title: "Dazzling Princess Cut Diamond Necklace with White Gold Chain",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    productImgs: ["http://dummyimage.com/800x800.png/dddddd/000000"],
    marketPrice: 10.03,
    msrpPrice: 52.81,
    ratings: [
      {
        name: "Dorelle Perago",
        text: "Best purchase I've made in a long time",
        value: 5,
      },
      {
        name: "Shirley Basnall",
        text: "very disappointed",
        value: 2,
      },
      {
        name: "Ximenes Domenichini",
        text: "Impressed with the fast shipping and packaging",
        value: 4,
      },
      {
        name: "Tiebold Quarless",
        text: "Not worth the price",
        value: 5,
      },
      {
        name: "Maurita Grinyakin",
        text: "Impressed with the fast shipping and packaging",
        value: 3,
      },
      {
        name: "Samuele Schimmang",
        text: "decent price",
        value: 2,
      },
      {
        name: "Karney Chesley",
        text: "wouldn't buy again",
        value: 2,
      },
      {
        name: "Loise Seleway",
        text: "highly recommend!",
        value: 5,
      },
    ],
    shape: "Princess",
    color: "D",
    clarity: "I1",
    cut: "Ideal",
    weight: 3.04,
    fluorescence: "Strong",
    lab: "IGI",
    depth: 34.31,
    table: 13.79,
    polish: "Good",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://spiegel.de/laoreet/ut/rhoncus/aliquet.aspx?dis=sollicitudin&parturient=mi&montes=sit&nascetur=amet&ridiculus=lobortis&mus=sapien&vivamus=sapien&vestibulum=non&sagittis=mi&sapien=integer&cum=ac&sociis=neque&natoque=duis&penatibus=bibendum&et=morbi&magnis=non&dis=quam&parturient=nec&montes=dui&nascetur=luctus&ridiculus=rutrum&mus=nulla&etiam=tellus&vel=in&augue=sagittis&vestibulum=dui&rutrum=vel&rutrum=nisl&neque=duis&aenean=ac&auctor=nibh&gravida=fusce&sem=lacus&praesent=purus&id=aliquet&massa=at&id=feugiat&nisl=non&venenatis=pretium&lacinia=quis&aenean=lectus&sit=suspendisse&amet=potenti&justo=in&morbi=eleifend&ut=quam&odio=a&cras=odio&mi=in&pede=hac&malesuada=habitasse&in=platea&imperdiet=dictumst&et=maecenas&commodo=ut&vulputate=massa&justo=quis&in=augue&blandit=luctus&ultrices=tincidunt&enim=nulla&lorem=mollis&ipsum=molestie&dolor=lorem&sit=quisque&amet=ut&consectetuer=erat&adipiscing=curabitur&elit=gravida&proin=nisi&interdum=at&mauris=nibh&non=in&ligula=hac&pellentesque=habitasse&ultrices=platea&phasellus=dictumst&id=aliquam&sapien=augue&in=quam&sapien=sollicitudin&iaculis=vitae&congue=consectetuer&vivamus=eget&metus=rutrum&arcu=at&adipiscing=lorem&molestie=integer",
  },
  {
    _id: 25,
    stockNumber: 2344190620,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    productImgs: [
      "http://dummyimage.com/800x800.png/ff4444/ffffff",
      "http://dummyimage.com/800x800.png/5fa2dd/ffffff",
    ],
    marketPrice: 61.61,
    msrpPrice: 57.81,
    ratings: [
      {
        name: "Shem Alebrooke",
        text: "Impressed with the fast shipping and packaging",
        value: 1,
      },
      {
        name: "Donielle Allridge",
        text: "very disappointed",
        value: 1,
      },
      {
        name: "Vail Haysom",
        text: "highly recommend!",
        value: 3,
      },
      {
        name: "Elke Ibbott",
        text: "wouldn't buy again",
        value: 4,
      },
      {
        name: "Armando Oldland",
        text: "So-so product",
        value: 5,
      },
      {
        name: "Erich Disney",
        text: "would not buy again",
        value: 1,
      },
      {
        name: "Ephraim Ogles",
        text: "decent price",
        value: 4,
      },
      {
        name: "Rutherford Trippick",
        text: "Best purchase I've made in a long time",
        value: 5,
      },
    ],
    shape: "Pear",
    color: "F",
    clarity: "VS1",
    cut: "Fair",
    weight: 10.32,
    fluorescence: "Very Strong",
    lab: "GHI",
    depth: 78.32,
    table: 74.31,
    polish: "Fair",
    symmetry: "Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://vimeo.com/interdum.html?tortor=id&quis=lobortis&turpis=convallis&sed=tortor&ante=risus&vivamus=dapibus&tortor=augue&duis=vel&mattis=accumsan&egestas=tellus&metus=nisi&aenean=eu&fermentum=orci&donec=mauris&ut=lacinia&mauris=sapien&eget=quis&massa=libero&tempor=nullam&convallis=sit&nulla=amet&neque=turpis&libero=elementum&convallis=ligula&eget=vehicula&eleifend=consequat&luctus=morbi&ultricies=a&eu=ipsum&nibh=integer&quisque=a&id=nibh&justo=in&sit=quis&amet=justo&sapien=maecenas&dignissim=rhoncus&vestibulum=aliquam&vestibulum=lacus&ante=morbi&ipsum=quis&primis=tortor&in=id&faucibus=nulla&orci=ultrices&luctus=aliquet&et=maecenas&ultrices=leo&posuere=odio&cubilia=condimentum&curae=id&nulla=luctus&dapibus=nec&dolor=molestie&vel=sed&est=justo",
  },
  {
    _id: 26,
    stockNumber: 2607186124,
    title: "Gorgeous Marquise Cut Diamond Engagement Ring in Yellow Gold",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    productImgs: ["http://dummyimage.com/799x800.png/dddddd/000000"],
    marketPrice: 52.67,
    msrpPrice: 23.03,
    ratings: [
      {
        name: "Zaria Davidek",
        text: "Not worth the price",
        value: 5,
      },
      {
        name: "Elisha Joiner",
        text: "Not worth the price",
        value: 5,
      },
      {
        name: "Grayce Pessler",
        text: "Not worth the price",
        value: 5,
      },
      {
        name: "Maisie Datte",
        text: "would not buy again",
        value: 3,
      },
      {
        name: "Robbi Bauer",
        text: "would not buy again",
        value: 1,
      },
      {
        name: "Ashbey Wawer",
        text: "highly recommend!",
        value: 5,
      },
    ],
    shape: "Asscher",
    color: "H",
    clarity: "VVS2",
    cut: "Very Good",
    weight: 1.93,
    fluorescence: "Faint",
    lab: "GIA",
    depth: 11.26,
    table: 66.04,
    polish: "Excellent",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://alexa.com/ligula/pellentesque/ultrices/phasellus.jpg?vestibulum=justo&ante=morbi&ipsum=ut&primis=odio&in=cras&faucibus=mi&orci=pede&luctus=malesuada&et=in&ultrices=imperdiet&posuere=et&cubilia=commodo&curae=vulputate&duis=justo&faucibus=in&accumsan=blandit&odio=ultrices&curabitur=enim&convallis=lorem&duis=ipsum&consequat=dolor&dui=sit&nec=amet&nisi=consectetuer&volutpat=adipiscing&eleifend=elit&donec=proin&ut=interdum&dolor=mauris&morbi=non&vel=ligula&lectus=pellentesque&in=ultrices&quam=phasellus&fringilla=id&rhoncus=sapien&mauris=in&enim=sapien&leo=iaculis&rhoncus=congue&sed=vivamus&vestibulum=metus&sit=arcu&amet=adipiscing&cursus=molestie&id=hendrerit&turpis=at&integer=vulputate&aliquet=vitae&massa=nisl&id=aenean&lobortis=lectus&convallis=pellentesque&tortor=eget&risus=nunc&dapibus=donec",
  },
  {
    _id: 27,
    stockNumber: 5370068509,
    title: "Sparkling Diamond Ring with Emerald Accents and Platinum Band",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    productImgs: ["http://dummyimage.com/799x800.png/dddddd/000000"],
    marketPrice: 91.1,
    msrpPrice: 76.92,
    ratings: [
      {
        name: "Theresina Baseggio",
        text: "So-so product",
        value: 4,
      },
      {
        name: "Coletta Szymanowski",
        text: "Average quality",
        value: 3,
      },
      {
        name: "Ash Mowle",
        text: "wouldn't buy again",
        value: 1,
      },
    ],
    shape: "Emerald",
    color: "G",
    clarity: "I2",
    cut: "Excellent",
    weight: 1.89,
    fluorescence: "Faint",
    lab: "GCAL",
    depth: 54.94,
    table: 4.83,
    polish: "Excellent",
    symmetry: "Excellent",
    stoneType: "Natural",
    certificateDocumentImg:
      "http://t.co/mattis/egestas/metus/aenean.jsp?vitae=morbi&ipsum=vel&aliquam=lectus&non=in&mauris=quam&morbi=fringilla&non=rhoncus&lectus=mauris&aliquam=enim&sit=leo&amet=rhoncus&diam=sed&in=vestibulum&magna=sit&bibendum=amet&imperdiet=cursus&nullam=id&orci=turpis&pede=integer&venenatis=aliquet&non=massa&sodales=id&sed=lobortis&tincidunt=convallis&eu=tortor&felis=risus&fusce=dapibus&posuere=augue&felis=vel&sed=accumsan&lacus=tellus&morbi=nisi&sem=eu&mauris=orci&laoreet=mauris&ut=lacinia&rhoncus=sapien&aliquet=quis&pulvinar=libero",
  },
  {
    _id: 28,
    stockNumber: 7449144543,
    title: "Exquisite Round Cut Diamond Bracelet with Adjustable Clasp",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    productImgs: ["http://dummyimage.com/800x800.png/ff4444/ffffff"],
    marketPrice: 73.41,
    msrpPrice: 91.4,
    ratings: [
      {
        name: "Melina Brogi",
        text: "exceeded my expectations",
        value: 4,
      },
      {
        name: "Gussy Espadate",
        text: "Excellent value for the money",
        value: 5,
      },
      {
        name: "Molly MacMickan",
        text: "highly recommend!",
        value: 3,
      },
      {
        name: "Quint Crumbleholme",
        text: "Not worth the price",
        value: 2,
      },
    ],
    shape: "Heart",
    color: "Q",
    clarity: "FL",
    cut: "Fair",
    weight: 4.43,
    fluorescence: "None",
    lab: "GRS",
    depth: 60.13,
    table: 38.31,
    polish: "Poor",
    symmetry: "Fair",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://vistaprint.com/ut/dolor/morbi/vel/lectus/in/quam.jpg?nullam=sed&orci=tristique&pede=in&venenatis=tempus&non=sit&sodales=amet&sed=sem&tincidunt=fusce&eu=consequat&felis=nulla&fusce=nisl&posuere=nunc&felis=nisl&sed=duis&lacus=bibendum&morbi=felis&sem=sed&mauris=interdum&laoreet=venenatis&ut=turpis&rhoncus=enim",
  },
  {
    _id: 29,
    stockNumber: 8157333118,
    title:
      "Stunning Oval Diamond Cluster Earrings with Sterling Silver Setting",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    productImgs: ["http://dummyimage.com/800x800.png/dddddd/000000"],
    marketPrice: 81.2,
    msrpPrice: 75.52,
    ratings: [],
    shape: "Cushion",
    color: "Y",
    clarity: "VVS2",
    cut: "Poor",
    weight: 0.24,
    fluorescence: "None",
    lab: "AGS",
    depth: 16.03,
    table: 79.88,
    polish: "Poor",
    symmetry: "Good",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://mayoclinic.com/odio/curabitur/convallis.html?tempus=hac&semper=habitasse&est=platea&quam=dictumst&pharetra=aliquam&magna=augue&ac=quam&consequat=sollicitudin&metus=vitae&sapien=consectetuer&ut=eget&nunc=rutrum&vestibulum=at&ante=lorem&ipsum=integer&primis=tincidunt&in=ante&faucibus=vel&orci=ipsum&luctus=praesent&et=blandit&ultrices=lacinia&posuere=erat&cubilia=vestibulum&curae=sed&mauris=magna&viverra=at&diam=nunc&vitae=commodo&quam=placerat",
  },
  {
    _id: 30,
    stockNumber: 6557047064,
    title:
      "Stunning Oval Diamond Cluster Earrings with Sterling Silver Setting",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    productImgs: [
      "http://dummyimage.com/800x800.png/ff4444/ffffff",
      "http://dummyimage.com/800x800.png/ff4444/ffffff",
    ],
    marketPrice: 60.19,
    msrpPrice: 74.17,
    ratings: [],
    shape: "Radiant",
    color: "E",
    clarity: "I2",
    cut: "Very Good",
    weight: 1.63,
    fluorescence: "Very Strong",
    lab: "GHI",
    depth: 38.94,
    table: 59.31,
    polish: "Poor",
    symmetry: "Excellent",
    stoneType: "Natural",
    certificateDocumentImg:
      "https://quantcast.com/nascetur.js?vestibulum=lacinia&sit=sapien&amet=quis&cursus=libero&id=nullam&turpis=sit&integer=amet&aliquet=turpis&massa=elementum&id=ligula&lobortis=vehicula&convallis=consequat&tortor=morbi&risus=a&dapibus=ipsum&augue=integer&vel=a&accumsan=nibh&tellus=in&nisi=quis&eu=justo&orci=maecenas&mauris=rhoncus&lacinia=aliquam&sapien=lacus&quis=morbi&libero=quis&nullam=tortor&sit=id&amet=nulla&turpis=ultrices&elementum=aliquet&ligula=maecenas&vehicula=leo&consequat=odio&morbi=condimentum&a=id&ipsum=luctus&integer=nec&a=molestie&nibh=sed&in=justo&quis=pellentesque&justo=viverra&maecenas=pede&rhoncus=ac&aliquam=diam&lacus=cras&morbi=pellentesque&quis=volutpat&tortor=dui&id=maecenas&nulla=tristique&ultrices=est&aliquet=et&maecenas=tempus&leo=semper&odio=est&condimentum=quam&id=pharetra&luctus=magna&nec=ac&molestie=consequat&sed=metus&justo=sapien&pellentesque=ut&viverra=nunc&pede=vestibulum&ac=ante&diam=ipsum&cras=primis&pellentesque=in&volutpat=faucibus&dui=orci&maecenas=luctus&tristique=et&est=ultrices&et=posuere&tempus=cubilia&semper=curae&est=mauris&quam=viverra&pharetra=diam&magna=vitae&ac=quam&consequat=suspendisse&metus=potenti&sapien=nullam&ut=porttitor&nunc=lacus&vestibulum=at&ante=turpis&ipsum=donec&primis=posuere&in=metus",
  },
];

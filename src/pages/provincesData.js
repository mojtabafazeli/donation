export const fields = [
  {
    id: 0,
    label: "هر زمینه",
    name: "any",
  },
  {
    id: 1,
    label: "بهداشت",
    name: "health",
  },
  {
    id: 2,
    label: "آموزش",
    name: "education",
  },
  {
    id: 3,
    label: "سرپرستی",
    name: "patronage",
  },
];

export const activeProvinces = [
  "any",
  "yazd",
  "east-azerbaijan",
  "west-azerbaijan",
  "kurdistan",
];

export const provinces = [
  {
    label: "هر کجا",
    name: "any",
    id: 0,
    active: true,
    fields: [0, 1, 2, 3],
  },
  {
    label: "آذربايجان شرقی",
    name: "east-azerbaijan",
    center: "تبریز",
    latitude: "38.50",
    longitude: "46.180",
    id: 1,
    active: true,
    fields: [0, 1],
  },
  {
    label: "آذربايجان غربی",
    name: "west-azerbaijan",
    center: "ارومیه",
    latitude: "37.320",
    longitude: "45.40",
    id: 2,
    active: true,
    fields: [0, 1],
  },
  {
    label: "اردبيل",
    name: "ardabil",
    center: "اردبیل",
    latitude: "38.140",
    longitude: "48.170",
    id: 3,
    active: true,
    fields: [0, 1],
  },
  {
    label: "اصفهان",
    name: "isfahan",
    center: "اصفهان",
    latitude: "32.390",
    longitude: "51.400",
    id: 4,
    active: true,
    fields: [0],
  },
  {
    label: "ايلام",
    name: "ilam",
    center: "ايلام",
    latitude: "33.380",
    longitude: "46.250",
    id: 5,
    active: true,
    fields: [0],
  },
  {
    label: "بوشهر",
    name: "bushehr",
    center: "بوشهر",
    latitude: "28.590",
    longitude: "50.500",
    id: 6,
    active: true,
    fields: [0],
  },
  {
    label: "تهران",
    name: "tehran",
    center: "تهران",
    latitude: "35.410",
    longitude: "51.240",
    id: 7,
    active: true,
    fields: [0],
  },
  {
    label: "چهارمحال بختیاری",
    name: "chaharmahal-and-bakhtiari",
    center: "شهركرد",
    latitude: "32.190",
    longitude: "50.510",
    id: 8,
    active: true,
    fields: [0],
  },
  {
    label: "خراسان جنوبی",
    name: "south-khorasan",
    center: "بيرجند",
    latitude: "32.5216",
    longitude: "59.1315",
    id: 9,
    active: true,
    fields: [0],
  },
  {
    label: "خراسان رضوی",
    name: "razavi-khorasan",
    center: "مشهد",
    latitude: "36.170",
    longitude: "59.350",
    id: 10,
    active: true,
    fields: [0],
  },
  {
    label: "خراسان شمالی",
    name: "north-khorasan",
    center: "بجنورد",
    latitude: "37.2835",
    longitude: "57.1954",
    id: 11,
    active: true,
    fields: [0],
  },
  {
    label: "خوزستان",
    name: "khuzestan",
    center: "اهواز",
    latitude: "31.190",
    longitude: "48.410",
    id: 12,
    active: true,
    fields: [0],
  },
  {
    label: "زنجان",
    name: "zanjan",
    center: "زنجان",
    latitude: "36.400",
    longitude: "48.290",
    id: 13,
    active: true,
    fields: [0],
  },
  {
    label: "سمنان",
    name: "semnan",
    center: "سمنان",
    latitude: "35.340",
    longitude: "53.230",
    id: 14,
    active: true,
    fields: [0],
  },
  {
    label: "سيستان و بلوچستان",
    name: "sistan-and-baluchestan",
    center: "زاهدان",
    latitude: "29.320",
    longitude: "60.540",
    id: 15,
    active: true,
    fields: [0],
  },
  {
    label: "فارس",
    name: "fars",
    center: "شيراز",
    latitude: "29.360",
    longitude: "52.310",
    id: 16,
    active: true,
    fields: [0],
  },
  {
    label: "قزوين",
    name: "qazvin",
    center: "قزوين",
    latitude: "36.167",
    longitude: "50.010",
    id: 17,
    active: true,
    fields: [0],
  },
  {
    label: "قم",
    name: "qom",
    center: "قم",
    latitude: "34.380",
    longitude: "50.530",
    id: 18,
    active: true,
    fields: [0],
  },
  {
    label: "البرز",
    name: "alborz",
    center: "کرج",
    latitude: "35.8400",
    longitude: "50.9391",
    id: 19,
    active: true,
    fields: [0],
  },
  {
    label: "كردستان",
    name: "kurdistan",
    center: "سنندج",
    latitude: "35.180",
    longitude: "47.10",
    id: 20,
    active: true,
    fields: [0],
  },
  {
    label: "کرمان",
    name: "kerman",
    center: "کرمان",
    latitude: "30.160",
    longitude: "57.40",
    id: 21,
    active: true,
    fields: [0],
  },
  {
    label: "كرمانشاه",
    name: "kermanshah",
    center: "كرمانشاه",
    latitude: "34.180",
    longitude: "47.30",
    id: 22,
    active: true,
    fields: [0],
  },
  {
    label: "كهكيلويه و بويراحمد",
    name: "kohgiluhey-and-boyer-ahmad",
    center: "ياسوج",
    latitude: "30.390",
    longitude: "51.350",
    id: 23,
    active: true,
    fields: [0],
  },
  {
    label: "گلستان",
    name: "golestan",
    center: "گرگان",
    latitude: "36.500",
    longitude: "54.250",
    id: 24,
    active: true,
    fields: [0],
  },
  {
    label: "گيلان",
    name: "gilan",
    center: "رشت",
    latitude: "37.160",
    longitude: "49.350",
    id: 25,
    active: true,
    fields: [0],
  },
  {
    label: "لرستان",
    name: "lorestan",
    center: "خرم آباد",
    latitude: "33.290",
    longitude: "48.210",
    id: 26,
    active: true,
    fields: [0],
  },
  {
    label: "مازندران",
    name: "mazandaran",
    center: "ساري",
    latitude: "36.330",
    longitude: "53.30",
    id: 27,
    active: true,
    fields: [0],
  },
  {
    label: "مرکزی",
    name: "markazi",
    center: "اراک",
    latitude: "34.50",
    longitude: "49.410",
    id: 28,
    active: true,
    fields: [0],
  },
  {
    label: "هرمزگان",
    name: "hormozgan",
    center: "بندرعباس",
    latitude: "56.266",
    longitude: "27.18",
    id: 29,
    active: true,
    fields: [0],
  },
  {
    label: "همدان",
    name: "hamadan",
    center: "همدان",
    latitude: "34.470",
    longitude: "48.300",
    id: 30,
    active: true,
    fields: [0],
  },
  {
    label: "يزد",
    name: "yazd",
    center: "يزد",
    latitude: "31.530",
    longitude: "54.210",
    id: 31,
    active: true,
    fields: [0],
  },
];

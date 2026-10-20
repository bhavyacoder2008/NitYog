import image from '../assets/machineGun.jpeg'

// keywords are extra search terms a parent might type that are NOT already in
// the product name. Universal words like "kids", "children" and "gift" are
// deliberately absent: they would repeat across every product and match
// everything, so they add nothing a name-based search does not already cover.
export const products = [
  {
    id: 1,
    name: "Talking Tom Cat",
    description:
      "A grey cartoon cat toy shown in its Talking Cat box. A character toy for pretend play and for children who enjoy cat toys.",
    price: 229,
    image:
      "https://images.meesho.com/images/products/459507709/yf29b_512.avif?width=360",
    keywords: [
      "talking cat",
      "talking tom",
      "grey cat",
      "cartoon cat",
      "cat figure",
      "interactive cat",
      "sound toy",
      "character toy",
    ],
  },
  {
    id: 2,
    name: "Doll House Playset",
    description:
      "A pink dollhouse playset with several rooms, a small doll, and miniature furniture and accessories pictured in the box. Made for dollhouse stories and pretend home play.",
    price: 275,
    image:
      "https://images.meesho.com/images/products/457023876/d68bn_512.avif?width=360",
    keywords: [
      "doll house",
      "dollhouse playset",
      "pink dollhouse",
      "miniature house",
      "doll furniture",
      "doll accessories",
      "pretend home",
      "role play house",
      "doll room",
    ],
  },
  {
    id: 3,
    name: "Naruto Playing cards",
    description:
      "A bundle of Naruto-themed playing cards shown in individual illustrated packs. For anime fans who want a character-themed deck for card games or collecting.",
    price: 101,
    image:
      "https://images.meesho.com/images/products/534786365/wkwng_512.avif?width=360",
    keywords: [
      "naruto cards",
      "naruto playing cards",
      "anime cards",
      "ninja cards",
      "character cards",
      "playing card deck",
      "card game",
      "anime collection",
    ],
  },
  {
    id: 4,
    name: "E-Rikshaw Toy",
    description:
      "A colourful blue and yellow three-wheeled e-rickshaw model with a driver figure pictured at the controls. A miniature vehicle for pretend journeys and toy vehicle collections.",
    price: 209,
    image:
      "https://images.meesho.com/images/products/448248426/9qhjp_512.avif?width=360",
    keywords: [
      "e rickshaw",
      "electric rickshaw model",
      "auto rickshaw toy",
      "three wheeler",
      "tuk tuk toy",
      "blue auto",
      "mini vehicle",
      "city transport toy",
    ],
  },
  {
    id: 6,
    name: "Ambassador Car Toy",
    description:
      "A white model of the classic Ambassador sedan, pictured with opening doors. A miniature car for pretend drives or a model vehicle collection.",
    price: 209,
    image:
      "https://images.meesho.com/images/products/448156958/fd05d_512.avif?width=360",
    keywords: [
      "ambassador model car",
      "Hindustan Ambassador toy",
      "white sedan model",
      "classic Indian car",
      "vintage model car",
      "miniature sedan",
      "opening door car",
      "die cast style car",
    ],
  },
  {
    id: 7,
    name: "Fun Book Toy",
    description:
      "An illustrated electronic learning book with colourful pages and buttons, shown with learning themes on the cover. A book-style activity toy for exploring early learning topics.",
    price: 249,
    image:
      "https://images.meesho.com/images/products/447711418/v7ayk_512.avif?width=360",
    keywords: [
      "electronic learning book",
      "interactive activity book",
      "children's learning book",
      "educational book toy",
      "talking book",
      "sound book",
      "early learning activity",
      "picture book toy",
    ],
  },
  {
    id: 8,
    name: "Mini Truck Toy",
    description:
      "A blue miniature cargo truck with a detailed covered load, pictured beside a hand for scale. A toy lorry for pretend deliveries and vehicle collections.",
    price: 319,
    image:
      "https://images.meesho.com/images/products/486033470/kyizf_512.avif?width=360",
    keywords: [
      "mini cargo truck",
      "blue toy truck",
      "lorry model",
      "delivery truck toy",
      "covered truck",
      "miniature vehicle",
      "transport vehicle toy",
      "truck model",
    ],
  },
  {
    id: 9,
    name: "VIP car toy",
    description:
      "A white classic-style sedan model with dark windows, shown from the side and rear. A miniature car for pretend road trips or collecting.",
    price: 209,
    image:
      "https://images.meesho.com/images/products/704543710/ao4uc_512.avif?width=360",
    keywords: [
      "white model car",
      "classic sedan toy",
      "miniature sedan",
      "vintage style car",
      "die cast style car",
      "small vehicle model",
      "car collection",
      "toy automobile",
    ],
  },
  {
    id: 10,
    name: "Avengers Action Figures",
    description:
      "A boxed set of Avengers character figures pictured together in superhero costumes. For imaginative superhero scenes or adding Marvel characters to a toy collection.",
    price: 199,
    image:
      "https://images.meesho.com/images/products/438112039/woqgl_512.avif?width=360",
    keywords: [
      "avengers figures",
      "marvel action figures",
      "superhero figure set",
      "boxed character figures",
      "hero toys",
      "superhero toys",
      "avengers collection",
      "character toy set",
    ],
  },
  {
    id: 12,
    name: "Laser Light",
    description:
      "A green laser-style handheld light shown in retail packaging with batteries pictured. Check with NitYog for product details before use.",
    price: 75,
    image:
      "https://images.meesho.com/images/products/449413603/ucykh_512.avif?width=360",
    keywords: [
      "green laser pointer",
      "laser light toy",
      "handheld laser",
      "laser torch",
      "green beam light",
      "battery laser pointer",
      "pointer light",
    ],
  },
  {
    id: 13,
    name: "Pizza and burger Toy",
    description:
      "A pretend food set pictured with toy pizza and burger pieces, colourful play food, cups, and utensils on a tray. For make-believe kitchen and restaurant games.",
    price: 209,
    image:
      "https://images.meesho.com/images/products/589459688/o4hoo_512.avif?width=360",
    keywords: [
      "pizza toy food",
      "burger playset",
      "pretend food set",
      "play kitchen set",
      "restaurant role play",
      "toy cups and utensils",
      "food tray toy",
      "pretend cooking game",
    ],
  },
  {
    id: 14,
    name: "Pull-Back Sports Car",
    description:
      "A blue miniature car with a rounded, classic body, pictured on a display surface. A small model vehicle for pretend drives and car collections.",
    price: 349,
    image:
      "https://images.meesho.com/images/products/599385868/kmujv_512.avif?width=360",
    keywords: [
      "blue model car",
      "classic style toy car",
      "miniature car",
      "small vehicle model",
      "car collection",
      "toy automobile",
      "die cast style vehicle",
      "sports car toy",
    ],
  },
  {
    id: 15,
    name: "Strike gun Toy",
    description:
      "A set of brightly coloured toy blasters pictured in blue and yellow. For pretend action games and imaginative adventure play.",
    price: 209,
    image: "https://images.meesho.com/images/products/454729992/w2pjc_512.avif?width=360",
    keywords: [
      "toy blaster set",
      "toy guns",
      "blue toy gun",
      "yellow toy gun",
      "pretend action toy",
      "adventure role play",
      "toy pistol set",
      "blaster toys",
    ],
  },
    {
    id: 16,
    name: "Machine gun Toy",
    description:
      "A black toy machine gun with green and orange details, a scope, and a display of boxed units pictured. A pretend-play prop for action-themed stories.",
    price: 375,
    image,
    keywords: [
      "toy machine gun",
      "machinegun toy",
      "black toy rifle",
      "toy gun with scope",
      "pretend weapon toy",
      "action role play",
      "military style toy",
      "toy blaster",
    ],
  },
  {
    id: 17,
    name: "Fruit playset with Tray",
    description:
      "A colourful pretend-food set arranged on a green serving tray, with small food pieces and play utensils pictured. For serving, sharing, and pretend kitchen games.",
    price: 199,
    image:
      "https://images.meesho.com/images/products/456400515/7zxak_512.avif?width=360",
    keywords: [
      "fruit playset",
      "pretend fruit tray",
      "play food set",
      "toy fruit pieces",
      "serving tray toy",
      "pretend kitchen food",
      "food role play",
      "play utensils",
    ],
  },
  {
    id: 18,
    name: "Rainbow Rings",
    description:
      "Brightly coloured rainbow stacking rings pictured in short stacks. A simple stacking toy for building, sorting colours, and free-play activities.",
    price: 79,
    image:
      "https://images.meesho.com/images/products/445822477/o8eo3_512.avif?width=360",
    keywords: [
      "rainbow rings",
      "stacking rings",
      "rainbow stacking toy",
      "colour sorting toy",
      "color sorting toy",
      "stacking game",
      "bright ring stacker",
      "stackable rings",
    ],
  },
  {
    id: 19,
    name: "Monkey Toy",
    description:
      "A colourful monkey character toy shown with clapping hands and sound cues in the picture. The image presents it as a sound-responsive playmate for interactive play.",
    price: 209,
    image:
      "https://images.meesho.com/images/products/454654453/dbndz_512.avif?width=360",
    keywords: [
      "clapping monkey toy",
      "interactive monkey",
      "sound responsive toy",
      "monkey character toy",
      "monkey with cymbals",
      "music monkey toy",
      "colourful animal toy",
      "clap activated toy",
    ],
  },
  {
    id: 20,
    name: "Speed Train",
    description:
      "A white and blue high-speed train shown with its retail box. A miniature train for railway-themed pretend play and train collections.",
    price: 219,
    image:
      "https://images.meesho.com/images/products/1080089241/eop8m_512.avif?width=360",
    keywords: [
      "toy train",
      "speed train toy",
      "bullet train model",
      "high speed train",
      "blue and white train",
      "railway toy",
      "train model",
      "locomotive toy",
    ],
  },
  {
    id: 21,
    name: "Cap baby crawling toy",
    description:
      "A crawling baby character wearing a yellow cap and holding a green ball, as pictured. A baby-themed toy for imaginative play and character collections.",
    price: 219,
    image:
      "https://images.meesho.com/images/products/438125882/8rjll_512.avif?width=360",
    keywords: [
      "crawling baby toy",
      "baby character figure",
      "baby doll with ball",
      "yellow cap baby",
      "crawling figure",
      "baby pretend play",
      "baby themed toy",
      "small character toy",
    ],
  },
  {
    id: 22,
    name: "Bath duck",
    description:
      "A group of small yellow duck toys pictured together. A cheerful duck-themed choice for bath-time play or a small animal toy collection.",
    price: 199,
    image:
      "https://images.meesho.com/images/products/439383684/lf1uc_512.avif?width=360",
    keywords: [
      "bath duck toy",
      "yellow duck toys",
      "rubber duck style",
      "duckling figures",
      "bath time toy",
      "duck animal toy",
      "yellow bath toys",
      "duck collection",
    ],
  },
  {
    id: 23,
    name: "Avenger Cars",
    description:
      "A boxed set of three colourful toy cars with Avengers branding pictured on the package. For superhero-themed car play or adding character vehicles to a collection.",
    price: 199,
    image:
      "https://images.meesho.com/images/products/589064780/l5kds_512.avif?width=360",
    keywords: [
      "avengers cars",
      "superhero toy cars",
      "marvel car set",
      "three toy cars",
      "boxed car set",
      "die cast style cars",
      "character vehicles",
      "avengers vehicle toys",
    ],
  },
];

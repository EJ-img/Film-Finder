// Film Finder - Sample Data

const MOVIES = [
  {
    id: 1,
    title: "Breakfast at Tiffany's",
    year: 1961,
    genre: "Romance",
    rating: 8.0,
    description:
      "A young New York socialite becomes interested in a young man who has moved into her apartment building.",
    poster: "🎭",
    posterColor: "#2c1a4e",
    director: "Blake Edwards",
    starring: ["Audrey Hepburn", "George Peppard"],
    itemIds: [1, 2, 3],
  },
  {
    id: 2,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Thriller",
    rating: 8.9,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of bandits intertwine in four tales of violence and redemption.",
    poster: "💼",
    posterColor: "#1a1a2e",
    director: "Quentin Tarantino",
    starring: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    itemIds: [4, 5, 6],
  },
  {
    id: 3,
    title: "The Devil Wears Prada",
    year: 2006,
    genre: "Comedy",
    rating: 6.9,
    description:
      "A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.",
    poster: "👗",
    posterColor: "#0d2137",
    director: "David Frankel",
    starring: ["Meryl Streep", "Anne Hathaway", "Emily Blunt"],
    itemIds: [7, 8, 9],
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster: "💊",
    posterColor: "#0a1628",
    director: "The Wachowskis",
    starring: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    itemIds: [10, 11, 12],
  },
  {
    id: 5,
    title: "Clueless",
    year: 1995,
    genre: "Comedy",
    rating: 6.8,
    description:
      "Shallow, rich, and socially successful Cher is at the top of her Beverly Hills high school's social pecking order.",
    poster: "👛",
    posterColor: "#ff69b4",
    director: "Amy Heckerling",
    starring: ["Alicia Silverstone", "Stacey Dash", "Brittany Murphy"],
    itemIds: [13, 14, 15],
  },
  {
    id: 6,
    title: "James Bond: Goldfinger",
    year: 1964,
    genre: "Action",
    rating: 7.7,
    description:
      "James Bond investigates the gold smuggling activities of Auric Goldfinger, who has a mad scheme for world domination.",
    poster: "🔫",
    posterColor: "#1c1c1c",
    director: "Guy Hamilton",
    starring: ["Sean Connery", "Gert Fröbe", "Honor Blackman"],
    itemIds: [16, 17, 18],
  },
  {
    id: 7,
    title: "Grease",
    year: 1978,
    genre: "Romance",
    rating: 7.2,
    description:
      "Good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly end up at the same school, will they be able to rekindle their romance?",
    poster: "🎙️",
    posterColor: "#1a0a2e",
    director: "Randal Kleiser",
    starring: ["John Travolta", "Olivia Newton-John"],
    itemIds: [19, 20, 21],
  },
  {
    id: 8,
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi",
    rating: 8.0,
    description:
      "Young Blade Runner K discovers a long-buried secret that leads him to track down former Blade Runner Rick Deckard.",
    poster: "🤖",
    posterColor: "#0b0c10",
    director: "Denis Villeneuve",
    starring: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    itemIds: [22, 23, 24],
  },
];

const ITEMS = [
  // Breakfast at Tiffany's items
  {
    id: 1,
    movieId: 1,
    name: "Little Black Dress",
    type: "Clothing",
    price: 189.99,
    originalPrice: 249.99,
    character: "Holly Golightly",
    scene: "Opening Tiffany's scene",
    description:
      "An iconic sleeveless black Givenchy-inspired evening gown, as worn by Audrey Hepburn in the opening scene.",
    emoji: "👗",
    color: "#1a1a1a",
    tags: ["dress", "evening wear", "classic", "black"],
    inStock: true,
  },
  {
    id: 2,
    movieId: 1,
    name: "Long Pearl Necklace",
    type: "Jewelry",
    price: 59.99,
    originalPrice: null,
    character: "Holly Golightly",
    scene: "Multiple scenes",
    description:
      "Elegant faux-pearl opera-length necklace, a signature accessory of Holly Golightly throughout the film.",
    emoji: "📿",
    color: "#f5f5f5",
    tags: ["jewelry", "pearls", "necklace", "classic"],
    inStock: true,
  },
  {
    id: 3,
    movieId: 1,
    name: "Wide-Brim Sun Hat",
    type: "Accessories",
    price: 45.00,
    originalPrice: null,
    character: "Holly Golightly",
    scene: "Various outdoor scenes",
    description:
      "A chic oversized straw sun hat that captures the quintessential style of Holly Golightly.",
    emoji: "👒",
    color: "#d4a96a",
    tags: ["hat", "accessories", "summer", "fashion"],
    inStock: true,
  },
  // Pulp Fiction items
  {
    id: 4,
    movieId: 2,
    name: "Black Suit & Thin Tie",
    type: "Clothing",
    price: 299.99,
    originalPrice: 399.99,
    character: "Vincent Vega / Jules Winnfield",
    scene: "Opening briefcase scene",
    description:
      "Sharp black two-piece suit with a classic black slim tie — the signature look of Jules and Vincent.",
    emoji: "🕴️",
    color: "#111111",
    tags: ["suit", "formal", "black", "tie"],
    inStock: true,
  },
  {
    id: 5,
    movieId: 2,
    name: "Vintage Wallet",
    type: "Accessories",
    price: 49.99,
    originalPrice: null,
    character: "Jules Winnfield",
    scene: "Diner scene",
    description:
      "A classic black leather bifold wallet inspired by the iconic \"Bad Motherf***er\" wallet from the film.",
    emoji: "👜",
    color: "#222222",
    tags: ["wallet", "leather", "accessories", "vintage"],
    inStock: false,
  },
  {
    id: 6,
    movieId: 2,
    name: "Uma Thurman Red Pump",
    type: "Footwear",
    price: 129.99,
    originalPrice: 159.99,
    character: "Mia Wallace",
    scene: "Jack Rabbit Slim's scene",
    description:
      "Classic stiletto heels inspired by Mia Wallace's iconic look at Jack Rabbit Slim's restaurant.",
    emoji: "👠",
    color: "#cc0000",
    tags: ["heels", "footwear", "red", "classic"],
    inStock: true,
  },
  // The Devil Wears Prada items
  {
    id: 7,
    movieId: 3,
    name: "Chanel-Inspired Tweed Jacket",
    type: "Clothing",
    price: 349.99,
    originalPrice: 499.99,
    character: "Miranda Priestly",
    scene: "Magazine office scenes",
    description:
      "An elegant white tweed bouclé jacket with gold-tone buttons, inspired by Miranda Priestly's editorial look.",
    emoji: "🧥",
    color: "#f0ede8",
    tags: ["jacket", "tweed", "fashion", "luxury"],
    inStock: true,
  },
  {
    id: 8,
    movieId: 3,
    name: "Cerulean Blue Cashmere Sweater",
    type: "Clothing",
    price: 89.99,
    originalPrice: null,
    character: "Andy Sachs",
    scene: "Famous cerulean speech scene",
    description:
      "The iconic blue sweater that sparked Miranda's memorable speech about how fashion choices reach everyone.",
    emoji: "🧶",
    color: "#4a90d9",
    tags: ["sweater", "cashmere", "blue", "casual"],
    inStock: true,
  },
  {
    id: 9,
    movieId: 3,
    name: "Oversized Fashion Sunglasses",
    type: "Accessories",
    price: 79.99,
    originalPrice: 120.00,
    character: "Miranda Priestly",
    scene: "Paris Fashion Week",
    description:
      "Statement oversized frames inspired by Miranda Priestly's commanding presence at fashion events.",
    emoji: "🕶️",
    color: "#1a1a1a",
    tags: ["sunglasses", "accessories", "fashion", "luxury"],
    inStock: true,
  },
  // The Matrix items
  {
    id: 10,
    movieId: 4,
    name: "Long Black Trench Coat",
    type: "Clothing",
    price: 279.99,
    originalPrice: 349.99,
    character: "Neo / Morpheus",
    scene: "Multiple action sequences",
    description:
      "The legendary full-length black leather trench coat worn by Neo and Morpheus in their fight against the Machines.",
    emoji: "🧥",
    color: "#0a0a0a",
    tags: ["trench coat", "leather", "black", "iconic"],
    inStock: true,
  },
  {
    id: 11,
    movieId: 4,
    name: "Aviator Sunglasses",
    type: "Accessories",
    price: 39.99,
    originalPrice: null,
    character: "Neo / Agent Smith",
    scene: "Throughout the film",
    description:
      "Narrow oval wire-framed sunglasses as worn by Neo — the defining eyewear of the Matrix universe.",
    emoji: "🕶️",
    color: "#1c1c1c",
    tags: ["sunglasses", "accessories", "matrix", "iconic"],
    inStock: true,
  },
  {
    id: 12,
    movieId: 4,
    name: "Red & Blue Pill Set",
    type: "Collectible",
    price: 24.99,
    originalPrice: null,
    character: "Morpheus",
    scene: "Choice scene",
    description:
      "Decorative collectible capsule set inspired by the iconic red and blue pill choice scene — a perfect desk piece.",
    emoji: "💊",
    color: "#cc2200",
    tags: ["collectible", "matrix", "iconic", "decor"],
    inStock: true,
  },
  // Clueless items
  {
    id: 13,
    movieId: 5,
    name: "Yellow Plaid Blazer Set",
    type: "Clothing",
    price: 159.99,
    originalPrice: 199.99,
    character: "Cher Horowitz",
    scene: "Opening wardrobe scene",
    description:
      "The quintessential 90s power look — a cheerful yellow plaid mini skirt and blazer set, as worn by Cher.",
    emoji: "🧡",
    color: "#f5c842",
    tags: ["blazer", "skirt", "plaid", "90s", "yellow"],
    inStock: true,
  },
  {
    id: 14,
    movieId: 5,
    name: "Mini Backpack",
    type: "Bags",
    price: 69.99,
    originalPrice: null,
    character: "Cher Horowitz",
    scene: "School scenes",
    description:
      "A tiny white patent leather backpack inspired by the iconic 90s accessory seen throughout Clueless.",
    emoji: "🎒",
    color: "#ffffff",
    tags: ["backpack", "bag", "accessories", "90s"],
    inStock: true,
  },
  {
    id: 15,
    movieId: 5,
    name: "Platform Mary Janes",
    type: "Footwear",
    price: 99.99,
    originalPrice: 129.99,
    character: "Cher Horowitz",
    scene: "Various school scenes",
    description:
      "Chunky platform Mary Jane shoes that defined the 90s aesthetic perfectly in Clueless.",
    emoji: "👟",
    color: "#000000",
    tags: ["shoes", "platform", "90s", "mary jane"],
    inStock: false,
  },
  // James Bond items
  {
    id: 16,
    movieId: 6,
    name: "Tuxedo Dinner Jacket",
    type: "Clothing",
    price: 449.99,
    originalPrice: 599.99,
    character: "James Bond",
    scene: "Casino scenes",
    description:
      "An impeccably tailored single-button white dinner jacket, the hallmark of Bond's suave casino attire.",
    emoji: "🤵",
    color: "#f5f5f5",
    tags: ["tuxedo", "formal", "luxury", "dinner jacket"],
    inStock: true,
  },
  {
    id: 17,
    movieId: 6,
    name: "Omega Seamaster Watch",
    type: "Accessories",
    price: 4999.99,
    originalPrice: null,
    character: "James Bond",
    scene: "Throughout the film",
    description:
      "A luxury stainless steel diving watch, inspired by Bond's iconic Omega Seamaster — the ultimate spy accessory.",
    emoji: "⌚",
    color: "#silver",
    tags: ["watch", "luxury", "omega", "accessories"],
    inStock: true,
  },
  {
    id: 18,
    movieId: 6,
    name: "Leather Driving Gloves",
    type: "Accessories",
    price: 89.99,
    originalPrice: 120.00,
    character: "James Bond",
    scene: "Driving scenes",
    description:
      "Sleek black leather half-finger driving gloves as worn by Bond in his Aston Martin.",
    emoji: "🧤",
    color: "#111111",
    tags: ["gloves", "leather", "driving", "accessories"],
    inStock: true,
  },
  // Grease items
  {
    id: 19,
    movieId: 7,
    name: "Pink Ladies Jacket",
    type: "Clothing",
    price: 119.99,
    originalPrice: 149.99,
    character: "Sandy & the Pink Ladies",
    scene: "Multiple scenes",
    description:
      "The iconic pink satin bomber jacket worn by Sandy and the Pink Ladies — a symbol of sisterhood and 50s cool.",
    emoji: "🩷",
    color: "#ff69b4",
    tags: ["jacket", "pink", "bomber", "50s", "iconic"],
    inStock: true,
  },
  {
    id: 20,
    movieId: 7,
    name: "High-Waisted Black Trousers",
    type: "Clothing",
    price: 79.99,
    originalPrice: null,
    character: "Sandy (finale)",
    scene: "Carnival finale",
    description:
      "Sandy's transformation: sleek high-waisted black cigarette trousers from the unforgettable finale scene.",
    emoji: "👖",
    color: "#0a0a0a",
    tags: ["trousers", "black", "high-waist", "50s"],
    inStock: true,
  },
  {
    id: 21,
    movieId: 7,
    name: "50s Poodle Skirt",
    type: "Clothing",
    price: 54.99,
    originalPrice: 69.99,
    character: "Sandy (school scenes)",
    scene: "School scenes",
    description:
      "A pastel pink full circle skirt with an embroidered poodle — a quintessential 1950s fashion statement.",
    emoji: "🌸",
    color: "#ffb6c1",
    tags: ["skirt", "poodle", "50s", "pink"],
    inStock: true,
  },
  // Blade Runner 2049 items
  {
    id: 22,
    movieId: 8,
    name: "Oversized Tactical Coat",
    type: "Clothing",
    price: 319.99,
    originalPrice: 399.99,
    character: "K (Officer KD6-3.7)",
    scene: "Los Angeles street scenes",
    description:
      "A futuristic oversized long coat with subtle military detailing, inspired by K's dystopian wardrobe.",
    emoji: "🧥",
    color: "#2d3142",
    tags: ["coat", "futuristic", "dystopian", "oversized"],
    inStock: true,
  },
  {
    id: 23,
    movieId: 8,
    name: "Holographic Display Projector",
    type: "Collectible",
    price: 149.99,
    originalPrice: null,
    character: "Joi",
    scene: "Joi hologram scenes",
    description:
      "A palm-sized LED holographic mini projector inspired by Joi's stunning holographic displays in Blade Runner 2049.",
    emoji: "🔮",
    color: "#6a0dad",
    tags: ["hologram", "tech", "collectible", "sci-fi"],
    inStock: true,
  },
  {
    id: 24,
    movieId: 8,
    name: "Desert Sand Turtleneck",
    type: "Clothing",
    price: 89.99,
    originalPrice: null,
    character: "K",
    scene: "Las Vegas desert scenes",
    description:
      "A ribbed sand-colored turtleneck sweater inspired by K's warm-toned desert wardrobe in the Las Vegas wasteland sequence.",
    emoji: "🟤",
    color: "#c4a882",
    tags: ["turtleneck", "sweater", "neutral", "casual"],
    inStock: true,
  },
];

// Helper: get featured movies (first 4)
function getFeaturedMovies() {
  return MOVIES.slice(0, 4);
}

// Helper: get popular items (highest rated / sale items)
function getPopularItems() {
  return ITEMS.filter((item) => item.originalPrice !== null).slice(0, 4);
}

// Helper: get movie by id
function getMovieById(id) {
  return MOVIES.find((m) => m.id === id);
}

// Helper: get item by id
function getItemById(id) {
  return ITEMS.find((i) => i.id === id);
}

// Helper: get items for a movie
function getItemsForMovie(movieId) {
  return ITEMS.filter((i) => i.movieId === movieId);
}

// Helper: format price
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

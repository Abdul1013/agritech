const products = [
  {
    id: 101,
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 3500,
    currency: "NGN",
    description: "Fresh organic tomatoes from local farms.",
    imageUrl:
      "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "kg",
  },
  {
    id: 102,
    name: "Bananas",
    category: "Fruits",
    price: 1200,
    currency: "NGN",
    description: "Sweet, organic bananas from tropical regions.",
    imageUrl:
      "https://images.pexels.com/photos/16043802/pexels-photo-16043802/free-photo-of-green-bananas-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "kg",
  },
  {
    id: 103,
    name: "Whole Milk",
    category: "Dairy",
    price: 2500,
    currency: "NGN",
    description: "Fresh whole milk from grass-fed cows.",
    imageUrl:
      "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "liter",
  },
  {
    id: 104,
    name: "Basmati Rice",
    category: "Grains",
    price: 5000,
    currency: "NGN",
    description: "Premium quality basmati rice.",
    imageUrl:
      "https://images.pexels.com/photos/8108170/pexels-photo-8108170.jpeg?auto=compress&cs=tinysrgb&w=400",
    unit: "kg",
  },
  {
    id: 105,
    name: "Maize",
    category: "Grains",
    price: 2000,
    currency: "NGN",
    description: "Organic, non-GMO maize kernels.",
    imageUrl:
      "https://images.pexels.com/photos/27097352/pexels-photo-27097352/free-photo-of-close-up-of-abundance-of-corn.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "kg",
  },
  {
    id: 106,
    name: "Spinach",
    category: "Vegetables",
    price: 500,
    currency: "NGN",
    description: "Fresh green spinach leaves, rich in nutrients.",
    imageUrl:
      "https://images.pexels.com/photos/6824475/pexels-photo-6824475.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "bunch",
  },
  {
    id: 107,
    name: "Groundnut Oil",
    category: "Oils",
    price: 7000,
    currency: "NGN",
    description: "Pure groundnut oil for cooking and frying.",
    imageUrl:
      "https://images.pexels.com/photos/5056853/pexels-photo-5056853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    unit: "litre",
  },
  {
    id: 108,
    name: "Cassava Flour",
    category: "Flour",
    price: 1800,
    currency: "NGN",
    description: "High-quality cassava flour for various recipes.",
    imageUrl:
      "https://images.pexels.com/photos/7543161/pexels-photo-7543161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    unit: "kg",
  },
  {
    id: 109,
    name: "Palm Oil",
    category: "Oils",
    price: 4500,
    currency: "NGN",
    description: "Rich and nutritious palm oil, ideal for cooking.",
    imageUrl:
      "https://images.pexels.com/photos/220989/pexels-photo-220989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    unit: "litre",
  },
  {
    id: 110,
    name: "Soybeans",
    category: "Legumes",
    price: 3000,
    currency: "NGN",
    description: "High-protein soybeans, perfect for meals and processing.",
    imageUrl:
      "https://images.pexels.com/photos/3735181/pexels-photo-3735181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    unit: "kg",
  },
  {
    id: 111,
    name: "Honey",
    category: "Sweeteners",
    price: 2500,
    currency: "NGN",
    description: "Pure, raw honey from organic sources.",
    imageUrl:
      "https://images.pexels.com/photos/1872902/pexels-photo-1872902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    unit: "litre",
  },
  {
    id: 112,
    name: "Carrots",
    category: "Vegetables",
    price: 800,
    currency: "NGN",
    description: "Fresh and crunchy carrots, rich in vitamins.",
    imageUrl:
      "https://images.pexels.com/photos/54082/carrots-vegetables-food-orange-54082.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "kg",
  },
  {
    id: 113,
    name: "Ginger",
    category: "Spices",
    price: 1000,
    currency: "NGN",
    description: "Fresh ginger, perfect for cooking and tea.",
    imageUrl:
      "https://images.pexels.com/photos/128403/pexels-photo-128403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    unit: "kg",
  },
  {
    id: 114,
    name: "Yam",
    category: "Vegetables",
    price: 4000,
    currency: "NGN",
    description: "Premium tubers of yam, perfect for various meals.",
    imageUrl: "https://images.pexels.com/photos/27950727/pexels-photo-27950727/free-photo-of-a-woman-standing-in-front-of-a-market-with-fresh-produce.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "tuber",
  },
  {
    id: 115,
    name: "Coconut Oil",
    category: "Oils",
    price: 6000,
    currency: "NGN",
    description: "Pure virgin coconut oil for cooking and skin care.",
    imageUrl:
      "https://images.pexels.com/photos/11921158/pexels-photo-11921158.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "litre",
  },
  {
    id: 116,
    name: "Potatoe",
    category: "Vegetables",
    price: 3000,
    currency: "NGN",
    description: "Sweet potaoe, perfect for various meals.",
    imageUrl:
      "https://images.pexels.com/photos/2797395/pexels-photo-2797395.jpeg?auto=compress&cs=tinysrgb&w=800",
    unit: "tuber",
  },
];

const item = [
  {
    id: "FP001",
    itemName: "Tomatoes",
    description:
      "Fresh organic tomatoes harvested from local farms, ideal for salads and cooking.",
  },
  {
    id: "FP002",
    itemName: "Maize",
    description:
      "High-quality dried maize grains, perfect for flour production and animal feed.",
  },
  {
    id: "FP003",
    itemName: "Carrots",
    description:
      "Crisp, sweet carrots grown in nutrient-rich soil, ideal for raw consumption or cooking.",
  },
  {
    id: "FP004",
    itemName: "Potatoes",
    description:
      "Freshly harvested potatoes, suitable for boiling, frying, or making mashed potatoes.",
  },
  {
    id: "FP005",
    itemName: "Cabbage",
    description:
      "Large, green cabbages perfect for salads, coleslaw, and stir-fry dishes.",
  },
];

const messages = [
  {
    name: "John Doe",
    id: "ORD123456",
    messageContent:
      "I need a quick update on the delivery status of my fertilizer order.",
  },
  {
    name: "Jane Smith",
    id: "ORD987654",
    messageContent:
      "Can you confirm if the tractor parts I ordered are in stock?",
  },
  {
    name: "Samuel Brown",
    id: "ORD112233",
    messageContent:
      "The seeds I received were damaged. Please assist with a replacement.",
  },
  {
    name: "Emily Davis",
    id: "ORD445566",
    messageContent: "Do you offer bulk discounts for pesticides?",
  },
  {
    name: "Michael Johnson",
    id: "ORD778899",
    messageContent:
      "Can I change the delivery address for my irrigation equipment?",
  },
];
export default products;

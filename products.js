// =============================================
// PRODUCT DATA ARRAY - 3 PRODUCTS (Different Categories)
// =============================================
const products = [ 
    {
        id: 1,
        title: "AEROKICKS Dominion Pro", 
        price: "₱5,500.00",
        priceValue: 5500,
        category: "Footwear",
        shortDescription: "Powerhouse basketball sneaker for explosive movement",
        description: "Command every game with the AeroKicks Dominion Pro – Black Ice Edition, a powerhouse basketball sneaker crafted for athletes who play with intensity and precision.",
        features: [
            "High-top design for ankle support",
            "Premium leather and synthetic upper",
            "Cushioned midsole for impact protection",
            "Durable rubber outsole with traction pattern",
            "Made in the Philippines"
        ],
        materials: [
            "Upper: Premium leather with synthetic overlays",
            "Midsole: EVA foam cushioning",
            "Outsole: High-traction rubber",
            "Weight: Approx. 380g per shoe (Size 9)"
        ],
        idealFor: ["Basketball", "Indoor sports", "Court training"],
        careInstructions: ["Wipe clean with damp cloth", "Air dry only", "Store in cool, dry place"],
        variants: [
            {
                name: "Black Ice",
                mainImage: "Images/AEROKICKS_Dominion_Pro_1.jpg",
                thumbnails: [
                    "Images/AEROKICKS_Dominion_Pro_2.jpg",
                    "Images/AEROKICKS_Dominion_Pro_3.jpg",
                    "Images/AEROKICKS_Dominion_Pro_4.jpg"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            }
        ]
    },
    {
        id: 2,
        title: "AeroSprint Alpha",
        price: "₱2,999.00",
        priceValue: 2999,
        category: "Footwear",
        shortDescription: "Engineered for speed, endurance, and Filipino pride — built for runners who move with purpose",
        description: "Run farther and faster with the AeroSprint Alpha, the ultimate lightweight running shoe from AeroKicks PH. Designed for both everyday joggers and professional athletes, the Alpha blends breathable mesh, shock-absorbing soles, and precision cushioning for a responsive yet comfortable ride. Every stride feels lighter and smoother, empowering you to focus purely on your run — wherever the road takes you.",
        features: [
            "Ultra-Lightweight Mesh Upper – Keeps your feet cool and dry during long runs",
            "AeroCush™ Midsole – Provides balanced cushioning and responsive rebound for optimal comfort",
            "GripFlex™ Outsole – Delivers firm traction on both road and gym surfaces",
            "ErgoFit Design – Adapts naturally to your foot's contours for superior comfort and stability",
            "Made in the Philippines – Proudly designed and assembled locally"
        ],
        materials: [
            "Upper: Breathable mesh with synthetic overlays",
            "Midsole: EVA with AeroCush™ technology",
            "Outsole: Durable rubber with anti-slip tread pattern",
            "Weight: Approx. 250g per shoe (Size 9)"
        ],
        idealFor: ["Road running and treadmill workouts", "Daily training or long-distance runs", "Casual athletic wear"],
        sizingFit: [
            "Standard men's sizing (true to size)",
            "Available sizes: US 6–12",
            "Low-top design for freedom of movement and natural stride"
        ],
        careInstructions: ["Hand wash with mild soap", "Air dry only — avoid machine drying or bleaching"],
        variants: [
            {
                name: "Jet Black",
                mainImage: "Images/AEROKICKS_RetroRun_82_1.jpg",
                thumbnails: [
                    "Images/AEROKICKS_RetroRun_82_2.jpg",
                    "Images/AEROKICKS_RetroRun_82_3.jpg",
                    "Images/AEROKICKS_RetroRun_82_4.jpg"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            },
            {
                name: "White",
                mainImage: "Images/AEROKICKSRetroRun_1.jpg",
                thumbnails: [
                    "Images/AEROKICKSRetroRun_2.jpg",
                    "Images/AEROKICKSRetroRun_3.jpg",
                    "Images/AEROKICKSRetroRun_4.jpg"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            }
        ]
    },
    {
        id: 3,
        title: "AeroKicks Essential Tee",
        price: "₱995.00",
        priceValue: 995,
        category: "Apparel",
        shortDescription: "Breathable performance t-shirt for all-day comfort",
        description: "The AeroKicks Essential Tee combines style and performance. Made with moisture-wicking fabric, it keeps you cool and dry during intense workouts or casual wear.",
        features: [
            "Moisture-wicking technology keeps you dry",
            "Soft, breathable fabric for maximum comfort",
            "Athletic fit designed for movement",
            "Quick-dry material for active lifestyles",
            "Made in the Philippines with premium materials"
        ],
        materials: [
            "Fabric: 100% Polyester with moisture-wicking finish",
            "Weight: Lightweight performance fabric",
            "Care: Machine washable for easy maintenance"
        ],
        idealFor: ["Training sessions", "Casual wear", "Running and gym workouts"],
        careInstructions: ["Machine wash cold", "Tumble dry low", "Do not iron print", "Do not bleach"],
        variants: [
            {
                name: "Black",
                mainImage: "Images/Aeroshirt31.webp",
                thumbnails: [
                    "Images/Aeroshirt32.webp",
                    "Images/Aeroshirt33.webp",
                    "Images/Aeroshirt34.webp"
                ],
                sizes: ["S", "M", "L", "XL", "2XL"]
            }
        ]
    },
    {
        id: 4,
        title: "AeroKicks Training Bag",
        price: "₱2,495.00",
        priceValue: 2495,
        category: "Essentials",
        shortDescription: "Durable gym bag with multiple compartments",
        description: "Carry your gear in style with the AeroKicks Training Bag. Designed with multiple compartments, water-resistant material, and comfortable straps for all your training needs.",
        features: [
            "Water-resistant outer shell",
            "Multiple compartments for organization",
            "Padded shoulder straps for comfort",
            "Ventilated shoe compartment",
            "Made in the Philippines"
        ],
        materials: [
            "Material: Durable polyester with water-resistant coating",
            "Zippers: Heavy-duty YKK zippers",
            "Dimensions: 50cm x 30cm x 25cm"
        ],
        idealFor: ["Gym sessions", "Travel", "Sports training"],
        careInstructions: ["Wipe clean with damp cloth", "Air dry", "Do not machine wash"],
        variants: [
            {
                name: "Black/Gold",
                mainImage: "Images/Essentials.jpg",
                thumbnails: [
                    "Images/Essentials.jpg",
                    "Images/Essentials.jpg",
                    "Images/Essentials.jpg"
                ],
                sizes: ["One Size"]
            }
        ]
    }
];

console.log('products.js loaded with', products.length, 'products');
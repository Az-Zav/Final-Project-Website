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
                mainImage: "Images/AEROSprintAlpha_black_1.webp",
                thumbnails: [
                    "Images/AEROSprintAlpha_black_2.webp",
                    "Images/AEROSprintAlpha_black_3.webp",
                    "Images/AEROSprintAlpha_black_4.webp"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            },
            {
                name: "White",
                mainImage: "Images/AEROSprintAlpha_white_1.webp",
                thumbnails: [
                    "Images/AEROSprintAlpha_white_2.webp",
                    "Images/AEROSprintAlpha_white_3.webp",
                    "Images/AEROSprintAlpha_white_4.webp"
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
                mainImage: "Images/AeroShirt31.webp",
                thumbnails: [
                    "Images/AeroShirt32.webp",
                    "Images/AeroShirt33.webp",
                    "Images/AeroShirt31.webp"
                ],
                sizes: ["S", "M", "L", "XL", "2XL"]
            }
        ]
    },
    {
        id: 4,
        title: "Aerokicks Pro Warm Black Men's Long-Sleeve Top Warmer",
        price: "₱2,495.00",
        priceValue: 2495,
        category: "Apparel",
        shortDescription: "An elite, thermal base layer scientifically engineered with superior insulation and active moisture management for peak performance in cold-weather training and competition",
        description: "Dominate the elements without overheating. The AeroKicks Pro Warm Top Warmer is our elite base layer, scientifically engineered to provide superior thermal insulation while actively managing moisture, making it essential gear for cold-weather training and competition.",
        features: [
            "Therma-Core™ Insulation: Engineered synthetic-blend interior uses a micro-grid structure to trap heat while remaining highly breathable and lightweight.",
            "Active Sweat Wicking: High-performance fabric rapidly moves moisture from the skin's surface, ensuring you stay dry and preventing post-workout chill.",
            "Seamless Fit Technology: Strategic flatlock seams and a contoured sleeve design prevent chafing and allow for full, unrestricted range of motion.",
            "Odor Resistance: Integrated antimicrobial treatment helps keep the garment fresh during intense and prolonged training sessions.",
        ],
        materials: [
            "Fabric: 88% Performance Polyester, 12% Spandex (Therma-Core™)",
            "Trim: Reinforced flatlock stitching.",
        ],
        idealFor: ["Running, cycling, or outdoor team sports in cold temperatures", "High-intensity winter training and layered competition wear", "Skiing, snowboarding, or mountaineering as a foundational layer"],
        careInstructions: ["Machine wash cold, inside out, on a gentle cycle.", "Tumble dry low or hang dry to maintain shape and thermal performance properties."],
        variants: [
            {
                name: "Black/Gold",
                mainImage: "Images/AerokicksProWarmMensLongSleeveTopBlackWarmer.png",
                thumbnails: [
                    "Images/AerokicksProWarmMensLongSleeveTopBlackWarmer2.png",
                    "Images/AerokicksProWarmMensLongSleeveTopBlackWarmer3.png",
                    "Images/AerokicksProWarmMensLongSleeveTopBlackWarmer.png"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            }
        ]
    },
    {
        id: 5,
        title: "AeroKicks Legacy Low",
        price: "₱4,300.00",
        priceValue: 4300,
        category: "Footwear",
        shortDescription: "A timeless low-top sneaker blending classic court aesthetics with modern comfort and everyday versatility.",
        description: "Step into iconic style with the Aerokicks Legacy Low – Crimson Court Edition. This sneaker pays homage to the enduring charm of classic court shoes, re-imagined with Aerokicks PH's commitment to quality and performance. The Crimson Court colorway features a rich white base accented by deep red stripes, providing a bold, yet sophisticated look suitable for any setting. ​Crafted with a premium leather upper and accented with rich, contrasting side stripes, the Legacy Low offers a sophisticated yet sporty look. Its durable gum rubber outsole provides excellent traction and adds to its vintage appeal, while the cushioned insole ensures all-day comfort. Perfect for those who appreciate heritage design without compromising on modern wearability, this shoe delivers both style and substance.",

        features: [
            "​Heritage Leather Upper – Premium, supple leather provides a durable and refined finish, designed to maintain its structure and look over time.",
            "​AeroCushion Insole – A custom-molded, responsive insole delivers superior underfoot comfort for prolonged wear.",
            "​GumGrip™ Outsole – Classic non-marking gum rubber outsole offers superb multi-directional traction and a timeless aesthetic.",
            "​Perforated Forefoot – Strategically placed perforations enhance breathability and add to the shoe's classic court design.",
        ],
        materials: [
            "Upper: Full-grain leather and synthetic overlays",
            "​Midsole: EVA foam wedge (internal)",
            "Outsole: Natural gum rubber",
            "​Lining: Soft textile"
        ],
        idealFor: ["​Everyday casual wear", "​Retro-inspired athleisure outfits", "​Light urban exploration and walking", "​Pairing with denim, chinos, or shorts"],
        careInstructions: ["Wipe clean with damp cloth", "Air dry", "​Apply leather conditioner periodically to maintain suppleness"],
        variants: [
            {
                name: "AeroKicks Legacy Low",
                mainImage: "Images/AEROKICKS_Legacy_Low_1.jpg",
                thumbnails: [
                    "Images/AEROKICKS_Legacy_Low_1.jpg",
                    "Images/AEROKICKS_Legacy_Low_2.jpg",
                    "Images/AEROKICKS_Legacy_Low_3.jpg"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            }
        ]
    }
    ,
    {
        id: 6,
        title: "AeroKicks RetroRun",
        price: "₱3,295.00",
        priceValue: 3295,
        category: "Footwear",
        shortDescription: "Classic retro vibes meet modern Filipino craftsmanship — the perfect balance of comfort, nostalgia, and everyday performance.",
        description: "Step into timeless style with the AeroKicks RetroRun 82 – Emerald Drift Edition, a modern revival of vintage running silhouettes inspired by the golden age of track athletics. Designed for casual runners and everyday wear, the RetroRun 82 blends retro aesthetics with cutting-edge comfort technology. Its dual-tone suede overlays and breathable mesh upper ensure durability and all-day ventilation, while the lightweight foam midsole cushions every step with ease. Whether you’re hitting the streets or chilling after a workout, the RetroRun 82 keeps you moving in style.",

        features: [
            "Retro-Inspired Silhouette – A tribute to classic '80s running shoes with a modern Filipino twist.",
            "DualTone Suede + Mesh Upper – Combines breathability and structure for lasting comfort.",
            "AeroFoam™ Midsole – Delivers lightweight cushioning and shock absorption.",
            "GripFlex™ Rubber Outsole – Offers excellent traction and long-lasting durability.",
            "SoftStep Lining – Provides plush comfort for all-day wear.",
        ],
        materials: [
            "Upper: Breathable nylon mesh with suede overlays",
            "Midsole: EVA foam with AeroFoam™ comfort layer",
            "Outsole: Rubber with micro-pattern traction",
            "Lining: Soft cotton-blend textile",
            "Lining: Soft cotton-blend textile",
            "Weight: Approx. 280g per shoe (Size 9)",
        ],
        idealFor: ["​Everyday casual wear", "Casual and streetwear outfits", "Travel and daily commutes"],
        careInstructions: ["Wipe clean with damp cloth", "Use mild soap for stubborn stains", "Air dry in a shaded area — do not bleach or machine dry"],
        variants: [
            {
                name: "AeroKicks RetroRun",
                mainImage: "Images/AEROKICKS_RetroRun_82_1.jpg",
                thumbnails: [
                    "Images/AEROKICKS_RetroRun_82_2.jpg",
                    "Images/AEROKICKS_RetroRun_82_3.jpg",
                    "Images/AEROKICKS_RetroRun_82_4.jpg"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            }
        ]
    },
    {
        id: 7,
        title: "AEROKicks Velocity X1", 
        price: "₱5,495.00",
        priceValue: 5495,
        category: "Footwear",
        shortDescription: "High-performance basketball sneakers engineered for speed, stability, and style.",
        description: "Dominate the court with the AeroKicks Velocity X1 – Blue Surge Edition, built for athletes who play fast and think faster. Designed with an aerodynamic silhouette, the Velocity X1 combines responsive cushioning, breathable mesh layers, and dynamic ankle support to keep you one step ahead in every play. Whether you’re driving to the rim or defending the perimeter, these shoes give you the grip, comfort, and confidence you need.",

        features: [
            "DualZone CushionTech™ Midsole – Delivers responsive energy return and all-day comfort.",
            "AeroWeave™ Upper Mesh – Enhances ventilation and reduces heat buildup during intense games.",
            "GripFlex™ Outsole Pattern – Ensures superior traction and quick multidirectional movement.",
            "Stabilock Heel Support – Provides reinforced ankle stability without limiting mobility.",
        ],
        materials: [
            "Upper: Engineered mesh and synthetic overlays",
            "Midsole: EVA with CushionTech™ foam",
            "Outsole: Non-marking rubber with multi-angle traction",
            "Lining: Moisture-wicking fabric"
        ],
        idealFor: ["Basketball and indoor court sports", "High-intensity training", "Everyday athleisure wear"],
        careInstructions: ["Spot clean with mild soap and warm water", "Air dry only—do not machine wash"],
        variants: [
            {
                name: "Blue Surge",
                mainImage: "Images/AEROKicksVelocity_Blue_1.webp",
                thumbnails: [
                    "Images/AEROKicksVelocity_Blue_2.webp",
                    "Images/AEROKicksVelocity_Blue_3.webp",
                    "Images/AEROKicksVelocity_Blue_4.webp"
                ],
                sizes: ["6", "7", "8", "9", "10", "11", "12"]
            }
        ]
    },
    {
        id: 8,
        title: "Mesh Short Blue Ice",
        price: "₱1,200.00",
        priceValue: 1200,
        category: "Apparel",
        shortDescription: "The perfect blend of high-performance function and refreshing style, featuring a crisp Blue Ice colorway and advanced fabric to keep you fresh through any activity.",
        description: "Introducing the Mesh Short Blue Ice, the perfect blend of high-performance function and refreshing style. The crisp, clean Blue Ice colorway provides a striking look while the advanced fabric keeps you feeling fresh through any activity.",

        features: [
            "Ice-Vent Mesh: Ultra-lightweight, high-perforation mesh engineered for maximum cooling airflow and comfort in high heat.",
            "Quick-Dry Tech: Fabric rapidly wicks moisture away from the skin and accelerates evaporation, ensuring a consistently dry and fresh feel.",
            "Ergonomic Side Split: Subtle split in the hem enhances mobility, providing unrestricted movement for squats, lunges, and aggressive court cuts.",
            "Bold Colorway: The distinct Blue Ice shade adds a vibrant, refreshing element to your training ensemble.",
        ],
        materials: [
            "Fabric: 100% Performance Polyester Mesh (Ice-Vent Tech)",
            "Liner: 85% Polyester, 15% Spandex",
        ],
        idealFor: ["Intense summer training and hot-weather outdoor workouts", "Basketball, volleyball, and fast-paced court sports", "Everyday casual wear where maximum ventilation is desired", "Making a bold, color-coordinated athletic statement"],
        careInstructions: ["Machine wash cold, inside out, with like colors.", "Air dry", "​Apply leather conditioner periodically to maintain suppleness"],
        variants: [
            {
                name: "Mesh Short Blue Ice",
                mainImage: "Images/Mesh_Short_Blue_Ice_1.jpeg",
                thumbnails: [
                    "Images/Mesh_Short_Blue_Ice_1.jpeg",
                    "Images/Mesh_Short_Blue_Ice_2.jpeg",
                    "Images/Mesh_Short_Blue_Ice_2.jpeg"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 9,
        title: "Mesh Short Love",
        price: "₱3,500.00",
        priceValue: 3500,
        category: "Apparel",
        shortDescription: "The reliable, breathable mesh short engineered for high-intensity training, court sports, and essential everyday comfort without distraction.",
        description: "Step into iconic styl",

        features: [
            "​Heritage Leather Upper – Premium, supple leather provides a durable and refined finish, designed to maintain its structure and look over time.",
            "​AeroCushion Insole – A custom-molded, responsive insole delivers superior underfoot comfort for prolonged wear.",
            "​GumGrip™ Outsole – Classic non-marking gum rubber outsole offers superb multi-directional traction and a timeless aesthetic.",
            "​Perforated Forefoot – Strategically placed perforations enhance breathability and add to the shoe's classic court design.",
        ],
        materials: [
            "Upper: Full-grain leather and synthetic overlays",
            "​Midsole: EVA foam wedge (internal)",
            "Outsole: Natural gum rubber",
            "​Lining: Soft textile"
        ],
        idealFor: ["​Everyday casual wear", "​Retro-inspired athleisure outfits", "​Light urban exploration and walking", "​Pairing with denim, chinos, or shorts"],
        careInstructions: ["Wipe clean with damp cloth", "Air dry", "​Apply leather conditioner periodically to maintain suppleness"],
        variants: [
            {
                name: "Mesh Short Love",
                mainImage: "Images/Mesh_Short_Love_1.jpeg",
                thumbnails: [
                    "Images/Mesh_Short_Love_1.jpeg",
                    "Images/Mesh_Short_Love_2.jpeg",
                    "Images/Mesh_Short_Love_2.jpeg"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 10,
        title: "Mesh Short Shark", 
        price: "₱1,200.00",
        priceValue: 1200,
        category: "Apparel",
        shortDescription: "Named for its streamlined design and relentless performance, this essential mesh short is built to keep pace with the intensity of athletes who dominate their environment.",
        description: "Unleash your inner athlete with the Mesh Short Shark. Named for its streamlined design and relentless performance, this short is built for those who dominate their environment and require gear that keeps pace with their intensity.",

        features: [
            "SharkSkin Mesh: Durable, tight-weave mesh fabric offers a streamlined look, superior ventilation, and increased resistance to snagging.",
            "Rapid-Wick Technology: Advanced moisture management rapidly pulls sweat away from the skin, ensuring you stay dry and light during peak performance.",
            "Minimalist Inseam: A shorter, 5-inch competition-ready inseam allows for maximum leg drive and zero restriction.",
            "Secure Hip Pockets: Zippered hip pockets provide secure, low-profile storage for keys and essentials without bouncing.",
        ],
        materials: [
            "Fabric: 100% Durable Performance Polyester Mesh (SharkSkin Weave)",
            "Liner: Integrated Quick-Dry Liner (85% Polyester, 15% Spandex)"
        ],
        idealFor: ["Sprinting, track workouts, and competition days", "Functional training, agility drills, and plyometrics", "High-heat training environments where maximum cooling is required", "Athletes who prefer a shorter, restrictive-free performance fit"],
        careInstructions: ["Machine wash cold, inside out, on a gentle cycle.", "Tumble dry low or hang dry immediately", "Do not iron on the mesh fabric or use bleach."],
        variants: [
            {
                name: "Mesh Short Shark",
                mainImage: "Images/Mesh_Short_Shark_1.jpeg",
                thumbnails: [
                    "Images/Mesh_Short_Shark_2.jpeg",
                    "Images/Mesh_Short_Shark_3.jpeg",
                    "Images/Mesh_Short_Shark_4.jpeg"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 11,
        title: "Black Jordan Socks", 
        price: "₱1,000.00",
        priceValue: 1000,
        category: "Essentials",
        shortDescription: "Engineered for the elite athlete, these essential socks provide the foundation for championship performance with targeted support, superior cushioning, and maximum ventilation.",
        description: "Engineered for the elite athlete, these Black Jordan Socks provide the foundation for championship performance. Designed to meet the rigorous demands of the game, they offer targeted support, superior cushioning, and maximum ventilation.",

        features: [
            "Targeted Arch Compression: Dynamic arch band provides firm support and stability, locking the foot down during explosive movements and quick cuts.",
            "Max-Cushion Forefoot: Strategic cushioning zones under the heel and forefoot absorb impact, reduce fatigue, and protect against friction.",
            "Dri-Fit Technology: Advanced moisture-wicking fabric rapidly pulls sweat away from the skin for quick evaporation and a dry feel.",
            "Enhanced Ventilation: Breathable mesh panels across the top of the foot maximize airflow and reduce heat buildup inside the shoe.",
        ],
        materials: [
            "Fabric: 61% Polyester, 20% Nylon, 17% Cotton, 2% Spandex (Dri-Fit Performance Blend)",
            "Trim: Reinforced heel and toe for added durability in high-wear areas."
        ],
        idealFor: ["High-impact court sports (Basketball, Volleyball, Training)", "​Long training sessions and competition days", "​Daily wear for superior athletic comfort and support", "Athletes requiring superior ankle stability and arch support"],
        careInstructions: ["Machine wash warm or cold with like colors.", "Crucial: Do not use bleach or fabric softeners.", "Tumble dry low.", "Do not iron"],
        variants: [
            {
                name: "Black",
                mainImage: "Images/Black_Jordan_1.jpg",
                thumbnails: [
                    "Images/Black_Jordan_2.jpeg",
                    "Images/Black_Jordan_3.jpg",
                    "Images/Black_Jordan_1.jpg"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 12,
        title: "Lakers Lebron Gold Jersey", 
        price: "₱3,200.00",
        priceValue: 3200,
        category: "Apparel",
        shortDescription: "A stunning, special edition tribute to LeBron James and the Los Angeles Lakers, transcending standard team apparel with championship gold detailing and iconic style.",
        description: "Elevate your collection with the Lakers LeBron James Gold Edition Jersey, a stunning tribute to the undisputed King and the storied franchise of the Los Angeles Lakers. This special edition jersey transcends standard team apparel, symbolizing championship excellence and LeBron's iconic contributions to the Purple and Gold.",

        features: [
            "AeroKnit Fabric: Lightweight, double-knit performance polyester mesh provides exceptional breathability, quick-drying comfort, and an authentic on-court feel.",
            "Gold Edition Detailing: Features heat-applied, metallic gold lettering and numbering for a premium, collector-grade finish and superior visual impact.",
            "Official Team Fit: Designed with the official cut and shape of the on-court jersey for an authentic look and relaxed drape.",
            "Woven Jock Tag: Includes a woven jock tag with a gold-stitched league logo and size information for collector authenticity.",
        ],
        materials: [
            "Fabric: 100% Double-Knit Performance Polyester (AeroKnit)",
            "Trim: Heat-applied metallic gold graphics.",
            "Outsole: Natural gum rubber"
        ],
        idealFor: ["​Wearing to games, watch parties, and NBA events", "Collecting sports memorabilia and displaying at home", "Casual wear as a premium fashion piece", "Celebrating championship heritage and team legacy"],
        careInstructions: ["Machine wash cold, inside out, on a gentle cycle.", "Crucial: Do not iron graphics or dry clean.", "Hang dry only (avoid tumble drying to protect heat-applied details)."],
        variants: [
            {
                name: "Gold",
                mainImage: "Images/Lakers_Lebron_Jersey_Gold_3.jpg",
                thumbnails: [
                    "Images/Lakers_Lebron_Jersey_Gold.jpg",
                    "Images/Lakers_Lebron_Jersey_Gold_2.jpg",
                    "Images/Lakers_Lebron_Jersey_Gold_3.jpg"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 13,
        title: "AeroShirt Stadium Polo", 
        price: "₱1,000.00",
        priceValue: 1000,
        category: "Apparel",
        shortDescription: "An evolution in performance apparel, the AeroShirt Stadium Polo delivers our lightest and most breathable training shirt yet by shaving off weight and refining the fit based on elite athlete feedback.",
        description: "Building on the success of the original, the AeroShirt Stadium Polo is not just an update—it's an evolution in performance apparel. We analyzed athlete feedback to shave off weight, improve ventilation, and refine the fit, delivering our lightest and most breathable training shirt yet.",

        features: [
            "Feather-Light AeroKnit: Ultra-fine, hyper-wicking technical fabric engineered for a nearly weightless feel and superior moisture management.",
            "Targeted Zonal Ventilation: Laser-cut micro-perforations in high-heat areas (upper back and underarms) dramatically improve cooling airflow.",
            "Ergonomic Seaming: Updated, minimal flatlock seams are strategically placed away from high-rub zones to eliminate chafing during long workouts.",
            "Bonded Detailing: Neckline and hem are bonded rather than stitched to reduce bulk and maintain a clean, distraction-free aesthetic.",
        ],
        materials: [
            "Fabric: 90% Ultra-Lightweight Performance Polyester, 10% Spandex (AeroKnit Tech)",
            "Trim: Bonded hem and neckline."
        ],
        idealFor: ["Long-distance running, marathon training, and racing", "High-intensity interval training (HIIT) and strenuous cardio sessions", "Training in hot and humid weather conditions", "Layering under jackets or vests without adding any bulk"],
        careInstructions: ["Machine wash cold, inside out, on a gentle cycle.", "Do not use fabric softeners or bleach (they compromise the wicking ability).", "Tumble dry low or hang dry immediately."],
        variants: [
            {
                name: "AeroShirt Stadium Polo",
                mainImage: "Images/AeroShirt21.webp",
                thumbnails: [
                    "Images/AeroShirt21.webp",
                    "Images/AeroShirt22.webp",
                    "Images/AeroShirt23.webp"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 14,
        title: "AeroShirt Striped Tee", 
        price: "₱1,100.00",
        priceValue: 1100,
        category: "Apparel",
        shortDescription: "Our most technologically advanced garment ever, engineered with bio-mapped cooling zones and a fabric so light it defies gravity—a true quantum leap in performance apparel.",
        description: "The AeroShirt Striped Tee is our most technologically advanced garment ever, engineered with bio-mapped cooling zones and a fabric so light it defies gravity. This isn't just an upgrade; it's a quantum leap in performance apparel.",

        features: [
            "Zero-Gravity Fabric: Proprietary ultra-lightweight microfiber polyester minimizes cling, wicks moisture instantly, and provides nearly weightless comfort.",
            "Bio-Mapped Cooling Zones: Integrated, open-knit panels are strategically placed across the back and chest to align with the body's natural heat emission points for instant cooling.",
            "Aero-Bond Construction: Fully bonded seams and hem eliminate all stitching, resulting in a smooth, chafe-free interior and further reducing the garment's total weight.",
            "360º Reflectivity: Subtle, micro-dot reflective detailing provides essential low-light visibility without sacrificing the shirt's extreme breathability.",
        ],
        materials: [
            "Fabric: 92% Proprietary Ultra-Lightweight Microfiber Polyester, 8% Spandex",
            "Trim: Aero-Bond seamless construction."
        ],
        idealFor: ["​Marathon racing, triathlons, and long-distance speed work", "High-humidity and extreme heat training environments", "Activities requiring zero-distraction, minimal weight, and maximum cooling", "Elite athletes seeking the highest level of technical fabric performance"],
        careInstructions: ["Machine wash cold, inside out, on a gentle cycle.", "Crucial: Do not use fabric softeners, bleach, or iron (heat damages the bonded seams).", "Hang dry only to preserve the integrity of the specialized fabric and construction."],
        variants: [
            {
                name: "AeroShirt Striped Tee",
                mainImage: "Images/AeroShirt11.webp",
                thumbnails: [
                    "Images/AeroShirt11.webp",
                    "Images/AeroShirt12.webp",
                    "Images/AeroShirt13.webp"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 15,
        title: "FIBA Team USA WHITE JERSEY", 
        price: "₱2,100.00",
        priceValue: 2100,
        category: "Apparel",
        shortDescription: "Own a piece of international basketball history; this traditional white home uniform represents the undisputed excellence and dominance of Team USA on the world stage.",
        description: "Own a piece of international basketball history with the FIBA Team USA White Jersey. As the traditional home uniform, the white jersey represents the undisputed excellence and dominance of the United States on the world stage, worn by basketball legends from the Dream Team era to the current generation of superstars.",

        features: [
            "Pro-Dri Mesh: Lightweight, breathable performance mesh fabric optimized for rapid moisture transport and exceptional comfort, even in high-heat conditions.",
            "Official Team Markings: Features high-quality, heat-applied or stitched graphics (USA, number, name) and the official FIBA or national team logos.",
            "Authentic Game Cut: Designed with the official cut and proportions for a classic, relaxed basketball jersey look true to the specifications worn on the court.",
            "Patriotic Detailing: Includes subtle flag or national team insignias, often integrated into the neck or hemline for a touch of authenticity.",
        ],
        materials: [
            "Fabric: 100% Performance Polyester Mesh (Pro-Dri Tech)",
            "Trim: High-quality, heat-applied or stitched graphics."
        ],
        idealFor: ["Wearing to international basketball games, events, and watch parties", "Collecting historical and current Team USA memorabilia", "Casual wear as a premium tribute to basketball excellence", "Displaying as part of a significant sports collection"],
        careInstructions: ["Machine wash cold, inside out, on a gentle cycle.", "Crucial: Do not iron directly on the graphics or dry clean.", "Hang dry only (avoid tumble drying to protect screen-printed or heat-applied details)."],
        variants: [
            {
                name: "White",
                mainImage: "Images/Team_USA_White_Jersey.jpg",
                thumbnails: [
                    "Images/Team_USA_White_Jersey.webp",
                    "Images/Team_USA_White_Jersey.webp",
                    "Images/Team_USA_White_Jersey.webp"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 16,
        title: "White NBA Socks", 
        price: "₱900.00",
        priceValue: 900,
        category: "Essentials",
        shortDescription: "Don't let the classic look fool you—these are the most technically advanced socks in the game, engineered to be the ultimate foundation for explosive performance trusted by professionals.",
        description: "Don't let the classic look fool you—these are the most technically advanced socks in the game. The White NBA Socks are engineered to be the ultimate foundation for explosive performance, trusted by professionals and designed to enhance every jump, cut, and sprint.",

        features: [
            "Grip-Tech Fibers: Specialized micro-fibers woven into the footbed prevent slippage inside the shoe, ensuring maximum power transfer and stability during quick movements.",
            "Dynamic Compression Mapping: Targeted zonal compression supports the arch and ankle, enhancing blood flow and significantly reducing muscle fatigue during sustained activity.",
            "Air-Cooled Cushioning: Strategically placed, low-profile cushioning absorbs high impact while maintaining essential court feel and maximizing ventilation.",
            "NBA Pro Dri-Tech: Advanced moisture-wicking and quick-drying system keeps feet exceptionally dry, cool, and protected against blistering.",
        ],
        materials: [
            "Fabric: 65% Performance Polyester, 22% Nylon, 10% Cotton, 3% Spandex (Pro Dri-Tech)",
            "Trim: Seamless toe closure, High-density reinforcement at the heel and toe."
        ],
        idealFor: ["Professional basketball, intense training, and competition", "​Retro-inspired athleisure outfits", "​Light urban exploration and walking", "​Pairing with denim, chinos, or shorts"],
        careInstructions: ["Wipe clean with damp cloth", "High-impact sports requiring maximum stability, grip, and comfort", "​Athletes seeking superior recovery and muscle fatigue reduction", "Daily wear for maximum arch support and foot cushioning"],
        variants: [
            {
                name: "White",
                mainImage: "Images/White_NBA_1.jpg",
                thumbnails: [
                    "Images/White_NBA_2.webp",
                    "Images/White_NBA_1.jpg",
                    "Images/White_NBA_2.webp"
                ],
                sizes: ["One Size"]
            }
        ]
    },
    {
        id: 17,
        title: "White NBA Elite Socks", 
        price: "₱900.00",
        priceValue: 900,
        category: "Essentials",
        shortDescription: "Engineered for the game's highest stakes, these elite black socks provide specialized support and cushioning that transforms your connection to the court, giving you the ultimate advantage.",
        description: "When performance demands perfection, you wear the Black NBA Elite Socks. Engineered for the game's highest stakes, these socks provide specialized support and cushioning that transforms your connection to the court, giving you the elite advantage.",

        features: [
            "Pro-Grip Nanofibers: Advanced micro-fibers woven into the sole actively prevent any foot slippage for instant power transfer and zero energy loss during directional changes.",
            "Dynamic Compression Mapping: Targeted zonal compression stabilizes the arch and ankle, actively reducing muscle vibration and fatigue over extended periods.",
            "Ventilation Channels: Strategically mapped airflow channels ensure rapid heat and moisture escape, maintaining optimal foot temperature inside the shoe.",
            "Impact-Cushion System: Specialized high-density padding in the heel and forefoot is scientifically designed to absorb high-force impact without compromising court feel.",
        ],
        materials: [
            "Fabric: 65% Performance Polyester, 22% Nylon, 10% Cotton, 3% Spandex (Elite Performance Blend)",
            "Trim: Seamless toe closure, Reinforced heel and toe."
        ],
        idealFor: ["Professional basketball and high-stakes competition", "High-intensity training requiring maximum stability and precise court feel", "Athletes seeking superior recovery and muscle fatigue reduction", "Daily wear for maximum comfort and specialized support"],
        careInstructions: ["Machine wash cold with mild detergent and like colors.", "Do not use bleach or fabric softeners (softeners degrade the Grip-Tech fibers).", "Tumble dry low or hang dry."],
        variants: [
            {
                name: "White",
                mainImage: "Images/Black_NBA_Elite_1.jpg",
                thumbnails: [
                    "Images/Black_NBA_Elite_1.jpg",
                    "Images/Black_NBA_Elite_2.jpg",
                    "Images/Black_NBA_Elite_3.jpg"
                ],
                sizes: ["One Size"]
            }
        ]
    },
    {
        id: 18,
        title: "AeroKicks Stride Jacket", 
        price: "₱2,999.00",
        priceValue: 2999,
        category: "Apparel",
        shortDescription: "The essential, ultra-lightweight jacket engineered to provide maximum wind and weather protection for outdoor training without restricting movement.",
        description: "Engineered to complement your fastest stride, the AeroKicks Stride Jacket is the essential lightweight layer for all your outdoor training. It delivers crucial protection from the elements without ever compromising your freedom of movement.",

        features: [
            "AeroShield™ Fabric: Ultra-lightweight, technical shell fabric that is both wind and water-resistant and provides UV protection.",
            "Dynamic Venting: Strategically placed mesh panels on the back and underarms for optimal heat release and airflow.",
            "Packable Design: Easily folds into its own side pocket for convenient, on-the-go storage.",
            "360º Reflectivity: Subtle reflective accents enhance visibility for running in low-light conditions.",
        ],
        materials: [
            "Fabric: 100% Recycled Nylon (AeroShield™ Technology)",
            "Trim: 100% Polyester Mesh lining, Secure zippered pockets."
        ],
        idealFor: ["Morning and evening outdoor runs", "Layering over base layers in changing weather conditions", "Protection against light rain, wind, and sun exposure", "High-intensity aerobic training where breathability is crucial"],
        careInstructions: ["Do not use fabric softeners or bleach, as this can damage the technical membrane.", "Tumble dry low or hang dry immediately to preserve structure", "Do not iron."],
        variants: [
            {
                name: "Stride Jacket",
                mainImage: "Images/Aerokicks_Stride_Jacket.png",
                thumbnails: [
                    "Images/Aerokicks_Stride_Jacket2.png",
                    "Images/Aerokicks_Stride_Jacket3.png",
                    "Images/Aerokicks_Stride_Jacket.png",
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 19,
        title: "AeroKicks Air Jacket", 
        price: "₱4,995.00",
        priceValue: 4995,
        category: "Apparel",
        shortDescription: "Our most technologically advanced, featherweight layer engineered for supreme protection and unparalleled comfort during high-intensity performance.",
        description: "Introducing the AeroKicks Air Jacket, our most technologically advanced garment built to shatter the barrier between performance and comfort. We engineered this jacket to be so light, you'll forget you're wearing it, yet so protective, you'll never train without it.",

        features: [
            "AirWeave™ Fabric: Hyper-lightweight, 0.5-denier nylon that is fully waterproof, windproof, and designed to weigh under 100 grams.",
            "Vapor-Flow Membrane: Allows maximum moisture transfer to actively prevent internal clamminess and keep the interior dry.",
            "Minimalist Construction: Precision-bonded and laser-cut seams eliminate traditional stitching to prevent chafing and reduce drag.",
            "Pack-A-Way Pouch: Features an integrated self-stowing pocket for rapid, compact storage during fluctuating weather.",
        ],
        materials: [
            "Fabric: 100% Ultra-Lightweight Bonded Nylon (AirWeave™ Technology)",
            "Trim: Heat-sealed zippers, Micro-elastic cuffs and hem."
        ],
        idealFor: ["Competitive running and racing", "​Long-distance endurance training in variable weather", "Ultralight packing and mountain sports", "High-humidity environments where maximum breathability is crucial"],
        careInstructions: ["Hand wash or machine wash cold on delicate cycle only.", "Use a technical fabric wash; do not use liquid detergent, bleach, or fabric softeners.", "Hang dry immediately; do not tumble dry, iron, or dry clean."],
        variants: [
            {
                name: "Air Jacket",
                mainImage: "Images/Aerokicks_Air_Jacket.png",
                thumbnails: [
                    "Images/Aerokicks_Air_Jacket2.png",
                    "Images/Aerokicks_Air_Jacket3.png",
                    "Images/Aerokicks_Air_Jacket.png"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
    {
        id: 20,
        title: "Jordan Brooklyn Jacket", 
        price: "₱4,595.00",
        priceValue: 4595,
        category: "Apparel",
        shortDescription: "Our most technologically advanced, featherweight layer engineered for supreme protection and unparalleled comfort during high-intensity performance.",
        description: "Introducing the AeroKicks Air Jacket, our most technologically advanced garment built to shatter the barrier between performance and comfort. We engineered this jacket to be so light, you'll forget you're wearing it, yet so protective, you'll never train without it.",

        features: [
            "Flight-Grade Nylon: Durable, lightweight nylon shell treated with a water-repellent finish for reliable urban weather protection.",
            "Jordan Heritage Detailing: Features classic piping details and a subtly embroidered logo, directly inspired by '90s professional basketball aesthetics.",
            "Mesh & Taffeta Liner: Full mesh lining provides superior breathability, while the smooth taffeta interior ensures comfortable layering over any shirt.",
            "Two-Way Zipper: Allows for personalized ventilation, fit adjustment, and versatile styling options.",
        ],
        materials: [
            "Shell Fabric: 100% Durable Nylon",
            "Lining: 100% Polyester Mesh"
        ],
        idealFor: ["Streetwear and urban commuting", "Layering in unpredictable transitional weather", "Casual post-training recovery", "Achieving an authentic, athletic-heritage look"],
        careInstructions: ["Tumble dry low or hang to dry.", "Do not bleach or use softeners.", "Cool iron only; do not iron on logo or piping."],
        variants: [
            {
                name: "Jordan Brooklyn Jacket",
                mainImage: "Images/Aerokicks_Jordan_Brooklyn_Jacket.png",
                thumbnails: [
                    "Images/Aerokicks_Jordan_Brooklyn_Jacket2.png",
                    "Images/Aerokicks_Jordan_Brooklyn_Jacket3.png",
                    "Images/Aerokicks_Jordan_Brooklyn_Jacket.png"
                ],
                sizes: ["XS", "S", "M", "L", "XL", "XXL"]
            }
        ]
    },
];

console.log('products.js loaded with', products.length, 'products');






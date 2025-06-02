import { useState } from "react";
import { FaFilter, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [cart, setCart] = useState([]);

  // Products data with improved images and additional products
  const products = [
    {
      id: 1,
      name: "Premium Whey Protein Isolate",
      description: "High-quality protein powder with 27g protein per serving. Aids muscle recovery and growth.",
      price: 49.99,
      image: "/TagheerProducts/Premium Whey Protein.jpg", // Corrected filename
      category: "protein",
      inStock: true,
      rating: 4.8,
      bestseller: true,
    },
    {
      id: 2,
      name: "Explosive Pre-Workout Formula",
      description: "Boosts energy, focus and performance during workouts with caffeine and beta-alanine.",
      price: 39.99,
      image: "/TagheerProducts/Explosive Pre-Workout Booster.jpg", // Corrected filename
      category: "pre-workout",
      inStock: true,
      rating: 4.5,
      bestseller: false,
    },
    {
      id: 3,
      name: "BCAA Recovery Blend",
      description: "Branched-chain amino acids to support muscle recovery and reduce soreness.",
      price: 34.99,
      image: "/TagheerProducts/BCAA Recovery Blend.png", // Corrected filename
      category: "amino-acids",
      inStock: true,
      rating: 4.6,
      bestseller: false,
    },
    {
      id: 4,
      name: "Micronized Creatine Monohydrate",
      description: "Increases strength, power and muscle mass. Scientifically proven performance enhancer.",
      price: 29.99,
      image: "/TagheerProducts/Micronized Creatine.jpg", // Corrected filename
      category: "performance",
      inStock: false,
      rating: 4.9,
      bestseller: true,
    },
    {
      id: 5,
      name: "Mass Gainer 3000",
      description: "High-calorie formula with protein, carbs and healthy fats for muscle and weight gain.",
      price: 54.99,
      image: "/TagheerProducts/Mass Gainer 3000.jpg", // Corrected filename
      category: "protein",
      inStock: true,
      rating: 4.3,
      bestseller: false,
    },
 
    {
      id: 7,
      name: "Premium Shaker Bottle",
      description: "Leak-proof bottle with mixer ball for smooth protein shakes on the go.",
      price: 9.99,
      image: "/TagheerProducts/Premium Shaker Bottle.jpg", // Corrected filename
      category: "accessories",
      inStock: true,
      rating: 4.2,
      bestseller: false,
    },
    {
      id: 8,
      name: "Protein Bars Variety Pack",
      description: "20g protein per bar with minimal sugar. Perfect for on-the-go nutrition.",
      price: 29.99,
      image: "/TagheerProducts/Protein Bars Variety Pack.jpg", // Corrected filename
      category: "protein",
      inStock: true,
      rating: 4.4,
      bestseller: true,
    },
    {
      id: 9,
      name: "Pro Weight Lifting Belt",
      description: "Durable leather belt providing lumbar support during heavy lifts.",
      price: 59.99,
      image: "/TagheerProducts/Pro Weight Lifting Belt.jpg", // Corrected filename
      category: "accessories",
      inStock: true,
      rating: 4.8,
      bestseller: false,
    },
    {
      id: 10,
      name: "Thermogenic Fat Burner",
      description: "Thermogenic formula to support metabolism and fat loss when combined with exercise.",
      price: 44.99,
      image: "/TagheerProducts/Thermogenic Fat Burner.jpg", // Corrected filename
      category: "performance",
      inStock: true,
      rating: 4.1,
      bestseller: false,
    },
    {
      id: 11,
      name: "Plant-Based Protein",
      description: "Complete vegan protein blend with 24g protein per serving. Dairy and gluten-free.",
      price: 52.99,
      image: "/TagheerProducts/Plant-Based Protein powder.jpg", // Corrected filename
      category: "protein",
      inStock: true,
      rating: 4.7,
      bestseller: false,
    },
    {
      id: 12,
      name: "Collagen Peptides",
      description: "Supports healthy skin, joints, and connective tissues. Unflavored and mixes easily.",
      price: 36.99,
      image: "/TagheerProducts/Collagen Peptides.png",
      category: "vitamins",
      inStock: true,
      rating: 4.6,
      bestseller: false,
    },
    {
      id: 13,
      name: "Lifting Straps",
      description: "Cotton lifting straps for improved grip during heavy pulling exercises.",
      price: 14.99,
      image: "/TagheerProducts/Lifting Straps.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.4,
      bestseller: false,
    },
    {
      id: 14,
      name: "ZMA Sleep & Recovery",
      description: "Zinc and Magnesium formula promoting better sleep quality and recovery.",
      price: 28.99,
      image: "/TagheerProducts/ZMA Sleep & Recovery.jpg",
      category: "performance",
      inStock: true,
      rating: 4.5,
      bestseller: false,
    },
    {
      id: 15,
      name: "Resistance Bands Set",
      description: "Set of 5 resistance bands with different tension levels for versatile workouts.",
      price: 24.99,
      image: "/TagheerProducts/Resistance Bands Set.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.7,
      bestseller: true,
    },
    {
      id: 16,
      name: "Casein Protein",
      description: "Slow-digesting protein ideal for overnight muscle recovery.",
      price: 47.99,
      image: "/TagheerProducts/Casein Protein.jpg",
      category: "protein",
      inStock: true,
      rating: 4.5,
      bestseller: false,
    },
    {
      id: 17,
      name: "Vitamin D3 + K2",
      description: "Supports bone health, immune function and calcium absorption.",
      price: 19.99,
      image: "/TagheerProducts/Vitamin D3 + K2.jpg",
      category: "vitamins",
      inStock: true,
      rating: 4.8,
      bestseller: false,
    },
    {
      id: 18,
      name: "Wrist Wraps",
      description: "Professional grade wrist support for pressing movements and overhead lifts.",
      price: 17.99,
      image: "/TagheerProducts/Wrist Wraps.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.6,
      bestseller: false,
    },
    {
      id: 19,
      name: "EAA Complex",
      description: "Complete essential amino acid profile for muscle protein synthesis and recovery.",
      price: 39.99,
      image: "/TagheerProducts/EAA Complex.jpg",
      category: "amino-acids",
      inStock: true,
      rating: 4.7,
      bestseller: false,
    },
    {
      id: 20,
      name: "Stimulant-Free Pre-Workout",
      description: "Caffeine-free formula with pump enhancers and focus ingredients for evening workouts.",
      price: 38.99,
      image: "/TagheerProducts/Stimulant-Free Pre-Workout.jpg",
      category: "pre-workout",
      inStock: true,
      rating: 4.3,
      bestseller: false,
    },
    {
      id: 21,
      name: "Omega-3 Fish Oil",
      description: "High-potency EPA and DHA supporting heart health, brain function and reducing inflammation.",
      price: 22.99,
      image: "/TagheerProducts/Omega-3 Fish Oil.png",
      category: "vitamins",
      inStock: true,
      rating: 4.8,
      bestseller: true,
    },
    {
      id: 22,
      name: "Gym Duffel Bag",
      description: "Spacious bag with compartments for clothes, supplements, and accessories.",
      price: 39.99,
      image: "/TagheerProducts/Gym Duffel Bag.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.5,
      bestseller: false,
    },
    {
      id: 23,
      name: "Glucose Disposal Agent",
      description: "Supports proper nutrient partitioning and carbohydrate metabolism.",
      price: 33.99,
      image: "/TagheerProducts/Glucose Disposal Agent.jpg",
      category: "performance",
      inStock: true,
      rating: 4.2,
      bestseller: false,
    },
    {
      id: 24,
      name: "Electrolyte Formula",
      description: "Complete hydration mix with essential minerals for optimal performance and recovery.",
      price: 26.99,
      image: "/TagheerProducts/Electrolyte Formula.jpg",
      category: "performance",
      inStock: true,
      rating: 4.6,
      bestseller: false,
    },
    {
      id: 25,
      name: "Men's Performance T-Shirt",
      description: "Moisture-wicking fabric with anti-odor technology for comfortable workouts.",
      price: 29.99,
      image: "/TagheerProducts/Men's Performance T-Shirt gym.jpg",
      category: "clothing",
      inStock: true,
      rating: 4.7,
      bestseller: true,
    },
    {
      id: 26,
      name: "Women's Compression Leggings",
      description: "High-waisted design with supportive compression for maximum performance.",
      price: 44.99,
      image: "/TagheerProducts/Women's Compression Leggings.jpg",
      category: "clothing",
      inStock: true,
      rating: 4.8,
      bestseller: true,
    },
    {
      id: 27,
      name: "Adjustable Kettlebell",
      description: "Space-saving design with adjustable weights from 5-40 lbs for versatile training.",
      price: 129.99,
      image: "/TagheerProducts/Adjustable Kettlebell.jpg",
      category: "equipment",
      inStock: true,
      rating: 4.9,
      bestseller: false,
    },
    {
      id: 28,
      name: "Premium Yoga Mat",
      description: "Extra thick, non-slip surface for comfortable and stable practice.",
      price: 49.99,
      image: "/TagheerProducts/Premium Yoga Mat.jpg",
      category: "equipment",
      inStock: true,
      rating: 4.7,
      bestseller: false,
    },
    {
      id: 29,
      name: "Wireless Fitness Earbuds",
      description: "Sweat-resistant, secure-fit earbuds with 8-hour battery life for uninterrupted workouts.",
      price: 79.99,
      image: "/TagheerProducts/Wireless Fitness Earbuds.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.5,
      bestseller: true,
    },
    {
      id: 30,
      name: "Foam Roller",
      description: "High-density foam roller for myofascial release and post-workout recovery.",
      price: 24.99,
      image: "/TagheerProducts/Foam Roller.jpg",
      category: "equipment",
      inStock: true,
      rating: 4.6,
      bestseller: false,
    },
    {
      id: 31,
      name: "Fitness Tracking Watch",
      description: "Monitors heart rate, sleep, activity levels and workout metrics for optimal training.",
      price: 149.99,
      image: "/TagheerProducts/Fitness Tracking Watch.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.8,
      bestseller: true,
    },
   
    {
      id: 33,
      name: "Suspension Training System",
      description: "Portable bodyweight training system for full-body workouts anywhere.",
      price: 89.99,
      image: "/TagheerProducts/Suspension Training System.jpg",
      category: "equipment",
      inStock: true,
      rating: 4.9,
      bestseller: true,
    },
    {
      id: 34,
      name: "Kinesiology Tape",
      description: "Therapeutic tape for muscle support and pain relief during activity.",
      price: 15.99,
      image: "/TagheerProducts/Kinesiology Tape.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.3,
      bestseller: false,
    },
    {
      id: 35,
      name: "Performance Knee Sleeves",
      description: "Compression knee support for squats, weightlifting and athletic movements.",
      price: 34.99,
      image: "/TagheerProducts/Performance Knee Sleeves.jpg",
      category: "accessories",
      inStock: true,
      rating: 4.7,
      bestseller: false,
    },
    {
      id: 36,
      name: "High Protein Oatmeal",
      description: "Ready-to-eat oatmeal with 20g protein and low sugar for a perfect breakfast.",
      price: 27.99,
      image: "/TagheerProducts/High Protein Oatmeal.jpg",
      category: "protein",
      inStock: true,
      rating: 4.4,
      bestseller: false,
    },
  ];

  // Filter and sort products
  const filterAndSortProducts = () => {
    let filteredProducts = [...products];

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }

    // Apply price filter
    if (priceFilter !== "all") {
      if (priceFilter === "under-25") {
        filteredProducts = filteredProducts.filter(product => product.price < 25);
      } else if (priceFilter === "25-50") {
        filteredProducts = filteredProducts.filter(product => product.price >= 25 && product.price <= 50);
      } else if (priceFilter === "over-50") {
        filteredProducts = filteredProducts.filter(product => product.price > 50);
      }
    }

    // Apply sorting
    if (sortBy === "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "popularity") {
      filteredProducts.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return filteredProducts;
  };

  // Group products by category for the tabs
  const categories = ["all", "protein", "pre-workout", "amino-acids", "performance", "vitamins", "accessories", "clothing", "equipment"];
  const getProductsByCategory = (category) => {
    const filtered = filterAndSortProducts();
    return category === "all"
      ? filtered
      : filtered.filter(product => product.category === category);
  };

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.name} added to cart`);
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="container py-12">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Shop</h1>
          <p className="text-muted-foreground max-w-2xl">
            Quality supplements and fitness accessories to support your training and nutrition needs.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Cart Summary */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="relative">
                <FaShoppingCart className="h-4 w-4" />
                {cart.length > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {cart.length > 0 ? (
                <>
                  <div className="max-h-64 overflow-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between p-2">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 overflow-hidden rounded-md">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.quantity} x ${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="text-sm font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                  <DropdownMenuSeparator />
                  <div className="p-2">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                    </div>
                    <Button className="w-full">Checkout</Button>
                  </div>
                </>
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  Your cart is empty
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Price Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FaFilter className="h-4 w-4" />
                <span className="hidden md:inline">Price</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by Price</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={priceFilter} onValueChange={setPriceFilter}>
                <DropdownMenuRadioItem value="all">All Prices</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="under-25">Under $25</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="25-50">$25 - $50</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="over-50">Over $50</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Sort By */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <span className="hidden md:inline">Sort By</span>
                <span className="md:hidden">Sort</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort Products</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                <DropdownMenuRadioItem value="popularity">Popularity</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="rating">Rating</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="all">
          <TabsList className="mb-8 flex flex-wrap justify-start">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category.replace("-", " ")}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category} value={category}>
              {getProductsByCategory(category).length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {getProductsByCategory(category).map(product => (
                    <Card key={product.id} className="overflow-hidden transition-all hover:shadow-md">
                      <div className="relative">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        {product.bestseller && (
                          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                            Bestseller
                          </div>
                        )}
                        {!product.inStock && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <span className="bg-red-500 text-white px-3 py-1 text-sm font-bold">Out of Stock</span>
                          </div>
                        )}
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                    stroke="currentColor"
                                    className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                  >
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                  </svg>
                                ))}
                              </div>
                              <span className="ml-1 text-xs text-muted-foreground">{product.rating}</span>
                            </div>
                          </div>
                          <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardDescription className="line-clamp-2 mb-4">{product.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full"
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-muted-foreground">No products found with the selected filters.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setPriceFilter("all");
                      setSearchQuery("");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;

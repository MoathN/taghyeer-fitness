import { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data loading
  useEffect(() => {
    const fetchProducts = async () => {
      // Simulate API call
      setTimeout(() => {
        const mockProducts = [
          {
            id: 1,
            name: "Premium Protein Powder",
            category: "Supplements",
            price: 49.99,
            stock: 45,
            status: "in-stock",
          },
          {
            id: 2,
            name: "Resistance Bands Set",
            category: "Equipment",
            price: 29.99,
            stock: 32,
            status: "in-stock",
          },
          {
            id: 3,
            name: "Fitness Tracker Watch",
            category: "Accessories",
            price: 129.99,
            stock: 18,
            status: "in-stock",
          },
          {
            id: 4,
            name: "Workout Gloves",
            category: "Accessories",
            price: 19.99,
            stock: 0,
            status: "out-of-stock",
          },
          {
            id: 5,
            name: "Pre-Workout Formula",
            category: "Supplements",
            price: 39.99,
            stock: 27,
            status: "in-stock",
          },
          {
            id: 6,
            name: "Adjustable Dumbbells",
            category: "Equipment",
            price: 199.99,
            stock: 5,
            status: "low-stock",
          },
        ];
        setProducts(mockProducts);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "in-stock":
        return <Badge className="bg-green-100 text-green-800">In Stock</Badge>;
      case "low-stock":
        return <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
      case "out-of-stock":
        return <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Product Management</h1>
        <p className="text-muted-foreground">Manage shop products and inventory</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage fitness products and supplements</CardDescription>
          </div>
          <Button className="flex items-center gap-2">
            <FaPlus />
            <span>Add Product</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center p-6">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6">
                        No products found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{getStatusBadge(product.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <FaEye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <FaEdit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-500">
                              <FaTrash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProducts;
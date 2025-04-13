import { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
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

const AdminMemberships = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data loading
  useEffect(() => {
    const fetchMemberships = async () => {
      // Simulate API call
      setTimeout(() => {
        const mockMemberships = [
          {
            id: 1,
            name: "Basic",
            price: 29.99,
            billingCycle: "monthly",
            features: ["Access to gym", "Basic workout plans", "Fitness assessment"],
            activeUsers: 342,
            status: "active",
          },
          {
            id: 2,
            name: "Premium",
            price: 49.99,
            billingCycle: "monthly",
            features: [
              "Access to gym",
              "All workout plans",
              "Fitness assessment",
              "Nutrition guidance",
              "1 personal training session/month",
            ],
            activeUsers: 412,
            status: "active",
          },
          {
            id: 3,
            name: "Elite",
            price: 79.99,
            billingCycle: "monthly",
            features: [
              "Access to gym",
              "All workout plans",
              "Fitness assessment",
              "Nutrition guidance",
              "4 personal training sessions/month",
              "Priority booking",
              "Exclusive classes",
            ],
            activeUsers: 122,
            status: "active",
          },
          {
            id: 4,
            name: "Student",
            price: 19.99,
            billingCycle: "monthly",
            features: ["Access to gym", "Basic workout plans"],
            activeUsers: 78,
            status: "active",
          },
          {
            id: 5,
            name: "Summer Special",
            price: 39.99,
            billingCycle: "monthly",
            features: [
              "Access to gym",
              "All workout plans",
              "Fitness assessment",
              "Nutrition guidance",
            ],
            activeUsers: 0,
            status: "draft",
          },
        ];
        setMemberships(mockMemberships);
        setLoading(false);
      }, 1000);
    };

    fetchMemberships();
  }, []);

  // Filter memberships based on search term
  const filteredMemberships = memberships.filter((membership) =>
    membership.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>;
      case "archived":
        return <Badge className="bg-red-100 text-red-800">Archived</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  // Format price
  const formatPrice = (price, cycle) => {
    return `$${price}/${cycle === "monthly" ? "mo" : "yr"}`;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Membership Management</h1>
        <p className="text-muted-foreground">Create and manage membership plans</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Membership Plans</CardTitle>
            <CardDescription>Manage subscription offerings</CardDescription>
          </div>
          <Button className="flex items-center gap-2">
            <FaPlus />
            <span>Create Plan</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search membership plans..."
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
                    <TableHead>Price</TableHead>
                    <TableHead>Features</TableHead>
                    <TableHead>Active Users</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMemberships.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-6">
                        No membership plans found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredMemberships.map((membership) => (
                      <TableRow key={membership.id}>
                        <TableCell className="font-medium">{membership.name}</TableCell>
                        <TableCell>
                          {formatPrice(membership.price, membership.billingCycle)}
                        </TableCell>
                        <TableCell>
                          <div className="max-w-xs truncate">
                            {membership.features.slice(0, 2).join(", ")}
                            {membership.features.length > 2 && "..."}
                          </div>
                        </TableCell>
                        <TableCell>{membership.activeUsers}</TableCell>
                        <TableCell>{getStatusBadge(membership.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
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

export default AdminMemberships;
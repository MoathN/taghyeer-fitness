import { useState, useEffect } from "react";
import { FaSearch, FaEdit, FaTrash, FaUserPlus, FaFilter } from "react-icons/fa";
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

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data loading
  useEffect(() => {
    const fetchUsers = async () => {
      // Simulate API call
      setTimeout(() => {
        const mockUsers = [
          {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            role: "member",
            membershipType: "Premium",
            status: "active",
            joinDate: "2023-01-15",
          },
          {
            id: 2,
            name: "Sarah Smith",
            email: "sarah.smith@example.com",
            role: "member",
            membershipType: "Basic",
            status: "active",
            joinDate: "2023-02-20",
          },
          {
            id: 3,
            name: "Admin User",
            email: "admin@taghyeer.com",
            role: "admin",
            membershipType: null,
            status: "active",
            joinDate: "2022-11-05",
          },
          {
            id: 4,
            name: "Mike Johnson",
            email: "mike.j@example.com",
            role: "member",
            membershipType: "Elite",
            status: "active",
            joinDate: "2023-03-10",
          },
          {
            id: 5,
            name: "Emily Brown",
            email: "emily.b@example.com",
            role: "member",
            membershipType: "Premium",
            status: "inactive",
            joinDate: "2023-01-05",
          },
          {
            id: 6,
            name: "David Wilson",
            email: "david.w@example.com",
            role: "trainer",
            membershipType: null,
            status: "active",
            joinDate: "2022-12-15",
          },
        ];
        setUsers(mockUsers);
        setLoading(false);
      }, 1000);
    };

    fetchUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get role badge
  const getRoleBadge = (role) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-purple-100 text-purple-800">Admin</Badge>;
      case "trainer":
        return <Badge className="bg-blue-100 text-blue-800">Trainer</Badge>;
      case "member":
        return <Badge className="bg-green-100 text-green-800">Member</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{role}</Badge>;
    }
  };

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return <Badge className="bg-red-100 text-red-800">Inactive</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <p className="text-muted-foreground">Manage users and their access</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage user accounts and permissions</CardDescription>
          </div>
          <Button className="flex items-center gap-2">
            <FaUserPlus />
            <span>Add User</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search users..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <FaFilter />
              <span>Filter</span>
            </Button>
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
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Membership</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        No users found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{getRoleBadge(user.role)}</TableCell>
                        <TableCell>
                          {user.membershipType || 
                            <span className="text-gray-400">N/A</span>}
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{formatDate(user.joinDate)}</TableCell>
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

export default AdminUsers;
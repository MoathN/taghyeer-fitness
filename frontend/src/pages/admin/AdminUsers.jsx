import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from '@/utils/axios';
import { FaSearch, FaEdit, FaTrash, FaUserPlus, FaFilter, FaSync, FaTimes } from "react-icons/fa";
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
import { toast } from "sonner";

const AdminUsers = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newlyCreatedEmail, setNewlyCreatedEmail] = useState(null);
  const [filters, setFilters] = useState({
    role: "",
    status: "",
    membershipType: ""
  });
  const [activeFilters, setActiveFilters] = useState(0);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'member',
    status: 'active',
    membershipType: 'free'
  });
  const [editUser, setEditUser] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
    status: '',
    membershipType: ''
  });

  // Check if coming from registration
  useEffect(() => {
    // Check if there's state with newly registered user
    if (location.state?.newUser) {
      setNewlyCreatedEmail(location.state.newUser.email);
      toast.success(`New user ${location.state.newUser.name} added!`);
      
      // Clear state after handling
      window.history.replaceState({}, document.title);
    }
    
    // Check localStorage for recent registration
    const checkLocalStorage = () => {
      const storedUser = localStorage.getItem('taghyeerUser');
      if (storedUser) {
        try {
          const userData = JSON.parse(storedUser);
          if (userData && userData.email) {
            setNewlyCreatedEmail(userData.email);
          }
        } catch (e) {
          console.error("Error parsing stored user data", e);
        }
      }
    };
    
    checkLocalStorage();
  }, [location]);

  // Fetch users from API
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/admin/users");
      setUsers(response.data);
      
      // If we have a newly created user, highlight them
      if (newlyCreatedEmail) {
        const foundUser = response.data.find(user => user.email === newlyCreatedEmail);
        if (foundUser) {
          // Clear search and filters to ensure the new user is visible
          setSearchTerm("");
          setFilters({
            role: "",
            status: "",
            membershipType: ""
          });
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to load users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    
    // Clear the newlyCreatedEmail after 10 seconds
    if (newlyCreatedEmail) {
      const timer = setTimeout(() => {
        setNewlyCreatedEmail(null);
        localStorage.removeItem('taghyeerUser');
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, [newlyCreatedEmail]);

  useEffect(() => {
    // Count active filters
    let count = 0;
    if (filters.role) count++;
    if (filters.status) count++;
    if (filters.membershipType) count++;
    setActiveFilters(count);
  }, [filters]);

  const handleRefresh = () => {
    fetchUsers();
    toast.success("User list refreshed");
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!newUser.name || !newUser.email || !newUser.password) {
      toast.error('Name, email, and password are required');
      return;
    }
    
    try {
      const response = await axiosInstance.post('/api/auth/register', newUser);
      
      if (response.data?.success) {
        toast.success('User added successfully');
        setShowAddModal(false);
        
        // Set newly created email for highlighting
        setNewlyCreatedEmail(newUser.email);
        
        // Reset form
        setNewUser({
          name: '',
          email: '',
          password: '',
          role: 'member',
          status: 'active',
          membershipType: 'free'
        });
        
        // Refresh user list
        fetchUsers();
      } else {
        toast.error(`Failed to add user: ${response.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to add user. Please try again later.');
      }
    }
  };

  const handleEditClick = (user) => {
    setEditUser({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      membershipType: user.membershipType
    });
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axiosInstance.put(`/api/admin/users/${editUser.id}`, {
        name: editUser.name,
        role: editUser.role,
        status: editUser.status,
        membershipType: editUser.membershipType
      });
      
      if (response.status === 200) {
        toast.success('User updated successfully');
        setShowEditModal(false);
        fetchUsers();
      } else {
        toast.error(`Failed to update user: ${response.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error(error.response?.data?.message || 'Failed to update user');
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await axiosInstance.delete(`/api/admin/users/${selectedUser.id}`);
      
      if (response.data?.success) {
        toast.success('User deleted successfully');
        setShowDeleteModal(false);
        fetchUsers();
      } else {
        toast.error(`Failed to delete user: ${response.data?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error(error.response?.data?.message || 'Failed to delete user');
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    setShowFilterModal(false);
    if (activeFilters > 0) {
      toast.success(`Filters applied: ${activeFilters} ${activeFilters === 1 ? 'filter' : 'filters'}`);
    }
  };

  const handleClearFilters = () => {
    setFilters({
      role: "",
      status: "",
      membershipType: ""
    });
    toast.success("Filters cleared");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Apply filters and search to the users
  const filteredUsers = users.filter(user => {
    // Apply text search
    const matchesSearch = 
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply filters
    const matchesRole = !filters.role || user.role === filters.role;
    const matchesStatus = !filters.status || user.status === filters.status;
    const matchesMembership = !filters.membershipType || user.membershipType === filters.membershipType;
    
    return matchesSearch && matchesRole && matchesStatus && matchesMembership;
  });

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
    if (!dateString) return "N/A";
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
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleRefresh}
            >
              <FaSync />
              <span>Refresh</span>
            </Button>
            <Button 
              className="flex items-center gap-2"
              onClick={() => setShowAddModal(true)}
            >
              <FaUserPlus />
              <span>Add User</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search users..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 relative"
              onClick={() => setShowFilterModal(true)}
            >
              <FaFilter />
              <span>Filter</span>
              {activeFilters > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {activeFilters}
                </span>
              )}
            </Button>
            {activeFilters > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-500"
                onClick={handleClearFilters}
              >
                <FaTimes className="mr-1" />
                Clear
              </Button>
            )}
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
                        {searchTerm || activeFilters > 0 ? 
                          "No users match your search or filters" : 
                          "No users found in the system"}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow 
                        key={user.id}
                        className={newlyCreatedEmail === user.email ? "bg-green-50" : ""}
                      >
                        <TableCell className="font-medium">
                          {user.name}
                          {newlyCreatedEmail === user.email && (
                            <Badge className="ml-2 bg-green-100 text-green-800">New</Badge>
                          )}
                        </TableCell>
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
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleEditClick(user)}
                            >
                              <FaEdit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-red-500"
                              onClick={() => handleDeleteClick(user)}
                            >
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

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New User</h2>
            <form onSubmit={handleAddUser}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  name="role"
                  value={newUser.role}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  value={newUser.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Membership Type</label>
                <select
                  name="membershipType"
                  value={newUser.membershipType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="free">Free</option>
                  <option value="premium">Premium</option>
                  <option value="pro">Pro</option>
                </select>
              </div>
              <div className="flex justify-end gap-3">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Add User
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={editUser.name}
                  onChange={handleEditInputChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={editUser.email}
                  disabled
                  className="bg-gray-100"
                />
                <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  name="role"
                  value={editUser.role}
                  onChange={handleEditInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  value={editUser.status}
                  onChange={handleEditInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Membership Type</label>
                <select
                  name="membershipType"
                  value={editUser.membershipType}
                  onChange={handleEditInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="free">Free</option>
                  <option value="premium">Premium</option>
                  <option value="pro">Pro</option>
                </select>
              </div>
              <div className="flex justify-end gap-3">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete User Confirmation Modal */}
      {showDeleteModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">Delete User</h2>
            <p className="mb-6">
              Are you sure you want to delete the user <span className="font-semibold">{selectedUser.name}</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </Button>
              <Button 
                type="button"
                variant="destructive"
                onClick={handleDeleteConfirm}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Filter Users</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  name="role"
                  value={filters.role}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="member">Member</option>
                  <option value="trainer">Trainer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Membership Type</label>
                <select
                  name="membershipType"
                  value={filters.membershipType}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Memberships</option>
                  <option value="premium">Premium</option>
                  <option value="pro">Pro</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <Button 
                type="button" 
                variant="outline"
                onClick={handleClearFilters}
              >
                Clear All
              </Button>
              <div className="flex gap-3">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowFilterModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="button"
                  onClick={handleApplyFilters}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
import { useState, useEffect } from "react";
import axios from "axios";
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
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdminMemberships = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentMembership, setCurrentMembership] = useState(null);
  const [newMembership, setNewMembership] = useState({
    name: "",
    description: "",
    price: 0,
    duration: 30,
    features: [],
    isPopular: false,
    status: "active"
  });

  // Fetch memberships from API
  const fetchMemberships = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/admin/memberships", {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      setMemberships(response.data);
    } catch (error) {
      console.error("Error fetching memberships:", error);
      toast.error("Failed to load memberships");
      
      // For demo purposes, add mock data if API fails
      setMemberships([
        {
          id: 1,
          name: "Basic Plan",
          description: "Access to basic gym facilities",
          price: 29.99,
          duration: 30,
          features: ["Gym Access", "Basic Equipment", "Locker Access"],
          isPopular: false,
          status: "active",
          subscribers: 78
        },
        {
          id: 2,
          name: "Premium Plan",
          description: "Full access to all gym facilities and classes",
          price: 49.99,
          duration: 30,
          features: ["Full Gym Access", "All Equipment", "Group Classes", "Locker Access", "Towel Service"],
          isPopular: true,
          status: "active",
          subscribers: 124
        },
        {
          id: 3,
          name: "Annual Membership",
          description: "Year-long membership with premium benefits",
          price: 399.99,
          duration: 365,
          features: ["Full Gym Access", "All Equipment", "Group Classes", "Personal Training Session", "Locker Access", "Towel Service"],
          isPopular: false,
          status: "active",
          subscribers: 45
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  // Filter memberships based on search term
  const filteredMemberships = memberships.filter(
    (membership) =>
      membership.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      membership.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Create a new membership
  const handleCreateMembership = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/admin/memberships", newMembership, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      
      setMemberships([...memberships, response.data]);
      toast.success("Membership created successfully!");
      setIsAddModalOpen(false);
      setNewMembership({
        name: "",
        description: "",
        price: 0,
        duration: 30,
        features: [],
        isPopular: false,
        status: "active"
      });
    } catch (error) {
      console.error("Error creating membership:", error);
      toast.error("Failed to create membership");
      
      // For demo purposes, create a mock membership if API fails
      const mockMembership = {
        ...newMembership,
        id: Date.now(),
        subscribers: 0
      };
      setMemberships([...memberships, mockMembership]);
      setIsAddModalOpen(false);
      toast.success("Membership created successfully! (Demo mode)");
      setNewMembership({
        name: "",
        description: "",
        price: 0,
        duration: 30,
        features: [],
        isPopular: false,
        status: "active"
      });
    }
  };

  // Update an existing membership
  const handleUpdateMembership = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/admin/memberships/${currentMembership.id}`, currentMembership, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      
      setMemberships(memberships.map(m => m.id === currentMembership.id ? response.data : m));
      toast.success("Membership updated successfully!");
      setIsEditModalOpen(false);
      setCurrentMembership(null);
    } catch (error) {
      console.error("Error updating membership:", error);
      toast.error("Failed to update membership");
      
      // For demo purposes, update the membership in local state if API fails
      setMemberships(memberships.map(m => m.id === currentMembership.id ? currentMembership : m));
      setIsEditModalOpen(false);
      toast.success("Membership updated successfully! (Demo mode)");
      setCurrentMembership(null);
    }
  };

  // Delete a membership
  const handleDeleteMembership = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/memberships/${currentMembership.id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      
      setMemberships(memberships.filter(m => m.id !== currentMembership.id));
      toast.success("Membership deleted successfully!");
      setIsDeleteDialogOpen(false);
      setCurrentMembership(null);
    } catch (error) {
      console.error("Error deleting membership:", error);
      toast.error("Failed to delete membership");
      
      // For demo purposes, remove the membership from local state if API fails
      setMemberships(memberships.filter(m => m.id !== currentMembership.id));
      setIsDeleteDialogOpen(false);
      toast.success("Membership deleted successfully! (Demo mode)");
      setCurrentMembership(null);
    }
  };

  // Handle feature input
  const handleFeatureInput = (e, target) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      e.preventDefault();
      const newFeature = e.target.value.trim();
      
      if (target === 'new') {
        setNewMembership({
          ...newMembership,
          features: [...(newMembership.features || []), newFeature]
        });
      } else {
        setCurrentMembership({
          ...currentMembership,
          features: [...(currentMembership.features || []), newFeature]
        });
      }
      
      e.target.value = '';
    }
  };

  // Remove a feature
  const removeFeature = (index, target) => {
    if (target === 'new') {
      const updatedFeatures = [...newMembership.features];
      updatedFeatures.splice(index, 1);
      setNewMembership({...newMembership, features: updatedFeatures});
    } else {
      const updatedFeatures = [...currentMembership.features];
      updatedFeatures.splice(index, 1);
      setCurrentMembership({...currentMembership, features: updatedFeatures});
    }
  };

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
      case "coming_soon":
        return <Badge className="bg-yellow-100 text-yellow-800">Coming Soon</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
    }
  };

  // Format price
  const formatPrice = (price) => {
    return `$${parseFloat(price).toFixed(2)}`;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Memberships</h1>
        <p className="text-muted-foreground">Manage membership plans for your fitness center</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Membership Plans</CardTitle>
            <CardDescription>Create and manage membership options for your clients</CardDescription>
          </div>
          <Button className="flex items-center gap-2" onClick={() => setIsAddModalOpen(true)}>
            <FaPlus />
            <span>Add Plan</span>
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
                    <TableHead>Duration</TableHead>
                    <TableHead>Popular</TableHead>
                    <TableHead>Subscribers</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMemberships.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        {searchTerm ? "No membership plans found with that search term" : "No membership plans found in the system"}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredMemberships.map((membership) => (
                      <TableRow key={membership.id}>
                        <TableCell className="font-medium">{membership.name}</TableCell>
                        <TableCell>{formatPrice(membership.price)}</TableCell>
                        <TableCell>
                          {membership.duration === 30 ? "Monthly" : 
                           membership.duration === 365 ? "Annual" : 
                           `${membership.duration} days`}
                        </TableCell>
                        <TableCell>
                          {membership.isPopular ? 
                            <Badge className="bg-purple-100 text-purple-800">Popular</Badge> : 
                            "No"}
                        </TableCell>
                        <TableCell>{membership.subscribers || 0}</TableCell>
                        <TableCell>{getStatusBadge(membership.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => {
                                setCurrentMembership(membership);
                                setIsEditModalOpen(true);
                              }}
                            >
                              <FaEdit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-red-500"
                              onClick={() => {
                                setCurrentMembership(membership);
                                setIsDeleteDialogOpen(true);
                              }}
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

      {/* Add Membership Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Membership Plan</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="name">Plan Name</Label>
                <Input
                  id="name"
                  value={newMembership.name}
                  onChange={(e) => setNewMembership({...newMembership, name: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={newMembership.description}
                  onChange={(e) => setNewMembership({...newMembership, description: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={newMembership.price}
                    onChange={(e) => setNewMembership({...newMembership, price: parseFloat(e.target.value) || 0})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="duration">Duration (days)</Label>
                  <Select
                    value={String(newMembership.duration)}
                    onValueChange={(value) => setNewMembership({...newMembership, duration: parseInt(value)})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">Monthly (30 days)</SelectItem>
                      <SelectItem value="90">Quarterly (90 days)</SelectItem>
                      <SelectItem value="180">Semi-Annual (180 days)</SelectItem>
                      <SelectItem value="365">Annual (365 days)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="features">Features (press Enter after each)</Label>
                <Input
                  id="features"
                  placeholder="Add a feature and press Enter..."
                  onKeyDown={(e) => handleFeatureInput(e, 'new')}
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {(newMembership.features || []).map((feature, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-800 pr-1">
                      {feature}
                      <button
                        className="ml-2 text-gray-500 hover:text-red-500"
                        onClick={() => removeFeature(index, 'new')}
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isPopular"
                    checked={newMembership.isPopular}
                    onChange={(e) => setNewMembership({...newMembership, isPopular: e.target.checked})}
                  />
                  <Label htmlFor="isPopular">Mark as Popular</Label>
                </div>
                
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newMembership.status}
                    onValueChange={(value) => setNewMembership({...newMembership, status: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="coming_soon">Coming Soon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
            <Button onClick={handleCreateMembership}>Create Plan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Membership Modal */}
      {currentMembership && (
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Membership Plan</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="edit-name">Plan Name</Label>
                  <Input
                    id="edit-name"
                    value={currentMembership.name}
                    onChange={(e) => setCurrentMembership({...currentMembership, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    rows={3}
                    value={currentMembership.description}
                    onChange={(e) => setCurrentMembership({...currentMembership, description: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-price">Price ($)</Label>
                    <Input
                      id="edit-price"
                      type="number"
                      step="0.01"
                      value={currentMembership.price}
                      onChange={(e) => setCurrentMembership({...currentMembership, price: parseFloat(e.target.value) || 0})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="edit-duration">Duration (days)</Label>
                    <Select
                      value={String(currentMembership.duration)}
                      onValueChange={(value) => setCurrentMembership({...currentMembership, duration: parseInt(value)})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">Monthly (30 days)</SelectItem>
                        <SelectItem value="90">Quarterly (90 days)</SelectItem>
                        <SelectItem value="180">Semi-Annual (180 days)</SelectItem>
                        <SelectItem value="365">Annual (365 days)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="edit-features">Features (press Enter after each)</Label>
                  <Input
                    id="edit-features"
                    placeholder="Add a feature and press Enter..."
                    onKeyDown={(e) => handleFeatureInput(e, 'edit')}
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(currentMembership.features || []).map((feature, index) => (
                      <Badge key={index} className="bg-gray-100 text-gray-800 pr-1">
                        {feature}
                        <button
                          className="ml-2 text-gray-500 hover:text-red-500"
                          onClick={() => removeFeature(index, 'edit')}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="edit-isPopular"
                      checked={currentMembership.isPopular}
                      onChange={(e) => setCurrentMembership({...currentMembership, isPopular: e.target.checked})}
                    />
                    <Label htmlFor="edit-isPopular">Mark as Popular</Label>
                  </div>
                  
                  <div>
                    <Label htmlFor="edit-status">Status</Label>
                    <Select
                      value={currentMembership.status}
                      onValueChange={(value) => setCurrentMembership({...currentMembership, status: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="coming_soon">Coming Soon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
              <Button onClick={handleUpdateMembership}>Update Plan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      {currentMembership && (
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>Are you sure you want to delete the "{currentMembership.name}" plan?</p>
              <p className="text-sm text-muted-foreground mt-2">
                This plan has {currentMembership.subscribers || 0} active subscribers. 
                Deleting it will affect these users.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeleteMembership}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminMemberships;
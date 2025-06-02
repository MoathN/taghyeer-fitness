import { useState, useEffect } from "react";
import axios from "axios";
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
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const AdminWorkoutPlans = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [newPlan, setNewPlan] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "beginner",
    duration: 4,
    sessions: 12,
    trainer: "",
    featured: false,
    image: "https://via.placeholder.com/500x300?text=Workout+Plan",
  });

  // Fetch workout plans from API
  const fetchWorkoutPlans = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/api/admin/workout-plans", {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      setWorkoutPlans(response.data);
    } catch (error) {
      console.error("Error fetching workout plans:", error);
      toast.error("Failed to load workout plans");
      // For demo purposes, add mock data if API fails
      setWorkoutPlans([
        {
          id: 1,
          title: "8 Week Body Transformation",
          description: "Complete body transformation program",
          category: "Weight Loss",
          difficulty: "intermediate",
          duration: 8,
          sessions: 24,
          trainer: "Alex Johnson",
          featured: true,
          status: "active",
          enrollments: 145
        },
        {
          id: 2,
          title: "Core Strength Mastery",
          description: "Develop core strength and stability",
          category: "Strength",
          difficulty: "advanced",
          duration: 6,
          sessions: 18,
          trainer: "Samantha Lee",
          featured: false,
          status: "active",
          enrollments: 87
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkoutPlans();
  }, []);

  // Filter workout plans based on search term
  const filteredWorkoutPlans = workoutPlans.filter(
    (plan) =>
      plan.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Create a new workout plan
  const handleCreatePlan = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/admin/workout-plans", newPlan, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      
      setWorkoutPlans([...workoutPlans, response.data]);
      toast.success("Workout plan created successfully!");
      setIsAddModalOpen(false);
      setNewPlan({
        title: "",
        description: "",
        category: "",
        difficulty: "beginner",
        duration: 4,
        sessions: 12,
        trainer: "",
        featured: false,
        image: "https://via.placeholder.com/500x300?text=Workout+Plan",
      });
    } catch (error) {
      console.error("Error creating workout plan:", error);
      toast.error("Failed to create workout plan");
      
      // For demo purposes, create a mock plan if API fails
      const mockPlan = {
        ...newPlan,
        id: Date.now(),
        status: "active",
        enrollments: 0
      };
      setWorkoutPlans([...workoutPlans, mockPlan]);
      setIsAddModalOpen(false);
      toast.success("Workout plan created successfully! (Demo mode)");
      setNewPlan({
        title: "",
        description: "",
        category: "",
        difficulty: "beginner",
        duration: 4,
        sessions: 12,
        trainer: "",
        featured: false,
        image: "https://via.placeholder.com/500x300?text=Workout+Plan",
      });
    }
  };

  // Update an existing workout plan
  const handleUpdatePlan = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/admin/workout-plans/${currentPlan.id}`, currentPlan, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      
      setWorkoutPlans(workoutPlans.map(plan => plan.id === currentPlan.id ? response.data : plan));
      toast.success("Workout plan updated successfully!");
      setIsEditModalOpen(false);
      setCurrentPlan(null);
    } catch (error) {
      console.error("Error updating workout plan:", error);
      toast.error("Failed to update workout plan");
      
      // For demo purposes, update the plan in local state if API fails
      setWorkoutPlans(workoutPlans.map(plan => plan.id === currentPlan.id ? currentPlan : plan));
      setIsEditModalOpen(false);
      toast.success("Workout plan updated successfully! (Demo mode)");
      setCurrentPlan(null);
    }
  };

  // Delete a workout plan
  const handleDeletePlan = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/workout-plans/${currentPlan.id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      
      setWorkoutPlans(workoutPlans.filter(plan => plan.id !== currentPlan.id));
      toast.success("Workout plan deleted successfully!");
      setIsDeleteDialogOpen(false);
      setCurrentPlan(null);
    } catch (error) {
      console.error("Error deleting workout plan:", error);
      toast.error("Failed to delete workout plan");
      
      // For demo purposes, remove the plan from local state if API fails
      setWorkoutPlans(workoutPlans.filter(plan => plan.id !== currentPlan.id));
      setIsDeleteDialogOpen(false);
      toast.success("Workout plan deleted successfully! (Demo mode)");
      setCurrentPlan(null);
    }
  };

  // Get difficulty badge
  const getDifficultyBadge = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "beginner":
        return <Badge className="bg-green-100 text-green-800">Beginner</Badge>;
      case "intermediate":
        return <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>;
      case "advanced":
        return <Badge className="bg-red-100 text-red-800">Advanced</Badge>;
      case "all levels":
        return <Badge className="bg-blue-100 text-blue-800">All Levels</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{difficulty || "Unknown"}</Badge>;
    }
  };

  // Get status badge
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800">Draft</Badge>;
      case "archived":
        return <Badge className="bg-gray-100 text-gray-800">Archived</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-800">{status}</Badge>;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Workout Plans</h1>
        <p className="text-muted-foreground">Manage your fitness programs</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Fitness Programs</CardTitle>
            <CardDescription>Create and manage workout plans for your members</CardDescription>
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
                placeholder="Search workout plans..."
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
                    <TableHead>Difficulty</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Sessions</TableHead>
                    <TableHead>Enrollments</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWorkoutPlans.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-6">
                        {searchTerm ? "No workout plans found with that search term" : "No workout plans found in the system"}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredWorkoutPlans.map((plan) => (
                      <TableRow key={plan.id}>
                        <TableCell className="font-medium">{plan.title}</TableCell>
                        <TableCell>{plan.category}</TableCell>
                        <TableCell>{getDifficultyBadge(plan.difficulty)}</TableCell>
                        <TableCell>{plan.duration} weeks</TableCell>
                        <TableCell>{plan.sessions}</TableCell>
                        <TableCell>{plan.enrollments ?? 0}</TableCell>
                        <TableCell>{getStatusBadge(plan.status || "active")}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <FaEye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => {
                                setCurrentPlan(plan);
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
                                setCurrentPlan(plan);
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

      {/* Add Workout Plan Modal */}
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Workout Plan</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="title">Plan Title</Label>
                <Input
                  id="title"
                  value={newPlan.title}
                  onChange={(e) => setNewPlan({...newPlan, title: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={newPlan.description}
                  onChange={(e) => setNewPlan({...newPlan, description: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={newPlan.category}
                    onChange={(e) => setNewPlan({...newPlan, category: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select
                    value={newPlan.difficulty}
                    onValueChange={(value) => setNewPlan({...newPlan, difficulty: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="all levels">All Levels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="duration">Duration (weeks)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={newPlan.duration}
                    onChange={(e) => setNewPlan({...newPlan, duration: parseInt(e.target.value) || 0})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="sessions">Total Sessions</Label>
                  <Input
                    id="sessions"
                    type="number"
                    value={newPlan.sessions}
                    onChange={(e) => setNewPlan({...newPlan, sessions: parseInt(e.target.value) || 0})}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="trainer">Trainer Name</Label>
                <Input
                  id="trainer"
                  value={newPlan.trainer}
                  onChange={(e) => setNewPlan({...newPlan, trainer: e.target.value})}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={newPlan.featured}
                  onChange={(e) => setNewPlan({...newPlan, featured: e.target.checked})}
                />
                <Label htmlFor="featured">Featured Plan</Label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
            <Button onClick={handleCreatePlan}>Create Plan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Workout Plan Modal */}
      {currentPlan && (
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Workout Plan</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="edit-title">Plan Title</Label>
                  <Input
                    id="edit-title"
                    value={currentPlan.title}
                    onChange={(e) => setCurrentPlan({...currentPlan, title: e.target.value})}
                  />
                </div>
                
                <div>
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    rows={3}
                    value={currentPlan.description}
                    onChange={(e) => setCurrentPlan({...currentPlan, description: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-category">Category</Label>
                    <Input
                      id="edit-category"
                      value={currentPlan.category}
                      onChange={(e) => setCurrentPlan({...currentPlan, category: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="edit-difficulty">Difficulty</Label>
                    <Select
                      value={currentPlan.difficulty}
                      onValueChange={(value) => setCurrentPlan({...currentPlan, difficulty: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="all levels">All Levels</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-duration">Duration (weeks)</Label>
                    <Input
                      id="edit-duration"
                      type="number"
                      value={currentPlan.duration}
                      onChange={(e) => setCurrentPlan({...currentPlan, duration: parseInt(e.target.value) || 0})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="edit-sessions">Total Sessions</Label>
                    <Input
                      id="edit-sessions"
                      type="number"
                      value={currentPlan.sessions}
                      onChange={(e) => setCurrentPlan({...currentPlan, sessions: parseInt(e.target.value) || 0})}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="edit-trainer">Trainer Name</Label>
                  <Input
                    id="edit-trainer"
                    value={currentPlan.trainer}
                    onChange={(e) => setCurrentPlan({...currentPlan, trainer: e.target.value})}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="edit-featured"
                    checked={currentPlan.featured}
                    onChange={(e) => setCurrentPlan({...currentPlan, featured: e.target.checked})}
                  />
                  <Label htmlFor="edit-featured">Featured Plan</Label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
              <Button onClick={handleUpdatePlan}>Update Plan</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      {currentPlan && (
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>Are you sure you want to delete "{currentPlan.title}"?</p>
              <p className="text-sm text-muted-foreground mt-2">This action cannot be undone.</p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeletePlan}>Delete</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default AdminWorkoutPlans;
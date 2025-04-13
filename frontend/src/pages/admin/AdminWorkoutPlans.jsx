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

const AdminWorkoutPlans = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data loading
  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      // Simulate API call
      setTimeout(() => {
        const mockWorkoutPlans = [
          {
            id: 1,
            name: "Beginner Strength Training",
            category: "Strength",
            difficulty: "Beginner",
            duration: "4 weeks",
            sessions: 12,
            enrollments: 156,
            status: "active",
          },
          {
            id: 2,
            name: "HIIT Fat Burner",
            category: "Cardio",
            difficulty: "Intermediate",
            duration: "6 weeks",
            sessions: 18,
            enrollments: 203,
            status: "active",
          },
          {
            id: 3,
            name: "Advanced Bodybuilding",
            category: "Strength",
            difficulty: "Advanced",
            duration: "12 weeks",
            sessions: 48,
            enrollments: 87,
            status: "active",
          },
          {
            id: 4,
            name: "Yoga for Flexibility",
            category: "Flexibility",
            difficulty: "All Levels",
            duration: "8 weeks",
            sessions: 24,
            enrollments: 129,
            status: "active",
          },
          {
            id: 5,
            name: "Summer Shred Challenge",
            category: "Weight Loss",
            difficulty: "Intermediate",
            duration: "4 weeks",
            sessions: 20,
            enrollments: 0,
            status: "draft",
          },
        ];
        setWorkoutPlans(mockWorkoutPlans);
        setLoading(false);
      }, 1000);
    };

    fetchWorkoutPlans();
  }, []);

  // Filter workout plans based on search term
  const filteredWorkoutPlans = workoutPlans.filter(
    (plan) =>
      plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get difficulty badge
  const getDifficultyBadge = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return <Badge className="bg-green-100 text-green-800">Beginner</Badge>;
      case "intermediate":
        return <Badge className="bg-yellow-100 text-yellow-800">Intermediate</Badge>;
      case "advanced":
        return <Badge className="bg-red-100 text-red-800">Advanced</Badge>;
      default:
        return <Badge className="bg-blue-100 text-blue-800">{difficulty}</Badge>;
    }
  };

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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Workout Plan Management</h1>
        <p className="text-muted-foreground">Create and manage workout programs</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Workout Plans</CardTitle>
            <CardDescription>Manage fitness programs and routines</CardDescription>
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
                    <TableHead>Enrollments</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWorkoutPlans.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-6">
                        No workout plans found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredWorkoutPlans.map((plan) => (
                      <TableRow key={plan.id}>
                        <TableCell className="font-medium">{plan.name}</TableCell>
                        <TableCell>{plan.category}</TableCell>
                        <TableCell>{getDifficultyBadge(plan.difficulty)}</TableCell>
                        <TableCell>{plan.duration}</TableCell>
                        <TableCell>{plan.enrollments}</TableCell>
                        <TableCell>{getStatusBadge(plan.status)}</TableCell>
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

export default AdminWorkoutPlans;
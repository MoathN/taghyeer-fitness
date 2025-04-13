import { useState, useEffect } from "react";
import { FaUsers, FaDumbbell, FaShoppingCart, FaIdCard, FaChartLine } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch dashboard stats
    const fetchStats = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        setStats({
          totalUsers: 1248,
          activeMembers: 876,
          totalWorkoutPlans: 24,
          totalProducts: 56,
          revenue: 12450,
          newUsersThisWeek: 42,
          membershipStats: [
            { name: "Basic", count: 342, percentage: 39 },
            { name: "Premium", count: 412, percentage: 47 },
            { name: "Elite", count: 122, percentage: 14 },
          ],
          popularWorkouts: [
            { name: "HIIT Fat Burner", enrollments: 203 },
            { name: "Beginner Strength Training", enrollments: 156 },
            { name: "Yoga for Flexibility", enrollments: 129 },
            { name: "Advanced Bodybuilding", enrollments: 87 },
          ],
          recentOrders: [
            { id: "ORD-5123", user: "John Doe", amount: 49.99, date: "2023-06-15", status: "completed" },
            { id: "ORD-5122", user: "Sarah Smith", amount: 129.99, date: "2023-06-14", status: "completed" },
            { id: "ORD-5121", user: "Mike Johnson", amount: 79.99, date: "2023-06-14", status: "processing" },
            { id: "ORD-5120", user: "Emily Brown", amount: 29.99, date: "2023-06-13", status: "completed" },
          ],
        });
        setLoading(false);
      }, 1000);
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of your fitness platform</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <FaUsers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +{stats.newUsersThisWeek} from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <FaIdCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeMembers}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((stats.activeMembers / stats.totalUsers) * 100)}% of total users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Workout Plans</CardTitle>
            <FaDumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalWorkoutPlans}</div>
            <p className="text-xs text-muted-foreground">Active fitness programs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <FaChartLine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.revenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Lifetime earnings</p>
          </CardContent>
        </Card>
      </div>

      {/* Membership Distribution */}
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Membership Distribution</CardTitle>
            <CardDescription>Active membership types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.membershipStats.map((membership) => (
                <div key={membership.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">{membership.name}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {membership.count} users ({membership.percentage}%)
                    </div>
                  </div>
                  <Progress value={membership.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Workout Plans</CardTitle>
            <CardDescription>Most enrolled fitness programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.popularWorkouts.map((workout, index) => (
                <div key={workout.name} className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    {index + 1}
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{workout.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {workout.enrollments} enrollments
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest product purchases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.user}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">${order.amount}</div>
                  <div className="text-sm">{new Date(order.date).toLocaleDateString()}</div>
                  <div className={`text-xs ${order.status === "completed" ? "text-green-500" : "text-amber-500"}`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
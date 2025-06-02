import { useState, useEffect } from "react";
import axios from "axios";
import { FaUsers, FaDumbbell, FaShoppingCart, FaIdCard, FaChartLine } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [workoutPlanStats, setWorkoutPlanStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [statsResponse, workoutResponse] = await Promise.all([
          axios.get("http://localhost:8080/api/admin/stats"),
          axios.get("http://localhost:8080/api/admin/user-workout-plans")
        ]);
        
        setStats(statsResponse.data);
        setWorkoutPlanStats(workoutResponse.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast.error("Failed to load dashboard data");
        // Initialize with empty data structure to prevent UI errors
        setStats({
          totalUsers: 0,
          activeMembers: 0,
          totalWorkoutPlans: 0,
          totalProducts: 0,
          revenue: 0,
          newUsersThisWeek: 0,
          membershipStats: [],
          popularWorkouts: [],
          recentOrders: [],
        });
        
        setWorkoutPlanStats({
          totalUserWorkoutPlans: 0,
          activePlans: 0,
          savedPlans: 0,
          popularWorkoutPlans: [],
          recentActivity: []
        });
      } finally {
        setLoading(false);
      }
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

  // If no stats data yet, show a message
  if (!stats || Object.keys(stats).length === 0) {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of your fitness platform</p>
        </div>
        <Card>
          <CardContent className="flex h-40 items-center justify-center">
            <p className="text-center text-muted-foreground">
              No statistics available yet. Start adding users, products, and workout plans to see data here.
            </p>
          </CardContent>
        </Card>
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
              {stats.totalUsers ? Math.round((stats.activeMembers / stats.totalUsers) * 100) : 0}% of total users
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
            <div className="text-2xl font-bold">${stats.revenue?.toLocaleString() || 0}</div>
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
            {stats.membershipStats && stats.membershipStats.length > 0 ? (
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
            ) : (
              <p className="text-center text-muted-foreground py-8">No membership data available</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Workout Plans</CardTitle>
            <CardDescription>Most enrolled fitness programs</CardDescription>
          </CardHeader>
          <CardContent>
            {stats.popularWorkouts && stats.popularWorkouts.length > 0 ? (
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
            ) : (
              <p className="text-center text-muted-foreground py-8">No workout data available</p>
            )}
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
          {stats.recentOrders && stats.recentOrders.length > 0 ? (
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
          ) : (
            <p className="text-center text-muted-foreground py-8">No recent orders</p>
          )}
        </CardContent>
      </Card>

      {/* User Workout Plans */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">User Workout Plans</h2>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Plans</CardTitle>
              <FaDumbbell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {workoutPlanStats?.totalUserWorkoutPlans || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                User assigned workout plans
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
              <FaDumbbell className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workoutPlanStats?.activePlans || 0}</div>
              <p className="text-xs text-muted-foreground">
                Currently active workout plans
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Saved Plans</CardTitle>
              <FaDumbbell className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{workoutPlanStats?.savedPlans || 0}</div>
              <p className="text-xs text-muted-foreground">
                Plans saved by users
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Popular Workout Plans */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Popular Workout Plans</CardTitle>
            <CardDescription>Most used workout plans</CardDescription>
          </CardHeader>
          <CardContent>
            {workoutPlanStats?.popularWorkoutPlans && workoutPlanStats.popularWorkoutPlans.length > 0 ? (
              <div className="space-y-4">
                {workoutPlanStats.popularWorkoutPlans.map((plan, index) => (
                  <div key={plan.id} className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      {index + 1}
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{plan.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {plan.count} users
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">No workout plan data available</p>
            )}
          </CardContent>
        </Card>

        {/* Recent User Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Workout Activity</CardTitle>
            <CardDescription>Latest user workout plan activity</CardDescription>
          </CardHeader>
          <CardContent>
            {workoutPlanStats?.recentActivity && workoutPlanStats.recentActivity.length > 0 ? (
              <div className="space-y-4">
                {workoutPlanStats.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.userName}</p>
                      <p className="text-sm text-muted-foreground">{activity.workoutPlanTitle}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-xs px-2 py-1 rounded-full bg-gray-100">
                        {activity.completionPercentage}% complete
                      </div>
                      {activity.active && (
                        <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                          Active
                        </div>
                      )}
                      {activity.saved && (
                        <div className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                          Saved
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">No recent activity</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
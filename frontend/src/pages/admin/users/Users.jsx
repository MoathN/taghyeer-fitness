import React, { useEffect, useState } from 'react';
import { Button, Input, Table, Badge, toast } from '@/components/ui';
import { SearchIcon, PlusIcon, FilterIcon, RefreshIcon } from '@/components/icons';
import axiosInstance from '@/utils/axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'member',
    status: 'active',
    membershipType: 'free'
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      console.log("Starting to fetch users from /api/admin/users");
      
      const response = await axiosInstance.get('/api/admin/users');
      
      console.log('Response received:', response);
      
      if (response.data) {
        console.log('Users loaded successfully:', response.data);
        setUsers(response.data);
      } else {
        console.warn('Response received but no data found');
        toast.warning('No users found in the system');
        setUsers([]);
      }
    } catch (error) {
      console.error('Failed to load users:', error);
      toast.error('Failed to load users. Please try again.');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchUsers();
    toast.info('Refreshing user list...');
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getMembershipBadge = (type) => {
    if (!type) return <Badge color="gray">None</Badge>;
    
    switch (type.toLowerCase()) {
      case 'premium':
        return <Badge color="gold">Premium</Badge>;
      case 'pro':
        return <Badge color="purple">Pro</Badge>;
      case 'free':
      default:
        return <Badge color="blue">Free</Badge>;
    }
  };

  const getStatusBadge = (status) => {
    if (!status) return <Badge color="gray">Unknown</Badge>;
    
    switch (status.toLowerCase()) {
      case 'active':
        return <Badge color="green">Active</Badge>;
      case 'suspended':
        return <Badge color="red">Suspended</Badge>;
      case 'pending':
        return <Badge color="yellow">Pending</Badge>;
      default:
        return <Badge color="gray">{status}</Badge>;
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div>
      <div className="users">
        <h2>Users</h2>
        <p>Manage user accounts and permissions</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10"
          />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex gap-3">
          <Button variant="outlined" color="secondary" onClick={handleRefresh}>
            <RefreshIcon className="h-5 w-5 mr-2" />
            Refresh
          </Button>
          <Button variant="outlined" color="secondary">
            <FilterIcon className="h-5 w-5 mr-2" />
            Filter
          </Button>
          <Button color="primary" onClick={() => setShowAddModal(true)}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading users...</div>
      ) : filteredUsers.length > 0 ? (
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell header>Name</Table.Cell>
              <Table.Cell header>Email</Table.Cell>
              <Table.Cell header>Role</Table.Cell>
              <Table.Cell header>Membership</Table.Cell>
              <Table.Cell header>Status</Table.Cell>
              <Table.Cell header>Join Date</Table.Cell>
              <Table.Cell header>Actions</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {filteredUsers.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>{getMembershipBadge(user.membershipType)}</Table.Cell>
                <Table.Cell>{getStatusBadge(user.status)}</Table.Cell>
                <Table.Cell>{formatDate(user.joinDate)}</Table.Cell>
                <Table.Cell>
                  <Button variant="text" size="sm" color="primary">
                    Edit
                  </Button>
                  <Button variant="text" size="sm" color="danger">
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div className="text-center py-10 border rounded-lg bg-gray-50">
          No users found.
        </div>
      )}

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
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
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
                  variant="outlined" 
                  color="secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Add User
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Make sure this CSS file exists for styling

axios.defaults.baseURL = 'http://localhost:5000';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [reportData, setReportData] = useState({});
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
        fetchReportData();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/admin/users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchReportData = async () => {
        try {
            const response = await axios.get('/api/admin/reports', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setReportData(response.data); // Assuming response.data contains the report data
        } catch (error) {
            console.error('Error fetching report data:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddUser = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/admin/users', formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            alert('User added successfully!');
            fetchUsers();
            setFormData({ username: '', email: '', password: '' }); // Reset form data
        } catch (error) {
            console.error('Error adding user:', error);
            alert('Failed to add user.');
        }
    };

    const handleDeleteUser = async (event) => {
        event.preventDefault();
        try {
            await axios.delete(`/api/admin/users?username=${formData.username}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            alert('User deleted successfully!');
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user.');
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="form-container">
                <form onSubmit={handleAddUser}>
                    <h2>Add a New User</h2>
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <button type="submit">Add User</button>
                </form>

                <form onSubmit={handleDeleteUser}>
                    <h2>Delete a User</h2>
                    <input type="text" name="username" placeholder="Enter Username to Delete" value={formData.username} onChange={handleChange} required />
                    <button type="submit">Delete User</button>
                </form>
            </div>
            <div className="report-section">
                <h2>Reports</h2>
                <p>Total Users: {reportData.totalUsers}</p>
                {/* Additional report data can be displayed here */}
            </div>
            <div className="users-list">
                <h2>All Users</h2>
                {loading ? <p>Loading users...</p> : <ul>{users.map((user) => <li key={user._id}>{user.username} - {user.email}</li>)}</ul>}
            </div>
            
        </div>
    );
}

export default AdminDashboard;

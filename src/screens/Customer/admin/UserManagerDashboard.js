import React, { useState, useEffect } from "react";
import { Text, View, Pressable, Image, Alert, TextInput} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Assuming you are using React Navigation for navigation
import styles from "../../../styles/Customer/admin/UserManagerDashboardStyle"; // Import the external styles
import { IP_ADDRESS } from "@env";

const UserManagerDashboard = () => {

    const [users, setUsers] = useState([]); // State to hold all users
    const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered users
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const [selectedRole, setSelectedRole] = useState(''); // State for selected role
    const navigation = useNavigation(); // Navigation hook to navigate between screens

    // Fetch users when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                console.log("IP Address: ", IP_ADDRESS);
                const response = await axios.get(`http://${IP_ADDRESS}:5000/users/users`); // Update with your API URL
                setUsers(response.data);
                setFilteredUsers(response.data); // Initialize filtered users with all users
            } catch (error) {
                Alert.alert("Error", "Failed to fetch users");
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    // Function to handle delete user
    const handleDeleteUser = async (userId) => {
        try {
            console.log("IP Address: ", IP_ADDRESS);
            await axios.delete(`http://${IP_ADDRESS}:5000/users/users/${userId}`);
            Alert.alert("Success", "User deleted successfully");
            // Refresh the user list after deletion
            setUsers(users.filter(user => user._id !== userId));
            setFilteredUsers(filteredUsers.filter(user => user._id !== userId));
        } catch (error) {
            Alert.alert("Error", "Failed to delete user");
            console.error(error);
        }
    };

    // Function to filter users based on search term and role
    const filterUsers = () => {
        let updatedUsers = users;

        if (searchTerm) {
            updatedUsers = updatedUsers.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedRole) {
            updatedUsers = updatedUsers.filter(user => user.role === selectedRole);
        }

        setFilteredUsers(updatedUsers); // Update the filtered users state
    };

    // Handle search term change
    const handleSearch = (term) => {
        setSearchTerm(term); // Update the search term state
        filterUsers(); // Filter users based on the new search term
    };

    // Handle role selection change
    const handleRoleChange = (role) => {
        setSelectedRole(role); // Update the selected role state
        filterUsers(); // Filter users based on the selected role
    };

    return (
        <View style={styles.userManagerDashboard}>
            {/* Header Section */}
            <View style={styles.maintextParent}>
                <Text style={styles.lastMinutePantryContainer}>
                    <Text style={styles.lastMinute}>Last Minute </Text>
                    <Text style={styles.pantry}>Pantry</Text>
                </Text>
            </View>

            {/* User Manager Dashboard Title */}
            <View style={styles.dashboardTitleContainer}>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/search.png')} />
                <Text style={styles.dashboardTitle}>User Manager Dashboard</Text>
                <Image style={styles.icon} source={require('../../../assets/images/vendor/Vnav1.png')} />
            </View>

            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search users by name..."
                placeholderTextColor={'#000000'}
                value={searchTerm}
                onChangeText={handleSearch}
            />

            {/* Role Filter */}
            <Picker
                selectedValue={selectedRole}
                style={styles.picker}
                onValueChange={handleRoleChange}
            >
                <Picker.Item label="All Roles" value="" />
                <Picker.Item label="Admin" value="admin" />
                <Picker.Item label="Customer" value="customer" />
                <Picker.Item label="Driver" value="driver" />
            </Picker>

            {/* User List */}
            <View style={styles.userListContainer}>
                {filteredUsers.map((user) => (
                    <View key={user._id} style={styles.userItem}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <View style={styles.iconGroup}>
                            {/* Info Button */}
                            <Pressable 
                                style={styles.iconButton}
                                onPress={() => navigation.navigate('UserManagerUserDetailsPage', { userId: user._id })}
                            >
                                <Image 
                                    style={styles.iconImage} 
                                    source={require('../../../assets/images/customer/admin/info.png')} 
                                />
                            </Pressable>
                            
                            {/* Edit Button */}
                            <Pressable 
                                style={styles.iconButton}
                                onPress={() => navigation.navigate('UserManagerEditUser', { userId: user._id })}
                            >
                                <Image 
                                    style={styles.iconImage} 
                                    source={require('../../../assets/images/vendor/Admin/edit.png')} 
                                />
                            </Pressable>

                            {/* Delete Button */}
                            <Pressable 
                                style={styles.iconButton}
                                onPress={() => handleDeleteUser(user._id)}
                            >
                                <Image 
                                    style={styles.iconImage} 
                                    source={require('../../../assets/images/customer/admin/delete.png')} 
                                />
                            </Pressable>
                        </View>
                    </View>
                ))}
            </View>

            {/* Floating Action Button */}
            <Pressable 
                style={styles.floatingButton}
                onPress={() => navigation.navigate('UserManagerAddUserManage')} // Assume you have a screen for adding new users
            >
                <Image 
                    style={styles.plusIcon} 
                    source={require('../../../assets/images/customer/admin/plusicon.png')} 
                />
            </Pressable>
        </View>
    );
};

export default UserManagerDashboard;

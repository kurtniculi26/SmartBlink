import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
  const handleEditPress = () => {
    alert('Editing Profile!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.header}>
        <Image 
          source={require('../../../assets/profile-pic.jpg')} // Replace with your actual profile image
          style={styles.profilePic}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      {/* Edit Button Section */}
      <View style={styles.editButtonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
          <Ionicons name="create-outline" size={25} color="white" />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionText}>
          This is the bio.
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.sectionText}>Email: johndoe@example.com</Text>
        <Text style={styles.sectionText}>Phone: +123 456 7890</Text>
      </View>

      {/* Premium Section */}
      <TouchableOpacity style={styles.premiumContainer}>
        <Text style={styles.premiumText}>Go Premium!</Text>
        <View style={styles.premiumHeader}>
          <Ionicons name="play-forward-sharp" size={25} color='#FEB340' style={styles.icon} />
          <Text style={styles.premium}>Real Time Device Information</Text>
        </View>

        <View style={styles.premiumHeader}>
          <Ionicons name="location-sharp" size={25} color='#FEB340' style={styles.icon} />
          <Text style={styles.premium}>Automatic Signal Light</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures that the ScrollView takes up the full height when content is small
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 10,
    borderWidth: .1
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#242426',
  },
  editButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0c3e27',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
  },
  sectionContainer: {
    marginBottom: 30,
    backgroundColor: '#F4F4F4',
    padding: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#242426',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#242426',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
  },
  premiumContainer: {
    marginBottom: 30,
    backgroundColor: '#242426',
    padding: 20,
    borderRadius: 10,
  },
  premiumHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  premiumText: {
    color: '#FEB340',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  premium: {
    color: 'white',
    padding: 5,
  },
  icon: {
    paddingLeft: 10
  }
});

export default Profile;

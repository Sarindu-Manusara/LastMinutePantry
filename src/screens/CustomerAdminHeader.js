import React from 'react';
import { View, Text,Image } from 'react-native';
import canva5 from '../assets/images/customer/Cnav5.png'
import dashboard from '../assets/images/customer/dashboard.png'
import styles from '../styles/Customer/admin/CustomerAdminHeaderStyles';

function CustomerAdminHeader({name}) {
  return (
    <View style={styles.header}>
    <Image source={canva5} style={styles.headerIcons} />
    <Text style={styles.headerText}>{name}</Text>
    <Image source={dashboard} style={styles.headerIcons}/>
   </View>
  );
}

  export default CustomerAdminHeader;
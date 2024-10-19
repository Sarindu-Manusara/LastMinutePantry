import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Customer/HeaderStyles';

function Header({ color = '#98fb98' }) { 
  return (
    <View style={[styles.headBanner, { backgroundColor: color }]}>
      <Text style={styles.bannerText}>
        Last Minute <Text style={styles.spanText}>Pantry</Text>
      </Text>
    </View>
  );
}

  
  export default Header;
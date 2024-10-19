import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from '../../styles/Vendor/onboardScreenVendorStyles';
import { useNavigation } from '@react-navigation/native';

const OnboardScreenVendor = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.onboardScreenVendor}>
            <View style={styles.mainText}>
                <Text style={styles.welcomeToLastContainer}>
                    <Text style={styles.welcomeTo}>
                        <Text style={styles.welcomeToText}>Welcome to</Text>
                        <Text style={styles.breakLine}>{`\n`}</Text>
                    </Text>
                    <Text style={styles.lastMinutePantry}>
                        <Text style={styles.lastMinute}>Last Minute</Text>
                        <Text style={styles.pantry}> Pantry</Text>
                    </Text>
                </Text>
                <Text style={styles.joinTheMovement}>
                    Join the movement to reduce food waste{"\n"}and boost your sales
                </Text>
            </View>

            <Image
                style={styles.illustrationIcon}
                resizeMode="contain"
                source={require('../../assets/images/vendor/illustration.png')}
            />

            <View style={styles.features}>
                <View style={styles.featureBox}>
                    <Text style={styles.featureText}>Easily list your near-expired goods</Text>
                </View>
                <View style={styles.featureBox}>
                    <Text style={styles.featureText}>Attract more customers with exclusive discounts</Text>
                </View>
                <View style={styles.featureBox}>
                    <Text style={styles.featureText}>Make a positive impact on the environment</Text>
                </View>
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate('VendorLoginScreen')}>
                <Text style={styles.getStarted}>Get Started</Text>
            </Pressable>
        </View>
    );
};

export default OnboardScreenVendor;

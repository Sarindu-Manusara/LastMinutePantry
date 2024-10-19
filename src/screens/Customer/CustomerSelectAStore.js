import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import bakery from '../../assets/images/customer/bakery.jpeg';
import grocery from '../../assets/images/customer/grocery.jpeg';
import restaurants from '../../assets/images/customer/restaurent.jpeg';
import styles from '../../styles/Customer/CustomerSelectAStoreStyles';

const CustomerSelectAStore = ({navigation}) => {
  const [stores, setStores] = React.useState([
    {
      id: 1,
      name: 'Grocery',
      description:
        'Vegetables, Fruits, Dairy, Meat & Fish, Spices, Snacks, Canned Goods, Personal Care',
      image: grocery,
    },
    {
      id: 2,
      name: 'Bakery Items',
      description:
        'Bread, Bun, Cake, Cookies, Do-nuts, Pastries, Sandwiches, Brownie, Biscuit',
      image: bakery,
    },
    {
      id: 3,
      name: 'Restaurants Dishes',
      description: 'Pizza, Pasta, Burger, Sandwiches, Hotdog, Salads, Noodles',
      image: restaurants,
    },
  ]);

  const renderItem = ({item}) => (
    <View style={styles.storeContainer}>
      <TouchableOpacity
        style={styles.storeInfo}
        onPress={() => navigation.navigate('BrowseItems', {store: item})}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Image source={item.image} style={styles.storeImage} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <FlatList
          data={stores}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            padding: 10,
            justifyContent: 'center',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomerSelectAStore;

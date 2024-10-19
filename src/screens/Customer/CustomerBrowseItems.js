import React, {useEffect, useState , useCallback} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import searchIcon from '../../assets/images/customer/search.png';
import styles from '../../styles/Customer/CustomerBrowseItemsStyles';
import backArrow from '../../assets/images/customer/backArrow.png';
import {useNavigation , useFocusEffect} from '@react-navigation/native';

const CustomerBrowseItems = ({route, navigation}) => {
  const baseUrl = 'http://192.168.130.190:5000';

  const {store} = route.params;
  const goback = useNavigation();
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/products`);
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, []),
  );


  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [storeName, setStoreName] = useState(store.name);

  useEffect(() => {
    const filteredProducts = allProducts.filter(
      product => product.storeId === store.id,
    );
    setProducts(filteredProducts);
    setStoreName(store.productName);
    navigation.setOptions({title: `${store.name} Store`});
  }, [store.id, allProducts]);

  const handleSearch = text => {
    setSearchTerm(text);
    const filteredProducts = allProducts.filter(
      product =>
        product.storeId === store.id &&
        product.productName.toLowerCase().includes(text.toLowerCase()),
    );
    setProducts(filteredProducts);
  };

  const renderProduct = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {product: item  })}>
      <View style={styles.productContainer}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.productDescription}>Expiry: {item.expiryDate}</Text>
        <Text style={styles.productPrice}>Rs: {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.goback}>
        {goback.canGoBack() && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image name="arrow-back" size={24} source={backArrow} />
          </TouchableOpacity>
        )}
        <Text style={styles.storename}>{store.name} Store</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Item Name"
            value={searchTerm}
            onChangeText={handleSearch}
          />
          <Image source={searchIcon} style={styles.searchIcon} />
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

export default CustomerBrowseItems;

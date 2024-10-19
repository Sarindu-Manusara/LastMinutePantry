import React, {useContext, useEffect , useState , useCallback} from 'react';
import {View, Text, Image, Button, TouchableOpacity, FlatList} from 'react-native';
import {CartContext} from '../../context/CartContext';
import astra from '../../assets/images/customer/testImageAnchor.png';
import styles from '../../styles/Customer/CustomerProductDetailsStyles';
import backArrow from '../../assets/images/customer/backArrow.png';
import {useNavigation , useFocusEffect} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const CustomerProductDetails = ({route, navigation}) => {
  const baseUrl = 'http://192.168.130.190:5000';
  const {product} = route.params;
  const [quantity, setQuantity] = useState(1);
  const {cartDispatch} = useContext(CartContext);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [current_product, setProduct] = useState(product);
  const goback = useNavigation();

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

  useEffect(() => {
    const filteredProducts = allProducts.filter(
      tproduct => tproduct.storeId === product.storeId,
    );
    setProducts(filteredProducts);
    navigation.setOptions({title: `${product.name} Store`});
  }, [product.id, allProducts]);

  const addToCart = () => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: {...current_product, quantity},
    });
    alert(`${current_product.productName} added to cart`);
  };

  const renderProduct = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setProduct(item);
      }}>
      <View style={styles.productContainer2}>
        <Image source={{uri: item.image}} style={styles.productImage2} />
        <Text style={styles.productName2}>{item.productName}</Text>
        <Text style={styles.productDescription2}>Expiry: {item.expiryDate}</Text>
        <Text style={styles.productPrice2}>Rs: {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
   
    <>

      {goback.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image name="arrow-back" size={24} source={backArrow} />
        </TouchableOpacity>
      )}
      <View style={styles.container}>
        <View style={styles.productContainer}>
          { current_product?.image ? <Image source={{ uri: current_product?.image }}  style={styles.productImage} /> : <Image source={astra} style={styles.productImage} /> }
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{current_product?.productName}</Text>
            <Text style={styles.productDescription}>{current_product?.description}</Text>
            <Text style={styles.productExpiry}>Expiry: {current_product?.expiry}</Text>
            <Text style={styles.productOldPrice}>
              Rs: {current_product?.oldPrice.toFixed(2)}
            </Text>
            <Text style={styles.productPrice}>
              Rs: {current_product?.price.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.qtyText}>Quantity</Text>
          <View style={styles.quantityControls}>
            <Button
              title="-"
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            />
            <Text style={styles.quantityText}>{quantity}</Text>
            <Button title="+" onPress={() => setQuantity(quantity + 1)} />
          </View>
        </View>

        <TouchableOpacity style={styles.addToCartButton} onPress={addToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recProductContainer}>
        <Text style={styles.recProductText}>Recommended Products</Text>
        <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
        horizontal={false}
      />
      </View>
      </>
   
  );
};

export default CustomerProductDetails;

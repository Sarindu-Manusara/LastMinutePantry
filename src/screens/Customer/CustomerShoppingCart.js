import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import {CartContext} from '../../context/CartContext';
import astra from '../../assets/images/customer/testImageAnchor.png';
import deletIcon from '../../assets/images/customer/delete.png';
import styles from '../../styles/Customer/CustomerShoppingCartStyles';
import emptyCart from '../../assets/gif/customer/emptyCart.gif';
import backArrow from '../../assets/images/customer/backArrow.png';
import {useNavigation} from '@react-navigation/native';

const CustomerShoppingCart = ({navigation}) => {
  const baseUrl = 'http://192.168.130.190:5000';

  const {cartState, cartDispatch} = useContext(CartContext);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const goback = useNavigation();

  const subtotal = cartState.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const checkValidCoupon = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/coupons?code=${couponCode}`);
      const data = await response.json();
      if (data.discount) {
        setDiscount(data.discount);
        alert('Coupon Applied Successfully');
      }else{
        alert('Invalid Coupon Code');
      }
    } catch (error) {
      console.error('Error validating coupon', error);
    }
  }

  useEffect(() => {
    setTotal(subtotal - discount);
  }, [subtotal]);

  useEffect(() => {
    setTotal(subtotal - discount);
  }, [discount]);

  useEffect(() => {
    setTotal(subtotal - discount);
  }, [cartState.cartItems]);

  return (
    <>
      {goback.canGoBack() && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image name="arrow-back" size={24} source={backArrow} />
        </TouchableOpacity>
      )}
      {cartState.cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Image source={emptyCart} style={styles.emptyCartImage} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            {cartState.cartItems.map( (item , index )=> (
              <View key={index} style={styles.cartItemContainer}>
                <View style={styles.leftSide}>
                  <Text style={styles.productName}>{item.productName}</Text>
                  <View style={styles.imageContainer}>
                  { item.image ? <Image source={{ uri: item.image }}  style={styles.productImage} /> : <Image source={astra} style={styles.productImage} /> }
                  <Text style={styles.description}> {item.description.length > 2 ? item.description.substring(0, 50) + "..." : item.description}</Text>
                  </View>
                  <Text style={styles.productName}>
                    Rs: {item.price.toFixed(2)}
                  </Text>
                </View>

                <View style={styles.rightSide}>
                  <TouchableOpacity
                    onPress={() =>
                      cartDispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: {_id: item._id},
                      })
                    }>
                    <Image source={deletIcon} style={styles.deleteIcon} />
                  </TouchableOpacity>
                  <View style={styles.quantityControls}>
                    <Button
                      title="-"
                      onPress={() =>
                        cartDispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: {
                            _id: item._id,
                            quantity: Math.max(1, item.quantity - 1),
                          },
                        })
                      }
                    />
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <Button
                      title="+"
                      onPress={() =>
                        cartDispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: {_id: item._id, quantity: item.quantity + 1},
                        })
                      }
                    />
                  </View>
                </View>
              </View>
            ))}

            <View style={styles.couponContainer}>
              <Text style={styles.couponText}>Coupon Code</Text>
              <TextInput
                placeholder="Enter Your Coupon Codee"
                value={couponCode}
                onChangeText={setCouponCode}
                style={styles.couponInput}
              />
              <TouchableOpacity onPress={() =>{
                checkValidCoupon();
              }} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.subtotalContainer}>
              <Text style={styles.subTotalText}>Subtotal Details</Text>
              <View style={styles.subtotalSubContainer}>
                <Text style={styles.subtotalText}>
                  Product Amount:
                  <Text style={styles.subtotalTextValue}>
                    {} Rs. {subtotal.toFixed(2)}
                  </Text>
                </Text>
                <Text style={styles.subtotalText}>
                  Discount:
                  <Text style={styles.subtotalTextValue}>
                    {} Rs {discount.toFixed(2)}
                  </Text>
                </Text>
                <Text style={styles.subtotalText}>
                  Quantity:
                  <Text style={styles.subtotalTextValue}>
                    {}
                    {cartState.cartItems.length}
                  </Text>
                </Text>
                <Text style={styles.subtotalText}>
                  Subtotal Amount:
                  <Text style={styles.subtotalTextValue}>
                    {} Rs {total.toFixed(2)}
                  </Text>
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() =>
                navigation.navigate('Reservation', {
                  type: 'Reservation',
                  cartItems: cartState.cartItems,
                  subtotal,
                  discount,
                  total,
                })
              }>
              <Text style={styles.checkoutButtonText}>
                Continue to Reservation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate('AddDeliveryScreen')}
              >
              <Text style={styles.checkoutButtonText}>
                Continue to Delivery
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default CustomerShoppingCart;

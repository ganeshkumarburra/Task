import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ProductDetails = ({route}) => {
  const {
    params: {item},
  } = route;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${item.ListImagePath}${item.Images.split('|')[0]}`,
          width: '100%',
          height: '50%',
        }}
        resizeMode="contain"
      />
      <View style={{alignSelf: 'center'}}>
        <Text style={[styles.title, styles.boldColor]}>
          {item.ProductTitle}
        </Text>
        <Text style={[styles.price, styles.boldColor]}>
          Price: ₹{item.Price}
        </Text>
        <Text style={[styles.collection, styles.boldColor]}>
          Collection: {item.Collection}
        </Text>
        <Text style={[styles.styleNameNumber, {color: '#000'}]}>
          Style Name: {item.StyleName}
        </Text>
        <Text style={[{color: '#000'}, styles.styleNameNumber]}>
          Style Number: {item.StyleNumber}
        </Text>
        <Text style={[{color: '#000'}, styles.quantity]}>
          Net Quantity: {item.NetQuantity}
        </Text>
        <Text style={[{color: '#000'}, styles.sizes]}>
          Available Sizes: {item.AvailableSizes}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  title: {
    fontSize: 25,
  },
  price: {
    fontSize: 23,
  },
  boldColor: {
    fontWeight: 'bold',
    color: 'black',
  },
  collection: {
    fontSize: 22,
  },
  styleNameNumber: {
    fontSize: 20,
  },
  quantity: {
    fontSize: 17,
  },
  sizes: {
    fontSize: 15,
  },
});

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type ProductProps = {
  title: string;
  smallImagePath: string;
  smallImageUrl: string;
  price: number;
  onPress: () => void;
};

const Product = ({
  title,
  smallImagePath,
  smallImageUrl,
  price,
  onPress,
}: ProductProps) => {
  const {height, width} = Dimensions.get('window');
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.contianer}>
        <Image
          source={{
            uri: `${smallImagePath}${smallImageUrl.split('|')[0]}`,
            width: width / 3,
            height: height / 6,
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>₹{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: '#FFF',
  },
  title: {
    width: 100,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  price: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Product;

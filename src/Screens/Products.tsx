import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Modal} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';

import data from '../../assets/Products/sampleData.json';
import Product from '../components/Product';

const Products = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('first');
  return (
    // <ScrollView>
    <View style={styles.container}>
      <View
        style={{flexDirection: 'row', left: 0, top: 0, alignSelf: 'flex-end'}}>
        <Text>Sort By</Text>
        <MaterialIcons
          name="sort"
          color="black"
          size={20}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
      <FlatList
        numColumns={3}
        data={
          (checked === 'first' &&
            data.sort((a, b) => (a.Price < b.Price ? 1 : -1))) ||
          (checked === 'second' &&
            data.sort((a, b) => (a.Price > b.Price ? 1 : -1)))
        }
        renderItem={({item, index}) => (
          <Product
            title={item.ProductTitle}
            smallImagePath={item.ListImagePath}
            smallImageUrl={item.Images}
            price={item.Price}
            onPress={() => {
              navigation.navigate('ProductDetails', {item});
            }}
          />
        )}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'flex-end',
            backgroundColor: '#00000099',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
              alignSelf: 'flex-start',
              paddingLeft: 10,
              paddingRight: 20,
              position: 'absolute',
              right: 0,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('first');
                  setModalVisible(false);
                }}
              />
              <Text>HIGH TO LOW</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('second');
                  setModalVisible(false);
                }}
              />
              <Text>LOW TO HIGH</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    // </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },
});

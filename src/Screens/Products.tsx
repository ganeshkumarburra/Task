import React, {useReducer, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Modal, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {Button, RadioButton} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

import data from '../../assets/Products/sampleData.json';
import Product from '../components/Product';

const temp = [
  {id: 0, type: 'FREE SIZE', isChecked: false},
  {id: 1, type: 'S', isChecked: false},
  {id: 2, type: 'M', isChecked: false},
  {id: 3, type: 'L', isChecked: false},
  {id: 4, type: 'XL', isChecked: false},
  {id: 5, type: 'XXL', isChecked: false},
];
const init: string[] = [];
const Products = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [checked, setChecked] = React.useState('first');
  const [checkBoxData, setCheckBoxData] = useState(temp);
  const [checkedData, setCheckedData] = useState<string[]>([]);
  const handleChange = (id: number) => {
    let temp = checkBoxData.map((item, index) => {
      if (index === id) {
        return {...item, isChecked: !item.isChecked};
      }
      return item;
    });
    setCheckBoxData(temp);
  };

  const handleApply = () => {
    setShowFilter(false);
    setCheckedData(temp => {
      checkBoxData.map(item => {
        temp = item.isChecked
          ? [...temp, item.type]
          : temp.filter(type => type !== item.type);
      });
      return [...new Set(temp)];
    });
  };

  const filterFun = (item: any) => {
    let found = false;
    checkedData.map(val => {
      if (item.AvailableSizes.includes(val)) [(found = true)];
    });
    return found;
  };

  return (
    // <ScrollView>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => setShowFilter(!showFilter)}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <FontAwesome5Icon name={'filter'} style={{marginTop: 2}} />
            <Text>Filter By</Text>
          </View>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text>Sort By</Text>
          <MaterialIcons
            name="sort"
            color="black"
            size={20}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
      <FlatList
        numColumns={3}
        data={
          checked === 'first'
            ? checkedData.length
              ? data
                  .filter(filterFun)
                  .sort((a, b) => (a.Price < b.Price ? 1 : -1))
              : data.sort((a, b) => (a.Price < b.Price ? 1 : -1))
            : checkedData.length
            ? data
                .filter(filterFun)
                .sort((a, b) => (a.Price > b.Price ? 1 : -1))
            : data.sort((a, b) => (a.Price > b.Price ? 1 : -1))
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
      <Modal
        animationType="slide"
        visible={showFilter}
        transparent={true}
        onRequestClose={() => setShowFilter(false)}>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'flex-end',
            backgroundColor: '#00000099',
            width: '100%',
            // flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
              // marginBottom: 40,
              // alignSelf: 'flex-start',
              // paddingLeft: 10,
              // paddingRight: 20,
              position: 'absolute',
              // right: 0,
            }}>
            {checkBoxData.map((item, index) => {
              return (
                <View
                  style={{flexDirection: 'row', marginLeft: 25}}
                  key={index}>
                  <Text style={{width: '50%'}}>{item.type}</Text>
                  <CheckBox
                    key={item.id}
                    disabled={false}
                    value={item.isChecked}
                    onChange={() => {
                      console.log('clivked');
                      handleChange(item.id);
                    }}
                  />
                </View>
              );
            })}
            <Button
              onPress={handleApply}
              children={'Apply'}
              color="white"
              style={{
                height: 40,
                backgroundColor: 'green',
                width: 100,
                alignSelf: 'center',
                marginBottom: 10,
              }}
            />
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

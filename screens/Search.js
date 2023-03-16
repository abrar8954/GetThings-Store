import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { products } from './Product';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ScContentList from './ScContentList';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [usersSugg, setUsersSugg] = useState([]);
  const [url, setUrl] = useState([]);
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState([]);

  function queryUsersByUsername(name) {
    firestore()
      .collection('shoes')
      .where('name', '==', name)
      .limit(10)
      .get()
      .then(querySnapshot => {


        let users = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data }
        });
        console.log('users: ', users);
        setUsers(users);

      });
    setSearchValue(name);
    console.log('searchValue: ', searchValue);
  }


  async function setimageurl(params) {
    const url = await storage().ref('ts5.png').getDownloadURL();
    setUrl(url);
    console.log('url', url);
  }

  useEffect(() => {
    // setimageurl();

    // firestore()
    //   .collection('shoes')

    firestore()
      .collection('shoes')
      .get()
      .then(querySnapshot => {


        let users = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data }
        });
        console.log('users: ', users);
        setUsers(users);

      });


    firestore()
      .collection('shoes')
      .where('sugg', '==', true)
      .limit(10)
      .get()
      .then(querySnapshot => {


        let usersSugg = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data }
        });
        console.log('usersSugg: ', usersSugg);
        setUsersSugg(usersSugg);

      });

  }, []);

  function click() {
    console.warn("ghhhuuyy");
    setVisible(true);
  }

  function suggestion(usrId) {
    firestore()
      .collection('shoes')
      .doc(usrId)
      .update({
        'sugg': true,
      })
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        {

          visible == true ?
            <Image source={require('../assests/back.png')} style={{ width: 24, height: 24, marginTop: 15, marginLeft: 20, }} />
            :
            null
        }

        <View style={{
          flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, backgroundColor: '#EFEFEF', borderRadius: 8,
          height: 40,
          width: visible ? '80%' : '90%',
          marginTop: 15,
          marginLeft: 20
        }}>

          <Image source={require('../assests/search.png')} style={{ width: 20, height: 20, }} />

          <TextInput
            style={{
              color: '#8E8E8E',
              width: '80%',
              marginLeft: 20
            }}
            placeholder="Search"
            onChangeText={(search) => queryUsersByUsername(search)} onPressIn={() => click()} />

        </View>
      </View>


      {
        visible == false ?
          <View style={{ marginTop: 10 }}>
            <FlatList data={users} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
              return (
                <ScContentList item={item} />
              )
            }} />
          </View>

          :

          searchValue.length == 0 ?
            <FlatList
              numColumns={1}
              horizontal={false}
              data={usersSugg}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => suggestion(item.id)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                      <View style={{ width: 45, height: 45, borderRadius: 22.5, borderWidth: 1 }}>
                        <Image source={{ uri: item.image }} style={{ width: 55, height: 55 }} />
                      </View>

                      <Text style={{ marginLeft: 23, fontSize: 18 }}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image source={require('../assests/close.png')} style={{ width: 16, height: 16 }} />
                  </TouchableOpacity>

                </View>
              )}
            />
            :

            <FlatList
            style={{backgroundColor: 'white', marginTop: 5}}
              numColumns={1}
              horizontal={false}
              data={users}
              renderItem={({ item }) => (

                <TouchableOpacity onPress={() => suggestion(item.id)}>
                  <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginTop: 20, alignItems: 'center', backgroundColor: 'white'}}>
                    <View style={{ width: 45, height: 45, borderRadius: 22.5, borderWidth: 1 }}>
                      <Image source={{ uri: item.image }} style={{ width: 45, height: 45 }} />
                    </View>

                    <Text style={{ marginLeft: 15 }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>

              )}
            />
      }



      {/* <View style={{ width: 45, height: 45, borderRadius: 22.5, borderWidth: 1 }}>
        <Image source={{uri: url.toString()}} style={{ width: 45, height: 45 }} />
      </View> */}


    </View>
  )
}

export default Search

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ScContentList = ({item}) => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flexDirection: 'row',  marginBottom: 3}}>


        <View style={{ flexDirection: 'column', width: '67%', marginRight: 3, }}>

          <View style={{ flexDirection: 'row', paddingRight: 3, }}>

            <View style={{ height: 130, width: '50%', backgroundColor: 'white', marginRight: 3, padding: 1 }}>
              <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>
            <View style={{ height: 130, width: '50%', backgroundColor: 'white', padding: 1 }}>
            <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>

          </View>


          <View style={{ flexDirection: 'row', paddingRight: 3, marginTop: 3 }}>

            <View style={{ height: 130, width: '50%', backgroundColor: 'white', marginRight: 3, padding: 1 }}>
            <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>
            <View style={{ height: 130, width: '50%', backgroundColor: 'white', padding: 1 }}>
            <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>

          </View>

          <View style={{ flexDirection: 'row', paddingRight: 3, marginTop: 3 }}>

            <View style={{ height: 130, width: '50%', backgroundColor: 'white', marginRight: 3, padding: 1 }}>
            <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>
            <View style={{ height: 130, width: '50%', backgroundColor: 'white', padding: 1 }}>
            <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>

          </View>


          <View style={{ flexDirection: 'row', paddingRight: 3, marginTop: 3 }}>

            <View style={{ height: 130, width: '50%', backgroundColor: 'white', marginRight: 3, padding: 1 }}>
            <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>
            <View style={{ height: 130, width: '50%', backgroundColor: 'white', padding: 1 }}>
            <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
            </View>

          </View>

        </View>

        <View style={{ flexDirection: 'column', width: '33%', }}>

          <View style={{ height: 262, backgroundColor: 'white', padding: 1 }}>
          <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
          </View>

          <View style={{ height: 130, backgroundColor: 'white', marginTop: 3, padding: 1 }}>
          <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
          </View>

          <View style={{ height: 130, backgroundColor: 'white', marginTop: 3, padding: 1 }}>
          <Image source={{uri: item.image}} style={{height: '100%', width: '100%',}}/>
          </View>
        </View>

      </View>











      {/* <View style={{ flexDirection: 'row', marginTop: 6 }}>
        <View style={{ height: 130, width: '33%', backgroundColor: 'red', marginRight: 6 }}>
          <Text>Hi There!</Text>
        </View>
        <View style={{ height: 130, width: '33%', backgroundColor: 'red', marginRight: 6 }}>
          <Text>Hi There!</Text>
        </View>
        <View style={{ height: 200, width: '34%', backgroundColor: 'red' }}>
          <Text>Hi There!</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 6 }}>
        <View style={{ height: 130, width: '33%', backgroundColor: 'red', marginRight: 6 }}>
          <Text>Hi There!</Text>
        </View>
        <View style={{ height: 130, width: '33%', backgroundColor: 'red', marginRight: 6 }}>
          <Text>Hi There!</Text>
        </View>
        <View style={{ height: 200, width: '34%', backgroundColor: 'red' }}>
          <Text>Hi There!</Text>
        </View>
      </View> */}


    </View>
  )
}

export default ScContentList

const styles = StyleSheet.create({})
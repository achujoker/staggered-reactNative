import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  SafeAreaView,
    FlatList
} from 'react-native';

const Grid = (props) => {
    const [cardHeight,setCardHeight] = useState(0)
    //onLayout={(event) => { find_dimesions(event.nativeEvent.layout) }}
    // {alert(SCREEN_HEIGHT)}
  const {value} = props;


    const renderItem = ({ item }) => (
     <View style={styles.txtBlock} >
      <Text style={{color: '#747474'}}>{item}</Text>
        <View style={{backgroundColor: 'red'}} />
      </View>
    );

   // function find_dimesions(layout){
   //      const {x, y, width, height} = layout;
   //      console.warn(height);
   //      setCardHeight(height)
   //  }

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView  vertical={true} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.parent}>
          {value.map((item, index) => {
            return (
              <View style={styles.child} key={index} >

                <View
                  style={{
                     // flex:0.2,
                    //  borderWidth: 0.5,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    backgroundColor: '#F7F7F7',
                    borderRadius: 5,
                    height: 30,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#2B4F58'}}>$ {index + 1}</Text>
                  <Text style={{color: '#2B4F58'}}>
                    ({item.name.length})items
                  </Text>
                  <Text style={{color: '#2B4F58'}}>20min</Text>
                </View>

                  <FlatList
                      contentContainerStyle={{ flexGrow: 1 ,}}
                      data={item.name}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      showsVerticalScrollIndicator ={false}
                  />
                  <View
                      style={{
                          // flex:0.2,
                          //  borderWidth: 0.5,
                          justifyContent: 'space-around',
                          flexDirection: 'row',
                          backgroundColor: '#F7F7F7',
                          borderRadius: 5,
                          height: 30,
                          alignItems: 'center',
                      }}>
                      <Text style={{color: '#2B4F58'}}>$ {index + 1}</Text>
                      <Text style={{color: '#2B4F58'}}>
                          ({item.name.length})items
                      </Text>
                      <Text style={{color: '#2B4F58'}}>20min</Text>
                  </View>

                {/*{item.name.map((data, index) => {*/}
                {/*  return (*/}
                {/*    <View style={styles.txtBlock} key={index}>*/}
                {/*      <Text style={{color: '#747474'}}>{data}</Text>*/}
                {/*      <View style={{backgroundColor: 'red'}} />*/}
                {/*    </View>*/}
                {/*  );*/}
                {/*})}*/}
              </View>
            );


          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Grid;

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

let styles = StyleSheet.create({
  txtBlock: {
    // height: '100%',
    //backgroundColor: 'red',
    width: '100%',
    // paddingRight: 5,
    // paddingVertical: 2,
    padding: 5,
  },
  child: {
    // flex:1,
    //height: "100%",
    // height: SCREEN_HEIGHT,
    backgroundColor: 'white',
    padding: 4,
    width: 200,
    // width:'15%',
    //width: '25%',
    margin: 5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 1,
    marginBottom: 10,
    // backgroundColor: 'blue',
  },
  parent: {
    // height: SCREEN_HEIGHT,
    //  flex:1,
    padding: 0,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#D6D6D6',
    //width: "50%"
  },
  container: {
    flex: 1,
  },
});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

//react-native-masonry-list   --only for images
// react-native-masonry  -- only for images
// App normal data

import React from 'react';
import Grid from './grid1';
import {StyleSheet} from 'react-native';

const App: () => React$Node = () => {
    const array = [
        'quia et suscipitsuscipit recusandae consequuntur expedita e',
        'suscipitsuscipit recusandae consequuntur expedita et ',
        ' quas totamnostrum rerum est aut  ',
        'quia ',

        3,
        'quia ',
        ' quas totamnostrum rerum est aut quas totamnostrum rerum est aut',
        ' quas totamnostrum rerum est aut',
        3,
        'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est ',
        'suscipitsuscipit recusandae consequuntur ',
        ' quas totamnostrum rerum est aut',
        'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostru quia et suscipitsuscipit recusandae consequuntur',
        'suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est aut',
        ' quas totamnostrum rerum est aut',
        'quia ',
        ' quas totamnostrum rerum est aut',
        ' quas totamnostrum rerum est aut',
        'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
        'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto'
    ];
    return (
        <>
            <Grid value={array} />
        </>
    );
};
export default App;



{
    /*
  import React from 'react';
  import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

  const App: () => React$Node = () => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });

  export default App;
  */
}

{
    /*
  // react-native-masonry-brick-list   -- correct
  import BrickList from 'react-native-masonry-brick-list';
  import React, {Component} from 'react';
  import {View, Text, TouchableOpacity} from 'react-native'

  type Props = {};
  export default class App extends Component<Props> {
    constructor(props){
      super(props);
      this.state={
        //Just id (unique) and span (1,2,3, ...) is required
        data:[
          {id: '1', name: "Red", color: "#f44336", span: 1},
          {id: '2', name: "Pink", color: "#E91E63", span: 2},
          {id: '3', name: "Purple", color: "#9C27B0", span: 3},
          {id: '4', name: "Deep Purple", color: "#673AB7", span: 1},
          {id: '5', name: "Indigo", color: "#3F51B5", span: 1},
          {id: '6', name: "Blue", color: "#2196F3", span: 1},
          {id: '7', name: "Light Blue", color: "#03A9F4", span: 3},
          {id: '8', name: "Cyan", color: "#00BCD4", span: 2},
          {id: '9', name: "Teal", color: "#009688", span: 1},
          {id: '10', name: "Green", color: "#4CAF50", span: 1},
          {id: '11', name: "Light Green", color: "#8BC34A", span: 2},
          {id: '12', name: "Lime", color: "#CDDC39", span: 3},
          {id: '13', name: "Yellow", color: "#FFEB3B", span: 2},
          {id: '14', name: "Amber", color: "#FFC107", span: 1},
          {id: '15', name: "Orange", color: "#FF5722", span: 3},
        ],
      }
    }


    render() {
      return (
          <BrickList
              data = {this.state.data}
              renderItem={(prop)=>renderView(prop)}
              columns = {3}
          />
      );
    }
  }
  //RenderAnyItem
  renderView=(prop)=>{
    return(
        <View key={prop.id} style={{
          margin: 2,
          borderRadius: 2,
          backgroundColor: prop.color,
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }} >
  <TouchableOpacity onPress={() => console.log("in")}>
          <Text style={{color:'white'}}>{prop.name}</Text>
               </TouchableOpacity>
        </View>
    )
  };
  */
}

{
    /*
  // masonry-react-native    -- not use, just show number
  import React, {Component} from 'react';
  import { Text} from 'react-native'
  import Masonry from 'masonry-react-native';

  export default class App extends Component<Props> {

      render() {
          return (
              <Masonry
                  data={[
                      {id: 0, text: 'Text 0'},
                      {id: 1, text: 'Text 1'},
                      {id: 2, text: 'Text 2'},
                  ]}
                  numberOfColumns={3}
                  keyExtractor={({id}) => id}
                  renderItem={({item}) => (
                      <Text>{item.text}</Text>
                  )}
              />
          );
      }
  }
  */
}

{
    /*
  //  react-native-masonry-list   -- used

  import React from "react";
  import {
      Platform,
      Dimensions,
      Linking,
      StyleSheet,
      View,
      Text,
      TouchableWithoutFeedback,
      Image,
  } from "react-native";
  import MasonryList from "react-native-masonry-list";
  // import MasonryList from "./src";

  import testData from "./data";

  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  const platform = Platform.OS;

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: "#368FFA"
      },
      header: {
          height: isIPhoneX() ? 74 : 64,
          backgroundColor: "transparent"
      },
      mobileHeader: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
      },
      masonryHeader: {
          position: "absolute",
          zIndex: 10,
          flexDirection: "row",
          padding: 5,
          alignItems: "center",
          backgroundColor: "rgba(150,150,150,0.4)"
      },
      title: {
          fontSize: 25
      },
      userPic: {
          height: 20,
          width: 20,
          borderRadius: 10,
          marginRight: 10
      },
      userName: {
          fontSize: 15,
          color: "#fafafa",
          fontWeight: "bold"
      },
      listTab: {
          height: 32,
          flexDirection: "row",
          borderTopLeftRadius: 7.5,
          borderTopRightRadius: 7.5,
          backgroundColor: "#fff",
          marginBottom: -5
      },
      tab: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
      },
      tabTextUnderline: {
          borderBottomWidth: 2,
          borderBottomColor: "#e53935"
      },
      tabTextOn: {
          fontSize: 10,
          color: "#e53935"
      },
      tabTextOff: {
          fontSize: 10,
          color: "grey"
      },
  });

  function isIPhoneX() {
      const X_WIDTH = 375;
      const X_HEIGHT = 812;
      return (
          Platform.OS === "ios" &&
          ((deviceHeight === X_HEIGHT && deviceWidth === X_WIDTH) ||
              (deviceHeight === X_WIDTH && deviceWidth === X_HEIGHT))
      );
  }

  export default class ReactNativeMasonryListExample extends React.Component {
      state = {
          columns: 2,
          statusBarPaddingTop: isIPhoneX() ? 30 : platform === "ios" ? 20 : 0
      }

      render() {
          const { statusBarPaddingTop } = this.state;

          return (
              <View
                  style={styles.container}
              >
                  <View style={[styles.header, styles.mobileHeader, { paddingTop: statusBarPaddingTop }]}>
                      <Text style={styles.title}>MasonryList</Text>
                  </View>
                  <View style={styles.listTab}>
                      <TouchableWithoutFeedback
                          style={{borderTopLeftRadius: 7.5,}}
                          onPress={() => Linking.openURL("https://luehangs.site")}>
                          <View style={styles.tab}>
                              <View style={[styles.tabTextUnderline, {paddingBottom: 3}]}>
                                  <Text style={styles.tabTextOn}>REMOTE/LOCAL</Text>
                              </View>
                          </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback>
                          <View style={styles.tab}>
                              <View style={{paddingBottom: 3}}>
                                  <Text style={styles.tabTextOff}>CAMERA ROLL</Text>
                              </View>
                          </View>
                      </TouchableWithoutFeedback>
                  </View>
                  <MasonryList
                      images={testData}
                      columns={this.state.columns}
                      // sorted={true}
                      renderIndividualHeader={(data) => {
                          return (
                              <TouchableWithoutFeedback
                                  onPress={() => Linking.openURL("https://luehangs.site")}>
                                  <View style={[styles.masonryHeader, {
                                      width: data.masonryDimensions.width,
                                      margin: data.masonryDimensions.gutter / 2
                                  }]}>
                                      <Image
                                          source={{ uri: "https://luehangs.site/images/lue-hang2018-square.jpg" }}
                                          style={styles.userPic} />
                                      <Text style={styles.userName}>{data.title}</Text>
                                  </View>
                              </TouchableWithoutFeedback>
                          );
                      }}
                  />
              </View>
          );
      }
  }
  */
}

{
    /*
  //  react-native-masonry-scrollview"    --- not used
  import React from "react";
  import { View, StyleSheet } from "react-native";
  import RNMasonryScroll from "react-native-masonry-scrollview";

  const Box = () => <View style={styles.box} />;

  const App = () => (
      <RNMasonryScroll>
          {[
              <Box key={0} />,
              <Box key={1} />,
              <Box key={2} />,
              <Box key={3} />,
              <Box key={4} />,
              <Box key={5} />,
              <Box key={6} />,
              <Box key={7} />,
              <Box key={8} />,
              <Box key={9} />,
              <Box key={10} />,
              <Box key={11} />
          ]}
      </RNMasonryScroll>
  );

  const styles = StyleSheet.create({
      box: {
          height: 50,
          width: 100,
          backgroundColor: "red",
          margin: 16
      }
  });
  export default App;
  */
}

{
    /*                <ScrollView showsVerticalScrollIndicator={false}>*/
}
{
    /*                <View style={styles.parent}>*/
}
{
    /*                        {*/
}
{
    /*                        this.state.array.map((item, index) => {*/
}
{
    /*                            return (*/
}
{
    /*                                <TouchableOpacity*/
}
{
    /*                                                  style={*/
}
{
    /*                                                      styles.child*/
}
{
    /*                                                  }*/
}
{
    /*                                                  key={index}*/
}
{
    /*                                                 >*/
}
{
    /*                                    <View style={styles.txtBlock}>*/
}
{
    /*                                            <Text >*/
}
{
    /*                                                {item}*/
}
{
    /*                                            </Text>*/
}
{
    /*</View>*/
}
{
    /*                                </TouchableOpacity>*/
}
{
    /*                            );*/
}
{
    /*                        })}*/
}
{
    /*                </View>*/
}
{
    /*             </ScrollView>*/
}

//
// import React from "react";
// import { View, StyleSheet,Text } from "react-native";
//
// const messages = [
//     'hello this is supposed to be a  ',
//     'this is supposed .',
//     'this is supposed to be a bit of a long line. ',
//     'this is ',
//     'bye',
//     'hello this is supposed',
//     'hello this is supposed to be a h'
// ];
//
// export default function App() {
//     return (
//         <View style={{
//          //   flex: -1,
//           //  backgroundColor:  "blue",
//             position: 'absolute',
//             top: 0,
//             left: 0,
//            // width: 150,
//             alignItems: 'flex-end',
//             justifyContent: 'flex-start',
//          //   backgroundColor: '#fff',
//             flexDirection: 'row',
//             flexWrap: 'wrap',
//             //  padding: 5,
//            // alignItems: 'flex-start',
//         }}>
//
//             {messages.map( (message, index) => (
//                 <View key={index} style={{
//                     flexDirection: 'row',
//                     marginTop: 10
//                 }}>
//                     <View style={{
//                         borderColor: 'darkgray',
//                         borderWidth: 1,
//                         borderRadius : 3,
//                         marginTop: 1,
// width: "33%",
//                         flex: -1,
//                         marginLeft: 5,
//                         marginRight: 5,
//                        // backgroundColor: '#CCC',
//                       //  borderRadius: 10,
//                         padding: 5,
//                         backgroundColor:  "red",
//
//                     }}>
//                         <Text style={{
//                             fontSize: 12,
//                         }}>
//                             {message}
//                         </Text>
//                     </View>
//                 </View>
//             ))}
//         </View>
//     )
// }

// {this.state.array.map((item, index) => {
//     return (
//         <TouchableOpacity style={styles.child} key={index}>
//             <View style={styles.txtBlock}>
//                 <Text>{item}</Text>
//             </View>
//         </TouchableOpacity>
//     );
// })}

{
    /*<ScrollView>*/
}
{
    /*  <AutoResponsive {...this.getAutoResponsiveProps()}>*/
}
{
    /*        {this.renderChildren()}*/
}
{
    /*    </AutoResponsive>*/
}
{
    /*</ScrollView>*/
}

//  check

// autoresponsive-react-native   -- correct

{
    /*  // horioztal
  import React, { Component } from 'react';
  import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
  import data from './data';

  export default class App extends Component {
    renderCity(city) {
      return (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={{ uri: city.img }} style={styles.image} />
              <Text style={styles.title}>{city.title}</Text>
            </View>
          </View>
      );
    }

    render() {
      return (
          <View style={styles.container}>
            <ScrollView horizontal>
              {data.map(city => {
                return this.renderCity(city);
              })}
            </ScrollView>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      marginTop: 30,
    },
    title: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
      marginTop: 10,
    },
    cardContainer: {
      justifyContent: 'center',
    },
    card: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      borderRadius: 10,
      width: 220,
    },
  })

  */
}


// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
// import data from './data';
//
// export default class App extends Component {
//   renderData(city) {
//     return (
//         <View style={styles.cardContainer}>
//           <View style={styles.card}>
//
//             <Text style={styles.title}>{city}</Text>
//           </View>
//         </View>
//     );
//   }
//
//   render() {
//     return (
//
//           <ScrollView horizontal>
//
//
//               {data.map((item, index) => {
//                 return (
//                     <View style={styles.parent}>
//                     <TouchableOpacity style={styles.child} key={index}>
//                       <View style={styles.txtBlock}>
//                         <Text>{item}</Text>
//                       </View>
//
//                     </TouchableOpacity>
//                     </View>
//                 );
//               })}
//
//           </ScrollView>
//
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//   //  flex: 1,
//     backgroundColor: 'red',
//     // marginTop: 30,
//    },
//   title: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   cardContainer: {
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//     borderRadius: 10,
//     width: 220,
//   },
//   txtBlock: {
//     width: '100%',
//     paddingRight: 5,
//   },
//   child: {
//     // flex:1,
//     //   flexBasis: '50%',
//
//     padding: 10,
//     width: '48%',
//     margin: '1%',
//     //  aspectRatio: 1,
//     flexDirection: 'row',
//     borderColor: 'darkgray',
//     borderWidth: 1,
//     borderRadius: 3,
//     marginTop: 1,
//     //  backgroundColor: 'red',
//     //  position: "absolute",
//     marginBottom: 10,
//     // overflow:'hidden',
//     // backgroundColor: "red"
//   },
//   parent: {
//     // backgroundColor: "blue",
//    //  flex:1,
//   //   width: '100%',
//    //  height: SCREEN_HEIGHT,
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     padding: 5,
//     alignItems: 'flex-start',
//   },
// })
//

// guna code

// import React, {Component, useState, useEffect} from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
//
// const Grid = (props) => {
//   const {value} = props;
//   const [firstChild, setFirstChild] = useState(0);
//   const [secondChild, setSecondChild] = useState(0);
//   const [thirdChild, setThirdChild] = useState(0);
//   const [firstChildArray, setFirstChildArray] = useState([]);
//   const [secondChildArray, setSecondChildArray] = useState([]);
//
//   const data = ['dummy', ...props.value];
//
//   let helper1 = [];
//   let helper2 = [];
//
//   const splitFunction = () => {
//     data.map((item) => {
//       if (secondChild > firstChild) {
//         helper2.push(item);
//         setSecondChildArray(helper2);
//       } else {
//         helper1.push(item);
//         setFirstChildArray(helper1);
//       }
//     });
//     // alert(JSON.stringify( '>>>' + firstChildArray. length));
//     // alert(JSON.stringify(from + '>>>' + secondChildArray));
//   };
//
//   useEffect(() => {
//     data.shift();
//     splitFunction();
//   }, [firstChild, secondChild]);
//
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.parent}>
//           <View
//             style={styles.child}
//             onLayout={(event) => {
//               // splitFunction('first');
//               let {x, y, width, height} = event.nativeEvent.layout;
//               setFirstChild(height);
//             }}>
//             {(firstChildArray !== undefined && firstChildArray.length) > 0
//               ? firstChildArray.map((item, index) => {
//                   // alert(JSON.stringify(item));
//                   return (
//                     <TouchableOpacity style={styles.child} key={index}>
//                       <Text>{item}</Text>
//                     </TouchableOpacity>
//                   );
//                 })
//               : null}
//           </View>
//           <View
//             style={styles.child}
//             onLayout={(event) => {
//               // splitFunction('second');
//               let {x, y, width, height} = event.nativeEvent.layout;
//               setSecondChild(height);
//             }}>
//             {secondChildArray !== undefined && secondChildArray.length > 0
//               ? secondChildArray.map((item, index) => {
//                   return (
//                     <TouchableOpacity style={styles.child} key={index}>
//                       <Text>{item}</Text>
//                     </TouchableOpacity>
//                   );
//                 })
//               : null}
//           </View>
//           {/*{value.map((item, index) => {*/}
//           {/*  return (*/}
//           {/*    <TouchableOpacity style={styles.child} key={index}>*/}
//           {/*        <Text>{item}</Text>*/}
//           {/*    </TouchableOpacity>*/}
//           {/*  );*/}
//           {/*})}*/}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default Grid;
//
// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;
//
// let styles = StyleSheet.create({
//   txtBlock: {
//     width: '100%',
//     paddingRight: 5,
//   },
//   child: {
//     flex: 1,
//     padding: 10,
//     margin: '1%',
//     flexDirection: 'column',
//     borderColor: 'darkgray',
//     borderWidth: 1,
//     borderRadius: 3,
//     height: '100%',
//     // width: '100%'
//     // marginTop: 1,
//     // marginBottom: 10,
//     backgroundColor: 'yellow',
//   },
//   parent: {
//     //   width: SCREEN_WIDTH,
//     // height: SCREEN_HEIGHT ,
//     backgroundColor: 'green',
//     flex: 1,
//     height: '100%',
//     padding: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'flex-start',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
// });


//
// import React, {Component} from 'react';
// import AutoResponsive from 'autoresponsive-react-native';
// import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
//
// let styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#301711',
//   },
//   title: {
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   titleText: {
//     color: '#d0bbab',
//     textAlign: 'center',
//     fontSize: 36,
//     fontWeight: 'bold',
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 60,
//     fontWeight: 'bold',
//     color: 'rgb(58, 45, 91)',
//   },
// });
//
// const SCREEN_WIDTH = Dimensions.get('window').width;
//
// export default class Sample extends React.Component {
//   state = {
//     array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   };
//
//   getChildrenStyle() {
//     return {
//       flex:1,
//      // width: '48%',
//       width: (SCREEN_WIDTH - 18) / 2,
//      /// height: 10,
//       height: parseInt(Math.random() * 20 + 12) * 10,
//       backgroundColor: 'rgb(92, 67, 155)',
//       paddingTop: 20,
//       borderRadius: 8,
//       borderWidth: 1,
//     // padding: 10,
//     // width: '48%',
//     // margin: '1%',
//     // flexDirection: 'row',
//     // borderColor: 'darkgray',
//     // borderWidth: 1,
//     // borderRadius: 3,
//     // marginTop: 1,
//     // marginBottom: 10,
//    // backgroundColor: 'red',
//     };
//   }
//
//   getAutoResponsiveProps() {
//     return {
//       itemMargin: 8,
//     };
//   }
//
//   renderChildren() {
//     return this.state.array.map((i, key) => {
//       return (
//         <View style={this.getChildrenStyle()} key={key}>
//           <Text style={styles.text}>{i}</Text>
//         </View>
//       );
//     }, this);
//   }
//
//   onPressTitle = () => {
//     this.setState({
//       array: [...this.state.array, parseInt(Math.random() * 30)],
//     });
//   };
//
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <View style={styles.title}>
//           <Text onPress={this.onPressTitle} style={styles.titleText}>
//             autoresponsive
//           </Text>
//         </View>
//         <AutoResponsive {...this.getAutoResponsiveProps()}>
//           {this.renderChildren()}
//         </AutoResponsive>
//       </ScrollView>
//     );
//   }
// }



import React  from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

const Grid = (props) => {
    const {value} = props;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.parent}>
                    {value.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.child} key={index}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
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
        width: '100%',
        paddingRight: 5,
    },
    child: {
        //   flex: 1,
        padding: 10,
        width: "20%",
        margin: '1%',
        flexDirection: 'column',
        borderColor: 'darkgray',
        borderWidth: 1,
        borderRadius: 3,
        // height: '100%',
        // width: '100%'
        // marginTop: 1,
        // marginBottom: 10,
        // backgroundColor: 'yellow',
    },
    parent: {
        //   width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT ,
        //  backgroundColor: 'green',
     //   flex: 1,
        // height: '100%',
        padding: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    container: {
        flex: 1,
        //  backgroundColor: 'red',
    },
});

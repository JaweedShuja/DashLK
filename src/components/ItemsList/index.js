// import React, {Component} from 'react';
// import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
// import engine from '../../images/engine.png';
// import {Colors} from '../../utils/colors';
// import {Fonts} from '../../utils/fonts'
// import {
//   engine1,
// } from '../../utils/imagePath'

// class ItemsList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       engines: [
//         {id: 1, name: 'OE replacement', price: '450,000', sold: '14'},
//         {id: 2, name: 'OE replacement', price: '450,000', sold: '14'},
//         {id: 3, name: 'OE replacement', price: '450,000', sold: '14'},
//         {id: 4, name: 'OE replacement', price: '450,000', sold: '14'},
//         {id: 5, name: 'OE replacement', price: '450,000', sold: '14'},
//       ],
//     };
//   }
//   render() {
//     return (
//       <View
//                     style={{
//                       height: '90%',
//                       width: 100,
//                       backgroundColor: 'white',
//                       borderRadius: 5,
//                       margin: 5,
//                     }}>
//                    <View >
//                    <Image
//                       style={{
//                         height: 60,
//                         width: 80,
//                         alignSelf: 'center',
//                         marginTop: 5,
//                       }}
//                       source={engine1}
//                     />
//                    </View>
//                     <View style={{
//                       paddingHorizontal:5,
//                       marginTop:10
//                       // alignSelf:'bottom'
//                     }}>
//                     <Text
//                       style={{
//                         color: 'gray',
//                         fontSize: 10,
                        
//                         fontFamily:Fonts.PoppinsRegular
//                       }}>
//                       {item.name}
//                     </Text>
//                     <Text
//                       style={{
//                         fontSize: 12,
//                         marginVertical:-5,
//                         fontFamily:Fonts.PoppinsRegular
//                       }}>
//                       {'LKR ' + item.price}
//                     </Text>
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         justifyContent: 'space-between',
//                       }}>
//                       <Text
//                         style={{
//                           color: 'gray',
//                           fontSize: 10,
//                           fontFamily:Fonts.PoppinsRegular,
//                           alignSelf: 'center',
//                         }}>
//                         {item.sold + ' Sold'}
//                       </Text>

//                       <TouchableOpacity style={{flexDirection: 'row'}}>
//                         <View
//                           style={{
//                             height: 5,
//                             width: 5,
//                             backgroundColor: 'gray',
//                             borderRadius: 5,
//                           }}></View>
//                         <View
//                           style={{
//                             height: 5,
//                             width: 5,
//                             backgroundColor: 'gray',
//                             borderRadius: 5,
//                             marginLeft: 2,
//                           }}></View>
//                         <View
//                           style={{
//                             height: 5,
//                             width: 5,
//                             backgroundColor: 'gray',
//                             borderRadius: 5,
//                             marginLeft: 2,
//                           }}></View>
//                       </TouchableOpacity>
//                     </View>
//                     </View>
//                   </View>
//     );
//   }
// }

// export default ItemsList;


import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts'
import {
  engine1,
} from '../../utils/imagePath'


class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engines: [
        {id: 1, name: 'OE replacement', price: '450,000', sold: '14'},
        {id: 2, name: 'OE replacement', price: '450,000', sold: '14'},
        {id: 3, name: 'OE replacement', price: '450,000', sold: '14'},
        {id: 4, name: 'OE replacement', price: '450,000', sold: '14'},
        {id: 5, name: 'OE replacement', price: '450,000', sold: '14'},
      ],
    };
  }
  render() {
    return (
      <View
        style={{
          height: 175,
          backgroundColor: Colors.themeBlue,
          marginTop:10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily:Fonts.PoppinsRegular

            }}>
            Recently Viewed Items
          </Text>
          <Text
            style={{
              color: 'whitesmoke',
              fontFamily:Fonts.PoppinsRegular
            }}>
            View more
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: Colors.themeGreen,
            marginHorizontal: 5,
            marginVertical: 10,
            borderRadius: 10,
          }}>
          <FlatList
            horizontal
            data={this.state.engines}
            keyExtracter={item => item.id.toString()}
            renderItem={({item}) => (
              <View
                    style={{
                      width: 100,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      margin: 5,
                    }}>
                   <View >
                   <Image
                      style={{
                        height: 60,
                        width: 80,
                        alignSelf: 'center',
                        marginTop: 5,
                      }}
                      source={engine1}
                    />
                   </View>
                    <View style={{
                      paddingHorizontal:5,
                      marginTop:10
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 10,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        marginVertical:-5,
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'LKR ' + item.price}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          color: 'gray',
                          fontSize: 10,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {item.sold + ' Sold'}
                      </Text>

                      <TouchableOpacity style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            height: 5,
                            width: 5,
                            backgroundColor: 'gray',
                            borderRadius: 5,
                          }}></View>
                        <View
                          style={{
                            height: 5,
                            width: 5,
                            backgroundColor: 'gray',
                            borderRadius: 5,
                            marginLeft: 2,
                          }}></View>
                        <View
                          style={{
                            height: 5,
                            width: 5,
                            backgroundColor: 'gray',
                            borderRadius: 5,
                            marginLeft: 2,
                          }}></View>
                      </TouchableOpacity>
                    </View>
                    </View>
                  </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default ItemsList;

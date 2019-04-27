import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class TransactionsList extends Component {
   state = {
      names: [
         {
            id: 0,
            created: '12 minutes ago',
            number: 0.0005391163
         },
         {
            id: 1,
            created: '2 days ago',
            number: 51.117539118
         },
         {
            id: 2,
            created: '16 days ago',
            number: 1.000539118
         },
         {
            id: 3,
            created: '3 months ago',
            number: 7.253001011
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.created)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <View style={styles.rowContainer}>
                        <View style={styles.iconTx}>
                           x
                        </View>
                        <Text style={styles.textLeft}>
                           {item.created}
                        </Text>
                        <Text style={styles.textRight}>
                           {item.number}
                        </Text>
                     </View>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default TransactionsList

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#efefef',
      alignItems: 'center',
   },
   textLeft: {
      color: '#000',
      flex: 1,
      textAlign: 'left'
   },
   textRight: {
      color: '#000',
      flex: 1,
      textAlign: 'right'
   },
   rowContainer: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-between"
   }
})
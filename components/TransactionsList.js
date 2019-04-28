import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


class TransactionsList extends Component {
   state = {
      names: [
         {
            id: 0,
            created: '12 minutes ago',
            number: 0.0005391163,
            sent: true
         },
         {
            id: 1,
            created: '2 days ago',
            number: 51.117539118,
            sent: false
         },
         {
            id: 2,
            created: '16 days ago',
            number: 1.1005391180,
            sent: false
         },
         {
            id: 3,
            created: '3 months ago',
            number: 7.2530010110,
            sent: true
         },
         {
            id: 4,
            created: '4 months ago',
            number: 17.1530010110,
            sent: true
         },
         {
            id: 5,
            created: '8 months ago',
            number: 0.2279010110,
            sent: true
         },
         {
            id: 6,
            created: '8 months ago',
            number: 0.0171901011,
            sent: true
         },
      ]
   }
   alertItemName = (item) => {
      alert(item.created)
   }

   showIcon = (sent) => {
      if(sent){
         return <Icon name="reply" style={styles.icon} size={15} color="#e57373" />
      }else{
         return <Icon name="share" style={styles.icon} size={15} color="#84d12e" />
      }
   }

   getRowStyle = (sent) => {
      style = {
         paddingLeft: 10,
         paddingRight: 10,
         paddingTop: 15,
         paddingBottom: 15,
         marginTop: 3,
         backgroundColor: "#000",
         alignItems: 'center',
         backgroundColor: "#fff",
      }

      return style
   }

   render() {
      return (
         <View style={styles.transactionListContainer}>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {this.getRowStyle(item.sent)}
                     onPress = {() => this.alertItemName(item)}>
                     <View style={{flex: 2, flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={styles.iconTx}>
                           {this.showIcon(item.sent)}
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
   icon: {
      marginRight: 10,
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
})
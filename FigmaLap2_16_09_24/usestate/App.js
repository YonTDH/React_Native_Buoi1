import React, { useState } from 'react'
import { View, Text, Button ,Image,StyleSheet,TouchableOpacity} from 'react-native'

export default function App() {

const [count, setCount] = useState(1);
 
  const [cost, setCost] = useState(141.800);

  
    const increment = () => {
    setCount(count + 1);
    setCost(cost + 141.800); // Add to the cost
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setCost(cost - 141.800); // Subtract from the cost
    }
  };

 

    return(
      <View style={{}}>

      <View style={{flex : 1 , marginTop : 10, marginLeft : -15 ,flexDirection: 'row',}} >
        <View style={{alignItems : 'flex-start'}}>
        <Image source= {{uri : 'https://salt.tikicdn.com/cache/750x750/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg.webp'}} 
                  style ={{width: 180,height : 160 , }}/>
        </View>

        <View style={{flex : 1 , marginLeft :  15}}>
            <Text style={{fontWeight : 'bold', }}>Nguyên hàm tích phân và ứng dụng
            </Text>
            
              <Text style={{fontWeight : 'bold',paddingTop : 10,}}>Cung cấp bởi Tiki Trading
            </Text>

            <Text style={{fontWeight : 'bold', color : 'red' , fontSize : 20,paddingTop : 10}}>
                141.800
            </Text>
              <Text style={{fontWeight : 'bold', color : 'gray' , fontSize : 20,textDecorationLine: 'line-through' ,paddingTop : 10}}>
                141.000 đ
            </Text>

          <View style={styles.container}>
              <TouchableOpacity style={styles.button} onPress={decrement}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.countText}>{count}</Text>

              <TouchableOpacity style={styles.button} onPress={increment}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button_link,{marginLeft : 110} } onPress={[increment]}>
                <Text style={styles.buttonText_link}>Mua sau</Text>
              </TouchableOpacity>
          </View>

      
        </View>
        
      </View>
        <View>
            <Text style={{ marginLeft : 10, marginTop : 20,marginBottom : 30}}>
             <Text style={{ fontWeight : 'bold'}} > Mã giảm giá đã lưu </Text>
            <TouchableOpacity style={styles.button_link,{marginLeft : 30}} onPress={[decrement]}>
                <Text style={styles.buttonText_link}>Xem tại đây</Text>
              </TouchableOpacity>
            </Text>
             
        </View>

        <View style={styles.container}>
        {/* Discount Code Box */}
          <View style={styles.discountBox}>
            <View style={styles.yellowBox} />
            <Text style={styles.discountText}>Mã giảm giá</Text>
          </View>

          {/* Apply Button */}
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      <View style = {{backgroundColor : 'gray', marginTop : 40}}>
       <View style = {{ backgroundColor : 'white', marginTop : 20, padding : 20}}>
          <Text style = {{fontWeight : 'bold'}}> Bạn có phiếu quà tặng Tiki/Got it/Urbox? 
            <TouchableOpacity style={styles.button_link,{marginLeft : 10}} onPress={decrement}>
                <Text style={styles.buttonText_link}>Nhập tại đây?</Text>
              </TouchableOpacity>
          </Text>
        </View>
      </View>

      <View style = {{backgroundColor : 'gray',}}>
         <View style = {{ backgroundColor : 'white', marginTop : 20, padding : 20}}>
          <Text style = {{fontWeight : 'bold', fontSize : 20}}> Tạm tính
              <Text style ={{color : 'red', marginLeft : 200}}>
                 {cost.toFixed(3)} đ
              </Text>
          </Text>
        </View>
      </View>

         <View style = {{backgroundColor : 'gray',}}>
         <View style = {{ backgroundColor : 'white', marginTop :170, padding : 20}}>
          <Text style = {{fontWeight : 'bold', fontSize : 20}}> Thành tiền
              <Text style ={{color : 'red', marginLeft : 200}}>
                 {cost.toFixed(3)} đ
              </Text>
          </Text>
        </View>
        
      </View>
      
        <TouchableOpacity style={styles.datHanhButton}>
            <Text style={styles.datHanhButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
      </View>
      
    
    )
}

const styles = StyleSheet.create({
  container: {
 
    marginTop : 10,
    flexDirection : 'row',
    
  },
  button: {
    width: 20,               // Width of the button
    height: 20,              // Height of the button
    backgroundColor: 'gray',  // Button background color
    alignItems: 'center',    // Center horizontally
    justifyContent: 'center', // Center vertically
    borderRadius: 5,         // Rounded corners (optional)
  
     marginRight : 10,

   
       // Space between buttons and count
  },
   button_link: {
                // Height of the button
  backgroundColor: 'white',  // Button background colo
   
   
       // Space between buttons and count
  },
  buttonText: {
    color: 'white',
    fontSize: 20,  
    textAlign : 'center',
              // Size of the + and - text
  },
    buttonText_link: {
    color: 'blue',
    fontSize: 15,  

  }
  , countText: {
    fontSize: 15,
    marginRight : 10,

  }, discountBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFD700', // Yellow border color
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    width : 220,
    marginLeft :  10,
   
  },
  yellowBox: {
    width: 40,
    height: 20,
    backgroundColor: '#FFD700', // Yellow box
    marginRight: 5,
  },
  discountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  applyButton: {
    backgroundColor: '#1976D2', // Blue button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft : 20,
    width : 130, 
    
  },
  applyButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
   datHanhButton: {
    backgroundColor: 'red', // Blue button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft : 20,
    width : 420, 
    justifyContent : 'center',
    alignItems : 'center'
  },
  datHanhButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

    
  },
 
})
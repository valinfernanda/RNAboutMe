import React, {Component} from 'react';
import {ScrollView, Text, View, SafeAreaView, Flatlist, Stylesheet, StatusBar,Image, TouchableOpacity} from 'react-native';
import {HomeStyle} from './style';
import {GlobalStyle} from '../../Shared/GlobalStyle/style';
import tech from './tech.jpg';
import nature from './nature.jpeg';
import Position from '../../../Position';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    };
  }

  changeImage() {
    if (this.state.status) {
      this.setState({
        status: false,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      });
    } else {
      this.setState({
        status: true,
        image:
          'https://images.unsplash.com/photo-1515734674582-29010bb37906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      });
    }
  }

  render() {
    return (
      <ScrollView style={HomeStyle.bodyContent}>
        <View style={[HomeStyle.Container]}>
        {/* <ScrollView> */}
        <View style={HomeStyle.topContainer}>
          <View style={HomeStyle.HeroContainer}>
            <View style={HomeStyle.biodata}>
            <Image
              source={{uri: this.state.image}}
              style={HomeStyle.HeroImage}
              
            />
            <View style={HomeStyle.personName}>
            <View>
            <Text style={{fontWeight: 'bold'}}>Valin Fernandas</Text>
            <Text>Future Developer</Text>
            </View>

            <View style={HomeStyle.followerKotak}>
              <View>
            <Text style={HomeStyle.tulisanData}>Articles</Text>
            <Text style={HomeStyle.angkaTulisanData}>81</Text>
            </View>
            <View>
            <Text style={HomeStyle.tulisanData}>Followers</Text>
            <Text style={HomeStyle.angkaTulisanData}>750</Text>
            </View>
            <View>
            <Text style={HomeStyle.tulisanData}>Rating</Text>
            <Text style={HomeStyle.angkaTulisanData}>9.3</Text>
            </View>
            </View>
            </View>
            </View>
            <View style={HomeStyle.ButtonHeroContainer}>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.firstButton]}>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
                <Text style={{color: 'white'}}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={{fontSize:22, fontWeight: 'bold', paddingTop:20}}>Notable works</Text>
            <Text>Based on the popularity of articles</Text>
            </View>
          <View style={HomeStyle.article}>
          <ScrollView horizontal={true}> 
          <View style={{marginTop:30}}>
            <Image source={tech} style={{width: 188, height:107, borderRadius:14}}/>
            <Text style={{fontSize: 14, marginTop:10}}>Tech</Text>
            <Text style={{fontsize:40, fontWeight: 'bold', marginTop:8}}>Technology makes life easier</Text>
          </View>
          <View style={{marginTop:30}}>
            <Image source={nature} style={{width: 188, height:107, borderRadius:14}}/>
            <Text style={{fontSize: 14, marginTop:10}}>Nature</Text>
            <Text style={{fontsize:40, fontWeight: 'bold', marginTop:8}}>Nature is so important for human beings</Text>
          </View>
          <View style={{marginTop:30}}>
            <Image source={nature} style={{width: 188, height:107, borderRadius:14}}/>
            <Text style={{fontSize: 14, marginTop:10}}>Nature</Text>
            <Text style={{fontsize:40, fontWeight: 'bold', marginTop:8}}>Nature is so important for human beings</Text>
          </View>
          </ScrollView>
          </View>

          <View style={{marginTop:50, backgroundColor: '#C3C4C6', width: 330, height: 120, borderRadius:14}}>
            
            <Text style={{fontSize: 14, paddingRight:10, backgroundColor: '#B1B1B1', marginTop:10}}>...</Text>
            <Text style={{fontsize:40, marginHorizontal:10, textAlign: 'center', fontWeight: 'bold', marginTop:8}}>Technology never stops growing</Text>

          </View>
          
          
          <View style={{marginTop:40, width: 160, height: 90}}>
            <Image source={tech} style={{width: 188, height:107, borderRadius:14}}/>
            <Text style={{fontSize: 14, marginTop:10}}>Tech</Text>
            <Text style={{fontsize:40, fontWeight: 'bold', marginTop:8}}>Technology makes your life easier</Text>
          </View>
          <View style={{marginTop:40, width: 160, height: 90}}>
            <Image source={tech} style={{width: 188, height:107, borderRadius:14}}/>
            <Text style={{fontSize: 14, marginTop:10}}>Tech</Text>
            <Text style={{fontsize:40, fontWeight: 'bold', marginTop:8}}>Technology makes your life easier</Text>
          </View>
        </View>
        <View style={HomeStyle.BottomContainer}>
          <TouchableOpacity
            onPress={() => this.changeImage()}
            activeOpacity={0.7}
            style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
            <Text style={{color: 'white'}}>Follow</Text>
          </TouchableOpacity>
        </View>
        {/* <Position /> */}
      </View>
      </ScrollView>
      
      
    );
  }

  // class Valin extends Component {
  //   render(){
  //     return (
  //       <Text>Valin</Text>
  //     )
  //   }
  // }
}


  

export default Home;

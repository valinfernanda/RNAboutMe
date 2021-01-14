/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen'

const Radius = 35;

export const HomeStyle = StyleSheet.create({
  Container: {
    height : 1000,
    justifyContent: 'space-between',
  },
  topContainer: {
    height: 200,
    backgroundColor: '#8795AF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: 30,
  },
  // bodyContent: { 
   
  //   backgroundColor: 'gray',
  // },
  HeroContainer: {
    marginTop: 50,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  HeroImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  ButtonHeroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  ButtonContainer: {
    height: 40,
    width: 140,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  firstButton: {
    backgroundColor: 'white',
  },
  secondButton: {
    backgroundColor: '#5374FF',
  },
  biodata: {
    flexDirection: 'row',
  },
  personName: {
    flexDirection: 'column',
    paddingHorizontal:20,
    // size:20,
  },
  article: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 2,
    // marginRight: 20,
  },
  followerKotak: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // flexDirection: 'space-around',
    marginTop:25,
    backgroundColor:'#E3E4DF',
    height:50,
    width:120,
    borderRadius:9,
  },
  tulisanData: { 
    fontSize:9,
    justifyContent:'space-between',
    marginTop:7,
  },
  angkaTulisanData: {
    fontWeight: 'bold',
    justifyContent:'center',
    alignItems: 'center',
  }

});

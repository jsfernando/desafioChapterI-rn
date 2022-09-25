import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
// import * as SplashScreen from 'expo-splash-screen';

import logoImg from '../assets/images/logo/logo.png';

// import { 
//   Inter_400Regular,
//   Inter_500Medium,
//   Inter_700Bold,
// } from '@expo-google-fonts/inter'

// import { useFonts } from 'expo-font';
// SplashScreen.preventAutoHideAsync();

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  // const [fontsLoaded] =useFonts({
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Inter_700Bold,
  //   })
  // if(!fontsLoaded){
  //   return null;
  // } 
  // SplashScreen.hideAsync();

  // const tasksCounterText = TODO render 'tarefa' if tasksCounter equals 1, otherwise render 'tarefas'
  const tasksCounterText = tasksCounter === 1 ? 'tarefa' : 'tarefas';

  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      
      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        {/* <Text style={styles.tasksCounterBold}>{tasksCounter} {tasksCounterText}</Text> */}
        <Text style={styles.tasksCounterBold}>{tasksCounter} {tasksCounterText}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#8257E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    // fontFamily: 'Inter-Regular',
    fontFamily: 'Inter_400Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    // fontFamily: 'Inter-Bold',
    fontFamily: 'Inter_700Bold',
  }
});
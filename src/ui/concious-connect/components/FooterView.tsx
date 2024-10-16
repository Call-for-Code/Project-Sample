import {StyleSheet, View, Text, Image } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export function FooterView(){
  return  <View style={{flexDirection: 'row',
    alignItems: 'center', justifyContent:"center"}}><Text style={styles.footer}>Powered by Watson X AI:   <Image style={styles.tinyLogo} source={require('@/assets/images/watsonx-avatar-light.png')}></Image></Text></View>;
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    color: 'fff',
    justifyContent: 'center',
    verticalAlign: 'middle'
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
});
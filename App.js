import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {

  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('center');
  const [alignItems, setAlignItems] = useState('center');

  const layoutStyle = { flexDirection, justifyContent, alignItems };

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical';
  const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal';

  return (

    <View style={styles.container}>
      <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>

    //bottoni che attivano o disattivano i vari flex


  );
}

const flexDirectionOptions = ['row', 'column', 'row-reverse', 'column-reverse'];
const justifyContentOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 5,
  }
});

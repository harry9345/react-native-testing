
import { View } from 'react-native-web';
import Main from './src/componenets/Main'
import RepositoryList from './src/componenets/RepositoriItem';


export default function App() {
  console.log('íts here');
  return (
    <View>
      <Main />
      <RepositoryList />
    </View>
  );
}



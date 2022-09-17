import {StatusBar} from 'react-native';
// statusbar(barra superior com informaçoes de hora, bateria etc) sobrepor a aplicaçao, melhorando a experiencia do usuario

import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
// importando a fonts a serem utilizada que foram instaladas

import { Background } from './src/components/Background';


// ---------------------------------

export default function App() {
  // inicializando as fontes que vao ser utilizadas
 const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_900Black
  });
  

  return (
    <Background>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent'
        translucent
      />
        {
          // garantir que as fonts foram carregadas, antes da execução
          fontsLoaded ? 
        }
      
    </Background>
  );
}


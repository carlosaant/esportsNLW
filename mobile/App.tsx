import {StatusBar} from 'react-native';
// statusbar(barra superior com informaçoes de hora, bateria etc) sobrepor a aplicaçao, melhorando a experiencia do usuario

import { Background } from './src/components/Background';


// ---------------------------------

export default function App() {
  return (
    <Background>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent'
        translucent
      />
         
      
    </Background>
  );
}


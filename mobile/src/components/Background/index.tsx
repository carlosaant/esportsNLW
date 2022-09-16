// onde vai ficar a estrutura do componente

//elemento para renderizar imagem e utilizar como background
import { ImageBackground } from 'react-native';

import { styles } from './styles';

// definir a tipagem do arquivo png em src/@types
import backgroundImg from "../../assets/background-galaxy";
// ---------------------

interface Props{
  children: React.ReactNode;
}

// children vai ser tudo que estiver inserido dentro do componente (que vai ser utilizado, Ex: app.tsx tudo oque estiver dento das tags de background)
export function Background({children}: Props) {
  return (
    <ImageBackground  
    source={backgroundImg}
    style={styles.container}
    >
        {children}
    </ImageBackground>
  );
}
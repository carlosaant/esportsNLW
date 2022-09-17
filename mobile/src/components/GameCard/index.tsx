import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';
// touchableOpacity - regiao clicavel como um todo
// TouchableOpacityProps - tipagem para touchableopacity, para utilizar nos elementos

import { styles } from './styles';

// -----------------------
// exportar para reutiliazçao em outros componentes onde ira utilizar o card
export interface GameCardProps{
  id: string,
  name: string,
  ads: string,
  cover: ImageSourcePropType
}

// facilitar leitura e utilizaçao e tem todas propriedades de TouchableOpacityProps tambem
interface Props extends TouchableOpacityProps{
  data: GameCardProps
}

export function GameCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground 
        style={styles.cover}
        source={data.cover}
      />

    </TouchableOpacity>
  );
}
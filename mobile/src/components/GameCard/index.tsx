import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';
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
      >

      
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
              {data.name}
          </Text>
          <Text style={styles.ads}>
              {data.ads}
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
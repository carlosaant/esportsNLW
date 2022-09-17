import { View, Image } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
// ------------------
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style = {styles.logo}
      />

      <Heading 
        title='Encontre seu Duo!'
        subtitle='selecione o game que deseja jogar...'
      />

      <GameCard 
        // data={
        //   {
        //     name: 'League of Legends',
        //     ads: '4 anúncios',
        //   }
          data={GAMES[0]}   
      />

    </View>
  );
}
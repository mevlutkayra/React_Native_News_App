import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NewsCard} from './components';

const news_data = [
  {
    id: 0,
    author: 'Omkar Godbole',
    title: 'Bulls Exit BitMEX Bitcoin Futures Market',
    description:
      'Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.',
    imageUrl:
      'https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png',
  },
  {
    id: 1,
    author: 'Benjamin Pirus',
    title: 'Coinbase customers can now dodge a bank',
    description:
      'New update from Coinbase quickens the transmutation of crypto into fiat. Coinbase has unveiled a faster way for its customers to move digital currencies out of crypto and into their bank accounts.',
    imageUrl:
      'https://static.coindesk.com/wp-content/uploads/2020/10/GettyImages-alex-wong-1-1024x628.jpg',
  },
  {
    id: 2,
    author: 'Malwarebytes Labs',
    title: 'VideoBytes: Ransomware gets wasted!',
    description:
      "On today's VideoBytes, we look at how ransomware is on the rise, attacking corporations with malware that not only encrypts files, but also steals it.",
    imageUrl:
      'https://blog.malwarebytes.com/wp-content/uploads/2020/09/shutterstock_640824457-600x410.jpg',
  },
  {
    id: 3,
    author: 'Daniel Sparks',
    title: 'Why Tesla Stock Fell Sharply Friday Morning - Motley Fool',
    description:
      'Shares are down despite Tesla reporting record third-quarter deliveries. Shares of electric-car maker Tesla(NASDAQ:TSLA) fell Friday morning, declining 5% a few minutes into market open.',
    imageUrl: 'https://g.foolcdn.com/editorial/images/593799/stock-down.jpg',
  },
  {
    id: 4,
    author: 'Jessica Bursztynsky',
    title: 'Twilio hits new 52-week high as stock',
    description:
      'Shares of Twilio extended its gains into Friday, reaching a 52-week high, after the company said in a filing that it expects better-than-expected third-quarter revenue.',
    imageUrl:
      'https://image.cnbcfm.com/api/v1/image/105737636-1550147305726gettyimages-1034802076rr.jpg?v=1601647142',
  },
];
const banner_data = [
  {
    id: 0,
    text: 'Best Prime Day 2020 Alexa',
    imageUrl:
      'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
  },
  {
    id: 1,
    text: 'Stocks After Amazon',
    imageUrl:
      'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
  },
  {
    id: 2,
    text: "Levi's Most Popular Jeans",
    imageUrl:
      'https://s.yimg.com/os/creatr-uploaded-images/2020-10/e9b733b0-09cf-11eb-bfce-a2a6e6d17fa5',
  },
  {
    id: 3,
    text: 'Social Security Benefits?',
    imageUrl:
      'https://s.marketwatch.com/public/resources/images/MW-IQ535_ss_pay_ZG_20201009111853.jpg',
  },
  {
    id: 4,
    text: 'Columbus Day and Veterans Day',
    imageUrl: 'https://images.mktw.net/im-242755/social',
  },
];

const INewsX = () => {

  const listHeader = () => {
 
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {
                banner_data.map(banner_item=>{
                    return( 
                        <Image 
                        source={{ uri: banner_item.imageUrl }}
                         style={styles.banner0} 
                    />
 
                    )

                })
            }
        </ScrollView>
      )
     
}
         
 

  const renderItem = (news_data) => (
    <Text style={styles.text0}>{news_data.author}</Text>
  );

  const renderNewsData = ({item}) => <NewsCard news={item}></NewsCard>;

  const renderNewsDataX = (mydata) => <NewsCard news={mydata.item}></NewsCard>;

  return (
    <SafeAreaView style={styles.safeAreaView0}>
      <View style={styles.view0}>
        <FlatList
          data={news_data}
          renderItem={renderNewsDataX}
          keyExtractor={(item, id) => item.id.toString()}
          numColumns={2}
          ListHeaderComponent={listHeader} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView0: {
    flex: 1,
    backgroundColor: '#b2dfdb',
  },
  view0: {
    flex: 1,
  },
  scrview0: {
    flex: 1,
  },
  text0: {
    fontSize: 30,
  },

  banner0: {
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').height / 4,
    margin: 5,
    borderRadius: 10
  },
});

export default INewsX;

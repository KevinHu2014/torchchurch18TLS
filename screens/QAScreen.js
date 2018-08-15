import React from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

// 楊牧師的照片
const img = 'https://scontent.ftpe8-1.fna.fbcdn.net/v/t1.0-9/10288729_807840705903164_3256156870797098814_n.jpg?_nc_cat=0&oh=d3aaa4f5e48ef1831829ba296de36dd9&oe=5BF5A42E';

export default class QA extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 11,
          text: '為維持聚會品質，請將孩子另做安排。特會主日當天仍有Wonderland正常舉行。',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: '楊牧師',
            avatar: img,
          },
          sent: true,
          received: true,
        },
        {
          _id: 10,
          text: '可以帶小孩一起參加特會嗎？',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: '小明',
          },
        },
        {
          _id: 9,
          text: '特會期間請自行用餐。會場內除瓶水外，禁止飲食。',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: '楊牧師',
            avatar: img,
          },
          sent: true,
          received: true,
        },
        {
          _id: 8,
          text: '特會有提供餐點嗎？場內可以飲食嗎？',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: '小明',
          },
        },
        {
          _id: 7,
          text: '為尊重講員，所有聚會場次禁止錄音、攝影或錄影。',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: '楊牧師',
            avatar: img,
          },
          sent: true,
          received: true,
        },
        {
          _id: 6,
          text: '我可以在特會中拍照、錄影、錄音嗎？',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: '小明',
          },
        },
        {
          _id: 5,
          text: '可以。請依照招待人員指示，在合適的時間入場。',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: '楊牧師',
            avatar: img,
          },
          sent: true,
          received: true,
        },
        {
          _id: 4,
          text: '特會期間我可以都坐在固定座位嗎？',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: '小明',
          },
        },
        {
          _id: 3,
          text: '可以。請依照招待人員指示，在合適的時間入場。',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: '楊牧師',
            avatar: img,
          },
          sent: true,
          received: true,
        },
        {
          _id: 2,
          text: '特會開始後若中途有事離開，可以再參加嗎？',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: '小明',
          },
        },
        {
          _id: 1,
          text: '請至高峰會櫃臺確認報名資訊，以工本費50元購買新的特會物資包。',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: '楊牧師',
            avatar: img,
          },
          sent: true,
          received: true,
        },
        {
          _id: 0,
          text: '如果不小心弄丟高峰會物資包，怎麼辦？',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: '小明',
          },
        },
      ],
    });
  }

  render() {
    const { messages } = this.state;
    return (
      <GiftedChat
        messages={messages}
        renderInputToolbar={() => <View />}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

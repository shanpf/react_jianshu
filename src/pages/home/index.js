import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';

class Home extends Component{
    render() {
        return(
          <HomeWrapper>
              <HomeLeft>
                  <img
                      className='banner-img'
                      src='//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                  />
              <Topic/>
              <List/>
              </HomeLeft>
              <HomeRight>
                  <Recommend/>
                  <Writer/>
              </HomeRight>
          </HomeWrapper>
        );
    }
}

export default Home;
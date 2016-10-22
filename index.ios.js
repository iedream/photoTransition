/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Navigator,
    Picker,
    Item,
    Actions,
    TouchableHighlight
} from 'react-native';

export default class photoPowerpoint extends Component {
  render() {
    return (
        <View>
          <PhotoViewTransition pagename={this.props.pagename} />
          <View style={styles.generalContainer}>
            <PickerViewTransitionType pagename={this.props.pagename}/>
            <PickerViewImageType pagename={this.props.pagename}/>
          </View>
          <GOButton pagename={this.props.pagename} onPress={this.forceUpdate}/>
        </View>
    );
  }
}

class GOButton extends Component {
  state = {
    toggled: false
  };
  _onPress() {
    {() => this.setState({
      toggled: !this.state.toggled
    })}
  };
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this._onPress}>
        <Text>GO</Text>
      </TouchableHighlight>
    )
  }
}

const routes = [
  {title: 'First Scene', index: 0},
  {title: 'Second Scene', index: 1},
];

class PhotoViewTransition extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {

          if (imageIndex === 'image1') {
            return (
                <TouchableHighlight onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Image style = {styles.image} source={require('./image1.jpg')}/>
                </TouchableHighlight>
            )
          } else if (imageIndex === 'image2') {
            return (
                <TouchableHighlight onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Image style = {styles.image} source={require('./image2.jpg')}/>
                </TouchableHighlight>
            )
          } else if (imageIndex === 'image3') {
            return (
                <TouchableHighlight onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Image style = {styles.image} source={require('./image3.jpg')}/>
                </TouchableHighlight>
            )
          } else if (imageIndex === 'image4') {
            return (
                <TouchableHighlight onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Image style = {styles.image} source={require('./image4.jpg')}/>
                </TouchableHighlight>
            )
          } else if (imageIndex === 'image5') {
            return (
                <TouchableHighlight onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Image style = {styles.image} source={require('./image5.jpg')}/>
                </TouchableHighlight>
            )
          } else if (imageIndex === 'image6') {
            return (
                <TouchableHighlight onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Image style = {styles.image} source={require('./image6.jpg')}/>
                </TouchableHighlight>
            )
          } else if (imageIndex === 'image7') {
            return (
                <TouchableHighlight onPress={() => {
                  if (route.index === 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Image style = {styles.image} source={require('./image7.jpg')}/>
                </TouchableHighlight>
            )
          }
        }
  }
          configureScene={(route, routeStack) => {
            //return Navigator.SceneConfigs.FloatFromRight
            if (transitionTypeIndex === 'key1') {
              return Navigator.SceneConfigs.PushFromRight
            } else if (transitionTypeIndex === 'key2') {
              return Navigator.SceneConfigs.FloatFromRight
            } else if (transitionTypeIndex === 'key3') {
              return Navigator.SceneConfigs.FloatFromLeft
            } else if (transitionTypeIndex === 'key4') {
              return Navigator.SceneConfigs.FloatFromBottom
            } else if (transitionTypeIndex === 'key5') {
              return Navigator.SceneConfigs.HorizontalSwipeJump
            } else if (transitionTypeIndex === 'key6') {
              return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
            } else if (transitionTypeIndex === 'key7') {
              return Navigator.SceneConfigs.VerticalUpSwipeJump
            } else if (transitionTypeIndex === 'key8') {
              return Navigator.SceneConfigs.VerticalDownSwipeJump
            }
          }}
          style={styles.container}/>
    );
  }
}

var transitionTypeIndex = 'key1';
 class PickerViewTransitionType extends Component {
  state = {
    selected1: 'key1',
    selected2: 'key2',
    selected3: 'key3',
    selected4: 'key4',
    selected5: 'key5',
    selected6: 'key6',
    selected7: 'key7',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };
  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    transitionTypeIndex = value;
    this.setState(newState);
  };
  render() {
    return (
      <Picker
        style={styles.pickerViewTransition}
        selectedValue={this.state.selected1}
        onValueChange={this.onValueChange.bind(this, 'selected1')}
        prompt="Pick the transition you want">
        <Item label="Push" value="key1" />
        <Item label="Float Right" value="key2" />
        <Item label="Float Left" value="key3" />
        <Item label="Float Bottom" value="key4" />
        <Item label="Hor. Jump" value="key5" />
        <Item label="Hor. Right Jump" value="key6" />
        <Item label="Vert. Up Jump" value="key7" />
        <Item label="Vert. Down Jump" value="key8" />
      </Picker>
    );
  }
}

var imageIndex = 'image1';
class PickerViewImageType extends Component {
  state = {
    selected1: 'image1',
    selected2: 'image2',
    selected3: 'image3',
    selected4: 'image4',
    selected5: 'image5',
    selected6: 'image6',
    selected7: 'image7',
    color: 'red',
    mode: Picker.MODE_DIALOG,
  };
  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    imageIndex = value;
    this.setState(newState);
  };
  render() {
    return (
      <Picker
        style={styles.pickerViewTransition}
        selectedValue={this.state.selected1}
        onValueChange={this.onValueChange.bind(this, 'selected1')}>
        <Item label="Image 1" value="image1" />
        <Item label="Image 2" value="image2" />
        <Item label="Image 3" value="image3" />
        <Item label="Image 4" value="image4" />
        <Item label="Image 5" value="image5" />
        <Item label="Image 6" value="image6" />
        <Item label="Image 7" value="image7" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    height: 200,
    backgroundColor: '#F5FCFF',
  },
  pickerViewTransition: {
    width: 180,
  },
  generalContainer: {
    flexDirection:'row'
  },
  image: {
    height: 200,
    margin: 10,
    resizeMode: 'cover'
  },
  button: {
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('photoPowerpoint', () => photoPowerpoint);

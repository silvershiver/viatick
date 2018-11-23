/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, NetInfo } from "react-native";
import { Actions, Scene, Router } from "react-native-router-flux";

import LoginPage from "screens/LoginPage";
import ForgotPassPage from "screens/ForgotPassPage";
import SignUpPage from "screens/SignUpPage";
import SelectAppPage from "screens/SelectAppPage";
import SplashScreenPage from "screens/SplashScreenPage";
import HomeAllPage from "screens/HomeAllPage";
import DeviceListPage from "screens/DeviceListPage";
import DeviceEditPage from "screens/DeviceEditPage";
import RegisterDevicePage from "screens/RegisterDevicePage";

import { connectionState } from "src/actions/networkAction";
import { connect } from "react-redux";

//ROUTER
const scenes = Actions.create(
  <Scene key="root">
    <Scene
      initial
      key="SplashScreenPage"
      component={SplashScreenPage}
      hideNavBar={true}
    />
    <Scene key="LoginPage" component={LoginPage} hideNavBar={true} />
    <Scene key="ForgotPassPage" component={ForgotPassPage} hideNavBar={true} />
    <Scene key="SignUpPage" component={SignUpPage} hideNavBar={true} />
    <Scene key="SelectAppPage" component={SelectAppPage} hideNavBar={true} />
    <Scene key="HomeAllPage" component={HomeAllPage} hideNavBar={true} />
    <Scene key="DeviceListPage" component={DeviceListPage} hideNavBar={true} />
    <Scene key="DeviceEditPage" component={DeviceEditPage} hideNavBar={true} />
    <Scene
      key="RegisterDevicePage"
      component={RegisterDevicePage}
      hideNavBar={true}
    />
  </Scene>
);

class App extends Component {
  constructor(props) {
    super(props);

    //Default app text style
    Text.defaultProps.style = { fontSize: 10, fontWeight: "300", marginTop: 5 };
  }

  componentWillMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
  }

  handleConnectionChange = isConnected => {
    console.log("network: " + isConnected);
    this.props.connectionState(isConnected);
  };

  // handleConnectivityChange = ({ type, effectiveType }) => {
  //   const reachabilityType = type.toLowerCase()

  //   this.isNetworkConnected = () => {
  //     return NetInfo.getConnectionInfo().then(() => {
  //       if (reachabilityType === 'unknown') {
  //         return new Promise(resolve => {
  //           const handleFirstConnectivityChangeIOS = isConnected => {
  //             NetInfo.isConnected.removeEventListener('connectionChange', handleFirstConnectivityChangeIOS)
  //             resolve(isConnected)
  //           }

  //           NetInfo.isConnected.addEventListener('connectionChange', handleFirstConnectivityChangeIOS)
  //         })
  //       }

  //       return (reachabilityType !== 'none' && reachabilityType !== 'unknown')
  //     })
  //   }

  //   this.isNetworkConnected().then(connected => {
  //     this.props.networkChecking(connected, reachabilityType, effectiveType)
  //   })
  // }

  render() {
    return <Router scenes={scenes} backAndroidHandler={this.onBackPress} />;
  }

  onBackPress() {
    if (Actions.state.index === 0) {
      return false;
    }
    Actions.pop();
    return true;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    networkChecking: (connected, reachabilityType, effectiveType) =>
      dispatch(networkChecking(connected, reachabilityType, effectiveType)),
    connectionState: status => dispatch(connectionState(status))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);

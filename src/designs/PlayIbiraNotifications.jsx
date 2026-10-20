import React from 'react';
import PlayIbiraNotificationsView from './PlayIbiraNotificationsView';
import './PlayIbiraNotifications.css';

class PlayIbiraNotificationsLogic extends React.Component {
  renderVals() {
    const s = this.props.screen || 'n1';
    return { screen: s, isN1: s === 'n1', isN2: s === 'n2', isW1: s === 'w1', isW2: s === 'w2', isW3: s === 'w3' };
  }
}

export default class PlayIbiraNotifications extends PlayIbiraNotificationsLogic {
  render() {
    return PlayIbiraNotificationsView({ ...this.props, ...this.renderVals() });
  }
}

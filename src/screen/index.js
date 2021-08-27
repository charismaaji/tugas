import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class Screen extends Component {
  constructor(props) {
    super(props);
  }

  _handleDeleteData = id => {
    this.props.deleteData(id);
  };

  render() {
    const {title, description} = this.props;
    return (
      <View>
        <Text> Title : {title} </Text>
        <Text> Description : {description}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description,
  };
};

const mapDispatchToProps = Dispatch => {
  return {
    deleteData: id => dispatchEvent(deleteData(id)),
  };
};

export default connect(mapStateToProps)(Screen);

const styles = StyleSheet.create({});

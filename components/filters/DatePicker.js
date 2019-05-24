import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { whiteColor, greyColor, primaryColor, boldFontFamily } from "../../helpers/styleGuidelines";

export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerStartVisible: false,
      isDateTimePickerEndVisible: false,
      DateTimeStart: '',
      DateTimeEnd: '',

    };
  }

  showDateTimePicker = (param) => {
    console.log('bouton:', param)
    if (param === "start") {
      this.setState({ isDateTimePickerStartVisible: true });

    } else if (param === "end") {
      this.setState({ isDateTimePickerEndVisible: true });
    }
  };

  showDateTimePickerEnd = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerStartVisible: false });
    this.setState({ isDateTimePickerEndVisible: false });
  };

  handleDatePickedStart = date => {
    //console.log("A date has been picked: ", date);

    console.log(JSON.stringify(date))
    this.setState({ DateTimeStart: date });

    this.props.actions.setDatePickedStart(date)
    // console.log('date de début'+this.state.DateTimeStart)
    this.hideDateTimePicker();
  };

  handleDatePickedEnd = date => {
    //console.log("A date has been picked: ", date);

    console.log(date)
    this.setState({ DateTimeEnd: date });
    this.props.actions.setDatePickedEnd(date)

    //   console.log('date de fin'+this.state.DateTimeEnd)
    this.hideDateTimePicker();
  };

  render() {
    const colors = [primaryColor];
    return (
      <>
        {/* <Text>{JSON.stringify(this.state.DateTimeStart)}</Text> */}
        <Text>{this.props.StartDateFilter}</Text>
        <View style={styles.buttonStyle}>
          <Button
            color={greyColor}
            padding="20"
            title=" Date de début" onPress={() => this.showDateTimePicker('start')} />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            color={greyColor}
            padding="20"
            title=" Date de fin " onPress={() => this.showDateTimePicker('end')} />
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerStartVisible}
          onConfirm={this.handleDatePickedStart}
          onCancel={this.hideDateTimePicker}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerEndVisible}
          onConfirm={this.handleDatePickedEnd}
          onCancel={this.hideDateTimePicker}
        />

      </>
    );
  }
}
const styles = StyleSheet.create({
  container: { marginTop: 20 },
  buttonStyle: {
    backgroundColor: greyColor,
    color: whiteColor,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 5,
    // width: 150,
    padding: 8,
    margin: 20,
  },
  text: {
    color: primaryColor,
    fontFamily: boldFontFamily,
  },
  container02: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  }
});

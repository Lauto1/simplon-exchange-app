import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { primaryColor, whiteColor, boldFontFamily, } from "../../helpers/styleGuidelines";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // récupere les données demander a l'api en fonction de son type (nombre de user, reponse, post)

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    const endDate = selectedEndDate ? selectedEndDate.toString() : "";
    const minDate = new Date(""); // Today
    const maxDate = new Date("");
    return (
      <View>
        <View style={styles.container}>
          {/* Mise en place des attributs du calendrier */}
          <CalendarPicker
            startFromMonday={true}
            onDateChange={this.onDateChange}
            minDate={minDate}
            maxDate={maxDate}
            weekdays={["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]}
            months={[
              "Janvier",
              "Fevrier",
              "Mars",
              "Avril",
              "Mai",
              "Juin",
              "Juillet",
              "Août",
              "Septembre",
              "Octobre",
              "Novembre",
              "Decembre"
            ]}
            previousTitle="Précedent"
            nextTitle="Suivant"
            selectedDayColor={primaryColor}
            allowRangeSelection={true}
          />

          {/* <View>
                    <Text>SELECTED DATE:{ startDate }</Text>
                    <Text>SELECTED DATE:{ endDate }</Text>
                </View> */}
        </View>
      </View>
    );
  }
}
// Style appliqué au calendrier
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
    marginTop: 100,
    fontFamily: boldFontFamily,
  }
});

export default Filter;

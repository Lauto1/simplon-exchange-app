import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class FilterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            selectedEndtDate: null,

        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }
    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        const endDate = selectedEndDate ? selectedEndDate.toString() : '';
        const minDate = new Date(''); // Today
        const maxDate = new Date('');
        return (
            <View style={styles.container}>
                <CalendarPicker
                    startFromMonday={true}
                    onDateChange={this.onDateChange}
                    minDate={minDate}
                    maxDate={maxDate}
                    weekdays={['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']}
                    months={['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre']}
                    previousTitle="Précedent"
                    nextTitle="Suivant"
                    selectedDayColor="#d6363e"
                    allowRangeSelection={true}

                />

                <View>
                    <Text>SELECTED DATE:{ startDate }</Text>
                    <Text>SELECTED DATE:{ endDate }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 100,
    },
});
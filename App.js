import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
} from 'react-native-popup-dialog';
import FilterComponent from "./components/filters/Filter.component";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

export default class App extends Component {
    state = {
        defaultAnimationDialog: false,
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Button
                        title="Trier par date"
                        onPress={() => {
                            this.setState({
                                defaultAnimationDialog: true,
                            });
                        }}
                    />
                </View>

                <Dialog
                    onDismiss={() => {
                        this.setState({ defaultAnimationDialog: false });
                    }}
                    height={700}

                    visible={this.state.defaultAnimationDialog}
                    rounded
                    actionsBordered
              >
                    <DialogTitle
                        title="Sélectionner des date debut et fin "
                        hasTitleBar={false}
                        align="left"
                    />
                    <DialogContent>
                       <FilterComponent/>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <DialogButton
                                text="Supprimer"
                                bordered
                                onPress={() => {
                                    this.setState({ defaultAnimationDialog: false });
                                }}
                                key="button-1"
                            />
                            <DialogButton
                                text="Enregistrer"
                                bordered
                                onPress={() => {
                                    this.setState({ defaultAnimationDialog: false });
                                }}
                                key="button-2"
                            />
                        </View>
                    </DialogContent>

                </Dialog>
            </View>
        );
    }
}
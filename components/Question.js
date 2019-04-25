import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Icon } from "react-native-elements";

class Question extends Component {
  render() {
    const { question } = this.props;

<<<<<<< HEAD
    render() {
        return (
            <View style={styles.view}>
                <Card style={styles.card}>
                    {/* <View style={styles.vote}>
                        <Icon name="sort-up" type='font-awesome'>
                        </Icon>
                        <Text>12</Text>
                    </View> */}
                    <View style={styles.text}>
                        <View>
                            <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: 'bold', color: '#d6363e' }}>
                                Titre de la question, qui peut être long, long, long. En fait je ne sais pas
                             </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16 }}>Date</Text>
                            <Text style={{ fontSize: 16 }}>Auteur</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Icon name="tag" type='font-awesome'></Icon>
                                <Text style={{ marginLeft: 8 }}>php</Text>
                            </View>
                        </View>

                    </View>
                </Card >
            </View >
        )
    }
};
const styles = StyleSheet.create({
    view: {

    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5
    },
    vote: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        flex: 5
    }
})
=======
    return (
      <Card>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View style={{ marginRight: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {question.upvote}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginBottom: 10,
                fontSize: 20,
                fontWeight: "bold",
                color: "#d6363e"
              }}
            >
              {question.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontSize: 16 }}>{question.date}</Text>
              <Text style={{ fontSize: 16 }}>{question.author}</Text>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Icon name="tag" type="font-awesome" />
                <Text style={{ marginLeft: 8 }}>{question.tag}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Icon name="comment" type="font-awesome" />
                <Text style={{ marginLeft: 8 }}>{question.answers.length}</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}
>>>>>>> origin/team-2-questions-list

export default Question;

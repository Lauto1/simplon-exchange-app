import { ImagePicker, MailComposer, Permissions } from "expo";
import { Formik } from "formik";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

class BugReportComponent extends Component {
  // On crée notre constructor avec comme paramètre les props du Formulaire
  constructor(props) {
    // On appel props en super pour avoir accès a this.state({})
    super(props);
    // On déclare le state
    this.state = {
      mail: "",
      environnement: "",
      uploading: false,
      uploaded: "",
      page: "",
      date: "",
      category: "",
      descriptif: "",
      image: ""
    };
  }

  /**
   * Infos :
   * -Procédure de génération de la date
   */
  setDate() {
    let now = new Date();

    const date = this.addZero(now.getDate());
    const month = this.addZero(now.getMonth());
    const years = this.addZero(now.getFullYear());
    const hours = this.addZero(now.getHours());
    const minutes = this.addZero(now.getMinutes());

    let formatedDate =
      date + "/" + month + "/" + years + " " + hours + ":" + minutes;
    this.setState({ date: formatedDate });
  }

  /**
   * Infos :
   * -Procédure de de formatage de la date
   * @var Integer value : correspond à un jour , un mois , une heure , une minute
   * inférieur(e)s à 10
   */
  addZero(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }

  componentDidMount() {
    this.setDate();
  }

  traitment = async () => {
    // On demade l'accès au téléphone du propriétaire avec Permissions d'expo
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    // Si l'utilisateur accepte les permissions on :
    if (cameraRollPerm === "granted") {
      /**
       * Crée une variable pickerResult qui récupère la valeur de l'image que
       * l'utilisateur aura choisi
       */
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        // Permet à l'utilisateur d'éditer son image
        allowsEditing: true,
        // Sur Android on lui laisse l'accès à pouvoir redimenssionner l'image
        aspect: [4, 3]
      });
      // On envoi notre image a handleImagePicked
      this._handleImagePicked(pickerResult);
      this.setState({ uploaded: "✔" });
    }
  };
  _handleImagePicked = async pickerResult => {
    /* On crée deux variables :
     * - uploadResponse qui récupèrera l'uri de l'image
     * - uploadResult qui récupèrera uploadResponse au format JSON
     */
    let uploadResponse, uploadResult;
    /**
     * On set le state initial :
     * - On set image avec l'uri de pickerResult
     * - On set uploading a true pour dire à notre ordinateur qu'on est en train d'uploader
     */
    this.setState({
      image: pickerResult.uri,
      uploading: true
    });
    // Si l'utilisateur annule la saisie d'image on :
    if (!pickerResult.cancelled) {
      // trouve le nom de la fonction à utiliser pour uploader l'image
      uploadResponse = await this.uploadImageAsync(pickerResult.uri);
      // on parse l'uri au format JSON
      uploadResult = await uploadResponse.json();
      // On set le state
      this.setState({
        // image récupèrera la location de l'image
        image: uploadResult.location,
        // uploading récupèrera false pour lui dire qu'on termine l'opload
        uploading: false
      });
    }
    // On set le state uploading a false au cas ou ça marche pour lui dire qu'on a terminé l'uploading
    this.setState({
      uploading: false
    });
  };
  async sendMail(obj) {
    // On crée un email avec :
    MailComposer.composeAsync({
      // Comme recipient l'obj.mail qui est l'email de la personne
      recipients: [obj.mail],
      // En sujet on met la catégories du mail
      subject: obj.category,
      // Body contient toutes les informations du mail
      body:
        "Mail : " +
        obj.mail +
        "\n" +
        "Environnement : " +
        obj.environnement +
        "\n" +
        "Page : " +
        obj.page +
        "\n" +
        "Date : " +
        obj.date +
        "\n" +
        "Catégories : " +
        obj.category +
        "\n" +
        "Descriptif : " +
        obj.descriptif +
        "\n",
      attachments: [this.state.image]
    });
  }
  async uploadImageAsync(uri) {
    // On prépare l'url de l'API
    let apiUrl = "https://file-upload-example-backend-dkhqoilqqn.now.sh/upload";
    // On split l'uri de l'image
    let uriParts = uri.split(".");
    // On récupère la longueur du chemin de l'image
    let fileType = uriParts[uriParts.length - 1];
    // On crée un FormData()
    let formData = new FormData();
    // On ajoute a la clef photo un objet de type :
    /**
     * {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
     * }
     */
    formData.append("photo", {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`
    });
    // On prépare nos options
    let options = {
      // Méthode `POST`
      method: "POST",
      // En corps de requête le formData
      body: formData,
      // On accepte les aplications de type json
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    };
    // On fetch l'api avec les options
    return fetch(apiUrl, options);
  }
  verificationUtilisateur() {
    // On crée une régexEmail qui va nous permettre de vérifier si le champs entré et de type email
    const regexEmail = /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    // On vérifie si le state email est de type email si c'est le cas on :
    if (regexEmail.exec(this.state.mail)) {
      // vérifie si l'image est différent de vide si c'est le cas on :
      if (this.state.image !== "") {
        // set le state avec l'image
        this.setState({
          mail: this.state.mail,
          environnement: this.state.environnement,
          page: this.state.page,
          category: this.state.category,
          date: this.state.date,
          descriptif: this.state.descriptif,
          image: this.state.image
        });
        //Et on envoi a sendEmail l'état au préalable préremplis
        return this.sendMail(this.state);
      } else {
        // sinon on set le state avec comme valeur pour l'image de ''
        this.setState({
          mail: this.state.mail,
          environnement: this.state.environnement,
          page: this.state.page,
          category: this.state.category,
          date: this.state.date,
          descriptif: this.state.descriptif,
          image: ""
        });
        // Et on envoi a sendEmail l'état au préalable préremplis
        return this.sendMail(this.state);
      }
    } else {
      // Sinon on retourne un message d'erreur
      return console.error("Votre email doit être valide");
    }
  }
  render() {
    // On dit a Formik ou chercher ses valeurs initiaux ici le state du Formulaire
    return (
      <Formik initialValues={this.state}>
        {() => (
          <KeyboardAvoidingView
            style={styles.card}
            behavior="padding"
            enabled
            keyboardVerticalOffset="10"
          >
            <Text style={styles.title}>Signaler un Bug</Text>
            <View style={styles.line} />
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="mail"
                style={styles.inputText}
                onChangeText={e => {
                  this.setState({ mail: e });
                }}
              />
              <Text style={styles.date}>Date : {this.state.date}</Text>
              <Picker
                style={styles.select}
                selectedValue={this.state.environnement}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ environnement: itemValue });
                }}
              >
                <Picker.Item
                  label="Environnement"
                  enabled="false"
                  color="grey"
                />
                <Picker.Item label="Android" value="android" />
                <Picker.Item label="Ios" value="ios" />
              </Picker>
              <Picker
                style={styles.select}
                selectedValue={this.state.page}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ page: itemValue });
                }}
              >
                <Picker.Item label="Page" enabled="false" color="grey" />
                <Picker.Item label="Page 1" value="page1" />
                <Picker.Item label="Page 2" value="page2" />
              </Picker>
              <Picker
                style={styles.select}
                selectedValue={this.state.category}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ category: itemValue });
                }}
              >
                <Picker.Item label="Catégorie" enabled="false" color="grey" />
                <Picker.Item label="Catégorie 1" value="category1" />
                <Picker.Item label="Catégorie 2" value="category2" />
              </Picker>
              <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="descriptif"
                style={styles.inputText}
                onChangeText={e => {
                  this.setState({ descriptif: e });
                }}
              />
              <TouchableOpacity
                style={styles.imageUpload}
                onPress={() => this.traitment()}
              >
                <Text style={styles.imageUploadText}>
                  AJOUTER UNE IMAGE {this.state.uploaded}
                </Text>
              </TouchableOpacity>
              <Button
                title="Soumettre"
                color="#d6363e"
                accessibilityLabel="Signalisation d'un disfonctionnement"
                style={styles.submit}
                onPress={() => this.verificationUtilisateur()}
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    );
  }
}

BugReportComponent.propTypes = {
  // On vérifie si le type entrée dans mail est un type string et qu'il est requis
  mail: PropTypes.string.isRequired,
  // On vérifie si le type entrée dans environnement est un type string et qu'il est requis
  environnement: PropTypes.string.isRequired,
  // On vérifie si le type entrée dans page est un type string et qu'il est requis
  page: PropTypes.string.isRequired,
  // On vérifie si le type entrée dans date est un type date et qu'il est requis
  category: PropTypes.string.isRequired,
  // On vérifie si le type entrée dans descriptif est un type string et qu'il est requis
  descriptif: PropTypes.string.isRequired,
  // On vérifie si le type entrée dans image est un type string
  image: PropTypes.string
};

const styles = StyleSheet.create({
  card: {
    height: "auto",
    width: "90%",
    borderRadius: 3,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 8,
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: "#d6363e",
    fontSize: 30,
    textAlign: "left",
    width: "100%",
    marginTop: 10
  },
  date: {
    marginLeft: 8,
    marginBottom: 15
  },
  line: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "80%",
    height: 1,
    marginTop: 15,
    marginBottom: 20
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20
  },
  inputText: {
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingLeft: 5,
    marginBottom: 20
  },
  select: {
    borderColor: "lightgrey",
    borderBottomWidth: 1
  },
  textArea: {
    padding: 2,
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid"
  },
  imageUpload: {
    backgroundColor: "#d6363e",
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 2,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  imageUploadText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  submit: {
    width: "80%"
  }
});

export default BugReportComponent;

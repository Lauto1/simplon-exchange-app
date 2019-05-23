import {ImagePicker, MailComposer, Permissions} from "expo";
import {Formik} from "formik";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Email, Item, Span, Image,renderEmail } from 'react-html-email';
import { Platform } from 'react-native';
import { styleMailing, dataText, styleMailingData } from '../helpers/styleGuidelineTemplateMailing';
import {
  Button,
  KeyboardAvoidingView,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Platform
} from "react-native";
import {withNavigation} from 'react-navigation';
import {Dropdown} from "react-native-material-dropdown";
import {blackColor, lightGreyColor, whiteColor, primaryColor} from "../helpers/styleGuidelines"

class BugReportComponent extends Component {
    // On crée notre constructor avec comme paramètre les props du Formulaire
    constructor(props) {
        // On appel props en super pour avoir accès a this.state({})
        super(props);
        // On déclare le state
        this.state = {
            mail: '',
            environnement: '',
            uploading: false,
            uploaded: '',
            page: '',
            date: '',
            category: '',
            descriptif: '',
            image: ''
        }
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

        let formatedDate = date + '/' + month + '/' + years + ' ' + hours + ':' + minutes;
        this.setState({date: formatedDate});
    }

    /**
 * Infos :
 * -Procédure de de formatage de la date
 * @var Integer value : correspond à un jour , un mois , une heure , une minute
 * inférieur(e)s à 10
 */
  addZero(value)
  {
      if (value < 10) {
          value = '0' + value;
      }
      return value;
  }

  componentDidMount() {
      this.setDate();
  }

    traitment = async() => {
        // On demade l'accès au téléphone du propriétaire avec Permissions d'expo
        const {status: cameraRollPerm} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // Si l'utilisateur accepte les permissions on :
        if (cameraRollPerm === 'granted') {
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
            this.setState({uploaded: '✔'});
        }
    }
    _handleImagePicked = async pickerResult => {
        /* On crée deux variables :
     * - uploadResponse qui récupèrera l'uri de l'image
     * - uploadResult qui récupèrera uploadResponse au format JSON
     */
        let uploadResponse,
            uploadResult;
        /**
     * On set le state initial :
     * - On set image avec l'uri de pickerResult
     * - On set uploading a true pour dire à notre ordinateur qu'on est en train d'uploader
     */
        this.setState({image: pickerResult.uri, uploading: true});
        // Si l'utilisateur annule la saisie d'image on :
        if (!pickerResult.cancelled) { // trouve le nom de la fonction à utiliser pour uploader l'image
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
        // On set le state uploading a false au cas ou ça marche pour lui dire qu'on a
        // terminé l'uploading
        this.setState({uploading: false})
    }
    async sendMail(obj) {
        // On crée un email avec :
        MailComposer.composeAsync({
            // Comme recipient l'obj.mail qui est l'email de la personne
            recipients: [obj.mail], //à remplacer par l'adresse mail du support technique
            // En sujet on met la catégories du mail
            subject: obj.category,
            // Body contient toutes les informations du mail
            body: 'Mail : ' + obj.mail + '\nEnvironnement : ' + obj.environnement + '\nPage : ' + obj.page + '\nDate : ' + obj.date + '\nCatégories : ' + obj.category + '\nDescriptif : ' + obj.descriptif + '\n',
            attachments: [this.state.image]
        });
    }
    // On set le state uploading a false au cas ou ça marche pour lui dire qu'on a terminé l'uploading
    this.setState({
        uploading:false,
    })
} 
async sendMail(obj){
    if(Platform.OS === 'ios'){
      if(this.state.image){
        // On crée un email avec :
        MailComposer.composeAsync({
            // Comme recipient l'obj.mail qui est l'email de la personne
            recipients:[obj.mail,'contact@idmkr.io'], //à remplacer par l'adresse mail du support technique
            // En sujet on met la catégories du mail
            subject:obj.category,
            // Body contient toutes les informations du mail
            body: 
              renderEmail(
                <Email title=""><br/><br/>
                  <Item align="left">
                    <Span>support technique Simplon :</Span><br/><br/>
                    <Span {...styleMailing.date}{...dataText}>Envoyé le : </Span><Span {...styleMailingData.date}{...dataText}>{this.state.date}</Span><br/>
                    <Span {...styleMailing.environnement}{...dataText}>Environnement : </Span><Span {...styleMailingData.environnement}{...dataText}>{this.state.environnement}</Span><br/>
                    <Span {...styleMailing.page}{...dataText}>Page : </Span><Span {...styleMailingData.page}{...dataText}>{this.state.page}</Span><br/>
                    <Span {...styleMailing.categories}{...dataText}>Catégorie : </Span><Span {...styleMailingData.categories}{...dataText}>{this.state.category}</Span><br/><br/>
                    <Span {...styleMailing.descriptif}{...dataText}>Descriptif : </Span><Span {...styleMailingData.descriptif}{...dataText}>{this.state.descriptif}</Span>
                    <Image width={500} height={500} alt="image Bug" src={this.state.image}/>
                  </Item>
                </Email>
              ),
            isHtml:true,
        });
      }else {
            // On crée un email avec :
      MailComposer.composeAsync({
        // Comme recipient l'obj.mail qui est l'email de la personne
        recipients:[obj.mail,'contact@idmkr.io'], //à remplacer par l'adresse mail du support technique
        // En sujet on met la catégories du mail
        subject:obj.category,
        // Body contient toutes les informations du mail
        body: 
          renderEmail(
            <Email title=""><br/><br/>
              <Item align="left">
                <Span>support technique Simplon :</Span><br/><br/>
                <Span {...styleMailing.date}>Envoyé le : </Span><Span {...styleMailingData.date}>{this.state.date}</Span><br/>
                <Span {...styleMailing.environnement}>Environnement : </Span><Span {...styleMailingData.environnement}>{this.state.environnement}</Span><br/>
                <Span {...styleMailing.page}>Page : </Span><Span {...styleMailingData.page}>{this.state.page}</Span><br/>
                <Span {...styleMailing.categories}>Catégorie : </Span><Span {...styleMailingData.categories}>{this.state.category}</Span><br/>
                <Span {...styleMailing.descriptif}>Descriptif : </Span><Span {...styleMailingData.descriptif}>{this.state.descriptif}</Span>
              </Item>
            </Email>
          ),
        isHtml:true,
    });
      } 
    }else {
      if(this.state.image){
        // On crée un email avec :
        MailComposer.composeAsync({
            // Comme recipient l'obj.mail qui est l'email de la personne
            recipients:[obj.mail,'contact@idmkr.io'], //à remplacer par l'adresse mail du support technique
            // En sujet on met la catégories du mail
            subject:obj.category,
            // Body contient toutes les informations du mail
            body: 
              renderEmail(
                <Email title="support technique Simplon :"><br/><br/>
                  <Item align="left">
                    <Span {...styleMailing.date}{...dataText}>Envoyé le : </Span><Span {...styleMailingData.date}{...dataText}>{this.state.date}</Span><br/><br/>
                    <Span {...styleMailing.environnement}{...dataText}>Environnement : </Span><Span {...styleMailingData.environnement}{...dataText}>{this.state.environnement}</Span><br/><br/>
                    <Span {...styleMailing.page}{...dataText}>Page : </Span><Span {...styleMailingData.page}{...dataText}>{this.state.page}</Span><br/><br/>
                    <Span {...styleMailing.categories}{...dataText}>Catégorie : </Span><Span {...styleMailingData.categories}{...dataText}>{this.state.category}</Span><br/><br/>
                    <Span {...styleMailing.descriptif}{...dataText}>Descriptif : </Span><Span {...styleMailingData.descriptif}{...dataText}>{this.state.descriptif}</Span>
                  </Item>
                </Email>
              ),
              attachments:[this.state.image],
            isHtml:true,
        });
      }else {
            // On crée un email avec :
      MailComposer.composeAsync({
        // Comme recipient l'obj.mail qui est l'email de la personne
        recipients:[obj.mail,'contact@idmkr.io'], //à remplacer par l'adresse mail du support technique
        // En sujet on met la catégories du mail
        subject:obj.category,
        // Body contient toutes les informations du mail
        body: 
          renderEmail(
            <Email title="support technique Simplon :"><br/><br/>
              <Item align="left">
                <Span {...styleMailing.date}>Envoyé le : </Span><Span {...styleMailingData.date}>{this.state.date}</Span><br/><br/>
                <Span {...styleMailing.environnement}>Environnement : </Span><Span {...styleMailingData.environnement}>{this.state.environnement}</Span><br/><br/>
                <Span {...styleMailing.page}>Page : </Span><Span {...styleMailingData.page}>{this.state.page}</Span><br/><br/>
                <Span {...styleMailing.categories}>Catégorie : </Span><Span {...styleMailingData.categories}>{this.state.category}</Span><br/><br/>
                <Span {...styleMailing.descriptif}>Descriptif : </Span><Span {...styleMailingData.descriptif}>{this.state.descriptif}</Span>
              </Item>
            </Email>
          ),
        isHtml:true,
    });
      }
    }
}
async uploadImageAsync(uri) {
    // On prépare l'url de l'API
    let apiUrl = 'https://file-upload-example-backend-dkhqoilqqn.now.sh/upload';
    // On split l'uri de l'image
    let uriParts = uri.split('.');
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
        formData.append('photo', {
            uri,
            name: `photo.${fileType}`,
            type: `image/${fileType}`
        });
        // On prépare nos options
        let options = {
            // Méthode `POST`
            method: 'POST',
            // En corps de requête le formData
            body: formData,
            // On accepte les aplications de type json
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        };
        // On fetch l'api avec les options
        return fetch(apiUrl, options);
    }
    verificationUtilisateur() {
        // On crée une régexEmail qui va nous permettre de vérifier si le champs entré
        // et de type email
        const regexEmail = /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        // On vérifie si le state email est de type email si c'est le cas on :
        if (regexEmail.exec(this.state.mail)) {
            // vérifie si l'image est différent de vide si c'est le cas on :
            if (this.state.image !== '') {
                // set le state avec l'image
                this.setState({
                    mail: this.state.mail,
                    environnement: this.state.environnement,
                    page: this.state.page,
                    category: this.state.category,
                    date: this.state.date,
                    descriptif: this.state.descriptif,
                    image: this.state.image
                })
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
                    image: ''
                })
                // Et on envoi a sendEmail l'état au préalable préremplis
                return this.sendMail(this.state);
            }
        } else {
            // Sinon on retourne un message d'erreur
            return console.error('Votre email doit être valide');
        }
    }
    render() {
        const environments = [
            {
                value: "Android"
            }, {
                value: "Ios"
            }
        ];
        const pages = [
            {
                value: "Acceuil"
            }, {
                value: "Inscription"
            }, {
                value: "Connexion"
            }, {
                value: "Faq"
            }, {
                value: "Bug"
            }, {
                value: "Statistiques"
            }, {
                value: "Graphiques"
            }
        ];
        const categories = [
            {
                value: "Catégorie de bug 1"
            }, {
                value: "Catégorie de bug 2"
            }, {
                value: "Catégorie de bug 3"
            }
        ];

        // On dit a Formik ou chercher ses valeurs initiaux ici le state du Formulaire
        return (
            <Formik initialValues={this.state}>
                {() => (
                    <KeyboardAvoidingView
                        style={styles.card}
                        behavior="padding"
                        enabled
                        keyboardVerticalOffset="10">
                        <Text style={styles.title}>Signaler un Bug</Text>
                        <View style={styles.line}/>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="mail"
                                style={styles.inputText}
                                onChangeText={e => {
                                this.setState({mail: e});
                            }}/>
                            <Text style={styles.date}>Date : {this.state.date}</Text>
                            <Dropdown
                                label="Environnement"
                                data={environments}
                                onChangeText={itemValue => {
                                this.setState({environnement: itemValue});
                            }}/>
                            <Dropdown
                                label="Page"
                                data={pages}
                                onChangeText={itemValue => {
                                this.setState({page: itemValue});
                            }}/>
                            <Dropdown
                                label="Catégories"
                                data={categories}
                                onChangeText={itemValue => {
                                this.setState({category: itemValue});
                            }}/>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                placeholder="descriptif"
                                style={styles.textArea}
                                onChangeText={e => {
                                this.setState({descriptif: e});
                            }}/>
                            <TouchableOpacity style={styles.imageUpload} onPress={() => this.traitment()}>
                                <Text style={styles.imageUploadText}>
                                    AJOUTER UNE IMAGE {this.state.uploaded}
                                </Text>
                            </TouchableOpacity>
                            <Button
                                title="Soumettre"
                                color="#d6363e"
                                accessibilityLabel="Signalisation d'un disfonctionnement"
                                style={styles.submit}
                                onPress={() => this.verificationUtilisateur()}/>
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
    // On vérifie si le type entrée dans environnement est un type string et qu'il
    // est requis
    environnement: PropTypes.string.isRequired,
    // On vérifie si le type entrée dans page est un type string et qu'il est requis
    page: PropTypes.string.isRequired,
    // On vérifie si le type entrée dans date est un type date et qu'il est requis
    category: PropTypes.string.isRequired,
    // On vérifie si le type entrée dans descriptif est un type string et qu'il est
    // requis
    descriptif: PropTypes.string.isRequired,
    // On vérifie si le type entrée dans image est un type string
    image: PropTypes.string
}

const styles = StyleSheet.create({
  card: {
    height: "auto",
    width: "90%",
    borderRadius: 3,
    elevation: 2,
    shadowColor: blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 8,
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    color: primaryColor,
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
    borderColor: lightGreyColor,
    paddingLeft: 5,
    marginBottom: 20,
    height : Platform.OS === 'ios' ? 40 : 40
  },
  select: {
    borderColor: lightGreyColor,
    borderBottomWidth: 1
  },
  textArea: {
    height : Platform.OS === 'ios' ? 80 : 80,
    marginTop : 20,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: lightGreyColor
  },
  imageUpload: {
    backgroundColor: primaryColor,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 2,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  imageUploadText: {
    color: whiteColor,
    fontSize: 15,
    fontWeight: "bold"
  },
  submit: {
    width: "80%"
  }
});

export default withNavigation(BugReportComponent);

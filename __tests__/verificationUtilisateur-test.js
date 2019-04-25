import 'react-native';
import React from 'react';
 import Formulaire from '../components/Formulaire';
 import TestRenderer from 'react-test-renderer';
const DataNonVideAvecImage = {
    mail:'patouillardfranck3@gmail.com',
    environnement:'développement',
    page:'index.html',
    date:'24/04/2019',
    categories:'developpement',
    descriptif:'test jest mineur',
    image:'https://image.shutterstock.com/image-photo/program-code-on-monitor-260nw-148972376.jpg'
};
const DataVideAvecImage = {
    mail:'patouillardfranck3@gmail.com',
    environnement:'developpement',
    page:'index.html',
    date:'24/04/2019',
    categories:'developpement',
    descriptif:'test jest mineur',
    image:''
}
let FormulaireData = TestRenderer.create(<Formulaire/>).getInstance()

it('insertion DataNonVideAvecImage match après modification state',()=>{
    FormulaireData.verificationUtilisateur(DataNonVideAvecImage);
    console.log('1');
    console.log(FormulaireData.state);
    expect(FormulaireData.state).toEqual(DataNonVideAvecImage);
    expect(FormulaireData.state).not.toEqual(DataVideAvecImage);
})
it('insertion DataNonVideAvecImage match après modification state',()=>{
    FormulaireData.verificationUtilisateur(DataVideAvecImage);
    console.log('2');
    console.log(FormulaireData.state);
    expect(FormulaireData.state).toEqual(DataVideAvecImage);
    expect(FormulaireData.state).not.toEqual(DataNonVideAvecImage);
})
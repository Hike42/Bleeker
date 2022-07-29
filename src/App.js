import React, { useReducer, useState } from 'react';
import { ChromePicker } from 'react-color'
import './App.css';
import { Checkbox, Button, Select, FormControl, InputLabel, MenuItem, TextField } from '@mui/material';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}


function App() {
  const [color, setColor] = useState('#fff')
  const [color2, setColor2] = useState('#fff')
  const [color3, setColor3] = useState('#fff')
  const [color4, setColor4] = useState('#fff')
  const [color5, setColor5] = useState('#fff')
  const [color6, setColor6] = useState('#fff')
  const [color7, setColor7] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showColorPicker2, setShowColorPicker2] = useState(false)
  const [showColorPicker3, setShowColorPicker3] = useState(false)
  const [showColorPicker4, setShowColorPicker4] = useState(false)
  const [showColorPicker5, setShowColorPicker5] = useState(false)
  const [showColorPicker6, setShowColorPicker6] = useState(false)
  const [showColorPicker7, setShowColorPicker7] = useState(false)
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
 }

 const handleChange = event => {
  const isCheckbox = event.target.type === 'checkbox';
  setFormData({
    name: event.target.name,
    value: isCheckbox ? event.target.checked : event.target.value,
  });
 }

  return(
    
    <div className="wrapper">
      <fieldset>
      <h1>Paramètres du thème</h1>
      {submitting &&
      <div>
        <ul>
          <li><strong>logocolor:</strong>{color} </li>
          <li><strong>titlecolor:</strong>{color2} </li>
          <li><strong>maincolor:</strong>{color3} </li>
          <li><strong>hovermaincolor:</strong>{color4} </li>
          <li><strong>secondcolor:</strong>{color5} </li>
          <li><strong>hoversecondcolor:</strong>{color6} </li>
          <li><strong>buttoncolor:</strong>{color7} </li>
          {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
          ))}
        </ul>
      </div>
     }
      <form onSubmit={handleSubmit}>

        <fieldset>
          <label>
            <h2>Profils</h2>
            <p>Nom du thème</p>
            <TextField id="outlined-basic" label="Name" variant="outlined" name="themename" onChange={handleChange}/>
            <p>Sauvegardez votre thème</p>
            <Button className='submit' type="submit" variant='contained'>Save Profile</Button>
          </label>
        </fieldset>

        <fieldset>
          <label>
            <h2>Logo</h2>
              <p>Couleur du logo :</p>
              <div>
              <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
              {showColorPicker ? ' Fermer la palette' : 'Choisissez une couleur'} </button>
              {showColorPicker && (
              <ChromePicker 
              color={color} onChange={updatedColor => setColor(updatedColor.hex)}/> )}
              </div>
              <h3>Preview :</h3>
              <div style={{width: 40, height: 40, margin: 20, background: color, borderRadius: '50%',}}></div>
          </label>
        </fieldset>

        <fieldset>
          <h2>Textes</h2>
          <label>
           <p>Taille de police</p>
           <TextField type="number" name="fontsize" defaultValue={"11"} onChange={handleChange} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
         </label>

         <fieldset>
          <label>
            <h3>Titres</h3>
            <p>Couleur des titres</p>
            <button onClick={() => setShowColorPicker2(showColorPicker2 => !showColorPicker2)}>
                {showColorPicker2 ? ' Fermer la palette' : 'Choisissez une couleur'} </button>
                {showColorPicker2 && (
                <ChromePicker color={color2} onChange={updatedColor => setColor2(updatedColor.hex)} /> )}
            <h3>Preview :</h3>
            <div style={{width: 40, height: 40, margin: 20, background: color2, borderRadius: '50%',}}></div>
          </label>
          <label>
            <p>Titres en majuscules</p>
            <Checkbox type="checkbox" name="capstitle" onChange={handleChange} />
          </label>
          
         </fieldset>
         
         <fieldset>
          <label>
            <h3>Primaire</h3>
            <p>Couleur principale</p>
            <button onClick={() => setShowColorPicker3(showColorPicker3 => !showColorPicker3)}>
                {showColorPicker3 ? ' Fermer la palette' : 'Choisissez une couleur'} </button>
                {showColorPicker3 && (
                <ChromePicker 
                color={color3} 
                onChange={updatedColor => setColor3(updatedColor.hex)} 
              /> )}
            <h3>Preview :</h3>
            <div style={{width: 40, height: 40, margin: 20, background: color3, borderRadius: '50%',}}></div>
          </label>
          <label>
            <p>Couleur Hover</p>
            <button onClick={() => setShowColorPicker4(showColorPicker4 => !showColorPicker4)}>
                {showColorPicker4 ? ' Fermer la palette' : 'Choisissez une couleur'} </button>
                {showColorPicker4 && (
                <ChromePicker 
                color={color4} 
                onChange={updatedColor => setColor4(updatedColor.hex)} 
              /> )}
            <h3>Preview :</h3>
            <div style={{width: 40, height: 40, margin: 20, background: color4, borderRadius: '50%',}}></div>
          </label>
        </fieldset>
        <fieldset>
          <label>
            <h3>Secondaire</h3>
            <p>Couleur secondaire</p>
            <button onClick={() => setShowColorPicker5(showColorPicker5 => !showColorPicker5)}>
                {showColorPicker5 ? ' Fermer la palette' : 'Choisissez une couleur'} </button>
                {showColorPicker5 && (
                <ChromePicker 
                color={color5} 
                onChange={updatedColor => setColor5(updatedColor.hex)} 
              /> )}
            <h3>Preview :</h3>
            <div style={{width: 40, height: 40, margin: 20, background: color5, borderRadius: '50%',}}></div>
          </label>
          <label>
            <p>Couleur Hover</p>
            <button onClick={() => setShowColorPicker6(showColorPicker6 => !showColorPicker6)}>
                {showColorPicker6 ? ' Fermer la palette' : 'Choisissez une couleur'} </button>
                {showColorPicker6 && (
                <ChromePicker 
                color={color6} 
                onChange={updatedColor => setColor6(updatedColor.hex)} 
              /> )}
            <h3>Preview :</h3>
            <div style={{width: 40, height: 40, margin: 20, background: color6, borderRadius: '50%',}}></div>
          </label>
         </fieldset>

         <fieldset>
          <label>
            <p>Couleur du texte, fond et bordure</p>
            <button onClick={() => setShowColorPicker7(showColorPicker7 => !showColorPicker7)}>
                {showColorPicker7 ? ' Fermer la palette' : 'Choisissez une couleur'} </button>
                {showColorPicker7 && (
                <ChromePicker 
                color={color7} 
                onChange={updatedColor => setColor7(updatedColor.hex)} 
              /> )}
            <h3>Preview :</h3>
            <div style={{width: 40, height: 40, margin: 20, background: color7, borderRadius: '50%',}}></div>
          </label>
          <label>
            <p>Border Radius</p>
              <TextField type="number" name="borderradius" onChange={handleChange} defaultValue={"11"} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
          </label>
          <label>
            <p>Texte en majuscule</p>
              <Checkbox type="checkbox" name="capstext" onChange={handleChange} />
          </label>
          <label>
            <p>Epaisseur du texte</p>
            <FormControl >
              <InputLabel variant='standard' id="selectfonts">Epaisseur</InputLabel>
                <Select
                  className='fontmenu'
                  name='textthickness'
                  label="Epaisseur"
                  onChange={handleChange}
                >
                  <MenuItem value={"100"}>100</MenuItem>
                  <MenuItem value={"200"}>200</MenuItem>
                  <MenuItem value={"300"}>300</MenuItem>
                  <MenuItem value={"400"}>400</MenuItem>
                  <MenuItem value={"500"}>500</MenuItem>
                  <MenuItem value={"600"}>600</MenuItem>
                  <MenuItem value={"700"}>700</MenuItem>
                  <MenuItem value={"800"}>800</MenuItem>
                  <MenuItem value={"900"}>900</MenuItem>
                </Select>
            </FormControl> 
          </label>
        </fieldset>
        <label>
          <p>Police personnalisée</p>
            <Checkbox type="checkbox" name="customfont" onChange={handleChange} />
        </label>
        </fieldset>
        </form>
        </fieldset>
    </div>
    
    )
    var logocolor = {logocolor}
    var titlecolor = {titlecolor}
    var maincolor = {maincolor}
    var hovermaincolor = {hovermaincolor}
    var secondcolor = {secondcolor}
    var hoversecondcolor = {hoversecondcolor}
    var buttoncolor = {buttoncolor}
    var fontsize = {fontsize}
    var capstitle = {capstitle}
    var themename = {themename}
    var borderradius = {borderradius}
    var capstext = {capstext}
    var textthickness = {textthickness}
    var customfont = {customfont}

    var obj = {
      table: []
    };
    
    obj.table.push({logocolor: {logocolor}, titlecolor: {titlecolor}, maincolor: {maincolor}, hovermaincolor: {hovermaincolor}, secondcolor: {secondcolor}, hoversecondcolor: {hoversecondcolor}, buttoncolor: {buttoncolor},
    fontsize: {fontsize}, capstitle: {capstitle}, themename: {themename}, borderradius: {borderradius}, capstext: {capstext}, textthickness: {textthickness}, customfont: {customfont}});
    
    console.log(obj.table)

    var json = JSON.stringify(obj);
    
    var fs = require('fs');
    fs.writeFile('theme.json', json, 'utf8');
    console.log(json)
}

export default App;
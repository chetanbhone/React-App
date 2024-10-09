import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

 let [city , SetCity] = useState("");
let [error, setError] = useState(false);
 const API_URL="https://api.openweathermap.org/data/2.5/weather";
 const API_KEY="7714657175ba12a8c36fbdedf1febfc8";

 let getWeatrherInfo= async() =>{
  try{
    let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponce = await responce.json();
    let result = {
     temp: jsonResponce.main.temp,
     tempMin: jsonResponce.main.temp_min,
     tempMax: jsonResponce.main.temp_max,
     humidity: jsonResponce.main.humidity,
     feelsLike: jsonResponce.main.feels_like,
     weather: jsonResponce.weather[0].description,
     city: city
    };
    console.log(result);
    return result;
  }catch(err){
    throw err;
  }
 
 };

 let onChangeHandler = (evt) =>{
     SetCity(evt.target.value);
 }

 let OnSubmit = async (evt) =>{
  try{
    evt.preventDefault();
    console.log(city);
    SetCity("");
    let newInfo = await getWeatrherInfo();
    updateInfo(newInfo); 
  }catch(err){
    setError(true); 
  }
   
 }

  return (
    <div className='SearchBox'>
      <form onSubmit={OnSubmit}>
        <TextField id="city" label="city name" variant="outlined" required value={city} onChange={onChangeHandler}/>
        <br /> <br />
        <Button variant="outlined" type='submit'>Search</Button>
 {error && <p style={{color:"red"}}>No such place exists !</p>}
        <br /> <br />

      </form>
    </div>
  );
}


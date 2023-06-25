import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import './App.css';

function App() {


  const apikey = "9ee295051d73d10d41c138e7c4f31e18"
  const [inputCity, setInputCity] = useState("")
  const [data, setdata] = useState({});
  // const [cityList, setCityList] = useState([]);

  // useEffect(() => {
  //   console.log({ cityList });
  // }, [cityList])

  const getWeatherdetails = (cityName) => {
    if (!cityName) return
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + apikey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setdata(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = async (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
    // const res = await axios.get(`https://api.api-ninjas.com/v1/city?name=${e.target.value}`);
    // const resJson = await res.json();
    // setCityList(resJson);
  }


  const handleSearch = () => {
    getWeatherdetails(inputCity)
  }

  useEffect(() => {

    getWeatherdetails("Mathura")
  }, [])

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            onChange={e => { handleChangeInput(e) }} />
          <button className="btn btn-primary" type="button"
            value={inputCity}
            onClick={handleSearch}
          >Search</button>
        </div>
        <div className="col-md-12 text-centre mt-5">
          <div className="shadow rounded weatherResultBox">
            <img className="weatherIcon"
              src="https://purepng.com/public/uploads/large/purepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png" />
            <h5 className="weatherCity">
              {data?.name}
            </h5>
            <h6 className="weatherTemp">{((data?.main?.temp) - 263.15).toFixed(2)}°C</h6>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

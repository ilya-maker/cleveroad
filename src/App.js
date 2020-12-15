// Core
import React, { useEffect, useState } from 'react';

// Components
import Header from './components/Header';
import WrappedMap from './components/WrappedMap';
import ListOfPeople from './components/ListOfPeople';

// Helpers
import { getCurrentPositionOfISS, getCurrentCrew } from './heplers/requests';

// Styles
import './App.scss';

const comp = "App";

const App = () => {
  const [positionOfISS, setPositionOfISS] = useState({});
  const [listPeople, setListOfPeople] = useState({});

  useEffect(() => {
    loadRequiredData();
  }, []);

  const loadRequiredData = async () => {
    const UNIXTimestamp = Math.round((new Date()).getTime() / 1000);

    setPositionOfISS(await getCurrentPositionOfISS());
    let currentCrew = await getCurrentCrew();
  
    currentCrew = currentCrew?.people.filter(item => item.craft === 'ISS');
    currentCrew = currentCrew.map((item, index) => ({ ...item, id: UNIXTimestamp + index }))
    setListOfPeople(currentCrew);  
  };

  const getCurrentTime = () => {
    const date = new Date();
    let minutes = `${date.getMinutes()}`;
    let hour = `${date.getHours()}`;
    if (minutes.length < 2) {
      minutes = `0${minutes}`
    }
    if (hour.length < 2) {
      hour = `0${hour}`
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateAstext = new Intl.DateTimeFormat('en-EN', options).format(date);

    return { date: dateAstext, time: `${hour}:${minutes}` }
  }

  const showLoader = !positionOfISS?.latitude || !listPeople?.length;
  return (
    <div className={comp}>
        {!showLoader ? 
          <>
            <Header coordinates={positionOfISS} currentTime={getCurrentTime()}/>
            <div className={`${comp}__container`}>
              <WrappedMap
                positionOfISS={positionOfISS}
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCpjdi4NcE3DOcPbt5Iy_aFzwKoFM6aHRU"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
              <ListOfPeople listPeople={listPeople}/>
            </div>
          </> :
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
    </div>
  );
}

export default App;

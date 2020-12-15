const openNotify = 'http://api.open-notify.org';

export const getCurrentPositionOfISS = () => {
    return fetch(`${openNotify}/iss-now.json`)
        .then((data) => data.json())
        .then(json => json.iss_position)
        .catch(error => console.log(`getCurrentPositionOfMKS -> ${error.message || error}`))
};

export const getCurrentCrew = () => {
    return fetch(`${openNotify}/astros.json`)
        .then((data) => data.json())
        .catch(error => console.log(`getCurrentCrew -> ${error.message || error}`))
}
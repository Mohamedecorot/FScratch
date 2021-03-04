const cityDisplay = document.querySelector('#city');
const regionDisplay = document.querySelector('#region');

const getIP = async() => {

  await fetch('http://ip-api.com/json/')
    .then(res => res.json())
    .then(res => { 
      cityDisplay.innerHTML = res.city;
      regionDisplay.innerHTML = res.regionName;

    })
}

getIP();
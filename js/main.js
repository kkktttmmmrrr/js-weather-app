'use strict';
const form = document.querySelector('form');

const setResult = (response) => {
  const localTime = document.querySelector('#local-time');
  const country = document.querySelector('#country');
  const cityName = document.querySelector('#city-name');
  const tempareture = document.querySelector('#tempareture');
  const conditionText = document.querySelector('#condition-text');
  const icon = document.querySelector('#icon');

  localTime.textContent = response.data.location.localtime;
  country.textContent = response.data.location.country;
  cityName.textContent = response.data.location.name;
  tempareture.textContent = response.data.current.temp_c;
  conditionText.textContent = response.data.current.condition.text;

  const span = document.createElement('span');
  span.textContent = '℃';
  tempareture.append(span);

  const iconUrl = `https:${response.data.current.condition.icon}`;
  icon.setAttribute('src', iconUrl);

  const link = document.querySelector('.link img');
  link.classList.remove('disp-none');
};

// main処理
const getWeather = async () => {
  try {
    let city = document.querySelector('input[name=city]');
    city = city.value;
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=7d2e9c81bdc94efdacf130229232501&q=${city}&aqi=no`
    );
    console.log(response);
    await setResult(response);
  } catch (error) {
    alert('エラーです。もう一度トライしてください。');
  }
};

// イベント

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather();
});

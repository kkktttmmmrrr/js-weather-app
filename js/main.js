'use strict';
const form = document.querySelector('form');

const toggleLoadingClass = () => {
  const loading = document.querySelector('#loading');
  loading.classList.toggle('loading');
};

const clearInputValue = () => {
  city.value = '';
};

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

const getWeather = async () => {
  try {
    toggleLoadingClass();
    let city = document.querySelector('input[name=city]');
    city = city.value;
    const response = await axios.get(
      `https://proxy-server-wine.vercel.app/weather-data?${city}`
    );
    await toggleLoadingClass();
    await setResult(response);
    await clearInputValue();
  } catch (error) {
    alert('エラーです。もう一度トライしてください。');
    clearInputValue();
    toggleLoadingClass();
  }
};

// イベント処理
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getWeather();
});

import React, { useState } from 'react'
import axios from 'axios'
// Пропс-это обьект
//  деструктуризация-это распаковка обьекта
// useState возвращает массив из двух элементов

export const Form = ({cityName, setCityName, setWeather, setError}) => {
  const getWeatherData = (e) => {
    e.preventDefault()
    axios (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ef01b80ca05af4a5e26cb6e7b04ea5f8?&units=metric`)
      .then(({ date }) => {
        setWeather(data)
        setCityName('')
        setError(false)
      })
      .catch (() => {
        setWeather(null)
        setError(true)
     
    })
  }
  const inputHandler = (e) => {
    props. setCityName(e.target.value)
  }
  return (
    <form onSubmit={getWeatherData}>
          <input type="text"
            placeholder='Введите город'
            value={cityName}
            onChange={inputHandler}
          />
          <button type='submit'>Найти</button>
        </form>
  )
}

export default Form


import '../css/main.css'

import request from './request'
import { createCountries } from './updateUi'
import './filter'
import './mode'

const Api = 'https://restcountries.com/v3.1/all'

request(Api).then((data) => {
    createCountries(data)
}).catch((err)=>{
    alert(err.message);
})
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 7p4sLvry9sBFWjwEDsx0_7mUVJ-Hw0igQ19aHCuSBeqCHMOfQDdSLRRwRa22HnC0FnE1pK1hALlP2uIQuaMpOyX5hyvEhfD8vjz96ie2nNSw00FPHoUOEwTFkbV4YHYx'
  }
});
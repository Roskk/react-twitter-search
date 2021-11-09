import axios from 'axios'

const httpClientWrapper = ({ data, method, url }) => {
  return axios({
    data,
    method,
    url,
    headers: {
      Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAI4OHgEAAAAAlbk0HSIAqcc3havrrU9j2NeAQ34%3DzJmzwHuQerd8JJ2TeuHfqwKgBt6bK4tk93w3ocBB2vPuKMF3cG`,
    },
  }).catch((err) => {
    console.log('Something went wrong', err)
  })
}

export default httpClientWrapper

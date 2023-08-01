import axios, { headerConfig } from './baseUrl'

export const getRequest = (url, successful, errorF) => {
    axios.get(url, {
        headers: headerConfig(),
    }).then(response => {
        successful(response)
    }).catch((error) => {
        errorF(error)
    })
}

export const postRequest = (url, data, successful, errorF) => {
    axios.post(
        url,
        data,
        {
            // "content-type": "multipart/form-data",
            headers: headerConfig(),
        }
    ).then((response) => {
        successful(response)
    })
    .catch((error) => {
        errorF(error)
    });
}
    let var1;
    const url = "http://magicseaweed.com/api/a346de26175eefe8d34252c8a6f2b14a/forecast/?spot_id=828"; //sandend url
    console.log(url);

    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    function json(response) {
      return response.json()
    }


    fetch(url)
      .then(status)
      .then(json)
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        let var1 = data[0].swell;
        console.log(var1)
        return var1;
      }).catch(function (error) {
        console.log('Request failed', error);
      });

      export default var1;
    const url = "http://magicseaweed.com/api/a346de26175eefe8d34252c8a6f2b14a/forecast/?spot_id=828"; //sandend url
    console.log(url);

    // fetch(url)
    // .then ((response) => response.json())
    // .then(function (data) {
    // // do something
    // });


    async function getData(url) {
      const response = await fetch(url);

      return response.json()
    }

    async function main() {
      const data = await getData(URL);

      console.log(data);
      return data;
    }
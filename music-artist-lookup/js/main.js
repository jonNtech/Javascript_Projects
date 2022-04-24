//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.artists[0].strArtist
        document.querySelector('img').src = data.artists[0].strArtistFanart
        document.querySelector('h3').innerText = data.artists[0].strBiographyEN
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
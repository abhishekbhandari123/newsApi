const technologyApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=49a2423224dd47efa734c2bec556e985`;

window
  .fetch(technologyApiUrl)
  .then(data => {
    data
      .json()
      .then(technologyNews => {
        //
        let technologyData = technologyNews.articles;
        let output = "";
        for (let technology of technologyData) {
          output += `
          <h1 class="newsh1">${technology.title}<h1>
          <h1 class="h1title">Technology News</h1>
          <p>description</p>
          <img src="${technology.urlToImage}" />
          <p>${technology.publishedAt}</p>`;
        }
        document.getElementById("left").innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

  var day =new Date().get
setInterval(() => {
  var time = new Date().toLocaleTimeString();
  document.getElementById("time").innerHTML = $(time) $(day);
}, 1000);

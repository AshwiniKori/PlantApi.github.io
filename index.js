const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", 
function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    var htmlString = `
    <tr>
         <th> Categories </th>
         <th> Disease </th>
         <th> Image </th>
         <th> Uses </th>
    </tr>
      `;
    var arr = JSON.parse(this.responseText);
    arr.forEach(ele => {
      htmlString += `
      
      <tr>
         <td> ${ele.Categories} </td>
         <td> ${ele.Disease} </td>
         <td><img src="${ele.Img}" height="200" width="400"> </td>
         <td> ${ele.Use} </td>
      </tr>
         `;
    })
    document.getElementById("table").innerHTML = htmlString;
  }
});

xhr.open("GET", "https://house-plants2.p.rapidapi.com/category/Fern");
xhr.setRequestHeader("X-RapidAPI-Key", "283145f3damsh2e9270231ce8eedp1732d5jsn896f1f452466");
xhr.setRequestHeader("X-RapidAPI-Host", "house-plants2.p.rapidapi.com");

xhr.send(data);

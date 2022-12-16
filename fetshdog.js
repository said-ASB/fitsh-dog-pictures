  // create a req function with fetch
  async function getapi() {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
    let data = await response.json();
    getNames(data)

  }

getapi()

let vaar = "";
const slectNames = document.querySelector('.slectNames')
const imgId = document.getElementById('imgId')

// maping the data and creat the selecrs
const getNames = (elem) => {
 const allnames =  Object.keys(elem.message).map(name=>{
    return `<option>${name}</option>`
  })
  slectNames.innerHTML = allnames
}

// save the value from the selcet in new variable


const select = document.getElementById('my-select')
select.addEventListener('change', function() {

   getImges(this.value)
});



// creat  a function that its fetching the imges on the value select 


  async function getImges(param){
    const resp = await fetch(`https://dog.ceo/api/breed/${param}/images/random`)
    const imgData = await resp.json()
    imgId.innerHTML = `<img src="${imgData.message}">`
    
  }

  


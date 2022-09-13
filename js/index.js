import categoryData from "./categoryData.js";





document.getElementById('categories').innerHTML = categoryData.map(category => {
  return `<option value='${category.toLowerCase()}'>${category}</option>`
})
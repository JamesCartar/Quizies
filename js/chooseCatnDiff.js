function chooseCategoryAndDifficulty(e, choosenData) {
    e.preventDefault();
    let selectEl = document.getElementById("categories");
    let selectedValue = selectEl.options[selectEl.selectedIndex].value;
  
    let radioEl = document.getElementsByClassName('radio');
    let radioValue = Array.from(radioEl).find(radio => radio.checked)
  
    if(selectedValue !== 'Categories' && radioValue) {
      choosenData.category = selectedValue;
      choosenData.difficulty = radioValue.value;
      localStorage.setItem('choosenData', JSON.stringify(choosenData));
      window.location.href = 'quiz-page.html'
    } else {
      document.getElementById('warning').textContent = 'please choose any category !'
      setTimeout(() => {
        document.getElementById('warning').textContent = ''
      }, 3000);
    }
};

export default chooseCategoryAndDifficulty;
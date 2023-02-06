const rateBtn = document.querySelectorAll('.rate-btn')
const chosenRate = document.getElementById('chosen-rate')
const submitBtn = document.getElementById('submit-btn')
const ratingContainer = document.getElementById('rating-container')

let rating = 0;

document.addEventListener('click', (event) => {
  if (event.target.matches('.rate-btn')) {
    const targetBtn = event.target;
    rating = targetBtn.textContent;  
  }
});


submitBtn.addEventListener("click", ()=> {
    ratingContainer.innerHTML = 
    `<div class="thankyou-state">
          <img src="illustration-thank-you.svg"/>
          <p class="selected">You selected ${rating}
          out of 5</p>
          <h2>Thank you!</h2>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>
    </div> `
});

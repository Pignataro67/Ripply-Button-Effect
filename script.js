const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {


    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})
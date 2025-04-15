const toggle = document.getElementById('toggle')
const body = document.body

toggle.addEventListener('change', function () {
  body.classList.toggle('dark')
})

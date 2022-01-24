var userScore = localStorage.getItem ("TB")
var userInitials = localStorage.getItem ("")
var scoresList = document.querySelector('.scores')


for (var i = 0; i < localStorage.length; i++) {
    var li = document.createElement('li')
    li.append(localStorage.getItem(localStorage.key(i)))
    li.setAttribute('id', 'i'+i)
    scoresList.appendChild(li);
  }

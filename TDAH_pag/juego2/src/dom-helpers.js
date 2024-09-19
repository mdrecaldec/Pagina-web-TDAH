//función que cambia el aspecto visual de la página mostrando el juego
function domBehaviorIfInitGame() {
  $('body').attr('style')
  $('#instructions-container').hide()
  $('#background-image > img').hide()
  $('#points-container').attr('style', 'display : grid')
  $('#container').attr('style', 'display : flex')
}

//función que coloca cada imagen en su lugar correspondiente en el DOM, dependiendo de la posición random elegida por las funciones anteriores.
function setImagesInDom(game) {
  game.forEach(elem => {
    $('#' + elem.position + '> img.front').attr('src', "./img/" + elem.image + ".jpg")
  })
}



//funciones que gira las cartas mostrándolas o escondiéndolas
function flipUpCard(cardPosition) {
  $('#' + cardPosition + '> img.back').hide()
  $('#' + cardPosition + '> img.front').show()
}
function flipDownCard(cardPosition) {
  $('#' + cardPosition + '> img.back').show()
  $('#' + cardPosition + '> img.front').hide()
}


function domBehaviorIfAddPoints(failOrSuccess) {
  if(failOrSuccess === 'failure') {
    $('#failures').text('Failures: ' + counters.counterFailure)
  } else {
    $('#matches').text('Matches: ' + counters.counterSuccess)
  }
}

/**
 * Comprueba si tenemos una condición de ganancia cuando todas las cartas tienen un par volteado
 * @param  {Array} game 
 */
function domBehaviorIfWin() {
  $('#win').attr('style', 'display: flex')
  $('#win > h1').text('YOU WIN WITH ' + counters.counterFailure + ' ATTEMPTS!')
  $('#container').hide()
  $('body').attr('style', 'background-color : #750760; justify-content: center')
  $('#points-container').hide()
}


/**
 *Altera los elementos dom para reflejar un nuevo juego.
 */
function domBehaviorIfPlayAgain() {
  $('#win').hide();
  $('body').attr('style', 'background-image : url(./img/1769.jpg)')
  $('#container').attr('style', 'display : flex')
  $('#points-container').attr('style', 'display : grid')
  $('#matches').text('Matches: ' + counters.counterSuccess)
  $('#failures').text('Failures: ' + counters.counterFailure)
}


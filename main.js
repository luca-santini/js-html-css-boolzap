// intercetto il focus nell'input del messaggio
$('.new-message-inputs').focus(function() {
    // uso toggleClass per togliere la classe fa-microphone e aggiungere la classe per l'invio del messaggio
    $('.right-footer-icon i').toggleClass('fa-microphone fa-paper-plane');
});

// ​ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

$('.f-right').click(function() {
    setTimeout(function(){ alert("ok"); }, 1000);
});

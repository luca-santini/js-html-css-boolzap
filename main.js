// MILESTONE 2.1
// intercetto il focus nell'input del messaggio
$('.new-message-inputs').focus(function() {
    // uso toggleClass per togliere la classe fa-microphone e aggiungere la classe per l'invio del messaggio
    $('.right-footer-icon i').toggleClass('fa-microphone fa-paper-plane');
});

// ​ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

$('.f-right').click(function() {
    var messaggioUtente = $('.new-message-inputs').val();
    console.log(messaggioUtente);
    var cloneMessage = $(".template .message").clone();
    console.log(cloneMessage);
    cloneMessage.find('.message-text').text(messaggioUtente);
    $('.right-messages.active').append(cloneMessage);
});

// MILESTONE 2.2
// intercetto il click dell'utente
$('.fa-search').click(function()  {
        // recupero il testo inserito dall'utente
        // la ricerca deve funzionare anche con le minuscole
        var testoUtente = $('#contact-filter').val().toLowerCase();
        // se l'input è vuoto devi mostrare tutti i contatti
        if (testoUtente != "") {
        $('.contact').each(function() {
            // recupero il testo della lista
            var contactName = $(this).find('.contact-name').text().toLowerCase();
            console.log(contactName);
            if(contactName == testoUtente) {
                // se è vero visualizzo il contatto
                $(this).show();
            } else {
                // altrimenti, lo nascondo
                $(this).hide();
        }
    });
        } else
        $('.contact').show();
});



// Milestone 3

// intercetto il click sul contatto
$('contact').click(function() {
    // recuper l'attributo data-chat del contatto di cui ho cliccato
    var chat = $(this).attr('data-chat');
});

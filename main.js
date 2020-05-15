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
// intercetto click sul contatto
$('.contact').click(function() {
    // tolgo la classe active a tutti i div .contact
    $('.contact').removeClass('active');
    // aggiungo la classe active al contatto su cui ho cliccato
    $(this).addClass('active');

    // recupero il valore dell'attributo data chat
    var chat = $(this).attr('data-chat');
    console.log('data-chat letto dal contatto :' + chat);
    // tolgo la classe active a tutti i right messages
    $('.right-messages').removeClass('active');
    // recupero il div right-messages che ha lo stesso attributo data-chat del contatto su cui ho cliccato e ci assegno la classe active
    $('.right-messages[data-chat="' + chat + '"]').addClass('active');
    // recupero il nome del contatto su cui ho cliccato
    var nome_contatto = $(this).find('.contact-name').text();
    // inserisco il nome del contatto nella parte di intestazione di destra
    $('#header-right-contact-name').text(nome_contatto);
    // recupero il percorso del file dell'immagine del contatto su cui ho cliccato
    var src_contatto = $(this).find('.contact-logo img').attr('src');
    // imposto il percorso del file dell'immagine nella parte di intestazione di destra
    $('.header-right-logo img').attr('src', src_contatto);
});

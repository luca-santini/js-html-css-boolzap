// MILESTONE 2.1
// intercetto il focus nell'input del messaggio
$('.new-message-inputs').focus(function() {
    // uso toggleClass per togliere la classe fa-microphone e aggiungere la classe per l'invio del messaggio
    $('.right-footer-icon i').toggleClass('fa-microphone fa-paper-plane');
});

// ​ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

$('.f-right').click(function() {
    setTimeout(function(){ alert("ok"); }, 1000);
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
// $('contact').click(function() {
//     // recuper l'attributo data-chat del contatto di cui ho cliccato
//     var chat = $(this).attr('data-chat');
//     console.log(chat);
//     // tolgo la classe active a tutti i div-right messages per nasconderer tutti i pannelli delle chat
//     $('.right-messages').removeClass('active');
//     // recupero il div right-messages che ha lo stessi attributo data-chat del contatto su cui ho cliccato e ci assegno la classe active
//     // ?? $('right-messages[data-chat= '' ' + chat +' "]').addClass('active');
//
// // recupero il nome del contatto su cui ho cliccato
// var nome_contatto = $(this)find('.contact-name').text();
// console.log(nome_contatto);
//
//     // $('.right-messages').each(function() {
//     //     var chat_messaggi = $('.right-messages').attr('data-chat');
//     //     console.log('data-chat messaggi ' + chat_messaggi);
//     //     if (chat == chat_messaggi) {
//     //         $(this).addClass('active');
//     //     }
//     // });
// });


// Cancella messaggio: ​cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

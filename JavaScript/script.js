// Variablen die in diesem Programm verwendet werden
let Notizen = document.getElementById('Notizen');
let addBtn = document.getElementById('addBtn');


// Anfang des Programmes
addBtn.addEventListener('click', function(){
    let Status = checkInputUser(Notizen);

    switch(Status)
    {
        case 1:
            alert('Bitte gib eine Notiz ein!');
            break;
    }
});

// Funktion, um das Inputfeld zu kontrollieren
function checkInputUser(Notice)
{
    if(Notice.value.trim() === '')
    {
        return 1;
    }
    else
    {
        return 2;
    }
}
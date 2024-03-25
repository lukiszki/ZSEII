if(localStorage.getItem('i')>=3)
{
    document.querySelector('article').innerHTML = `<h1>Naruszyłeś nasze przepisy, zostałeś zablokowany</h1>
    <p>Asystent informatyka zrobił to, co było konieczne, aby utrzymać porządek i zapewnić bezpieczne środowisko dla wszystkich użytkowników. Brzydkie słowa są nieodpowiednie i naruszają nasze zasady. Dlatego zostałeś zablokowany.</p>
    <p> jeśli uważasz że to pomyłka, skontaktuj się z adminem</p>`
    document.querySelector('.logo').style = 'color:red';
    document.querySelector('footer').innerHTML = '<p>nie pozdrawiam</p>'    
}
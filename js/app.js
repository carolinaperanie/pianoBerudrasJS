/* funciones para que las notas suenen */
window.onload = () => {

    var keys = document.querySelectorAll('.key');

    keys.forEach(function(key){});{
        keys.addEventListener('click', function(){
            var note = this.getAttribute('data-note');
            playNote(note);
        });
       

    }

   function playNote(note){
    var audio=
   }
}

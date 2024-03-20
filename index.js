function  display(key) {
    $('.calc-dispaly').val($('.calc-dispaly').val()+key)
}
function result() {
    $('.calc-dispaly').val(eval($('.calc-dispaly').val()))
}
//eval js methode that executes an argement
function reset() {
    // resette
    $('.calc-dispaly').val('')
}
    const audio=new Audio()
audio.src="./audio/click - Réalisée avec Clipchamp_1710940108879.mp3"
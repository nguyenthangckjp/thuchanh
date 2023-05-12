function startGame() {
    let maxNumber = prompt("Nhap vao so lon nhat ma ban muon doan:");
    let targetNumber = Math.floor(Math.random()*maxNumber) +1;
    let guess;
    do{
        guess = parseInt(prompt("Hay doan so"));
        if(guess < targetNumber){
            alert("so ban doan nho hon so can tim");
        }else if (guess > targetNumber){
            alert("so ban doan lon hon so can tim!");
        }else{
            alert("chuc mung!ban da doan dung so" + targetNumber);
            break;
        }
    }while(true);
    let playAgin = confim("ban co muon choi lai khong?");
    if(playAgin) {
        startGame();
    }
}
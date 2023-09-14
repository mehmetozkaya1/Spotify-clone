class MusicPlayer{
    constructor(music_list){
        this.music_list = music_list;
        this.index = 0;
    }

    // Index numarasına göre listeden şarkı döndüren metot.
    getMusic(){
        return this.music_list[this.index];
    }

    // index numarasını 1 arttırarak diğer şarkıya geçen metot.
    next(){
        if(this.index + 1 < this.music_list.length){
            this.index += 1;
            displayMusic(this.getMusic());
        } else {
            this.index = 0;
            displayMusic(this.getMusic());
        }
    }

    // index numarasını 1 azaltarak diğer şarkıya geçen metot.
    prev(){
        if(this.index > 0){
            this.index -= 1;
            displayMusic(this.getMusic());
        } else {
            this.index = this.music_list.length - 1;
            displayMusic(this.getMusic());
        }
        
    }
}

let music_player = new MusicPlayer(music_lists.list);
console.log(music_player);
const music_title = document.querySelector(".music-title");
const music_singer = document.querySelector(".music-singer");
const music_img_sm = document.querySelector(".music-image-sm");
const btn_prev = document.querySelector(".btn_prev");
const btn_next = document.querySelector(".btn_next");
const btn_play = document.querySelector(".btn_play");
const btn_shuffle = document.querySelector(".btn_shuffle");
const btn_repeat = document.querySelector(".btn_repeat");
const current_time = document.querySelector(".current_time");
const duration = document.querySelector(".duration");
const progressBar = document.querySelector("#progress-bar");
const volumeBar = document.querySelector(".right-range");
const volumeI = document.querySelector(".volume i");
const newestC = document.querySelector(".newest .cards .row");
const tryC = document.querySelector(".try .cards .row");
const mostC = document.querySelector(".most .cards .row");
const lastC = document.querySelector(".last .cards .row");
const nostaljiC = document.querySelector(".nostalji .cards .row");
const breadC = document.querySelector(".bread .cards .row");


// Index numarası ile seçilen müziği ekranda gösteren fonksiyon.
const displayMusic = (music) => {
    music_title.innerText = music.title;
    music_singer.innerText = music.singer;
    music_img_sm.src = "../img/" + music.img;
    audio.src = "../mp3/" + music.file;
};

// Bir sonraki şarkıya geçmeyi sağlayan fonksiyon.
const next_music = () => {
    if(isShuffle()){ // shuffle durumundaysak
        randomMusic();
    } else{
        music_player.next();
        playMusic();
    }
};

// Bir sonraki şarkıya geçme butonuna tıklandığında diğer şarkıya geçsin.
btn_next.addEventListener("click", () => next_music());

// Bir önceki şarkıya geçmeyi sağlayan fonksiyon.
const prev_music = () => {
    if(isShuffle()){ // shuffle durumundaysak
        randomMusic();
    } else{
        music_player.prev();
        playMusic();
    }
};

// Bir önceki şarkıya geçme butonuna tıklandığında önceki şarkıya geçsin.
btn_prev.addEventListener("click", () => prev_music());

// Sayfa Yüklendiğinde Şarkıyı Göstersin.
window.addEventListener("load", () => {
    displayMusic(music_player.getMusic());
    displayMusicLists(music_lists);
});

const playMusic = () => {
    btn_play.classList.add("playing");
    btn_play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
};

const pauseMusic = () => {
    btn_play.classList.remove("playing");
    btn_play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
};

const isPlaying = () => {
    let isPlaying = btn_play.classList.contains("playing");
    isPlaying ? pauseMusic() : playMusic();
};

// Seçilen Müzik Listesini Ekranda Gösteren Fonksiyon
const displayMusicLists = (music_lists) => {
    for(let music_list of music_lists.lists){
        if(music_list.category == "newest"){
            let html = `
                <div class="col-md-2">
                    <div list_number="${music_list.index}" onclick="musicListPlay(this)" class="card text-bg-dark card-custom mt-2">
                        <div class="card-body card-bg card-bg-custom text-center">
                            <a href="#">
                                <img src="../img/${music_list.img}" class="card-img-top rounded" alt="">
                            </a>
                            <a href="#">
                                <p class="card-text mt-3">
                                    ${music_list.name}
                                </p>
                            </a>
                            <p class="text-muted mb-0">Oluşturan: Spotify</p>
                        </div>
                    </div>
                </div>
            `;
            newestC.insertAdjacentHTML("beforeend", html);
        } 
    
        if(music_list.category == "try"){
            let html = `
                <div class="col-md-2">
                    <div list_number="${music_list.index}"  onclick="musicListPlay(this)" class="card text-bg-dark card-custom mt-4">
                        <div class="card-body card-bg card-bg-custom text-center">
                            <a href="#">
                                <img src="../img/${music_list.img}" class="card-img-top rounded" alt="">
                            </a>
                            <a href="#">
                                <p class="card-text mt-3">
                                    ${music_list.name}
                                </p>
                            </a>
                            <p class="text-muted mb-0">Oluşturan: Spotify</p>
                        </div>
                    </div>
                </div>
            `;

            tryC.insertAdjacentHTML("beforeend", html);
        }
        if(music_list.category == "most"){
            let html = `
                <div class="col-md-2">
                    <div list_number="${music_list.index}"  onclick="musicListPlay(this)" class="card text-bg-dark card-custom mt-4">
                        <div class="card-body card-bg card-bg-custom text-center">
                            <a href="#">
                                <img src="../img/${music_list.img}" class="card-img-top rounded" alt="">
                            </a>
                            <a href="#">
                                <p class="card-text mt-3">
                                    ${music_list.name}
                                </p>
                            </a>
                            <p class="text-muted mb-0">Oluşturan: Spotify</p>
                        </div>
                    </div>
                </div>
            `;

            mostC.insertAdjacentHTML("beforeend", html);
        }
        if(music_list.category == "last"){
            let html = `
                <div class="col-md-2">
                    <div list_number="${music_list.index}"  onclick="musicListPlay(this)" class="card text-bg-dark card-custom mt-4">
                        <div class="card-body card-bg card-bg-custom text-center">
                            <a href="#">
                                <img src="../img/${music_list.img}" class="card-img-top rounded" alt="">
                            </a>
                            <a href="#">
                                <p class="card-text mt-3">
                                    ${music_list.name}
                                </p>
                            </a>
                            <p class="text-muted mb-0">Oluşturan: Spotify</p>
                        </div>
                    </div>
                </div>
            `;

            lastC.insertAdjacentHTML("beforeend", html);
        }
        if(music_list.category == "nostalji"){
            let html = `
                <div class="col-md-2">
                    <div list_number="${music_list.index}"  onclick="musicListPlay(this)" class="card text-bg-dark card-custom mt-4">
                        <div class="card-body card-bg card-bg-custom text-center">
                            <a href="#">
                                <img src="../img/${music_list.img}" class="card-img-top rounded" alt="">
                            </a>
                            <a href="#">
                                <p class="card-text mt-3">
                                    ${music_list.name}
                                </p>
                            </a>
                            <p class="text-muted mb-0">Oluşturan: Spotify</p>
                        </div>
                    </div>
                </div>
            `;

            nostaljiC.insertAdjacentHTML("beforeend", html);
        }
        if(music_list.category == "bread"){
            let html = `
                <div class="col-md-2">
                    <div list_number="${music_list.index}" onclick="musicListPlay(this)" class="card text-bg-dark card-custom mt-4">
                        <div class="card-body card-bg card-bg-custom text-center">
                            <a href="#">
                                <img src="../img/${music_list.img}" class="card-img-top rounded" alt="">
                            </a>
                            <a href="#">
                                <p class="card-text mt-3">
                                    ${music_list.name}
                                </p>
                            </a>
                            <p class="text-muted mb-0">Oluşturan: Spotify</p>
                        </div>
                    </div>
                </div>
            `;

            breadC.insertAdjacentHTML("beforeend", html);
        }
    }
};

// Müzik listesine tıklanıldığı zaman çalışacak olan fonksiyon
const musicListPlay = (music_list) => {

    let selected_list_index = music_list.getAttribute("list_number");
    let selected_music_list = [];

    for(let music_list of music_lists.lists){
        if(selected_list_index == music_list.index){
            selected_music_list = music_list.songs;
        }
    }

    music_player.music_list = selected_music_list;
    music_player.index = 0;
    displayMusic(music_player.getMusic());
    playMusic();
};

// Play butonuna tıklanıldığında şarkıyı başlatan ya da durduran fonksiyon
btn_play.addEventListener("click", () => {
    isPlaying();
})

// Şarkı uzunluğunu dakika ve saniye olacak şekilde yazan fonksiyon
const calculateTime = (seconds) => {
    let minute = Math.floor(seconds / 60);
    let second = Math.floor(seconds % 60);
    let updated_second;

    if(second < 10){
        updated_second = `0${second}`; 
    } else {
        updated_second = second;
    }

    return `${minute}:${updated_second}`;
};

// Progress bara şarkının uzunluğunu verecek olan fonksiyon
audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

// Zaman ilerledikçe progress bar'ı da ilerletecek olan fonksiyon
audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    current_time.textContent = calculateTime(progressBar.value);
});

// Progress bar üzerinde bir input alındığında şuanki zamanı ayarlayan fonksiyon
progressBar.addEventListener("input", () => {
    current_time.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});

// Shuffle butonuna basıldığında listeden rastgele bir şarkı seçip çalan fonksiyon
btn_shuffle.addEventListener("click", () => {
    if(isShuffle()){ // shuffle durumundaysak
        btn_shuffle.classList.remove("shuffle");
    } else {
        btn_shuffle.classList.add("shuffle");
    }
});

// Rastgele bir integer sayı üreten fonksiyon
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

// Üretilen rastgele sayıya göre rastgele bir şarkı çalıştıran fonksiyon
const randomMusic = () => {
    let random_index = getRandomInt(music_player.music_list.length);

    music_player.index = random_index;
    displayMusic(music_player.getMusic());
    playMusic();
};

// shuffle durumunda olup olmadığımızı kontrol eden fonksiyon
const isShuffle = () => {
    let isRandom = btn_shuffle.classList.contains("shuffle");
    return isRandom;
};

// Ses durumunu kontrol eden değişken
let muteState = "voice";

// Ses barına tıklanıldığı zaman tıklanılan değeri ses seviyesine atayan fonksiyon
volumeBar.addEventListener("click", (e) => {
    let volume = e.target.value;
    audio.volume = volume / 100;

    if(volume == 0){
        audio.muted = true;
        muteState = "muted";
        volumeI.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = false;
        muteState = "voice";
        volumeI.classList = "fa-solid fa-volume-high";
    }
});

// Ses iconuna tıklanıldığında sesi kapatıp açmaya yarayan fonksiyon
volumeI.addEventListener("click", () => {
    if(muteState == "muted"){
        muteState = "voice";
        audio.muted = false;
        volumeI.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    } else {
        muteState = "muted";
        audio.muted = true;
        volumeI.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    }
});

// Şarkı sonlandığında diğer şarkıya geçmeyi sağlayan fonksiyon
audio.addEventListener("ended", () => next_music());
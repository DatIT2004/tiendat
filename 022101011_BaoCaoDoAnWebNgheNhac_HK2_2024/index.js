let slideIndex = 1;
showSlides(slideIndex);

// Nút điều hướng tiếp theo/ trước
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Điều khiển hình ảnh hiện tại
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Tự động chuyển slide sau mỗi 3 giây
setInterval(() => {
    plusSlides(1);
}, 3000);




//Thanh nghe nhac
let isLooping = false;
let currentSongIndex = 0;

const songs = [
    { src: './Nhac/bai1/bb1.mp3', title: 'Tháng năm rực rỡ' },
    { src: './Nhac/bai2/consetrove.mp3', title: 'Con sẽ trở về' },
    { src: './Nhac/bai3/tantro.mp3', title: 'Tàn tro' },
    { src: './Nhac/bai4/chuyendicuanam.mp3', title: 'Chuyến đi của năm' },
    { src: './Nhac/bai5/NeuThoiGianTroLaiBeat-DatHanh-9697508.mp3', title: 'Nếu thời gian trở lại' },
    { src: './Nhac/bai6/NamQuocSonHa-ERIKRTeePhuongMyChiDTAP-7115621.mp3', title: 'Nam quốc sơn hà' },
    { src: './Nhac/bai7/NeuMuaHaNamAyTroLai-KaronHoangAnh-7055541.mp3', title: 'Nếu mùa hạ năm ấy trở lại' },
    { src: './Nhac/bai8/TienLenVietNamOi-SonTungMTP-4003040.mp3', title: 'Tiên lên việt nam ơi' },
    { src: './Nhac/bai9/TroVeTuoiTho-KBin-7310392.mp3', title: 'Trở về tuổi thơ' },
    { src: './Nhac/bai10/NamNayMinhLamLai-NhatThienWinKKayceeVietNamJayKemLil7RD-6940241.mp3', title: 'Năm nay mình làm lại' },
    { src: './Nhac/bai11/ChucMungNamMoi-VuPhungTienRumDaFameLyAnhKhoaPhuongDungSocola-6204153.mp3', title: 'Chúc mừng năm mới' },
    { src: './Nhac/bai12/khongyeu.mp3', title: 'Không yêu' },
    { src: './Nhac/bai13/5ThangBenEm-KuunDucNam-11800169.mp3', title: 'Năm tháng bên em' },
    { src: './Nhac/bai14/PhaoHoa-PhiPhuongAnhTheFaceRIN9MiinaDreamerVietNam-7565066.mp3', title: 'Pháo hoa' },
    { src: './Nhac/bai15/Thang5KhongTroLai-TheWallNutszz-4453704.mp3', title: 'Tháng năm khônng trở lại' },
    { src: './Nhac/bai16/GuiLaiThanhXuan-LeoSuper9JBin-7205525.mp3', title: 'Gửi lại thanh xuân' },
    { src: './Nhac/bai17/BinhYenLaTroVe-TuanHiiThaoPham-6927488.mp3', title: 'Bình yên là trở về' },
    { src: './Nhac/bai18/lamviecvanchieu.mp3', title: 'Làm việc cần chiêu' }
    
    
];

// Chức năng tìm kiếm
function searchSongs() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if(query.trim().length===0) return;
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(query));

    filteredSongs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');
        songDiv.textContent = song.title;
        songDiv.onclick = () => playSong(song.src,song.title,0);
        resultsDiv.appendChild(songDiv);
    });
}
function playSong(songSrc, songTitle, index) {
    currentSongIndex = index;
    let audioPlayer = document.getElementById('audioPlayer');
    let audioSource = document.getElementById('audioSource');
    let songTitleElement = document.getElementById('songTitle');

    audioSource.src = songSrc;
    songTitleElement.textContent = songTitle;
    audioPlayer.load();
    audioPlayer.play();

    let musicPlayer = document.getElementById('musicPlayer');
    musicPlayer.classList.add('show'); // Hiển thị thanh nghe nhạc
}

function toggleLoop() {
    let audioPlayer = document.getElementById('audioPlayer');
    let loopButton = document.getElementById('loopButton');
    
    isLooping = !isLooping;
    audioPlayer.loop = isLooping;
    
    if (isLooping) {
        loopButton.classList.add('active');
        loopButton.textContent = 'Lặp lại: Bật';
    } else {
        loopButton.classList.remove('active');
        loopButton.textContent = 'Lặp lại: Tắt';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length)  % songs.length;
    playSong(songs[currentSongIndex].src, songs[currentSongIndex].title, currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(songs[currentSongIndex].src, songs[currentSongIndex].title, currentSongIndex);
}

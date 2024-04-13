const videoPlayer = (() => {
    const _loadVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe
            .setAttribute('src', url);
    }
    return {
        loadVideo: (url, id) => _loadVideo(url, id)
    }
})();   

class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    playMultimedia() {
        videoPlayer.loadVideo(this.getUrl(), this._id);
    }
    setInicio(time) {
        const iframe = document.getElementById(this._id);
        iframe.setAttribute('src', `${this.getUrl()}?start=${time}`);
    }
}

const music = new Reproductor('https://www.youtube.com/embed/pPlq_6oBeG0', 'music');
const movie = new Reproductor('https://www.youtube.com/embed/FdJimN5Sp28', 'movie');
const serie = new Reproductor('https://www.youtube.com/embed/3d6DsjIBzJ4', 'series');

music.playMultimedia();
movie.playMultimedia();
serie.playMultimedia();

music.setInicio(600);
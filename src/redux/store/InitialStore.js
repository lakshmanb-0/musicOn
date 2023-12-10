export const InitialStore = {
    data: {
        user: {
            requestId: '',
            tokenId: ''
        },
        songList: [
            {
                name: "Saari Duniya Jalaa Denge",
                audioLink: "https://raag.fm/files/mp3/128/Hindi-Singles/25817/Saari%20Duniya%20Jalaa%20Denge%20-%20(Raag.Fm).mp3",
                source: "Raag",
                imageLink: "https://i.ytimg.com/vi/nOF5G0oxlww/hqdefault.jpg",
                date: new Date()
            },
            {
                name: "The Hanuman Song",
                audioLink: "https://raag.fm/files/mp3/128/Hindi-Singles/25563/The%20Hanuman%20-%20(Raag.Fm).mp3",
                source: "Raag",
                imageLink: "https://www.pagalvvorld.com/wp-content/uploads/2023/10/The-Hanuman-mp3-image-300x300.jpg",
                date: new Date()
            },
            {
                name: "Tu Hai Kahan",
                audioLink: "https://raag.fm/files/mp3/128/Hindi-Singles/25544/Tu%20Hai%20Kahan%20-%20(Raag.Fm).mp3",
                source: "Pagal world",
                imageLink: "https://i.ytimg.com/vi/AX6OrbgS8lI/maxresdefault.jpg",
                date: new Date()
            },
        ],
        currentSong: {}
    },
}
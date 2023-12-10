export const InitialStore = {
    data: {
        user: {
            requestId: '',
            tokenId: ''
        },
        songList: [
            {
                name: "Yaad Valam Ni Aave",
                audioLink: "https://cdn.jattpendu.com/download/128k-wslxc/Yaad-Valam-Ni-Aave.mp3",
                source: "pendu jaat",
                imageLink: "https://cdn.jattpendu.com/thumbmed/48976373.jpg",
                date: new Date()
            },
            {
                name: "Satranga (From ANIMAL)",
                audioLink: "https://cdn.jattpendu.com/download/128k-wslce/Satranga-(From-ANIMAL).mp3",
                source: "pendu jaat",
                imageLink: "https://cdn.jattpendu.com/thumbmed/49272942.jpg",
                date: new Date()
            },
            {
                name: "Tu Hai Kahan",
                audioLink: "https://www.pagalworldl.com/files/download/id/22945",
                source: "Pagal world",
                imageLink: "https://www.pagalworldl.com/uploads/thumb/sft46/22945_4.jpg",
                date: new Date()
            },
        ],
        currentSong: {}
    },
}
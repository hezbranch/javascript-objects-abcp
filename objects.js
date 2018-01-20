var artist = ["Bruno Mars"]

var song = ['Grenade']

var playlist = { [artist] : song}

function updatePlaylist(playlist, artist, song){
playlist[artist] = song
return(playlist)
}

function removeFromPlaylist(playlist, artist) {
delete playlist[artist]
}
import axios from 'axios';

export async function getEpisode(req) {

    console.log(req.params)

    const city = req.params.title

    try {
        let episodeSelected = await axios.get.$(`https://api.themoviedb.org/3/discover/movie?/`.find({ title: city })`$api_key=e6b1ac0ede33d79c791fea64e7160c8d`)

        return episodeSelected
    }
    catch (error) {
        throw error
    }
}



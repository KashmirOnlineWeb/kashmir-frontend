import axios from "axios";
const INSTAGRAM_ACCESS_TOKEN = 'EAAa1r5F7RlsBO8YaXqdJWkgSeTIUO106iX1RbsCQCJ2qi3epy70dkcqnZB8cVILZC0w7zbqDfP7eirK1ysvTSVZBoFBpzWd5xbMJjeifPHkL14uqAVhzMwJkhYFo8fbnD4LcExWajMHo4zZCTaYTqraTtZCJ8j91AiKqbnOfq0IvbEZCcx3oY5YLaGflGVnUtZAul4FSsNZAdY9N38CDLYQZD';

export const getInstagramApiData = async () => {
    try {
        const response = await axios.get(`https://graph.facebook.com/me?fields=id,name&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
        return response.data
    } catch (err) {
        return err
    }
}
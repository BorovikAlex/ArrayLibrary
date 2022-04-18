async function getResponse() {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    let photos = [];
    let photo = await fetch(url).then(response => {
            console.log(response)
            if (response.status === 200) {
                return response.json()
            } else {
                return null;
            }
        },
        error => {
            return null;
        });
    console.log(photo)
    photos.push(photo);
    console.log(photos)
}
getResponse()
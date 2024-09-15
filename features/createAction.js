
export const getPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        return response.json()
    } catch (err) {
        console.log(err)
    }

}
window.onload = () => {

    const movieId = location.href.split('/')[3]
    fetch(`http://localhost:3031/api/movies/${movieId}`)
        .then(response => response.json())
        .then(movie => {
            console.log(movie.data)
            document.getElementById("title").value = movie.data.title;
            document.getElementById('rating').value = movie.data.rating;
            document.getElementById('awards').value = movie.data.awards;
            document.getElementById('release_date').value = movie.data.release_date;
            document.getElementById('length').value = movie.data.length;
        })
        .catch(error => console.error('Error al cargar la película:', error));

        //!UPDATE

        document.getElementById('editar').addEventListener('click', () => {
            const title = document.getElementById("title").value;
            const rating = document.getElementById('rating').value;
            const awards = document.getElementById('awards').value;
            const release_date = document.getElementById('release_date').value;
            const length = document.getElementById('length').value;
    
            const data = {
                title,
                rating,
                awards,
                release_date,
                length
            };
    
            fetch(`http://localhost:3031/api/movies/update/${movieId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log('Película actualizada:', result);
                alert('Película actualizada con éxito');
            })
            .catch(error => console.error('Error al actualizar la película:', error));
        });

};
async function fetchData() {
    try {
        // Kullanıcı verilerini al
        const userDataResponse = await fetch('http://localhost:3000/users');
        const userData = await userDataResponse.json();

        // Yazı verilerini al
        const jsonDataResponse = await fetch('http://localhost:3000/posts');
        const jsonData = await jsonDataResponse.json();


        // Kullanıcıları göster
        const userList = document.getElementById('user-list');
        userData.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.full_name} (${user.username}) - ${user.job_title}, ${user.country}`;
            userList.appendChild(li);
        });

        // Yazıları göster
        const postList = document.getElementById('post-list');
        jsonData.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `${post.title} - ${post.content}`;
            postList.appendChild(li);
        });
    } catch (err) {
        console.error(err);
    }
}

fetchData();

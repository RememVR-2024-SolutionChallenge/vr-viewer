// URL의 쿼리스트링에서 특정 파라미터를 읽어오는 함수
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// video-id 값을 읽어옴
const videoId = getQueryParam('video-id');
console.log(videoId)
const apiUrl = `https://gateway-server-v2-n3wk2vhygq-uc.a.run.app/vr-video/${videoId}`;
const accessToken = getQueryParam('accessToken');
console.log(accessToken);
// REST API 요청 보내기
fetch(apiUrl,{
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }})
    .then(response => response.json())
    .then(data => {
        displayData(data);
        downloadStorageUrls(data);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('content').textContent = 'Error loading data';
    });

// 응답 데이터를 화면에 표시하는 함수
function displayData(data) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>Scene Title: ${data.scene.title}</p>
        <p>Avatars:</p>
        <ul>
            ${data.avatars.map(avatar => `<li>${avatar.title}</li>`).join('')}
        </ul>
    `;
}

// storageUrls를 다운로드하는 함수
function downloadStorageUrls(data) {
    const urls = [...data.scene.storageUrls, ...data.avatars.flatMap(avatar => avatar.storageUrls)];
    urls.forEach(url => {
        const a = document.createElement('a');
        a.href = url;
        a.download = '';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

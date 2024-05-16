// URL의 쿼리스트링에서 특정 파라미터를 읽어오는 함수
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// URL의 쿼리스트링에서 특정 파라미터 배열을 읽어오는 함수
function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param)?.split(',') || [];
}

// accessToken, scene-id, avatar-ids 값을 읽어옴
const accessToken = getQueryParam('accessToken');
const sceneId = getQueryParam('scene-id');
const avatarIds = getQueryParams('avatar-id');

// API 요청을 보내는 함수
async function fetchVrResource(id) {
    const apiUrl = `https://gateway-server-v2-n3wk2vhygq-uc.a.run.app/vr-resource/${id}`;
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
}

// storageUrls를 다운로드하는 함수
function downloadStorageUrls(vrResources) {
    vrResources.forEach(resource => {
        resource.storageUrls.forEach(url => {
            const a = document.createElement('a');
            a.href = url;
            a.download = '';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });
}

// 모든 리소스를 가져와서 처리하는 함수
async function fetchAndDownloadAllResources() {
    try {
        const sceneData = await fetchVrResource(sceneId);
        const avatarDataPromises = avatarIds.map(id => fetchVrResource(id));
        const avatarDataArray = await Promise.all(avatarDataPromises);

        // 응답 데이터를 화면에 표시
        displayData(sceneData, avatarDataArray);

        // storageUrls 다운로드
        downloadStorageUrls([sceneData.vrResources[0], ...avatarDataArray.flatMap(data => data.vrResources)]);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('content').textContent = 'Error loading data';
    }
}

// 응답 데이터를 화면에 표시하는 함수
function displayData(sceneData, avatarDataArray) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>${sceneData.vrResources[0].title}</h2>
        <p>Scene Title: ${sceneData.vrResources[0].title}</p>
        <p>Avatars:</p>
        <ul>
            ${avatarDataArray.map(data => `<li>${data.vrResources[0].title}</li>`).join('')}
        </ul>
    `;
}

// 모든 리소스를 가져와서 다운로드 시작
fetchAndDownloadAllResources();

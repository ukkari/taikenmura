document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.getElementById('news-content');
  const loadingElement = document.createElement('p');
  loadingElement.textContent = '読み込み中...';
  newsContainer.appendChild(loadingElement);

  fetch('https://taiken-mura.blogspot.com/feeds/posts/default?max-results=5&alt=json')
    .then(response => {
      if (!response.ok) {
        throw new Error('ネットワークエラーが発生しました');
      }
      return response.json();
    })
    .then(data => {
      newsContainer.removeChild(loadingElement);
      
      if (data.feed && data.feed.entry && data.feed.entry.length > 0) {
        const newsListElement = document.createElement('ul');
        newsListElement.className = 'space-y-2';
        
        data.feed.entry.forEach(entry => {
          const title = entry.title.$t;
          
          let postLink = '';
          if (entry.link) {
            const alternateLink = entry.link.find(link => link.rel === 'alternate');
            if (alternateLink) {
              postLink = alternateLink.href;
            }
          }
          
          const listItem = document.createElement('li');
          listItem.className = 'py-1';
          
          const linkElement = document.createElement('a');
          linkElement.href = postLink;
          linkElement.textContent = title;
          linkElement.className = 'text-blue-600 hover:underline';
          linkElement.target = '_blank';
          
          listItem.appendChild(linkElement);
          newsListElement.appendChild(listItem);
        });
        
        newsContainer.appendChild(newsListElement);
      } else {
        const noNewsElement = document.createElement('p');
        noNewsElement.textContent = '最新の情報はありません。';
        newsContainer.appendChild(noNewsElement);
      }
    })
    .catch(error => {
      console.error('エラー:', error);
      newsContainer.removeChild(loadingElement);
      
      const errorElement = document.createElement('p');
      errorElement.textContent = '情報の読み込みに失敗しました。後でもう一度お試しください。';
      errorElement.className = 'text-red-600';
      newsContainer.appendChild(errorElement);
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.getElementById('news-content');
  const loadingElement = document.createElement('p');
  loadingElement.textContent = '読み込み中...';
  newsContainer.appendChild(loadingElement);

  const script = document.createElement('script');
  script.src = 'https://taiken-mura.blogspot.com/feeds/posts/default?max-results=5&alt=json-in-script&callback=handleBloggerResponse';
  document.body.appendChild(script);
  
  window.feedTimeout = setTimeout(function() {
    if (document.getElementById('news-content').contains(loadingElement)) {
      newsContainer.removeChild(loadingElement);
      const errorElement = document.createElement('p');
      errorElement.textContent = '情報の読み込みに失敗しました。後でもう一度お試しください。';
      errorElement.className = 'text-red-600';
      newsContainer.appendChild(errorElement);
    }
  }, 10000);
});

window.handleBloggerResponse = function(data) {
  clearTimeout(window.feedTimeout);
  
  const newsContainer = document.getElementById('news-content');
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }
  
  if (data.feed && data.feed.entry && data.feed.entry.length > 0) {
    const newsListElement = document.createElement('ul');
    newsListElement.className = 'space-y-2';
    
    data.feed.entry.forEach(entry => {
      const title = entry.title.$t;
      
      let postLink = '';
      if (entry.link) {
        for (let i = 0; i < entry.link.length; i++) {
          if (entry.link[i].rel === 'alternate') {
            postLink = entry.link[i].href;
            break;
          }
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
};

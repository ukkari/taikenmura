document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.getElementById('news-content');
  const imagesContainer = document.getElementById('news-images');
  if (!newsContainer || !imagesContainer) {
    return;
  }

  const loadingElement = document.createElement('p');
  loadingElement.textContent = '読み込み中...';
  loadingElement.className = 'text-sm text-gray-600';
  newsContainer.appendChild(loadingElement);

  const participantLabel = encodeURIComponent('参加者募集');
  const newsScript = document.createElement('script');
  newsScript.src = `https://taiken-mura.blogspot.com/feeds/posts/default/-/${participantLabel}?max-results=5&alt=json-in-script&callback=handleNewsResponse`;
  document.body.appendChild(newsScript);
  
  const imagesScript = document.createElement('script');
  imagesScript.src = 'https://taiken-mura.blogspot.com/feeds/posts/default?max-results=24&alt=json-in-script&callback=handleImagesResponse';
  document.body.appendChild(imagesScript);
  
  window.feedTimeout = setTimeout(function() {
    if (document.getElementById('news-content').contains(loadingElement)) {
      newsContainer.removeChild(loadingElement);
      const errorElement = document.createElement('p');
      errorElement.textContent = '情報の読み込みに失敗しました。後でもう一度お試しください。';
      errorElement.className = 'text-sm text-red-600';
      newsContainer.appendChild(errorElement);
    }
  }, 10000);
});

window.handleNewsResponse = function(data) {
  clearTimeout(window.feedTimeout);
  
  const newsContainer = document.getElementById('news-content');
  
  while (newsContainer.firstChild) {
    newsContainer.removeChild(newsContainer.firstChild);
  }
  
  if (data.feed && data.feed.entry && data.feed.entry.length > 0) {
    const newsListElement = document.createElement('ul');
    newsListElement.className = 'divide-y divide-gray-100';
    
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
      listItem.className = 'py-3 first:pt-0 last:pb-0';
      
      const linkElement = document.createElement('a');
      linkElement.href = postLink;
      linkElement.textContent = title;
      linkElement.className = 'block font-bold text-maingreen hover:underline leading-relaxed';
      linkElement.target = '_blank';
      linkElement.rel = 'noopener noreferrer';
      
      listItem.appendChild(linkElement);
      newsListElement.appendChild(listItem);
    });
    
    newsContainer.appendChild(newsListElement);
  } else {
    const noNewsElement = document.createElement('p');
    noNewsElement.textContent = '参加者募集のお知らせはありません。';
    noNewsElement.className = 'text-sm text-gray-600';
    newsContainer.appendChild(noNewsElement);
  }
};

window.handleImagesResponse = function(data) {
  const imagesContainer = document.getElementById('news-images');
  
  while (imagesContainer.firstChild) {
    imagesContainer.removeChild(imagesContainer.firstChild);
  }
  
  if (data.feed && data.feed.entry && data.feed.entry.length > 0) {
    const allImages = [];
    
    data.feed.entry.forEach(entry => {
      if (entry.content && entry.content.$t) {
        const content = entry.content.$t;
        const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
        let match;
        
        while ((match = imgRegex.exec(content)) !== null) {
          const imgSrc = match[1];
          if (imgSrc && !imgSrc.includes('icon') && !imgSrc.includes('emoji')) {
            allImages.push({
              src: imgSrc,
              title: entry.title.$t,
              link: entry.link?.find(link => link.rel === 'alternate')?.href || ''
            });
          }
        }
      }
    });
    
    if (allImages.length > 0) {
      const selectedImages = allImages.slice(0, Math.min(10, allImages.length));
      
      const imageGrid = document.createElement('div');
      imageGrid.className = 'grid grid-cols-2 lg:grid-cols-3 gap-2';
      
      selectedImages.forEach((img, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = `relative overflow-hidden rounded-lg aspect-square bg-gray-100${index >= 6 ? ' lg:hidden' : ''}`;
        
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.title;
        imgElement.className = 'w-full h-full object-cover hover:scale-110 transition-transform duration-300';
        imgElement.loading = 'lazy';
        
        const imgLink = document.createElement('a');
        imgLink.href = img.link;
        imgLink.target = '_blank';
        imgLink.rel = 'noopener noreferrer';
        imgLink.className = 'block w-full h-full';
        imgLink.appendChild(imgElement);
        
        imgContainer.appendChild(imgLink);
        imageGrid.appendChild(imgContainer);
      });
      
      imagesContainer.appendChild(imageGrid);
    } else {
      const noImagesElement = document.createElement('p');
      noImagesElement.textContent = '表示できる写真がありません。';
      noImagesElement.className = 'text-sm text-gray-600';
      imagesContainer.appendChild(noImagesElement);
    }
  }
};

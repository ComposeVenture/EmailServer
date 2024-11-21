caches.open('video-cache').then(cache => {
    cache.add('https://docs.google.com/spreadsheets/d/1XWRoL9Q9YXR-BAH8t6gq4HgUPSsuZRWwmn_P47GWsUw/edit?usp=drive_link'); // Caching a single video
  });
  
  /*
  caches.match('../Components/Functions.js').then(response => {
    if (response) {
      console.log(response)
    }
  });
  
  */
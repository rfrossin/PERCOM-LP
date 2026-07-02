import https from 'https';
https.get('https://ibb.co/album/HtS05W', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const urls = [...data.matchAll(/https:\/\/i\.ibb\.co\/[^\"']+/g)].map(m => m[0]);
    console.log([...new Set(urls)]);
  });
});

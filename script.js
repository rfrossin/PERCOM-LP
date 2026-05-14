import https from 'https';
https.get('https://ibb.co/tMPnv1DW', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data.match(/https:\/\/i\.ibb\.co\/[^"']+/g)[0]));
});

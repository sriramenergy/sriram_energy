import https from 'https';

https.get('https://websolenergy.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/src="([^"]*)"/ig);
    if (matches) {
      console.log([...new Set(matches)]);
    }
  });
});

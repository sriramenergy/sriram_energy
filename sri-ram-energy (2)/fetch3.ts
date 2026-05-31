import https from 'https';

https.get('https://logokit.com/websol-energy-system-ltd/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/src="([^"]*)"/ig);
    if (matches) {
      console.log([...new Set(matches)]);
    }
  });
});

import https from 'https';

https.get('https://nh1design.com/work/websol/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/src="([^"]*)"/ig);
    if (matches) {
      matches.filter(m => m.toLowerCase().includes('logo') || m.toLowerCase().includes('websol')).forEach(m => console.log(m));
    }
  });
});

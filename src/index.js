var nativefier = require('nativefier').default;

var options = {
  name: 'MSCPlayer',
  platform: 'PLATFORM',
  targetUrl: "https://musicoin.org",
  counter: true,
  bounce: true,
  width: 500,
  height: 600,
  showMenuBar: false,
  fastQuit: true,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4',
  ignoreCertificate: false,
  disableGpu: false,
  ignoreGpuBlacklist: false,
  enableEs3Apis: false,
  insecure: false,
  flashPluginDir: null,
  diskCacheSize: null,
  fullScreen: false,
  maximize: false,
  zoom: 1,
  internalUrls: '.*?\.musicoin\.*?',
  singleInstance: true,
  win32metadata: {
    ProductName: 'MSCPlayer',
    InternalName: 'MSCPlayer',
    FileDescription: 'MSCPlayer'
  },
  fileDownloadOptions: {
    saveAs: true
  },
  tray: false,
  alwaysOnTop: false,
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(appPath);
});

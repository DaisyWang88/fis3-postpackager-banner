module.exports = function (ret, conf, settings, opt) {
  if (!opt.pack) {
      return;
  }

  fis.util.map(ret.src, function (subpath, file) {
    var content = file.getContent();
    var banner = '';

    if (Object.prototype.toString.call(settings.banner) === '[object Array]') {
      banner = settings.banner.join('\n');
    } else if (Object.prototype.toString.call(settings.banner) === '[object String]') {
      banner = settings.banner;
    }

    file.setContent(banner + '\n' + content);
  });

};
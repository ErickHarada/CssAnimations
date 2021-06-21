getHTMLeCSS = (id) => {
    var html = document.getElementById(id + '-html').innerText;
    var css = document.getElementById(id + '-css').innerText;

    const el = document.createElement('textarea');
    console.log(html+'\n'+css);
    el.value = html+'\n'+css;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    el.remove();
};

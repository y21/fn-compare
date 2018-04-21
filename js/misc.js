document.getElementById('source-gh').addEventListener('click',()=>window.open('https://github.com/y21/fn-compare'));
document.getElementById('comp').addEventListener('click', () => {
    let stuff = new Comparator(document.getElementById('input1').value, document.getElementById('input2').value, document.getElementById('repeat').value);
    stuff.execute().then(val => {
        document.getElementById('debug').innerHTML = "<span class='" + (val == CoreComp.LEFT ? "green" : "red") + "'>Left code took <b>" + (stuff.timestamps.left[1]-stuff.timestamps.left[0]) + "</b>ms.</span><br/>";
        document.getElementById('debug').innerHTML += "<span class='" + (val == CoreComp.RIGHT ? "green" : "red") + "'>Right code took <b>" + (stuff.timestamps.right[1]-stuff.timestamps.right[0]) + "</b>ms.</span><br/>";
        document.getElementById('debug').style.display = 'block';
    }).catch(alert);
});
function display() {
        console.log('oh wow')
        let file = document.getElementById('file').files[0];
        var fr = new FileReader();
        fr.onload = function (e) {
            document.getElementById('result').innerHTML = e.target.result.toString()
        };
        fr.readAsText(file);
    }

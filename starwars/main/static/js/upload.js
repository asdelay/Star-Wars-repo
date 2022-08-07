function mil_falc_to_object() {
    return JSON.parse(mil_falc_raw);
}

function routes_to_object() {
    const routes = []
    for (var i in routes_raw) {
        routes.push(JSON.parse(routes_raw[i]))
    }
    return routes
}

function empire_to_object() {
    let file = document.getElementById('file').files[0];
    var fr = new FileReader();
    var empire;
    fr.onload = function (e) {
        empire = JSON.parse(e.target.result.toString())
        console.log(empire)
    };

    console.log(mil_falc_to_object())
    console.log(routes_to_object())
    fr.readAsText(file);
    return empire
}


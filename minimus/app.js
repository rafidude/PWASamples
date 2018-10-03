const tfd = {
    "1": {"title": "TFD 1", "description": "TFD 1 Description"},
    "2": {"title": "TFD 2", "description": "TFD 2 Description"}
}

self.addEventListener('load', function(event) {
    let dt = "2"
    let tfddoc = tfd[dt]
    document.getElementById("title").innerHTML = tfddoc["title"]
    document.getElementById("description").innerHTML = tfddoc["description"]
})
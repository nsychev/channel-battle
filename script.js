window.onload = function() {
    const updateResults = function() {
        fetch(
            '/results.json',
            {
                headers: {
                    'pragma': 'no-cache',
                    'cache-control': 'no-cache, no-store, must-revalidate, max-age=0'
                }
            }
        )
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                const blocks = [];
                for (let key of Object.keys(data)) {
                    const element = document.createElement('article')
                    element.innerHTML = `<h1>${data[key]}</h1><p><a href="https://tele.gg/${key}" target="_blank">@${key}</a></p>`
                    blocks.push(element)
                }

                const root = document.getElementsByTagName('main')[0]
                while (root.firstChild) {
                    root.removeChild(root.firstChild)
                }

                for (let block of blocks) {
                    root.appendChild(block)
                }
            })
        setTimeout(updateResults, 3000)
    }

    updateResults()
}

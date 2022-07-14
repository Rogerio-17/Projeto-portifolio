const ul = document.querySelector('ul.project')


function getApiGithub() {
  fetch('https://api.github.com/users/rogerio-17/repos')
  .then(async res => {
    if(!res.ok) {
      throw new Error(res.status)
    }

    var data = await res.json()

    data.map(item => {
      let li = document.createElement('li')

      li.innerHTML = `
      <strong>${item.name.toUpperCase()}</strong>
      <a>URL: ${item.url}</a>
      <span>Data da Criação:
      ${Intl.DateTimeFormat('pt-BR')
        .format(new Date(item.created_at))}
        </span>
      `
      ul.appendChild(li)
    })
  }).catch(e => console.log(e))

}

getApiGithub()
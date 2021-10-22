const LinksSocialMedia = {
  github: 'deivondionisio',
  youtube: 'UC493-ESR62ScZiMxd10GYFA',
  facebook: 'deivon.dionisio',
  instagram: 'deivon_dionisio',
  twitter: 'deivon2dionisio'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch (url)
  .then(response => )
}

getGitHubProfileInfos()

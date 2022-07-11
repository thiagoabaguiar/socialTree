function changeMode() {

    const container = document.getElementById('container')
    container.classList.toggle('dark_mode')

    if (container.classList[0] === 'dark_mode') {

        const logoLinkedin = document.querySelector('#social_medias a:nth-child(1) img')
        logoLinkedin.src = './assets/logo_linkedin_dark.png'

        const logoGithub = document.querySelector('#social_medias a:nth-child(2) img')
        logoGithub.src = './assets/logo_github_dark.png'

        const logoInstagram = document.querySelector('#social_medias a:nth-child(3) img')
        logoInstagram.src = './assets/logo_instagram_dark.png'

        const logoWhatsapp = document.querySelector('#social_medias a:nth-child(4) img')
        logoWhatsapp.src = './assets/logo_whatsappweb_dark.png'

    } else {

        const logoLinkedin = document.querySelector('#social_medias a:nth-child(1) img')
        logoLinkedin.src = './assets/logo_linkedin.png'

        const logoGithub = document.querySelector('#social_medias a:nth-child(2) img')
        logoGithub.src = './assets/logo_github.png'

        const logoInstagram = document.querySelector('#social_medias a:nth-child(3) img')
        logoInstagram.src = './assets/logo_instagram.png'

        const logoWhatsapp = document.querySelector('#social_medias a:nth-child(4) img')
        logoWhatsapp.src = './assets/logo_whatsappweb.png'

    }

}

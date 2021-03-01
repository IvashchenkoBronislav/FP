const navHome = document.querySelector("#home");
const navAboutSublime = document.querySelectorAll("#aboutSublime");
const navFProjects = document.querySelectorAll("#fProjects");
const navSProvided = document.querySelector("#servicesProvided");
const navOurTeam = document.querySelectorAll("#ourTeam");
const navTestimonials = document.querySelector("#testimonials");
const navBlog = document.querySelectorAll("#blog");
const navContactUs = document.querySelector("#contactUs");

const home = document.querySelector(".header");
const aboutSublime = document.querySelector(".aboutSublime");
const fProjects = document.querySelector(".featuredProjects");
const sProcess = document.querySelector(".servicesProvided");
const ourTeam = document.querySelector(".ourTeam");
const testimonials = document.querySelector(".testimonials");
const sublime = document.querySelector(".sublime")
const blog = document.querySelector(".blogs")
const contact = document.querySelector(".contactUs")


const arrScrolTo = (nav, to) => {
    nav.forEach(el => el.addEventListener("click", () => {
        to.scrollIntoView({ behavior: "smooth" })

    }))

}

const scrolTo = (nav, to) => {
    nav.addEventListener("click", () => {
        to.scrollIntoView({ behavior: "smooth" })
    })
}
scrolTo(navHome, home)
scrolTo(navSProvided, servicesProvided)
scrolTo(navTestimonials, testimonials)
scrolTo(navContactUs, contact)
arrScrolTo(navAboutSublime, aboutSublime)
arrScrolTo(navFProjects, fProjects)
arrScrolTo(navOurTeam, ourTeam)
arrScrolTo(navBlog, blog)


const linckWebToIcon = (id, url) => {
    document.querySelectorAll(id).forEach(el => el.addEventListener("click", () => {
        document.location.href = url;
    }))
}


linckWebToIcon("#twitter", "https://twitter.com/");
linckWebToIcon("#linkedin", "https://www.linkedin.com/")
linckWebToIcon("#faceboock", "https://www.facebook.com/")
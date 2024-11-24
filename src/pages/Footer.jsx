import Footer from "../components/Footer_Theme";

function FooterTest() {
    const logo = "https://cdn.pixabay.com/photo/2022/08/22/02/05/logo-7402513_640.png";
    const about = "© 2024 The Bobbingtons. All rights reserved.";
    const socialLinks = {
        github: "https://github.com",
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        reddit: "https://reddit.com"
    };
    const services = [
        { name: "Affiliates", href: "/affiliates" },
        { name: "Contact Us", href: "/contact" },
        { name: "Support", href: "/support" },
        { name: "Services", href: "/services" }
    ];

    return (
        <>
            <Footer
                logo={logo}
                about={about}
                socialLinks={socialLinks}
                services={services}
            />
        </>
    );
}

export default FooterTest;

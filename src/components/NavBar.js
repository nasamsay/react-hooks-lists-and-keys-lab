import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const LinkList = links.map(link => {
    linkHref = '#' + {link}
    return <a href = {linkHref} key = {link}>{link}</a>
  })
  return <nav>{LinkList}</nav>;
}

export default NavBar;

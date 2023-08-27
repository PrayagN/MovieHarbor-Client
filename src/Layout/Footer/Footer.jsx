// import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Movies",
          link: "/movies",
        },
        {
            name:'About Us',
            link:'/'
        }
      ],
    },
    {
        title: "Top Categories",
        links: [
          {
            name: "Action",
            link: "/",
          },
          {
            name: "Romantic",
            link: "/movies",
          },
          {
              name:'Drama',
              link:'/'
          }
        ],
      },
      {
        title: "My Account",
        links: [
          {
            name: "Gift Cards",
            link: "/",
          },
          {
            name: "Terms of Use",
            link: "/",
          },
          {
              name:'Privacy',
              link:'/'
          }
        ],
      },
  ];
  return (
    <div className="bg-dry py-4 border-t-2 border-black">
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
        {Links.map((link, index) => (
          <div key={index} className="col-span-1">
            <h3 className="text-md text-white font-medium mb-3">{link.title}</h3>
            <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((text,index)=>(
                    <li key={index} className="flex items-baseline">
                        <Link to={text.link} className="text-border inline-block w-full hover:text-submain">{text.name}</Link>
                    </li>
                ))}

            </ul>
          </div>
        ))}
        <div className="pb-3.5 sm:pb-0 col-span-1 ">
            <Link to='/'>
                <img src="../../../public/cinemalogo.jpg" alt="logo" className=" object-contain h-12"/>
            </Link>
            <p className="leading-7 text-sm text-border mt-3">
                <span>

                Lorem 196 Andrew Road, Suite 200, <br /> New York, NY 10003
                </span>
                {/* <br /> */}
                {/* <span>Tell: +242 231 999 111</span> */}
                <br />
                <span>Email: info@gmail.com</span>
            </p>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default Footer;

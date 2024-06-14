/** 

 @author xinyou <loveyou0410gx@gmail.com>

*/
'use client';
import { useState , useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, 
        NavbarBrand, 
        NavbarCollapse, 
        NavbarLink, 
        NavbarToggle,
        Footer,
        FooterCopyright,
        FooterLink,
        FooterLinkGroup,
        Carousel,
        Card,
        Button,
        DarkThemeToggle
 } from "flowbite-react";
import CustomCard from "@/app/components/Card";

export default function Home() {
  const [items, setItems] = useState ([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('api/items');
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  },[]);


  return (
    <>
    <div className="bg-cyan-800">
     <div className="container mx-auto">
       <Navbar fluid className="bg-cyan-800">
        <NavbarBrand as={Link} href="/">
          <Image src="https://www.yuntech.edu.tw/images/website_png/Group_640.png"  className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"  width="200" height="100" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">雲林光觀景點</span>
        </NavbarBrand>
        <NavbarToggle />
       <NavbarCollapse>
          <NavbarLink href="#" className="text-white " >
            <spen className="px-4 py-2 hover:text-yellow-500  hover:border-yellow-500  hover:border-b-2" >交通</spen>
          </NavbarLink>

          <NavbarLink as={Link} href="#" className="text-white ">
            <spen className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2 " >景點</spen>
          </NavbarLink>

          <NavbarLink href="#"className="text-white ">
          <spen className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500  hover:border-b-2" >關於我們</spen>
          </NavbarLink>

        </NavbarCollapse>
        <DarkThemeToggle/>
       </Navbar>
       </div>
       </div> 
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image src="\banner\banner-1.jpg" alt="..." />
        <Image src="\banner\banner-2.jpg" alt="..." />
        <Image src="\banner\banner-3.jpg" alt="..." />
        <Image src="\banner\banner-4.jpg" alt="..." />
        <Image src="\banner\banner-5.jpg" alt="..." />
      </Carousel>
    </div>
    <div className="bg-white py-16">
     <div className="container mx-auto grid grid-cols-4 gap-4">
      { items.map(item =>

    <Card
      className="max-w-sm"
      imgAlt={item.Picture.PictureDescription1}
      imgSrc={item.Picture.PictureUrl1}

    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.ScenicSpotName}

      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.DescriptionDetail}
      </p>
      <Button>
        Read more
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
        )}
    </div>

    <div className = "container mx-auto">
        <div className = "grid grid-cols-1 md:grid-cols-4 gap-4 text-black">
          { items.map( (item ,index) =>
            <CustomCard item={item} key={index}/>
          )}
        </div>
    </div>
    </div>
    <Footer container>
      <FooterCopyright href="#" by="Flowbite™   純粹拿來作業用沒有營利" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
   </>
  );
}
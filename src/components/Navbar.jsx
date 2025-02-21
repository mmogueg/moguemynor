import { useState, useEffect, } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button
} from "@heroui/react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import logo_dev from '../assets/imgs/logo-dev.png';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <section className='flex items-center justify-between absolute px-10 top-8 w-full z-10'>
      <div>
        <img className='h-14' src={logo_dev} alt='logo' />
      </div>
      <div className='xl:hidden'>
        <Button className='rounded-full bg-[#7ed957]' onPress={onOpen}>
          <FaArrowUpFromBracket rotate={90} size={20}/>
        </Button>
      </div>
      <div className='flex items-center font-semibold w-2/4 justify-between max-xl:hidden'>
        <div className='space-x-12 text-white font-gotham-bold'>
          <LinkRouter className='text-[#7ed957] underline underline-offset-4' to={''}>HOME</LinkRouter>
          <LinkRouter className='hover:text-[#7ed957] transition-all duration-200' to={''}>PROJECTS</LinkRouter>
          <LinkRouter className='hover:text-[#7ed957] transition-all duration-200' to={''}>ABOUT</LinkRouter>
          <LinkRouter className='hover:text-[#7ed957] transition-all duration-200' to={''}>CONTACT</LinkRouter>
        </div>
        <Button className='flex items-center justify-center h-10 w-36 rounded-full bg-[#7ed957] font-gotham-bold text-base'>
          <h6>REACH OUT</h6>
        </Button>
      </div>
      <Drawer isOpen={isOpen} onOpenChange={onClose}className='bg-[#201e20] text-white'>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1"></DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  )
}

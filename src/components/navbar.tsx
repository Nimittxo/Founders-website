'use client';
import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { ModeToggle } from '@/components/theme/theme-toggle';
import Image from 'next/image';
import Link from 'next/link';

const subMenuItemsOne = [
  {
    title: 'Blog',
    description: 'The latest industry news, updates, and info',
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: 'Compnay',
    description: 'Our mission is to innovate and empower the world',
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: 'Careers',
    description: 'Browse job listing and discover our workspace',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: 'Support',
    description:
      'Get in touch with our support team or visit our community forums',
    icon: <Zap className="size-5 shrink-0" />,
  },
];

const subMenuItemsTwo = [
  {
    title: 'Help Center',
    description: 'Get all the answers you need right here',
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: 'Contact Us',
    description: 'We are here to help you with any questions you have',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: 'Status',
    description: 'Check the current status of our services and APIs',
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: 'Terms of Service',
    description: 'Our terms and conditions for using our services',
    icon: <Book className="size-5 shrink-0" />,
  },
];

const isPathExcluded = (pathname: string, excludedPaths: string[]) => {
  return excludedPaths.some(path => {
    if (path.endsWith('/*')) {
      const prefix = path.slice(0, -2); // Remove /* from the end
      return pathname.startsWith(prefix);
    }
    return pathname === path;
  });
};

const Navbar1 = () => {
  const pathname = usePathname();
  const excludedRoutes = [
    '/studio/*',
    '/events/*',
    '/blog/posts/*',
    '/login',
    '/signup',
    '/admin',
  ];

  if (isPathExcluded(pathname, excludedRoutes)) {
    return null;
  }

  return (
    <section className="py-4 w-full flex items-center justify-center ">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link
              href={'/'}
              className="flex items-center gap-2 backdrop-blur-sm"
            >
              <Image
                src="/FC-logo-short.png"
                alt="logo"
                width={640}
                height={640}
                className="w-8 h-auto"
                priority
              />
              <span className="text-xl font-bold">Founders Club</span>
            </Link>
            <div className="flex items-center">
              <Link
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href="/"
              >
                Home
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>
                      <span>Content</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                                href="/"
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>Events</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsTwo.map((item, idx) => (
                            <li key={idx}>
                              <Link
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                                href="/"
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">
                                    {item.title}
                                  </div>
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href="/dashboard/upcoming"
              >
                Upcoming
              </Link>
              <Link
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <ModeToggle />
            <Button variant="outline" asChild>
              <Link href="/login" className="text-muted-foreground">
                Log in
              </Link>
            </Button>
            <Button asChild>
              <Link href="/login" className="text-foreground">
                Sign up
              </Link>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href={'/'}
              className="flex items-center gap-2 backdrop-blur-sm"
            >
              <Image
                src="/FC-logo-short.png"
                alt="logo"
                width={640}
                height={640}
                className="w-8 h-auto"
                priority
              />
              <span className="text-xl font-bold">Founders Club</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      href={'/'}
                      className="flex items-center gap-2 backdrop-blur-sm"
                    >
                      <Image
                        src="/FC-logo-short.png"
                        alt="logo"
                        width={640}
                        height={640}
                        className="w-8 h-auto"
                        priority
                      />
                      <span className="text-xl font-bold">Founders Club</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  <Link href="/" className="font-semibold">
                    Home
                  </Link>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Content
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <Link
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="/"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="resources" className="border-b-0">
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                        Events
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <Link
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href="/"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link href="/dashboard/upcoming" className="font-semibold">
                    Upcoming
                  </Link>
                  <Link href="/contact-us" className="font-semibold">
                    Blog
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href="#"
                    >
                      Press
                    </Link>
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href="#"
                    >
                      Contact
                    </Link>
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href="#"
                    >
                      Imprint
                    </Link>
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href="#"
                    >
                      Sitemap
                    </Link>
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href="#"
                    >
                      Legal
                    </Link>
                    <Link
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground'
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </Link>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    <ModeToggle />
                    <Button variant="outline" asChild>
                      <Link href="/login" className="text-muted-foreground">
                        Log in
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/login" className="text-foreground">
                        Sign up
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar1;
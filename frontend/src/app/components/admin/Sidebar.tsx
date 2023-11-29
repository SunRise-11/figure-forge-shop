"use client";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  HomeIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const [open, setOpen] = React.useState(1);
  const pathname = usePathname();

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-screen w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 border-solid border-2 absolute top-0">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Figure Forge
        </Typography>
      </div>
      <List>
        <a href="/">
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </a>
        <a href="/dashboard">
          <ListItem
            className={`${pathname == '/dashboard' ? 'text-secondary' : ''}`}
          >
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </a>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? 'rotate-180' : ''
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Action Figures
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href="/filteredfigures/unchecked">
                <ListItem
                  className={`${
                    pathname == '/filteredfigures/unchecked'
                      ? 'text-secondary'
                      : ''
                  }`}
                >
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Unchecked
                </ListItem>
              </Link>
              <Link href="/filteredfigures/posted">
                <ListItem
                  className={`${
                    pathname == '/filteredfigures/posted'
                      ? 'text-secondary'
                      : ''
                  }`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Posted
                </ListItem>
              </Link>
              <Link href="/filteredfigures/sold">
                <ListItem
                  className={`${
                    pathname == '/filteredfigures/sold'
                      ? 'text-secondary'
                      : ''
                  }`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Sold
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <a href="/api/auth/logout"> Log Out</a>
        </ListItem>
      </List>
    </Card>
  );
}

import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,

  },
  {
    _tag: "CSidebarNavItem",
    name: "FAQ",
    to: "/faq",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,

  },
  {
    _tag: "CSidebarNavItem",
    name: "Testimonials",
    to: "/testimonials",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,

  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "User",
  //   to: "/users",
  //   icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,

  // },
  {
    _tag: "CSidebarNavItem",
    name: "Home Intro Video",
    to: "/home-intro-video",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,

  },
  {
    _tag: "CSidebarNavItem",
    name: "Home Resume Image",
    to: "/home-resume-image",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,

  },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Products",
  //   route: "/products",
  //   icon: "cil-puzzle",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "All Products",
  //       to: "/products/all-products",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Add New Products",
  //       to: "/products/add-new-products",
  //     },
  //   ],
  // },
];

export default _nav;

import {
  onlinePayment,
  profileImage,
  receipt,
  smallBusiness,
  stripe,
} from "@/assets";

export const navigationLinks = [
  {
    title: "Blog",
    href: "/blog",
    id: 1,
  },
  {
    title: "Company",

    id: 2,
    subLinks: [
      {
        title: "Something",
        href: "/something",
      },
    ],
  },
  {
    title: "Products",
    href: "/products",
    id: 3,
  },
  {
    title: "Invoices",
    href: "/invoices",
    id: 4,
  },
  {
    title: "APIs",
    href: "/api",
    id: 1,
  },
];
export const footerNavigationLinks = [
  {
    id: 1,
    title: "Product",
    subLinks: [
      {
        name: "Payment Link",
        href: "#",
        id: 1,
      },
      {
        name: "Store",
        href: "#",
        id: 2,
      },
      {
        name: "Subscription",
        href: "#",
        id: 3,
      },
      {
        name: "API",
        href: "#",
        id: 4,
      },
      {
        name: "Invoices",
        href: "#",
        id: 5,
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    subLinks: [
      {
        name: "About Us",
        href: "#",
        id: 1,
      },
      {
        name: "Contact Us",
        href: "#",
        id: 1,
      },
      {
        name: "Careers",
        href: "#",
        id: 1,
      },
      {
        name: "Blog",
        href: "#",
        id: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Legal",
    subLinks: [
      {
        name: "Privacy Policy",
        href: "#",
        id: 1,
      },
      {
        name: "TOS",
        href: "#",
        id: 2,
      },
      {
        name: "Compliance",
        href: "#",
        id: 3,
      },
    ],
  },
  {
    id: 4,
    title: "Help",
    subLinks: [
      {
        name: "Knowledge Base",
        href: "#",
        id: 1,
      },
      {
        name: "FAQ",
        href: "#",
        id: 2,
      },
      {
        name: "Contact Support",
        href: "#",
        id: 3,
      },
    ],
  },
];
export const paymentData = [
  {
    id: 1,
    image: smallBusiness,
    description:
      "Create a free ecommerce website and start selling worldwide with just a few clicks.",
    cta: "Start Selling",
    href: "#",
  },
  {
    id: 2,
    image: receipt,
    description:
      "Generate professional invoices for your customers and get paid from anywhere.",
    cta: "Get Started",
    href: "#",
  },
  {
    id: 3,
    image: onlinePayment,
    description:
      "Receive one-off or recurring payments from anyone, anywhere, via your unique payment link.",
    cta: "Learn More",
    href: "#",
  },
];
export const testimonials = [
  {
    id: 1,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
  {
    id: 2,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
  {
    id: 3,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
  {
    id: 4,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
  {
    id: 5,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
  {
    id: 6,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },

  {
    id: 7,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },

  {
    id: 8,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
  {
    id: 9,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
  {
    id: 10,
    logo: stripe,
    testimony:
      "Terra is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions.",
    image: profileImage,
    name: "Patrick Collison",
    title: "CEO, Stripe",
  },
];

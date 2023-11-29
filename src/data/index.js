import {
  onlinePayment,
  profileImage,
  receipt,
  smallBusiness,
  stripe,
} from "@/assets";

export const navigationLinks = [
  // {
  //   title: "Blog",
  //   href: "/blog",
  //   id: 1,
  // },
  {
    title: "Company",

    id: 2,
    subLinks: [
      {
        title: "About Us",
        href: "/about",
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
      {
        title: "Careers",
        href: "https://www.bamboohr.com/signup/",
      },
      {
        title: "Support",
        href: "#",
      },
    ],
  },
  {
    title: "Products",
    href: "/products",
    id: 3,
    subLinks: [
      {
        title: "PaymentLink",
        href: "/products/#paymentLink",
      },
      {
        title: "Store",
        href: "/products/#store",
      },
      {
        title: "Subscription",
        href: "/products//#subscription",
      },
      {
        title: "API",
        href: "/products/#api",
      },
      {
        title: "Invoices",
        href: "/products/#invoices",
      },
    ],
  },
  {
    title: "Knowledge Base",
    href: "/invoices",
    id: 4,
    subLinks: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "FAQ",
        href: "/contact/#FAQ",
      },
    ],
  },
  {
    title: "Legal",
    href: "/legal",
    id: 1,
    subLinks: [
      {
        title: "Compliance",
        href: "/legal",
      },
      {
        title: "Privacy",
        href: "/legal/#privacy",
      },
      {
        title: "Whistle Blowing Policy",
        href: "/legal/#whistleBlowing",
        download: true,
      },
      {
        title: "Confidentiality Policy",
        href: "",
      },
    ],
  },
];
export const footerNavigationLinks = [
  {
    id: 2,
    title: "Company",
    subLinks: [
      {
        name: "About Us",
        href: "/about",
        id: 1,
      },
      {
        name: "Contact Us",
        href: "/contact",
        id: 1,
      },
      {
        name: "Careers",
        href: "https://www.bamboohr.com/signup/",
        id: 1,
      },
      {
        name: "Support",
        href: "#",
        id: 1,
      },
    ],
  },
  {
    id: 1,
    title: "Product",
    subLinks: [
      {
        name: "Payment Link",
        href: "products/#paymentLink",
        id: 1,
      },
      {
        name: "Store",
        href: "products/#store",
        id: 2,
      },
      {
        name: "Subscription",
        href: "/products/#subscription",
        id: 3,
      },
      {
        name: "API",
        href: "/products/#api",
        id: 4,
      },
      {
        name: "Invoices",
        href: "/products/#invoices",
        id: 5,
      },
    ],
  },
  {
    id: 4,
    title: "Knowledge Base",
    subLinks: [
      {
        name: "Blog",
        href: "#",
        id: 1,
      },
      {
        name: "FAQ",
        href: "/contact/#FAQ",
        id: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Legal",
    subLinks: [
      {
        name: "Privacy Policy",
        href: "/legal",
        id: 1,
      },
      {
        name: "TOS",
        href: "/legal",
        id: 2,
      },
      {
        name: "Compliance",
        href: "/legal",
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
    href: "https://test.pg.terraswitch.ng/register",
  },
  {
    id: 2,
    image: receipt,
    description:
      "Generate professional invoices for your customers and get paid from anywhere.",
    cta: "Get Started",
    href: "https://test.pg.terraswitch.ng/register",
  },
  {
    id: 3,
    image: onlinePayment,
    description:
      "Receive one-off or recurring payments from anyone, anywhere, via your unique payment link.",
    cta: "Learn More",
    href: "https://test.pg.terraswitch.ng/register",
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
export const productsSections = [
  {
    id: 1,
    title: "Payment Link",
    description:
      "Give your customers the gift of modern, frictionless, painless payments. Integrate TerraSwitach once and let your customers pay you however they want.",
    list: [
      "Collect one-time and recurring payments from your app or website",
      "Retrieve all your transaction and customer data",
      "Verify the identity of customers",
    ],
    cta: "Set Up a Payment Link",
    href: "https://test.pg.terraswitch.ng/register",
    image: "Terra/im1_4x_tav8rw",
    backgroundColor: "white",
    link: "paymentLink",
    reverse: false,
  },
  {
    id: 2,
    title: "Invoices",
    description:
      "Give your customers the gift of modern, frictionless, painless payments. Integrate TerraSwitach once and let your customers pay you however they want.",
    list: [
      "Collect one-time and recurring payments from your app or website",
      "Retrieve all your transaction and customer data",
      "Verify the identity of customers",
    ],
    cta: "Generate an Invoice",
    href: "https://test.pg.terraswitch.ng/register",
    image: "Terra/im2_4x_hliktn",
    backgroundColor: "#F7EFF7",
    reverse: true,
    link: "invoices",
  },
  {
    id: 3,
    title: "Subscriptions",
    description:
      "Give your customers the gift of modern, frictionless, painless payments. Integrate TerraSwitach once and let your customers pay you however they want.",
    list: [
      "Collect one-time and recurring payments from your app or website",
      "Retrieve all your transaction and customer data",
      "Verify the identity of customers",
    ],
    cta: "Create a Subscription Plan",
    href: "https://test.pg.terraswitch.ng/register",
    image: "Terra/im3_4x_wsydsz",
    backgroundColor: "#FAD6AB",
    reverse: false,
    link: "subscription",
  },
];
export const teamData = [
  {
    id: 167,
    name: "Olukayode Adeniji",
    title: "Head of Business",
    image: "Terra/kayode_2x_ehsbhe",
  },
  {
    id: 17,
    name: "Ifeoma  ONIANWA",
    title: "Operations Officer",
    image: "Terra/ifeoma_2x_tfcz1z",
  },
  {
    id: 81,
    name: "Timothy Ojoma",
    title: "Accountant",
    image: "Terra/timothy_2x_bdiupa",
  },
  {
    id: 91,
    name: "Raymond Bessidone ",
    title: "Operations Officer",
    image: "Terra/raymond_2x_ti5p6q",
  },
  {
    id: 132,
    name: "Adekunle AJAYI",
    title: "Team Lead - Operations",
    image: "Terra/adekunle_2x_mfaklv",
  },
  {
    id: 13,
    name: "Confidence Madu",
    title: "HR Officer",
    image: "Terra/confi_2x_izmcnt",
  },
  {
    id: 123,
    name: "Uche Mgbeahuru ",
    title: "HR Manager",
    image: "Terra/uche_2x_nqtzrj",
  },
  {
    id: 167,
    name: "Oluwafemi Ajayi",
    title: "Chief Compliance Officer",
    image: "Terra/Ajayi_2x_h8udsv",
  },
  {
    id: 109,
    name: "Daniella Obia",
    title: "Team Lead - Settlement & Reconciliation",
    image: "Terra/daniella_2x_wznyyp",
  },
];
export const valuesData = [
  {
    id: 1,
    key: "Flexibility",
    value:
      "In an ever-evolving digital world, flexibility is key. At TerraSwitch, we adapt to the changing needs of our clients and the market, ensuring that our solutions are always relevant, responsive, and ahead of the curve.",
  },
  {
    id: 2,
    key: "Integrity",
    value:
      "Our commitment to integrity is unwavering. We believe in conducting our business with the utmost honesty and ethical standards, fostering a culture of trust and reliability that our clients can depend on.",
  },
  {
    id: 3,
    key: "Innovation",
    value:
      "Innovation is at the heart of TerraSwitch. We continuously push the boundaries of what's possible in payment processing, delivering state-of-the-art solutions that redefine convenience, security, and efficiency.",
  },
  {
    id: 4,
    key: "Growth & Development",
    value:
      "We are committed to the continuous growth and development of our company, our people, and our solutions. TerraSwitch invests in ongoing learning and improvement, ensuring that we are always at the forefront of the payment industry.",
  },
  {
    id: 4,
    key: "Transparency",
    value:
      "Clarity and openness are fundamental to our operations. We maintain transparency in all our dealings, providing our clients with clear, straightforward information and fostering an environment of mutual respect and understanding.",
  },
  {
    id: 4,
    key: "Excellence",
    value:
      "Excellence is not just a goal but a standard at TerraSwitch. From our products to our customer service, we strive for the highest quality in everything we do, ensuring that we deliver nothing but the best to our clients.",
  },
];
export const faqData = [
  {
    id: 1,
    key: "Does My Business Work For An Online Store?",
    value:
      "lorem ipsum dolor sit amet, consectetur adip e ea commodo consequ velit vel aug  commodo vel aug commodo consequ velit vel aug commodo consequ velit vel aug commodo",
  },
  {
    id: 2,
    key: "What Is The Maximum Amount I Can Receive?",
    value:
      "lorem ipsum dolor sit amet, consectetur adip e ea commodo consequ velit vel aug  commodo vel aug commodo consequ velit vel aug commodo consequ velit vel aug commodo",
  },
  {
    id: 3,
    key: "What Documents Do I Need For Compliance?",
    value:
      "lorem ipsum dolor sit amet, consectetur adip e ea commodo consequ velit vel aug  commodo vel aug commodo consequ velit vel aug commodo consequ velit vel aug commodo",
  },
  {
    id: 4,
    key: "How Do I Generate A Link",
    value:
      "lorem ipsum dolor sit amet, consectetur adip e ea commodo consequ velit vel aug  commodo vel aug commodo consequ velit vel aug commodo consequ velit vel aug commodo",
  },
  {
    id: 5,
    key: "Can I Monitor Payments From Different Customers?",
    value:
      "lorem ipsum dolor sit amet, consectetur adip e ea commodo consequ velit vel aug  commodo vel aug commodo consequ velit vel aug commodo consequ velit vel aug commodo",
  },
];

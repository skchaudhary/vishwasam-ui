const drawerOrganizerColors = [
  { id: 'clear-transparent', name: 'Clear Transparent' },
  { id: 'gray-transparent', name: 'Gray Transparent' },
  { id: 'pink-transparent', name: 'Pink Transparent' },
  { id: 'teal-transparent', name: 'Teal Transparent' },
];

function createBlackVariant(image, images) {
  return [
    {
      id: 'black',
      name: 'Black',
      image,
      images,
    },
  ];
}

function createDrawerOrganizerProduct({ size, price, affiliateUrl, colorImages, sharedImages }) {
  const variants = drawerOrganizerColors.map((color) => {
    const image = `/images/products/desk-drawer-organizer/set-${size}/${colorImages[color.id]}`;

    return {
      ...color,
      image,
      images: [
        image,
        ...sharedImages.map(
          (sharedImage) => `/images/products/desk-drawer-organizer/${sharedImage}`
        ),
      ],
    };
  });
  const defaultVariant = variants[0];

  return {
    id: `desk-drawer-organizer-set-${size}`,
    title: `Drawer Organizer Set Transparent (${size})`,
    category: 'Home & Kitchen',
    price: `₹${price} | Check for more discounts and offers on Amazon`,
    description: `Transparent drawer organizer set of ${size}, available in clear, gray, pink, and teal.`,
    image: defaultVariant.image,
    images: defaultVariant.images,
    variants,
    source: 'affiliate',
    affiliateUrl,
    featured: true,
  };
}

const products = [
  {
    id: 'under-sink-organizer',
    title: 'Under-Sink Organizer',
    category: 'Home & Kitchen',
    price: '₹499 | Check for more discounts and offers on Amazon',
    description:
      'Multi-purpose 2-tier expandable under-sink organizer rack for efficient kitchen & bathroom cabinet storage.',
    image: '/images/products/under-sink-organizer/Photo1.png',
    images: [
      '/images/products/under-sink-organizer/Photo1.png',
      '/images/products/under-sink-organizer/Photo2.png',
      '/images/products/under-sink-organizer/Photo3.png',
      '/images/products/under-sink-organizer/Side-View1.png',
      '/images/products/under-sink-organizer/Side-View2.png',
      '/images/products/under-sink-organizer/Top-view.png',
      '/images/products/under-sink-organizer/Photo-With-Dimensions.png',
    ],
    variants: createBlackVariant('/images/products/under-sink-organizer/Photo1.png', [
      '/images/products/under-sink-organizer/Photo1.png',
      '/images/products/under-sink-organizer/Photo2.png',
      '/images/products/under-sink-organizer/Photo3.png',
      '/images/products/under-sink-organizer/Side-View1.png',
      '/images/products/under-sink-organizer/Side-View2.png',
      '/images/products/under-sink-organizer/Top-view.png',
      '/images/products/under-sink-organizer/Photo-With-Dimensions.png',
    ]),
    source: 'affiliate',
    affiliateUrl: 'https://amzn.in/d/0eDQofDJ',
    featured: true,
  },
  {
    id: 'kitchen-tableware-storage-box-pack-1',
    title: 'Kitchen Tableware Storage Box (Pack of 1)',
    category: 'Home & Kitchen',
    price: '₹569 | Check for more discounts and offers on Amazon',
    description:
      'Premium kitchen tableware storage box with dust-proof cover for spoons, forks, and cutlery organization.',
    image: '/images/products/kitchen-tableware-storage-box/Photo1.png',
    images: [
      '/images/products/kitchen-tableware-storage-box/Photo1.png',
      '/images/products/kitchen-tableware-storage-box/Combined-Images0.png',
      '/images/products/kitchen-tableware-storage-box/Fine-grained-image.png',
      '/images/products/kitchen-tableware-storage-box/Photo-with-dimensions.png',
    ],
    variants: createBlackVariant('/images/products/kitchen-tableware-storage-box/Photo1.png', [
      '/images/products/kitchen-tableware-storage-box/Photo1.png',
      '/images/products/kitchen-tableware-storage-box/Combined-Images0.png',
      '/images/products/kitchen-tableware-storage-box/Fine-grained-image.png',
      '/images/products/kitchen-tableware-storage-box/Photo-with-dimensions.png',
    ]),
    source: 'affiliate',
    affiliateUrl: 'https://amzn.in/d/02xtDjAE',
    featured: true,
  },
  {
    id: 'kitchen-tableware-storage-box-pack-2',
    title: 'Kitchen Tableware Storage Box (Pack of 2)',
    category: 'Home & Kitchen',
    price: '₹949 | Check for more discounts and offers on Amazon',
    description:
      'Value pack of 2 premium kitchen tableware storage boxes with dust-proof cover for complete kitchen organization.',
    image: '/images/products/kitchen-tableware-storage-box/Combined-Images1.png',
    images: [
      '/images/products/kitchen-tableware-storage-box/Combined-Images1.png',
      '/images/products/kitchen-tableware-storage-box/Combined-Images0.png',
      '/images/products/kitchen-tableware-storage-box/Photo1.png',
      '/images/products/kitchen-tableware-storage-box/Fine-grained-image.png',
      '/images/products/kitchen-tableware-storage-box/Photo-with-dimensions.png',
    ],
    variants: createBlackVariant(
      '/images/products/kitchen-tableware-storage-box/Combined-Images1.png',
      [
        '/images/products/kitchen-tableware-storage-box/Combined-Images1.png',
        '/images/products/kitchen-tableware-storage-box/Combined-Images0.png',
        '/images/products/kitchen-tableware-storage-box/Photo1.png',
        '/images/products/kitchen-tableware-storage-box/Fine-grained-image.png',
        '/images/products/kitchen-tableware-storage-box/Photo-with-dimensions.png',
      ]
    ),
    source: 'affiliate',
    affiliateUrl: 'https://amzn.in/d/0aB7ir74',
    featured: true,
  },
  createDrawerOrganizerProduct({
    size: 8,
    price: 449,
    affiliateUrl: 'https://amzn.in/d/0ibWBJIm',
    colorImages: {
      'clear-transparent': 'Clear-Transparent-new.png',
      'gray-transparent': 'Gray-Transparent-new.png',
      'pink-transparent': 'Pink-Transparent-new.png',
      'teal-transparent': 'Teal-Transparent-new.png',
    },
    sharedImages: ['All-image-into-one.png', 'photo3.png', 'photo4.png', 'photo5.png'],
  }),
  createDrawerOrganizerProduct({
    size: 10,
    price: 499,
    affiliateUrl: 'https://amzn.in/d/068YfSJn',
    colorImages: {
      'clear-transparent': 'clear-transparent-10.png',
      'gray-transparent': 'gray-transparent-10.png',
      'pink-transparent': 'pink-transparent-10.png',
      'teal-transparent': 'teal-transparent-10.png',
    },
    sharedImages: ['All-image-into-one.png', 'photo3.png', 'photo4.png', 'photo5.png'],
  }),
  createDrawerOrganizerProduct({
    size: 16,
    price: 699,
    affiliateUrl: 'https://amzn.in/d/0isqQ57Y',
    colorImages: {
      'clear-transparent': 'Transparent-Clear.png',
      'gray-transparent': 'Transparent-gray.png',
      'pink-transparent': 'Transparent-Pink.png',
      'teal-transparent': 'Transparent-Teal.png',
    },
    sharedImages: ['All-image-into-one.png', 'photo3.png', 'photo4.png', 'photo5.png'],
  }),
  createDrawerOrganizerProduct({
    size: 20,
    price: 899,
    affiliateUrl: 'https://amzn.in/d/07vg252e',
    colorImages: {
      'clear-transparent': 'Transparent-clear.png',
      'gray-transparent': 'Transparent-gray.png',
      'pink-transparent': 'Transparent-pink.png',
      'teal-transparent': 'Transparent-teal.png',
    },
    sharedImages: ['All-image-into-one.png', 'photo3.png', 'photo4.png', 'photo5.png'],
  }),
];

export default products;

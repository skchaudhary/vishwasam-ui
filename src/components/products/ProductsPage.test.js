import { fireEvent, render, screen } from '@testing-library/react';
import ProductsPage from './ProductsPage';
import products from '../../data/products';

const drawerOrganizerProducts = products.filter((product) =>
  product.id.startsWith('desk-drawer-organizer-set-')
);

test('includes four drawer organizer sizes with four color variants each', () => {
  expect(drawerOrganizerProducts.map((product) => product.id)).toEqual([
    'desk-drawer-organizer-set-8',
    'desk-drawer-organizer-set-10',
    'desk-drawer-organizer-set-16',
    'desk-drawer-organizer-set-20',
  ]);
  expect(drawerOrganizerProducts.map((product) => product.affiliateUrl)).toEqual([
    'https://amzn.in/d/0ibWBJIm',
    'https://amzn.in/d/068YfSJn',
    'https://amzn.in/d/0isqQ57Y',
    'https://amzn.in/d/07vg252e',
  ]);
  expect(drawerOrganizerProducts.map((product) => product.price)).toEqual([
    '₹449 | Check for more discounts and offers on Amazon',
    '₹499 | Check for more discounts and offers on Amazon',
    '₹699 | Check for more discounts and offers on Amazon',
    '₹899 | Check for more discounts and offers on Amazon',
  ]);
  expect(
    products
      .slice(0, 3)
      .every((product) => product.price.includes('Check for more discounts and offers on Amazon'))
  ).toBe(true);
  expect(
    products.slice(0, 3).map((product) => product.variants.map((variant) => variant.name))
  ).toEqual([['Black'], ['Black'], ['Black']]);
  expect(
    drawerOrganizerProducts.map((product) => product.variants.map((variant) => variant.name))
  ).toEqual(
    Array(4).fill(['Clear Transparent', 'Gray Transparent', 'Pink Transparent', 'Teal Transparent'])
  );
  const productIds = products.map((product) => product.id);
  expect(productIds).not.toContain('p4');
  expect(productIds).not.toContain('p5');
  expect(productIds).not.toContain('p6');
});

test('selecting a color updates the product image and image slideshow', () => {
  render(<ProductsPage />);

  const pinkOptions = screen.getAllByRole('button', {
    name: 'Pink Transparent',
  });
  fireEvent.click(pinkOptions[0]);

  const pinkProductImage = screen.getByAltText(
    'Drawer Organizer Set Transparent (8) - Pink Transparent'
  );
  expect(pinkProductImage).toHaveAttribute(
    'src',
    '/images/products/desk-drawer-organizer/set-8/Pink-Transparent-new.png'
  );

  fireEvent.click(pinkProductImage);
  expect(
    screen.getByAltText('Drawer Organizer Set Transparent (8) - Pink Transparent slide 1')
  ).toHaveAttribute('src', '/images/products/desk-drawer-organizer/set-8/Pink-Transparent-new.png');
});

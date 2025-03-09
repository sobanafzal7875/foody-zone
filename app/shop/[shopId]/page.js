'use client';
import { useParams } from 'next/navigation';
// import Menu from '../Menu';
import ProductsMenu from '@/app/components/ProductsMenu';
import Explore from '@/app/components/Explore';
import Delivery from '@/app/components/Delivery';
import Shop from '../Shop';



export default function MenuIdPage() {
  const { shopId } = useParams(); // e.g. "menu-2" from /menu/menu-2

  return (
    <div>

      <Shop/>
      {/* Render ProductsMenu if /menu/menu-1 */}
      {shopId === 'menu-1' &&
      <ProductsMenu />}

      {/* Render Explore if /menu/menu-2 */}
      {shopId === 'menu-2' && <Explore />}

      {/* Optionally, handle other menu IDs */}
      {shopId !== 'menu-1' && shopId !== 'menu-2' && (
        <p>No matching menu ID found.</p>
      )}
      <Delivery/>
    </div>
  );
}

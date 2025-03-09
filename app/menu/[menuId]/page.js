'use client';
import { useParams } from 'next/navigation';
import Menu from '../Menu';
import ProductsMenu from '@/app/components/ProductsMenu';
import Explore from '@/app/components/Explore';
import Delivery from '@/app/components/Delivery';



export default function MenuIdPage() {
  const { menuId } = useParams(); // e.g. "menu-2" from /menu/menu-2

  return (
    <div>

      <Menu/>
      {/* Render ProductsMenu if /menu/menu-1 */}
      {menuId === 'menu-1' &&
      <ProductsMenu />}

      {/* Render Explore if /menu/menu-2 */}
      {menuId === 'menu-2' && <Explore />}

      {/* Optionally, handle other menu IDs */}
      {menuId !== 'menu-1' && menuId !== 'menu-2' && (
        <p>No matching menu ID found.</p>
      )}
      <Delivery/>
    </div>
  );
}

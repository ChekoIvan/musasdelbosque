import Menu from '@/components/Menu';
import menuData from '@/data/menu.json';
import { MenuData } from '@/types/menu';

export default function Home() {
  return (
    <Menu data={menuData as MenuData} />
  );
}

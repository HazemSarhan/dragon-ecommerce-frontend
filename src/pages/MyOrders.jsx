import SidebarLayout from '@/components/SidebarLayout';

export default function MyOrders() {
  return (
    <SidebarLayout breadcrumbTitle="My Orders">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <p>View your recent purchases and order status.</p>
    </SidebarLayout>
  );
}

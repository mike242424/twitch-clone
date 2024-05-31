import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardPage = () => {
  return (
    <div className="w-full bg-gray-100">
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default DashboardPage;

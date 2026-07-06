import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            {/* চাইল্ড পেজগুলো রেন্ডার করার জন্য ওউটলেট অবশ্যই লাগবে */}
            <Outlet /> 
        </div>
    );
};

export default MainLayout; // এই লাইনটি ঠিকমত আছে কি?
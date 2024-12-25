// /src/page.tsx (หน้าแรกที่แสดงหน้า Register)
import React from "react";
import Register from "./register/page"; // นำเข้าหน้า Register

const Home: React.FC = () => {
  return (
    <div>
      <Register /> {/* แสดงหน้า Register เป็นหน้าแรก */}
    </div>
  );
};

export default Home;

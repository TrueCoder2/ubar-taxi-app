import { useAuth } from "@clerk/nextjs";

const TAfter = () => {
    const auth = useAuth(); // Use your authentication hook
    // Customize your authenticated navbar (e.g., with green background)
    return (
      <div className="navbar" style={{ backgroundColor: 'green' }}>
        {/* Navbar content */}
        <h2>i am next after logiiiin</h2>
      </div>
    );
  };

  export default TAfter
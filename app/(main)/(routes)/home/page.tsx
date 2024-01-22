import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return ( 
        <p>This is an protected page
            <UserButton afterSignOutUrl="/" />
        <ModeToggle />
        </p>
     );
}
 
export default Home;
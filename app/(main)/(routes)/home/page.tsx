import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return ( 
        <p>This is an protected page
            <UserButton afterSignOutUrl="/" />
        </p>
     );
}
 
export default Home;
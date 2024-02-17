import { UserButton } from "@clerk/nextjs";

const Dashboardpage = () =>  {
   return (
    <div>
    <p>Dashboard Page (Protected)</p>
    <UserButton afterSignOutUrl="/" />
    </div> 
   )
}

import HeaderBox from "@/components/group/HeaderBox";
import RightSidebar from "@/components/group/RightSidebar";
import TotalBalanceBox from "@/components/group/TotalBalanceBox";
// SLJEDECE JE SIDEBAR - 54:02 - LINK: https://www.youtube.com/watch?v=PuOVqP_cjkE
export default function DashboardPage() {
    const loggedIn = { firstName: 'Adi', lastName: 'Tokmo', email: 'aditokmoo18@gmail.com' };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTION
            </div>

            <RightSidebar 
                user={loggedIn}
                transaction={[]}
                banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
            />
        </section>
    )
}
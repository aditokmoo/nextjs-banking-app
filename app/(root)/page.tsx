import HeaderBox from "@/components/group/HeaderBox";
import TotalBalanceBox from "@/components/group/TotalBalanceBox";

export default function DashboardPage() {
    const loggedIn = { firstName: 'Adi' };
    return (
        <section className="home">
            <div className="home-content">
                <div className="home-header">
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
                </div>
            </div>
        </section>
    )
}
import { useState } from "react";
import "./Dashboard.css";

const transactions = [
  {
    customer: "Olivia Martin",
    email: "olivia@example.com",
    amount: "$1,240.00",
    status: "Completed",
    date: "Sep 28, 2026",
  },
  {
    customer: "Noah Williams",
    email: "noah@example.com",
    amount: "$860.00",
    status: "Pending",
    date: "Sep 28, 2026",
  },
  {
    customer: "Emma Johnson",
    email: "emma@example.com",
    amount: "$2,180.00",
    status: "Completed",
    date: "Sep 27, 2026",
  },
  {
    customer: "Liam Brown",
    email: "liam@example.com",
    amount: "$540.00",
    status: "Refunded",
    date: "Sep 26, 2026",
  },
];

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Overview");

  const navigation = [
    ["Overview", "⌂"],
    ["Analytics", "◒"],
    ["Customers", "♙"],
    ["Orders", "▤"],
    ["Products", "□"],
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">N</div>
          <span>NovaDesk</span>
        </div>

        <nav>
          {navigation.map(([name, icon]) => (
            <button
              key={name}
              onClick={() => setActivePage(name)}
              className={activePage === name ? "nav-link selected" : "nav-link"}
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-link">
            <span>⚙</span>
            Settings
          </button>

          <div className="profile">
            <div className="profile-avatar">BY</div>

            <div className="profile-info">
              <strong>Betel Yimam</strong>
              <small>Administrator</small>
            </div>

            <span>⌄</span>
          </div>
        </div>
      </aside>

      <main className="content">
        <header className="header">
          <div>
            <div className="breadcrumb">
              Workspace <span>/</span> Overview
            </div>
            <h1>Dashboard</h1>
          </div>

          <div className="header-actions">
            <button className="header-button">⌕</button>
            <button className="header-button notification">
              ♢
              <i />
            </button>
            <button className="date-range">
              Sep 1 – Sep 28, 2026
              <span>⌄</span>
            </button>
          </div>
        </header>

        <section className="welcome">
          <div>
            <h2>Good morning, Betel 👋</h2>
            <p>Here's what's happening with your business today.</p>
          </div>

          <button className="add-button">+ &nbsp; Add new</button>
        </section>

        <section className="statistics">
          <StatCard
            title="Total revenue"
            value="$48,290"
            change="+12.8%"
            symbol="$"
          />

          <StatCard
            title="Total orders"
            value="1,842"
            change="+8.4%"
            symbol="🛒"
          />

          <StatCard
            title="Customers"
            value="12,480"
            change="+4.6%"
            symbol="●"
          />

          <StatCard
            title="Conversion rate"
            value="6.24%"
            change="-1.2%"
            negative
            symbol="%"
          />
        </section>

        <section className="analytics-grid">
          <article className="panel revenue">
            <div className="panel-heading">
              <div>
                <h3>Revenue overview</h3>
                <p>Monthly revenue performance</p>
              </div>

              <button className="year-select">
                2026 <span>⌄</span>
              </button>
            </div>

            <div className="chart">
              <div className="y-axis">
                <span>$12k</span>
                <span>$9k</span>
                <span>$6k</span>
                <span>$3k</span>
                <span>$0</span>
              </div>

              <div className="chart-body">
                <div className="horizontal-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <svg
                  viewBox="0 0 720 230"
                  preserveAspectRatio="none"
                  className="line-chart"
                >
                  <defs>
                    <linearGradient
                      id="revenueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity=".20" />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 182 C45 170 55 132 105 145 S155 178 205 115 S255 130 305 98 S355 142 405 82 S455 105 505 62 S555 94 610 45 S670 73 720 24 L720 230 L0 230 Z"
                    fill="url(#revenueGradient)"
                  />

                  <path
                    d="M0 182 C45 170 55 132 105 145 S155 178 205 115 S255 130 305 98 S355 142 405 82 S455 105 505 62 S555 94 610 45 S670 73 720 24"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="4"
                  />
                </svg>

                <div className="months">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="panel traffic">
            <div className="panel-heading">
              <div>
                <h3>Traffic sources</h3>
                <p>Visitors by channel</p>
              </div>

              <button className="more-button">•••</button>
            </div>

            <div className="donut-container">
              <div className="donut">
                <div>
                  <strong>12.4K</strong>
                  <span>Visitors</span>
                </div>
              </div>
            </div>

            <div className="traffic-list">
              <TrafficRow label="Direct" percentage="42%" />
              <TrafficRow label="Search" percentage="31%" />
              <TrafficRow label="Social" percentage="18%" />
              <TrafficRow label="Referral" percentage="9%" />
            </div>
          </article>
        </section>

        <section className="panel transactions">
          <div className="panel-heading">
            <div>
              <h3>Recent transactions</h3>
              <p>Your latest orders and payments</p>
            </div>

            <button className="view-all">View all →</button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {transactions.map((item) => (
                  <tr key={item.email}>
                    <td>
                      <div className="customer">
                        <div className="customer-avatar">
                          {item.customer
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </div>

                        <div>
                          <strong>{item.customer}</strong>
                          <small>{item.email}</small>
                        </div>
                      </div>
                    </td>

                    <td className="amount">{item.amount}</td>

                    <td>
                      <span className={`status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="transaction-date">{item.date}</td>

                    <td>
                      <button className="row-actions">•••</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ title, value, change, symbol, negative }) {
  return (
    <article className="stat-card">
      <div className="stat-title">
        <span>{title}</span>
        <b>{symbol}</b>
      </div>

      <strong>{value}</strong>

      <div className={negative ? "change negative" : "change"}>
        {negative ? "↓" : "↑"} {change}
        <span>vs last 28 days</span>
      </div>
    </article>
  );
}

function TrafficRow({ label, percentage }) {
  return (
    <div className="traffic-row">
      <span className="traffic-name">
        <i />
        {label}
      </span>

      <strong>{percentage}</strong>
    </div>
  );
}

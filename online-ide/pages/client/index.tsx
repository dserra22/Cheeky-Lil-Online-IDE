import React from "react";
import Link from "next/link";

interface Client {
  id: string;
  name: string;
}
const clients: Client[] = [
  { id: "max", name: "Maximulian" },
  { id: "manu", name: "Manu" },
  { id: "daboo", name: "say daboo" },
  { id: "heba", name: "say heba" },
];

const Index = () => {
  return (
    <div>
      Client home page
      <ul>
        {clients.map((client, i) => {
          return (
            <li>
              {/* <Link href={`portfolio/${client.id}`}>{client.name}</Link> */}
              <Link
                href={{
                  pathname: "/client/[portfolioid]",
                  query: { portfolioid: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;

import { Attack } from "@/types/attack";
import React from "react";

const AttackList: React.FC<{
  attacks: Attack["fast"] | Attack["special"];
  title: string;
}> = React.memo(({ attacks, title }) => (
  <div>
    <h4 className="text-lg font-medium mb-2">{title}</h4>
    <ul className="list-disc pl-5">
      {attacks.map((attack) => (
        <li key={attack.name} className="mb-1">
          {attack.name} - Type: {attack.type}, Damage: {attack.damage}
        </li>
      ))}
    </ul>
  </div>
));
AttackList.displayName = "AttackList";

export default AttackList
import { teamData } from "@/data";
import Team from "./Team";

export default function TeamMembers() {
  return (
    <div className=" py-[97px] px-[170px] bg-[#F7EFF7]">
      <div className=" mb-[124px] text-center text-[50px] font-bold">
        <h2 className=" text-darkPurple font-barlow font-bold mb-6">
          The Team
        </h2>
        <p className=" max-w-[576px] w-full mx-auto font-cairo text-darkPurple text-lg font-medium">
          We&apos;re a diverse, close-knit team on an adventure to build
          something enduring, while learning something new, every day.
        </p>
      </div>
      <div className=" flex justify-between flex-wrap gap-[100px]">
        {teamData.map((team) => (
          <Team
            image={team.image}
            key={team.id}
            title={team.title}
            name={team.name}
          />
        ))}
      </div>
    </div>
  );
}

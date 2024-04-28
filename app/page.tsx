"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function Element({
  onCheck,
  isChecked,
  label,
}: {
  onCheck: (...args: any) => any;
  isChecked: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <div className="text-sm font-normal">{label}</div>
      <div>
        <Checkbox
          onCheckedChange={onCheck}
          className="w-[23px] h-[23px]"
          checked={isChecked}
          onChange={onCheck}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [allChecked, setAllChecked] = useState(false);
  const [pageChecked, setPageChecked] = useState([false, false, false, false]);

  const handleAllCheck = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setPageChecked([
      newAllChecked,
      newAllChecked,
      newAllChecked,
      newAllChecked,
    ]);
  };

  const handlePageCheck = (index: number) => {
    const newPageChecked = [...pageChecked];
    newPageChecked[index] = !newPageChecked[index];
    setPageChecked(newPageChecked);
    setAllChecked(newPageChecked.every((isChecked) => isChecked));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="bg-white py-[10px] rounded-md border border-[#EEE] flex flex-col items-start justify-start gap-2 w-full md:w-2/4 mx-4 px-[15px]"
        style={{
          boxShadow: "0px 8px 15px 0px #1414141F",
          // boxShadow: "0px 0px 4px 0px #1414141A",
        }}>
        <Element
          label="All Pages"
          isChecked={allChecked}
          onCheck={handleAllCheck}
        />
        <Separator />
        {[1, 2, 3, 4].map((page, index) => (
          <Element
            key={page}
            label={`Page ${page}`}
            isChecked={pageChecked[index]}
            onCheck={() => handlePageCheck(index)}
          />
        ))}
        <Separator />
        <Button
          className="bg-main-yellow w-full text-dark hover:!bg-main-yellow"
          onClick={() => {
            setAllChecked(true);
            setPageChecked((prev) =>
              Array.from({ length: prev.length }).map((_) => true)
            );
          }}>
          Done
        </Button>
      </div>
    </div>
  );
}

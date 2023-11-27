"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export function ComboboxDemo({
  countryCode,
  flag,
  code,
  setValue,
  value,
  locations,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className=" p-0 border-none rounded-t-md rounded-bl-md shadow-none bg-[#F9FAFA]"
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[99px] flex p-2 gap-1 text-[#0A0A0A]"
        >
          <div>
            <Image
              src={flag}
              alt=""
              width={20}
              height={20}
              className=" rounded-full"
            />
          </div>
          <p className=" text-sm text-black">
            {code}
            {countryCode}
          </p>
          <BiChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 h-[300px]  overflow-scroll ">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>Not found.</CommandEmpty>
          <CommandGroup className="overflow-auto">
            {locations.map((location) => (
              <CommandItem
                key={location}
                value={location}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                  console.log(value);
                  console.log(currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === location ? "opacity-100" : "opacity-0"
                  )}
                />
                {location}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function PhoneInput() {
  const [location, setLocation] = useState("");
  const [countries, setCountries] = useState([]);
  const locations = countries?.map((country) => country.name.common).sort();

  useEffect(() => {
    const fetchData = async () => {
      try {
        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await fetch(dataUrl);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const searchSelectedCountry = countries?.find((obj) => {
    if (obj?.name?.common.toLowerCase() === location) {
      return true;
    }
    return false;
  });
  console.log("searchSelectedCountry:", searchSelectedCountry);
  console.log(searchSelectedCountry && searchSelectedCountry.idd.root);
  console.log(searchSelectedCountry && searchSelectedCountry.idd.suffixes[0]);
  return (
    <div>
      <ComboboxDemo
        locations={locations}
        setValue={setLocation}
        value={location}
        flag={
          (searchSelectedCountry && searchSelectedCountry.flags.png) ||
          (searchSelectedCountry && searchSelectedCountry.flags.svg) ||
          "https://cdn.britannica.com/73/4473-050-0D875725/Grand-Union-Flag-January-1-1776.jpg"
        }
        code={(searchSelectedCountry && searchSelectedCountry.idd.root) || "+1"}
        countryCode={
          (searchSelectedCountry && searchSelectedCountry.idd.suffixes[0]) ||
          "201"
        }
      />
    </div>
  );
}

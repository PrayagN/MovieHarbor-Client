import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import { categoriesData } from "../../Data/categoryData";

const YearData = [
  { title: "Sort By Year" },
  { title: "1800-1900" },
  { title: "1900-2000" },
  { title: "2000-2010" },
  { title: "2010-2020" },
  { title: "2020-2030" },
];

const TimesData = [
  { title: "Sort By Hours" },
  { title: "1 - 10 Hours" },
  { title: "10 - 20 Hours" },
  { title: "20 - 30 Hours" },
  { title: "30 - 40 Hours" },
  { title: "40 - 50 Hours" },
];

const RatesData = [
  { title: "Sort By Rates" },
  { title: "1 Star" },
  { title: "2 Star" },
  { title: "3 Star" },
  { title: "4 Star" },
  { title: "5 Star" },
];

function Filter() {
  const [category, setCategory] = useState({ title: "Category" });
  const [year, setYear] = useState({ title: "Year" });
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onchange: setCategory,
      items: categoriesData,
    },
    {
      value: year,
      onchange: setYear,
      items: YearData,
    },
    {
      value: times,
      onchange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onchange: setRates,
      items: RatesData,
    },
  ];

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((items, index) => (
        <Listbox
          key={index}
          value={items.value}
          onChange={items.onchange}
        >
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 cursor-pointer bg-main w-full py-2 pl-3 pr-10 text-left rounded-md shadow-md">
              <span className="block truncate">{items.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center point pr-2 pointer-events-none">
                <FaAngleDown className="h-5 w-5" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 sm:text-sm focus:outline-none overflow-auto ring-black ring-opacity-5">
                {items.items.map((item, itemIndex) => (
                  <Listbox.Option
                    key={itemIndex}
                    className={({ active, selected }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-submain text-white" : "text-main"
                      } ${selected ? "font-semibold" : "font-normal"}`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span className="block truncated">{item.title}</span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default Filter;

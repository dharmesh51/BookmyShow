import React from 'react';
import {BiChevronDown , BiChevronUp} from 'react-icons/bi';

import { Disclosure } from '@headlessui/react';

const Filter = (props) => {
  return (
    <Disclosure >
      {({open}) => (
        <> 
          <div className="bg-white rounded px-2 py-1">
          <Disclosure.Button className="flex items-center py-2 gap-3 text-sm ">
            {open ? <BiChevronUp/> : <BiChevronDown/> } <span className={open ? "text-red-600":"text-gray-900"}>{props.title}</span>
          </Disclosure.Button>
          <Disclosure.Panel>
              <div className = "flex items-center gap-3 flex-wrap ">
                  {
                    props.tags.map((tag) => (
                        <div className = "border border-gray-200 px-2 py-0.5">
                            <span className = "text-red-600 text-sm">{tag}</span>
                        </div>
                      ))
                  }
              </div>
          </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
};

export default Filter;
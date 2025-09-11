import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6'; // Hamburger menu icon

const Category = () => {
    return (
        <div>
            <div className="inline-flex items-center gap-13 bg-amber-300 p-4 pr-6">
                <h1 className="text-sm font-medium">SHOP BY CATEGORIES</h1>
                <FaBars className="text-black text-base cursor-pointer" />
            </div>
            <div className='flex flex-col item w-0 '>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5 border border-t-0">
                    Men’s Clothing
                    <FaChevronRight className="text-gray-400 text-xs" />
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Women’s Clothing</p>
                    <FaChevronRight className="text-gray-400 text-xs" />
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Accessories</p>
                    <FaChevronRight className="text-gray-400 text-xs" />
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Shoes</p>
                    <FaChevronRight className="text-gray-400 text-xs" />
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Jewellery</p>
                    <FaChevronRight className="text-gray-400 text-xs" />
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Bags & Backpacks</p>
                    <FaChevronRight className="text-gray-400 text-xs" />
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Watches</p>
                    <FaChevronRight className="text-gray-400 text-xs" />
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Dresses</p>
                </div>
                <div className="border-gray-300 inline-flex items-center font-medium text-sm justify-between w-62 py-3 pl-2 pr-2.5  border border-t-0">
                    <p>Shirts</p>
                </div>

            </div>
        </div>
    );
};

export default Category;

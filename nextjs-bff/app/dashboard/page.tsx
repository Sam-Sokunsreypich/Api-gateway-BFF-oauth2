"use client";

import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    categoryId?: number;
}

interface Category {
    id: number;
    name: string;
}

export default function DashboardProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch("http://localhost:8080/products").then(res => res.json()),
            fetch("http://localhost:8080/categories").then(res => res.json()),
        ])
            .then(([productsData, categoriesData]) => {
                setProducts(productsData);
                setCategories(categoriesData);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    // Helper to find category name by ID for the table
    const getCategoryName = (id?: number) => {
        if (!id) return "Uncategorized";
        const category = categories.find(c => c.id === id);
        return category ? category.name : "Unknown";
    };

    // const handleLogout = async () => {
    //     await fetch("http://localhost:8080/logout")
    // };

    // Loading Skeleton Component
    const Skeleton = () => (
        <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4">
                        <div className="h-12 bg-gray-200 rounded w-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (loading) return (
        <div className="min-h-screen bg-gray-50 p-8">
            <Skeleton />
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">

            {/* Header Section */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                            {/* Icon Placeholder */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
                    </div>

                    <button
                        // onClick={handleLogout}
                        className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

                {/* Products*/}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Products</h2>
                        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border shadow-sm">
                            Total: {products.length}
                        </span>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Product Name</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4 text-right">Price</th>
                                    <th className="px-6 py-4 text-center">Status</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-indigo-50/50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-500 font-mono">#{product.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{product.name}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    {getCategoryName(product.categoryId)}
                                                </span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-medium text-gray-900">
                                            ${product.price.toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                                                    Active
                                                </span>
                                        </td>
                                    </tr>
                                ))}
                                {products.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            No products found.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-mono text-gray-400">ID: {category.id}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                                <p className="text-sm text-gray-500">
                                    {products.filter(p => p.categoryId === category.id).length} items
                                </p>
                            </div>
                        ))}

                        {/* Add New Category Card (Visual Placeholder) */}
                        <button className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-gray-300 text-gray-400 hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="text-sm font-medium">Add Category</span>
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
}
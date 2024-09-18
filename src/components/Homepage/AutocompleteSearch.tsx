import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'; // Import Link from Next.js

const AutocompleteSearch = ({ searchType }: { searchType: string }) => {
    const [query, setQuery] = useState('');
    // const [suggestions, setSuggestions] = useState([]);

    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    interface Suggestion {
        title: string;
        type: string;
        slug: string;
    }

    interface SearchResponse {
        data: Suggestion[];
    }

    useEffect(() => {
        if (query.length > 0) {
            const fetchSuggestions = async () => {
                try {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_CLERK_API_URL}api/v1/search`, {
                        params: { query, type: searchType, names: true }
                    });
                    setSuggestions(response?.data);
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                }
            };
            fetchSuggestions(); 8
        } else {
            setSuggestions([]);
        }
    }, [query, searchType]);

    return (
        <>
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="relative box-border flex h-10 w-full lg:w-full sm:w-[90%]  flex-row items-center justify-between rounded-3xl bg-default-white px-6 py-2 font-others-capitalised text-xs font-medium [border:none]" type="text" placeholder="Search places , package , experience"
            />
            {query && suggestions.length > 0 && (
                <ul className="absolute py-3 left-auto lg:left-0 top-[55px] w-full z-10 sm:w-[90%] md:w-[92%] lg:w-[100%] max-h-[300px] overflow-x-hidden overflow-y-auto bg-[rgba(255,255,255)] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {suggestions.map((suggestion, index) => (
                        <>{console.log(suggestion, "suggestion inside map")}
                            <div key={index}>
                                <li className=" list-none px-5 py-3 hover:bg-slate-200"><Link className="text-[14px] text-gray-700 no-underline" href={suggestion.type + '/' + suggestion.slug}> {suggestion?.title} </Link></li>
                            </div>
                        </>
                    ))}
                </ul>
            )}
        </>
    );
};

export default AutocompleteSearch;

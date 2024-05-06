"use client";
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

import { Input } from "./ui/input"
import queryString from "query-string";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const categoryId = searchParams.get("categoruId");
    const name = searchParams.get("name");

    const [value, setValue] = useState(name || "");
    const debounceValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const query = {
            name: debounceValue,
            category: categoryId,
        };

        const url = queryString.stringifyUrl({
            url: window.location.href,
            query: query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }, [debounceValue, router, categoryId]);

    return (
        <div className="relative">
            <Search className="absolute h-4 w-3 top-3 left-4 text-muted-foreground" />
            <Input placeholder="Search...." className="pl-10 bg-primary/10" onChange={onChange} value={value} />
        </div>
    )
}